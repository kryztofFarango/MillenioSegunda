(function ( $ ) {

	$.fn.desplaza = function( options ) {

		var settings = $.extend({
			//default values
			linking: true,
			tooltip: "constant",
			positiveTolerance: 0,
			negativeTolerance: 0,
			displayWhenActive: true,
			disableBelow: 0,
			tracking: "tracker"
		}, options);




		//Set up scrollTo linking if linking is true
		if(settings.linking) {
			$('.desplaza').on('click', function(e) {
				e.preventDefault();
				var targetElem = $(this).attr('href');
				$('html, body').animate({
					//Addition of 1 pixel to offset against Chrome's interpretation of scrollTop
			        scrollTop: $(targetElem).offset().top + 1
			    }, 1000);
			});
		}

		


		
		//Hide below a certain width if specified


	};

}( jQuery ));