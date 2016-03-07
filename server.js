var express = require('express');
var logger = require('winston');
var parkingSlots = require('./model/parkingspot.js');

// set the logging level
logger.level = 'debug';

var backend_app = express();

// Instance of an express router.
var router = express.Router();

// All the routes will be prefixed with /api/v1
backend_app.use('/api/v1', router);


router.get('/', function(request, response){

    response.send('Hello World!!');
});


router.get('/parkingslots', function(request, response)
{
    var spots = parkingSlots.getparkingslots();
    logger.debug('/api/v1/parkingslots' , spots);
    response.json(spots);
});


var server = backend_app.listen(8081, function()
{
    var address = server.address().address;
    var port = server.address().port;
    logger.log('info','park-it Server listening on ' + address.toString() + port.toString());
});