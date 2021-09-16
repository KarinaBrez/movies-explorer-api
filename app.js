require('dotenv').config();

const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const { errors } = require('celebrate');

const mongoose = require('mongoose');
const { errLogger, apiLogger } = require('./middlewares/logger');
const errorServer = require('./errors/errorServer');

const { PORT = 3000 } = process.env;
const app = express();

app.use(helmet());
app.use(cors());

mongoose.connect('mongodb://localhost:27017/bitfilmsdb', {
  useNewUrlParser: true,
});

app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(apiLogger);

app.use('/', require('./routes/index'));

app.use(errLogger);
app.use(errors());

app.use(errorServer);

app.listen(PORT, () => {

});
