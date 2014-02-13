/*
 * Routers module Student
 */

var mysql = require('mysql');
var connection = require('../functions/connection');
var model = {};

exports.index = function (req, res) {
	res.render('ead-student/index', {
		layout: 'student',
		title: 'Apprenticeship Object EAD',
		user: {
			username: req.session.user.username,
			type_user: req.session.user.type_user
		}
	});
};

exports.activit = function (req, res) {
	res.render('ead-student/activit', {
		layout: 'student',
		title: 'Apprenticeship Object EAD',
		user: {
			username: req.session.user.username,
			type_user: req.session.user.type_user
		}
	});
};

exports.discipline = function (req, res) {
	res.render('ead-student/discipline', {
		layout: 'student',
		title: 'Apprenticeship Object EAD',
		user: {
			username: req.session.user.username,
			type_user: req.session.user.type_user
		}
	});
};