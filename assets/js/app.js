$(document).ready(function(){
    $('.mobile-buttons button').click(function(e){
        $('.buttons').toggleClass('active');
    });    
    $('.mobile-menu button').click(function(e){
        $('header nav .menu').slideToggle();
        $(this).children().toggleClass('ri-menu-line');
        $(this).children().toggleClass('ri-close-line');
    });
    $('.brand-slider').slick({
        slidesToShow: 5,
        slidesToScroll: 2,
        autoplay: true,
        autoplaySpeed: 5000,
        speed: 200,
        arrows: false,
        dots: false,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 530,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 360,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    });
    $('.owl-carousel').owlCarousel({
        loop:false,
        stagePadding: 15,
        margin:10,
        nav:true,
        responsive:{
            0:{
                items:1
            },
            640:{
                items:2
            },
          960:{
                items:3
            },
            1200:{
                items:5
            }
        }
    })
    $(".like-car").click(function(e){
        $(this).children().toggleClass('active');
    });
});