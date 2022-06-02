$(function(){
    $('.top_banner i').on('click', function(){
        $('.top_banner').slideUp();
    });

    $('.main_slider').slick({
        arrows: false,
        autoplay: true,
        autoplaySpeed: 1000,
        pauseOnHover:false,
        dots: true,
    })
})


