'use strict';
/* jshint camelcase: false */
$.fn.is_on_screen = function(){
	var win = $(window);
	var viewport = {
		top : win.scrollTop(),
		left : win.scrollLeft()
	};
    viewport.right = viewport.left + win.width();
    viewport.bottom = viewport.top + win.height();
 
    var bounds = this.offset();
    bounds.right = bounds.left + this.outerWidth();
    bounds.bottom = bounds.top + this.outerHeight();
 
    return (!(viewport.right < bounds.left || viewport.left > bounds.right || viewport.bottom < bounds.top || viewport.top > bounds.bottom));
};
 
var sections_fade = $('.animate_fadein');

sections_fade.each( function() {
    if( $(this).is_on_screen() ) {
		$(this).addClass('showtime');
	} else {
		$(this).removeClass('showtime');
	}
});

$(window).scroll(function(){
	sections_fade.each( function() {
	    if( $(this).is_on_screen() ) {
			$(this).addClass('showtime');
		} else {
			$(this).removeClass('showtime');
		}
	});
});