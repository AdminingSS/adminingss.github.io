(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


// symbols:



(lib.about = function() {
	this.initialize(img.about);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,89,106);


(lib.blog = function() {
	this.initialize(img.blog);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,89,104);


(lib.cont = function() {
	this.initialize(img.cont);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,88,109);


(lib.docs = function() {
	this.initialize(img.docs);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,78,111);


(lib.part = function() {
	this.initialize(img.part);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,89,106);


(lib.photo = function() {
	this.initialize(img.photo);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,88,107);// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.part_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AnQGOIAAsbIOhAAIAAMbg");
	mask.setTransform(46.5,39.8);

	// Слой 1
	this.instance = new lib.part();
	this.instance.parent = this;

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.part_1, new cjs.Rectangle(0,0,89,79.6), null);


(lib.kon = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("An7H0IAAvnIP3AAIAAPng");
	mask.setTransform(43.4,37.2);

	// Слой 1
	this.instance = new lib.cont();
	this.instance.parent = this;

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.kon, new cjs.Rectangle(0,0,88,87.2), null);


(lib.foto = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("ApXHkIAAvHISvAAIAAPHg");
	mask.setTransform(46.4,32.4);

	// Слой 1
	this.instance = new lib.photo();
	this.instance.parent = this;

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.foto, new cjs.Rectangle(0,0,88,80.8), null);


(lib.doc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AozIUIAAwnIRnAAIAAQng");
	mask.setTransform(38.6,38);

	// Слой 1
	this.instance = new lib.docs();
	this.instance.parent = this;

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.doc, new cjs.Rectangle(0,0,78,91.2), null);


(lib.blog_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AozHcIAAu3IRnAAIAAO3g");
	mask.setTransform(40.4,35);

	// Слой 1
	this.instance = new lib.blog();
	this.instance.parent = this;

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.blog_1, new cjs.Rectangle(0,0,89,82.6), null);


(lib.abo = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AnjHEIAAuHIPHAAIAAOHg");
	mask.setTransform(48.4,45.2);

	// Слой 1
	this.instance = new lib.about();
	this.instance.parent = this;

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.abo, new cjs.Rectangle(0,0,89,90.4), null);


(lib.Анимация13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AAbAiIAAhDIAMAAIAABDgAgmAiIAAhDIAMAAIAAAYIATAAQAMAAAFADQAGADAAAIIAAAOQAAAPgYAAgAgaAaIARAAIAEgBIAFAAIACgDQACgCAAgDIAAgIQAAgGgDgCQgBgBgJAAIgRAAg");
	this.shape.setTransform(28.125,1.625);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgeAxIAAhfIANAAIAAAHQABgIAVAAQANAAAHAFQAGAFAAAIIAAAcQAAAFgCAFQgCAEgCADQgDADgFABIgIACIgJAAIgLgBQgFgCgBgDIAAAhgAgOgkQgEACAAAKIAAAYQAAAIAEADQAEACAKABQAKgBAEgCQAEgDAAgIIAAgYQAAgKgEgCQgEgDgKABQgKgBgEADg");
	this.shape_1.setTransform(19.075,2.95);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgUAqQgIgFAAgLIAAgaQAAgMAHgGQAHgEAPAAQAOAAAIAEQAGAFAAANIAAAOIgsAAIAAAKQgBAIAGADQAFADAJAAQAJAAANgEIAAAKQgNADgNAAQgMAAgIgFgAgLgMQgFACABAGIAAAKIAfAAIAAgKQABgFgEgDQgEgDgJABQgHgBgEADgAAHggIAAgOIANAAIAAAOgAgPggIAAgOIANAAIAAAOg");
	this.shape_2.setTransform(11.15,0.45);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AARAiIAAgfIghAAIAAAfIgMAAIAAhDIAMAAIAAAcIAhAAIAAgcIAMAAIAABDg");
	this.shape_3.setTransform(3.375,1.625);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgFAiIAAg6IgbAAIAAgJIBBAAIAAAJIgbAAIAAA6g");
	this.shape_4.setTransform(-4.275,1.625);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgeAxIAAhfIANAAIAAAHQABgIAVAAQANAAAHAFQAGAFAAAIIAAAcQAAAFgCAFIgEAHQgDADgFABIgIACIgJAAIgLgBQgFgCgBgDIAAAhgAgOgkQgEACAAAKIAAAYQAAAIAEADQAEACAKABQAKgBAEgCQAEgDAAgIIAAgYQAAgKgEgCQgEgDgKABQgKgBgEADg");
	this.shape_5.setTransform(-11.825,2.95);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgWAfQgGgEAAgNQAAgMAFgDQAFgEAPAAIATAAIAAgLQAAgGgDgCQgEgCgJAAQgKAAgNACIAAgJIAZgBQARAAAFAEQAFAEAAANIAAAvIgNAAIAAgHQgBAIgSAAQgOAAgFgEgAgNAEQgCACAAAIQAAAHACADQACADAIAAIACAAIAFAAIAGgBQABAAAAAAQABAAAAgBQABAAAAAAQABAAAAgBQABAAAAgBQAAAAABAAQAAgBAAgBQAAAAAAgBIAAgSIgSAAQgJAAgCACg");
	this.shape_6.setTransform(-19.975,1.625);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AAXAuIAAhRIgtAAIAABRIgNAAIAAhbIBHAAIAABbg");
	this.shape_7.setTransform(-28.325,0.45);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-35.2,-10.1,70.5,20.2);


(lib.Анимация12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AAbAiIAAhDIAMAAIAABDgAgmAiIAAhDIAMAAIAAAYIATAAQAMAAAFADQAGADAAAIIAAAOQAAAPgYAAgAgaAaIARAAIAEgBIAFAAIACgDQACgCAAgDIAAgIQAAgGgDgCQgBgBgJAAIgRAAg");
	this.shape.setTransform(28.125,1.625);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgeAxIAAhfIANAAIAAAHQABgIAVAAQANAAAHAFQAGAFAAAIIAAAcQAAAFgCAFQgCAEgCADQgDADgFABIgIACIgJAAIgLgBQgFgCgBgDIAAAhgAgOgkQgEACAAAKIAAAYQAAAIAEADQAEACAKABQAKgBAEgCQAEgDAAgIIAAgYQAAgKgEgCQgEgDgKABQgKgBgEADg");
	this.shape_1.setTransform(19.075,2.95);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgUAqQgIgFAAgLIAAgaQAAgMAHgGQAHgEAPAAQAOAAAIAEQAGAFAAANIAAAOIgsAAIAAAKQgBAIAGADQAFADAJAAQAJAAANgEIAAAKQgNADgNAAQgMAAgIgFgAgLgMQgFACABAGIAAAKIAfAAIAAgKQABgFgEgDQgEgDgJABQgHgBgEADgAAHggIAAgOIANAAIAAAOgAgPggIAAgOIANAAIAAAOg");
	this.shape_2.setTransform(11.15,0.45);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AARAiIAAgfIghAAIAAAfIgMAAIAAhDIAMAAIAAAcIAhAAIAAgcIAMAAIAABDg");
	this.shape_3.setTransform(3.375,1.625);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgFAiIAAg6IgbAAIAAgJIBBAAIAAAJIgbAAIAAA6g");
	this.shape_4.setTransform(-4.275,1.625);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgeAxIAAhfIANAAIAAAHQABgIAVAAQANAAAHAFQAGAFAAAIIAAAcQAAAFgCAFIgEAHQgDADgFABIgIACIgJAAIgLgBQgFgCgBgDIAAAhgAgOgkQgEACAAAKIAAAYQAAAIAEADQAEACAKABQAKgBAEgCQAEgDAAgIIAAgYQAAgKgEgCQgEgDgKABQgKgBgEADg");
	this.shape_5.setTransform(-11.825,2.95);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgWAfQgGgEAAgNQAAgMAFgDQAFgEAPAAIATAAIAAgLQAAgGgDgCQgEgCgJAAQgKAAgNACIAAgJIAZgBQARAAAFAEQAFAEAAANIAAAvIgNAAIAAgHQgBAIgSAAQgOAAgFgEgAgNAEQgCACAAAIQAAAHACADQACADAIAAIACAAIAFAAIAGgBQABAAAAAAQABAAAAgBQABAAAAAAQABAAAAgBQABAAAAgBQAAAAABAAQAAgBAAgBQAAAAAAgBIAAgSIgSAAQgJAAgCACg");
	this.shape_6.setTransform(-19.975,1.625);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AAXAuIAAhRIgtAAIAABRIgNAAIAAhbIBHAAIAABbg");
	this.shape_7.setTransform(-28.325,0.45);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-35.2,-10.1,70.5,20.2);


(lib.Анимация11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgFAjIgHgBIgHgEIgEgGQgCgFAAgGIAAgYIABgKQABgEACgCIAFgEIAHgCIAHgBIAHAAQAKAAAKACIAAAJQgLgDgKAAQgKAAgDACQgDADAAAIIAAAbQAAAIAEACQADACAKAAQAKAAALgCIAAAJQgKACgMAAIgJAAg");
	this.shape.setTransform(14.325,1.625);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgWAfQgGgEAAgNQAAgMAFgDQAFgEAPAAIATAAIAAgLQAAgGgDgCQgEgCgJAAQgKAAgNACIAAgJIAZgBQARAAAFAEQAFAEAAANIAAAvIgNAAIAAgHQgBAIgSAAQgOAAgFgEgAgNAEQgCACAAAIQAAAHACADQACADAIAAIACAAIAFAAIAGgBQABAAAAAAQABAAAAgBQABAAAAAAQABAAAAgBQABAAAAgBQABAAAAAAQAAgBAAgBQAAAAAAgBIAAgSIgSAAQgJAAgCACg");
	this.shape_1.setTransform(6.925,1.625);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AARAiIAAgfIghAAIAAAfIgMAAIAAhDIAMAAIAAAcIAhAAIAAgcIAMAAIAABDg");
	this.shape_2.setTransform(-0.675,1.625);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AglAXIAAgrQAAgaAlAAQAmAAAAAaIAAArQAAAGgDAGQgEAFgGACIgMAEIgNABQglAAAAgYgAgIglIgJADQgDACgCADQgCADAAAGIAAAqQAAAQAYAAQAZAAAAgQIAAgqQAAgRgZAAIgIAAg");
	this.shape_3.setTransform(-12.65,0.45);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-19.5,-10.1,39,20.2);


(lib.Анимация10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgFAjIgHgBIgHgEIgEgGQgCgFAAgGIAAgYIABgKQABgEACgCIAFgEIAHgCIAHgBIAHAAQAKAAAKACIAAAJQgLgDgKAAQgKAAgDACQgDADAAAIIAAAbQAAAIAEACQADACAKAAQAKAAALgCIAAAJQgKACgMAAIgJAAg");
	this.shape.setTransform(14.325,1.625);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgWAfQgGgEAAgNQAAgMAFgDQAFgEAPAAIATAAIAAgLQAAgGgDgCQgEgCgJAAQgKAAgNACIAAgJIAZgBQARAAAFAEQAFAEAAANIAAAvIgNAAIAAgHQgBAIgSAAQgOAAgFgEgAgNAEQgCACAAAIQAAAHACADQACADAIAAIACAAIAFAAIAGgBQABAAAAAAQABAAAAgBQABAAAAAAQABAAAAgBQABAAAAgBQABAAAAAAQAAgBAAgBQAAAAAAgBIAAgSIgSAAQgJAAgCACg");
	this.shape_1.setTransform(6.925,1.625);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AARAiIAAgfIghAAIAAAfIgMAAIAAhDIAMAAIAAAcIAhAAIAAgcIAMAAIAABDg");
	this.shape_2.setTransform(-0.675,1.625);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AglAXIAAgrQAAgaAlAAQAmAAAAAaIAAArQAAAGgDAGQgEAFgGACIgMAEIgNABQglAAAAgYgAgIglIgJADQgDACgCADQgCADAAAGIAAAqQAAAQAYAAQAZAAAAgQIAAgqQAAgRgZAAIgIAAg");
	this.shape_3.setTransform(-12.65,0.45);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-19.5,-10.1,39,20.2);


(lib.Анимация9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgMAjQgFgBgFgCQgEgCgCgFQgCgFAAgIIAAgWQAAgHABgFQACgEACgDQADgCAEgCIAIgBIAKAAIAKAAIAJABQAEACADACIADAHQACAFAAAHIAAAWQAAAHgBAEIgEAHQgDACgEABIgJACIgKAAIgMAAgAgOgYQgDACAAAKIAAAaIABAHQAAADADABIAGACIAHAAIAIAAIAGgCQACgBABgDIABgHIAAgaQAAgKgEgCQgDgCgLAAQgKAAgEACg");
	this.shape.setTransform(12.625,1.625);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgFAiIAAg6IgbAAIAAgJIBBAAIAAAJIgbAAIAAA6g");
	this.shape_1.setTransform(5.025,1.625);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgMAjQgFgBgFgCQgEgCgCgFQgCgFAAgIIAAgWQAAgHABgFQACgEACgDQADgCAEgCIAIgBIAKAAIAKAAIAJABQAEACADACIADAHQACAFAAAHIAAAWQAAAHgBAEIgEAHQgDACgEABIgJACIgKAAIgMAAgAgOgYQgDACAAAKIAAAaIABAHQAAADADABIAGACIAHAAIAIAAIAGgCQACgBABgDIABgHIAAgaQAAgKgEgCQgDgCgLAAQgKAAgEACg");
	this.shape_2.setTransform(-2.575,1.625);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgFAuIAAgJQgKAAgHgCQgHgCgGgGQgFgFAAgJIAAgXQAAgNAKgHQAKgFAPgBIAAgJIAMAAIAAAJIANACQAFABAFADQAFADADAFQADAFAAAHIAAAXQAAAIgFAGQgFAFgIACQgHADgJAAIAAAJgAAHAcQAJAAAGgEQAFgEAAgHIAAgYQAAgHgFgEQgGgFgJAAgAgagLIAAAYQAAAHAFAEQAGAEAKAAIAAg3QgVAAAAAQg");
	this.shape_3.setTransform(-11.575,0.45);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-18.7,-10.1,37.4,20.2);


(lib.Анимация8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgMAjQgFgBgFgCQgEgCgCgFQgCgFAAgIIAAgWQAAgHABgFQACgEACgDQADgCAEgCIAIgBIAKAAIAKAAIAJABQAEACADACIADAHQACAFAAAHIAAAWQAAAHgBAEIgEAHQgDACgEABIgJACIgKAAIgMAAgAgOgYQgDACAAAKIAAAaIABAHQAAADADABIAGACIAHAAIAIAAIAGgCQACgBABgDIABgHIAAgaQAAgKgEgCQgDgCgLAAQgKAAgEACg");
	this.shape.setTransform(12.625,1.625);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgFAiIAAg6IgbAAIAAgJIBBAAIAAAJIgbAAIAAA6g");
	this.shape_1.setTransform(5.025,1.625);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgMAjQgFgBgFgCQgEgCgCgFQgCgFAAgIIAAgWQAAgHABgFQACgEACgDQADgCAEgCIAIgBIAKAAIAKAAIAJABQAEACADACIADAHQACAFAAAHIAAAWQAAAHgBAEIgEAHQgDACgEABIgJACIgKAAIgMAAgAgOgYQgDACAAAKIAAAaIABAHQAAADADABIAGACIAHAAIAIAAIAGgCQACgBABgDIABgHIAAgaQAAgKgEgCQgDgCgLAAQgKAAgEACg");
	this.shape_2.setTransform(-2.575,1.625);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgFAuIAAgJQgKAAgHgCQgHgCgGgGQgFgFAAgJIAAgXQAAgNAKgHQAKgFAPgBIAAgJIAMAAIAAAJIANACQAFABAFADQAFADADAFQADAFAAAHIAAAXQAAAIgFAGQgFAFgIACQgHADgJAAIAAAJgAAHAcQAJAAAGgEQAFgEAAgHIAAgYQAAgHgFgEQgGgFgJAAgAgagLIAAAYQAAAHAFAEQAGAEAKAAIAAg3QgVAAAAAQg");
	this.shape_3.setTransform(-11.575,0.45);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-18.7,-10.1,37.4,20.2);


(lib.Анимация7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgUAiIAAhDIApAAIAAAJIgdAAIAAA6g");
	this.shape.setTransform(12.325,1.625);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgMAjQgFgBgFgCQgEgCgCgFQgCgFAAgIIAAgWQAAgHABgFQACgEACgDQADgCAEgCIAIgBIAKAAIAKAAIAJABQAEACADACIADAHQACAFAAAHIAAAWQAAAHgBAEIgEAHQgDACgEABIgJACIgKAAIgMAAgAgOgYQgDACAAAKIAAAaIABAHQAAADADABIAGACIAHAAIAIAAIAGgCQACgBABgDIABgHIAAgaQAAgKgEgCQgDgCgLAAQgKAAgEACg");
	this.shape_1.setTransform(5.025,1.625);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AghAiIAAgIQAIAAADgCQADgCAAgHIAAgwIA1AAIAABCIgMAAIAAg5IgcAAIAAAlQAAAHgBAFQgCAEgEACIgHADIgJAAIgEAAg");
	this.shape_2.setTransform(-3.5,1.675);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgeAuIAAhbIAxAAIAAALIgjAAIAAAdIANAAIALAAIAJABIAIADIAEAFQACAEAAAFIAAAMQAAAVgfAAgAgRAlIAQAAIAFgBIAGgBQAEgBABgDQACgCAAgEIAAgLQAAgGgEgDQgFgCgJAAIgQAAg");
	this.shape_3.setTransform(-10.675,0.45);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-17,-10.1,34,20.2);


(lib.Анимация6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgUAiIAAhDIApAAIAAAJIgdAAIAAA6g");
	this.shape.setTransform(12.325,1.625);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgMAjQgFgBgFgCQgEgCgCgFQgCgFAAgIIAAgWQAAgHABgFQACgEACgDQADgCAEgCIAIgBIAKAAIAKAAIAJABQAEACADACIADAHQACAFAAAHIAAAWQAAAHgBAEIgEAHQgDACgEABIgJACIgKAAIgMAAgAgOgYQgDACAAAKIAAAaIABAHQAAADADABIAGACIAHAAIAIAAIAGgCQACgBABgDIABgHIAAgaQAAgKgEgCQgDgCgLAAQgKAAgEACg");
	this.shape_1.setTransform(5.025,1.625);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AghAiIAAgIQAIAAADgCQADgCAAgHIAAgwIA1AAIAABCIgMAAIAAg5IgcAAIAAAlQAAAHgBAFQgCAEgEACIgHADIgJAAIgEAAg");
	this.shape_2.setTransform(-3.5,1.675);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgeAuIAAhbIAxAAIAAALIgjAAIAAAdIANAAIALAAIAJABIAIADIAEAFQACAEAAAFIAAAMQAAAVgfAAgAgRAlIAQAAIAFgBIAGgBQAEgBABgDQACgCAAgEIAAgLQAAgGgEgDQgFgCgJAAIgQAAg");
	this.shape_3.setTransform(-10.675,0.45);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-17,-10.1,34,20.2);


(lib.Анимация5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AAbAiIAAhDIAMAAIAABDgAgmAiIAAhDIAMAAIAAAYIATAAQAMAAAFADQAGADAAAIIAAAOQAAAPgYAAgAgaAaIARAAIAEgBIAFAAIACgDQACgCAAgDIAAgIQAAgGgDgCQgBgBgJAAIgRAAg");
	this.shape.setTransform(26.775,1.625);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgFAiIAAg6IgbAAIAAgJIBBAAIAAAJIgbAAIAAA6g");
	this.shape_1.setTransform(18.025,1.625);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AAPAiIgRgVIgIgHIgEgCIgDgBIAAAfIgNAAIAAhDIANAAIAAAdQAFAAACgBQADgCADgEIAGgMQAEgGAEgCQAEgCAIAAIAEAAIAAAHIgCAAQgIAAgEAIIgFAIQgFAJgFABQADAAAMANIATAVg");
	this.shape_2.setTransform(11.525,1.625);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgWAfQgGgEAAgNQAAgMAFgDQAFgEAPAAIATAAIAAgLQAAgGgDgCQgEgCgJAAQgKAAgNACIAAgJIAZgBQARAAAFAEQAFAEAAANIAAAvIgNAAIAAgHQgBAIgSAAQgOAAgFgEgAgNAEQgCACAAAIQAAAHACADQACADAIAAIACAAIAFAAIAGgBQAAAAABAAQABAAAAgBQABAAAAAAQABAAAAgBQABAAAAgBQAAAAABAAQAAgBAAgBQAAAAAAgBIAAgSIgSAAQgJAAgCACg");
	this.shape_3.setTransform(3.375,1.625);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgFAiIAAg6IgbAAIAAgJIBBAAIAAAJIgbAAIAAA6g");
	this.shape_4.setTransform(-3.825,1.625);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AARAiIAAgfIghAAIAAAfIgMAAIAAhDIAMAAIAAAcIAhAAIAAgcIAMAAIAABDg");
	this.shape_5.setTransform(-11.475,1.625);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgMAjQgFgBgFgCQgEgCgCgFQgCgFAAgIIAAgWQAAgHABgFQACgEACgDQADgCAEgCIAIgBIAKAAIAKAAIAJABQAEACADACIADAHQACAFAAAHIAAAWQAAAHgBAEIgEAHQgDACgEABIgJACIgKAAIgMAAgAgOgYQgDACAAAKIAAAaIABAHQAAADADABIAGACIAHAAIAIAAIAGgCQACgBABgDIABgHIAAgaQAAgKgEgCQgDgCgLAAQgKAAgEACg");
	this.shape_6.setTransform(-19.475,1.625);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AAUAuIgYgdIgMgMQgEgBgDAAIAAAqIgNAAIAAhbIANAAIAAAoQAGAAACgBQADgBACgFIAMgTQAFgJAEgCQAEgDAKAAIAGAAIAAAKIgHAAQgEAAgDADIgFAHIgJAOQgDAGgCABQgCADgEABQAFAAAPARIAZAdg");
	this.shape_7.setTransform(-26.925,0.45);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-33.9,-10.1,67.8,20.2);


(lib.Анимация4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AAbAiIAAhDIAMAAIAABDgAgmAiIAAhDIAMAAIAAAYIATAAQAMAAAFADQAGADAAAIIAAAOQAAAPgYAAgAgaAaIARAAIAEgBIAFAAIACgDQACgCAAgDIAAgIQAAgGgDgCQgBgBgJAAIgRAAg");
	this.shape.setTransform(26.775,1.625);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgFAiIAAg6IgbAAIAAgJIBBAAIAAAJIgbAAIAAA6g");
	this.shape_1.setTransform(18.025,1.625);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AAPAiIgRgVIgIgHIgEgCIgDgBIAAAfIgNAAIAAhDIANAAIAAAdQAFAAACgBQADgCADgEIAGgMQAEgGAEgCQAEgCAIAAIAEAAIAAAHIgCAAQgIAAgEAIIgFAIQgFAJgFABQADAAAMANIATAVg");
	this.shape_2.setTransform(11.525,1.625);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgWAfQgGgEAAgNQAAgMAFgDQAFgEAPAAIATAAIAAgLQAAgGgDgCQgEgCgJAAQgKAAgNACIAAgJIAZgBQARAAAFAEQAFAEAAANIAAAvIgNAAIAAgHQgBAIgSAAQgOAAgFgEgAgNAEQgCACAAAIQAAAHACADQACADAIAAIACAAIAFAAIAGgBQAAAAABAAQABAAAAgBQABAAAAAAQABAAAAgBQABAAAAgBQAAAAABAAQAAgBAAgBQAAAAAAgBIAAgSIgSAAQgJAAgCACg");
	this.shape_3.setTransform(3.375,1.625);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgFAiIAAg6IgbAAIAAgJIBBAAIAAAJIgbAAIAAA6g");
	this.shape_4.setTransform(-3.825,1.625);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AARAiIAAgfIghAAIAAAfIgMAAIAAhDIAMAAIAAAcIAhAAIAAgcIAMAAIAABDg");
	this.shape_5.setTransform(-11.475,1.625);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgMAjQgFgBgFgCQgEgCgCgFQgCgFAAgIIAAgWQAAgHABgFQACgEACgDQADgCAEgCIAIgBIAKAAIAKAAIAJABQAEACADACIADAHQACAFAAAHIAAAWQAAAHgBAEIgEAHQgDACgEABIgJACIgKAAIgMAAgAgOgYQgDACAAAKIAAAaIABAHQAAADADABIAGACIAHAAIAIAAIAGgCQACgBABgDIABgHIAAgaQAAgKgEgCQgDgCgLAAQgKAAgEACg");
	this.shape_6.setTransform(-19.475,1.625);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AAUAuIgYgdIgMgMQgEgBgDAAIAAAqIgNAAIAAhbIANAAIAAAoQAGAAACgBQADgBACgFIAMgTQAFgJAEgCQAEgDAKAAIAGAAIAAAKIgHAAQgEAAgDADIgFAHIgJAOQgDAGgCABQgCADgEABQAFAAAPARIAZAdg");
	this.shape_7.setTransform(-26.925,0.45);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-33.9,-10.1,67.8,20.2);


(lib.Анимация2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AAbAiIAAhDIAMAAIAABDgAgmAiIAAhDIAMAAIAAAYIATAAQAMAAAFADQAGADAAAIIAAAOQAAAPgYAAgAgaAaIARAAIAEgBIAFAAIACgDQACgCAAgDIAAgIQAAgGgDgCQgBgBgJAAIgRAAg");
	this.shape.setTransform(32.025,1.625);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgFAiIAAg6IgbAAIAAgJIBBAAIAAAJIgbAAIAAA6g");
	this.shape_1.setTransform(23.275,1.625);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AARAiIAAgfIghAAIAAAfIgMAAIAAhDIAMAAIAAAcIAhAAIAAgcIAMAAIAABDg");
	this.shape_2.setTransform(15.625,1.625);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgUAeQgIgFAAgLIAAgZQAAgNAHgFQAHgFAPAAQAPAAAGAFQAHAFAAANIAAAOIgsAAIAAAKQAAAHAFADQAFADAJAAQAJAAAOgDIAAAJQgNADgNAAQgMAAgJgFgAgLgYQgEACAAAHIAAAKIAgAAIAAgKQAAgGgEgDQgEgCgIAAQgIAAgEACg");
	this.shape_3.setTransform(7.85,1.625);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AAcAiIAAg4IAAAAIgVA4IgMAAIgVg4IgBAAIAAA4IgMAAIAAhDIAUAAIAUA2IAAAAIATg2IAUAAIAABDg");
	this.shape_4.setTransform(-1.05,1.625);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgOAwIAKgbIgahEIANAAIASA2IABAAIARg2IAMAAIggBfg");
	this.shape_5.setTransform(-9.475,3.025);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AAPAiIgRgVIgIgHIgEgCIgDgBIAAAfIgNAAIAAhDIANAAIAAAdQAFAAACgBQADgCADgEIAGgMQAEgGAEgCQAEgCAIAAIAEAAIAAAHIgCAAQgIAAgEAIIgFAIQgFAJgFABQADAAAMANIATAVg");
	this.shape_6.setTransform(-15.575,1.625);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgMAjQgFgBgFgCQgEgCgCgFQgCgFAAgIIAAgWQAAgHABgFQACgEACgDQADgCAEgCIAIgBIAKAAIAKAAIAJABQAEACADACIADAHQACAFAAAHIAAAWQAAAHgBAEIgEAHQgDACgEABIgJACIgKAAIgMAAgAgOgYQgDACAAAKIAAAaIABAHQAAADADABIAGACIAHAAIAIAAIAGgCQACgBABgDIABgHIAAgaQAAgKgEgCQgDgCgLAAQgKAAgEACg");
	this.shape_7.setTransform(-23.725,1.625);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AAfA5IAAgXIg9AAIAAAXIgMAAIAAghIAIAAQAGgKADgOQADgPAAgaIAAgPIA4AAIAABQIAJAAIAAAhgAgJgnQAAAUgEASQgDAQgFAJIApAAIAAhGIgdAAg");
	this.shape_8.setTransform(-32.475,1.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-39.1,-10.1,78.30000000000001,20.2);


(lib.Анимация1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AAbAiIAAhDIAMAAIAABDgAgmAiIAAhDIAMAAIAAAYIATAAQAMAAAFADQAGADAAAIIAAAOQAAAPgYAAgAgaAaIARAAIAEgBIAFAAIACgDQACgCAAgDIAAgIQAAgGgDgCQgBgBgJAAIgRAAg");
	this.shape.setTransform(32.025,1.625);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgFAiIAAg6IgbAAIAAgJIBBAAIAAAJIgbAAIAAA6g");
	this.shape_1.setTransform(23.275,1.625);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AARAiIAAgfIghAAIAAAfIgMAAIAAhDIAMAAIAAAcIAhAAIAAgcIAMAAIAABDg");
	this.shape_2.setTransform(15.625,1.625);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgUAeQgIgFAAgLIAAgZQAAgNAHgFQAHgFAPAAQAPAAAGAFQAHAFAAANIAAAOIgsAAIAAAKQAAAHAFADQAFADAJAAQAJAAAOgDIAAAJQgNADgNAAQgMAAgJgFgAgLgYQgEACAAAHIAAAKIAgAAIAAgKQAAgGgEgDQgEgCgIAAQgIAAgEACg");
	this.shape_3.setTransform(7.85,1.625);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AAcAiIAAg4IAAAAIgVA4IgMAAIgVg4IgBAAIAAA4IgMAAIAAhDIAUAAIAUA2IAAAAIATg2IAUAAIAABDg");
	this.shape_4.setTransform(-1.05,1.625);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgOAwIAKgbIgahEIANAAIASA2IABAAIARg2IAMAAIggBfg");
	this.shape_5.setTransform(-9.475,3.025);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AAPAiIgRgVIgIgHIgEgCIgDgBIAAAfIgNAAIAAhDIANAAIAAAdQAFAAACgBQADgCADgEIAGgMQAEgGAEgCQAEgCAIAAIAEAAIAAAHIgCAAQgIAAgEAIIgFAIQgFAJgFABQADAAAMANIATAVg");
	this.shape_6.setTransform(-15.575,1.625);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgMAjQgFgBgFgCQgEgCgCgFQgCgFAAgIIAAgWQAAgHABgFQACgEACgDQADgCAEgCIAIgBIAKAAIAKAAIAJABQAEACADACIADAHQACAFAAAHIAAAWQAAAHgBAEIgEAHQgDACgEABIgJACIgKAAIgMAAgAgOgYQgDACAAAKIAAAaIABAHQAAADADABIAGACIAHAAIAIAAIAGgCQACgBABgDIABgHIAAgaQAAgKgEgCQgDgCgLAAQgKAAgEACg");
	this.shape_7.setTransform(-23.725,1.625);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AAfA5IAAgXIg9AAIAAAXIgMAAIAAghIAIAAQAGgKADgOQADgPAAgaIAAgPIA4AAIAABQIAJAAIAAAhgAgJgnQAAAUgEASQgDAQgFAJIApAAIAAhGIgdAAg");
	this.shape_8.setTransform(-32.475,1.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-39.1,-10.1,78.30000000000001,20.2);


// stage content:
(lib._380x555 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_135 = function() {
		/* Остановить на этом кадре
		Если вставить этот код в кадр, то остановит/приостановит воспроизведение на нем.
		Также может использоваться для остановки/приостановки воспроизведения фрагментов ролика.
		*/
		
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(135).call(this.frame_135).wait(1));

	// Документы.png
	this.instance = new lib.doc();
	this.instance.parent = this;
	this.instance.setTransform(-126,115.5,1,1,0,0,0,39,55.5);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(6).to({_off:false},0).to({x:124,alpha:1},17,cjs.Ease.backOut).to({regY:55.6,rotation:-3.4528,x:124.05,y:115.6},6,cjs.Ease.quadInOut).to({rotation:4.4843,x:124},12,cjs.Ease.quadInOut).to({rotation:-3.4528,x:124.05},12,cjs.Ease.quadInOut).to({rotation:4.4843,x:124},12,cjs.Ease.quadInOut).to({rotation:-3.4528,x:124.05},12,cjs.Ease.quadInOut).to({rotation:4.4843,x:124},12,cjs.Ease.quadInOut).to({rotation:-3.4528,x:124.05},12,cjs.Ease.quadInOut).to({rotation:4.4843,x:124},12,cjs.Ease.quadInOut).to({rotation:-3.4528,x:124.05},12,cjs.Ease.quadInOut).to({regY:55.5,rotation:0,x:124,y:115.5},6,cjs.Ease.quadInOut).wait(5));

	// tx_doc
	this.instance_1 = new lib.Анимация1("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(112.25,163);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.instance_2 = new lib.Анимация2("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(120.25,163);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_1}]},6).to({state:[{t:this.instance_2}]},17).wait(113));
	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(6).to({_off:false},0).to({_off:true,x:120.25,alpha:1},17,cjs.Ease.quadOut).wait(113));

	// Контакты.png
	this.instance_3 = new lib.kon();
	this.instance_3.parent = this;
	this.instance_3.setTransform(19,114.5,1,1,0,0,0,44,54.5);
	this.instance_3.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({x:269,alpha:1},17,cjs.Ease.backOut).to({rotation:-3.7051},6,cjs.Ease.quadInOut).to({regX:44.1,regY:54.6,rotation:2.7375,x:269.15,y:114.6},12,cjs.Ease.quadInOut).to({regX:44,regY:54.5,rotation:-3.7051,x:269,y:114.5},12,cjs.Ease.quadInOut).to({regX:44.1,regY:54.6,rotation:2.7375,x:269.15,y:114.6},12,cjs.Ease.quadInOut).to({regX:44,regY:54.5,rotation:-3.7051,x:269,y:114.5},12,cjs.Ease.quadInOut).to({regX:44.1,regY:54.6,rotation:2.7375,x:269.15,y:114.6},12,cjs.Ease.quadInOut).to({regX:44,regY:54.5,rotation:-3.7051,x:269,y:114.5},12,cjs.Ease.quadInOut).to({regX:44.1,regY:54.6,rotation:2.7375,x:269.15,y:114.6},12,cjs.Ease.quadInOut).to({regX:44,regY:54.5,rotation:-3.7051,x:269,y:114.5},12,cjs.Ease.quadInOut).to({rotation:0},6,cjs.Ease.quadInOut).wait(11));

	// tx_cont
	this.instance_4 = new lib.Анимация4("synched",0);
	this.instance_4.parent = this;
	this.instance_4.setTransform(256.1,163);
	this.instance_4.alpha = 0;

	this.instance_5 = new lib.Анимация5("synched",0);
	this.instance_5.parent = this;
	this.instance_5.setTransform(264.1,163);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_4}]}).to({state:[{t:this.instance_5}]},17).wait(119));
	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({_off:true,x:264.1,alpha:1},17,cjs.Ease.quadOut).wait(119));

	// Блог.png
	this.instance_6 = new lib.blog_1();
	this.instance_6.parent = this;
	this.instance_6.setTransform(-125.5,279,1,1,0,0,0,44.5,52);
	this.instance_6.alpha = 0;
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(15).to({_off:false},0).to({x:124.5,alpha:1},17,cjs.Ease.backOut).to({regX:44.6,regY:52.1,rotation:-3.0027,x:124.65,y:279.1},6,cjs.Ease.quadInOut).to({regX:44.5,rotation:1.4628,x:124.55},12,cjs.Ease.quadInOut).to({regX:44.6,rotation:-3.0027,x:124.65},12,cjs.Ease.quadInOut).to({regX:44.5,rotation:1.4628,x:124.55},12,cjs.Ease.quadInOut).to({regX:44.6,rotation:-3.0027,x:124.65},12,cjs.Ease.quadInOut).to({regX:44.5,rotation:1.4628,x:124.55},12,cjs.Ease.quadInOut).to({regX:44.6,rotation:-3.0027,x:124.65},12,cjs.Ease.quadInOut).to({regX:44.5,rotation:1.4628,x:124.55},12,cjs.Ease.quadInOut).to({regY:52,rotation:0,x:124.5,y:279},6,cjs.Ease.quadInOut).wait(8));

	// tx_blog
	this.instance_7 = new lib.Анимация6("synched",0);
	this.instance_7.parent = this;
	this.instance_7.setTransform(112.25,324.7);
	this.instance_7.alpha = 0;
	this.instance_7._off = true;

	this.instance_8 = new lib.Анимация7("synched",0);
	this.instance_8.parent = this;
	this.instance_8.setTransform(120.25,324.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_7}]},15).to({state:[{t:this.instance_8}]},17).wait(104));
	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(15).to({_off:false},0).to({_off:true,x:120.25,alpha:1},17,cjs.Ease.quadOut).wait(104));

	// Фото.png
	this.instance_9 = new lib.foto();
	this.instance_9.parent = this;
	this.instance_9.setTransform(18,277.5,1,1,0,0,0,44,53.5);
	this.instance_9.alpha = 0;
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(11).to({_off:false},0).to({x:268,alpha:1},17,cjs.Ease.backOut).to({regX:44.1,regY:53.6,rotation:-1.5074,x:268.15,y:277.6},6,cjs.Ease.quadInOut).to({rotation:4.2354,x:268.2,y:277.55},12,cjs.Ease.quadInOut).to({rotation:-1.5074,x:268.15,y:277.6},12,cjs.Ease.quadInOut).to({rotation:4.2354,x:268.2,y:277.55},12,cjs.Ease.quadInOut).to({rotation:-1.5074,x:268.15,y:277.6},12,cjs.Ease.quadInOut).to({rotation:4.2354,x:268.2,y:277.55},12,cjs.Ease.quadInOut).to({rotation:-1.5074,x:268.15,y:277.6},12,cjs.Ease.quadInOut).to({rotation:4.2354,x:268.2,y:277.55},12,cjs.Ease.quadInOut).to({regX:44,regY:53.5,rotation:0,x:268,y:277.5},6,cjs.Ease.quadInOut).wait(12));

	// tx_photo
	this.instance_10 = new lib.Анимация8("synched",0);
	this.instance_10.parent = this;
	this.instance_10.setTransform(256.1,324.7);
	this.instance_10.alpha = 0;
	this.instance_10._off = true;

	this.instance_11 = new lib.Анимация9("synched",0);
	this.instance_11.parent = this;
	this.instance_11.setTransform(264.1,324.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_10}]},11).to({state:[{t:this.instance_11}]},17).wait(108));
	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(11).to({_off:false},0).to({_off:true,x:264.1,alpha:1},17,cjs.Ease.quadOut).wait(108));

	// О нас.png
	this.instance_12 = new lib.abo();
	this.instance_12.parent = this;
	this.instance_12.setTransform(-125.5,441,1,1,0,0,0,44.5,53);
	this.instance_12.alpha = 0;
	this.instance_12._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(27).to({_off:false},0).to({x:124.5,alpha:1},17,cjs.Ease.backOut).to({regX:44.6,regY:53.1,rotation:-3.2277,x:124.65,y:441.1},6,cjs.Ease.quadInOut).to({rotation:0.96,x:124.6},12,cjs.Ease.quadInOut).to({rotation:-3.2277,x:124.65},12,cjs.Ease.quadInOut).to({rotation:0.96,x:124.6},12,cjs.Ease.quadInOut).to({rotation:-3.2277,x:124.65},12,cjs.Ease.quadInOut).to({rotation:0.96,x:124.6},12,cjs.Ease.quadInOut).to({rotation:-3.2277,x:124.65},12,cjs.Ease.quadInOut).to({regX:44.5,regY:53,rotation:0,x:124.5,y:441},6,cjs.Ease.quadInOut).wait(8));

	// tx_about
	this.instance_13 = new lib.Анимация10("synched",0);
	this.instance_13.parent = this;
	this.instance_13.setTransform(112.25,488.15);
	this.instance_13.alpha = 0;
	this.instance_13._off = true;

	this.instance_14 = new lib.Анимация11("synched",0);
	this.instance_14.parent = this;
	this.instance_14.setTransform(120.25,488.15);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_13}]},27).to({state:[{t:this.instance_14}]},17).wait(92));
	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(27).to({_off:false},0).to({_off:true,x:120.25,alpha:1},17,cjs.Ease.quadOut).wait(92));

	// Партнёры.png
	this.instance_15 = new lib.part_1();
	this.instance_15.parent = this;
	this.instance_15.setTransform(17.5,443,1,1,0,0,0,44.5,53);
	this.instance_15.alpha = 0;
	this.instance_15._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(23).to({_off:false},0).to({x:267.5,alpha:1},17,cjs.Ease.backOut).to({regX:44.6,rotation:-2.9519,x:267.6},6,cjs.Ease.quadInOut).to({regY:53.1,rotation:1.5354,y:443.1},12,cjs.Ease.quadInOut).to({regY:53,rotation:-2.9519,y:443},12,cjs.Ease.quadInOut).to({regY:53.1,rotation:1.5354,y:443.1},12,cjs.Ease.quadInOut).to({regY:53,rotation:-2.9519,y:443},12,cjs.Ease.quadInOut).to({regY:53.1,rotation:1.5354,y:443.1},12,cjs.Ease.quadInOut).to({regY:53,rotation:-2.9519,y:443},12,cjs.Ease.quadInOut).to({regX:44.5,rotation:0,x:267.5},6,cjs.Ease.quadInOut).wait(12));

	// tx_part
	this.instance_16 = new lib.Анимация12("synched",0);
	this.instance_16.parent = this;
	this.instance_16.setTransform(256.1,488.15);
	this.instance_16.alpha = 0;
	this.instance_16._off = true;

	this.instance_17 = new lib.Анимация13("synched",0);
	this.instance_17.parent = this;
	this.instance_17.setTransform(264.1,488.15);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_16}]},23).to({state:[{t:this.instance_17}]},17).wait(96));
	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(23).to({_off:false},0).to({_off:true,x:264.1,alpha:1},17,cjs.Ease.quadOut).wait(96));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(4,318.1,334,180.2);
// library properties:
lib.properties = {
	id: 'FDE09619F35CF34B9C2858E15632AD22',
	width: 380,
	height: 555,
	fps: 34,
	color: "#FFFFFF",
	opacity: 0.00,
	manifest: [
		{src:"images/about.png", id:"about"},
		{src:"images/blog.png", id:"blog"},
		{src:"images/cont.png", id:"cont"},
		{src:"images/docs.png", id:"docs"},
		{src:"images/part.png", id:"part"},
		{src:"images/photo.png", id:"photo"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['FDE09619F35CF34B9C2858E15632AD22'] = {
	getStage: function() { return exportRoot.getStage(); },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
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
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;			
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});			
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;			
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;