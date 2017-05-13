//Dependencies
var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

//Routes - Serves
var index = require('./routes/index');
var priority_request = require('./routes/priority_request');
var measurements = require('./routes/measurements');

var app = express();
//Database Connector
var database = require('./database_manager.js')

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
//Handles Register
app.use('/priority', priority_request)
app.use('/measurements', measurements)

//Handles POST requests to measurements endpoint.
//Allows the client to add new measurements to the system
app.post('/measurements', function(req, res) {
    var machine_id = req.query.machine_id;
    var api_key = req.query.apikey;
    var value = req.query.value;
    var timestamp = req.query.timestamp;
    if(api_key != null){
        database.validateApiKey(req.query.apikey,function (error, results) {
            if (error) throw error;

            if (results.length > 0) {
                api_key = results[0].api_key;
                console.log('Request from: Api_Key[', api_key, ']');
                if(machine_id != null && value != null && timestamp != null){
                    database.new_measurement(machine_id,value,timestamp, function(error,results){
                        console.log("New shit in db");
                        res.send("");
                    })
                }else{ res.send("Error: Missing data. Required: machine_id, value, timestamp, apikey")}
            }else{
                res.send("Error: Invalid apikey");
                return;
            }
        })
    }

});
// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use('/', index);
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
