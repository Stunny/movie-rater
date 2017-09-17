var express = require('express');
var app = express();

//--Middleware
var pug = require("pug");
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var errorHandler = require('errorhandler');
var path = require('path');
var morgan = require('morgan');
var port = require('./constants').APP_PORT;
var apiRoutes = express.Router();

//--Enviroment configuration
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(methodOverride());
app.use(morgan('dev'));
app.set('view engine', 'pug');
app.set("views", path.join(__dirname, "view"));

app.use('/api', apiRoutes);


//---Proves per a depuracio
app.get('/', function(req, res){
	res.render("form");
});

//---Error handling

if('development' == app.get('env')){
	app.use(errorHandler());
}

//---Server start
app.listen(port);
console.log('Servidor Express escuchando el puerto: '+port);