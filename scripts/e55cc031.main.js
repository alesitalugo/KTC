"use strict";var Slider=function(a){var b=$(a).find(".item_gall"),c=b.length,d=0;return{init:function(){b.first().show()},next_slide:function(){c>d+1&&($(b[d]).fadeOut("500"),$(b[d+1]).fadeIn("500"),d++)},prev_slide:function(){d-1>=0&&($(b[d]).fadeOut("500"),$(b[d-1]).fadeIn("500"),d--)}}},slider_home=new Slider(document.getElementById("gall"));slider_home.init(),$("#left_gall").on("click",function(a){a.preventDefault(),slider_home.next_slide()}),$("#right_gall").on("click",function(a){a.preventDefault(),slider_home.prev_slide()}),$("#gall").on("swipeleft",function(a){a.preventDefault(),slider_home.next_slide()}),$("#gall").on("swiperight",function(a){a.preventDefault(),slider_home.prev_slide()});var SliderArrows=function(a){var b=$(a).find(".section"),c=b.length,d=0;return{init:function(){$("html, body").stop().animate({scrollTop:$("#home").offset().top},1e3)},next_slidearrow:function(){c>d+1&&($("html, body").stop().animate({scrollTop:$(b[d+1]).offset().top},1e3),d++)},prev_slidearrow:function(){d-1>=0&&($("html, body").stop().animate({scrollTop:$(b[d-1]).offset().top},1e3),d--)}}},slider_nav=new SliderArrows(document.getElementById("wrap"));slider_nav.init(),$("#a_l").on("click",function(a){a.preventDefault(),slider_nav.next_slidearrow()}),$("#a_r").on("click",function(a){a.preventDefault(),slider_nav.prev_slidearrow()}),$("#play").on("click",function(a){a.preventDefault(),$(window).width()<=768?($(".video_modal .placeholder").hide(),$(".video_modal").fadeIn(500),$(".video_modal iframe").fadeIn().attr("src","//www.youtube.com/embed/MHAaaFb-Ax0?version=3&enablejsapi=1&autoplay=0&playsinline=0&controls=2&modestbranding=0&rel=0&showinfo=0&fs=0&autohide=0&color=white")):($("#video_frame .placeholder").hide(),$("#video_frame iframe").fadeIn().attr("src","//www.youtube.com/embed/MHAaaFb-Ax0?version=3&enablejsapi=1&autoplay=1&playsinline=0&controls=2&modestbranding=0&rel=0&showinfo=0&fs=0&autohide=0&color=white"))}),$(".video_modal").on("click",function(a){a.preventDefault(),$(this).fadeOut(500)}),$.fn.is_on_screen=function(){var a=$(window),b={top:a.scrollTop(),left:a.scrollLeft()};b.right=b.left+a.width(),b.bottom=b.top+a.height();var c=this.offset();return c.right=c.left+this.outerWidth(),c.bottom=c.top+this.outerHeight(),!(b.right<c.left||b.left>c.right||b.bottom<c.top||b.top>c.bottom)};var animated_sections={},sections_fade=$(".animate_fadein"),animate_value=function(a,b,c,d){var e=b,f=c>b?1:-1,g=document.getElementById(a),h=setInterval(function(){e+=f,g.innerHTML=e,e===c&&clearInterval(h)},d)},graph_animations=function(a,b){var c=$(a);if(isNaN(b))b=100;else if(0===b)c.css({strokeDashoffset:0});else{var d=c.attr("r"),e=2*Math.PI*d;0>b&&(b=0),b>100&&(b=100);var f=(100-b)/100*e;c.animate({strokeDashoffset:f},900)}},fade_in_section=function(a,b){var c="up"===b?"fadeInDown":"fadeInUp";"home"===a.attr("id")&&(c="fadeIn"),"graph2"===a.attr("id")&&(c="bounceIn"),a.is_on_screen()?animated_sections[a.attr("id")]||("graph1"===a.attr("id")&&graph_animations("#svg #bar",28),"graph3"===a.attr("id")&&graph_animations("#svg_2 #bar2",46),"graph2"===a.attr("id")&&animate_value("graph_count",800,1500,0),a.addClass("animated "+c),animated_sections[a.attr("id")]=!0,a.one("webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend",function(){a.removeClass("animated "+c)})):(animated_sections[a.attr("id")]=!1,"graph1"===a.attr("id")&&graph_animations("#svg #bar",0),"graph3"===a.attr("id")&&graph_animations("#svg_2 #bar2",0))};sections_fade.each(function(){animated_sections[$(this).attr("id")]=!1,fade_in_section($(this),"down")});var last_scroll_top=0;$(window).scroll(function(){var a=$(this).scrollTop(),b=a>last_scroll_top?"down":"up";last_scroll_top=a,sections_fade.each(function(){fade_in_section($(this),b)})});