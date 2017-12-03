module.exports = {
  createNewUserByName: (req, res, next) => {
    const dbInstance = req.app.get('db');
    /////////////////////////
    dbInstance
      .createNewUserByName([req.body.student_name, req.body.parent_name])
      .then(response => res.status(200).json(response))
      .catch(() => res.status(500).json());
  },
  ///////// add to cart ////////
  //////////////////////////////
  addToCart: (req, res, next) => {
    const dbInstance = req.app.get('db');
    //console.log(req.body.product_name, req.body.product_price);
    //
    dbInstance
      .addToCart([req.body.product_name, req.body.product_price])
      .then(response => res.status(200).json(response));
  },
  getProducts: (req, res, next) => {
    const dbInstance = req.app.get('db');
    // console.log(dbInstance);
    dbInstance.getProducts().then(products => res.status(200).json(products));
  },
  getCart: (req, res, next) => {
    const dbInstance = req.app.get('db');
    dbInstance.getCart().then(products => res.status(200).json(products));
  },
  deleteFromCart: (req, res, next) => {
    // console.log('id from params: ', req.params.id);
    const dbInstance = req.app.get('db');
    dbInstance
      .deleteFromCart(req.params.id)
      .then(products => res.status(200).json(products));
  },
  //////////////////GET APPTS ////////////////////
  getAppts: (req, res, next) => {
    const dbInstance = req.app.get('db');
    // console.log(dbInstance);
    dbInstance.getAppts().then(appts => res.status(200).json(appts));
  },
  addAppt: (req, res, next) => {
    const dbInstance = req.app.get('db');
    dbInstance
      .addAppt([
        req.body.student_name,
        req.body.appt_date,
        req.body.appt_time,
        req.body.notes
      ])
      .then(response => res.status(200).json(response));
  },
  deleteAppt: (req, res, next) => {
    const dbInstance = req.app.get('db');
    console.log(req.params.appt_id);
    dbInstance
      .deleteAppt([req.params.appt_id])
      .then(products => res.status(200).json(products));
  }
};
