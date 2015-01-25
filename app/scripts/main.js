console.log('\'Allo \'Allo!');

var Slider = function(el){
	var slides = $(el).find('.item_slider');
	var slide_total = slides.length;
	var slide_actual = 0;


	return{
		'init': function(){
			slides.first().addClass('active_slide');
		},
		'next_slide': function(){
			if( slide_actual + 1 < slide_total ){
				$( slides[ slide_actual ] ).removeClass('showtime');
				$( slides[slide_actual + 1 ] ).addClass('showtime')
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
	}
};


var slider_home = new Slider( document.getElementById('slider') )

slider_home.init();
$('.nav_item').on('click', function( e ){
	e.preventDefault();
	if( $(this).hasClass('next') )
		slider_home.next_slide();
	if( $(this).hasClass('prev') )
		slider_home.prev_slide();
	return false;
});