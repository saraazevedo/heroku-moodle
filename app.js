/**
 * Module dependencies.
 */

var teacher = require('./routes/teacher');
var student = require('./routes/student');
var admin = require('./routes/admin');
var login = require('./routes/login');
var chat = require('./routes/chat');

var io = require('socket.io').listen(4000);
var express = require('express');
var routes = require('./routes');
var http = require('http');
var path = require('path');

var app = express();

//Socket
io.configure(function () {
	io.set('transports', ['websocket', 'flashsocket']);
});

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

/* Index */
app.get('/', routes.index);

/* Admin */
app.get('/ead-admin/:id', admin.index);
app.get('/ead-admin/:id/access/:newuser', admin.access);
app.get('/ead-admin/:id/register_team', admin.register_team);
app.get('/ead-admin/:id/vinculate_users_team', admin.vinculate_users_team);

/* Teacher */
app.get('/ead-teacher/:id', teacher.index);
app.get('/ead-teacher/:id/activit/:activit', teacher.activit);
app.get('/ead-teacher/:id/discipline/:discipline', teacher.discipline);
app.get('/ead-teacher/:id/create_activit/:newactivit', teacher.create_activit);

/* Student */
app.get('/ead-student/:id', student.index);
app.get('/ead-student/:id/activit/:activit', student.activit);
app.get('/ead-student/:id/discipline/:discipline', student.discipline);

/* Functions */
app.post('/login', login.login);
app.post('/ead-admin/create_user', admin.create_user);

http.createServer(app).listen(app.get('port'), function () {
	console.log('Express server listening on port ' + app.get('port'));
});

/* Chat */
io.sockets.on('connection', function (socket) {
	socket.emit('news', {
		hello: 'world'
	});
	socket.on('my other event', function (data) {
		console.log(data);
	});
});