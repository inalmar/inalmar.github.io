

jQuery(function ($) {
	$('#confirm-dialog input.confirm, #confirm-dialog a.confirm').click(function (e) {
		e.preventDefault();

		// example of calling the confirm function
		// you must use a callback function to perform the "yes" action
		confirm("Вы действительно  хотите удалить файл?", function () {
			window.location.href = '#';
		});
	});
});

function confirm(message, callback) {
	$('#confirm').modal({
		closeHTML: "<a href='#' title='Close' class='modal-close'>x</a>",
		position: ["20%",],
		overlayId: 'confirm-overlay',
		containerId: 'confirm-container', 
		onShow: function (dialog) {
			var modal = this;

			$('.message', dialog.data[0]).append(message);

			// if the user clicks "yes"
			$('.yes', dialog.data[0]).click(function () {
				// call the callback
				if ($.isFunction(callback)) {
					callback.apply();
				}
				// close the dialog
				modal.close(); // or $.modal.close();
			});
		}
	});
}