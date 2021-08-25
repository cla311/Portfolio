"use strict";

var page = $("html, body");

$(function() {
    // Auto scroll to section if page was loaded with an anchor link in the url
    autoScroll();
    // Scroll to corisponding section when a navbar link is clicked
    $('.js-scroll-trigger').each(function() {
        var menuItem = $(this);
        menuItem.click(function() {
            navbarCollapse();
            if ($(".navbar-toggler").css("display") == "none") {
                var navOffset = getNavOffset();
                scrollToSection(menuItem, navOffset);
            } else {
                scrollToSection(menuItem, 0);
            }
        });
    });

    // Show scroll to top button if page is not at top
    showTopButton();
    // Scroll to top button appear
    $(document).scroll(function() {
        showTopButton();
    });

    // Scroll to top when the button is clicked
    $('.to-top').click(function() {
        toTop();
    });

    // Activate scrollspy to add active class to navbar items on scroll
    $('body').scrollspy({
        target: '#mainNav',
        offset: 80
    });

    // Collapse now if page is not at top
    navbarCollapse();
    // Collapse the navbar when page is scrolled
    $(window).scroll(function() {
        navbarCollapse();
    });

    var projects = $(".portfolio-column"),
        filters = $(".filter");

    filters.each(function() {
        $(this).click(function() {
            filterProjects($(this), filters, projects);
        });
    });
});

// Collapse Navbar
function navbarCollapse() {
    $('#navbarResponsive').collapse('hide');
};

function getNavOffset() {
    var offset = $("#mainNav").outerHeight();
    return offset - 32;
}

function autoScroll() {
    var navOffset = getNavOffset();

    // Set a variable for the anchor link which is the location.hash
    var anchorLink = window.location.hash;
    // Test to see if the link is a anchor link, if not the length will have no value, this is done to avoid js errors on non anchor links
    if (anchorLink.length > 0) {
        // Fire the animation from the top of the page to the anchor link offsetting by the fixed elements height, the number is the speed of the animation
        // Smooth scrolling using jQuery easing
        page.animate({
            scrollTop: ($(anchorLink).offset().top - navOffset)
        }, 500, "easeInOutExpo");
        // $("html, body").scrollTop($(anchorLink).offset().top - navOffset);
    }
};

function changeHash(hashVal) {
    var newUrl = window.location.href.split("#")[0] + hashVal;
    if (window.location.href != newUrl) {
        history.pushState("", newUrl);
    }
};

function removeHash() {
    var newUrl = window.location.href.split("#")[0];
    if (window.location.href != newUrl) {
        history.pushState("", newUrl);
    }
};

function scrollToSection(section, navOffset) {
    var target = section.prop("hash");
    changeHash(target);
    if (target.length > 0) {
        // Smooth scrolling using jQuery easing
        page.animate({
            scrollTop: ($(target).offset().top - navOffset)
        }, 500, "easeInOutExpo");
    }

};

function toTop() {
    navbarCollapse();
    removeHash();
    $('html, body').stop().animate({
        scrollTop: 0
    }, 500, "easeInOutExpo");
};

function showTopButton() {
    var scrollDistance = $(document).scrollTop();
    if (scrollDistance > 100) {
        $('.scroll-to-top').fadeIn().css("display", "flex");
    } else {
        $('.scroll-to-top').fadeOut();
    }
};

function filterAll(filters, projects) {
    if (!$('#all').hasClass('active')) {
        filters.removeClass('active');
        $('#all').addClass('active');
        projects.fadeIn('3000');
    }
}

function filterProjects(currFilter, filters, projects) {
    var value = currFilter.data('filter');

    if (value === "all") {
        filterAll(filters, projects);
        return false;
    } else {
        $("#all").removeClass('active');
    }

    if (currFilter.hasClass('active')) {
        currFilter.removeClass('active');
    } else {
        currFilter.addClass('active');
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
}