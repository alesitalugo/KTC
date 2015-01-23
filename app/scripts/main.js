console.log('\'Allo \'Allo!');

var sliderhome = function(el){
	
	var slide_total = $('.item_slider').length;
	var slide_actual = 1;

	'init': function(){
		$(slide_length).first().addClass('active_slide');
	},
	'next': function(){
		if(slide_actual +1 <= slide_total){
			$(slide_total).last().fadeOut(500, function(){
				slide_actual++;
			});
		} else {
			$(slide_actual).fadeIn(500, function(){
				slide_actual= 1;
			});
		}
	},
	'prev': function(){
		if(slide_actual -1 == 0){
			$(slide_length).last().fadeOut(500, function(){
				slide_actual = slide_length;
			});
		} else {
			$(slide_actual).fadeOut(500, function(){
				slide_actual --;
			});
		}
	}
};