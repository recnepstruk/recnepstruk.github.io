// Scroll to top of window on refresh
window.onload = function() {
    setTimeout(function() {
        scrollTo(0, 0);
    }, 100); //100ms for example
};

// Hamburger Icon
$(document).ready(function() {
    $('#nav-icon3').click(function() {
        $(this).toggleClass('open');
    });
});

// Scroll to first section
// $('#startScroll').click(function() {
//     $("html, body").animate({ scrollTop: 0 }, 1000);
//     return false;
// });

// Fade In components on scroll
$(document).ready(function() {

    /* Every time the window is scrolled ... */
    $(window).scroll(function() {

        /* Check the location of each desired element */
        $('.hideme').each(function(i) {

            var bottom_of_object = $(this).offset().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();

            /* If the object is completely visible in the window, fade it it */
            if (bottom_of_window >= bottom_of_object) {

                $(this).animate({ 'opacity': '1' }, 1000);

            }
        });

    });
    // Add smooth scrolling to all links
    $("a").on('click', function(event) {

        // Make sure this.hash has a value before overriding default behavior
        if (this.hash !== "") {
            // Prevent default anchor click behavior
            event.preventDefault();

            // Store hash
            var hash = this.hash;

            // Using jQuery's animate() method to add smooth page scroll
            // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 1000, function() {

                // Add hash (#) to URL when done scrolling (default click behavior)
                window.location.hash = hash;
            });
        } // End if
    });
});

$(function() {
    var navMain = $(".main");
    navMain.on("click", "a", null, function() {
        navMain.collapse('hide');
    });
    $(document).ready(function() {
        $('#nav-icon3').click(function() {
            $(this).toggleClass('open');
        });
    });
});

// $(function(){
/*-------------------------------------------------------------------*/
/*  4. Page scrolling feature, requires jQuery Easing plugin.
/*-------------------------------------------------------------------*/
// var pageScroll = function(){
//     $('.page-scroll > a').bind('click', function(e){
//         e.preventDefault();

//         var anchor = $(this),
//         href = anchor.attr('href'),
//         offset = $('body').attr('data-offset');

//         $('html, body').stop().animate({
//             scrollTop: $(href).offset().top - (offset - 1)
//         }, 1500, 'easeInOutExpo');

/*
 * Automatically retract the navigation after clicking
 * on one of the menu items.
 */
//             if(!$(this).parent().hasClass('dropdown')){
//                 $('.berg-collapse').collapse('hide');
//             }
//         });
//     };

//     pageScroll();
// });
