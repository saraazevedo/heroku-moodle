/*
 * GET home page.
 */

var mysql = require('mysql');

// var connection = mysql.createConnection({
// 	host: 'us-cdbr-east-05.cleardb.net',
// 	user: 'b7d0fa1174c963',
// 	password: 'b73df636',
// 	database: 'heroku_3ab538e8ba3566a'
// });

var connection = mysql.createConnection({
	host: 'localhost',
	user: 'root',
	password: '',
	database: 'moodle_project'
});

exports.index = function (req, res) {

	var user = req.body.username;
	var pass = req.body.password;

	connection.connect();

	connection.query('SELECT * FROM users', function (err, rows, fields) {
		if (err) throw err;

		rows.forEach(function(data, index) {
			if (data.username === user) {
				res.send(data);
			}
		});
	});

	connection.end();

	res.render('index', {
		title: 'Apprenticeship Object EAD'
	});
};