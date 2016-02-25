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
	  $('.phone-git-icon').show();
		}, function() {
	  		$('.phone-git-icon').hide();
	});
	$(".email-icon").hover(function(){
	  $('.phone-email-icon').show();
		}, function() {
	  		$('.phone-email-icon').hide();
	});
	$(".linked-icon").hover(function(){
	  $('.phone-linked-icon').show();
		}, function() {
	  		$('.phone-linked-icon').hide();
	});
	$(".medium-icon").hover(function(){
	  $('.phone-medium-icon').show();
		}, function() {
	  		$('.phone-medium-icon').hide();
	});
	$(".medium-word").hover(function(){
	  $('.phone-medium-icon').show();
		}, function() {
	  		$('.phone-medium-icon').hide();
	});
	$(".klassroom-word").hover(function(){
	  $('.phone-medium-icon').show();
		}, function() {
	  		$('.phone-medium-icon').hide();
	});
});



