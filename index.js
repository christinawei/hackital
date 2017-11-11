var express = require('express');

var app = express(); //one object for that server
var path = require('path');

app.get('/', function(req, res){
	res.sendFile('index.html')
})
app.get('/funfacts', function(req, res){
	res.sendFile('funfacts.html')
})
app.use(express.static(__dirname));
app.get('/game', function(req, res) {
   res.sendFile(__dirname + "/game.html");
});

var port = process.env.PORT || 3000;
app.listen(port, function() {
	console.log("Server started, listening on port "+port);
});
