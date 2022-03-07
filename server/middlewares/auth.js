const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
    if (req.headers['authorization']) {
        const token = req.headers.aut
    }
    else {
        next(Error('No token was provided'));
    }
}