// БУРГЕР МЕНЮ
	$(document).ready(function() {
		$(".burger-menu").click(function() {
		$(".stick").toggleClass(function () {
			return $(this).is('.open, .close') ? 'open close' : 'open';
		});
		});
	});
// БУРГЕР МЕНЮ
/* Dynamic top menu positioning
 *
 */

var num = 75; //number of pixels before modifying styles

$(window).bind('scroll', function () {
    if ($(window).scrollTop() > num) {
        $('.header').addClass('fixed');
    } else {
        $('.header').removeClass('fixed');
    }
});

//USE SCROLL WHEEL FOR THIS FIDDLE DEMO