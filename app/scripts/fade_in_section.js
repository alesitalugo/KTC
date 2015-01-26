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

var animate_value = function(id, start, end, sleep) {
    var current = start;
    var increment = end > start? 1 : -1;
    var obj = document.getElementById(id);
    var timer = setInterval(function() {
        current += increment;
        obj.innerHTML = current;
        if (current === end) {
            clearInterval(timer);
        }
    }, sleep);
};


var graph_animations = function( el, val ){
	var $circle = $( el );
	if ( isNaN( val ) ) {
		val = 100;
	} else {
		if( val === 0 ){
			$circle.css({
				strokeDashoffset: 0
			});
		} else{
			var r = $circle.attr('r');
			var c = Math.PI * ( r*2 );
			if ( val < 0 ){
				val = 0;
			}
			if ( val > 100 ) {
				val = 100;
			}
			var pct = ( ( 100 - val ) / 100 ) * c;
			$circle.animate({
				strokeDashoffset: pct
			}, 900);
		}
	}
};

var fade_in_section = function( $el, direction ){
	var animation = ( direction === 'up' ) ? 'fadeInDown' : 'fadeInUp';
	if( $el.attr('id') === 'home' ){
		animation = 'fadeIn';
	}
	if( $el.attr('id') === 'graph2' ){
		animation = 'bounceIn';
	}
	if( $el.is_on_screen() ) {
		if( !animated_sections[ $el.attr('id') ] ){
			if( $el.attr('id') === 'graph1'){
				graph_animations('#svg #bar', 28);
			}
			if( $el.attr('id') === 'graph3'){
				graph_animations('#svg_2 #bar2', 46);
			}
			if( $el.attr('id') === 'graph2'){
				animate_value('graph_count', 800, 1500, 0);
			}
			$el.addClass('animated '+animation);
			animated_sections[ $el.attr('id') ] = true;
			$el.one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
				$el.removeClass('animated '+animation);
			});
		}
	} else {
		animated_sections[ $el.attr('id') ] = false;
		if( $el.attr('id') === 'graph1'){
			graph_animations('#svg #bar', 0);
		}
		if( $el.attr('id') === 'graph3'){
			graph_animations('#svg_2 #bar2', 0);
		}
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