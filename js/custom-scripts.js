

    /**
     * ============================
     * GOOGLE MAP
     * ============================
    */
    // jQuery(document).ready(function(e) {
    //     function t(e, t) {
    //         var i = document.getElementById("cd-zoom-in"),
    //             o = document.getElementById("cd-zoom-out");
    //         e.appendChild(i), e.appendChild(o), google.maps.event.addDomListener(i, "click", function() {
    //             t.setZoom(t.getZoom() + 1)
    //         }), google.maps.event.addDomListener(o, "click", function() {
    //             t.setZoom(t.getZoom() - 1)
    //         })
    //     }
    //     var i = 22.276257,
    //         o = 114.171028,
    //         s = 19,
    //         l = navigator.userAgent.toLowerCase().indexOf("trident") > -1,
    //         n = l ? "images/googlemap-pin.png" : "images/googlemap-pin.png",
    //         a = "#2d313f",
    //         r = -20,
    //         y = 5,
    //         p = [{
    //             featureType: "administrative",
    //             elementType: "geometry",
    //             stylers: [{
    //                 "color": "#a7a7a7"
    //             }]
    //         },
    //         {
    //             featureType: "administrative",
    //             elementType: "labels.text.fill",
    //             stylers: [{
    //                     "visibility": "on"
    //                 },
    //                 {
    //                     "color": "#737373"
    //                 }
    //             ]
    //         },
    //         {
    //             featureType: "administrative.land_parcel",
    //             elementType: "geometry.fill",
    //             stylers: [{
    //                 "color": "#000000"
    //             }]
    //         },
    //         {
    //             featureType: "landscape",
    //             elementType: "geometry.fill",
    //             stylers: [{
    //                     "visibility": "on"
    //                 },
    //                 {
    //                     "color": "#cdcdcd"
    //                 }
    //             ]
    //         },
    //         {
    //             featureType: "poi",
    //             elementType: "geometry.fill",
    //             stylers: [{
    //                     "visibility": "on"
    //                 },
    //                 {
    //                     "color": "#dadada"
    //                 }
    //             ]
    //         },
    //         {
    //             featureType: "poi",
    //             elementType: "labels",
    //             stylers: [{
    //                 "visibility": "off"
    //             }]
    //         },
    //         {
    //             featureType: "poi",
    //             elementType: "labels.icon",
    //             stylers: [{
    //                 "visibility": "off"
    //             }]
    //         },
    //         {
    //             featureType: "road",
    //             elementType: "geometry.fill",
    //             stylers: [{
    //                 "color": "#ff0000"
    //             }]
    //         },
    //         {
    //             featureType: "road",
    //             elementType: "geometry.stroke",
    //             stylers: [{
    //                     "saturation": "-22"
    //                 },
    //                 {
    //                     "hue": "#adff00"
    //                 }
    //             ]
    //         },
    //         {
    //             featureType: "road",
    //             elementType: "labels.text.fill",
    //             stylers: [{
    //                 "color": "#000000"
    //             }]
    //         },
    //         {
    //             featureType: "road",
    //             elementType: "labels.icon",
    //             stylers: [{
    //                 "visibility": "off"
    //             }]
    //         },
    //         {
    //             featureType: "road.highway",
    //             elementType: "geometry.fill",
    //             stylers: [{
    //                 "color": "#ffffff"
    //             }]
    //         },
    //         {
    //             featureType: "road.highway",
    //             elementType: "geometry.stroke",
    //             stylers: [{
    //                     "visibility": "on"
    //                 },
    //                 {
    //                     "color": "#b3b3b3"
    //                 }
    //             ]
    //         },
    //         {
    //             featureType: "road.arterial",
    //             elementType: "geometry.fill",
    //             stylers: [{
    //                 "color": "#ffffff"
    //             }]
    //         },
    //         {
    //             featureType: "road.arterial",
    //             elementType: "geometry.stroke",
    //             stylers: [{
    //                 "color": "#d6d6d6"
    //             }]
    //         },
    //         {
    //             featureType: "road.local",
    //             elementType: "geometry.fill",
    //             stylers: [{
    //                     "visibility": "on"
    //                 },
    //                 {
    //                     "color": "#ffffff"
    //                 },
    //                 {
    //                     "weight": 1.8
    //                 }
    //             ]
    //         },
    //         {
    //             featureType: "road.local",
    //             elementType: "geometry.stroke",
    //             stylers: [{
    //                 "color": "#d7d7d7"
    //             }]
    //         },
    //         {
    //             featureType: "transit",
    //             elementType: "all",
    //             stylers: [{
    //                     "color": "#808080"
    //                 },
    //                 {
    //                     "visibility": "off"
    //                 }
    //             ]
    //         },
    //         {
    //             featureType: "water",
    //             elementType: "geometry.fill",
    //             stylers: [{
    //                 "color": "#d3d3d3"
    //             }]
    //         }
    //         ],
    //         m = {
    //             center: new google.maps.LatLng(i, o),
    //             zoom: s,
    //             panControl: !1,
    //             zoomControl: !1,
    //             mapTypeControl: !1,
    //             streetViewControl: !1,
    //             mapTypeId: google.maps.MapTypeId.ROADMAP,
    //             scrollwheel: !1,
    //             styles: p
    //         },
    //         u = new google.maps.Map(document.getElementById("google-container"), m),
    //         g = (new google.maps.Marker({
    //             position: new google.maps.LatLng(i, o),
    //             map: u,
    //             visible: !0,
    //             icon: n
    //         }), document.createElement("div"));
    //     new t(g, u);

    //     u.controls[google.maps.ControlPosition.RIGHT_BOTTOM].push(g)
    // });



(function ($) {

    'use strict';


    /**
     * =====================================
     * windows height and width
     * =====================================
     */
    function windowSize(el) {
        var result = 0;
        if ("height" == el)
            result = window.innerHeight ? window.innerHeight : $(window).height();
        if ("width" == el)
            result = window.innerWidth ? window.innerWidth : $(window).width();

        return result;
    }


    /**
     * =====================================
     * email address validation
     * =====================================
     */
    function isValidEmail(emailAddress) {
        var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
        return pattern.test(emailAddress);
    };



    /**
     * =======================================
     * Home Section Fullscreen View.
     * =======================================
     */
    var fullscreen_home = function (id) {

        var mainSection = $(id),
            paddingSection = mainSection.find(".inner-container"),
            windowWidth = windowSize('width'),
            windowHeight = windowSize('height')

        if (windowWidth >= 767 && windowHeight >= (paddingSection.height() + 170 * 2)) {

            mainSection.css({
                'height': windowHeight + "px",
                'position': 'relative'
            });

            var top = Math.max((windowHeight / 2) - (paddingSection.height() / 2), 0),
                PTop = 0,
                PBottom = 0;

            if (top == Math.round(top)) {
                PTop = PBottom = top;
            } else {
                PTop = Math.round(top) - 1;
                PBottom = Math.round(top);
            }

            paddingSection.css('padding-top', PTop + 'px');
            paddingSection.css('padding-bottom', PBottom + 'px');

        } else {

            mainSection.css({
                'height': "Initial",
                'position': 'relative'
            });

            paddingSection.css({
                'padding-top': "170px",
                'padding-bottom': "170px"
            });

        }
    }

    /**
     * =====================================
     * windows height and width
     * =====================================
     */
    function deviceControll() {
        if (windowSize('width') < 768) {
            $('body').removeClass('desktop').removeClass('tablet').addClass('mobile');
        } else if (windowSize('width') < 992) {
            $('body').removeClass('mobile').removeClass('desktop').addClass('tablet');
        } else {
            $('body').removeClass('mobile').removeClass('tablet').addClass('desktop');
        }
    }

    function AnimationTextHeight() {
        $('.section').each(function () {
            var actionDiv = $(this),
                actionId = actionDiv.attr('data-heading'),
                height = actionDiv.find('.inner-container').height();
            $(actionId).css({
                'height': height
            })
        });
    }



    $(window).on('load', function () {
        AnimationTextHeight();
        $('.home-section').addClass('active-animation');
    });



    // added functions



    function rotateInputArrow() {
        $('.rotate-bg input').on('click', function () {
            $(this).parent().toggleClass('ani');
            // console.log('click');
        })

        if ($('.rotate-bg input:focus')) {
            $(this).parent().addClass('ani');
            // console.log('focus add');
        } else {
            $(this).parent().removeClass('ani');
            // console.log('focus remove');
        }
    }

    function sliderFading() {
        $("#offers .slider-nav ul li a").click(function (event) {
            event.preventDefault();

            $('#offers .slider-nav ul li a').removeClass('active');
            var $divtoRender = $("#" + $(this).data('id'));
            $(this).addClass('active');

            $divtoRender.show();
            setTimeout(function () {
                $divtoRender.addClass('active-slide');
             }, 100)
            $('.slick-slider').slick('refresh');
            $("div.slider:visible").not($divtoRender).hide();
            // console.log($("div.slider").not($divtoRender));
            $("div.slider").not($divtoRender).removeClass('active-slide');
        });
    }

    function slideshow() {
        // set second
        $('.slider').slick({
            dots: true,
            infinite: true,
            responsive: true,
            arrows: false,
            speed: 1000,
            easing: 'easeInOutQuart'
        });
    }

    function offerSliderBgHeightL() {

        var el = $('.slider .item > div');
        // el.css('padding-bottom', 0);
        var ref = $('.slider-nav-wrap');
        var ans = $(window).height() / ($(window).width() - ref.outerWidth());
        el.css('padding-bottom', ans * 100 + '%');
        $('.slideshow').css({
            'padding-bottom': $('.slider-nav-wrap').outerHeight()
        });
        $('.slider .item > div').css('height', 0);
        // console.log('l')
    }

    function offerSliderBgHeightS() {
        var el2 = $('.slider .item > div');
        var ref2 = $('.slideshow .slider');
        var ans2 = $(window).width() * (4 / 5) / 3 * 4;
        el2.css({
            'height': ans2,
            'padding-bottom': 0
        });
        $('.slideshow').css({
            'padding-bottom': 0
        });
        // console.log('s')
    }

    $(document).on('ready', function () {
        var TopOffsetId = '.navbar-brand';
        $('.btn-scroll a, a.btn-scroll').on('click', function (e) {
            e.preventDefault();

            var target = this.hash,
                scrollOffset = Math.abs($(TopOffsetId).outerHeight()),
                $target = ($(target).offset() || {
                    "top": NaN
                }).top;

            $('html, body').stop().animate({
                'scrollTop': $target - scrollOffset
            }, 900, 'swing', function () {
                window.location.hash = target;
            });

        });



        // input arrow rotate
        rotateInputArrow();

        // nice select
        $('select:not(.ignore)').niceSelect();

        // offers slider
        if ($(window).width() > 1199) {
            offerSliderBgHeightL();
        } else {
            offerSliderBgHeightS();
        }

        // offers slider fading
        sliderFading();
        slideshow();

        autosize($('#special-request'));
        deviceControll();
        fullscreen_home('.home-section');



        /**
         * =============================================
         * Preloader INIT
         * =============================================
         */
        $('body').jpreLoader({
            preMainSection: '#main-preloader',
            prePerText: '.preloader-percentage-text',
            preBar: '.preloader-bar',
        });



        /**
         * =======================================
         * Wow Plagin Init
         * =======================================
         */
        var wow = new WOW({
            animateClass: 'active',
            offset: 100
        });
        wow.init();



        /**
         * =======================================
         * datepicker
         * =======================================
         */

        $('#datepicker').datepicker({
            format: 'dd-mm-yyyy'
        });
        $('#datepicker input').click(function () {
            $('.btn-select').find("ul").hide();
            $('.btn-select').removeClass("active");
        });




        /**
         * =======================================
         * Contact Form Style
         * =======================================
         */
        $('.form-control').each(function (inputEl) {

            // in case the input is already filled..
            if ($(this).val() !== '') {
                $(this).closest('.input-outer').addClass('input-filled');
            }

            // events:
            $(this).focus(function () {
                $(this).closest('.input-outer').addClass('input-filled');

            });
            $(this).blur(function () {
                if ($(this).val() === '') {
                    $(this).closest('.input-outer').removeClass('input-filled');
                }
            });

        });


        $(window).on('resize', function () {
            if ($(window).width() > 1199) {
                offerSliderBgHeightL();
            } else {
                offerSliderBgHeightS();
            }
            deviceControll();
            AnimationTextHeight();
            fullscreen_home('.home-section');
        });

    });


}(jQuery));


// show footer

$(window).scroll(function () {
    if ($(window).scrollTop() == $(document).height() - $(window).height()) {
        $('footer').addClass('b0')
    } else {
        $('footer').removeClass('b0')
    }
});


$(document).on('ready', function () {

    // forms date ani
    function formDateAni() {
        $('#datepicker').on('click', function () {
            $(this).parent().addClass('input-filled');
            $('nice-select.wide').removeClass('open');
        })

        $(document).on('click.datepick', function (event) {
            if ($(event.target).closest('.datapicker-wrapper-box').length === 0 &&
                $(event.target).closest('.data-picker').length === 0) {
                // console.log('1');
                $('.rotate-bg.ani').removeClass('ani');
            }
        });
        $('.dropdown-menu').on('click', function () {
            // console.log('click');
            $('.rotate-bg.ani').removeClass('ani');
            $('#datepicker').parent().addClass('input-filled');
        });
    }

    formDateAni();
    $('#datepicker').parent().removeClass('input-filled');


    // forms time ani
    $(document).mouseup(function (e) {
        var container = new Array();
        container.push($('.input-outer .nice-select.wide'));

        $.each(container, function (key, value) {
            if ((!$(value).is(e.target) // if the target of the click isn't the container...
                    &&
                    $(value).has(e.target).length === 0 // ... nor a descendant of the container
                    &&
                    ($('.input-outer .nice-select.wide span.current').is(':empty'))) //... and no val
            ) {
                // console.log('not this');
                $('.input-outer .nice-select.wide span.current').closest('.input-outer').removeClass('input-filled');
                if (($('.input-outer .nice-select.wide span.current').is(':empty'))) {

                    // console.log('is empty');
                    $('.input-outer .nice-select.wide span.current').closest('.input-outer').removeClass('input-filled');
                }
            } else {
                // console.log('is this');
                $('.input-outer .nice-select.wide span.current').closest('.input-outer').addClass('input-filled');
            }
        });
    });

    // forms textarea ani
    $(document).mouseup(function (e) {
        if ($('#special-request').val()) {
            // console.log('has val');
            $('#special-request').addClass('color');
        } else {
            // console.log('no val');
            $('#special-request').removeClass('color');
        }
    });
})