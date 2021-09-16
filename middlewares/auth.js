const jwt = require('jsonwebtoken');

const { NODE_ENV, JWT_SECRET_KEY } = process.env;
const AuthError = require('../errors/authError');

const auth = (req, res, next) => {
  if (!req.cookies.jwt) {
    next(new AuthError('Необходима авторизация'));
  } else {
    const token = req.cookies.jwt;
    let payload;
    try {
      payload = jwt.verify(token, NODE_ENV === 'production' ? JWT_SECRET_KEY : 'dev-secret');
    } catch (err) {
      next(new AuthError('Необходима авторизация'));
    }

    req.user = payload;
    next();
  }
};

module.exports = auth;
