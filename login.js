/**
 * Created by domenicovacchiano on 07/07/16.
 */

var express = require('express'),
    router = express.Router(),
    debug = require('debug')('http'),
    config= require ('./config')()

router.post('/', function (req, res,next) {
    
    debug("body %s",req.body);
    if (!req.body){
        return res.status(401).send(responseLib.errorResponse(401,"unauthorized","unauthorized"));
    }
    return res.status(200).send("This is just a test response ;-)");
});

module.exports = router;