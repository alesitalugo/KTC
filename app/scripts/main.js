'use strict';
/* jshint camelcase: false */

var Slider = function(el){
	var slides = $(el).find('.item_gall');
	var slide_total = slides.length;
	var slide_actual = 0;


	return{
		'init': function(){
			slides.first().show();
		},
		'next_slide': function(){
			if( slide_actual + 1 < slide_total ){
				$( slides[ slide_actual ] ).fadeOut('500');
				$( slides[slide_actual + 1 ] ).fadeIn('500');
				slide_actual++;
			}
		},
		'prev_slide': function(){
			if( slide_actual - 1 >= 0 ){
				$( slides[ slide_actual ] ).fadeOut('500');
				$( slides[slide_actual - 1 ] ).fadeIn('500');
				slide_actual--;
			}
		}
	};
};

var slider_home = new Slider( document.getElementById('gall') );

slider_home.init();

$('#left_gall').on('click', function( e ){
	e.preventDefault();
	slider_home.next_slide();
});
$('#right_gall').on('click', function( e ){
	e.preventDefault();
	slider_home.prev_slide();
});

$('#gall').on('swipeleft', function( e ){
	e.preventDefault();
	slider_home.next_slide();

});
$('#gall').on('swiperight', function( e ){
	e.preventDefault();
	slider_home.prev_slide();
});
var SliderArrows = function(el){
	var slides = $(el).find('.section');
	var slide_total = slides.length;
	var slide_actual = 0;

	return{
		'init': function(){
			$('html, body').stop().animate({ scrollTop: ($('#home').offset().top ) }, 1000);
		},
		'next_slidearrow': function(){
			if( slide_actual + 1 < slide_total ){
				$('html, body').stop().animate({
					scrollTop: $( slides[slide_actual + 1 ] ).offset().top
				}, 1000);
				slide_actual++;
			}
		},
		'prev_slidearrow': function(){
			if( slide_actual - 1 >= 0 ){
				$('html, body').stop().animate({
					scrollTop: $( slides[slide_actual -1  ] ).offset().top
				}, 1000);
				slide_actual--;
			}
		}
	};
};
var slider_nav = new SliderArrows( document.getElementById('wrap') );

slider_nav.init();

$('#a_l').on('click', function( e ){
	e.preventDefault();
	slider_nav.next_slidearrow();
});
$('#a_r').on('click', function( e ){
	e.preventDefault();
	slider_nav.prev_slidearrow();
});

$('#play').on('click', function(e){
	e.preventDefault();
	if($(window).width() <= 768){
		$('.video_modal .placeholder').hide();
		$('.video_modal').fadeIn(500);
		$('.video_modal iframe').fadeIn().attr('src', '//www.youtube.com/embed/MHAaaFb-Ax0?version=3&enablejsapi=1&autoplay=0&playsinline=0&controls=2&modestbranding=0&rel=0&showinfo=0&fs=0&autohide=0&color=white');
	} else {
		$('#video_frame .placeholder').hide();
		$('#video_frame iframe').fadeIn().attr('src', '//www.youtube.com/embed/MHAaaFb-Ax0?version=3&enablejsapi=1&autoplay=1&playsinline=0&controls=2&modestbranding=0&rel=0&showinfo=0&fs=0&autohide=0&color=white');
	}
});

$('.video_modal').on('click', function(e){
	e.preventDefault();
	$(this).fadeOut(500);
});