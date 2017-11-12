var express = require('express');

var app = express(); //one object for that server
var path = require('path');

app.get('/', function(req, res){
	res.sendFile(path.join(__dirname, '/html/index.html'));
})
app.get('/info', function(req, res){
	res.sendFile(path.join(__dirname, '/html/info.html'));
})
app.get('/report', function(req, res){
	res.sendFile(path.join(__dirname, '/html/report.html'));
})
app.get('/aboutus', function(req, res){
	res.sendFile(path.join(__dirname, '/html/aboutus.html'));
})
app.use(express.static(__dirname));
app.get('/game', function(req, res) {
   res.sendFile(__dirname + "/html/game.html");
});
app.get('/prevention', function(req, res) {
   res.sendFile(__dirname + "/html/prevention.html");
});
app.get('/prevalence', function(req, res) {
   res.sendFile(__dirname + "/html/prevalence.html");
});
app.get('/terminology', function(req, res) {
   res.sendFile(__dirname + "/html/terminology.html");
});


var port = process.env.PORT || 3000;
app.listen(port, function() {
	console.log("Server started, listening on port "+port);
});
