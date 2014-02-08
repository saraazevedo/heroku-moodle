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
	var json = {data: '123'};
	res.render('ead-admin/access', json);
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