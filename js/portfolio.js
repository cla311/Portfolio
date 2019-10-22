$(document).ready(function () {
    "use strict"; // Start of use strict

    // Smooth scrolling using jQuery easing
    $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function () {
        if (location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '') && location.hostname === this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html, body').animate({
                    scrollTop: (target.offset().top - 71)
                }, 1000, "easeInOutExpo");
                return false;
            }
        }
    });

    // Scroll to top button appear
    $(document).scroll(function () {
        var scrollDistance = $(this).scrollTop();
        if (scrollDistance > 20) {
            $('.scroll-to-top').fadeIn();
        } else {
            $('.scroll-to-top').fadeOut();
        }
    });

    // Closes responsive menu when a scroll trigger link is clicked
    $('.js-scroll-trigger').click(function () {
        $('.navbar-collapse').collapse('hide');
    });

    // Activate scrollspy to add active class to navbar items on scroll
    $('body').scrollspy({
        target: '#mainNav',
        offset: 80
    });

    // Collapse Navbar
    var navbarCollapse = function () {
        if ($("#mainNav").offset().top > 100) {
            $("#mainNav").addClass("navbar-shrink");
        } else {
            $("#mainNav").removeClass("navbar-shrink");
        }
    };
    // Collapse now if page is not at top
    navbarCollapse();
    // Collapse the navbar when page is scrolled
    $(window).scroll(navbarCollapse);


    var targets = $('.portfolio-column'),
            buttons = $('.filter');

    buttons.click(function () {
        var value = $(this).data('filter');
        if (value === "all")
        {
            buttons.removeClass('active');
            $(this).addClass('active');
            targets.show('1000');
        } else
        {
            if ($("#all").hasClass('active')) {
                $("#all").removeClass('active');
            }

            if ($(this).hasClass('active'))
            {
                $(this).removeClass('active');
                var checkedClasses = buttons.filter('.active').toArray().map(function (btn) {
                    return $(btn).data('filter');
                });
                if (checkedClasses.length === 0)
                {
                    buttons.removeClass('active');
                    $("#all").addClass('active');
                    targets.show('1000');
                } else
                {
                    checkedClasses = $.grep(checkedClasses, function (n, i) {
                        return n !== value;
                    }),
                            selector = '.' + checkedClasses.join('.'),
                            show = targets.filter(selector);
                    targets.not(show).hide('3000');
                    show.show('3000');
                }
            } else
            {
                $(this).addClass('active');
                var checkedClasses = buttons.filter('.active').toArray().map(function (btn) {
                    return $(btn).data('filter');
                }),
                        selector = '.' + checkedClasses.join('.'),
                        show = targets.filter(selector);
                targets.not(show).hide('3000');
                show.show('3000');
            }
        }
    });
}); // End of use strict
