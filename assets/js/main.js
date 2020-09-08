jQuery(document).ready(function($) 
{

	$(".owl-carousel").owlCarousel({
	   
	    margin: 20,
	    stagePadding: 0,
	    loop:true,
	    responsive : {
		    0 : {
		        items : 1,
	    		stagePadding: 50,
		    },
		    768 : {
		        items : 3,
	    		stagePadding: 0,
		    }
		},
	    // lazyLoad : true,
	    nav : true,
	    navText: ["<img src='assets/img/btn-prev.svg'>","<img src='assets/img/btn-next.svg'>"],
	    dots: false
	 }); 

	$('.menu-toggle').click(function() 
	{
		if($('.mobile-nav').hasClass('is-visible'))
		{
			$('.mobile-nav').removeClass('is-visible');
			$('.cross').removeClass('is-visible');
			$('.hamburger').addClass('is-visible');
		}
		else
		{
			$('.mobile-nav').addClass('is-visible');
			$('.cross').addClass('is-visible');
			$('.hamburger').removeClass('is-visible');
		}
	});





	$('.mobile-nav li a').click(function() 
	{
		$('.mobile-nav').removeClass('is-visible');
		$('.cross').removeClass('is-visible');
		$('.hamburger').addClass('is-visible');
	});

	$(".mobile-nav li a").click(function(){
		$targetAnchor = $(this).attr('scrollto');
		$('html, body').animate({
		   scrollTop:$('section#' + $targetAnchor).offset().top -60
		}, 1000);
	});

	$(".nav li a").click(function(){
		$targetAnchor = $(this).attr('scrollto');
		$('html, body').animate({
		   scrollTop:$('section#' + $targetAnchor).offset().top -0
		}, 1000);
	});





});
