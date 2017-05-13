/**
 * Created by dhm on 13/05/2017.
 */
var pool = require('./mysqlConnector');

exports.executeQuery=function(query,callback){
    pool.getConnection(function(err,connection){
        if (err) {
            connection.release();
            throw err;
        }
        connection.query(query,function(err,rows){
            connection.release();
            if(!err) {
                callback(null, rows);
            }
        });
        connection.on('error', function(err) {
            throw err;
            return;
        });
    });
}

exports.validateApiKey=function(apikey,callback){
    this.executeQuery('SELECT api_key from users WHERE api_key ='+apikey,callback)
}
//Gets ALL measurements data of a machine from the database
exports.getmeasurements=function(machine_id,callback){
    this.executeQuery('SELECT time,value from measurements WHERE machine_id ='+machine_id,callback)
}
//Gets measurements data of a machine  by date from the database
exports.get_daily_measurements=function(date,machine_id,callback){
    this.executeQuery('SELECT time,value FROM measurements WHERE machine_id='+ machine_id +' AND time LIKE \''+date+'%\'',callback)
}
//Gets measurements data of a machine  by date and time from the database
exports.getmeasurements=function(time,date,machine_id,callback){
    this.executeQuery('SELECT time,value FROM measurements WHERE machine_id='+ machine_id +' AND time LIKE \''+date+' '+time+'\'',callback)
}