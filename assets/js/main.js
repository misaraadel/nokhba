$(document).ready(function () {
    /*start the loading page */
    jQuery("#preloader").fadeOut(4000);
    //scroll to top make fade for button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 600) {
            $(".scroll-top-button").addClass('active-scroll');
        } else {
            $(".scroll-top-button").removeClass('active-scroll');
        }
    });
    $(window).scroll(function () {
        if ($(this).scrollTop() > 600) {
            $(".bottom-nav").addClass('active-bottom-nav');
        } else {
            $(".bottom-nav").removeClass('active-bottom-nav');
        }
    });
    //scroll to top button
    $(".scroll-top-button").on('click', function () {
        $('html , body').animate({
            scrollTop: 0
        }, 100);
    });
     //Wow intit
     wow = new WOW({
        boxClass: 'wow',
        animateClass: 'animated',
        offset: 200,
        mobile: true,
        live: false
    });
    wow.init();
    //start active navbar
    //start active navbar
    $('.toggle-btn').click(function(){
        $('.sidebar').addClass('active-sidemenu');
    });
    $('.close-nav').click(function(){
        $('.sidebar').removeClass('active-sidemenu');
    });
    $('.sideMenu').click(function(){
        $('.category-side-menu').addClass('active-sidemenu');
    });
    $('.usersideMenu').click(function(){
        $('.user-side-menu').addClass('active-sidemenu');
    });
    $('.currencySideMenu').click(function(){
        $('.currency-side-menu').addClass('active-sidemenu');
    });
    $('.LangsideMenu').click(function(){
        $('.lang-side-menu').addClass('active-sidemenu');
    });
    $('.menu-back').click(function(){
        $('.sub-menu').removeClass('active-sidemenu');
    });
    $('.overlay').click(function(){
        $('.sidebar').removeClass('active-sidemenu');
        $('.category-side-menu').removeClass('active-sidemenu');
        $('.lang-side-menu').removeClass('active-sidemenu');
        $('.currency-side-menu').removeClass('active-sidemenu');
        $('.user-side-menu').removeClass('active-sidemenu');
    });
    
    $('.first-card-header').click(function(){
        $('.first-card-header').toggleClass('active-arrow');
    });
    $('.second-card-header').click(function(){
        $('.second-card-header').toggleClass('active-arrow');
    });
    $('.third-card-header').click(function(){
        $('.third-card-header').toggleClass('active-arrow');
    });
    
   //start active navbar
   $('.cart-circle').click(function(){
        $('.cart-shape').addClass('active-cart');
    });
    $('.cart-overlay').click(function(){
        $('.cart-shape').removeClass('active-cart');
    });
    $('.close-cart').click(function(){
        $('.cart-shape').removeClass('active-cart');
    });
    //change navbar color on scroll
    $(document).scroll(function () {
        var $nav = $(".navbar-fixed-top");
        $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
    });
    //bottom nav
    $('.bottom-nav').click(function(){
        $('.toggler').toggleClass('active');
        $('ul').toggleClass('active');
    });
    var swiper = new Swiper('.swiper-container', {
      spaceBetween: 0,
      loop: true,
      effect: 'fade',
      autoplay: {
        delay: 5000,
        disableOnInteraction: false,
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });
    //popup close
    $('.add-to-cart').click(function(){
        $('.popup').addClass('active-popup');
    });
    $('.popup-overlay').click(function(){
        $('.popup').removeClass('active-popup');
    });
    $('.popup-close').click(function(){
        $('.popup').removeClass('active-popup');
    }); 
    const favorite = document.querySelectorAll('.favroite-btn');
    favorite.forEach(button => {
        button.addEventListener('click' , activeClass);
    });
    //function for clickable
    function activeClass(){
        let button = this ;
        button.classList.toggle('white-btn')
        button.classList.toggle('blue-btn');
    } 
     //start swipper article
     var swiper = new Swiper('.swiper-product', {
        loop: true,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
            type: 'fraction',
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        breakpoints: {
            650:{
                slidesPerView: 1,
                spaceBetween: 20,
            },
            1000:{
                slidesPerView: 4,
                spaceBetween: 30,
            }
        }
    });
    var swiper = new Swiper('.swiper-testmonials', {
        spaceBetween: 30,
        centeredSlides: true,
        autoplay: {
          delay: 5000,
          disableOnInteraction: false,
        },
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
    });
});