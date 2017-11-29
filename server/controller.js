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
    //
    dbInstance
      .addToCart([req.body.product_name, req.body.product_price])
      .then(response => res.status(200).json(response));
  },
  getProducts: (req, res, next) => {
    const dbInstance = req.app.get('db');
    dbInstance.getProducts().then(products => res.status(200).json(products));
  }
  /////////////////////////
};
