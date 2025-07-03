var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var indexRouter = require('./routes/Router');
var indexAuth = require('./routes/account/auth');
var sportsRoute = require('./routes/sports/sports');
var formsRoute = require('./routes/account/form');
require('dotenv').config();

const mongo= require('mongoose');
var app = express();


// DEBUG=express:* npm start



// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use('/', sportsRoute);
app.use('/', indexAuth);
app.use('/', indexRouter);
app.use('/', formsRoute);




// Replace "Ecommerce" with your actual database name
mongo.connect('mongodb://localhost:27017/Ecommerce').then(() => {

  console.log('✅ Connected to MongoDB');

}).catch((err) => {

  console.error('❌ MongoDB connection error:', err);
  
});



// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
