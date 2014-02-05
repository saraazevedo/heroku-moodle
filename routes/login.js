
/*
 * Post login listing.
 */

var mysql = require('mysql');
var connection = require('../functions/connection');

exports.login = function (req, res) {
	var user = req.body.username;
	var pass = req.body.password;

	connection.connect();

	connection.query('SELECT * FROM type_users', function (err, rows, fields) {
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