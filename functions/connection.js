var mysql = require('mysql');

// module.exports = mysql.createConnection({
// 	host: 'us-cdbr-east-05.cleardb.net',
// 	user: 'b7d0fa1174c963',
// 	password: 'b73df636',
// 	database: 'heroku_3ab538e8ba3566a'
// });

module.exports = mysql.createConnection({
	host: 'localhost',
	user: 'root',
	password: 'xxx',
	database: 'moodle_project'
});