var express = require("express");
var path = require("path");
var bodyParser = require("body-parser");
var session = require('express-session');
var app = express();
var routes = require('./server/config/routes.js');
var port = 6789

require('./server/config/mongoose.js')

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json())

app.use(session({
	secret: 'shhhhhh',
	resave: true,
	saveUninitialized: true,
	proxy: true
}));

app.use(express.static(path.join(__dirname, '/client/dist')));

routes(app);

app.listen(port, function() {
  console.log(`listening on port ${port}`)
 })