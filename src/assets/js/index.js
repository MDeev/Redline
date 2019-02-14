import $ from 'jquery';
window.jQuery = $;
window.$ = $;

$(window).on('load', function() {
    $('.loader').fadeOut(300).parents('body').css('overflow-y', 'scroll');
});

$(document).ready(function (){
    var scrolled = false;
	function Scroll_toTop() {
		var top = $(window).scrollTop();

		if(top <= 100 && !scrolled) { $('.top').fadeOut(300); scrolled = true; }
		else if(top > 100 && scrolled) { $('.top').fadeIn(300); scrolled = false; }
	}

	// Run this function on scroll
	$(window).scroll(function() { Scroll_toTop(); });

	// Run this on load
	Scroll_toTop();

	// Scroll to Top
	$(document).on('click', '.top', function() {
		$('body, html').animate({scrollTop: 0}, 400);
	});
});