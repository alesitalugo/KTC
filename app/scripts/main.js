'use strict';
/* jshint camelcase: false */


var Slider = function(el){
	var slides = $(el).find('.item_gall');
	var slide_total = slides.length;
	var slide_actual = 0;


	return{
		'init': function(){
			slides.first().addClass('showtime');
		},
		'next_slide': function(){
			if( slide_actual + 1 < slide_total ){
				$( slides[ slide_actual ] ).removeClass('showtime');
				$( slides[slide_actual + 1 ] ).addClass('showtime');
				slide_actual++;
			}
		},
		'prev_slide': function(){
			if( slide_actual - 1 >= 0 ){
				$( slides[ slide_actual ] ).removeClass('showtime');
				$( slides[slide_actual - 1 ] ).addClass('showtime');
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


//var mc = new Hammer(slider_home);
//mc.get('swipe').set({ direction: Hammer.DIRECTION_VERTICAL });

// listen to events...
//mc.on("swipeleft", function(ev) {
//	console.log('left');
//});

$('#play').on('click', function(e){
	e.preventDefault();
	$('#video_frame .placeholder').hide();
	$('#video_frame iframe').fadeIn().attr('src', '//www.youtube.com/embed/MHAaaFb-Ax0?version=3&enablejsapi=1&autoplay=1&playsinline=0&controls=2&modestbranding=0&rel=0&showinfo=0&fs=0&autohide=0&color=white');
});