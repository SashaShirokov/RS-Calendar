// var express = require("express");
//
// // Create our app
// var app = express();
// const PORT = process.env.PORT || 3000;
//
// app.use(function(req, res, next) {
// 	if (req.headers['x-forward-proto'] === 'http') {
// 		next();
// 	} else {
// 		res.redirect('http://' + req.hostname + req.url);
// 	}
// });
//
// app.use(express.static("docs"));
//
// app.listen(PORT, function() {
// 	console.log("Express server is up on port " + PORT);
// });

var express = require("express");

// Create our app
var app = express();

app.use(express.static("docs"));

app.listen(3000, function() {
	console.log("Express server is up on port 3000");
});
