$(document).ready(function() {
	$('.header__burger').click(function(event) {
		$('.header__burger,.header__menu').toggleClass('active');
		$('body').toggleClass('lock');
	});
});

$(document).ready(function(){
	$('.body-slider').slick({
		slidesToShow: 4,
		speed:500,
		infinite: false,
		dots:true,
		responsive:[
			{
				breakpoint: 1400,
				settings: {
					arrows:false,
					dots:true,
				}
			},{
				breakpoint: 992,
				settings: {
					arrows:false,
					dots:true,
				}
			},{
				breakpoint: 768,
				settings: {
					arrows:false,
					dots:true,
					slidesToShow: 3,
				}
			},{
				breakpoint: 576,
				settings: {
					arrows:false,
					dots:true,
					slidesToShow: 2,
				}
			}
		]
	});
});
$(document).ready(function(){
	$('.body-two__slider').slick({
		slidesToShow: 3,
		speed:500,
		infinite: false,
		dots:true,
		responsive:[
			{
				breakpoint: 1400,
				settings: {
					arrows:false,
					dots:true,
					slidesToShow: 3,
				}
			},{
				breakpoint: 992,
				settings: {
					arrows:false,
					dots:true,
					slidesToShow: 3,
				}
			},{
				breakpoint: 768,
				settings: {
					arrows:false,
					dots:true,
					slidesToShow: 2,
				}
			},{
				breakpoint: 576,
				settings: {
					arrows:false,
					dots:true,
					slidesToShow: 1,
				}
			}
		]
	});
});
$(document).ready(function(){
	$('.body-six__slider').slick({
		slidesToShow: 2,
		speed:500,
		infinite: false,
		dots:true,
		responsive:[
			{
				breakpoint: 1400,
				settings: {
					arrows:false,
					dots:true,
				}
			},{
				breakpoint: 992,
				settings: {
					arrows:false,
					dots:true,
				}
			},{
				breakpoint: 576,
				settings: {
					arrows:false,
					dots:true,
					slidesToShow: 1,
				}
			}
		]
	});
});
