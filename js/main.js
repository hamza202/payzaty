(function($){
"use strict"; // Start of use strict
 	
	
	//Back To Top
	$('.back-to-top').on('click',function(event){
		event.preventDefault();
		$('html, body').animate({scrollTop:0}, 'slow');
	});

    $(document).ready(function(){
        $('[data-toggle="tooltip"]').tooltip();
    });

/* ===== loading ====*/
	$(window).on('load', function () { // makes sure the whole site is loaded 
		$('#loader').fadeOut(100); // will first fade out the loading animation 
		$('body').delay(100).removeClass('load-bg');
		$('body').delay(100).addClass('loaded');
	})
 
	
	
$(".smooth-scroll").click(function() {
    $('html,body').animate({
        scrollTop: $(".register-box.up-footer").offset().top},
        'slow');
});
	
	
  
function fixed_header(){
	var ht = $('#header').height();
	var st = $(window).scrollTop();
	var sf = ht+100;
	if(st>ht){
		$('.scroll-fixed').addClass('nav-fixed');
	}else{
		$('.scroll-fixed').removeClass('nav-fixed');
	}
	if(st>sf){
		$('.scroll-fixed').addClass('nav-show');
	}else{
		$('.scroll-fixed').removeClass('nav-show');
	}
} 
	
	
	
//Document Ready
jQuery(document).ready(function(){
	  
	 
	//Fixed Header
	if($(window).width()>1024){
		fixed_header();
		$(window).scroll(function(){
			fixed_header();
		});
	}
 
  
	
	$('.collapse-fixed-full').on('show.bs.collapse', function () {
   $('body').addClass('collapse-overflow');
//		$('html, body').animate({scrollTop:0});
 })
		
	
	
	$('.collapse-fixed-full').on('hidden.bs.collapse', function () {
    $('body').removeClass('collapse-overflow');
})
	
	
	$('.collapse-fixed-full.review-invoice').on('show.bs.collapse', function () {
   $('body').addClass('collapse-overflow');
   $('.invoice-acc-box').addClass('hide');
	
//		$('html, body').animate({scrollTop:0});
 })
	
	$('.collapse-fixed-full.review-invoice').on('hidden.bs.collapse', function () {
     $('body').addClass('collapse-overflow');
 		$('.invoice-acc-box').removeClass('hide');
		
			
		if(!$('#collapse-box-invoice-1').hasClass('in'))
			{
			$('body').removeClass('collapse-overflow');
			}
		
  })
	
	
//	complete-row-summary
	
	$('.complete-row-details').on('show.bs.collapse', function () {
		if ( $('html').attr('lang') =="ar")
			{
			$(this).parent().find('.tooltip-cont').text("إخفاء")
			}
		else
 		$(this).parent().find('.tooltip-cont').text("Hide Details")
  })
	
	$('.complete-row-details').on('hidden.bs.collapse', function () {
		
		if ( $('html').attr('lang') =="ar")
			{
				$(this).parent().find('.tooltip-cont').text("تفاصيل")
			}
		
		else
     $(this).parent().find('.tooltip-cont').text("Details")
  })
	
	
	
	
//	copy link
	function copyToClipboard(element) {
  var $temp = $("<input>");
  $("body").append($temp);
  $temp.val($(element).text()).select();
  document.execCommand("copy");
  $temp.remove();
}

	
	//Back To Top
	$('.short-link-copy-btn').on('click',function(event){
 	 copyToClipboard('#short-link-copy');	
		
		if ( $('html').attr('lang') =="ar")
	 $(this).attr('data-to-tip' , ' تم نسخ الرابط المختصر ')
		else
	 $(this).attr('data-to-tip' , 'Short Link Copied')	
		
		$(this).mouseleave(function() {
			if ( $('html').attr('lang') =="ar")
      $(this).attr('data-to-tip' , ' نسخ الرابط المختصر')
			else
      $(this).attr('data-to-tip' , 'Copy Short Link')
         });
		
	});
		
	
});
//Window Load
jQuery(window).load(function(){ 
  		
	//Our Staff
  	if($('.partner-slider').length>0){
		$('.partner-slider').each(function(){
			$(this).find('.wrap-item').owlCarousel({
 				        nav: true,
 				      	dots: false,
						loop:true,
 				      	rtl:true,
 				      	margin: 15,
 				      	autoplay: true,
 				      	autoplayTimeout: 2500,
 				      	autoplaySpeed: 1500,
 				      	autoplayHoverPause: true,
 				      	navText: [ '<span class="ion-ios-arrow-right" > </span> ', '<span class="ion-ios-arrow-left" > </span> '],

 				      	responsive: {
 				      		0: {
 				      			items: 1
 				      		},
 				      		600: {
 				      			items: 2
 				      		},
 				      		 
 				      		1200: {
 				      			items: 3
 				      		}
 				      	}
			});
		});
	}
	
	 
	if($('.banner-slider').length>0){
		$('.banner-slider').each(function(){
			$(this).find('.wrap-item').owlCarousel({
 				        nav: true,
 				      	dots: false,
//				        loop:true,
 				      	rtl:true,
 				      	margin: 0,
 				      	autoplay: true,
 				      	autoplayTimeout: 2500,
 				      	autoplaySpeed: 1500,
 				      	autoplayHoverPause: true,
			         	controlsClass:'container',
 				      	navText: [ '<span class="ion-ios-arrow-right" > </span> ', '<span class="ion-ios-arrow-left" > </span> '],
                        items: 1
			});
		});
	}
	
	
	
		//Our twitter feed
	if($('.news-slider').length>0){
		$('.news-slider').each(function(){
			$(this).find('.wrap-item').owlCarousel({
  				        nav: true,
 				      	dots: false,
				        loop:true,
 				      	rtl:true,
 				      	margin: 30,
 				      	autoplay: true,
 				      		autoplayTimeout: 2500,
 				      	autoplaySpeed: 1500,
  				      	autoplayHoverPause: true,
 				      	navText: [ '<span class="ion-ios-arrow-right" > </span> ', '<span class="ion-ios-arrow-left" > </span> '],

 				      	responsive: {
 				      		0: {
 				      			items: 1
 				      		},
 				      		600: {
 				      			items: 2
 				      		},
 				      		960: {
 				      			items: 2
 				      		},
 				      		1200: {
 				      			items: 4
 				      		} ,
							1400: {
 				      			items: 4
 				      		}
 				      	}
			});
		});
	}	
	
 	 
});
})(jQuery); // End of use strict