/*
 *
 */

exports.index = function (req, res) {
	res.render('ead-student/index', {
		title: 'Apprenticeship Object EAD'
	});
};