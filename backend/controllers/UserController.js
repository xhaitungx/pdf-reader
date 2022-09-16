const User = require("../models/UserModel");
const {connect} = require("../config/db");
module.exports = {
  create: function (req, res) {
    connect();
    const payload = {
      email: "xhaitungx",
      password: "Haitung1",
    };
    User.create(payload).then((result) => console.log(result._id.toString()));
  },
  Login: function (req, res) {
    connect();
    const {email, password} = req.body;
    User.findOne({email,password}).then((result) => res.status(200).json({userId:result._id}));
  },
};
