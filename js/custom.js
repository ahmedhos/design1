/* global $, alert, console */

$(function () {
	'use strict';

	// Trigger Nice Scroll

	$('html').niceScroll({

         cursorcolor: '#f7600e',
         cursorwidth: 10,
         cursorborderradius: 0,
         cursorborder: '1px solid #f7600e'

		});/* scroll 3alshan aader ageeb elly ta7t bar7ty */

    // Change Header Height

    $('.header').height($(window).height());

    // Scroll To Features 

    $('.header .arrow i').click(function(){
    	$('html, body').animate({
    		scrollTop: $('.features').offset().top
    	}, 1000);
    });

    $('.hire').click(function (){
    	$('html, body').animate({
    		scrollTop: $('.our-team').offset().top
    	}, 3000);
    });

    $('.our').click(function (){
    	$('html, body').animate({
    		scrollTop: $('.our-work').offset().top
    	}, 1000);
    });

    // Show Hidden Items From Work 
    $('.show-more').click(function() {
    	$('.our-work .hidden').fadeIn(2000);
    });

    //Check Testimonials

    var leftArrow = $('.testim .fa-chevron-left'),
        rightArrow = $('.testim .fa-chevron-right');

    function checkClients() {

        ///////// LeftArrow //////////

    	if($('.client:first').hasClass('active')){
    		leftArrow.fadeOut();
    	}else{
    		leftArrow.fadeIn();
    	}

    	///////  RightArrow  /////////

    	if($('.client:last').hasClass('active')){
    		rightArrow.fadeOut();
    	}else{
    		rightArrow.fadeIn();
    	}
    }

    checkClients();

    $('.testim i').click(function (){

    	if($(this).hasClass('fa-chevron-right')) {
    		$('.testim .active').fadeOut(100, function () {
    			$(this).removeClass('active').next('.client').addClass('active').fadeIn();
    			checkClients();
                });
    			}else{
    		$('.testim .active').fadeOut(100, function () {
    			$(this).removeClass('active').prev('.client').addClass('active').fadeIn();
    			checkClients();
    		});
    	
           }
    });

});