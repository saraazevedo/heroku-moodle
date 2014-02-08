/*
 * Module Teacher Page
 */

exports.index = function (req, res) {
	res.render('ead-teacher/index', {
		layout: 'teacher',
		title: 'Apprenticeship Object EAD'
	});
};

exports.activit = function (req, res) {
	res.render('ead-teacher/activit', {
		layout: 'teacher',
		title: 'Apprenticeship Object EAD'
	});
};

exports.create_activit = function (req, res) {
	res.render('ead-teacher/create_activit', {
		layout: 'teacher',
		title: 'Apprenticeship Object EAD'
	});
};

exports.discipline = function (req, res) {
	res.render('ead-teacher/discipline', {
		layout: 'teacher',
		title: 'Apprenticeship Object EAD'
	});
};