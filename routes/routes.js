//var requests = require('config/requests');
var request = require('request');
 
 
module.exports = function(app) {
 
 
 
    app.get('/', function(req, res) {
 
        res.end("This is Sudeep's project server . . . Server-Project-Heorku");
    });
 
 
    app.post('/sendm',function(req,res){
        var msg = req.body.msg;
		res.send('Hello World! This is Sudeep...Message from app: '+msg)
 
    }); 
 
};
	