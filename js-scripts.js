$( document ).ready( function () {

	// slides navbar down when user scrolls
	$( document ).one( 'scroll', function () {
		$navbar = $( '#navbar' );
		$navbar.slideUp( 0, function () {
			$navbar.removeClass( 'hidden' ).slideDown( 'fast' );
		} );
	} );


	// navbar or brand link (scroll) to sections
	$( ".nav-link[href^='#']" ).click( function ( e ) {
		e.preventDefault();

		$( "li.active" ).removeClass( 'active' );

		$( this ).parent().addClass( 'active' );

		let pos = $( $( this ).attr( "href" ) ).offset().top - 88;

		$( 'body, html' ).animate( {
			scrollTop: pos
		} );
	} );
	$( "#brand" ).click( function ( e ) {
		e.preventDefault();

		$( 'li.active' ).removeClass( 'active' );

		$( '#home-nav-li' ).addClass( 'active' );

		$( 'body, html' ).animate( {
			scrollTop: 0
		});
	} );

	// highlight nav item by window position


	// project hover - links to carousel
	let $carousel = $( '.carousel' );
	$carousel.carousel( 'pause' );

	$( '#weather-title' ).mouseenter( function () {
		$carousel.carousel( 0 );
		$carousel.carousel( 'pause' );
	} );
	$( '#android-title' ).mouseenter( function () {
		$carousel.carousel( 1 );
		$carousel.carousel( 'pause' );
	} );
	$( '#egams-title' ).mouseenter( function () {
		$carousel.carousel( 2 );
		$carousel.carousel( 'pause' );
	} );


	// contact
	$( '#submit-btn' ).click( function () {
		let email = $( '#email' ).val();
		let subject = $( '#subject' ).val();
		let message = $( '#message' ).val();


		// test code
		let submitPayload = {
			email: email,
			subject: subject,
			message: message
		};

		console.log( submitPayload );
	} );

} );

