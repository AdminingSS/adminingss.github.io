$(document).ready(function () {

    //modal
    (()=>{
        const $orderModal = $('.js-order-modal');
        const $orderModalTrigger = $('.js-order-modal-trigger');
        const $orderModalClode = $('.js-order-modal-close');

        $orderModalTrigger.on('click', function () {
            $orderModal.show();
        });

        $orderModalClode.on('click', function () {
            $orderModal.hide();
        });

    })();

    (()=>{
        const $orderModal = $('.js-order-modal');

        const $jsSubmitStageOne = $('.js-submit-stage-1');

        const $jsSubmitStageThree = $('.js-submit-stage-3');
        const $jsSubmitStageFour = $('.js-submit-stage-4');
        const $jsSubmitStageFive = $('.js-submit-stage-5');
        const $jsSubmitStageSix = $('.js-submit-stage-6');

        $jsSubmitStageOne.on('click', function (e) {
            if(!$(this).hasClass('active')) return;

            $orderModal.find('.step2 .inactive').fadeOut();
            $orderModal.find('.step2 .offers').slideDown(500).fadeIn({duration: 500, queue: false});

            const $jsSubmitStageTwo = $('.js-submit-stage-2');

            $jsSubmitStageTwo.on('click', function () {
                console.log('done');

                $orderModal.find('.step3 .inactive').fadeOut();
                $orderModal.find('.step3 .options').slideDown(500).fadeIn({duration: 500, queue: false});
            });
        });



    })();

});