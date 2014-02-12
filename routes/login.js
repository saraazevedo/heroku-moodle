/*
 * POST login validate.
 */

var md5 = require('MD5');
var mysql = require('mysql');
var connection = require('../functions/connection');

exports.login = function (req, res) {
	var user = req.body.username;
	var pass = md5(req.body.password);

	var obj = {
		username: user,
		password: pass
	};

	connection.query('SELECT * FROM users WHERE username = ? AND password = ?', [user, pass], function (err, rows, fields) {
		if (err) throw err;

		rows.forEach(function (data) {
			switch (data.type_users) {
				case 1: 
					res.send({
						redirectTo: '/ead-admin/' + data.id + '/'
					});
				break;
				case 2:
					res.send({
						redirectTo: '/ead-admin/' + data.id + '/'
					});
				break;
				case 3:
					res.send({
						redirectTo: '/ead-teacher/' + data.id + '/'
					});
				break;
				case 4:
					res.send({
						redirectTo: '/ead-student/' + data.id + '/'
					});
				break;
				default:
					res.send({
						redirectTo: '/ead-student/' + data.id + '/'
					});
				break;
			}
		});
	});
};