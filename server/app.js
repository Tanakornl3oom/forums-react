var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require('cors');
const bodyParser = require('body-parser');

var apiRouter = require('./routes/api');
var indexRouter = require('./routes/index');
var mongoose = require('mongoose');

var app = express();

const connURL = 'mongodb://localhost:27017/forums';

mongoose
    .connect(connURL, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => {
        console.log(connURL);
        console.log(`MongoDB connected`);
    })
    .catch(e => {
        console.log(`MongoDB connection error ${e}`);
        process.exit(-1);
    });

app.use(cors());
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/api', apiRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
    next(res.status(404).send({ status: 404, messages: 'not found' }));
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
