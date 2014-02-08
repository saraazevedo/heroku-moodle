/*
 * GET home page.
 */

exports.index = function (req, res) {
	res.render('index', {
		layout: 'Access',
		title: 'Apprenticeship Object EAD'
	});
};