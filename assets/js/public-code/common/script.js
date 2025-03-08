jQuery(document).ready(function ($) {
			
	// Slider

	$('.slider-container').owlCarousel({
	    animateOut: 'slideOutDown',
	    animateIn: 'flipInX',
	    dots: false,
	    items:1,
	    margin:30,
	    stagePadding:30,
	    smartSpeed:450
	});

});