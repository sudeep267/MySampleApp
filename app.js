var express = require('express');
var app = express();
var port = process.env.PORT || 8080;

app.get('/', function (req, res) {
	var msg = req.body.msg;
  res.send('Hello World! This is Sudeep...Message from app: '+ msg)
})

app.listen(port, function () {
  console.log('Example app listening on port'+ port)
})