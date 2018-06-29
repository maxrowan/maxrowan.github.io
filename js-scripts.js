$( document ).ready( function () {

	// highlight nav item by window position
	$( window ).on( 'scroll', function() {
		highlightNavOnScroll();
	});

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
	} );

} );

function highlightNavOnScroll() {
	if ( $(window).scrollTop() < $( '#about' ).offset().top - 53 ) {				// highlight 'home'
		setNavActive( $( '#liNavHome' ) );

	} else if ( $(window).scrollTop() < $( '#projects' ).offset().top - 154 ) {	// highlight 'about'
		setNavActive( $( '#liNavAbout' ) );

	} else if ( $(window).scrollTop() < $( '#contact' ).offset().top - 240 ) {	// highlight 'projects'
		setNavActive(  $( '#liNavProjects' ) );

	} else {																// highlight 'contact'
		setNavActive( $( '#liNavContact' ) );
	}
}

function setNavActive( $el ) {
	$( "li.active" ).removeClass( 'active' );
	$el.addClass( 'active' );
}

