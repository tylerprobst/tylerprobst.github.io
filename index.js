$(document).ready(function() {
    
    $(window).scroll( function () { 
        if ($(window).scrollTop() >= 420) {
            $('#navbar').addClass('navbar navbar-fixed-top');
            $('.projects').addClass('project-drop');
            $('#control').addClass('navbar-right');
        }
        if ($(window).scrollTop() < 420) {
            $('#navbar').removeClass('navbar navbar-fixed-top');
            $('.projects').removeClass('project-drop');
            $('#control').removeClass('navbar-right');
        }
    });
});