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

$('.nav_item').on('click', function( e ){
	e.preventDefault();
	if( $(this).hasClass('next') )
		$(this).find('active_btn').show();
	if( $(this).hasClass('prev') )
		$(this).find('active_btn').show();
	return false;
});

$('#gall').on('swipeleft', function( e ){
	e.preventDefault();
	slider_home.next_slide();

});
$('#gall').on('swiperight', function( e ){
	e.preventDefault();
	slider_home.prev_slide();
});

$('#play').on('click', function(e){
	e.preventDefault();
	$('#video_frame .placeholder').hide();
	$('#video_frame iframe').fadeIn().attr('src', '//www.youtube.com/embed/MHAaaFb-Ax0?version=3&enablejsapi=1&autoplay=1&playsinline=0&controls=2&modestbranding=0&rel=0&showinfo=0&fs=0&autohide=0&color=white');
});

  var val_1 = 28;
  

  var $circle = $('#svg #bar');
 
  if (isNaN(val_1)) {
   val_1 = 100; 

  }
  else{
    var r = $circle.attr('r');
    var c = Math.PI*(r*2);
   
    if (val_1 < 0) { val_1 = 0;}
    if (val_1 > 100) { val_1 = 100;}
    
    var pct = ((100-val_1)/100)*c;

    $circle.css({ strokeDashoffset: pct});
    
  }

  var val_2 = 46;
  var $circles = $('#svg_2 #bar2');

  if (isNaN(val_2)) {
   val_2 = 100; 

  }
  else{
    var q = $circles.attr('r');
    var d = Math.PI*(q*2);
   
    if (val_2 < 0) { val_2 = 0;}
    if (val_2 > 100) { val_2 = 100;}
    
    var pctr = ((100-val_2)/100)*d;

    $circles.css({ strokeDashoffset: pctr});
    
  }