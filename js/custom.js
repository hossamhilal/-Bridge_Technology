/*global $ */
(function ($) {
    "use strict";

    // // Pre Loading 
    // window.onpaint = preloadFunc();
    // function preloadFunc() {
    //     $('body').addClass('stopScroll');
    // }
    
    // Loader 
    // $(window).on('load', function () { 
    //     setTimeout(function () {
    //         $('.loader').fadeOut(3000, function () {
    //             $('body').removeClass('stopScroll');
    //             $(this).remove();
    //         }); 
    //     },5000);   
    // });

    // OPEN SIDE  MENU 
    $('.menuBtn').on('click', function () {
        $('.navMenu').toggleClass('show');
        $('.bodyOverlay').addClass('show');
        setTimeout(function () {
            $('body').addClass('stopScroll');
        }, 100);
    });

    // CLOSE SIDE MENU 
    $('.bodyOverlay').on('click', function () {
        $(this).removeClass('show');
        $('.navMenu').removeClass('show');
        $('body').removeClass('stopScroll');
    });

    
    // Partners Carousel 
    let partnerOwl = $('.partnerOwl');
    partnerOwl.owlCarousel({
        loop:true,
        margin:0,
        nav:false,
        dots: false,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:3
            },
            1000:{
                items:4
            }
        }
    });

    // Go to the previous item
    $('.parntnerPrevious').click(function() {
        partnerOwl.trigger('prev.owl.carousel');
    });

    // Go to the next item
    $('.parntnerNext').click(function() {
        partnerOwl.trigger('next.owl.carousel');
    });

    // Team Carousel 
    let teamOwl = $('.teamOwl');
    teamOwl.owlCarousel({
        loop:true,
        margin:0,
        nav:false,
        dots: false,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:3
            },
            1000:{
                items:4
            }
        }
    });

     // Go to the previous item
     $('.teamPrevious').click(function() {
        teamOwl.trigger('prev.owl.carousel');
    });

    // Go to the next item
    $('.teamNext').click(function() {
        teamOwl.trigger('next.owl.carousel');
    });
    


    // iniat WOW Js
    new WOW().init();


})(jQuery);

