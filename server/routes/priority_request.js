var express = require('express');
var router = express.Router();
var database = require('../database_manager.js')

/* GET priority_request listing. */
router.get('/', function(req, res, next) {
    //API KEY VALIDATION
    if(req.query.apikey != null){
        database.validateApiKey(req.query.apikey,function (error, results) {
            if (error) throw error;

            if(results.length > 0) {
                api_key = results[0].api_key;
                console.log('Request from: Api_Key[', api_key,']');

                if(req.query.machine_id != null){

                    if(req.query.relation_id != null){
                        //relationId = the id of the relation between the machines that combine electr
                        res.send('Gave id:'+ req.query.machine_id);
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
    }else{
        res.send("Error: Invalid api_key");
        return;
    }
});

module.exports = router;
