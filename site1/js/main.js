//helper
function initer(fn, n) {
    var count = n || 10;
    var result = false;
    var timer = 1000;

    function run(firstTime) {
        setTimeout(function () {
            result = fn();
            count--;

            if (result || count === 0) return;

            run();
        }, firstTime ? 0 : timer);
    }

    run(true);
}

$(document).ready(function () {

    //Select tikets alert

    (function () {
        const alertTrigger = $('.js-button-popover-tickets');
        const options = {
            placement: 'bottom',
            trigger: 'manual',
            template: '<div class="popover tm-popover-danger" role="tooltip"><div class="arrow"></div><div class="popover-body"></div></div>'
        };

        alertTrigger.popover(options);

        alertTrigger.each(function () {
            const elem = this;
            $(this.dataset.target).on('shown.bs.collapse', {el: elem}, function (event) {
                $(event.data.el).popover('show');
            });
            $(this.dataset.target).on('hidden.bs.collapse', {el: elem}, function (event) {
                $(event.data.el).popover('hide');
            });
        });

        alertTrigger.on('shown.bs.popover', function () {
            const elem = this;
            $(window).on('click', {el: elem}, popoverHandle);
        });

        function popoverHandle(event) {
            $(event.data.el).popover('hide');
            $(window).off('click', popoverHandle);
        }

    })();

    // Top line dropdown

    $('[data-toggle="dropdown"]').dropdown();

    // Top line contact
    //may be obsolete
    $('.contact-tel').click(function (e) {
        e.preventDefault();
        if ($(window).width() > 1240) {
            $(this).next().toggleClass('active');
        } else {
            $(this).next().slideToggle();
        }
    });

    //may be obsolete
    $(document).click(function (e) {
        if (!$(e.target).closest(".contact-info").length) {
            $('.contact-list').removeClass('active');
        }
    });

    // Tickets

    // var ticketsSwiper = new Swiper('.tickets-slider', {
    //     loop: true,
    //     slidesPerView: 4,
    //     slidesPerGroup: 4,
    //     spaceBetween: 22,
    //     speed: 500,
    //     pagination: {
    //         el: '.swiper-pagination',
    //         clickable: true
    //     },
    //     navigation: {
    //         nextEl: '.swiper-button-next',
    //         prevEl: '.swiper-button-prev',
    //         clickable: true
    //     },
    //     breakpoints: {
    //         1240: {
    //             slidesPerView: 3,
    //             slidesPerGroup: 3
    //         },
    //         1100: {
    //             slidesPerView: 2,
    //             slidesPerGroup: 2
    //         },
    //         767: {
    //             slidesPerView: 1,
    //             slidesPerGroup: 1
    //         }
    //     }
    // });
    //
    // ticketsSwiper.on('slideChange', function () {
    //     $('.tickets-nav .numbers-current').text((ticketsSwiper.realIndex / 4) + 1);
    // });

    // var count = 0;
    //
    // $('.tickets-item').each(function () {
    //     if (!$(this).hasClass('swiper-slide-duplicate')) {
    //         count++;
    //     }
    // });

    //$('.tickets-nav .numbers-total').text(Math.ceil(count / 4));

    // Tickets info

    // $('.tickets-info').slick({
    //     infinite: true,
    //     arrows: false,
    //     slidesToShow: 1,
    //     autoplay: true,
    //     autoplaySpeed: 3000,
    //     speed: 500,
    //     fade: true,
    //     cssEase: 'linear',
    //     draggable: false,
    //     pauseOnHover: false,
    //     pauseOnFocus: false,
    //     swipe: false,
    //     touchMove: false
    // });

    //Destination
    (function () {
        var $destinationsSlider = $('.articles-slider, .destinations-slider');

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
            lazyLoad: 'ondemand',
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

    //Coach slider
    (function () {
        var $coachSlider = $('.coach-slider');

        $coachSlider.slick({
            infinite: true
        });
    })();


    // Product

    // var productSwiper = new Swiper('.product-slider', {
    //     loop: true,
    //     slidesPerView: 2,
    //     slidesPerGroup: 2,
    //     spaceBetween: 22,
    //     speed: 500,
    //     pagination: {
    //         el: '.dots',
    //         clickable: true
    //     },
    //     navigation: {
    //         nextEl: '.next',
    //         prevEl: '.prev',
    //         clickable: true
    //     },
    //     breakpoints: {
    //         1240: {
    //             slidesPerView: 1,
    //             slidesPerGroup: 1
    //         }
    //     }
    // });

    // productSwiper.on('slideChange', function () {
    //     $('.product-nav .numbers-current').text((productSwiper.realIndex / 2) + 1);
    // });

    // var countProduct = 0;
    //
    // $('.product-item').each(function () {
    //     if (!$(this).hasClass('swiper-slide-duplicate')) {
    //         countProduct++;
    //     }
    // });
    //
    // $('.product-nav .numbers-total').text(countProduct / 2);

    // Content gallery
    //?
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
    })();

    // dropdown

    (function () {
        if (!$.fn.datepicker) return;

        var $dateOfBirth = $(".date-of-birth-input").datepicker({
            changeMonth: true,
            changeYear: true,
            dateFormat: "dd.mm.yy",
            showOptions: {direction: "down"},
            defaultDate: '-30y',
            firstDay: 1,
            maxDate: "+0d",
            minDate: new Date(1920, 0, 1),
            yearRange: "1920:c"
        }).attr('placeholder', moment().subtract(30, 'years').format('DD.MM.YYYY')).keyup(function () {
            $(this).val('');
        });
    })();


    // Seat

    // $('.seat-nav').on('click', 'li:not(.active)', function () {
    //     $(this)
    //         .addClass('active').siblings().removeClass('active')
    //         .closest('.seat').find('.seat-item').hide().removeClass('active').eq($(this).index()).fadeIn().addClass('active');
    // });

    // Ticket dropdown

//  $('.ticket-form .link').click(function(e){
//    e.preventDefault();
//    $(this).closest('.ticket-section').next().slideDown();
//  });

    // $('.select-close').click(function () {
    //     $(this).parent().slideUp();
    // });

    // Tickets toggle

    var ticket_current,
        // ticket_text,
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


    // $('.my-select').click(function (e) {
    //     $('.my-select-options').removeClass('active');
    //     $('.my-select-arrow').removeClass('active');
    //     $(this).find('.my-select-options').addClass('active');
    //     $(this).find('.my-select-arrow').addClass('active');
    // });
    //
    // $('.my-select-option').click(function () {
    //     $(this).closest('.my-select').find('input').val(
    //         $(this).children().length > 1 ?
    //             $(this).find('.ru').text() + ' ' + $(this).find('.eng').text() :
    //             $(this).find('span').text()
    //     );
    //     $('.my-select-options').removeClass('active');
    //     $(this).closest('.my-select').find('.my-select-arrow').removeClass('active');
    //     return false;
    // });

    $('.showcase-check').click(function () {
        $('.showcase-check').removeClass('active');
        $(this).addClass('active');
    });


    // show more filter
    initer(function () {
        var $showFilterInModal = $('.js__show-more-modal');

        if (!$showFilterInModal.length) return false;

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

                return;

                // $('.ticket-duration').each(function () {
                // });
            } else {
                $('.ticket-duration').removeAttr('style');
            }
        }

        function showMoreFilters($parent) {
            return;
            var filterSelector = '.ticket-filter-param ul';
            var $filters = $parent && $parent.length ?
                $parent.find(filterSelector) :
                $(filterSelector);

            $filters.each(function () {
                var $filter = $(this);
                var activeClassName = 'tm-active';
                var closeClassName = 'tm-close';
                var $showMoreBtn = $filter.parent().find('> .ticket-filter-more');
                var $filterItems = $filter.children();

                if ($filterItems.length < 4) return;

                $filter.removeClass(activeClassName);
                $filter.css({
                    height: 'auto',
                });
                var filterStartHeight = $filter.height() + 'px';
                $filter.addClass(activeClassName);
                var filterEndHeight = $filter.height() + 'px';
                $filter.css({
                    height: filterStartHeight,
                });
                $filter.addClass(closeClassName);
                $showMoreBtn.show();

                $showMoreBtn.off('click');
                $showMoreBtn.on('click', function () {
                    $showMoreBtn.toggleClass(activeClassName);
                    $filter.toggleClass(closeClassName);
                    $filter.animate({
                        height: $showMoreBtn.hasClass(activeClassName) ? filterEndHeight : filterStartHeight
                    }, 500);
                });
            });
        }

        setTimeout(function () {
            durationPos();
            showMoreFilters();
        }, 2100);

        $(window).on('resize', function () {
            durationPos();
        });

        return true;
    });

    $('.train-type').click(function () {
        $(this).parent().find('.train-type').removeClass('active');
        $(this).addClass('active');
    });

    const $carTypeItems = $('.car-type-item');

    // $carTypeItems.click(function () {
    //     if($(this).hasClass('active')) return;
    //
    // });

    $carTypeItems.each(function () {
        $(this).find('.car-type-tariff').click(function () {
            const $thisItem = $(this);
            if($thisItem.hasClass('active')) return;
            const $parentItem = $(this).parents('.car-type-item');
            $carTypeItems.removeClass('active');
            $carTypeItems.find('.car-type-tariff').removeClass('active');
            $parentItem.addClass('active');
            $thisItem.addClass('active');
        });
    });

    // $('.car-type-item .car-type-tariff').click(function () {
    //
    //     $(this).addClass('active');
    // });

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

    //Scroll to top
    (function () {
        var $btn = $('.js-scroll-to-top');
        var $htmlBody = $("html, body");

        $btn.on('click', smoothScroll);

        function smoothScroll(e) {
            var $anchor = $(this);
            var $target = $($anchor.attr('data-target'));
            var translation = $anchor.attr('data-translation') || $($anchor.attr('data-translation-element')).outerHeight(true);

            e.preventDefault();

            $htmlBody.animate({
                    scrollTop: $target.offset().top - (translation || 0)
                },
                500
            );
        }
    })();

});


