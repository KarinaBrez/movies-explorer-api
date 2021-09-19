/* eslint-disable import/extensions */
const router = require('express').Router();
const userRoutes = require('./users.js');
const moviesRoutes = require('./movies');
const auth = require('../middlewares/auth');

const { createUser, loginUser } = require('../controllers/users');

const NotFoundError = require('../errors/notFoundError');
const { signupValidate, signinValidate } = require('../middlewares/validate');

router.post('/signin', signinValidate, loginUser);
router.post('/signup', signupValidate, createUser);

router.use('/', auth, userRoutes, moviesRoutes);

router.all('/*', () => {
  throw new NotFoundError('Страница не найдена');
});

module.exports = router;
