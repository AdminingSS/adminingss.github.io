$(() => {

    (()=> {
        var odometer = new Odometer({el: $('.counter-wrapper')[0], value: 87360, format: '', theme: 'digital'});
        odometer.render();
    })();

});