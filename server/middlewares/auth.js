const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {
  if (req.headers.authorization) {
    const token = req.headers.authorization.split(" ")[1];
    console.log(token);
    jwt.verify(token, process.env.SECRET_KEY, (err, decoded) => {
      if (err) {
        next(Error("Failed auth"));
      } else {
        req.decoded = decoded;
        next();
      }
    });
  } else {
    next(Error("No token was provided"));
  }
};
