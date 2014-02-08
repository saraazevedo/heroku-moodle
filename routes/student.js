/*
 *
 */

exports.index = function (req, res) {
	res.render('ead-student/index', {
		layout: 'student',
		title: 'Apprenticeship Object EAD'
	});
};

exports.activit = function (req, res) {
	res.render('ead-student/activit', {
		layout: 'student',
		title: 'Apprenticeship Object EAD'
	});
};

exports.discipline = function (req, res) {
	res.render('ead-student/discipline', {
		layout: 'student',
		title: 'Apprenticeship Object EAD'
	});
};