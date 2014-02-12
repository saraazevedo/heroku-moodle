var mysql = require('mysql'),
	HOST = 'localhost',
	MYSQL_USER = 'root',
	MYSQL_PASS = '',
	DATABASE = 'moodle_project';
	// HOST = 'us-cdbr-east-05.cleardb.net',
	// MYSQL_USER = 'b7d0fa1174c963',
	// MYSQL_PASS = 'b73df636',
	// DATABASE = 'heroku_3ab538e8ba3566a'

module.exports = mysql.createConnection({
	host: HOST,
	user: MYSQL_USER,
	password: MYSQL_PASS,
	database: DATABASE
});