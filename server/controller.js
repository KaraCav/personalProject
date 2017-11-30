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
    console.log(req.body.product_name, req.body.product_price);
    //
    dbInstance
      .addToCart([req.body.product_name, req.body.product_price])
      .then(response => res.status(200).json(response));
  },
  getProducts: (req, res, next) => {
    const dbInstance = req.app.get('db');
    console.log(dbInstance);
    dbInstance.getProducts().then(products => res.status(200).json(products));
  },
  getCart: (req, res, next) => {
    const dbInstance = req.app.get('db');
    dbInstance.getCart().then(products => res.status(200).json(products));
  },
  deleteFromCart: (req, res, next) => {
    console.log('id from params: ', req.params.id);
    const dbInstance = req.app.get('db');
    console.log();
    dbInstance
      .deleteFromCart(req.params.id)
      .then(products => res.status(200).json(products));
  }
  /////////////////////////
};
