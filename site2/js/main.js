// placeholder IE<=9
$('input, textarea').placeholder();

//  ----- new js -----

// Формы
$('.to-modal').magnificPopup();
$('.to-modal-img').magnificPopup({
    type: 'image'
});

$(document).ready(function() {
    $('form').ajaxForm(function() {
        $('form').clearForm();
        $('.open-thanks').click();
    });
});

//Видео

(function() {
    const $overlay = $('.overlay');
    const $videoTrigger = $overlay.find('.video-trigger');

    $videoTrigger.click(
        function() {
            const $iframe = $('.why__frame iframe');
            const src = $iframe.attr('src');

            $iframe.attr('src', src + '&autoplay=1');
            //$(iframe)[0].contentWindow.postMessage('{"event":"command","func":"playVideo","args":""}', '*');
            $overlay.hide();
        }
    );
})();

// Яндекс карта
ymaps.ready(init);
var myMap;

function init(){
    myMap = new ymaps.Map("map", {
        center:[54.806446,55.877964],
        zoom: 17,
        controls: ['smallMapDefaultSet']
    });

    myMap.controls.remove('searchControl');
    myMap.behaviors.disable('scrollZoom');


    placemark = new ymaps.Placemark([54.806446,55.877964], {
            hintContent: "с. Михайловка, пер. Октябрьский, 23"
        }
        // ,{
        //     iconLayout: 'default#image',
        //     iconImageHref: 'img/design/ico/map-marker.png',
        //     iconImageSize: [96, 128],
        //     iconImageOffset: [-35, -55]
        // }
        );

    myMap.geoObjects.add(placemark);
}