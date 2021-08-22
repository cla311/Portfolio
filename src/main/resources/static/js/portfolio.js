"use strict";

var navOffset = 72;

$(function() {
    autoScroll();
    showTopButton();

    // Smooth scrolling using jQuery easing
    $('.js-scroll-trigger').click(function() {
        var target = this.hash;
        changeHash(target);
        if (target.length) {
            $('html, body').animate({
                scrollTop: ($(target).offset().top - navOffset)
            }, 500, "easeInOutExpo");
        }
    });

    $('.to-top').click(function() {
        removeHash();
        $('html, body').animate({
            scrollTop: 0
        }, 500, "easeInOutExpo");
    });

    // Scroll to top button appear
    $(document).scroll(function() {
        showTopButton();
    });

    // Closes responsive menu when a scroll trigger link is clicked
    $('.js-scroll-trigger, .to-top').click(function() {
        $('.navbar-collapse').collapse('hide');
    });

    // Activate scrollspy to add active class to navbar items on scroll
    $('body').scrollspy({
        target: '#mainNav',
        offset: 80
    });

    // Collapse now if page is not at top
    navbarCollapse();
    // Collapse the navbar when page is scrolled
    $(window).scroll(navbarCollapse());


    var projects = $('.portfolio-column'),
        filters = $('.filter');

    filters.each(function() {
        $(this).click(function() {
            var value = $(this).data('filter');

            if (value === "all") {
                filterAll(filters, projects);
                return false;
            } else {
                $("#all").removeClass('active');
            }

            if ($(this).hasClass('active')) {
                $(this).removeClass('active');
            } else {
                $(this).addClass('active');
            }

            var checkedClasses = filters.filter('.active').toArray().map(function(btn) {
                return $(btn).data('filter');
            });

            if (checkedClasses.length === 0) {
                filterAll(filters, projects);
                return false;
            }

            selector = '.' + checkedClasses.join(', .'),
                show = projects.filter(selector);
            projects.not(show).fadeOut('3000');
            show.fadeIn('3000');
        });
    });
});

function autoScroll() {
    // set a variable for the anchor link which is the location.hash
    var anchorLink = $(window.location.hash);
    // test to see if the link is a anchor link, if not the length will have no value, this is done to avoid js errors on non anchor links
    if (anchorLink.length) {
        // fire the animation from the top of the page to the anchor link offsetting by the fixed elements height, the number is the speed of the animation
        // $("html, body").animate({
        //     scrollTop: (anchorLink.offset().top - navOffset)
        // }, 500, "easeInOutExpo");
        $("html, body").scrollTop(anchorLink.offset().top - navOffset);
    }
};

function changeHash(hashVal) {
    history.pushState("", document.title, window.location.pathname +
        window.location.search + hashVal);
};

function removeHash() {
    history.pushState("", document.title, window.location.pathname +
        window.location.search);
};

function showTopButton() {
    var scrollDistance = $(this).scrollTop();
    if (scrollDistance > 100) {
        $('.scroll-to-top').fadeIn().css("display", "flex");
    } else {
        $('.scroll-to-top').fadeOut();
    }
};

// Collapse Navbar
function navbarCollapse() {
    if ($("#mainNav").offset().top > 100) {
        $('.navbar-collapse').collapse('hide');
    }
};

function filterAll(filters, projects) {
    if (!$('#all').hasClass('active')) {
        filters.removeClass('active');
        $('#all').addClass('active');
        projects.fadeIn('3000');
    }
}