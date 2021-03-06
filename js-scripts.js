$( document ).ready( function () {

	$( 'body' ).one( 'animationend webkitAnimationEnd oAnimationEnd', function () {

		// code to execute after animation ends
		let $m = $( '#m' );

		if ( $m.hasClass( 'layer' ) ) {
			$m.removeClass( 'layer draw-m' );
			$m.addClass( 'pulse-name pulse-m' );

			let $a = $( '#a' );
			$a.removeClass( 'layer draw-a' );
			$a.addClass( 'pulse-name pulse-a' );

			let $x = $( '#x' );
			$x.removeClass( 'layer draw-x' );
			$x.addClass( 'pulse-name pulse-x' );

			let $period = $( '#period' );
			$period.removeClass( 'layer draw-period' );
			$period.addClass( 'pulse-name pulse-period' );
		}
	} );

	disableWaves();

	// highlight nav item by window position
	//$( window ).on( 'scroll', function() {
		// highlightNavOnScroll();
	//});

	// navbar or brand link (scroll) to sections
	$( ".menu-link[href^='#']" ).click( function ( e ) {
		e.preventDefault();

		$( "li.menu-item-current" ).removeClass( 'menu-item-current' );

		$( this ).parent().addClass( 'menu-item-current' );

		let pos = $( $( this ).attr( "href" ) ).offset().top - 88;

		$( 'body, html' ).animate( {
			scrollTop: pos
		} );
	} );
	$( "#brand" ).click( function ( e ) {
		e.preventDefault();

		$( 'li.menu-item-current' ).removeClass( 'menu-item-current' );

		$( '#home-nav-li' ).addClass( 'menu-item-current' );

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
	$( 'li' ).removeClass( 'menu-item-current' );
	$el.addClass( 'menu-item-current' );
}

function disableWaves() {
	let $menuLink = $( '.menu-link' );
	$menuLink.removeClass( 'waves-effect waves-light' );
}
