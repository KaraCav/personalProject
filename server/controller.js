module.exports = {
  createNewUserByName: (req, res, next) => {
    const dbInstance = req.app.get('db');
    // console.log('fucking snake', dbInstance);
    dbInstance
      .createNewUserByName([req.body.student_name, req.body.parent_name])
      .then(response => res.status(200).json(response))
      .catch(() => res.status(500).json());
  }
};
