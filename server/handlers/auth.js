const db = require("../models");

exports.register = async (req, res, next) => {
  try {
    const user = await db.User.create(req.body);
    const { id, username } = user;

    res.status(201).json({ id, username });
  } catch (error) {
    next(error);
  }
};

exports.login = async (req, res, next) => {
  try {
    const user = await db.User.findOne({ username: req.body.username });
    // console.log(user);
    const { id, username } = user;

    const valid = await user.comparePassword(req.body.password);
    if (valid) {
      res.json({
        id,
        username,
      });
    } else {
      throw new Error("Invalid Username/Password");
    }
  } catch (error) {
    next(error);
  }
};
