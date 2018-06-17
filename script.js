$(document).ready( function() {

	// Табы
	$('.wrapper').on('click', '.tab', function() {
		// Добавление класса .active для label
		$('.wrapper .tab').removeClass('active');
		$(this).addClass('active');

		// Отображение формы входа или регистрации
		$('.wrapper .tab-form').removeClass('hide');
		


	})
})