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

    // Tickets toggle

    var ticket_current,
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

    //scroll to top new
    (function () {
        var $btn = $('.js-scroll-to-top-new');
        const $window = $(window);
        var $htmlBody = $("html, body");

        $window.on('scroll', displayScrollTopBtn);
        $btn.on('click', function () {
            $htmlBody.animate({
                    scrollTop: 0
                },
                500
            );
        });

        function displayScrollTopBtn() {
            if($window.scrollTop() >= 700) {
                //$subHeadHolder.addClass('scrollfixed');
                $btn.addClass('displayed');
            }
            else if ($window.scrollTop() < 690) {
                //$subHeadHolder.removeClass('scrollfixed');
                $btn.removeClass('displayed');
            }
        }

    })();

    (function () {
        const selectSeatsModal = $('.tm-js-modal-seats');
        const selectSeatsModalSlider = $('#selectSeatsModalSlider');

        selectSeatsModalSlider.on('show.bs.modal', function () {
            selectSeatsModal.modal('hide');
        });

        selectSeatsModalSlider.on('hidden.bs.modal', function () {
            selectSeatsModal.modal('show');
        });

    })();

    (function () {
        const $subHeadHolder = $('.js-free-panel');
        const $window = $(window);

        $window.on('scroll', fixateSubHead);
        $subHeadHolder.on('click', displayFullSubHead);

        function fixateSubHead() {
            if($window.scrollTop() >= 700 && $window.width() >= 1200) {
                //$subHeadHolder.addClass('scrollfixed');
                $subHeadHolder.addClass('tm-small');
                $subHeadHolder.addClass('tm-fixed');
            }
            else if ($window.scrollTop() < 690 || $window.width() < 1200) {
                //$subHeadHolder.removeClass('scrollfixed');
                $subHeadHolder.removeClass('tm-fixed');
                $subHeadHolder.removeClass('tm-small');
            }
        }

        function displayFullSubHead() {
            $subHeadHolder.removeClass('tm-small');
        }

    })();

});


