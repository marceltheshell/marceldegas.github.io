var express = require('express');
var app = express();
var path = require("path");
var bodyParser = require("body-parser");
var views = path.join(process.cwd(), "views/");
var port = process.env.PORT || 3000;

// CONFIG 
// serve js & css files
app.use("/static", express.static("public"));
app.use("/vendor", express.static("bower_components"));

app.get('/', function(req, res) {
	var indexPath = path.join(views, "index.html");
	res.sendFile(indexPath);
});	

// ROUTES 


app.listen(port, function(req, res) {
	console.log('now listening on localhost3000');
});
