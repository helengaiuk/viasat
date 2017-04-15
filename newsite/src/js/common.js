// text ellipsis

function textEllip() {
    $('.js-ellip').each(function () {
        var target = $(this);

        if(target){
            var lines = target.data('lines') || 2;

            target.ellipsis({
                lines: lines,
                responsive: true
            });
        }

    });
    var ellipCont=$('.js-ellip-cont'),
        ellipDesc=$('.js-ellip-desc'),
        ellipTop=$('.js-ellip-top');
    var lines=Math.round((ellipCont.height()-ellipTop.height())/18);
        ellipDesc.data('lines', lines);
        ellipDesc.ellipsis({
            lines: lines,
            responsive: true
        });
}

$(document).ready(function() {

    var tabletWidth = window.matchMedia('(max-width: 1024px)').matches;
    // menu

    $('.js-menu-btn').on('click', function () {
        $(this).toggleClass('is-active');
        $('.js-menu').toggleClass('is-active');
    });

    //slider init
    var slider = {

        initSlider: function(selector, opts) {
            var slider = $(selector);

            if (!slider.length) {
                return ;
            }

            slider.on('init', function() {
                setTimeout(function(){
                    slider.addClass('loaded');
                }, 200);
            });
            slider.slick(opts);
        }

    };

    // promo
    slider.initSlider('.js-promo', {
        dots: true,
        autoplay: true,
        fade: true,
        autoplaySpeed: 4000,
        speed: 500
    });

    // premiers
    slider.initSlider('.js-blog', {
        slidesToShow: 5,
        responsive: [{
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                dots: true
            }
        },{
            breakpoint: 767,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: false,
                dots: true
            }
        }]
    });

    // default slider
    slider.initSlider('.js-slider2', {
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [{
            breakpoint: 1025,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1
            }
        },{
            breakpoint: 767,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }]
    });

    // watch at channel slider
    slider.initSlider('.js-tvshow', {
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [{
            breakpoint: 1025,
            settings: {
                slidesToShow: 3
            }
        },{
            breakpoint: 767,
            settings: {
                slidesToShow: 2
            }
        },{
            breakpoint: 601,
            settings: {
                slidesToShow: 1
            }
        }]
    });

    // channels slider
    slider.initSlider('.js-channels2', {
        slidesToShow: 6,
        slidesToScroll: 6,
        dots: true,
        responsive: [{
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3
            }
        },{
            breakpoint: 768,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }]
    });

    // facts slider
    slider.initSlider('.js-facts', {
        slidesToShow: 1,
        slidesToScroll: 1,
        responsive: [{
            breakpoint: 640,
            settings: {
                arrows: false,
                dots: true
            }
        }]
    });

    // quotes slider
    slider.initSlider('.js-quotes', {
        slidesToShow: 1,
        slidesToScroll: 1,
        responsive: [{
            breakpoint: 766,
            settings: {
                arrows: false,
                dots: true
            }
        }]
    });

    // posters slider
    slider.initSlider('.js-posters', {
        slidesToShow: 4,
        slidesToScroll: 1,
        infinite: false,
        responsive: [{
            breakpoint: 600,
            settings: {
                slidesToShow: 2,
                arrows: false,
                dots: true
            }
        }]
    });
    
    // rewards slider
    function rewardsSlider() {
        $('.js-rewards-slider').slick({
            slidesToShow: 4,
            slidesToScroll: 1,
            infinite: false,
            responsive: [{
                breakpoint: 900,
                settings: {
                    slidesToShow: 3
                }
            }, {
                breakpoint: 769,
                settings: {
                    slidesToShow: 2,
                    arrows: false,
                    dots: true
                }
            }, {
                breakpoint: 481,
                settings: {
                    slidesToShow: 1,
                    arrows: false,
                    dots: true
                }
            }]
        });
    }
    rewardsSlider();

    // actors slider
    slider.initSlider('.js-sctors-slider', {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: false
    });

    // carousel at promo page

    if ($('.js-promopage').length) {

        var promoSlider = $('.js-promopage');

        promoSlider.on('init', function (event, slick) {
            promoSlider.addClass('loaded');
            var centerSlide = $(this).find('.slick-center');
            var slideBeforeCenter = centerSlide.prev();
            var slideAfterCenter = centerSlide.next();

            slideBeforeCenter.addClass('prev-slide');
            slideAfterCenter.addClass('next-slide');
        });

        promoSlider.slick({
            speed: 400,
            arrows: true,
            slidesToShow: 3,
            slidesToScroll: 1,
            initialSlide: 1,
            infinite: false,
            touchThreshold: 100,
            centerMode: true,
            responsive: [
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1
                    }
                }
            ]
        });

        promoSlider.on('beforeChange', function(event, slick, currentSlide, nextSlide){
            var centerSlide = $(this).find('.slick-center');
            if(currentSlide < nextSlide){
                $('.prev-slide').removeClass('prev-slide');
                centerSlide.addClass('prev-slide');
                centerSlide.prev().removeClass('prev-slide');
                centerSlide.next().removeClass('next-slide');
                centerSlide.next().next().addClass('next-slide');
            }
            else {
                $('.next-slide').removeClass('next-slide');
                centerSlide.addClass('next-slide');
                centerSlide.prev().removeClass('prev-slide');
                centerSlide.prev().prev().addClass('prev-slide');
                centerSlide.next().removeClass('next-slide');
            }
        });
    }

    // scrolltop btn
    if(tabletWidth){
        function scrollTopBtn() {
            var btn = $('.js-scrolltop');
            var viewportHeight = $(window).outerHeight();

            initPoint = $(document).height() - viewportHeight - 100;

            if($(window).scrollTop() >= initPoint){
                btn.addClass('visible');
            }
            else {
                btn.removeClass('visible');
            }
        }
        // scrollTopBtn();

        $(document).on('scroll', function () {
            scrollTopBtn();
        });

        $('.js-scrolltop').on('click', function () {
           $('html, body').animate({
               scrollTop: 0
           })
        });
    }
    
    // custom select with js-scrollpane

    if($('.js-select2').length){
        $('.js-select2').select2({
            minimumResultsForSearch: -1
        });
        
        $('.js-filters-reset').on('click', function () {
           var form = $(this).closest('.js-filters-form');

            $('.js-select2').select2('val', '');
        });

        $(document).on("select2:open", ".js-select2", function () {
            $('.select2-results').perfectScrollbar();
            setTimeout(function () {
                $('.select2-results').perfectScrollbar('update');
            },100);
        });
    }
    
    // watch list dropdown
    
    $('.js-watch-btn').on('click', function () {
        $(this).toggleClass('open');
        $(this).closest('.js-watch').find('.js-watch-list').slideToggle();
    });

    // hide content on mobile

    $('.js-wrap-btn').on('click', function () {
        var content = $(this).toggleClass('is-active').closest('.js-wrap').find('.js-wrap-cont');
        content.slideToggle();
    });

    textEllip();

    function stickySocials() {
        if($(window).width() > 480){

            var post = $('.post'),
                target = $('.js-socials-post'),
                targetHeight = target.outerHeight(),
                scrollTop = $(window).scrollTop();

            var start_point = post.offset().top + $('.post__date').outerHeight() - 8;
            var end_point = post.offset().top + post.height() - targetHeight -12;

            if(scrollTop >= start_point){
                target.addClass('fixed');

                if(scrollTop >= end_point) {
                    target.removeClass('fixed').addClass('is-bottom');
                }
                else {
                    target.addClass('fixed').removeClass('is-bottom');
                }
            }
            else {
                target.removeClass('fixed');
            }


        }
        else {
            $('.js-socials-post').removeClass('fixed is-bottom');
        }
    }
    if($('.post').length){
        stickySocials();
    }
    $(window).resize(function () {
        if($('.post').length){
            stickySocials();
        }
    });
    $(window).on('scroll', function () {
        if($('.post').length){
            stickySocials();
        }
    });

});