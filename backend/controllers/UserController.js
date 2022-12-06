const User = require("../models/UserModel");
const { connect } = require("../config/db");
module.exports = {
  create: function (req, res) {
    connect();
    const { payload } = req.body;
    console.log(payload);
    User.create(payload).then((result) => res.status(200).json({ userId: result._id }));
  },
  Login: function (req, res) {
    connect();
    const { payload } = req.body;
    User.findOne({
      email: req.body.email,
      password: req.body.password
    }).then((result) => res.status(200).json({ userId: result?._id })
    )
  },
};
