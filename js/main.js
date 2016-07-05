

		$(function(){
			$('#tvbox').tv({
				preload: true,
				preloadImg: '../icons/loading.gif',
				frameImg: 'imac-tv.png',
				play: 5000,
				pause: 2500,
				mousehoverPause: true,
				transitionFX: 'slide',
				onClickNext: true,
				hideNextPrev: true,
				animationStart: function(current){
					$('.title_bar').animate({bottom:-35},100);
				},
				animationComplete: function(current){
					$('.title_bar').animate({bottom:0},200);
				},
				tvHasLoaded: function() {
					$('.title_bar').animate({bottom:0},200);
				}
			});
		});