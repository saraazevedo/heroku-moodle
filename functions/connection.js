var mysql = require('mysql');

// var connection = mysql.createConnection({
// 	host: 'us-cdbr-east-05.cleardb.net',
// 	user: 'b7d0fa1174c963',
// 	password: 'b73df636',
// 	database: 'heroku_3ab538e8ba3566a'
// });

module.exports = mysql.createConnection({
	host: 'localhost',
	user: 'root',
	password: '',
	database: 'moodle_project'
});