const express    = require('express');
const path       = require('path');
const logger     = require('morgan');
const favicon    = require('serve-favicon');
const bodyParser = require('body-parser');
const Xray       = require('x-ray');
const xray       = Xray();
const api_routes = require('./routes');
const app        = express();
const mongoose   = require('mongoose');
require('dotenv').config();
if (process.env.NODE_ENV !== 'test') {
  mongoose.connect(process.env.MONGODB_URI);
}

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

api_routes(app);

app.use(function(req, res, next) {
  var err = new Error('Not Found');
  res.status(404).json({message: "Not found", error: err})
});

app.use(function(err, req, res, next) {
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};
  // render the error page
  res.status(err.status || 500);
  res.json({error: error, message: err.message});
});

module.exports = app;
