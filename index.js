$(document).ready(function() {
    
    $(window).scroll( function () {
        console.log($(window).scrollTop());
        if ($(window).scrollTop() >= 471) {
            $('#navbar').addClass('navbar navbar-fixed-top');
            $('.projects').addClass('project-drop');
            $('#control').addClass('navbar-right');
        }
        if ($(window).scrollTop() < 471) {
            $('#navbar').removeClass('navbar navbar-fixed-top');
            $('.projects').removeClass('project-drop');
            $('#control').removeClass('navbar-right');
        }
    });
});