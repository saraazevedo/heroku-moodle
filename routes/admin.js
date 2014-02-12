/*
 * Routers module Admin
 */

var md5 = require('MD5');
var mysql = require('mysql');
var connection = require('../functions/connection');

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
	var date = new Date();
	var now = date.getFullYear() + '/' + date.getMonth() + '/' + date.getDate() + ' ' + date.getHours() +':'+ date.getMinutes() +':'+ date.getSeconds();
	var data = {
		username: req.body.username,
		password: md5(req.body.password),
		first_name: req.body.first_name,
		last_name: req.body.last_name,
		email: req.body.email,
		date_register: now,
		status: 1,
		type_users: parseInt(req.body.id, 10),
		image_user_path: '/'+req.body.id+'/documents/image.png',
		info: req.body.info
	}

	var query = connection.query('INSERT INTO users SET ?', data, function (err, result) { 
		if (err) throw err;
		res.json({status: 200, message: 'success'});
	});

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