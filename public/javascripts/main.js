require.config({
	paths: {
		jquery: '../bower_components/jquery/jquery.min',
		bootstrap: '../bower_components/bootstrap/docs/assets/js/bootstrap.min'
	},
	shim: { 'bootstrap': { deps: ['jquery'] } }
});

require(['jquery', 'bootstrap'], function ($, bootstrap) {
	'use strict';

	$('#submitLogin').on('click', function () {
		var user = $.trim($('#username').val());
		var pass = $.trim($('#password').val());

		if (user === '' || pass === '') {
			alert('Usuário ou Password incorretos, tente novamente!');
			return false;
		} else {
			$.ajax({
				url: '/',
				type: 'POST',
				dataType: 'json',
				data: {username: user, password: pass}
			})
			.done(function(data) {
				console.log(data instanceof Array);
				console.log(data[0]);
			})
			.fail(function(xhr) {
				console.log("error " + xhr);
			})
			.always(function() {
				console.log("complete");
			});
		}
	});
});