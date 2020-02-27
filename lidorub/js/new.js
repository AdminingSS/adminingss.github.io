$(document).ready(function () {

    //modal
    (()=>{
        const $orderModal = $('.js-order-modal');
        const $orderModalTrigger = $('.js-order-modal-trigger');
        const $orderModalClose = $('.js-order-modal-close');

        const $orderModal2 = $('.js-order-modal-2');
        const $orderModalClose2 = $('.js-order-modal-close-2');

        const $orderModalReturn2 = $('.js-order-modal-return-2');

        const $jsSubmitStageOne = $('.js-submit-stage-1');

        const $jsSubmitStageThree = $('.js-submit-stage-3');
        const $jsSubmitStageFour = $('.js-submit-stage-4');
        const $jsSubmitStageFive = $('.js-submit-stage-5');
        const $jsSubmitStageSix = $('.js-submit-stage-6');

        $orderModalTrigger.on('click', function () {
            $orderModal.show();
        });

        $orderModalClose.on('click', function () {
            $orderModal.hide();
        });

        $orderModalClose2.on('click', function () {
            $orderModal2.hide();
        });

        $orderModalReturn2.on('click', function () {
            $orderModal2.hide();
            $orderModal.show();
        });

        $jsSubmitStageOne.on('click', function (e) {
            if(!$(this).hasClass('active')) return;

            $orderModal.find('.step2 .inactive').fadeOut();
            $orderModal.find('.step2 .offers').slideDown(500).fadeIn({duration: 500, queue: false});

            const $jsSubmitStageTwo = $('.js-submit-stage-2');

            $jsSubmitStageTwo.on('click', function () {
                $orderModal.find('.step3 .inactive').fadeOut();
                $orderModal.find('.step3 .options').slideDown(500).fadeIn({duration: 500, queue: false});

                const $orderModalTrigger2 = $('.js-order-modal-trigger-2');

                $orderModalTrigger2.on('click', function () {
                    $orderModal.hide();
                    $orderModal2.show();
                });
            });


        });



    })();

});