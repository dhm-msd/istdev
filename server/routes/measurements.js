var express = require('express');
var router = express.Router();
var database = require('../database_manager.js')

/* GET measurements data. */
router.get('/', function(req, res, next) {
    //API KEY VALIDATION
    if(req.query.apikey != null){
        database.validateApiKey(req.query.apikey,function (error, results) {
            if (error) throw error;

            if(results.length > 0) {
                api_key = results[0].api_key;
                console.log('Request from: Api_Key[', api_key,']');

                if(req.query.machine_id != null){
                    //give measurements of given machine_id
                    if(req.query.date != null){
                        if(req.query.time != null){
                            //give data only for given time
                        }else{
                            //give data for the whole day
                            database.get_daily_measurements(req.query.date, req.query.machine_id, function(error, results){
                                if(error) throw error;
                                if(results.length > 0){
                                    res.contentType('application/json');
                                    res.send(JSON.stringify(results))
                                }
                            })
                        }
                    }else{
                        res.send("Error: Missing date");
                        return;
                    }
                }else{
                    res.send("Error: Missing machine_id");
                    return;
                }
            }else{
                res.send("Error: Invalid api_key");
                return;
            }
        });
    }else{
        res.send("Error: Invalid api_key");
        return;
    }
});

module.exports = router;
