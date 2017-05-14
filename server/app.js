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
//var demo_request = require('./routes/demo')
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


//These routes will be used to demo the server-client communication and control
app.use('/demo_on', demo_request_on)
app.use('/demo_off', demo_request_off)

function demo_request_on(req, res) {
    res.send("Demo ON request. Connected clients: "+connected_clients.length)
    connected_clients.forEach(function(entry) {
        console.log(entry);
        entry.write("switch_on\n")
    });
}
function demo_request_off(req, res) {
    res.send("Demo OFF begin. Connected clients: "+connected_clients.length)
    connected_clients.forEach(function(entry) {
        console.log(entry);
        entry.write("switch_off\n")
    });
}
//-----------------------------------------
//This method will be responsible for the server-client auto communication
//ex: Measurements,Priority change, alerts push
function heartbeat(){
    console.log('heartbeat')
    if(connected_clients.length > 0){
        connected_clients.forEach(function(entry) {
            entry.write("measurements\n")
        });
    }
}
setInterval(heartbeat, 900000) //Heartbeat is set for 15mins

//Handle for the keep-alive connection with the clients.
//The clients will connect to this hook and will listen for messages/commands to execute
app.get('/update', updateMiddleware);
var connected_clients = [];
function updateMiddleware(req, res) {
    connected_clients.push(res)
    res.setHeader('Connection', 'keep-alive');
    res.setHeader('Content-Type', 'text/event-stream');
    res.setHeader('Cache-Control', 'no-cache');
    res.writeHead(200);
    setTimeout(function() {
        res.write("measurements\n");
    }, 9000);
    setTimeout(function() {
        res.write("switch_on\n");
    }, 10000);
    setTimeout(function() {
        res.write("switch_off\n");
    }, 15000);
    console.log(connected_clients)

}

//Handles POST requests to measurements endpoint.
//Allows the client to add new measurements to the system
app.post('/measurements', function(req, res) {
    //Required POST parameters
    var machine_id = req.body.machine_id;
    var api_key = req.body.apikey;
    var value = req.body.value;
    var timestamp = req.body.timestamp;
    if(api_key != null){
        database.validateApiKey(req.body.apikey,function (error, results) {
            if (error) throw error;

            if (results.length > 0) {
                api_key = results[0].api_key;
                console.log('Request from: Api_Key[', api_key, ']');
                if(machine_id != null && value != null && timestamp != null){
                    database.new_measurement(machine_id,value,timestamp, function(error,results){
                        console.log("New Measurement for machine: "+machine_id+ " stored");//Oops
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
