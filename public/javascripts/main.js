require.config({
	paths: {
		jquery: '../bower_components/jquery/jquery.min',
		bootstrap: '../bower_components/bootstrap/docs/assets/js/bootstrap.min',
		access: '../javascripts/access',
		feedbacks: '../javascripts/feedback',
		io: '../javascripts/vendors/socket.io.min',
		chat: '../javascripts/chat'
	},
	shim: { 'bootstrap': { deps: ['jquery'] } }
});

require(['jquery', 'bootstrap', 'access', 'feedbacks', 'io', 'chat'], function ($, bootstrap, access, feedbacks, io, chat) {
	'use strict';

	$('#submitLogin').on('click', function () {
		var user = $.trim($('#username').val());
		var pass = $.trim($('#password').val());

		if (user === '' || pass === '') {
			alert('Usuário ou Password incorretos, tente novamente!');
			return false;
		} else {
			$.ajax({
				url: '/login',
				type: 'POST',
				dataType: 'json',
				data: {username: user, password: pass}
			})
			.done(function(data) {
				window.location = data.redirectTo;
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