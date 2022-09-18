const User = require("../models/UserModel");
const { connect } = require("../config/db");
module.exports = {
  create: function (req, res) {
    connect();
    const { email, password } = req.body;
    console.log(email,
      password);
    User.create({
      email,
      password,
    }).then((result) => res.status(200).json(result));
  },
  Login: function (req, res) {
    connect();
    const { email, password } = req.body;
    User.findOne({ email, password }).then((result) =>
      res.status(200).json({ userId: result._id })
    );
  },
};
