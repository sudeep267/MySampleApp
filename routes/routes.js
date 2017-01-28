var requests = require('config/requests');
var request = require('request');
 
 
module.exports = function(app) {
 
 
 
    app.get('/', function(req, res) {
 
        res.end("Server-Project-Heorku");
    });
 
 
    app.post('/login',function(req,res){
        var name = req.body.name;
            var mobno = req.body.mobno;
            var reg_id = req.body.reg_id;
 
        requests.login(name,mobno,reg_id,function (found) {
            console.log(found);
			console.log("Logged in with :"+name+" "+mobno+" "+reg_id);
            res.json(found);
    });
    });
 
    app.post('/send',function(req,res){
        var fromu = req.body.from;
        var fromn = req.body.fromn;
            var to = req.body.to;
            var msg = req.body.msg;
 
 
        requests.send(fromn,fromu,to,msg,function (found) {
            console.log(found);
            res.json(found);
			console.log("Sending from :"+fromu+" "+fromn+" To "+to+" Msg "+msg);
    });
    });
 
    app.post('/getuser',function(req,res){
        var mobno = req.body.mobno;
 
        requests.getuser(mobno,function (found) {
            console.log(found);
            res.json(found);
			console.log("Getting User "+mobno);
    });
    });
 
    app.post('/logout',function(req,res){
        var mobno = req.body.mobno;
 
 
        requests.removeuser(mobno,function (found) {
            console.log(found);
            res.json(found);
			console.log("Logging off "+mobno);
    });
    });
 
 
};
	