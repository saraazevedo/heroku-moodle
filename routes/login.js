/*
 * POST login validate.
 */

var mysql = require('mysql');

var connection = mysql.createConnection({
	host: 'localhost',
	user: 'root',
	password: '',
	database: 'moodle_project'
});;

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
					connection.end();
					res.send({
						redirectTo: '/ead-admin/'
					});
				break;
				case 2:
					connection.end();
					res.send({
						redirectTo: '/ead-admin/'
					});
				break;
				case 3:
					connection.end();
					res.send({
						redirectTo: '/ead-teacher/'
					});
				break;
				case 4:
					connection.end();
					res.send({
						redirectTo: '/ead-student/'
					});
				break;
				default:
					connection.end();
					res.send({
						redirectTo: '/ead-student/'
					});
				break;
			}
		});
	});
};