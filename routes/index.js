/*
 * GET home page.
 */

var mysql = require('mysql');
var connection = require('../functions/connection');

exports.index = function (req, res) {
	res.render('index', {
		title: 'Apprenticeship Object EAD'
	});
};

exports.login = function (req, res) {
	var user = req.body.username;
	var pass = req.body.password;

	connection.connect();


	var sql = 'SELECT * FROM type_users WHERE type_user_description = ' + connection.escape(user);
	
	connection.query(sql, function (err, rows, fields) {
		if (err) throw err;

		res.json(rows);
		// rows.forEach(function(data, index) {
		// 	if (data.username === user) {
		// 		res.json(data);
		// 	}
		// });
	});

	connection.end();
};