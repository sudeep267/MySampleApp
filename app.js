var express  = require('express');
var connect = require('connect');
var app = express();
var port = process.env.PORT || 8080;
//var port = 3000;

/*app.get('/', function (req, res) {
	var msg = req.body;
  res.send('Hello World! This is Sudeep...Message from app: '+msg)
})*/

// Routes
 
require('./routes/routes.js')(app);

app.listen(port, function () {
  console.log('Example app listening on port'+ port)
})