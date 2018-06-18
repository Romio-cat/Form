$(document).ready( function() {

	// Табы
	$('.wrapper').on('click', '.tab', function() {
		// Удаление класса .active
		$('.wrapper').find('.active').removeClass('active');

		// Добавляем класс .active
		$(this).addClass('active');
		$('.tab-form').eq( $(this).index() ).addClass('active');

	})
})