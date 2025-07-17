jQuery("a[href*='#']:not([href='#'])").click(function(e) {

	  var hash = this.hash;
	  var section = jQuery(hash);

	  	if(jQuery(hash).length > 0){
	  		e.preventDefault();
	  

			if (hash) { 
				jQuery('html, body').animate({
				  scrollTop: section.offset().top - 200
				}, 1000, 'swing', function(){
				  history.replaceState({}, "", hash);
				});
			}
		}
	});

jQuery(document).ready(function($) {
	if(window.location.hash) {
      var hash = window.location.hash.substring(1);
      $('html, body').animate({
          'scrollTop':   $('#' + hash).offset().top - 200
      }, 1000);
}
    if ($(document).scrollTop() >= 100) {
		$('#masthead').addClass('sticky');	  
 } else {
	 $('#masthead').removeClass('sticky');
 }	    
    $(document).scroll(function() {
     if ($(document).scrollTop() >= 100) {
    		$('#masthead').addClass('sticky');	  
     } else {
    	 $('#masthead').removeClass('sticky');
     }	
    })
    $('.mobile-nav').on('click', function(){
    	$('#site-navigation').toggleClass('expanded');
    })
    $('#content').on('click', function(){
    	$('#site-navigation.expanded').removeClass('expanded');
    })
	
	var more_btn = $( 'a.btn.more' );
	
	more_btn.each( function() {
			var $this = $(this);
				$this.on('click', function(e) {
					e.preventDefault();
					$this.closest('.wrap').find('section.show_more').slideToggle('slow');
				});
		});

	setTimeout(function(){
		$('.feefowidget').html('<script type="text/javascript" src="https://api.feefo.com/api/javascript/mother-nature-science"></script><div id="feefo-service-review-carousel-widgetId" class="feefo-review-carousel-widget-service"></div>');
		$('.lazyload').show();
		}, 500);
$('.ginput_container_consent > input, .woocommerce-form__label-for-checkbox #terms').prop('checked', true);	
});




