var mysql = require('mysql'),
	HOST = 'localhost',
	MYSQL_USER = 'root',
	MYSQL_PASS = '',
	DATABASE = 'moodle_project';

// module.exports = mysql.createConnection({
// 	host: 'us-cdbr-east-05.cleardb.net',
// 	user: 'b7d0fa1174c963',
// 	password: 'b73df636',
// 	database: 'heroku_3ab538e8ba3566a'
// });

module.exports = mysql.createConnection({
	host: HOST,
	user: MYSQL_USER,
	password: MYSQL_PASS,
	database: DATABASE
});