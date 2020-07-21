$(() => {

    (()=> {
        var odometer = new Odometer({el: $('.counter-wrapper .odometer')[0], value: 3232749, format: 'd,ddd,ddd', theme: 'digital'});
        odometer.render();
    })();

});