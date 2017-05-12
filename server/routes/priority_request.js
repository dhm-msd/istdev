var express = require('express');
var router = express.Router();
var mysql      = require('mysql');

/* GET priority_request listing. */
router.get('/', function(req, res, next) {
    //API KEY VALIDATION
    if(req.query.apikey != null){
        var connection = mysql.createConnection({
            host     : 'localhost',
            user     : 'root',
            password : '<>',
            database : 'nodejsproject'
        });
        connection.connect();
        connection.query('SELECT api_key from users WHERE api_key ='+req.query.apikey, function (error, results, fields) {
            if (error) throw error;
            if(results.length > 0) {
                api_key = results[0].api_key;
                console.log('Request from: Api_Key[', api_key,']');

                if(req.query.machine_id != null){
                    res.send('Gave id:'+ req.query.machine_id);
                    if(req.query.relationId != null){
                        //relationId = the id of the relation between the machines that combine electr
                        relationId = req.query.relation_id;

                    }else{
                        res.send("Missing relation_id");
                    }
                }else{
                    res.send("Missing machine_id");
                    return;
                }
            }else{
                res.send("Error: Invalid api_key");
                return;
            }
        });

        connection.end();
    }else{
        res.send("Error: Invalid api_key");
        return;
    }
});

module.exports = router;
