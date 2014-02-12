/*
 * GET Chat page.
 */
var io = require('socket.io');

exports.index = function (req, res) {
	io.sockets.on('connection', function (socket) {
		socket.emit('news', {
			hello: 'world'
		});
		socket.on('my other event', function (data) {
			console.log(data);
		});
	});
};