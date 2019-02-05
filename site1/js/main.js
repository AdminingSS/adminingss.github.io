$(document).ready(function () {

    // Burger

    $('.burger-wrap').click(function () {
        $(this).next().addClass('active');
        return false;
    });

    // Mobile close

    $('.menu-close').click(function () {
        $('.menu-body').removeClass('active');
    });

    // Mobile nav

    $('.mobile-nav-list > a').click(function (e) {
        e.preventDefault();
        $(this).next().slideToggle();
        $('.mobile-nav-list > a').removeClass('active');
        $(this).addClass('active');
    });

    $('.mobile-sub-list > a').click(function (e) {
        e.preventDefault();
        $(this).next().slideToggle();
    });

    // Top line dropdown

    $('[data-toggle="dropdown"]').dropdown();

    // Top line contact

    $('.contact-tel').click(function (e) {
        e.preventDefault();
        if ($(window).width() > 1240) {
            $(this).next().toggleClass('active');
        } else {
            $(this).next().slideToggle();
        }
    });

    $(document).click(function (e) {
        if (!$(e.target).closest(".contact-info").length) {
            $('.contact-list').removeClass('active');
        }
    });

    // Header scroll top

    /*$(window).scroll(function(){
      if($(window).width() > 1240){
        if($(window).scrollTop() > 40){
          $('.header').css('padding-bottom', 16);
          $('.header.black').css('background-color', 'rgba(0, 0, 0, 0.5)');
          $('.logo').css('padding-top', 4);
        }else{
          $('.header').css('padding-bottom', 22);
          $('.header.black').css('background-color', 'transparent');
          $('.logo').css('padding-top', 18);
        }
      }
    });*/

    // Footer list

    $('.footer-head').click(function () {
        if ($(window).width() < 767) {
            var parent = $(this).parent();
            var content = $(this).next();

            if (!(parent.hasClass('active'))) {
                $('.footer-elem').removeClass('active');
                parent.addClass('active');
                $('.footer-content').slideUp();
                content.slideDown();
            } else {
                parent.removeClass('active');
                content.slideUp();
            }
        }
    });

    // Tickets

    var ticketsSwiper = new Swiper('.tickets-slider', {
        loop: true,
        slidesPerView: 4,
        slidesPerGroup: 4,
        spaceBetween: 22,
        speed: 500,
        pagination: {
            el: '.swiper-pagination',
            clickable: true
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
            clickable: true
        },
        breakpoints: {
            1240: {
                slidesPerView: 3,
                slidesPerGroup: 3
            },
            1100: {
                slidesPerView: 2,
                slidesPerGroup: 2
            },
            767: {
                slidesPerView: 1,
                slidesPerGroup: 1
            }
        }
    });

    ticketsSwiper.on('slideChange', function () {
        $('.tickets-nav .numbers-current').text((ticketsSwiper.realIndex / 4) + 1);
    });

    var count = 0;

    $('.tickets-item').each(function () {
        if (!$(this).hasClass('swiper-slide-duplicate')) {
            count++;
        }
    });

    $('.tickets-nav .numbers-total').text(Math.ceil(count / 4));

    // Tickets info

    $('.tickets-info').slick({
        infinite: true,
        arrows: false,
        slidesToShow: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        speed: 500,
        fade: true,
        cssEase: 'linear',
        draggable: false,
        pauseOnHover: false,
        pauseOnFocus: false,
        swipe: false,
        touchMove: false
    });

    //Destination
    (function () {
        var $destinationsSlider = $('.articles-slider');

        $destinationsSlider.on('setPosition', function (e, slick) {
            var $img = slick.$slides.filter('.slick-current.slick-active').find('.link-image');
            var $slider = slick.$slider;
            var $arrows = slick.$prevArrow.add(slick.$nextArrow);
            var imgPos = $img.offset();
            var sliderPos = $slider.offset();

            if (!$img.length) return;

            $arrows.css({
                top: (sliderPos.top - imgPos.top) + $img.height() / 2 + 'px',
            });

        });

        $destinationsSlider.slick({
            infinite: true,
            slidesToShow: 3,
            slidesToScroll: 3,
            responsive: [
                {
                    breakpoint: 786,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2,
                    }
                },
                {
                    breakpoint: 576,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                    }
                }
            ]
        });
    })();


    // Product

    var productSwiper = new Swiper('.product-slider', {
        loop: true,
        slidesPerView: 2,
        slidesPerGroup: 2,
        spaceBetween: 22,
        speed: 500,
        pagination: {
            el: '.dots',
            clickable: true
        },
        navigation: {
            nextEl: '.next',
            prevEl: '.prev',
            clickable: true
        },
        breakpoints: {
            1240: {
                slidesPerView: 1,
                slidesPerGroup: 1
            }
        }
    });

    productSwiper.on('slideChange', function () {
        $('.product-nav .numbers-current').text((productSwiper.realIndex / 2) + 1);
    });

    var countProduct = 0;

    $('.product-item').each(function () {
        if (!$(this).hasClass('swiper-slide-duplicate')) {
            countProduct++;
        }
    });

    $('.product-nav .numbers-total').text(countProduct / 2);

    // Content gallery

    var contentSwiper = new Swiper('.swiper-container', {
        loop: true,
        slidesPerView: 5,
        spaceBetween: 50,
        speed: 500,
        pagination: {
            el: '.dots',
            clickable: true
        },
        navigation: {
            nextEl: '.next',
            prevEl: '.prev',
            clickable: true
        },
        breakpoints: {
            1240: {
                spaceBetween: 42
            },
            1100: {
                slidesPerView: 4,
                spaceBetween: 20
            },
            767: {
                slidesPerView: 2,
                spaceBetween: 40
            },
            396: {
                slidesPerView: 2,
                spaceBetween: 16,
            }
        }
    });

    contentSwiper.on('slideChange', function () {
        $('.content-gallery-nav .numbers-current').text(contentSwiper.realIndex + 1);
    });

    var countContent = 0;

    $('.content-gallery-item').each(function () {
        if (!$(this).hasClass('swiper-slide-duplicate')) {
            countContent++;
        }
    });

    $('.content-gallery-nav .numbers-total').text(countContent);

    // Select 2
    (function () {
        (function () {
            var $orderSelect = $('.order-select');

            $orderSelect.select2({
                width: '100%'
            });
        })();

      

        (function () {
            var $ticketNotfound = $('.ticket-notfound select');

            $ticketNotfound.select2({
                dropdownAutoWidth: true,
                width: '100%'
            });
        })();
    })();


    // dropdown
    (function () {
if (!$.fn.datepicker) return;

        var $dateOfBirth = $(".date-of-birth-input").datepicker({
            changeMonth: true,
            changeYear: true,
            dateFormat: "dd.mm.yy",
            firstDay: 1,
            maxDate: "+0d",
            minDate: new Date(1920, 0, 1),
            yearRange: "1920:c"
        });


    })();


    // Seat

    $('.seat-nav').on('click', 'li:not(.active)', function () {
        $(this)
            .addClass('active').siblings().removeClass('active')
            .closest('.seat').find('.seat-item').hide().removeClass('active').eq($(this).index()).fadeIn().addClass('active');
    });

    // Ticket dropdown

//  $('.ticket-form .link').click(function(e){
//    e.preventDefault();
//    $(this).closest('.ticket-section').next().slideDown();
//  });

    $('.select-close').click(function () {
        $(this).parent().slideUp();
    });

    // Tickets toggle

    var ticket_current,
        ticket_text,
        ticket_input;

    $('.ticket-toggle .amount li').click(function () {
        ticket_input = $(this).closest('.ticket-toggle').find('input');
        ticket_current = +ticket_input.val();
        if ($(this).hasClass('plus')) {
            ticket_current++;
        } else {
            if (ticket_current !== 1) {
                ticket_current--;
            }
        }
        ticket_input.val(
            ticket_current
        );
    });


    $(document).mousemove(function (e) {
        $('.schema-info').css('left', e.pageX + 20);
        $('.schema-info').css('top', e.pageY + 20);
    });

    $('.my-select').click(function (e) {
        $('.my-select-options').removeClass('active');
        $('.my-select-arrow').removeClass('active');
        $(this).find('.my-select-options').addClass('active');
        $(this).find('.my-select-arrow').addClass('active');
    });

    $('.my-select-option').click(function () {
        $(this).closest('.my-select').find('input').val(
            $(this).children().length > 1 ?
                $(this).find('.ru').text() + ' ' + $(this).find('.eng').text() :
                $(this).find('span').text()
        );
        $('.my-select-options').removeClass('active');
        $(this).closest('.my-select').find('.my-select-arrow').removeClass('active');
        return false;
    });

    $('.showcase-check').click(function () {
        $('.showcase-check').removeClass('active');
        $(this).addClass('active');
    });

    // $('.ticket-menu-search').click(function () {
    //     $('.showcase-wrap').slideToggle();
    // });

    // $('.ticket-menu-filter').click(function () {
    //     $('.ticket-filter-modal').fadeIn();
    //     showMoreFilters();
    // });

    // $('.filter-modal-close').click(function () {
    //     $('.ticket-filter-modal').fadeOut();
    // });

    // $('.ticket-filter-apply button').click(function () {
    //     $('.ticket-filter-modal').fadeOut();
    // });

    // show more filter
    (function () {
        var $showFilterInModal = $('.js__show-more-modal');

        $showFilterInModal.each(function () {
            var $toggler = $(this);
            var $target = $($toggler.attr('href'));
            var $body = $('body');
            var stopSrcollClassname = 'modal-open';


            $target.on('shown.bs.collapse', function () {
                showMoreFilters($target);
                $body.addClass(stopSrcollClassname);
                $target.one('hide.bs.collapse', function () {
                    $body.removeClass(stopSrcollClassname);
                });
            });
        });

        function durationPos() {
            if ($(window).width() < 540) {
                var left,
                    width;
                $('.ticket-duration').each(function () {
                    // left = $(this).prev().find('.time').outerWidth();
                    // width = $(this).next().find('.time').position().left;
                    // $(this).css({
                    //     "left": left,
                    //     "width": width - left - 10
                    // });
                });
            } else {
                $('.ticket-duration').removeAttr('style');
            }
        }

        function showMoreFilters($parent) {
            var filterSelector = '.ticket-filter-param ul';
            var $filters = $parent && $parent.length ?
                $parent.find(filterSelector) :
                $(filterSelector);

            $filters.each(function () {
                var $filter = $(this);
                var $showMoreBtn = $filter.parent().find('> .ticket-filter-more');
                var height = $filter.outerHeight();
                var maxHeight = 112;

                if (height < maxHeight) return;

                $filter.addClass('more');
                $showMoreBtn.show();
            });
        }

        setTimeout(function () {
            durationPos();
            showMoreFilters();
        }, 2100);

        $(window).resize(function () {
            durationPos();
        });

        $('.results .nav-link').click(function () {
            setTimeout(function () {
                durationPos();
                showMoreFilters();
            }, 10);
        });
    })();

    $('.train-type').click(function () {
        $(this).parent().find('.train-type').removeClass('active');
        $(this).addClass('active');
    });

    $('.text-field input').blur(function () {
        if ($(this).val() != '') {
            $(this).addClass('complete');
        } else {
            $(this).removeClass('complete');
        }
    });

    $('.text-field input').each(function () {
        if ($(this).val() != '') {
            $(this).addClass('complete');
        } else {
            $(this).removeClass('complete');
        }
    });

    $('.ticket-filter-more').click(function () {
        $(this).prev().removeClass('more');
        $(this).hide();
    });

    /* $('.order-passenger').click(function () {
         if (!$(this).hasClass('active')) {
             $('.order-passenger').removeClass('active');
             $(this).addClass('active');
         }
     });*/

    $('.search-history-show').click(function () {
        $('.search-history-container').addClass('invisible');
        $('.search-history-body').fadeIn();
    });

    $(document).click(function (e) {
        if (!$(e.target).closest(".search-history-body, .search-history-show").length) {
            $('.search-history-container').removeClass('invisible');
            $('.search-history-body').fadeOut();
        }
    });

    //Cookie
    (function () {
        var $cookiePanel = $('#cookie');
        var cookieName = 'cookie_accepted';
        var options = {
            expires: 365,
        };

        if (Cookies.get(cookieName)) return;

        $cookiePanel.fadeIn(100);
        $cookiePanel.on('click', '.cookie-accept', function (e) {
            e.preventDefault();

            Cookies.set(cookieName, true, options);
            $cookiePanel.fadeOut(100);
        })

    })();

    //Train types slider
    /*(function () {

        var $trainTypesModal = $('.tm-train-types-modal');


        $trainTypesModal.each(function() {
            var $trainType = $(this);
            var $topSlider = $trainType.find('.tm-slider__train-types-top')
            var $mainSlider = $trainType.find('.tm-slider__train-types-main');

            $topSlider.slick({
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: true,
                fade: true,
                infinite: false
            });

            $mainSlider.slick({
                slidesToShow: 6,
                slidesToScroll: 1,
                asNavFor: $topSlider,
                focusOnSelect: true,
                infinite: false
            });

            $topSlider.on('beforeChange', function(event, slick, currentSlide, nextSlide){
                var destSlide = nextSlide + 1;

                $mainSlider.find('.tm-slide-highlight').removeClass('tm-slide-highlight');
                $mainSlider.find('.slick-slide:nth-child('+ destSlide +')').addClass('tm-slide-highlight');
            });

            $trainType.on('shown.bs.modal', function () {

                $topSlider.slick('setPosition');
                $mainSlider.slick('setPosition');
            });
        });

    })();*/

});


