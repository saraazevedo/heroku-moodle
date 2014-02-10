define(function () {
	'use strict';

	var Feedbacks = {
		countFeedback: 0,
		arrayFeedback: [],
		success: function (msg) {
			var template = '<div class="alert alert-success">' +
								'<button type="button" data-dismiss="alert" class="close">×</button>' +
								'<strong>Warning! </strong>' + msg +
							'</div>';
			this.mountFeedback(template);
		},
		error: function (msg) {
			var template = '<div class="alert alert-error">' +
								'<button type="button" data-dismiss="alert" class="close">×</button>' +
								'<strong>Warning! </strong>' + msg +
							'</div>';
			this.mountFeedback(template);
		},
		info: function (msg) {
			var template = '<div class="alert alert-info">' +
								'<button type="button" data-dismiss="alert" class="close">×</button>' +
								'<strong>Warning! </strong>' + msg +
							'</div>';
			this.mountFeedback(template);
		},
		block: function (msg) {
			var template = '<div class="alert alert-block">' +
								'<button type="button" data-dismiss="alert" class="close">×</button>' +
								'<strong>Warning! </strong>' + msg +
							'</div>';
			this.mountFeedback(template);
		},
		mountFeedback: function (template) {
			this.arrayFeedback.push(template);
			this.countFeedback++;
		}
	}

	return {
		getFeedback: function () {
			return Feedbacks.countFeedback;
		},
		addFeedback: function (feedback, message) {
			Feedbacks[feedback](message);
		},
		sendFeedback: function () {
			var element = $('.feedbacks');
			Feedbacks.arrayFeedback.forEach(function (template) {
				element.append(template);
			});
			Feedbacks.countFeedback = 0;
		}
	}
});