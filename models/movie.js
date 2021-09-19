const mongoose = require('mongoose');
const validator = require('validator');

const movieSchema = new mongoose.Schema(
  {
    country: {
      required: true,
      type: String,
    },
    director: {
      required: true,
      type: String,
    },
    duration: {
      required: true,
      type: Number,
    },
    year: {
      required: true,
      type: String,
    },
    description: {
      required: true,
      type: String,
    },
    image: {
      required: true,
      type: String,
      validate: {
        validator: (value) => validator.isURL(value, { require_protocol: true }),
        message: 'Ссылка невалидна',
      },
    },
    trailer: {
      required: true,
      type: String,
      validate: {
        validator: (value) => validator.isURL(value, { require_protocol: true }),
        message: 'Ссылка невалидна',
      },
    },
    thumbnail: {
      required: true,
      type: String,
      validate: {
        validator: (value) => validator.isURL(value, { require_protocol: true }),
        message: 'Ссылка невалидна',
      },
    },
    owner: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'user',
      select: false,
    },
    movieId: {
      required: true,
      type: Number,
    },
    nameRU: {
      require: true,
      type: String,
      minlength: 1,
      maxlength: 100,
    },
    nameEN: {
      require: true,
      type: String,
      minlength: 1,
      maxlength: 100,
    },
  },
);

module.exports = mongoose.model('movie', movieSchema);
