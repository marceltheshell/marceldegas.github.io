$('document').ready(function() {
    var speed = 500;            // Fade speed
    var autoswitch = true;      // Autoslider options
    var autoswitch_speed = 4000; // Autoslider speed

    //Add initial active class
    $('.slide').first().addClass('active');

    //Hide all slides
    $('.slide').hide();

    //Show active slide
    $('.active').show();

    // Switch to next slide
    $('#next').on('click', nextSlide)

    // Switch to previous slide
    $('#prev').on('click', previousSlide)

    //Autoslider
    if (autoswitch === true) {
        setInterval(nextSlide, autoswitch_speed);
    }

    function nextSlide() {
        $('.active').removeClass('active').addClass('previousActive');
        if( $('.previousActive').is(':last-child') ) {
            $('.slide').first().addClass('active');
        }
        else {
            $('.previousActive').next().addClass('active');
        }
        $('.previousActive').removeClass('previousActive');
        $('.slide').fadeOut(speed);
        $('.active').fadeIn(speed);
    }

    function previousSlide() {
        $('.active').removeClass('active').addClass('previousActive');
        if( $('.previousActive').is(':first-child') ) {
            $('.slide').last().addClass('active');
        }
        else {
            $('.previousActive').prev().addClass('active');
        }
        $('.previousActive').removeClass('previousActive');
        $('.slide').fadeOut(speed);
        $('.active').fadeIn(speed);
    }


    (function($) {
        "use strict"; // Start of use strict

        // jQuery for page scrolling feature - requires jQuery Easing plugin
        $('a.page-scroll').bind('click', function(event) {
            var $anchor = $(this);
            $('html, body').stop().animate({
                scrollTop: ($($anchor.attr('href')).offset().top - 50)
            }, 1250, 'easeInOutExpo');
            event.preventDefault();
        });

        // Highlight the top nav as scrolling occurs
        $('body').scrollspy({
            target: '.navbar-fixed-top',
            offset: 51
        })

        // Closes the Responsive Menu on Menu Item Click
        $('.navbar-collapse ul li a').click(function() {
            $('.navbar-toggle:visible').click();
        });

        // Fit Text Plugin for Main Header
        $("h1").fitText(
            1.2, {
                minFontSize: '35px',
                maxFontSize: '65px'
            }
        );

        // Offset for Main Navigation
        $('#mainNav').affix({
            offset: {
                top: 100
            }
        })

        // Initialize WOW.js Scrolling Animations
        new WOW().init();

        $(function(){
          $(".element").typed({
            strings: ["Marcel Degas.", "a Software Developer.", "a French, Spanish and Arabic Speaker.", "a Family Guy.", "a California Native.", "ENFJ.", "a Smelly Cheese Lover."],
            typeSpeed: 50,
            loop: true,
            backDelay: 500,
            showCursor: false,      
          });
        });

    })(jQuery); // End of use strict

})