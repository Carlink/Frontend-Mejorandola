$(window).ready(main);

var contador = 1;

function main() {
	$('.bt_menu').click(function(){
		if(contador == 1){
			$('nav').animate({
				left: '0'
			})
			contador=0;
			$('#shadow').css('display', 'block');
			$('body').css('overflow', 'hidden');
		}
	})

	$('#shadow').click(function(){
		$('nav').animate({
				left: '-100%'
			})
			contador=1;
		$('#shadow').css('display', 'none');
		$('body').css('overflow', 'scroll');
	})

}