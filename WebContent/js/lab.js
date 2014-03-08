
$(function() {
 	$('.experiments').css('height', function () {
		var height = $(document).height() - ($('.copyright').outerHeight(true) + $('.header').outerHeight(true) + 40);
		return height > 128 ? height : 128;
	});
	$('.expnode').css('height', function () {
		return $('.experiments').height()  - 34;
	});
});