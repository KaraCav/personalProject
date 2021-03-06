require('dotenv').config();
const express = require('express');
const { json } = require('body-parser');
const cors = require('cors');
const massive = require('massive');
const controller = require('./controller');
// const config = require('./config');
const session = require('express-session');
const passport = require('passport');
const Auth0Strategy = require('passport-auth0');

// const connectionString = require('./config').massive;
// const { secret } = require('./config').session;
// const { domain, clientID, clientSecret } = require('./config.js').auth0;

const app = express();

//const { secretKey } = require('./config.js').stripe;

const configureRoutes = require('./routes');
const stripe = require('stripe')(process.env.STRIPE_SECRET);
configureRoutes(app);

app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false
  })
);

//SERVE FRONT END
app.use(express.static(`${__dirname}/../build`));

massive(process.env.DATABASE_URL)
  .then(db => {
    app.set('db', db);
    // console.log(db);
  })
  .catch(console.log);

app.use(json());
app.use(cors());

app.use(passport.initialize());
app.use(passport.session());
app.use(express.static(`${__dirname}/../build`));

passport.use(
  new Auth0Strategy(
    {
      domain: process.env.DOMAIN,
      clientID: process.env.AUTHCLIENTID,
      clientSecret: process.env.AUTH0SECRET,
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
    successRedirect: '/MentorPage'
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
//////////////// DELETE FROM CART ////////////////////
//
app.delete('/api/item_delete/:id', controller.deleteFromCart);
//
/////////////// DELETE FROM CART /////////////////

//app.post('/api/reqappt', controller.createNewUserByName);

app.get('/api/products', controller.getProducts);

/////////////// GET APPTS //////////////
//
app.get('/api/appts', controller.getAppts);
//
////////////////////////////
//
////////////// Make New Appts ////////////
//
app.post('/api/addAppt', controller.addAppt);
//
////////////// Make New Appts ////////////
//
////////////// DELETE APPTS //////////////
app.delete('/api/delete_appt/:appt_id', controller.deleteAppt);

app.post('/api/cart', controller.addToCart);
app.get('/api/gateway_cart', controller.getCart);
app.post('/checkout', (req, res) => {
  stripe.charges.create(req.body, (stripeErr, stripeRes) => {
    if (stripeErr) {
      res.status(500).send({ error: stripeErr });
    } else {
      res.status(200).send({ success: stripeRes });
    }
  });
});

const port = process.env.PORT || 3001;

const path = require('path');
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '/../build/index.html'));
});

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
