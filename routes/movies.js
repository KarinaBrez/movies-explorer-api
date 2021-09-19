const router = require('express').Router();
const {
  getMovies,
  createMovie,
  deleteMovie,
} = require('../controllers/movies');
const { moviesValidate, movieIdValidate } = require('../middlewares/validate');

router.get('/movies', getMovies);

router.post('/movies', moviesValidate, createMovie);

router.delete('/movies/:movieId', movieIdValidate, deleteMovie);

module.exports = router;
