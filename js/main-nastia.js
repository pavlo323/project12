$(document).ready(function(){
	$('.nastia__slider-one').slick({
		arrows:false,
		slidesToShow: 1,
		speed:500,
		asNavFor:".nastia__slider-two",
	});
	$('.nastia__slider-two').slick({
		slidesToShow: 4,
		arrows:false,
		speed:500,
		asNavFor:".nastia__slider-one",
		responsive:[
			{
				breakpoint: 1400,
				settings: {
				}
			},{
				breakpoint: 992,
				settings: {
				}
			},{
				breakpoint: 576,
				settings: {
				}
			}
		]
	});
});