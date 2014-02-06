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

	connection.connect();

	connection.query('SELECT * FROM users WHERE username = ?', [user], function (err, rows, fields) {
		if (err) throw err;

		res.status(200).json(rows);
	});

	connection.end();
};