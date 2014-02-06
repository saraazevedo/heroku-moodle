/*
 *
 */

exports.index = function (req, res) {
	res.render('ead-admin/index', {
		title: 'Apprenticeship Object EAD'
	});
};