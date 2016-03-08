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

	function changePhoneBackground(hoverIcon, phoneBackground) {
		$(hoverIcon).hover(function(){
		  	$(phoneBackground).css('display','block');
		}, function() {
			$(phoneBackground).css('display','none');
		});
	}

	changePhoneBackground(".git-icon", ".git-phone-background")
	changePhoneBackground(".linked-icon", ".linked-phone-background")
	changePhoneBackground(".medium-icon", ".medium-phone-background")
	changePhoneBackground(".email-icon", ".email-phone-background")
	changePhoneBackground(".share-word", ".medium-phone-background")
	changePhoneBackground(".winestar-word", ".winestar-phone-background")
	changePhoneBackground(".mfa-word", ".mfa-phone-background")
	changePhoneBackground(".klassroom-word", ".klassroom-phone-background")
	changePhoneBackground(".twitter-word", ".twitter-phone-background")
	changePhoneBackground(".resume-word", ".resume-phone-background")
});



