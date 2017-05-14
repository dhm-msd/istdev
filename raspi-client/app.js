var gpio = require('rpi-gpio');
var async = require('async');
var http = require('http');
var querystring = require('querystring');
//Sample GPIO setup procedure
async.parallel([
    function(callback) {
        gpio.setup(11, gpio.DIR_OUT, callback)
    },
    function(callback) {
        gpio.setup(13, gpio.DIR_OUT, callback)
    },
    function(callback) {
        gpio.setup(15, gpio.DIR_OUT, callback)
    },
], function(err, results) {
    console.log('Pins ready to dance');
    write();//GPIO hello_world dance

    //Connect to a server hook to receive commands
    var request = http.request({
        port: 3000,
        host: '1.1.1.1',
        method: 'GET',
        path: '/update'
    });
    request.on('response', function( res ) {
        res.on('data', function( data ) {
            //Messages/Commands Triggers
            switch(data.toString().toLowerCase()) {
                case "measurements\n":
                    //dummy data
                    var post_data = querystring.stringify({
                        'machine_id' : 1,
                        'apikey': '12345',
                        'value': '1',
                        'timestamp' : '2017-05-14 00:00:00'
                    });

                    //Request parameters
                    var api_request = http.request({
                       port:3000,
                       host:'1.1.1.1',
                       method: 'POST',
                       path: '/measurements',
                       headers: {
                            'Content-Type': 'application/x-www-form-urlencoded',
                            'Content-Length': Buffer.byteLength(post_data)
                       }
                    });
                    //Send Request and close connection.
                    api_request.write(post_data);
                    api_request.end();
                    break;
                case "switch_on\n":
                    gpio.write(11, false, function(){
                        console.log("switched on by server request")
                    });
                    gpio.write(13, false, function(){
                        console.log("switched on by server request")
                    });
                    gpio.write(15, false, function(){
                        console.log("switched on by server request")
                    });
                    break;
                case "switch_off\n":
                    gpio.write(11,true,function(){
                        console.log("switched off by server request")
                    })
                    gpio.write(13,true,function(){
                        console.log("switched off by server request")
                    })
                    gpio.write(15,true,function(){
                        console.log("switched off by server request")
                    })
                    break;
                case "exit_app\n":
                    gpio_reset();
                default:

            }
            console.log("Recieved message: "+data.toString());
        } );
    } );
    request.end();
});
 
function write() {
    async.series([
        function(callback) {
            delayedWrite(11, true, callback);
        },
        function(callback) {
            delayedWrite(13, true, callback);
        },
        function(callback) {
            delayedWrite(15, true, callback);
        },
        function(callback) {
            delayedWrite(11, false, callback);
        },
        function(callback) {
            delayedWrite(13, false, callback);
        },
        function(callback) {
            delayedWrite(15, false, callback);
        },
    ], function(err, results) {
        console.log('Setup complete');

    });
};

function gpio_reset(){
    gpio.destroy(function(){
        console.log('Closed pins, now exit')
        process.exit()
    })
}
function delayedWrite(pin, value, callback) {
    setTimeout(function() {
        gpio.write(pin, value, callback);
    }, 500);
}
