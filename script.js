$(document).ready( function() {

	// Tabs
	$('.wrapper').on('click', '.tab', function() {
		// Delete a class .active
		$('.wrapper').find('.active').removeClass('active');

		// Add a class .active
		$(this).addClass('active');
		$('.tab-form').eq( $(this).index() ).addClass('active');
	});

	// Floating label
	$('.input-field input').focus( function() {
		$(this).parent().addClass('focus');
	}).blur( function() {
		if( $(this).val() === '') {
			$(this).parent().removeClass('focus');
		}
	});

});