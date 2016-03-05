$(document).ready(function() {
	$(function(){
	  $(".element").typed({
	    strings: ["Marcel Degas.", "a Software Engineer.",  "an Educator.", "a Language Enthusiast.", "a Writer.", "a Family Guy.", "a Stoic.", "ENFJ."],
	    typeSpeed: 100,
	    startDelay: 100, 
	    loop: true,
	    backDelay: 500,
	    showCursor: false,    	
	  });
	});
	
	$(".git-icon").hover(function(){
	  	$('.git-phone-background').css('display','block');
	}, function() {
		$('.git-phone-background').css('display','none');
	});
	$(".linked-icon").hover(function(){
	  	$('.linked-phone-background').css('display','block');
	}, function() {
		$('.linked-phone-background').css('display','none');
	});
	$(".medium-icon").hover(function(){
	  	$('.medium-phone-background').css('display','block');
	}, function() {
		$('.medium-phone-background').css('display','none');
	});
	$(".share-word").hover(function(){
	  	$('.medium-phone-background').css('display','block');
	}, function() {
		$('.medium-phone-background').css('display','none');
	});
	$(".email-icon").hover(function(){
	  	$('.email-phone-background').css('display','block');
	}, function() {
		$('.email-phone-background').css('display','none');
	});
	$(".winestar-word").hover(function(){
	  	$('.winestar-phone-background').css('display','block');
	}, function() {
		$('.winestar-phone-background').css('display','none');
	});
	$(".mfa-word").hover(function(){
	  	$('.mfa-phone-background').css('display','block');
	}, function() {
		$('.mfa-phone-background').css('display','none');
	});
	$(".klassroom-word").hover(function(){
	  	$('.klassroom-phone-background').css('display','block');
	}, function() {
		$('.klassroom-phone-background').css('display','none');
	});
	$(".twitter-word").hover(function(){
	  	$('.twitter-phone-background').css('display','block');
	}, function() {
		$('.twitter-phone-background').css('display','none');
	});
	$(".resume-word").hover(function(){
	  	$('.resume-phone-background').css('display','block');
	}, function() {
		$('.resume-phone-background').css('display','none');
	});
});



