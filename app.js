/**
 * Module dependencies.
 */

var teacher = require('./routes/teacher');
var student = require('./routes/student');
var admin = require('./routes/admin');
var login = require('./routes/login');

var express = require('express');
var routes = require('./routes');
var http = require('http');
var path = require('path');

var app = express();

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
	app.use(express.errorHandler());
}

app.get('/', routes.index);
app.get('/ead-admin', admin.index);
app.get('/ead-teacher', teacher.index);
app.get('/ead-student', student.index);

app.post('/login', login.login);


http.createServer(app).listen(app.get('port'), function () {
	console.log('Express server listening on port ' + app.get('port'));
});