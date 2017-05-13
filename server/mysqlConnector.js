/**
 * Created by dhm on 13/05/2017.
 */
// Load module
var mysql = require('mysql');
// Initialize pool
var pool      =    mysql.createPool({
    connectionLimit : 100, //important
    host     : 'localhost',
    user     : 'root',
    password : 'monkbeaster',
    database : 'nodejsproject',
    debug    :  false
});
module.exports = pool;