/*
 * Module Teacher Page
 */
var mysql = require('mysql');
var conn = require('../functions/connection');


exports.index = function (req, res) {
	res.render('ead-teacher/index', {
		layout: 'teacher',
		title: 'Apprenticeship Object EAD',
		user: {
			username: req.session.user.username,
			type_user: req.session.user.type_user
		}
	});
};

exports.activit = function (req, res) {
	res.render('ead-teacher/activit', {
		layout: 'teacher',
		title: 'Apprenticeship Object EAD',
		user: {
			username: req.session.user.username,
			type_user: req.session.user.type_user
		}
	});
};

exports.create_activit = function (req, res) {
	res.render('ead-teacher/create_activit', {
		layout: 'teacher',
		title: 'Apprenticeship Object EAD',
		user: {
			username: req.session.user.username,
			type_user: req.session.user.type_user
		}
	});
};

exports.discipline = function (req, res) {
	res.render('ead-teacher/discipline', {
		layout: 'teacher',
		title: 'Apprenticeship Object EAD',
		user: {
			username: req.session.user.username,
			type_user: req.session.user.type_user
		}
	});
};