$(document).ready(function() { 
	// Drop Down Menu
	jQuery('#main-menu').superfish({
			delay:       10,                            // one second delay on mouseout
			animation:   {opacity:'show',height:'show'},  // fade-in and slide-down animation
			speed:       'fast',                          // faster animation speed
			autoArrows:  false                            // disable generation of arrow mark-up
		});
	//MOBILE MENU
	$('#mobnav-btn').click(
		function () {
			$('.sf-menu').toggleClass("xactive");
		});
		$('.mobnav-subarrow').click(
		function () {
			$(this).parent().toggleClass("xpopdrop");
		});
	//TOGLE SEARCH		
		$( "a.toggleSearch" ).click(function() {
		  $( "#searchform" ).toggle("fade");
		});
    // SLIDER
      $('.flexslider').flexslider({
        animation: "slide",
		controlNav: false,             
		slideshowSpeed: 3000,        
		animationSpeed: 600,  
      });
      $('.testislide').flexslider({
        animation: "fade",
		directionNav: false,             
		slideshowSpeed: 3000,        
		animationSpeed: 600,  
      });
      $('.logoslide').flexslider({
        animation: "fade",
		directionNav: false,             
		slideshowSpeed: 3000,        
		animationSpeed: 600,  
      });
	  //SCROLL EFFECT
		$(window).fadeThis({
			speed: 1000,
		});
		$(window).scroll( function(){
			$('.effect').each( function(i){
				var bottom_of_object = $(this).position().top + $(this).outerHeight();
				var bottom_of_window = $(window).scrollTop() + $(window).height();
				if( bottom_of_window > bottom_of_object ){
					$(this).animate({'opacity':'1'},800);
				}
			}); 
		});
	  
});