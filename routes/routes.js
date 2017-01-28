//var requests = require('config/requests');
var request = require('request');
 
 
module.exports = function(app) {
 
 
 
    app.get('/', function(req, res) {
 
        res.end("This is Sudeep's project server in Heroku !!");
    });
 
 
    app.post('/sendm',function(req,res){
        var msg = req.body.msg;
		res.end('Hello World! This is Sudeep...Message from app: '+msg)
 
    }); 
 
};
	