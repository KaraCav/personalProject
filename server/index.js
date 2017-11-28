const express = require('express');
const { json } = require('body-parser');
const cors = require('cors');
const massive = require('massive');
const controller = require('./controller');
// const config = require('./config');
const session = require('express-session');
const passport = require('passport');
const Auth0Strategy = require('passport-auth0');

const connectionString = require('./config').massive;
const { secret } = require('./config').session;
const { domain, clientID, clientSecret } = require('./config.js').auth0;

const app = express();

app.use(
  session({
    secret,
    resave: false,
    saveUninitialized: false
  })
);

massive(connectionString)
  .then(db => {
    app.set('db', db);
    // console.log(db);
  })
  .catch(console.log);

app.use(json());
app.use(cors());

app.use(passport.initialize());
app.use(passport.session());

passport.use(
  new Auth0Strategy(
    {
      domain,
      clientID,
      clientSecret,
      callbackURL: '/login'
    },
    function(accessToken, refreshToken, extraParams, profile, done) {
      app
        .get('db')
        .getUserByAuthId(profile.id)
        .then(response => {
          if (!response[0]) {
            app
              .get('db')
              .createUserByAuth([profile.id, profile.displayName])
              .then(created => {
                console.log(created);
                return done(null, created[0]);
              });
          } else {
            return done(null, response[0]);
          }
        });
    }
  )
);

passport.serializeUser(function(user, done) {
  done(null, user);
});

passport.deserializeUser(function(obj, done) {
  done(null, obj);
});

app.get(
  '/login',
  passport.authenticate('auth0', {
    successRedirect: 'http://localhost:3000/MentorPage'
  })
);

app.get('/api/me', function(req, res) {
  if (!req.user) return res.status(404);
  res.status(200).json(req.user);
});

app.get('/api/test', (req, res, next) => {
  req.app
    .get('db')
    .getUsers()
    .then(response => {
      res.json(response);
    })
    .catch(console.log);
});
//
// // ADD TO CART // ///////////////////////////////
// app.post('/api/product', controller.create);
//
//
app.post('/api/reqappt', controller.createNewUserByName);
// app.get('/api/users', controller.getUsers);
app.get('/api/products', controller.getProducts);

app.post('/api/cart', controller.addProductToCart);

const port = 3001;

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
