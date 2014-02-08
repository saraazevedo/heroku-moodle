/*
 * POST login validate.
 */

var mysql = require('mysql');
var connection = require('../functions/connection');

exports.login = function (req, res) {
	var user = req.body.username;
	var pass = req.body.password;

	var obj = {
		username: user,
		password: pass
	};

	connection.query('SELECT * FROM users WHERE username = ?', [user], function (err, rows, fields) {
		if (err) throw err;

		rows.forEach(function (data) {
			switch (data.type_users) {
				case 1: 
					res.send({
						redirectTo: '/ead-admin/'
					});
				break;
				case 2:
					res.send({
						redirectTo: '/ead-admin/'
					});
				break;
				case 3:
					res.send({
						redirectTo: '/ead-teacher/'
					});
				break;
				case 4:
					res.send({
						redirectTo: '/ead-student/'
					});
				break;
				default:
					res.send({
						redirectTo: '/ead-student/'
					});
				break;
			}
		});
	});
};