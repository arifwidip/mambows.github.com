/**
* Self invoke function
* gunakan pattern seperti ini untuk menghindari 
* konflik dengan javascript library yang lain
*/
(function($){
$(document).ready(function(){

	/**
	 * Jquery Sooperfish Menu
	 */
	$('.navigation .menu')
		.addClass('sf-menu')
		.sooperfish({
			hoverClass : 'sf-hover',
			animationShow : {height:'show'},
			speedShow : 200,
			delay:500,
			animationHide : {height:'hide'},
			speedHide : 200,
			autoArrows : true,
			dualColumn: 1000,
			tripleColumn: 1000
		});

	/**
	 * Jquery Flex slider
	 */
	$('.flexslider').flexslider({
		animation: 'slide',
		controlsContainer: '.flex-container'
	});

});
})(jQuery);