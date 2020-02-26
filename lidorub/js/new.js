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

});