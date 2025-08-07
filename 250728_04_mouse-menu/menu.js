$(document).ready(function () {
	$('nav li').on('mouseenter', function () {
		$(this).addClass('on');
		$(this).siblings().removeClass('on');
	});
});