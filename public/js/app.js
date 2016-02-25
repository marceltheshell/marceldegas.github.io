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
	  $('.phone-git-icon').fadeIn("slow"); 
	}, function() {
		$('.phone-git-icon').fadeOut("slow");
	});
	$(".email-icon").hover(function(){
	  $('.phone-email-icon').fadeIn("slow");
		}, function() {
	  		$('.phone-email-icon').fadeOut("slow");
	});
	$(".linked-icon").hover(function(){
	  $('.phone-linked-icon').fadeIn("slow");
		}, function() {
	  		$('.phone-linked-icon').fadeOut("slow");
	});
	$(".medium-icon").hover(function(){
	  $('.phone-medium-icon').fadeIn("slow");
		}, function() {
	  		$('.phone-medium-icon').fadeOut("slow");
	});
	$(".medium-word").hover(function(){
	  $('.phone-medium-icon').fadeIn("slow");
		}, function() {
	  		$('.phone-medium-icon').fadeOut("slow");
	});
	// $(".klassroom-word").hover(function(){
	//   $('.phone-medium-icon').fadeIn("slow");
	// 	}, function() {
	//   		$('.phone-medium-icon').fadeOut("slow");
	// });
});



