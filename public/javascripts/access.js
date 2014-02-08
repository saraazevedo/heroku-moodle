require(['jquery', 'bootstrap'], function ($, bootstrap) {
	var formCreate = $('#cadastro');

	$('#send').on('click', function () {
		var data = null;
		var obj = {
			username: formCreate.find('#username').val(),
			first_name: formCreate.find('#first_name').val(),
			last_name: formCreate.find('#last_name').val(),
			password: formCreate.find('#password').val(),
			email: formCreate.find('#email').val(),
			info: formCreate.find('#info').val()
		}

		for (data in obj) {
			if (obj[data] === '' || obj[data] === undefined) {
				console.log('incorrect '+ data);
			}
		}
	});
});