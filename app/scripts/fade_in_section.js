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

var animated_sections = {};
var sections_fade = $('.animate_fadein');

var fade_in_section = function( $el, direction ){
	var animation = ( direction === 'up' ) ? 'fadeInDown' : 'fadeInUp';
	if( $el.attr('id') === 'home' ){
		animation = 'fadeIn';
	}
	if( $el.is_on_screen() ) {
		if( !animated_sections[ $el.attr('id') ] ){
			$el.addClass('animated '+animation);
			animated_sections[ $el.attr('id') ] = true;
			$el.one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
				$el.removeClass('animated '+animation);
			});
		}
	} else {
		animated_sections[ $el.attr('id') ] = false;
	}
};

sections_fade.each( function() {
	animated_sections[ $(this).attr('id') ] = false;
	fade_in_section( $(this), 'down' );
});

var last_scroll_top = 0;
$(window).scroll( function(){
	var st = $(this).scrollTop();
	var direction = (st > last_scroll_top) ? 'down' : 'up';
	last_scroll_top = st;
	sections_fade.each( function() {
		fade_in_section( $(this), direction);
	});
});
