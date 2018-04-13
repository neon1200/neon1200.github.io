$(document).ready(function(){

	$(".portfolio-carousel").owlCarousel({
		loop: true,
		smartSpeed: 700,
		center: true,
		responsiveClass: true,
		responsive: {
			0: {
				items: 1.1
			},
			800: {
				items: 2
			}
		}
	});

	$("input, select, textarea").jqBootstrapValidation();

});
