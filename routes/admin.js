var mysql = require('mysql');
var connection = require('../functions/connection');

/*
 * Routers module Admin
 */
exports.index = function (req, res) {
	res.render('ead-admin/index', {
		layout: 'admin',
		title: 'Apprenticeship Object EAD'
	});
};

/* access */
exports.access = function (req, res) {
	res.render('ead-admin/access', {
		layout: 'admin',
		title: 'Apprenticeship Object EAD'
	});
};

exports.create_user = function (req, res) {
	var data = {
		username: req.body.username,
		first_name: req.body.first_name,
		last_name: req.body.last_name,
		password: req.body.password,
		email: req.body.email,
		info: req.body.info
	}

//	connection.query('INSERT INTO users (username, password, first_name, last_name, email, date_register, status, type_users, image_user_path, info) VALUES' ('asdf', '912ec803b2ce49e4a541068d495ab570', 'asdf', 'asdf', 'asd@asdf.com', now(), 1, 3, '/users/id/images/img_teste.png', 'asdfasdf'));
	console.log(connection);

	res.status(200).json(data);
};

/* register_team */
exports.register_team = function (req, res) {
	res.render('ead-admin/register_team', {
		layout: 'admin',
		title: 'Apprenticeship Object EAD'
	});
};

/* vinculate_users */
exports.vinculate_users_team = function (req, res) {
	res.render('ead-admin/vinculate_users_team', {
		layout: 'admin',
		title: 'Apprenticeship Object EAD'
	});
};