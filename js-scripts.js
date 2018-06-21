$( document ).ready( function() {

	/**
	 * slides navbar down when user scrolls
	 */
	$( document ).one( 'scroll', function() {
		$navbar = $( '#navbar' );
		$navbar.slideUp( 0, function() {
			$navbar.removeClass( 'hidden' ) .slideDown( 'fast' );
		});
	});



});