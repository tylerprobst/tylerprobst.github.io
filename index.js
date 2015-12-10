$(document).ready(function() {
    
    $(window).scroll( function () {
        console.log($(window).scrollTop());
        if ($(window).scrollTop() >= 751) {
            $('.projects').addClass('project-drop');
            $('#navbar').addClass('navbar-right');
        }
        if ($(window).scrollTop() < 754) {
            $('.projects').removeClass('project-drop');
            $('#navbar').removeClass('navbar-right');
        }
    });
});