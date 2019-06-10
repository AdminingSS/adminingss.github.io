$(document).ready(function(){

    if($(window).width() > 960) {
        $('.catalog-right').stick_in_parent({
            offset_top: 0 
        });

        $('.catalog-right')
            .on('sticky_kit:bottom', function(e) {
                $(this).parent().css('position', 'static');
            })
            .on('sticky_kit:unbottom', function(e) {
                $(this).parent().css('position', 'relative');
        });
    }

	$('input[placeholder], textarea[placeholder]').placeholder();

	$('input, textarea').focus(function(){
		$(this).data('placeholder', $(this).attr('placeholder'))
		$(this).attr('placeholder', '');
	});
	$('input, textarea').blur(function(){
		$(this).attr('placeholder', $(this).data('placeholder'));
	});

	$('input.mask-phone').mask('+7 (999) 999 99 99');

    $('[data-fancybox]').fancybox();

    var $totop = $('#up');
    
    $(window).scroll(function(){
        
        if($(this).scrollTop() > 150){
            $totop.fadeIn();
        } else {
            $totop.fadeOut();
        }
        
    });
    
    $totop.click(function(){
        $('body,html').animate({scrollTop: 0}, 500);
        return false;
    });

    $('.magnificPopup').magnificPopup();

    $( "a.bt" ).click(function( event ) {
        event.preventDefault();
        $("html, body").animate({ scrollTop: $($(this).attr("href")).offset().top }, 500);
    });
    
    $('body').toShowHide({
        button: '.bt-menu',
        button_close: '.close',
        close_only_button: false,
        box: '.nav',
        effect: 'fade',
        onBefore: function(el){
            el.addClass('body-overflow');
        },
        onAfter: function(el){
            el.removeClass('body-overflow');
        }
    });

    var slickFor = $('.gallery-for').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.gallery-nav'
    });

    var slickNav = $('.gallery-nav').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        asNavFor: '.gallery-for',
        arrows: false,
        focusOnSelect: true,
        responsive: [
            {
                breakpoint: 479,
                settings: {
                    slidesToShow: 3
                }
            }
        ]
    });

    $('.slider-gallery').slick({
        speed: 500
    });

    $(()=>{
        //animations - logo
        var canvas, stage, exportRoot, anim_container, dom_overlay_container, fnStartAnimation;

        init();

        function init() {
            canvas = document.getElementById("canvas");
            anim_container = document.getElementById("animation_container");
            dom_overlay_container = document.getElementById("dom_overlay_container");
            var comp = AdobeAn.getComposition("D74E2ABF2EBB0848A99AB1DEAFD7C850");
            var lib = comp.getLibrary();
            var loader = new createjs.LoadQueue(false);
            loader.addEventListener("fileload", function (evt) {
                handleFileLoad(evt, comp)
            });
            loader.addEventListener("complete", function (evt) {
                handleComplete(evt, comp)
            });
            var lib = comp.getLibrary();
            loader.loadManifest(lib.properties.manifest);
        }

        function handleFileLoad(evt, comp) {
            var images = comp.getImages();
            if (evt && (evt.item.type == "image")) {
                images[evt.item.id] = evt.result;
            }
        }

        function handleComplete(evt, comp) {
            //This function is always called, irrespective of the content. You can use the variable "stage" after it is created in token create_stage.
            var lib = comp.getLibrary();
            var ss = comp.getSpriteSheet();
            var queue = evt.target;
            var ssMetadata = lib.ssMetadata;
            for (i = 0; i < ssMetadata.length; i++) {
                ss[ssMetadata[i].name] = new createjs.SpriteSheet({
                    "images": [queue.getResult(ssMetadata[i].name)],
                    "frames": ssMetadata[i].frames
                })
            }
            exportRoot = new lib.logo_anim_2();
            stage = new lib.Stage(canvas);
            //Registers the "tick" event listener.
            fnStartAnimation = function () {
                stage.addChild(exportRoot);
                createjs.Ticker.setFPS(lib.properties.fps);
                createjs.Ticker.addEventListener("tick", stage);
            }

            //Code to support hidpi screens and responsive scaling.
            function makeResponsive(isResp, respDim, isScale, scaleType) {
                var lastW, lastH, lastS = 1;
                window.addEventListener('resize', resizeCanvas);
                resizeCanvas();

                function resizeCanvas() {
                    var w = lib.properties.width, h = lib.properties.height;
                    var iw = window.innerWidth, ih = window.innerHeight;
                    var pRatio = window.devicePixelRatio || 1, xRatio = iw / w, yRatio = ih / h, sRatio = 1;
                    if (isResp) {
                        if ((respDim == 'width' && lastW == iw) || (respDim == 'height' && lastH == ih)) {
                            sRatio = lastS;
                        }
                        else if (!isScale) {
                            if (iw < w || ih < h)
                                sRatio = Math.min(xRatio, yRatio);
                        }
                        else if (scaleType == 1) {
                            sRatio = Math.min(xRatio, yRatio);
                        }
                        else if (scaleType == 2) {
                            sRatio = Math.max(xRatio, yRatio);
                        }
                    }
                    canvas.width = w * pRatio * sRatio;
                    canvas.height = h * pRatio * sRatio;
                    canvas.style.width = dom_overlay_container.style.width = anim_container.style.width = w * sRatio + 'px';
                    canvas.style.height = anim_container.style.height = dom_overlay_container.style.height = h * sRatio + 'px';
                    stage.scaleX = pRatio * sRatio;
                    stage.scaleY = pRatio * sRatio;
                    lastW = iw;
                    lastH = ih;
                    lastS = sRatio;
                    stage.tickOnUpdate = false;
                    stage.update();
                    stage.tickOnUpdate = true;
                }
            }

            makeResponsive(false, 'both', false, 1);
            AdobeAn.compositionLoaded(lib.properties.id);
            fnStartAnimation();
        }
    });

    $(()=>{
        //catalog animations - gotovye izdeliya

        var canvas, stage, exportRoot, anim_container, dom_overlay_container, fnStartAnimation;

        var $element = $('.tm-got-izd');
        var $holder = $element.find('.tm-catalog-holder')
        var $animation = $element.find('.tm-catalog-animation');
        var $image = $element.find('.tm-image-wrapper');

        canvas = document.getElementById("canvas_got_izd");
        anim_container = document.getElementById("animation_container_got_izd");
        dom_overlay_container = document.getElementById("dom_overlay_container_got_izd");

        $element.hover(start, stop);

        function stop() {
            $animation.hide();
            $holder.css('padding-top', '175px');
            $image.show();
            stage.clear();
            createjs.Ticker.removeEventListener("tick", stage);
        }

        function start() {
            $image.hide();
            $holder.css('padding-top', '0');
            $animation.show();
            handleComplete();
        }

        function handleComplete() {
            //This function is always called, irrespective of the content. You can use the variable "stage" after it is created in token create_stage.
            exportRoot = new lib._6();
            stage = new createjs.Stage(canvas);
            stage.addChild(exportRoot);
            //Registers the "tick" event listener.
            fnStartAnimation = function() {
                createjs.Ticker.setFPS(lib.properties.fps);
                createjs.Ticker.addEventListener("tick", stage);
            }
            //Code to support hidpi screens and responsive scaling.
            function makeResponsive(isResp, respDim, isScale, scaleType) {
                var lastW, lastH, lastS=1;
                window.addEventListener('resize', resizeCanvas);
                resizeCanvas();
                function resizeCanvas() {
                    var w = lib.properties.width, h = lib.properties.height;
                    var iw = window.innerWidth, ih=window.innerHeight;
                    var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;
                    if(isResp) {
                        if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {
                            sRatio = lastS;
                        }
                        else if(!isScale) {
                            if(iw<w || ih<h)
                                sRatio = Math.min(xRatio, yRatio);
                        }
                        else if(scaleType==1) {
                            sRatio = Math.min(xRatio, yRatio);
                        }
                        else if(scaleType==2) {
                            sRatio = Math.max(xRatio, yRatio);
                        }
                    }
                    canvas.width = w*pRatio*sRatio;
                    canvas.height = h*pRatio*sRatio;
                    canvas.style.width = dom_overlay_container.style.width = anim_container.style.width =  w*sRatio+'px';
                    canvas.style.height = anim_container.style.height = dom_overlay_container.style.height = h*sRatio+'px';
                    stage.scaleX = pRatio*sRatio;
                    stage.scaleY = pRatio*sRatio;
                    lastW = iw; lastH = ih; lastS = sRatio;
                }
            }
            makeResponsive(true,'both',false,1);
            fnStartAnimation();
        }
    });

    $(()=>{
        //catalog animations - cabel na zakaz

        var canvas, stage, exportRoot, anim_container, dom_overlay_container, fnStartAnimation;

        var $element = $('.tm-cab-zak');
        var $holder = $element.find('.tm-catalog-holder')
        var $animation = $element.find('.tm-catalog-animation');
        var $image = $element.find('.tm-image-wrapper');

        canvas = document.getElementById("canvas_cab_zak");
        anim_container = document.getElementById("animation_container_cab_zak");
        dom_overlay_container = document.getElementById("dom_overlay_container_cab_zak");

        $element.hover(start, stop);

        function stop() {
            $animation.hide();
            $holder.css('padding-top', '175px');
            $image.show();
            createjs.Ticker.removeEventListener("tick", stage);
        }

        function start() {
            $image.hide();
            $holder.css('padding-top', '0');
            $animation.show();
            init();
        }

        function init() {
            var comp=AdobeAn.getComposition("1FA9798F5A64BB4DB8CA657359A9FEE9");
            var lib=comp.getLibrary();
            var loader = new createjs.LoadQueue(false);
            loader.addEventListener("fileload", function(evt){handleFileLoad(evt,comp)});
            loader.addEventListener("complete", function(evt){handleComplete(evt,comp)});
            var lib=comp.getLibrary();
            loader.loadManifest(lib.properties.manifest);
        }
        function handleFileLoad(evt, comp) {
            var images=comp.getImages();
            if (evt && (evt.item.type == "image")) { images[evt.item.id] = evt.result; }
        }
        function handleComplete(evt,comp) {
            //This function is always called, irrespective of the content. You can use the variable "stage" after it is created in token create_stage.
            var lib=comp.getLibrary();
            var ss=comp.getSpriteSheet();
            var queue = evt.target;
            var ssMetadata = lib.ssMetadata;
            for(i=0; i<ssMetadata.length; i++) {
                ss[ssMetadata[i].name] = new createjs.SpriteSheet( {"images": [queue.getResult(ssMetadata[i].name)], "frames": ssMetadata[i].frames} )
            }
            exportRoot = new lib._220x470();
            stage = new lib.Stage(canvas);
            //Registers the "tick" event listener.
            fnStartAnimation = function() {
                stage.addChild(exportRoot);
                createjs.Ticker.setFPS(lib.properties.fps);
                createjs.Ticker.addEventListener("tick", stage);
            }
            //Code to support hidpi screens and responsive scaling.
            function makeResponsive(isResp, respDim, isScale, scaleType) {
                var lastW, lastH, lastS = 1;
                window.addEventListener('resize', resizeCanvas);
                resizeCanvas();

                function resizeCanvas() {
                    var w = lib.properties.width, h = lib.properties.height;
                    var iw = window.innerWidth, ih = window.innerHeight;
                    var pRatio = window.devicePixelRatio || 1, xRatio = iw / w, yRatio = ih / h, sRatio = 1;
                    if (isResp) {
                        if ((respDim == 'width' && lastW == iw) || (respDim == 'height' && lastH == ih)) {
                            sRatio = lastS;
                        }
                        else if (!isScale) {
                            if (iw < w || ih < h)
                                sRatio = Math.min(xRatio, yRatio);
                        }
                        else if (scaleType == 1) {
                            sRatio = Math.min(xRatio, yRatio);
                        }
                        else if (scaleType == 2) {
                            sRatio = Math.max(xRatio, yRatio);
                        }
                    }
                    canvas.width = w * pRatio * sRatio;
                    canvas.height = h * pRatio * sRatio;
                    canvas.style.width = dom_overlay_container.style.width = anim_container.style.width = w * sRatio + 'px';
                    canvas.style.height = anim_container.style.height = dom_overlay_container.style.height = h * sRatio + 'px';
                    stage.scaleX = pRatio * sRatio;
                    stage.scaleY = pRatio * sRatio;
                    lastW = iw;
                    lastH = ih;
                    lastS = sRatio;
                    stage.tickOnUpdate = false;
                    stage.update();
                    stage.tickOnUpdate = true;
                }
            }
            makeResponsive(true,'both',false,1,[canvas,anim_container,dom_overlay_container]);
            AdobeAn.compositionLoaded(lib.properties.id);
            fnStartAnimation();
        }
    });

    $(()=>{
        //catalog animations - strahovochnie shnuri

        var canvas, stage, exportRoot, anim_container, dom_overlay_container, fnStartAnimation;

        var $element = $('.tm_str_cor');
        var $holder = $element.find('.tm-catalog-holder')
        var $animation = $element.find('.tm-catalog-animation');
        var $image = $element.find('.tm-image-wrapper');

        canvas = document.getElementById("canvas_str_cor");
        anim_container = document.getElementById("animation_container_str_cor");
        dom_overlay_container = document.getElementById("dom_overlay_container_str_cor");

        $element.hover(start, stop);

        function stop() {
            $animation.hide();
            $holder.css('padding-top', '175px');
            $image.show();
            createjs.Ticker.removeEventListener("tick", stage);
        }

        function start() {
            $image.hide();
            $holder.css('padding-top', '0');
            $animation.show();
            init();
        }

        function init() {
            var comp=AdobeAn.getComposition("F3206178862FAC45BFC60D52D236A28E");
            var lib=comp.getLibrary();
            var loader = new createjs.LoadQueue(false);
            loader.addEventListener("fileload", function(evt){handleFileLoad(evt,comp)});
            loader.addEventListener("complete", function(evt){handleComplete(evt,comp)});
            var lib=comp.getLibrary();
            loader.loadManifest(lib.properties.manifest);
        }
        function handleFileLoad(evt, comp) {
            var images=comp.getImages();
            if (evt && (evt.item.type == "image")) { images[evt.item.id] = evt.result; }
        }
        function handleComplete(evt,comp) {
            //This function is always called, irrespective of the content. You can use the variable "stage" after it is created in token create_stage.
            var lib=comp.getLibrary();
            var ss=comp.getSpriteSheet();
            var queue = evt.target;
            var ssMetadata = lib.ssMetadata;
            for(i=0; i<ssMetadata.length; i++) {
                ss[ssMetadata[i].name] = new createjs.SpriteSheet( {"images": [queue.getResult(ssMetadata[i].name)], "frames": ssMetadata[i].frames} )
            }
            exportRoot = new lib._11();
            stage = new lib.Stage(canvas);
            //Registers the "tick" event listener.
            fnStartAnimation = function() {
                stage.addChild(exportRoot);
                createjs.Ticker.setFPS(lib.properties.fps);
                createjs.Ticker.addEventListener("tick", stage);
            }
            //Code to support hidpi screens and responsive scaling.
            function makeResponsive(isResp, respDim, isScale, scaleType) {
                var lastW, lastH, lastS=1;
                window.addEventListener('resize', resizeCanvas);
                resizeCanvas();
                function resizeCanvas() {
                    var w = lib.properties.width, h = lib.properties.height;
                    var iw = window.innerWidth, ih=window.innerHeight;
                    var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;
                    if(isResp) {
                        if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {
                            sRatio = lastS;
                        }
                        else if(!isScale) {
                            if(iw<w || ih<h)
                                sRatio = Math.min(xRatio, yRatio);
                        }
                        else if(scaleType==1) {
                            sRatio = Math.min(xRatio, yRatio);
                        }
                        else if(scaleType==2) {
                            sRatio = Math.max(xRatio, yRatio);
                        }
                    }
                    canvas.width = w*pRatio*sRatio;
                    canvas.height = h*pRatio*sRatio;
                    canvas.style.width = dom_overlay_container.style.width = anim_container.style.width =  w*sRatio+'px';
                    canvas.style.height = anim_container.style.height = dom_overlay_container.style.height = h*sRatio+'px';
                    stage.scaleX = pRatio*sRatio;
                    stage.scaleY = pRatio*sRatio;
                    lastW = iw; lastH = ih; lastS = sRatio;
                    stage.tickOnUpdate = false;
                    stage.update();
                    stage.tickOnUpdate = true;
                }
            }
            makeResponsive(true,'both',false,1);
            AdobeAn.compositionLoaded(lib.properties.id);
            fnStartAnimation();
        }
    });

    $(()=>{
        //catalog animations - helucabel

        var canvas, stage, exportRoot, anim_container, dom_overlay_container, fnStartAnimation;

        var $element = $('.tm_hel_cab');
        var $holder = $element.find('.tm-catalog-holder')
        var $animation = $element.find('.tm-catalog-animation');
        var $image = $element.find('.tm-image-wrapper');

        canvas = document.getElementById("canvas_hel_cab");
        anim_container = document.getElementById("animation_container_hel_cab");
        dom_overlay_container = document.getElementById("dom_overlay_container_hel_cab");

        $element.hover(start, stop);

        function stop() {
            $animation.hide();
            $holder.css('padding-top', '175px');
            $image.show();
            createjs.Ticker.removeEventListener("tick", stage);
        }

        function start() {
            $image.hide();
            $holder.css('padding-top', '0');
            $animation.show();
            init();
        }

        function init() {
            var comp=AdobeAn.getComposition("BEEF98396D2C764EBA07EF1BFCCF942C");
            var lib=comp.getLibrary();
            var loader = new createjs.LoadQueue(false);
            loader.addEventListener("fileload", function(evt){handleFileLoad(evt,comp)});
            loader.addEventListener("complete", function(evt){handleComplete(evt,comp)});
            var lib=comp.getLibrary();
            loader.loadManifest(lib.properties.manifest);
        }
        function handleFileLoad(evt, comp) {
            var images=comp.getImages();
            if (evt && (evt.item.type == "image")) { images[evt.item.id] = evt.result; }
        }
        function handleComplete(evt,comp) {
            //This function is always called, irrespective of the content. You can use the variable "stage" after it is created in token create_stage.
            var lib=comp.getLibrary();
            var ss=comp.getSpriteSheet();
            var queue = evt.target;
            var ssMetadata = lib.ssMetadata;
            for(i=0; i<ssMetadata.length; i++) {
                ss[ssMetadata[i].name] = new createjs.SpriteSheet( {"images": [queue.getResult(ssMetadata[i].name)], "frames": ssMetadata[i].frames} )
            }
            exportRoot = new lib.index();
            stage = new lib.Stage(canvas);
            //Registers the "tick" event listener.
            fnStartAnimation = function() {
                stage.addChild(exportRoot);
                createjs.Ticker.setFPS(lib.properties.fps);
                createjs.Ticker.addEventListener("tick", stage);
            }
            //Code to support hidpi screens and responsive scaling.
            function makeResponsive(isResp, respDim, isScale, scaleType) {
                var lastW, lastH, lastS = 1;
                window.addEventListener('resize', resizeCanvas);
                resizeCanvas();

                function resizeCanvas() {
                    var w = lib.properties.width, h = lib.properties.height;
                    var iw = window.innerWidth, ih = window.innerHeight;
                    var pRatio = window.devicePixelRatio || 1, xRatio = iw / w, yRatio = ih / h, sRatio = 1;
                    if (isResp) {
                        if ((respDim == 'width' && lastW == iw) || (respDim == 'height' && lastH == ih)) {
                            sRatio = lastS;
                        }
                        else if (!isScale) {
                            if (iw < w || ih < h)
                                sRatio = Math.min(xRatio, yRatio);
                        }
                        else if (scaleType == 1) {
                            sRatio = Math.min(xRatio, yRatio);
                        }
                        else if (scaleType == 2) {
                            sRatio = Math.max(xRatio, yRatio);
                        }
                    }
                    canvas.width = w * pRatio * sRatio;
                    canvas.height = h * pRatio * sRatio;
                    canvas.style.width = dom_overlay_container.style.width = anim_container.style.width = w * sRatio + 'px';
                    canvas.style.height = anim_container.style.height = dom_overlay_container.style.height = h * sRatio + 'px';
                    stage.scaleX = pRatio * sRatio;
                    stage.scaleY = pRatio * sRatio;
                    lastW = iw;
                    lastH = ih;
                    lastS = sRatio;
                    stage.tickOnUpdate = false;
                    stage.update();
                    stage.tickOnUpdate = true;
                }
            }
            makeResponsive(true,'both',false,1,[canvas,anim_container,dom_overlay_container]);
            AdobeAn.compositionLoaded(lib.properties.id);
            fnStartAnimation();
        }
    });

    $(()=>{
        //catalog animations - o kompanii

        var canvas, stage, exportRoot, anim_container, dom_overlay_container, fnStartAnimation;

        var $element = $('.tm_abt_cmp');
        var $holder = $element.find('.tm-catalog-holder')
        var $animation = $element.find('.tm-catalog-animation');
        var $image = $element.find('.tm-image-wrapper');

        canvas = document.getElementById("canvas_abt_cmp");
        anim_container = document.getElementById("animation_container_abt_cmp");
        dom_overlay_container = document.getElementById("dom_overlay_container_abt_cmp");

        $element.hover(start, stop);

        function stop() {
            $animation.hide();
            $holder.css('padding-top', '175px');
            $image.show();
            createjs.Ticker.removeEventListener("tick", stage);
        }

        function start() {
            $image.hide();
            $holder.css('padding-top', '0');
            $animation.show();
            init();
        }

        function init() {
            var comp=AdobeAn.getComposition("FDE09619F35CF34B9C2858E15632AD22");
            var lib=comp.getLibrary();
            var loader = new createjs.LoadQueue(false);
            loader.addEventListener("fileload", function(evt){handleFileLoad(evt,comp)});
            loader.addEventListener("complete", function(evt){handleComplete(evt,comp)});
            var lib=comp.getLibrary();
            loader.loadManifest(lib.properties.manifest);
        }
        function handleFileLoad(evt, comp) {
            var images=comp.getImages();
            if (evt && (evt.item.type == "image")) { images[evt.item.id] = evt.result; }
        }
        function handleComplete(evt,comp) {
            //This function is always called, irrespective of the content. You can use the variable "stage" after it is created in token create_stage.
            var lib=comp.getLibrary();
            var ss=comp.getSpriteSheet();
            var queue = evt.target;
            var ssMetadata = lib.ssMetadata;
            for(i=0; i<ssMetadata.length; i++) {
                ss[ssMetadata[i].name] = new createjs.SpriteSheet( {"images": [queue.getResult(ssMetadata[i].name)], "frames": ssMetadata[i].frames} )
            }
            exportRoot = new lib._380x555();
            stage = new lib.Stage(canvas);
            //Registers the "tick" event listener.
            fnStartAnimation = function() {
                stage.addChild(exportRoot);
                createjs.Ticker.setFPS(lib.properties.fps);
                createjs.Ticker.addEventListener("tick", stage);
            }
            //Code to support hidpi screens and responsive scaling.
            function makeResponsive(isResp, respDim, isScale, scaleType) {
                var lastW, lastH, lastS = 1;
                window.addEventListener('resize', resizeCanvas);
                resizeCanvas();

                function resizeCanvas() {
                    var w = lib.properties.width, h = lib.properties.height;
                    var iw = window.innerWidth, ih = window.innerHeight;
                    var pRatio = window.devicePixelRatio || 1, xRatio = iw / w, yRatio = ih / h, sRatio = 1;
                    if (isResp) {
                        if ((respDim == 'width' && lastW == iw) || (respDim == 'height' && lastH == ih)) {
                            sRatio = lastS;
                        }
                        else if (!isScale) {
                            if (iw < w || ih < h)
                                sRatio = Math.min(xRatio, yRatio);
                        }
                        else if (scaleType == 1) {
                            sRatio = Math.min(xRatio, yRatio);
                        }
                        else if (scaleType == 2) {
                            sRatio = Math.max(xRatio, yRatio);
                        }
                    }
                    canvas.width = w * pRatio * sRatio;
                    canvas.height = h * pRatio * sRatio;
                    canvas.style.width = dom_overlay_container.style.width = anim_container.style.width = w * sRatio + 'px';
                    canvas.style.height = anim_container.style.height = dom_overlay_container.style.height = h * sRatio + 'px';
                    stage.scaleX = pRatio * sRatio;
                    stage.scaleY = pRatio * sRatio;
                    lastW = iw;
                    lastH = ih;
                    lastS = sRatio;
                    stage.tickOnUpdate = false;
                    stage.update();
                    stage.tickOnUpdate = true;
                }
            }
            makeResponsive(true,'both',false,1,[canvas,anim_container,dom_overlay_container]);
            AdobeAn.compositionLoaded(lib.properties.id);
            fnStartAnimation();
        }
    });
	
});