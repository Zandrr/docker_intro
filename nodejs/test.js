var express = require('express'),
    http = require('http'),
    app = express(); // Make app using Express framework
app.set('port', 8000);
var server = http.createServer(app);
server.listen(app.get('port'), function() {
    console.log("Listening on port " + app.get('port'));
});
app.get('/', function(req, res) {
    res.send("Docker is so cool!");
});