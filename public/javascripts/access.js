define(['feedbacks'], function (feedbacks) {
	'use strict';

	var formCreate = $('#cadastro');
	var regEmail = /^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})$/g;

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
				feedbacks.addFeedback('error', 'Field required ' + data);
			}
		}

		if (feedbacks.getFeedback() > 0) {
			feedbacks.sendFeedback();
		} else {
			console.log(obj);
			$.ajax({
				url: '/ead-admin/create_user',
				type: 'POST',
				dataType: 'json',
				data: obj
			})
			.done(function(data) {
				console.log(data);
			})
			.fail(function(xhr, status) {
				console.log(xhr);
				console.log(status);
			})
			.always(function() {
				//console.log("complete");
			});
		}
	});
});