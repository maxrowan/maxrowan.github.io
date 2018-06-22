$( document ).ready( function() {

	// slides navbar down when user scrolls
	$( document ).one( 'scroll', function() {
		$navbar = $( '#navbar' );
		$navbar.slideUp( 0, function() {
			$navbar.removeClass( 'hidden' ) .slideDown( 'fast' );
		});
	});



	// smooth scroll navbar


	// project hover - links to carousel
	let $carousel = $( '.carousel' );
	$carousel.carousel( 'pause' );

	$( '#weather-title' ).mouseenter( function() {
		$carousel.carousel( 0 );
		$carousel.carousel( 'pause' );
	});
	$( '#android-title' ).mouseenter( function() {
		$carousel.carousel( 1 );
		$carousel.carousel( 'pause' );
	});
	$( '#egams-title' ).mouseenter( function() {
		$carousel.carousel( 2 );
		$carousel.carousel( 'pause' );
	} );
});

