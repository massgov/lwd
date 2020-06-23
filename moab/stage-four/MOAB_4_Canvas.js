(function(lib, img, cjs, ss) {
  var p; // shortcut to reference prototypes
  lib.webFontTxtInst = {};
  var loadedTypekitCount = 0;
  var loadedGoogleCount = 0;
  var gFontsUpdateCacheList = [];
  var tFontsUpdateCacheList = [];

  // library properties:
  lib.properties = {
    width: 800,
    height: 600,
    fps: 12,
    color: "#FFFFFF",
    opacity: 1.0,
    webfonts: {},
    manifest: [
      { src: "images/image100.jpg", id: "image100" },
      { src: "images/image106.jpg", id: "image106" },
      { src: "images/image34.jpg", id: "image34" },
      { src: "images/image39.jpg", id: "image39" },
      { src: "images/image52.jpg", id: "image52" },
      { src: "images/image57.jpg", id: "image57" },
      { src: "images/image58.jpg", id: "image58" },
      { src: "images/image59.jpg", id: "image59" },
      { src: "images/image72.jpg", id: "image72" },
      { src: "images/image76.jpg", id: "image76" },
      { src: "images/image81.jpg", id: "image81" },
      { src: "images/image95.jpg", id: "image95" },
      { src: "sounds/sound114.mp3", id: "sound114" }
    ]
  };

  lib.ssMetadata = [];

  lib.updateListCache = function(cacheList) {
    for (var i = 0; i < cacheList.length; i++) {
      if (cacheList[i].cacheCanvas) cacheList[i].updateCache();
    }
  };

  lib.addElementsToCache = function(textInst, cacheList) {
    var cur = textInst;
    while (cur != exportRoot) {
      if (cacheList.indexOf(cur) != -1) break;
      cur = cur.parent;
    }
    if (cur != exportRoot) {
      //we have found an element in the list
      var cur2 = textInst;
      var index = cacheList.indexOf(cur);
      while (cur2 != cur) {
        //insert all it's children just before it
        cacheList.splice(index, 0, cur2);
        cur2 = cur2.parent;
        index++;
      }
    } else {
      //append element and it's parents in the array
      cur = textInst;
      while (cur != exportRoot) {
        cacheList.push(cur);
        cur = cur.parent;
      }
    }
  };

  lib.gfontAvailable = function(family, totalGoogleCount) {
    lib.properties.webfonts[family] = true;
    var txtInst = (lib.webFontTxtInst && lib.webFontTxtInst[family]) || [];
    for (var f = 0; f < txtInst.length; ++f)
      lib.addElementsToCache(txtInst[f], gFontsUpdateCacheList);

    loadedGoogleCount++;
    if (loadedGoogleCount == totalGoogleCount) {
      lib.updateListCache(gFontsUpdateCacheList);
    }
  };

  lib.tfontAvailable = function(family, totalTypekitCount) {
    lib.properties.webfonts[family] = true;
    var txtInst = (lib.webFontTxtInst && lib.webFontTxtInst[family]) || [];
    for (var f = 0; f < txtInst.length; ++f)
      lib.addElementsToCache(txtInst[f], tFontsUpdateCacheList);

    loadedTypekitCount++;
    if (loadedTypekitCount == totalTypekitCount) {
      lib.updateListCache(tFontsUpdateCacheList);
    }
  };
  // symbols:

  (lib.image100 = function() {
    this.initialize(img.image100);
  }).prototype = p = new cjs.Bitmap();
  p.nominalBounds = new cjs.Rectangle(0, 0, 290, 191);

  (lib.image106 = function() {
    this.initialize(img.image106);
  }).prototype = p = new cjs.Bitmap();
  p.nominalBounds = new cjs.Rectangle(0, 0, 490, 146);

  (lib.image34 = function() {
    this.initialize(img.image34);
  }).prototype = p = new cjs.Bitmap();
  p.nominalBounds = new cjs.Rectangle(0, 0, 800, 600);

  (lib.image39 = function() {
    this.initialize(img.image39);
  }).prototype = p = new cjs.Bitmap();
  p.nominalBounds = new cjs.Rectangle(0, 0, 218, 217);

  (lib.image52 = function() {
    this.initialize(img.image52);
  }).prototype = p = new cjs.Bitmap();
  p.nominalBounds = new cjs.Rectangle(0, 0, 218, 217);

  (lib.image57 = function() {
    this.initialize(img.image57);
  }).prototype = p = new cjs.Bitmap();
  p.nominalBounds = new cjs.Rectangle(0, 0, 218, 217);

  (lib.image58 = function() {
    this.initialize(img.image58);
  }).prototype = p = new cjs.Bitmap();
  p.nominalBounds = new cjs.Rectangle(0, 0, 218, 217);

  (lib.image59 = function() {
    this.initialize(img.image59);
  }).prototype = p = new cjs.Bitmap();
  p.nominalBounds = new cjs.Rectangle(0, 0, 218, 217);

  (lib.image72 = function() {
    this.initialize(img.image72);
  }).prototype = p = new cjs.Bitmap();
  p.nominalBounds = new cjs.Rectangle(0, 0, 218, 217);

  (lib.image76 = function() {
    this.initialize(img.image76);
  }).prototype = p = new cjs.Bitmap();
  p.nominalBounds = new cjs.Rectangle(0, 0, 218, 217);

  (lib.image81 = function() {
    this.initialize(img.image81);
  }).prototype = p = new cjs.Bitmap();
  p.nominalBounds = new cjs.Rectangle(0, 0, 290, 191);

  (lib.image95 = function() {
    this.initialize(img.image95);
  }).prototype = p = new cjs.Bitmap();
  p.nominalBounds = new cjs.Rectangle(0, 0, 290, 191);

  (lib.text247UpOverDownHit = function(mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {});

    // Layer 1
    this.shape = new cjs.Shape();
    this.shape.graphics
      .f("#000000")
      .s()
      .p(
        "AgSAiQgEgBgDgFQgDgFAAgFIgBgKIAAgrIAVAAIAAArIAAAEIABAEIACACIAFABQABAAADgCQADgBABgEIABgFIAAgGIAAgkIAVAAIAABFIgTAAIAAgMIgBAAQgCAHgFADIgEADIgHABQgFAAgFgCg"
      );
    this.shape.setTransform(30.7, 4.8);

    this.shape_1 = new cjs.Shape();
    this.shape_1.graphics
      .f("#000000")
      .s()
      .p(
        "AAKAkIAAgkIAAgGIgBgGQgBgDgCgCQgCgBgEAAIgDABIgDAEIgCAGIgBAHIAAAkIgUAAIAAhFIATAAIAAAMQAEgHAEgDQACgCACgBIAHgBIAKACQAEACADAEIADAFIABAFIAAAGIAAAFIAAAqg"
      );
    this.shape_1.setTransform(23.2, 4.6);

    this.shape_2 = new cjs.Shape();
    this.shape_2.graphics
      .f("#000000")
      .s()
      .p(
        "AgMAiQgHgDgEgFQgEgEgDgHQgCgGAAgJQAAgFACgHQACgHAFgGQAEgEAHgEQAGgDAGAAIAHABIAIACQAGAEAFAGQAEAGACAHQACAIgBAFIgrAAIgBAEQABAFADAFIAFAEIAEABIAEgBIAEgDIADgDIABgFIATACIgBADIgCAFIgEAFIgGAGIgIAEQgGABgGAAQgFAAgHgCgAANgHIgBgGIgCgFIgEgDIgFgBIgEABIgEADIgDAFIgBAGIAYAAg"
      );
    this.shape_2.setTransform(15.6, 4.7);

    this.shape_3 = new cjs.Shape();
    this.shape_3.graphics
      .f("#000000")
      .s()
      .p(
        "AAdAkIAAgkIAAgDIAAgDIAAgEIAAgCQgBgEgDgBQgCgBgDAAQgDAAgCABQgDACgBACIgCAHIAAAGIAAAkIgSAAIAAgkIAAgGIgBgGQgBgDgBgBQgCgCgEAAQgEAAgDABIgDAFIgBAGIAAAGIAAAkIgUAAIAAhFIAUAAIAAALQACgHAGgDQAFgDAGAAQAIAAACADQAFADADAHIAEgGIAEgEQAGgDAHAAQAFAAAEACQAFACADAEQACACABACIABAFIAAAGIAAAFIAAArg"
      );
    this.shape_3.setTransform(6.2, 4.6);

    this.timeline.addTween(
      cjs.Tween.get({})
        .to({
          state: [
            { t: this.shape_3 },
            { t: this.shape_2 },
            { t: this.shape_1 },
            { t: this.shape }
          ]
        })
        .wait(1)
    );
  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = new cjs.Rectangle(-4, -6.8, 43, 37.2);

  (lib.text109Over = function(mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {});

    // Layer 1
    this.shape = new cjs.Shape();
    this.shape.graphics
      .f("#990000")
      .s()
      .p(
        "ABHBGIAAhTQAAgOgCgGQgCgHgHgGQgHgFgJAAQgMAAgLAMQgMAKAAAXIAABMIgTAAIAAhZQABgRgKgIQgIgIgKAAQgOAAgKAMQgJAMgBASIAABQIgUAAIAAiHIASAAIAAAaQAQgfAbAAQAPABAKAJQAJAKACANQAPggAdgBQAPABAKAHQAKAJAEAKQADALAAATIAABTg"
      );
    this.shape.setTransform(410.7, 41.6);

    this.shape_1 = new cjs.Shape();
    this.shape_1.graphics
      .f("#990000")
      .s()
      .p(
        "AgtAzQgPgVgBgeQABggARgTQATgVAYAAQAdAAAQAWQAQAUAAAeQABAfgSAVQgSAUgaABQgdAAgQgWgAgagoQgLANAAAbQAAAcALANQAMAOAOAAQAQAAALgOQALgNAAgcQAAgcgMgMQgLgOgPAAQgOAAgMAOg"
      );
    this.shape_1.setTransform(392.1, 41.8);

    this.shape_2 = new cjs.Shape();
    this.shape_2.graphics
      .f("#990000")
      .s()
      .p(
        "AgoAzQgPgVABgeQgBgeARgUQAPgWAZAAQAXAAANAOQAOAOADAVIgTADQgGghgbgBQgPAAgKAPQgKAQAAAXQAAAZAJAPQAKAPAPAAQAbAAAHgjIATADQgEAYgOAMQgOAOgVAAQgaAAgQgWg"
      );
    this.shape_2.setTransform(378.5, 41.8);

    this.shape_3 = new cjs.Shape();
    this.shape_3.graphics
      .f("#990000")
      .s()
      .p("AgOAPIAAgdIAdAAIAAAdg");
    this.shape_3.setTransform(368.3, 47.2);

    this.shape_4 = new cjs.Shape();
    this.shape_4.graphics
      .f("#990000")
      .s()
      .p(
        "AgxBgQgQgKAAgRQAAgUAVgHQgNgKAAgNQAAgPATgHQgSgPAAgVQAAgVAPgNQAQgOAWAAQANABANAFQACgNAIgFQAHgFAPgBIAGABIAAARQgPAAgFAEQgFACgCAKQANAPAAASQAAATgOANQgOAMgXAAIgJgBIgKgBQgDAAgGADQgFAEAAAGQAAAIAIACQAHACAaACQAYAAALADQALACAIAJQAEAEACAFQACAGAAAGQAAAohDAAQghAAgPgKgAgsBDQAAALANAFQAMAGATAAQAQAAAPgFQAOgFAAgMQAAgGgEgFQgEgDgIgBIgagCIgggCQgPAGAAANgAgYg+QgKAJAAAPQAAANAJAIQAIAJAOgBQAMAAAIgIQAJgIAAgNQAAgPgJgIQgJgJgLAAQgMABgJAHg"
      );
    this.shape_4.setTransform(358.4, 43.3);

    this.shape_5 = new cjs.Shape();
    this.shape_5.graphics
      .f("#990000")
      .s()
      .p(
        "AAhBGIAAhWQAAgUgHgHQgJgIgMAAQgOAAgMANQgLAOAAAVIAABJIgVAAIAAiHIAUAAIAAAZQARgeAZAAQAPABALAHQAKAIAFAKQAEAKAAAaIAABOg"
      );
    this.shape_5.setTransform(343.5, 41.6);

    this.shape_6 = new cjs.Shape();
    this.shape_6.graphics
      .f("#990000")
      .s()
      .p("AgJBdIAAiIIAUAAIAACIgAgKhEIAAgYIAVAAIAAAYg");
    this.shape_6.setTransform(332.7, 39.4);

    this.shape_7 = new cjs.Shape();
    this.shape_7.graphics
      .f("#990000")
      .s()
      .p(
        "AAiBGIAAhWQAAgUgJgHQgIgIgMAAQgOAAgLANQgLAOAAAVIAABJIgWAAIAAiHIAUAAIAAAZQAQgeAZAAQAQABALAHQAKAIAFAKQAEAKAAAaIAABOg"
      );
    this.shape_7.setTransform(322, 41.6);

    this.shape_8 = new cjs.Shape();
    this.shape_8.graphics
      .f("#990000")
      .s()
      .p("AgJBdIAAiIIATAAIAACIgAgKhEIAAgYIAVAAIAAAYg");
    this.shape_8.setTransform(311.2, 39.4);

    this.shape_9 = new cjs.Shape();
    this.shape_9.graphics
      .f("#990000")
      .s()
      .p(
        "AgvA8QgMgNABgQQAAgWARgLQASgNAoAAIATAAQAAgQgDgIQgCgHgJgEQgIgFgNAAQgfABgFAYIgUgDQAHgnA0AAQAdAAALAOQAMAMABAfIAAA4QAAAPACAMIgUAAIgDgZQgOAdghABQgXAAgNgNgAgVAHQgPAIAAARQAAAJAIAIQAHAHAPAAQARAAANgPQAMgNAAgUIAAgIIgUAAQgXAAgOAHg"
      );
    this.shape_9.setTransform(300.1, 41.8);

    this.shape_10 = new cjs.Shape();
    this.shape_10.graphics
      .f("#990000")
      .s()
      .p(
        "AggBGIAAiHIASAAIAAAfQAKgWAIgHQAKgHALAAIAIABIAAAVIgEAAQgRAAgMAMQgKAOgBAVIAABHg"
      );
    this.shape_10.setTransform(289.5, 41.6);

    this.shape_11 = new cjs.Shape();
    this.shape_11.graphics
      .f("#990000")
      .s()
      .p(
        "AgQAvIAAhSIgZAAIAAgQIAZAAIABgjIASgCIAAAlIAfAAIAAAQIgfAAIAABVQAAAWAWAAIARgCIAAARIgUACQgmAAAAgqg"
      );
    this.shape_11.setTransform(279.6, 40.2);

    this.shape_12 = new cjs.Shape();
    this.shape_12.graphics
      .f("#990000")
      .s()
      .p(
        "AgnBEIgIAXIgKAAIAAi5IAVAAIAABIQAPgbAYAAQAXAAAQATQAQASABAiQAAAfgQAVQgQAVgaAAQgaAAgOgbgAgXgUQgLAKgCAQIAAAfQACAVALAKQALAJAMAAQAQAAAKgOQAKgOAAgZQAAgZgKgPQgKgPgQAAQgMAAgLALg"
      );
    this.shape_12.setTransform(268.4, 39.6);

    this.shape_13 = new cjs.Shape();
    this.shape_13.graphics
      .f("#990000")
      .s()
      .p(
        "AgvA8QgMgNABgQQAAgWARgLQASgNApAAIASAAQAAgQgDgIQgCgHgJgEQgHgFgOAAQgfABgFAYIgUgDQAHgnA0AAQAdAAAMAOQALAMABAfIAAA4QAAAPACAMIgUAAIgDgZQgOAdghABQgXAAgNgNgAgWAHQgOAIAAARQAAAJAIAIQAHAHAPAAQARAAANgPQAMgNAAgUIAAgIIgUAAQgYAAgOAHg"
      );
    this.shape_13.setTransform(252.5, 41.8);

    this.shape_14 = new cjs.Shape();
    this.shape_14.graphics
      .f("#990000")
      .s()
      .p(
        "AgsAzQgRgVABgeQAAggASgTQARgVAZAAQAdAAARAWQAQAUAAAeQAAAfgSAVQgSAUgaABQgcAAgQgWgAgZgoQgMANAAAbQAAAcAMANQALAOAOAAQAQAAALgOQALgNAAgcQAAgcgLgMQgMgOgPAAQgOAAgLAOg"
      );
    this.shape_14.setTransform(238.3, 41.8);

    this.shape_15 = new cjs.Shape();
    this.shape_15.graphics
      .f("#990000")
      .s()
      .p(
        "ABHBGIAAhTQAAgOgBgGQgCgHgIgGQgHgFgJAAQgMAAgMAMQgLAKAAAXIAABMIgSAAIAAhZQAAgRgJgIQgJgIgJAAQgOAAgLAMQgKAMAAASIAABQIgUAAIAAiHIATAAIAAAaQAPgfAbAAQAPABAKAJQAJAKADANQAOggAdgBQAOABALAHQAKAJAEAKQADALAAATIAABTg"
      );
    this.shape_15.setTransform(219.7, 41.6);

    this.shape_16 = new cjs.Shape();
    this.shape_16.graphics
      .f("#990000")
      .s()
      .p("AgOAPIAAgdIAdAAIAAAdg");
    this.shape_16.setTransform(204.8, 47.2);

    this.shape_17 = new cjs.Shape();
    this.shape_17.graphics
      .f("#990000")
      .s()
      .p("AAeBEIgehkIgbBkIgSAAIgpiHIAWAAIAeBkIAchkIAOAAIAfBlIAfhlIARAAIgnCHg");
    this.shape_17.setTransform(192, 41.8);

    this.shape_18 = new cjs.Shape();
    this.shape_18.graphics
      .f("#990000")
      .s()
      .p("AAeBEIgehkIgbBkIgSAAIgpiHIAWAAIAeBkIAchkIAOAAIAfBlIAfhlIARAAIgnCHg");
    this.shape_18.setTransform(173.5, 41.8);

    this.shape_19 = new cjs.Shape();
    this.shape_19.graphics
      .f("#990000")
      .s()
      .p("AAeBEIgehkIgbBkIgSAAIgpiHIAWAAIAeBkIAchkIAOAAIAfBlIAfhlIARAAIgnCHg");
    this.shape_19.setTransform(154.9, 41.8);

    this.shape_20 = new cjs.Shape();
    this.shape_20.graphics
      .f("#990000")
      .s()
      .p("AhAB0IBvjnIASAAIhvDng");
    this.shape_20.setTransform(138.2, 41.7);

    this.shape_21 = new cjs.Shape();
    this.shape_21.graphics
      .f("#990000")
      .s()
      .p("AhAB0IBvjnIASAAIhvDng");
    this.shape_21.setTransform(125.5, 41.7);

    this.shape_22 = new cjs.Shape();
    this.shape_22.graphics
      .f("#990000")
      .s()
      .p("AgOBEIAAgeIAdAAIAAAegAgOglIAAgeIAdAAIAAAeg");
    this.shape_22.setTransform(116.8, 41.8);

    this.shape_23 = new cjs.Shape();
    this.shape_23.graphics
      .f("#990000")
      .s()
      .p(
        "Ag5BeIAAi3IATAAIAAAbQAPgfAbAAQAYAAAPAVQAPAUAAAgQAAAfgPAUQgQAUgYAAQgYAAgPgZIAABEgAgWhAQgLAKgDAOIAAAnQACAOALAKQAMAKALAAQANAAALgMQALgMAAgdQAAgagKgOQgKgOgPAAQgMAAgKAKg"
      );
    this.shape_23.setTransform(106.3, 43.9);

    this.shape_24 = new cjs.Shape();
    this.shape_24.graphics
      .f("#990000")
      .s()
      .p(
        "AgQAvIAAhSIgYAAIAAgQIAYAAIABgjIASgCIAAAlIAeAAIAAAQIgeAAIAABVQAAAWAWAAIAQgCIAAARIgTACQgmAAAAgqg"
      );
    this.shape_24.setTransform(93.9, 40.2);

    this.shape_25 = new cjs.Shape();
    this.shape_25.graphics
      .f("#990000")
      .s()
      .p(
        "AgQAvIAAhSIgZAAIAAgQIAZAAIABgjIASgCIAAAlIAfAAIAAAQIgfAAIAABVQAAAWAWAAIAQgCIAAARIgTACQgmAAAAgqg"
      );
    this.shape_25.setTransform(85.3, 40.2);

    this.shape_26 = new cjs.Shape();
    this.shape_26.graphics
      .f("#990000")
      .s()
      .p(
        "AAhBdIAAhUQAAgNgCgHQgCgIgHgFQgHgFgJAAQgPAAgLANQgLAOAAAUIAABLIgWAAIAAi5IAWAAIAABKQAPgdAZAAQAMAAAKAFQAJAEAFAIQAFAIACAIQACAHgBAQIAABUg"
      );
    this.shape_26.setTransform(73.6, 39.4);

    this.shape_27 = new cjs.Shape();
    this.shape_27.graphics
      .f("#990000")
      .s()
      .p("AgOBEIAAgeIAdAAIAAAegAgOglIAAgfIAdAAIAAAfg");
    this.shape_27.setTransform(372.2, 10.1);

    this.shape_28 = new cjs.Shape();
    this.shape_28.graphics
      .f("#990000")
      .s()
      .p(
        "AgQAvIAAhSIgYAAIAAgQIAYAAIABgjIASgCIAAAlIAeAAIAAAQIgeAAIAABVQAAAWAWAAIARgCIAAARIgUACQgmAAAAgqg"
      );
    this.shape_28.setTransform(364.3, 8.4);

    this.shape_29 = new cjs.Shape();
    this.shape_29.graphics
      .f("#990000")
      .s()
      .p("AgJBdIAAiIIATAAIAACIgAgKhEIAAgYIAVAAIAAAYg");
    this.shape_29.setTransform(356.9, 7.6);

    this.shape_30 = new cjs.Shape();
    this.shape_30.graphics
      .f("#990000")
      .s()
      .p(
        "Ag5AgIAUgDQAHAaAiAAQANAAAKgHQAJgFAAgMQAAgPgXgFIgbgGQgSgDgKgHQgKgKAAgQQAAgRAOgLQAOgMAXAAQArAAAKAiIgTAFQgIgVgZAAQgNAAgIAEQgJAGAAAKQAAAPAVAEIAZAFQAqAIAAAfQAAATgPALQgQAMgaABQgvgBgLgog"
      );
    this.shape_30.setTransform(346.9, 10.1);

    this.shape_31 = new cjs.Shape();
    this.shape_31.graphics
      .f("#990000")
      .s()
      .p("AgJBdIAAiIIATAAIAACIgAgKhEIAAgYIAVAAIAAAYg");
    this.shape_31.setTransform(337.5, 7.6);

    this.shape_32 = new cjs.Shape();
    this.shape_32.graphics
      .f("#990000")
      .s()
      .p("AgJBEIgxiIIAXAAIAlBuIAmhuIATAAIgvCIg");
    this.shape_32.setTransform(328, 10.1);

    this.shape_33 = new cjs.Shape();
    this.shape_33.graphics
      .f("#990000")
      .s()
      .p(
        "AAiBGIAAhWQgBgTgHgIQgJgIgMAAQgOAAgMANQgKAOgBAVIAABJIgVAAIAAiIIAUAAIAAAaQARgdAZAAQAPAAALAHQALAJAEAJQAEALAAAZIAABOg"
      );
    this.shape_33.setTransform(307.2, 9.9);

    this.shape_34 = new cjs.Shape();
    this.shape_34.graphics
      .f("#990000")
      .s()
      .p(
        "AgsAzQgRgVABgeQAAggASgTQARgVAZABQAdgBARAWQAQAUAAAeQgBAggRAUQgSAVgaAAQgcAAgQgWgAgZgpQgMAOAAAbQAAAcAMANQALANAOABQAQAAALgOQALgOAAgbQAAgcgLgNQgMgMgPAAQgOAAgLAMg"
      );
    this.shape_34.setTransform(292.3, 10.1);

    this.shape_35 = new cjs.Shape();
    this.shape_35.graphics
      .f("#990000")
      .s()
      .p("AgJBdIAAiIIAUAAIAACIgAgKhEIAAgYIAVAAIAAAYg");
    this.shape_35.setTransform(281.9, 7.6);

    this.shape_36 = new cjs.Shape();
    this.shape_36.graphics
      .f("#990000")
      .s()
      .p(
        "AgQAvIAAhSIgYAAIAAgQIAYAAIABgjIASgCIAAAlIAeAAIAAAQIgeAAIAABVQAAAWAWAAIARgCIAAARIgUACQgmAAAAgqg"
      );
    this.shape_36.setTransform(274.3, 8.4);

    this.shape_37 = new cjs.Shape();
    this.shape_37.graphics
      .f("#990000")
      .s()
      .p(
        "AgvA8QgLgNAAgRQAAgUARgMQASgNAoAAIATAAQAAgQgDgIQgCgHgIgEQgJgEgNgBQgeAAgGAZIgUgDQAHgmA0AAQAcAAAMAMQANANAAAfIAAA4QAAAPACAMIgUAAIgDgYQgOAdggAAQgYAAgNgNgAgVAHQgOAJgBAPQAAALAIAGQAHAIAPAAQARAAANgPQAMgOAAgSIAAgJIgUAAQgXAAgOAHg"
      );
    this.shape_37.setTransform(262.2, 10.1);

    this.shape_38 = new cjs.Shape();
    this.shape_38.graphics
      .f("#990000")
      .s()
      .p(
        "ABHBGIAAhTQAAgNgBgHQgCgHgIgGQgHgFgJAAQgMAAgMAMQgLALAAAXIAABLIgSAAIAAhZQgBgSgIgHQgJgIgJABQgOgBgLAMQgKAMAAASIAABQIgUAAIAAiIIATAAIAAAbQAPgeAbAAQAPAAAKAKQAJAJADANQAOggAdAAQAOAAALAHQALAIADALQADAKAAAUIAABTg"
      );
    this.shape_38.setTransform(243.9, 9.9);

    this.shape_39 = new cjs.Shape();
    this.shape_39.graphics
      .f("#990000")
      .s()
      .p(
        "AghBGIAAiIIATAAIAAAhQALgXAHgHQAKgHALABIAJAAIAAAVIgFAAQgSgBgLANQgKAOgBAVIAABHg"
      );
    this.shape_39.setTransform(228.9, 9.9);

    this.shape_40 = new cjs.Shape();
    this.shape_40.graphics
      .f("#990000")
      .s()
      .p(
        "AgtAzQgPgVAAgeQgBggATgTQARgVAZABQAcgBASAWQAPAUAAAeQAAAggRAUQgSAVgaAAQgcAAgRgWgAgZgpQgMAOAAAbQAAAcAMANQAKANAPABQAQAAALgOQALgOAAgbQAAgcgLgNQgMgMgPAAQgPAAgKAMg"
      );
    this.shape_40.setTransform(216.1, 10.1);

    this.shape_41 = new cjs.Shape();
    this.shape_41.graphics
      .f("#990000")
      .s()
      .p(
        "AgSBfIAAh4IgYAAIAAgQIAYAAQAAgiANgJQAKgKASAAQAIAAAMACIAAARIgOgBQgOAAgHAGQgGAGgBARIAAAGIAhAAIAAAQIghAAIAAB4g"
      );
    this.shape_41.setTransform(204.9, 7.4);

    this.shape_42 = new cjs.Shape();
    this.shape_42.graphics
      .f("#990000")
      .s()
      .p(
        "AAhBGIAAhWQABgTgJgIQgIgIgMAAQgOAAgLANQgLAOAAAVIAABJIgWAAIAAiIIAUAAIAAAaQAQgdAZAAQAQAAALAHQALAJAEAJQAEALAAAZIAABOg"
      );
    this.shape_42.setTransform(192.9, 9.9);

    this.shape_43 = new cjs.Shape();
    this.shape_43.graphics
      .f("#990000")
      .s()
      .p("AgJBdIAAiIIAUAAIAACIgAgKhEIAAgYIAVAAIAAAYg");
    this.shape_43.setTransform(182.1, 7.6);

    this.shape_44 = new cjs.Shape();
    this.shape_44.graphics
      .f("#990000")
      .s()
      .p(
        "AgrA1QgSgVAAgfQAAggATgUQASgUAZAAQAbgBARAUQAQASABAkIhjAAQAAAeANAMQAOAKAMABQAbAAAKgbIAUADQgFASgQALQgQAMgVABQgbgBgRgTgAAmgNQAAgLgEgJQgDgJgJgHQgIgGgMAAQgOAAgLAMQgLALgCATIBKAAIAAAAg"
      );
    this.shape_44.setTransform(164.6, 10.1);

    this.shape_45 = new cjs.Shape();
    this.shape_45.graphics
      .f("#990000")
      .s()
      .p(
        "AggBGIAAiIIASAAIAAAhQALgXAHgHQAKgHALABIAJAAIAAAVIgFAAQgSgBgLANQgKAOgBAVIAABHg"
      );
    this.shape_45.setTransform(153.7, 9.9);

    this.shape_46 = new cjs.Shape();
    this.shape_46.graphics
      .f("#990000")
      .s()
      .p(
        "AgtAzQgPgVAAgeQgBggATgTQARgVAZABQAcgBASAWQAPAUAAAeQAAAggRAUQgSAVgaAAQgcAAgRgWgAgZgpQgMAOAAAbQAAAcAMANQAKANAPABQAQAAALgOQALgOAAgbQAAgcgLgNQgMgMgPAAQgPAAgKAMg"
      );
    this.shape_46.setTransform(140.9, 10.1);

    this.shape_47 = new cjs.Shape();
    this.shape_47.graphics
      .f("#990000")
      .s()
      .p(
        "ABHBGIAAhTQAAgNgBgHQgCgHgIgGQgHgFgJAAQgMAAgMAMQgLALAAAXIAABLIgSAAIAAhZQgBgSgIgHQgJgIgJABQgOgBgLAMQgKAMABASIAABQIgVAAIAAiIIATAAIAAAbQAPgeAbAAQAPAAAKAKQAIAJAEANQAOggAdAAQAOAAALAHQALAIADALQADAKAAAUIAABTg"
      );
    this.shape_47.setTransform(122.3, 9.9);

    this.shape_48 = new cjs.Shape();
    this.shape_48.graphics
      .f("#990000")
      .s()
      .p(
        "AghBGIAAiIIATAAIAAAhQALgXAHgHQAKgHALABIAJAAIAAAVIgFAAQgSgBgLANQgKAOgBAVIAABHg"
      );
    this.shape_48.setTransform(100.3, 9.9);

    this.shape_49 = new cjs.Shape();
    this.shape_49.graphics
      .f("#990000")
      .s()
      .p(
        "AgsAzQgRgVABgeQgBggATgTQARgVAZABQAdgBARAWQAQAUAAAeQgBAggRAUQgSAVgaAAQgcAAgQgWgAgZgpQgMAOAAAbQAAAcAMANQAKANAPABQAQAAALgOQALgOAAgbQAAgcgLgNQgMgMgPAAQgPAAgKAMg"
      );
    this.shape_49.setTransform(87.5, 10.1);

    this.shape_50 = new cjs.Shape();
    this.shape_50.graphics
      .f("#990000")
      .s()
      .p("Ag4BdIAAi5IBwAAIAAAVIhYAAIAAA7IBJAAIAAAQIhJAAIAABZg");
    this.shape_50.setTransform(74.1, 7.6);

    this.timeline.addTween(
      cjs.Tween.get({})
        .to({
          state: [
            { t: this.shape_50 },
            { t: this.shape_49 },
            { t: this.shape_48 },
            { t: this.shape_47 },
            { t: this.shape_46 },
            { t: this.shape_45 },
            { t: this.shape_44 },
            { t: this.shape_43 },
            { t: this.shape_42 },
            { t: this.shape_41 },
            { t: this.shape_40 },
            { t: this.shape_39 },
            { t: this.shape_38 },
            { t: this.shape_37 },
            { t: this.shape_36 },
            { t: this.shape_35 },
            { t: this.shape_34 },
            { t: this.shape_33 },
            { t: this.shape_32 },
            { t: this.shape_31 },
            { t: this.shape_30 },
            { t: this.shape_29 },
            { t: this.shape_28 },
            { t: this.shape_27 },
            { t: this.shape_26 },
            { t: this.shape_25 },
            { t: this.shape_24 },
            { t: this.shape_23 },
            { t: this.shape_22 },
            { t: this.shape_21 },
            { t: this.shape_20 },
            { t: this.shape_19 },
            { t: this.shape_18 },
            { t: this.shape_17 },
            { t: this.shape_16 },
            { t: this.shape_15 },
            { t: this.shape_14 },
            { t: this.shape_13 },
            { t: this.shape_12 },
            { t: this.shape_11 },
            { t: this.shape_10 },
            { t: this.shape_9 },
            { t: this.shape_8 },
            { t: this.shape_7 },
            { t: this.shape_6 },
            { t: this.shape_5 },
            { t: this.shape_4 },
            { t: this.shape_3 },
            { t: this.shape_2 },
            { t: this.shape_1 },
            { t: this.shape }
          ]
        })
        .wait(1)
    );
  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = new cjs.Rectangle(64, -10.7, 383.2, 99.3);

  (lib.text108Up = function(mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {});

    // Layer 1
    this.shape = new cjs.Shape();
    this.shape.graphics
      .f("#330066")
      .s()
      .p("AgWAXIAAgtIAtAAIAAAtg");
    this.shape.setTransform(479.7, 17.2);

    this.shape_1 = new cjs.Shape();
    this.shape_1.graphics
      .f("#330066")
      .s()
      .p(
        "ABABNIAAhOIAAgGIAAgIIAAgHIgBgGQgCgHgFgDQgFgCgHAAQgGAAgGADQgFADgCAFQgDAGAAAIIAAAOIAABOIgqAAIAAhOIAAgNQAAgHgCgGQgBgGgFgEQgEgEgIAAQgJAAgEAEQgFAEgCAGQgCAFAAAHIgBAOIAABOIgsAAIAAiWIAqAAIAAAXIABAAQAGgNALgHQAKgGAPAAQAQAAAHAGQAKAHAHANQADgHAFgFQAEgFAGgDQAMgGAOAAQALAAAKAEQAKADAHAJQAEAEABAFIACAMQABAFAAAGIAAAMIAABdg"
      );
    this.shape_1.setTransform(462.9, 11.7);

    this.shape_2 = new cjs.Shape();
    this.shape_2.graphics
      .f("#330066")
      .s()
      .p(
        "AgpBMQgIgDgHgFQgGgFgEgIQgEgJAAgKQAAgSAKgLQAJgJAPgGQAOgFAQgBIAdgDIAAgEIAAgKQgBgGgDgEQgDgEgFgCIgKgBQgJAAgIAFQgIAGAAALIgpgEQABgOAIgJQAHgJAKgGQAKgFAMgCQAMgDAKAAIANABIANADIAMAEQAGACAFAEQAFAFADAFQADAGACAGIABANIAAANIAABFIAAALIADAMIgsAAIgCgMIAAgMQgKANgLAHIgKAFQgHACgJAAQgKAAgJgDgAAIAFQgIABgFADQgIADgFAFQgFAFAAAJQAAAJAFAFQAFAGAKAAQAEAAAGgEQAGgDAEgGQAEgHABgHIABgPIAAgGg"
      );
    this.shape_2.setTransform(442.4, 11.9);

    this.shape_3 = new cjs.Shape();
    this.shape_3.graphics
      .f("#330066")
      .s()
      .p(
        "AgnBNIAAiWIAnAAIAAAcIAAAAIAFgMIAGgKQAEgFAGgCQAFgDAHABIAIAAIAAAtQgNgBgHAEQgIAFgEAHQgEAHgBAJIgBATIAAA6g"
      );
    this.shape_3.setTransform(430.1, 11.7);

    this.shape_4 = new cjs.Shape();
    this.shape_4.graphics
      .f("#330066")
      .s()
      .p(
        "AgSBzIgRgBIgRgDQgJgDgGgDQgHgEgEgGQgEgGAAgJQAAgMAIgGQAIgHAKgCQgJgFgFgGQgFgHAAgKQAAgHACgFQADgGAEgEQAEgDAGgBIALgGQgMgFgIgJQgHgJAAgOQAAgOAHgJQAHgJAKgGQAKgFANgCQAMgDALAAIATACIAUAFQABgJACgGQADgGADgDQAIgGARAAIAMACIAAAcIgFgBIgGgBQgHAAgFAEQgFADgBAHQAGAHADAGQADAHAAAJQAAAOgGAJQgHAJgKAFQgKAFgMACQgMABgJAAIgNgBIgMAAIgGADQgCADAAAEQAAAJAJADIAHABIAJABIAIAAIAHABIATAAIAUADQAKABAIAFQAIAEAFAIQAGAHAAANQAAAPgKALQgJAKgOAFQgMAFgPACIgbACgAgoBCQgDADAAAEQAAAGADACQADADAFABQAHADAKAAIAPAAIAKAAIAOgBQAHgBAFgDQAFgDAAgGQAAgDgCgCIgEgDIgFgCIgGgBIgLAAIgNgBIgRAAIgQgBQgFABgCAEgAgUg9QgHAGAAAKQAAAMAHAGQAGAFAMAAQAIAAAIgFQAIgGAAgMQAAgLgIgGQgIgFgIAAQgLAAgHAGg"
      );
    this.shape_4.setTransform(415.9, 13.3);

    this.shape_5 = new cjs.Shape();
    this.shape_5.graphics
      .f("#330066")
      .s()
      .p(
        "AgQBNQgHgBgHgDQgNgGgKgLQgJgLgFgPQgFgOABgQQAAgPAEgPQAFgOAKgLQAIgKAOgHQAHgDAIgBIAPgCIAQACIAOAFQAOAGAKALQAJALAEAOQAGAPAAAPQAAAQgGAOQgFAOgJALQgKALgOAGQgNAGgQAAgAgNgsQgFAFgDAHQgCAHAAAHIgBAPIABAOQgBAJADAIQADAJAEAGQAFAGAJAAQAIAAAFgFQAFgFADgHQADgHAAgJIABgPIgBgRQAAgKgEgJQgDgHgFgDQgFgEgHAAQgIAAgFAFg"
      );
    this.shape_5.setTransform(399.3, 11.9);

    this.shape_6 = new cjs.Shape();
    this.shape_6.graphics
      .f("#330066")
      .s()
      .p(
        "AgnBNIAAiWIAnAAIAAAcIAAAAIAFgMIAGgKQAEgFAGgCQAFgDAHABIAIAAIAAAtQgNgBgHAEQgIAFgEAHQgEAHgBAJIgBATIAAA6g"
      );
    this.shape_6.setTransform(386.9, 11.7);

    this.shape_7 = new cjs.Shape();
    this.shape_7.graphics
      .f("#330066")
      .s()
      .p(
        "AhDBnIAAjKIAoAAIAAAWIABAAQAHgMAJgHQAJgGANAAQAPAAALAGQALAIAIAMQAHANADANQABAOAAANQAAAOgCAMQgDAPgHALQgHAMgLAGQgFAEgIACQgHACgHgBQgLABgJgGQgJgEgFgKIAAAAIAABEgAgLhEQgFAEgDAFQgEAHAAAHIAAANIAAAPIAAAQQAAAGAEAHQADAFAFADQAFADAGAAQAHAAAFgFQAEgFADgIQACgGABgIIAAgPIAAgNIgDgQQgCgHgFgGQgFgEgHAAQgGAAgFACg"
      );
    this.shape_7.setTransform(373.5, 14.3);

    this.shape_8 = new cjs.Shape();
    this.shape_8.graphics
      .f("#330066")
      .s()
      .p(
        "AgVBMQgLgCgJgFQgKgFgHgJQgGgIgDgNIAmgGQABAGADAEQAEAEAFACIAKAEIAIABIAIgBIAJgCIAHgFQADgCAAgFQAAgEgBgCIgEgEIgGgCIgGgBIgKgBIgLgCIgNgDIgJgDQgOgEgIgJQgEgGgCgGQgCgHAAgHQAAgOAFgKQAGgJAJgGQAJgGAMgDQAMgDAKAAQAWAAAPAKQAIAEAFAIQAGAHAEALIghAJQgDgLgIgFQgIgEgKAAIgGAAIgHACIgGAEQgCADAAAEQAAAHAGADQAHADAIABIAWADQAMACAKAFQALAEAGAIQAEAFABAHQACAGAAAJQAAAMgFAKQgGAKgJAHQgLAHgMADQgMADgNAAQgKAAgLgDg"
      );
    this.shape_8.setTransform(348, 11.9);

    this.shape_9 = new cjs.Shape();
    this.shape_9.graphics
      .f("#330066")
      .s()
      .p("AgVBoIAAiXIAqAAIAACXgAgVg9IAAgqIAqAAIAAAqg");
    this.shape_9.setTransform(336.9, 9.1);

    this.shape_10 = new cjs.Shape();
    this.shape_10.graphics
      .f("#330066")
      .s()
      .p(
        "AAUBnIAAhSIAAgMIgBgKQgBgGgEgFQgEgEgHAAQgEAAgGADQgGADgDAGQgDAEAAAGIAAAPIAABSIgtAAIAAjMIAtAAIAABKIAAAAQACgFAEgFIAJgIIAKgEIAMgCQALAAAKAEQALAEAGAIQAIAKAAAKIABAVIAABhg"
      );
    this.shape_10.setTransform(324.9, 9.2);

    this.shape_11 = new cjs.Shape();
    this.shape_11.graphics
      .f("#330066")
      .s()
      .p(
        "AADBjQgJgCgIgGQgEgEgDgFIgDgLIgBgLIAAgMIAAhBIgaAAIAAgjIAbAAIAEgtIAlgDIAAAwIAgAAIAAAjIggAAIAAA6IAAANQAAAEADADQABADAFABIALABIAHAAIAIgBIAAAhIgPACIgNABQgKAAgLgCg"
      );
    this.shape_11.setTransform(310.8, 9.6);

    this.shape_12 = new cjs.Shape();
    this.shape_12.graphics
      .f("#330066")
      .s()
      .p(
        "AgbBmQgHgCgGgDQgKgHgGgLQgGgLgDgOQgDgOAAgNQAAgOADgNQACgNAHgMQAGgMAKgIQAGgEAHgCQAHgBAIAAQAMAAAIAEQAJAEAIALIAAhGIAsAAIAADMIgrAAIAAgXIAAAAQgHALgJAIQgKAHgNAAQgIAAgGgCgAgJgQQgGAFgCAIQgDAGAAAJIgBAQIABAOQAAAIADAGQADAHAFAEQAEAFAGAAQAHAAAEgDQAGgEACgFQADgFABgGIABgMIAAgUIgBgNQAAgFgDgGQgBgGgFgEQgFgFgHAAQgIAAgEAGg"
      );
    this.shape_12.setTransform(288, 9.4);

    this.shape_13 = new cjs.Shape();
    this.shape_13.graphics
      .f("#330066")
      .s()
      .p(
        "AgbBJQgOgGgKgKQgJgKgGgOQgFgOAAgRQAAgPAFgPQAFgPAJgLQAKgLANgGQAOgHAQAAIAQACIAPAFQAPAHAKANQAJAOADAPQADAPAAAOIhgAAIAAAIQAAANAIAKQADAEAGADQAFACAFAAQAGAAAEgCIAJgFQAEgDACgEQADgEAAgGIAoADIgBAHIgFAKIgJAMQgFAHgIAFQgIAFgKADQgKAEgNAAQgPAAgOgGgAAcgRIgCgMQgBgGgDgEQgDgEgEgDQgFgDgHAAQgGAAgFADQgFACgDAFQgEAEgBAGIgDAMIA0AAg"
      );
    this.shape_13.setTransform(272, 11.9);

    this.shape_14 = new cjs.Shape();
    this.shape_14.graphics
      .f("#330066")
      .s()
      .p(
        "AAEBjQgKgCgIgGQgEgEgCgFIgEgLIgCgLIAAgMIAAhBIgZAAIAAgjIAbAAIAEgtIAkgDIAAAwIAiAAIAAAjIgiAAIAAA6IABANQABAEABADQACADAEABIAMABIAHAAIAIgBIAAAhIgPACIgNABQgKAAgKgCg"
      );
    this.shape_14.setTransform(258, 9.6);

    this.shape_15 = new cjs.Shape();
    this.shape_15.graphics
      .f("#330066")
      .s()
      .p(
        "AgbBJQgOgGgKgKQgJgKgGgOQgFgOAAgRQAAgPAFgPQAFgPAJgLQAKgLANgGQAOgHAQAAIAQACIAPAFQAPAHAKANQAJAOADAPQADAPAAAOIhgAAIAAAIQAAANAIAKQADAEAGADQAFACAFAAQAGAAAEgCIAJgFQAEgDACgEQADgEAAgGIAoADIgBAHIgFAKIgJAMQgFAHgIAFQgIAFgKADQgKAEgNAAQgPAAgOgGgAAcgRIgCgMQgBgGgDgEQgDgEgEgDQgFgDgHAAQgGAAgFADQgFACgDAFQgEAEgBAGIgDAMIA0AAg"
      );
    this.shape_15.setTransform(244.4, 11.9);

    this.shape_16 = new cjs.Shape();
    this.shape_16.graphics
      .f("#330066")
      .s()
      .p("AgVBnIAAjMIAqAAIAADMg");
    this.shape_16.setTransform(232.5, 9.2);

    this.shape_17 = new cjs.Shape();
    this.shape_17.graphics
      .f("#330066")
      .s()
      .p(
        "AhEBnIAAjKIApAAIAAAWIABAAQAHgMAJgHQAJgGANAAQAPAAALAGQALAIAIAMQAHANADANQACAOAAANQAAAOgEAMQgDAPgGALQgHAMgLAGQgGAEgHACQgHACgIgBQgKABgIgGQgKgEgFgKIgBAAIAABEgAgLhEQgFAEgDAFQgDAHgBAHIgBANIAAAPIAAAQQABAGAEAHQADAFAGADQAFADAFAAQAHAAAEgFQAGgFACgIQADgGAAgIIAAgPIAAgNIgDgQQgDgHgEgGQgFgEgHAAQgGAAgFACg"
      );
    this.shape_17.setTransform(221.1, 14.3);

    this.shape_18 = new cjs.Shape();
    this.shape_18.graphics
      .f("#330066")
      .s()
      .p(
        "ABABNIAAhOIAAgGIAAgIIAAgHIgBgGQgCgHgFgDQgFgCgHAAQgGAAgGADQgFADgCAFQgDAGAAAIIAAAOIAABOIgqAAIAAhOIAAgNQAAgHgCgGQgBgGgFgEQgEgEgIAAQgJAAgEAEQgFAEgCAGQgCAFAAAHIgBAOIAABOIgsAAIAAiWIAqAAIAAAXIABAAQAGgNALgHQAKgGAPAAQAQAAAHAGQAKAHAHANQADgHAFgFQAEgFAGgDQAMgGAOAAQALAAAKAEQAKADAHAJQAEAEABAFIACAMQABAFAAAGIAAAMIAABdg"
      );
    this.shape_18.setTransform(200.1, 11.7);

    this.shape_19 = new cjs.Shape();
    this.shape_19.graphics
      .f("#330066")
      .s()
      .p(
        "AgQBNQgHgBgHgDQgNgGgKgLQgJgLgFgPQgFgOABgQQAAgPAEgPQAFgOAKgLQAIgKAOgHQAHgDAIgBIAPgCIAQACIAOAFQAOAGAKALQAJALAEAOQAGAPAAAPQAAAQgGAOQgFAOgJALQgKALgOAGQgNAGgQAAgAgNgsQgFAFgDAHQgCAHAAAHIgBAPIABAOQgBAJADAIQADAJAEAGQAFAGAJAAQAIAAAFgFQAFgFADgHQADgHAAgJIABgPIgBgRQAAgKgEgJQgDgHgFgDQgFgEgHAAQgIAAgFAFg"
      );
    this.shape_19.setTransform(179.7, 11.9);

    this.shape_20 = new cjs.Shape();
    this.shape_20.graphics
      .f("#330066")
      .s()
      .p(
        "AgbBJQgOgGgKgKQgJgLgFgOQgFgOAAgRQAAgPAFgPQAFgPAKgLQAKgLAOgGQAOgGAQAAQAOAAALAEQAMAEAJAIQAJAIAFALQAGAKABAOIgqACIgBgKQgCgFgDgDQgCgEgFgDQgEgCgGAAQgHAAgGAEQgFAEgDAGQgDAHAAAHIgCAPIABANIADAPQACAHAFAEQAFAEAIAAQAMAAAGgIQAGgHABgLIAqACQgCAPgFALQgGALgJAIQgJAIgMAEQgNAEgNAAQgQAAgNgGg"
      );
    this.shape_20.setTransform(163.4, 11.9);

    this.shape_21 = new cjs.Shape();
    this.shape_21.graphics
      .f("#330066")
      .s()
      .p(
        "AgbBJQgOgGgKgKQgJgKgGgOQgFgOAAgRQAAgPAFgPQAFgPAJgLQAKgLANgGQAOgHAQAAIAQACIAPAFQAPAHAKANQAJAOADAPQADAPAAAOIhgAAIAAAIQAAANAIAKQADAEAGADQAFACAFAAQAGAAAEgCIAJgFQAEgDACgEQADgEAAgGIAoADIgBAHIgFAKIgJAMQgFAHgIAFQgIAFgKADQgKAEgNAAQgPAAgOgGgAAcgRIgCgMQgBgGgDgEQgDgEgEgDQgFgDgHAAQgGAAgFADQgFACgDAFQgEAEgBAGIgDAMIA0AAg"
      );
    this.shape_21.setTransform(138.2, 11.9);

    this.shape_22 = new cjs.Shape();
    this.shape_22.graphics
      .f("#330066")
      .s()
      .p("AgQBMIg0iXIAuAAIAcBfIAehfIAhAAIg0CXg");
    this.shape_22.setTransform(123, 11.9);

    this.shape_23 = new cjs.Shape();
    this.shape_23.graphics
      .f("#330066")
      .s()
      .p(
        "AgpBMQgIgDgHgFQgGgFgEgIQgEgJAAgKQAAgSAKgLQAJgJAPgGQAOgFAQgBIAdgDIAAgEIAAgKQgBgGgDgEQgDgEgFgCIgKgBQgJAAgIAFQgIAGAAALIgpgEQABgOAIgJQAHgJAKgGQAKgFAMgCQAMgDAKAAIANABIANADIAMAEQAGACAFAEQAFAFADAFQADAGACAGIABANIAAANIAABFIAAALIADAMIgsAAIgCgMIAAgMQgKANgLAHIgKAFQgHACgJAAQgKAAgJgDgAAIAFQgIABgFADQgIADgFAFQgFAFAAAJQAAAJAFAFQAFAGAKAAQAEAAAGgEQAGgDAEgGQAEgHABgHIABgPIAAgGg"
      );
    this.shape_23.setTransform(107.6, 11.9);

    this.shape_24 = new cjs.Shape();
    this.shape_24.graphics
      .f("#330066")
      .s()
      .p(
        "AAUBnIAAhSIAAgMIgBgKQgCgGgDgFQgDgEgIAAQgEAAgGADQgGADgDAGQgDAEgBAGIAAAPIAABSIgsAAIAAjMIAsAAIAABKIABAAQACgFAEgFIAJgIIAKgEIANgCQAKAAAKAEQAKAEAHAIQAIAKAAAKIABAVIAABhg"
      );
    this.shape_24.setTransform(91.5, 9.2);

    this.shape_25 = new cjs.Shape();
    this.shape_25.graphics
      .f("#330066")
      .s()
      .p(
        "AgoBKQgJgDgHgLQgGgKgBgKIAAgWIAAheIAsAAIAABeIAAAJIACAIQACADADACQADACAGAAQAGAAAGgEQAFgEAEgHQACgFAAgGIAAgMIAAhQIAsAAIAACWIgpAAIAAgaIAAAAQgGAPgLAHQgGAEgEABQgHACgIAAQgLAAgKgDg"
      );
    this.shape_25.setTransform(66.3, 12);

    this.shape_26 = new cjs.Shape();
    this.shape_26.graphics
      .f("#330066")
      .s()
      .p(
        "AgQBNQgHgBgHgDQgNgGgKgLQgJgLgFgPQgFgOABgQQAAgPAEgPQAFgOAKgLQAIgKAOgHQAHgDAIgBIAPgCIAQACIAOAFQAOAGAKALQAJALAEAOQAGAPAAAPQAAAQgGAOQgFAOgJALQgKALgOAGQgNAGgQAAgAgNgsQgFAFgDAHQgCAHAAAHIgBAPIABAOQgBAJADAIQADAJAEAGQAFAGAJAAQAIAAAFgFQAFgFADgHQADgHAAgJIABgPIgBgRQAAgKgEgJQgDgHgFgDQgFgEgHAAQgIAAgFAFg"
      );
    this.shape_26.setTransform(50.1, 11.9);

    this.shape_27 = new cjs.Shape();
    this.shape_27.graphics
      .f("#330066")
      .s()
      .p("AgWBnIAAhXIhBh1IA3AAIAmBOIAnhOIAsAAIhBB1IAABXg");
    this.shape_27.setTransform(33, 9.2);

    this.timeline.addTween(
      cjs.Tween.get({})
        .to({
          state: [
            { t: this.shape_27 },
            { t: this.shape_26 },
            { t: this.shape_25 },
            { t: this.shape_24 },
            { t: this.shape_23 },
            { t: this.shape_22 },
            { t: this.shape_21 },
            { t: this.shape_20 },
            { t: this.shape_19 },
            { t: this.shape_18 },
            { t: this.shape_17 },
            { t: this.shape_16 },
            { t: this.shape_15 },
            { t: this.shape_14 },
            { t: this.shape_13 },
            { t: this.shape_12 },
            { t: this.shape_11 },
            { t: this.shape_10 },
            { t: this.shape_9 },
            { t: this.shape_8 },
            { t: this.shape_7 },
            { t: this.shape_6 },
            { t: this.shape_5 },
            { t: this.shape_4 },
            { t: this.shape_3 },
            { t: this.shape_2 },
            { t: this.shape_1 },
            { t: this.shape }
          ]
        })
        .wait(1)
    );
  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = new cjs.Rectangle(22, -10.5, 509.6, 75);

  (lib.text105Up = function(mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {});

    // Layer 1
    this.shape = new cjs.Shape();
    this.shape.graphics
      .f("#330066")
      .s()
      .p(
        "ABHBGIAAhTQAAgOgCgGQgCgHgHgGQgHgFgJAAQgMAAgLAMQgMAKAAAXIAABMIgTAAIAAhZQABgRgKgIQgIgIgKAAQgOAAgKAMQgJAMgBASIAABQIgUAAIAAiHIASAAIAAAaQAQgfAbAAQAPABAKAJQAJAKACANQAPggAdgBQAPABAKAHQAKAJAEAKQADALAAATIAABTg"
      );
    this.shape.setTransform(410.7, 41.6);

    this.shape_1 = new cjs.Shape();
    this.shape_1.graphics
      .f("#330066")
      .s()
      .p(
        "AgtAzQgPgVgBgeQABggARgTQATgVAYAAQAdAAAQAWQAQAUAAAeQABAfgSAVQgSAUgaABQgdAAgQgWgAgagoQgLANAAAbQAAAcALANQAMAOAOAAQAQAAALgOQALgNAAgcQAAgcgMgMQgLgOgPAAQgOAAgMAOg"
      );
    this.shape_1.setTransform(392.1, 41.8);

    this.shape_2 = new cjs.Shape();
    this.shape_2.graphics
      .f("#330066")
      .s()
      .p(
        "AgoAzQgPgVABgeQgBgeARgUQAPgWAZAAQAXAAANAOQAOAOADAVIgTADQgGghgbgBQgPAAgKAPQgKAQAAAXQAAAZAJAPQAKAPAPAAQAbAAAHgjIATADQgEAYgOAMQgOAOgVAAQgaAAgQgWg"
      );
    this.shape_2.setTransform(378.5, 41.8);

    this.shape_3 = new cjs.Shape();
    this.shape_3.graphics
      .f("#330066")
      .s()
      .p("AgOAPIAAgdIAdAAIAAAdg");
    this.shape_3.setTransform(368.3, 47.2);

    this.shape_4 = new cjs.Shape();
    this.shape_4.graphics
      .f("#330066")
      .s()
      .p(
        "AgxBgQgQgKAAgRQAAgUAVgHQgNgKAAgNQAAgPATgHQgSgPAAgVQAAgVAPgNQAQgOAWAAQANABANAFQACgNAIgFQAHgFAPgBIAGABIAAARQgPAAgFAEQgFACgCAKQANAPAAASQAAATgOANQgOAMgXAAIgJgBIgKgBQgDAAgGADQgFAEAAAGQAAAIAIACQAHACAaACQAYAAALADQALACAIAJQAEAEACAFQACAGAAAGQAAAohDAAQghAAgPgKgAgsBDQAAALANAFQAMAGATAAQAQAAAPgFQAOgFAAgMQAAgGgEgFQgEgDgIgBIgagCIgggCQgPAGAAANgAgYg+QgKAJAAAPQAAANAJAIQAIAJAOgBQAMAAAIgIQAJgIAAgNQAAgPgJgIQgJgJgLAAQgMABgJAHg"
      );
    this.shape_4.setTransform(358.4, 43.3);

    this.shape_5 = new cjs.Shape();
    this.shape_5.graphics
      .f("#330066")
      .s()
      .p(
        "AAhBGIAAhWQAAgUgHgHQgJgIgMAAQgOAAgMANQgLAOAAAVIAABJIgVAAIAAiHIAUAAIAAAZQARgeAZAAQAPABALAHQAKAIAFAKQAEAKAAAaIAABOg"
      );
    this.shape_5.setTransform(343.5, 41.6);

    this.shape_6 = new cjs.Shape();
    this.shape_6.graphics
      .f("#330066")
      .s()
      .p("AgJBdIAAiIIAUAAIAACIgAgKhEIAAgYIAVAAIAAAYg");
    this.shape_6.setTransform(332.7, 39.4);

    this.shape_7 = new cjs.Shape();
    this.shape_7.graphics
      .f("#330066")
      .s()
      .p(
        "AAiBGIAAhWQAAgUgJgHQgIgIgMAAQgOAAgLANQgLAOAAAVIAABJIgWAAIAAiHIAUAAIAAAZQAQgeAZAAQAQABALAHQAKAIAFAKQAEAKAAAaIAABOg"
      );
    this.shape_7.setTransform(322, 41.6);

    this.shape_8 = new cjs.Shape();
    this.shape_8.graphics
      .f("#330066")
      .s()
      .p("AgJBdIAAiIIATAAIAACIgAgKhEIAAgYIAVAAIAAAYg");
    this.shape_8.setTransform(311.2, 39.4);

    this.shape_9 = new cjs.Shape();
    this.shape_9.graphics
      .f("#330066")
      .s()
      .p(
        "AgvA8QgMgNABgQQAAgWARgLQASgNAoAAIATAAQAAgQgDgIQgCgHgJgEQgIgFgNAAQgfABgFAYIgUgDQAHgnA0AAQAdAAALAOQAMAMABAfIAAA4QAAAPACAMIgUAAIgDgZQgOAdghABQgXAAgNgNgAgVAHQgPAIAAARQAAAJAIAIQAHAHAPAAQARAAANgPQAMgNAAgUIAAgIIgUAAQgXAAgOAHg"
      );
    this.shape_9.setTransform(300.1, 41.8);

    this.shape_10 = new cjs.Shape();
    this.shape_10.graphics
      .f("#330066")
      .s()
      .p(
        "AggBGIAAiHIASAAIAAAfQAKgWAIgHQAKgHALAAIAIABIAAAVIgEAAQgRAAgMAMQgKAOgBAVIAABHg"
      );
    this.shape_10.setTransform(289.5, 41.6);

    this.shape_11 = new cjs.Shape();
    this.shape_11.graphics
      .f("#330066")
      .s()
      .p(
        "AgQAvIAAhSIgZAAIAAgQIAZAAIABgjIASgCIAAAlIAfAAIAAAQIgfAAIAABVQAAAWAWAAIARgCIAAARIgUACQgmAAAAgqg"
      );
    this.shape_11.setTransform(279.6, 40.2);

    this.shape_12 = new cjs.Shape();
    this.shape_12.graphics
      .f("#330066")
      .s()
      .p(
        "AgnBEIgIAXIgKAAIAAi5IAVAAIAABIQAPgbAYAAQAXAAAQATQAQASABAiQAAAfgQAVQgQAVgaAAQgaAAgOgbgAgXgUQgLAKgCAQIAAAfQACAVALAKQALAJAMAAQAQAAAKgOQAKgOAAgZQAAgZgKgPQgKgPgQAAQgMAAgLALg"
      );
    this.shape_12.setTransform(268.4, 39.6);

    this.shape_13 = new cjs.Shape();
    this.shape_13.graphics
      .f("#330066")
      .s()
      .p(
        "AgvA8QgMgNABgQQAAgWARgLQASgNApAAIASAAQAAgQgDgIQgCgHgJgEQgHgFgOAAQgfABgFAYIgUgDQAHgnA0AAQAdAAAMAOQALAMABAfIAAA4QAAAPACAMIgUAAIgDgZQgOAdghABQgXAAgNgNgAgWAHQgOAIAAARQAAAJAIAIQAHAHAPAAQARAAANgPQAMgNAAgUIAAgIIgUAAQgYAAgOAHg"
      );
    this.shape_13.setTransform(252.5, 41.8);

    this.shape_14 = new cjs.Shape();
    this.shape_14.graphics
      .f("#330066")
      .s()
      .p(
        "AgsAzQgRgVABgeQAAggASgTQARgVAZAAQAdAAARAWQAQAUAAAeQAAAfgSAVQgSAUgaABQgcAAgQgWgAgZgoQgMANAAAbQAAAcAMANQALAOAOAAQAQAAALgOQALgNAAgcQAAgcgLgMQgMgOgPAAQgOAAgLAOg"
      );
    this.shape_14.setTransform(238.3, 41.8);

    this.shape_15 = new cjs.Shape();
    this.shape_15.graphics
      .f("#330066")
      .s()
      .p(
        "ABHBGIAAhTQAAgOgBgGQgCgHgIgGQgHgFgJAAQgMAAgMAMQgLAKAAAXIAABMIgSAAIAAhZQAAgRgJgIQgJgIgJAAQgOAAgLAMQgKAMAAASIAABQIgUAAIAAiHIATAAIAAAaQAPgfAbAAQAPABAKAJQAJAKADANQAOggAdgBQAOABALAHQAKAJAEAKQADALAAATIAABTg"
      );
    this.shape_15.setTransform(219.7, 41.6);

    this.shape_16 = new cjs.Shape();
    this.shape_16.graphics
      .f("#330066")
      .s()
      .p("AgOAPIAAgdIAdAAIAAAdg");
    this.shape_16.setTransform(204.8, 47.2);

    this.shape_17 = new cjs.Shape();
    this.shape_17.graphics
      .f("#330066")
      .s()
      .p("AAeBEIgehkIgbBkIgSAAIgpiHIAWAAIAeBkIAchkIAOAAIAfBlIAfhlIARAAIgnCHg");
    this.shape_17.setTransform(192, 41.8);

    this.shape_18 = new cjs.Shape();
    this.shape_18.graphics
      .f("#330066")
      .s()
      .p("AAeBEIgehkIgbBkIgSAAIgpiHIAWAAIAeBkIAchkIAOAAIAfBlIAfhlIARAAIgnCHg");
    this.shape_18.setTransform(173.5, 41.8);

    this.shape_19 = new cjs.Shape();
    this.shape_19.graphics
      .f("#330066")
      .s()
      .p("AAeBEIgehkIgbBkIgSAAIgpiHIAWAAIAeBkIAchkIAOAAIAfBlIAfhlIARAAIgnCHg");
    this.shape_19.setTransform(154.9, 41.8);

    this.shape_20 = new cjs.Shape();
    this.shape_20.graphics
      .f("#330066")
      .s()
      .p("AhAB0IBvjnIASAAIhvDng");
    this.shape_20.setTransform(138.2, 41.7);

    this.shape_21 = new cjs.Shape();
    this.shape_21.graphics
      .f("#330066")
      .s()
      .p("AhAB0IBvjnIASAAIhvDng");
    this.shape_21.setTransform(125.5, 41.7);

    this.shape_22 = new cjs.Shape();
    this.shape_22.graphics
      .f("#330066")
      .s()
      .p("AgOBEIAAgeIAdAAIAAAegAgOglIAAgeIAdAAIAAAeg");
    this.shape_22.setTransform(116.8, 41.8);

    this.shape_23 = new cjs.Shape();
    this.shape_23.graphics
      .f("#330066")
      .s()
      .p(
        "Ag5BeIAAi3IATAAIAAAbQAPgfAbAAQAYAAAPAVQAPAUAAAgQAAAfgPAUQgQAUgYAAQgYAAgPgZIAABEgAgWhAQgLAKgDAOIAAAnQACAOALAKQAMAKALAAQANAAALgMQALgMAAgdQAAgagKgOQgKgOgPAAQgMAAgKAKg"
      );
    this.shape_23.setTransform(106.3, 43.9);

    this.shape_24 = new cjs.Shape();
    this.shape_24.graphics
      .f("#330066")
      .s()
      .p(
        "AgQAvIAAhSIgYAAIAAgQIAYAAIABgjIASgCIAAAlIAeAAIAAAQIgeAAIAABVQAAAWAWAAIAQgCIAAARIgTACQgmAAAAgqg"
      );
    this.shape_24.setTransform(93.9, 40.2);

    this.shape_25 = new cjs.Shape();
    this.shape_25.graphics
      .f("#330066")
      .s()
      .p(
        "AgQAvIAAhSIgZAAIAAgQIAZAAIABgjIASgCIAAAlIAfAAIAAAQIgfAAIAABVQAAAWAWAAIAQgCIAAARIgTACQgmAAAAgqg"
      );
    this.shape_25.setTransform(85.3, 40.2);

    this.shape_26 = new cjs.Shape();
    this.shape_26.graphics
      .f("#330066")
      .s()
      .p(
        "AAhBdIAAhUQAAgNgCgHQgCgIgHgFQgHgFgJAAQgPAAgLANQgLAOAAAUIAABLIgWAAIAAi5IAWAAIAABKQAPgdAZAAQAMAAAKAFQAJAEAFAIQAFAIACAIQACAHgBAQIAABUg"
      );
    this.shape_26.setTransform(73.6, 39.4);

    this.shape_27 = new cjs.Shape();
    this.shape_27.graphics
      .f("#330066")
      .s()
      .p("AgOBEIAAgeIAdAAIAAAegAgOglIAAgfIAdAAIAAAfg");
    this.shape_27.setTransform(372.2, 10.1);

    this.shape_28 = new cjs.Shape();
    this.shape_28.graphics
      .f("#330066")
      .s()
      .p(
        "AgQAvIAAhSIgYAAIAAgQIAYAAIABgjIASgCIAAAlIAeAAIAAAQIgeAAIAABVQAAAWAWAAIARgCIAAARIgUACQgmAAAAgqg"
      );
    this.shape_28.setTransform(364.3, 8.4);

    this.shape_29 = new cjs.Shape();
    this.shape_29.graphics
      .f("#330066")
      .s()
      .p("AgJBdIAAiIIATAAIAACIgAgKhEIAAgYIAVAAIAAAYg");
    this.shape_29.setTransform(356.9, 7.6);

    this.shape_30 = new cjs.Shape();
    this.shape_30.graphics
      .f("#330066")
      .s()
      .p(
        "Ag5AgIAUgDQAHAaAiAAQANAAAKgHQAJgFAAgMQAAgPgXgFIgbgGQgSgDgKgHQgKgKAAgQQAAgRAOgLQAOgMAXAAQArAAAKAiIgTAFQgIgVgZAAQgNAAgIAEQgJAGAAAKQAAAPAVAEIAZAFQAqAIAAAfQAAATgPALQgQAMgaABQgvgBgLgog"
      );
    this.shape_30.setTransform(346.9, 10.1);

    this.shape_31 = new cjs.Shape();
    this.shape_31.graphics
      .f("#330066")
      .s()
      .p("AgJBdIAAiIIATAAIAACIgAgKhEIAAgYIAVAAIAAAYg");
    this.shape_31.setTransform(337.5, 7.6);

    this.shape_32 = new cjs.Shape();
    this.shape_32.graphics
      .f("#330066")
      .s()
      .p("AgJBEIgxiIIAXAAIAlBuIAmhuIATAAIgvCIg");
    this.shape_32.setTransform(328, 10.1);

    this.shape_33 = new cjs.Shape();
    this.shape_33.graphics
      .f("#330066")
      .s()
      .p(
        "AAiBGIAAhWQgBgTgHgIQgJgIgMAAQgOAAgMANQgKAOgBAVIAABJIgVAAIAAiIIAUAAIAAAaQARgdAZAAQAPAAALAHQALAJAEAJQAEALAAAZIAABOg"
      );
    this.shape_33.setTransform(307.2, 9.9);

    this.shape_34 = new cjs.Shape();
    this.shape_34.graphics
      .f("#330066")
      .s()
      .p(
        "AgsAzQgRgVABgeQAAggASgTQARgVAZABQAdgBARAWQAQAUAAAeQgBAggRAUQgSAVgaAAQgcAAgQgWgAgZgpQgMAOAAAbQAAAcAMANQALANAOABQAQAAALgOQALgOAAgbQAAgcgLgNQgMgMgPAAQgOAAgLAMg"
      );
    this.shape_34.setTransform(292.3, 10.1);

    this.shape_35 = new cjs.Shape();
    this.shape_35.graphics
      .f("#330066")
      .s()
      .p("AgJBdIAAiIIAUAAIAACIgAgKhEIAAgYIAVAAIAAAYg");
    this.shape_35.setTransform(281.9, 7.6);

    this.shape_36 = new cjs.Shape();
    this.shape_36.graphics
      .f("#330066")
      .s()
      .p(
        "AgQAvIAAhSIgYAAIAAgQIAYAAIABgjIASgCIAAAlIAeAAIAAAQIgeAAIAABVQAAAWAWAAIARgCIAAARIgUACQgmAAAAgqg"
      );
    this.shape_36.setTransform(274.3, 8.4);

    this.shape_37 = new cjs.Shape();
    this.shape_37.graphics
      .f("#330066")
      .s()
      .p(
        "AgvA8QgLgNAAgRQAAgUARgMQASgNAoAAIATAAQAAgQgDgIQgCgHgIgEQgJgEgNgBQgeAAgGAZIgUgDQAHgmA0AAQAcAAAMAMQANANAAAfIAAA4QAAAPACAMIgUAAIgDgYQgOAdggAAQgYAAgNgNgAgVAHQgOAJgBAPQAAALAIAGQAHAIAPAAQARAAANgPQAMgOAAgSIAAgJIgUAAQgXAAgOAHg"
      );
    this.shape_37.setTransform(262.2, 10.1);

    this.shape_38 = new cjs.Shape();
    this.shape_38.graphics
      .f("#330066")
      .s()
      .p(
        "ABHBGIAAhTQAAgNgBgHQgCgHgIgGQgHgFgJAAQgMAAgMAMQgLALAAAXIAABLIgSAAIAAhZQgBgSgIgHQgJgIgJABQgOgBgLAMQgKAMAAASIAABQIgUAAIAAiIIATAAIAAAbQAPgeAbAAQAPAAAKAKQAJAJADANQAOggAdAAQAOAAALAHQALAIADALQADAKAAAUIAABTg"
      );
    this.shape_38.setTransform(243.9, 9.9);

    this.shape_39 = new cjs.Shape();
    this.shape_39.graphics
      .f("#330066")
      .s()
      .p(
        "AghBGIAAiIIATAAIAAAhQALgXAHgHQAKgHALABIAJAAIAAAVIgFAAQgSgBgLANQgKAOgBAVIAABHg"
      );
    this.shape_39.setTransform(228.9, 9.9);

    this.shape_40 = new cjs.Shape();
    this.shape_40.graphics
      .f("#330066")
      .s()
      .p(
        "AgtAzQgPgVAAgeQgBggATgTQARgVAZABQAcgBASAWQAPAUAAAeQAAAggRAUQgSAVgaAAQgcAAgRgWgAgZgpQgMAOAAAbQAAAcAMANQAKANAPABQAQAAALgOQALgOAAgbQAAgcgLgNQgMgMgPAAQgPAAgKAMg"
      );
    this.shape_40.setTransform(216.1, 10.1);

    this.shape_41 = new cjs.Shape();
    this.shape_41.graphics
      .f("#330066")
      .s()
      .p(
        "AgSBfIAAh4IgYAAIAAgQIAYAAQAAgiANgJQAKgKASAAQAIAAAMACIAAARIgOgBQgOAAgHAGQgGAGgBARIAAAGIAhAAIAAAQIghAAIAAB4g"
      );
    this.shape_41.setTransform(204.9, 7.4);

    this.shape_42 = new cjs.Shape();
    this.shape_42.graphics
      .f("#330066")
      .s()
      .p(
        "AAhBGIAAhWQABgTgJgIQgIgIgMAAQgOAAgLANQgLAOAAAVIAABJIgWAAIAAiIIAUAAIAAAaQAQgdAZAAQAQAAALAHQALAJAEAJQAEALAAAZIAABOg"
      );
    this.shape_42.setTransform(192.9, 9.9);

    this.shape_43 = new cjs.Shape();
    this.shape_43.graphics
      .f("#330066")
      .s()
      .p("AgJBdIAAiIIAUAAIAACIgAgKhEIAAgYIAVAAIAAAYg");
    this.shape_43.setTransform(182.1, 7.6);

    this.shape_44 = new cjs.Shape();
    this.shape_44.graphics
      .f("#330066")
      .s()
      .p(
        "AgrA1QgSgVAAgfQAAggATgUQASgUAZAAQAbgBARAUQAQASABAkIhjAAQAAAeANAMQAOAKAMABQAbAAAKgbIAUADQgFASgQALQgQAMgVABQgbgBgRgTgAAmgNQAAgLgEgJQgDgJgJgHQgIgGgMAAQgOAAgLAMQgLALgCATIBKAAIAAAAg"
      );
    this.shape_44.setTransform(164.6, 10.1);

    this.shape_45 = new cjs.Shape();
    this.shape_45.graphics
      .f("#330066")
      .s()
      .p(
        "AggBGIAAiIIASAAIAAAhQALgXAHgHQAKgHALABIAJAAIAAAVIgFAAQgSgBgLANQgKAOgBAVIAABHg"
      );
    this.shape_45.setTransform(153.7, 9.9);

    this.shape_46 = new cjs.Shape();
    this.shape_46.graphics
      .f("#330066")
      .s()
      .p(
        "AgtAzQgPgVAAgeQgBggATgTQARgVAZABQAcgBASAWQAPAUAAAeQAAAggRAUQgSAVgaAAQgcAAgRgWgAgZgpQgMAOAAAbQAAAcAMANQAKANAPABQAQAAALgOQALgOAAgbQAAgcgLgNQgMgMgPAAQgPAAgKAMg"
      );
    this.shape_46.setTransform(140.9, 10.1);

    this.shape_47 = new cjs.Shape();
    this.shape_47.graphics
      .f("#330066")
      .s()
      .p(
        "ABHBGIAAhTQAAgNgBgHQgCgHgIgGQgHgFgJAAQgMAAgMAMQgLALAAAXIAABLIgSAAIAAhZQgBgSgIgHQgJgIgJABQgOgBgLAMQgKAMABASIAABQIgVAAIAAiIIATAAIAAAbQAPgeAbAAQAPAAAKAKQAIAJAEANQAOggAdAAQAOAAALAHQALAIADALQADAKAAAUIAABTg"
      );
    this.shape_47.setTransform(122.3, 9.9);

    this.shape_48 = new cjs.Shape();
    this.shape_48.graphics
      .f("#330066")
      .s()
      .p(
        "AghBGIAAiIIATAAIAAAhQALgXAHgHQAKgHALABIAJAAIAAAVIgFAAQgSgBgLANQgKAOgBAVIAABHg"
      );
    this.shape_48.setTransform(100.3, 9.9);

    this.shape_49 = new cjs.Shape();
    this.shape_49.graphics
      .f("#330066")
      .s()
      .p(
        "AgsAzQgRgVABgeQgBggATgTQARgVAZABQAdgBARAWQAQAUAAAeQgBAggRAUQgSAVgaAAQgcAAgQgWgAgZgpQgMAOAAAbQAAAcAMANQAKANAPABQAQAAALgOQALgOAAgbQAAgcgLgNQgMgMgPAAQgPAAgKAMg"
      );
    this.shape_49.setTransform(87.5, 10.1);

    this.shape_50 = new cjs.Shape();
    this.shape_50.graphics
      .f("#330066")
      .s()
      .p("Ag4BdIAAi5IBwAAIAAAVIhYAAIAAA7IBJAAIAAAQIhJAAIAABZg");
    this.shape_50.setTransform(74.1, 7.6);

    this.timeline.addTween(
      cjs.Tween.get({})
        .to({
          state: [
            { t: this.shape_50 },
            { t: this.shape_49 },
            { t: this.shape_48 },
            { t: this.shape_47 },
            { t: this.shape_46 },
            { t: this.shape_45 },
            { t: this.shape_44 },
            { t: this.shape_43 },
            { t: this.shape_42 },
            { t: this.shape_41 },
            { t: this.shape_40 },
            { t: this.shape_39 },
            { t: this.shape_38 },
            { t: this.shape_37 },
            { t: this.shape_36 },
            { t: this.shape_35 },
            { t: this.shape_34 },
            { t: this.shape_33 },
            { t: this.shape_32 },
            { t: this.shape_31 },
            { t: this.shape_30 },
            { t: this.shape_29 },
            { t: this.shape_28 },
            { t: this.shape_27 },
            { t: this.shape_26 },
            { t: this.shape_25 },
            { t: this.shape_24 },
            { t: this.shape_23 },
            { t: this.shape_22 },
            { t: this.shape_21 },
            { t: this.shape_20 },
            { t: this.shape_19 },
            { t: this.shape_18 },
            { t: this.shape_17 },
            { t: this.shape_16 },
            { t: this.shape_15 },
            { t: this.shape_14 },
            { t: this.shape_13 },
            { t: this.shape_12 },
            { t: this.shape_11 },
            { t: this.shape_10 },
            { t: this.shape_9 },
            { t: this.shape_8 },
            { t: this.shape_7 },
            { t: this.shape_6 },
            { t: this.shape_5 },
            { t: this.shape_4 },
            { t: this.shape_3 },
            { t: this.shape_2 },
            { t: this.shape_1 },
            { t: this.shape }
          ]
        })
        .wait(1)
    );
  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = new cjs.Rectangle(64, -10.7, 383.2, 99.3);

  (lib.text97 = function(mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {});

    // Layer 1
    this.shape = new cjs.Shape();
    this.shape.graphics
      .f("#000000")
      .s()
      .p(
        "AgWBAQgJgCgGgGQgFgEgCgIQgCgIAAgJIAAgFIAeAAIAAAFQAAAIAEAFQAEAFAIABQAGAAAFgFQAFgEAAgHQAAgHgEgDIgIgEIgWgJQgNgFgHgHQgEgEgCgGQgBgFAAgHQAAgIACgHQADgHAGgFQAGgGAIgDQAKgDAKAAQAMAAAIADQAIACAGAEQAKAKAAASIAAAFIgdAAQAAgKgEgFQgDgEgIAAQgEgBgFAEQgFAEAAAGQAAAGADADQADAEAIACIATAIQAPAEAHAHQAGAIAAAQQAAAKgDAHQgEAIgGAFQgHAFgIACQgJACgKAAQgNAAgJgDg"
      );
    this.shape.setTransform(284, 15.6);

    this.shape_1 = new cjs.Shape();
    this.shape_1.graphics
      .f("#000000")
      .s()
      .p(
        "AgOBBQgHgBgFgDQgKgGgFgJQgEgLgCgMIgBgXQAAgMACgMQACgMAFgJQAGgKAKgFQAKgGAPAAQAOAAAJAFQAJAEAGAJQAFAIACANQACALAAAQIAAAFIg/AAIAAALIAAALIADAJIAFAHQADACADABQAIAAAEgHQAEgFABgNIAeAAQgBAWgLAMQgLAMgYAAQgHAAgHgCgAgGgpQgDACgCAEIgDAIIAAAJIAAAFIAfAAIgBgMQAAgHgDgDQgBgFgEgCQgDgBgEAAQgEgBgDADg"
      );
    this.shape_1.setTransform(273.1, 15.6);

    this.shape_2 = new cjs.Shape();
    this.shape_2.graphics
      .f("#000000")
      .s()
      .p("AgPBVIAAipIAfAAIAACpg");
    this.shape_2.setTransform(264.7, 13.5);

    this.shape_3 = new cjs.Shape();
    this.shape_3.graphics
      .f("#000000")
      .s()
      .p(
        "AgFBTQgGgDgGgKIAAAOIggAAIAAiqIAhAAIAAA3IABAAQAFgIAGgEQAFgDAJAAQAVgBAJARQAFAHACAOQADALAAARQAAATgDANQgCANgFAHQgFAIgHADQgHAFgLAAQgKgBgFgDgAgHgSQgEACgCAGQgDAKAAATQAAAWADAKQAEALAJAAQALAAACgLQAEgKAAgWQAAgTgEgKQgBgGgDgCQgEgDgFAAQgEAAgDADg"
      );
    this.shape_3.setTransform(256, 13.6);

    this.shape_4 = new cjs.Shape();
    this.shape_4.graphics
      .f("#000000")
      .s()
      .p(
        "AggBAQgGgDgEgFQgDgFgCgHQgCgHAAgGQAAgKACgGQACgGAEgFQAEgEAGgCQAGgDAJgCIARgGQAHgCADgDQADgDAAgGQAAgIgDgEQgEgFgHABQgHgBgEAFQgEAEAAAJIAAADIgdAAIAAgDQAAgLADgIQAEgHAGgFQAGgFAIgCQAJgCAIAAQAOAAAJADQAJADAFAFQAFAFACAIQACAHAAAJIAABBIABAPIADAKIggAAIgCgGIgCgHIAAAAQgGAKgIADQgFADgMAAQgJAAgGgDgAAHAEIgHADQgIACgEAEQgFAGAAAJQAAAGADAGQADAFAHABIAFgCQADgBADgDQADgCACgDQACgFAAgEIAAgag"
      );
    this.shape_4.setTransform(244, 15.6);

    this.shape_5 = new cjs.Shape();
    this.shape_5.graphics
      .f("#000000")
      .s()
      .p("AgPBWIAAh/IAfAAIAAB/gAgPg5IAAgcIAfAAIAAAcg");
    this.shape_5.setTransform(235.4, 13.4);

    this.shape_6 = new cjs.Shape();
    this.shape_6.graphics
      .f("#000000")
      .s()
      .p(
        "AggBCIAAh/IAfAAIAAARQAEgJAHgGQAHgGALAAIACAAIADABIAAAfIgEAAIgGAAIgJABQgEABgEADQgDADgCAEQgBAFAAAGIAABMg"
      );
    this.shape_6.setTransform(229.1, 15.4);

    this.shape_7 = new cjs.Shape();
    this.shape_7.graphics
      .f("#000000")
      .s()
      .p(
        "AggBAQgGgDgEgFQgDgFgCgHQgCgHAAgGQAAgKACgGQACgGAEgFQAEgEAGgCQAGgDAJgCIARgGQAHgCADgDQADgDAAgGQAAgIgDgEQgEgFgHABQgHgBgEAFQgEAEAAAJIAAADIgdAAIAAgDQAAgLADgIQAEgHAGgFQAGgFAIgCQAJgCAIAAQAOAAAJADQAJADAFAFQAFAFACAIQACAHAAAJIAABBIABAPIADAKIggAAIgCgGIgCgHIAAAAQgGAKgIADQgFADgMAAQgJAAgGgDgAAHAEIgHADQgIACgEAEQgFAGAAAJQAAAGADAGQADAFAHABIAFgCQADgBADgDQADgCACgDQACgFAAgEIAAgag"
      );
    this.shape_7.setTransform(218.8, 15.6);

    this.shape_8 = new cjs.Shape();
    this.shape_8.graphics
      .f("#000000")
      .s()
      .p("AgVBVIgnipIAlAAIAXB9IAAAAIAZh9IAkAAIgnCpg");
    this.shape_8.setTransform(206.9, 13.5);

    this.shape_9 = new cjs.Shape();
    this.shape_9.graphics
      .f("#000000")
      .s()
      .p(
        "AAQBVIAAhXQAAgKgEgEQgDgEgIAAQgQAAAAAUIAABVIghAAIAAipIAhAAIAAA3IABAAQAKgQAUAAQAPAAAJAIQAEAFACAHQACAHAAAKIAABdg"
      );
    this.shape_9.setTransform(188.9, 13.5);

    this.shape_10 = new cjs.Shape();
    this.shape_10.graphics
      .f("#000000")
      .s()
      .p(
        "AANBTIgOgBQgHgCgDgEQgDgEgBgGIgBgQIAAhIIgRAAIAAgXIARAAIAAglIAfAAIAAAlIATAAIAAAXIgTAAIAABEQAAAHACADQADAEAGAAIAFAAIADgBIAAAXIgKABg"
      );
    this.shape_10.setTransform(179.4, 13.8);

    this.shape_11 = new cjs.Shape();
    this.shape_11.graphics
      .f("#000000")
      .s()
      .p("AgPBWIAAh/IAfAAIAAB/gAgPg5IAAgcIAfAAIAAAcg");
    this.shape_11.setTransform(172.9, 13.4);

    this.shape_12 = new cjs.Shape();
    this.shape_12.graphics
      .f("#000000")
      .s()
      .p(
        "AARBAIgRhaIgPBaIgmAAIgch/IAhAAIAPBZIABAAIAQhZIAiAAIARBZIAAAAIAQhZIAfAAIgbB/g"
      );
    this.shape_12.setTransform(161.6, 15.6);

    this.shape_13 = new cjs.Shape();
    this.shape_13.graphics
      .f("#000000")
      .s()
      .p(
        "AgOBBQgHgBgFgDQgKgGgFgJQgFgLgBgMIgBgXQAAgMACgMQACgMAFgJQAFgKALgFQAKgGAPAAQAOAAAJAFQAKAEAEAJQAGAIACANQACALAAAQIAAAFIg/AAIAAALIAAALIADAJIAFAHQADACADABQAIAAAEgHQAEgFABgNIAeAAQgBAWgLAMQgLAMgYAAQgHAAgHgCgAgGgpQgDACgCAEIgDAIIAAAJIAAAFIAfAAIgBgMQgBgHgCgDQgBgFgDgCQgEgBgEAAQgDgBgEADg"
      );
    this.shape_13.setTransform(141.9, 15.6);

    this.shape_14 = new cjs.Shape();
    this.shape_14.graphics
      .f("#000000")
      .s()
      .p(
        "AgUBAQgJgDgHgHQgGgJgDgNQgDgNAAgTQAAgSAEgNQAEgNAHgIQAHgHAJgEQAKgDAKAAQALAAAJAEQAIADAHAHQAFAGADAKQADAIAAAMIggAAIgBgJIgBgIQgCgEgDgDQgDgCgEAAQgFAAgDADQgEACgCAGQgCAFgBAJIAAARIAAAUQABAJACAGQACAFADADQAEACADABQAJgBAEgHQADgHAAgQIAgAAQAAANgDAKQgDAJgFAHQgMANgaAAQgLAAgJgDg"
      );
    this.shape_14.setTransform(130.8, 15.6);

    this.shape_15 = new cjs.Shape();
    this.shape_15.graphics
      .f("#000000")
      .s()
      .p("AgPBWIAAh/IAfAAIAAB/gAgPg5IAAgcIAfAAIAAAcg");
    this.shape_15.setTransform(122.4, 13.4);

    this.shape_16 = new cjs.Shape();
    this.shape_16.graphics
      .f("#000000")
      .s()
      .p(
        "AAMBTIgNgBQgGgCgDgEQgEgEgBgGIgBgQIAAhIIgRAAIAAgXIARAAIAAglIAfAAIAAAlIATAAIAAAXIgTAAIAABEQAAAHACADQADAEAHAAIADAAIAEgBIAAAXIgKABg"
      );
    this.shape_16.setTransform(116, 13.8);

    this.shape_17 = new cjs.Shape();
    this.shape_17.graphics
      .f("#000000")
      .s()
      .p(
        "AgUBAQgJgDgHgHQgFgJgEgNQgDgNAAgTQAAgSAEgNQAEgNAHgIQAHgHAJgEQAKgDAKAAQALAAAJAEQAJADAFAHQAGAGADAKQADAIAAAMIggAAIgBgJIgBgIQgCgEgDgDQgDgCgEAAQgEAAgFADQgEACgBAGQgCAFgBAJIgBARIABAUQABAJACAGQABAFAEADQADACAEABQAIgBAFgHQADgHAAgQIAgAAQAAANgDAKQgDAJgGAHQgLANgaAAQgLAAgJgDg"
      );
    this.shape_17.setTransform(106.9, 15.6);

    this.shape_18 = new cjs.Shape();
    this.shape_18.graphics
      .f("#000000")
      .s()
      .p(
        "AggBAQgGgDgEgFQgDgFgCgHQgCgHAAgGQAAgKACgGQACgGAEgFQAEgEAGgCQAGgDAJgCIARgGQAHgCADgDQADgDAAgGQAAgIgDgEQgEgFgHABQgHgBgEAFQgEAEAAAJIAAADIgdAAIAAgDQAAgLADgIQAEgHAGgFQAGgFAIgCQAJgCAIAAQAOAAAJADQAJADAFAFQAFAFACAIQACAHAAAJIAABBIABAPIADAKIggAAIgCgGIgCgHIAAAAQgGAKgIADQgFADgMAAQgJAAgGgDgAAHAEIgHADQgIACgEAEQgFAGAAAJQAAAGADAGQADAFAHABIAFgCQADgBADgDQADgCACgDQACgFAAgEIAAgag"
      );
    this.shape_18.setTransform(95.5, 15.6);

    this.shape_19 = new cjs.Shape();
    this.shape_19.graphics
      .f("#000000")
      .s()
      .p(
        "AggBCIAAh/IAfAAIAAARQAEgJAHgGQAHgGALAAIADAAIACABIAAAfIgEAAIgGAAIgJABQgEABgEADQgDADgCAEQgBAFAAAGIAABMg"
      );
    this.shape_19.setTransform(86.4, 15.4);

    this.shape_20 = new cjs.Shape();
    this.shape_20.graphics
      .f("#000000")
      .s()
      .p(
        "Ag0BVIAAipIA6AAQANAAAJAEQAJAFAGAHQAFAHADAJQACAKAAAJQAAANgEAKQgEAKgHAEQgHAHgKADQgKADgLAAIgSAAIAABEgAgSgHIAQAAQAIAAAGgGQAEgDABgFQACgFAAgGQAAgNgGgHQgDgDgEgCQgFgCgEAAIgPAAg"
      );
    this.shape_20.setTransform(76, 13.5);

    this.shape_21 = new cjs.Shape();
    this.shape_21.graphics
      .f("#000000")
      .s()
      .p("AgOA+IAAgmIAdAAIAAAmgAgOgXIAAgmIAdAAIAAAmg");
    this.shape_21.setTransform(60.8, 15.8);

    this.shape_22 = new cjs.Shape();
    this.shape_22.graphics
      .f("#000000")
      .s()
      .p(
        "AAGBUIAAgjIg7AAIAAgcIA3hpIAjAAIAABqIARAAIAAAbIgRAAIAAAjgAgaAWIAgAAIAAg+IgBAAg"
      );
    this.shape_22.setTransform(52.2, 13.6);

    this.shape_23 = new cjs.Shape();
    this.shape_23.graphics
      .f("#000000")
      .s()
      .p(
        "AgxBWIAAioIAgAAIAAAOQAGgJAHgFQAFgDAKAAQAUgBAJARQAFAHACAOQADANAAARQAAASgDAMQgCANgFAHQgEAIgIADQgHAFgKAAQgKgBgFgDQgGgEgFgHIgBAAIAAA1gAgHg5QgEACgCAGQgDALAAAUQAAAUADAKQADALAKAAQAKAAADgLQAEgKAAgUQAAgUgEgLQgBgGgDgCQgEgDgFAAQgEAAgDADg"
      );
    this.shape_23.setTransform(34.8, 17.5);

    this.shape_24 = new cjs.Shape();
    this.shape_24.graphics
      .f("#000000")
      .s()
      .p(
        "AgOBBQgHgBgFgDQgKgGgFgJQgFgLgBgMIgBgXQAAgMACgMQACgMAFgJQAFgKALgFQAKgGAPAAQAOAAAJAFQAKAEAEAJQAGAIACANQACALAAAQIAAAFIg/AAIAAALIAAALIADAJIAFAHQADACADABQAIAAAEgHQAEgFABgNIAeAAQgBAWgLAMQgLAMgYAAQgHAAgHgCgAgGgpQgDACgCAEIgDAIIAAAJIAAAFIAfAAIgBgMQgBgHgCgDQgBgFgDgCQgEgBgEAAQgDgBgEADg"
      );
    this.shape_24.setTransform(23.1, 15.6);

    this.shape_25 = new cjs.Shape();
    this.shape_25.graphics
      .f("#000000")
      .s()
      .p(
        "AANBTIgOgBQgGgCgDgEQgEgEgBgGIgBgQIAAhIIgRAAIAAgXIARAAIAAglIAfAAIAAAlIATAAIAAAXIgTAAIAABEQAAAHACADQADAEAGAAIAFAAIADgBIAAAXIgKABg"
      );
    this.shape_25.setTransform(14.1, 13.8);

    this.shape_26 = new cjs.Shape();
    this.shape_26.graphics
      .f("#000000")
      .s()
      .p(
        "AgbBVQgKgDgGgGQgMgNAAgYIAAgHIAiAAIAAAFIABALQAAAFADADQADADAEACQAFACAFABQAIgBAGgEQADgDABgFQACgDABgGQgBgGgCgEQgBgEgDgDQgEgDgGgDIgNgGQgLgEgIgFQgJgEgGgEQgFgGgDgIQgDgJAAgKQAAgMAFgKQADgJAHgHQAHgGAKgDQAJgDAMAAQAKAAAKADQAKACAHAGQAHAFAEAJQAEAJAAAMIAAAEIgiAAQAAgMgDgGQgFgHgJAAQgFAAgEACQgDABgDADIgDAHIgBAHQAAAIADAFQAEAGALAEIAZAMQAKAFAGACQAGAFAEAFQAEAGABAGQACAHAAAIQgBANgEAJQgEALgHAGQgJAGgKADQgLADgMAAQgPAAgLgDg"
      );
    this.shape_26.setTransform(4.3, 13.5);

    this.timeline.addTween(
      cjs.Tween.get({})
        .to({
          state: [
            { t: this.shape_26 },
            { t: this.shape_25 },
            { t: this.shape_24 },
            { t: this.shape_23 },
            { t: this.shape_22 },
            { t: this.shape_21 },
            { t: this.shape_20 },
            { t: this.shape_19 },
            { t: this.shape_18 },
            { t: this.shape_17 },
            { t: this.shape_16 },
            { t: this.shape_15 },
            { t: this.shape_14 },
            { t: this.shape_13 },
            { t: this.shape_12 },
            { t: this.shape_11 },
            { t: this.shape_10 },
            { t: this.shape_9 },
            { t: this.shape_8 },
            { t: this.shape_7 },
            { t: this.shape_6 },
            { t: this.shape_5 },
            { t: this.shape_4 },
            { t: this.shape_3 },
            { t: this.shape_2 },
            { t: this.shape_1 },
            { t: this.shape }
          ]
        })
        .wait(1)
    );
  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = new cjs.Rectangle(-4, -3, 326.4, 60.7);

  (lib.text92 = function(mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {});

    // Layer 1
    this.shape = new cjs.Shape();
    this.shape.graphics
      .f("#000000")
      .s()
      .p(
        "AghBCIAAh/IAhAAIAAARQADgJAHgGQAHgGAKAAIADAAIAEABIAAAfIgGAAIgFAAIgIABQgFABgDADQgEADgCAEQgBAFAAAGIAABMg"
      );
    this.shape.setTransform(142.7, 15.4);

    this.shape_1 = new cjs.Shape();
    this.shape_1.graphics
      .f("#000000")
      .s()
      .p(
        "AgOBBQgHgBgFgDQgKgGgFgJQgEgLgBgMIgCgXQAAgMACgMQACgMAFgJQAGgKAKgFQAKgGAPAAQAOAAAJAFQAJAEAGAJQAFAIACANQACALAAAQIAAAFIg/AAIAAALIAAALIADAJIAFAHQADACADABQAIAAAEgHQADgFACgNIAeAAQgBAWgLAMQgLAMgYAAQgHAAgHgCgAgGgpQgDACgCAEIgDAIIAAAJIAAAFIAfAAIgBgMQAAgHgCgDQgCgFgEgCQgCgBgGAAQgDgBgDADg"
      );
    this.shape_1.setTransform(132.6, 15.6);

    this.shape_2 = new cjs.Shape();
    this.shape_2.graphics
      .f("#000000")
      .s()
      .p("AgRBAIgih/IAjAAIARBaIARhaIAiAAIghB/g");
    this.shape_2.setTransform(121.7, 15.6);

    this.shape_3 = new cjs.Shape();
    this.shape_3.graphics
      .f("#000000")
      .s()
      .p(
        "AgXA/QgKgDgGgJQgFgJgDgNQgDgMABgRQAAgPACgMQADgNAGgJQAGgIAKgFQAJgEANAAQAPgBAJAFQAKAEAGAJQAGAIACANQADANgBAPQABARgDAMQgDANgGAIQgGAJgKAEQgKAEgNAAIgCAAQgNAAgIgEgAgIgoQgDADgCAGIgCAOIgBARIABASIACAOQACAHADADQADADAFAAQAFAAADgCQADgDACgFQADgIABgbIgBgTQgBgJgCgFQgDgKgKgBQgFAAgDAEg"
      );
    this.shape_3.setTransform(110.7, 15.6);

    this.shape_4 = new cjs.Shape();
    this.shape_4.graphics
      .f("#000000")
      .s()
      .p(
        "AgUBAQgKgDgFgHQgHgJgCgNQgEgNAAgTQAAgSAEgNQAEgNAHgIQAHgHAKgEQAJgDAJAAQAMAAAJAEQAJADAFAHQAGAGADAKQADAIAAAMIggAAIAAgJIgCgIQgCgEgDgDQgDgCgFAAQgEAAgEADQgDACgCAGQgCAFgBAJIgBARIABAUQABAJACAGQABAFAEADQADACAEABQAIgBAEgHQAEgHAAgQIAgAAQAAANgDAKQgDAJgGAHQgLANgaAAQgLAAgJgDg"
      );
    this.shape_4.setTransform(99.4, 15.6);

    this.shape_5 = new cjs.Shape();
    this.shape_5.graphics
      .f("#000000")
      .s()
      .p(
        "AgOBBQgHgBgFgDQgKgGgFgJQgFgLgBgMIgBgXQAAgMACgMQACgMAFgJQAFgKALgFQAKgGAPAAQAOAAAJAFQAKAEAFAJQAFAIACANQACALAAAQIAAAFIg/AAIAAALIAAALIADAJIAFAHQADACADABQAIAAAEgHQAEgFABgNIAeAAQgBAWgLAMQgLAMgYAAQgHAAgHgCgAgGgpQgDACgCAEIgDAIIAAAJIAAAFIAfAAIgBgMQgBgHgCgDQgBgFgDgCQgEgBgEAAQgEgBgDADg"
      );
    this.shape_5.setTransform(88.3, 15.6);

    this.shape_6 = new cjs.Shape();
    this.shape_6.graphics
      .f("#000000")
      .s()
      .p(
        "AAUBVQgDgDAAgFIgBgKIgBghQgBgKgEgFQgFgGgJAAIgSAAIAABIIgjAAIAAipIA/AAQAKAAAJADQAIACAGAGQAGAFADAJQADAIAAALQAAARgHALQgHALgPABIAAABIAMADQAEACAEADQACADACAGQACAFABAHIAAAKIABANIACAVQABAHAEADIAAABgAgWgJIAPAAQAFAAADgCQAFgBAEgDQADgDACgFQACgFAAgHQAAgMgHgGQgFgGgLAAIgQAAg"
      );
    this.shape_6.setTransform(76.4, 13.5);

    this.shape_7 = new cjs.Shape();
    this.shape_7.graphics
      .f("#000000")
      .s()
      .p("AgOA+IAAgmIAdAAIAAAmgAgOgXIAAgmIAdAAIAAAmg");
    this.shape_7.setTransform(60.8, 15.8);

    this.shape_8 = new cjs.Shape();
    this.shape_8.graphics
      .f("#000000")
      .s()
      .p(
        "AgYBTQgJgEgGgHQgMgNAAgZIAAAAIAhAAQAAAOAEAIQADAIALAAQAFAAAEgCQADgCACgEQACgEABgFIABgKIgBgLQgBgFgDgEQgCgFgEgCQgFgCgFAAIgLAAIAAgVIALAAQAEAAADgCIAGgGQADgEABgFIABgKQAAgMgEgFQgEgFgHAAQgFAAgEACQgDACgCAEQgCADgBAFIAAALIggAAQAAgMADgKQADgJAHgGQAMgNAYAAQAWAAANALQAGAFAEAIQADAJAAALQAAAPgHAKQgHAKgMACIAAABQAQADAHAIQAHALAAAQQAAAJgCAJQgCAJgGAHQgHAIgLAEQgFADgHABIgOABQgNAAgJgDg"
      );
    this.shape_8.setTransform(52.2, 13.7);

    this.shape_9 = new cjs.Shape();
    this.shape_9.graphics
      .f("#000000")
      .s()
      .p(
        "AgxBWIAAioIAgAAIAAAOQAGgJAHgFQAFgDAKAAQAUgBAJARQAFAHACAOQADANAAARQAAASgDAMQgCANgFAHQgEAIgIADQgHAFgKAAQgKgBgFgDQgGgEgFgHIgBAAIAAA1gAgHg5QgEACgCAGQgDALAAAUQAAAUADAKQADALAKAAQAKAAADgLQAEgKAAgUQAAgUgEgLQgBgGgDgCQgEgDgFAAQgEAAgDADg"
      );
    this.shape_9.setTransform(34.8, 17.5);

    this.shape_10 = new cjs.Shape();
    this.shape_10.graphics
      .f("#000000")
      .s()
      .p(
        "AgOBBQgHgBgFgDQgKgGgFgJQgFgLgBgMIgBgXQAAgMACgMQACgMAFgJQAFgKALgFQAKgGAPAAQAOAAAJAFQAKAEAEAJQAGAIACANQACALAAAQIAAAFIg/AAIAAALIAAALIADAJIAFAHQADACADABQAIAAAEgHQAEgFABgNIAeAAQgBAWgLAMQgLAMgYAAQgHAAgHgCgAgGgpQgDACgCAEIgDAIIAAAJIAAAFIAfAAIgBgMQgBgHgCgDQgBgFgDgCQgEgBgEAAQgDgBgEADg"
      );
    this.shape_10.setTransform(23.1, 15.6);

    this.shape_11 = new cjs.Shape();
    this.shape_11.graphics
      .f("#000000")
      .s()
      .p(
        "AANBTIgOgBQgGgCgDgEQgEgEgBgGIgBgQIAAhIIgRAAIAAgXIARAAIAAglIAfAAIAAAlIATAAIAAAXIgTAAIAABEQAAAHACADQADAEAGAAIAFAAIADgBIAAAXIgKABg"
      );
    this.shape_11.setTransform(14.1, 13.8);

    this.shape_12 = new cjs.Shape();
    this.shape_12.graphics
      .f("#000000")
      .s()
      .p(
        "AgbBVQgKgDgGgGQgMgNAAgYIAAgHIAiAAIAAAFIABALQAAAFADADQADADAEACQAFACAFABQAIgBAGgEQADgDABgFQACgDABgGQgBgGgCgEQgBgEgDgDQgEgDgGgDIgNgGQgLgEgIgFQgJgEgGgEQgFgGgDgIQgDgJAAgKQAAgMAFgKQADgJAHgHQAHgGAKgDQAJgDAMAAQAKAAAKADQAKACAHAGQAHAFAEAJQAEAJAAAMIAAAEIgiAAQAAgMgDgGQgFgHgJAAQgFAAgEACQgDABgDADIgDAHIgBAHQAAAIADAFQAEAGALAEIAZAMQAKAFAGACQAGAFAEAFQAEAGABAGQACAHAAAIQgBANgEAJQgEALgHAGQgJAGgKADQgLADgMAAQgPAAgLgDg"
      );
    this.shape_12.setTransform(4.3, 13.5);

    this.timeline.addTween(
      cjs.Tween.get({})
        .to({
          state: [
            { t: this.shape_12 },
            { t: this.shape_11 },
            { t: this.shape_10 },
            { t: this.shape_9 },
            { t: this.shape_8 },
            { t: this.shape_7 },
            { t: this.shape_6 },
            { t: this.shape_5 },
            { t: this.shape_4 },
            { t: this.shape_3 },
            { t: this.shape_2 },
            { t: this.shape_1 },
            { t: this.shape }
          ]
        })
        .wait(1)
    );
  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = new cjs.Rectangle(-4, -3, 169.2, 60.7);

  (lib.text91 = function(mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {});

    // Layer 1
    this.shape = new cjs.Shape();
    this.shape.graphics
      .f("#666666")
      .s()
      .p(
        "AgTAzQgJgEgHgHQgHgHgEgKQgEgKAAgMQAAgKAEgKQADgLAHgHQAHgIAJgEQAKgFAKAAIAMABIAKAEQALAFAGAJQAHAKACAKQADALgBAJIhCAAIAAAFQAAAKAFAGIAGAGQAEABADAAIAHgBIAGgDIAFgGQABgDAAgEIAdADIgBAEIgEAHIgGAJIgJAIQgFADgIADQgHACgJAAQgKAAgKgEgAATgLIgBgJIgDgHQgCgDgDgBQgDgCgFAAQgDAAgEABIgGAFIgEAHIgBAJIAjAAg"
      );
    this.shape.setTransform(182.9, 156.1);

    this.shape_1 = new cjs.Shape();
    this.shape_1.graphics
      .f("#666666")
      .s()
      .p(
        "AgTAzQgJgEgHgHQgGgIgEgKQgDgKgBgLQABgLADgKQADgKAIgIQAGgIAKgDQAKgFALAAQAJAAAIADQAIADAHAGQAFAFAFAHQADAIABAJIgdACIgBgHIgDgGIgFgFQgDgBgEAAQgFAAgDACQgEADgCAFQgCAEgBAFIgBALIABAIIACALQACAEADADQAEAEAEAAQAJgBAEgFQAEgGABgHIAdACQgBAKgDAIQgFAHgGAGQgGAFgJADQgIADgKAAQgKAAgKgEg"
      );
    this.shape_1.setTransform(171.6, 156.1);

    this.shape_2 = new cjs.Shape();
    this.shape_2.graphics
      .f("#666666")
      .s()
      .p(
        "AAPA2IAAg4IAAgIIgBgJQgCgEgCgDQgDgCgGAAQgDAAgDACQgDACgCAEQgDAFAAAEIgBAJIAAA4IgfAAIAAhoIAdAAIAAASIABAAQAFgLAHgFQADgCADgCQAFgBAGAAQAHAAAHADQAHADAFAGIADAHIACAIIAAAIIABAIIAABAg"
      );
    this.shape_2.setTransform(160.4, 156);

    this.shape_3 = new cjs.Shape();
    this.shape_3.graphics
      .f("#666666")
      .s()
      .p(
        "AgcA1QgGgBgFgEQgEgEgDgGQgCgGAAgHQAAgMAGgIQAHgGAKgEQAKgEALgBIAUgBIAAgDIAAgHQgBgEgCgDQgCgDgEgBIgHgBQgFAAgGADQgFAFAAAHIgdgDQABgJAFgHQAFgGAHgEQAHgDAJgDIAPgBIAIAAIAJADIAJADQAEABADADQAEADACAEIADAIIABAJIAAAJIAAAwIABAIIABAIIgeAAIgCgJIAAgHQgHAJgHAEQgDADgEABIgLABQgHAAgGgCgAAFAEIgIACQgGACgDAEQgEAEAAAGQAAAGAEAEQADADAHAAQADAAAEgCQAEgCADgEQADgFAAgFIABgLIAAgEg"
      );
    this.shape_3.setTransform(149, 156.1);

    this.shape_4 = new cjs.Shape();
    this.shape_4.graphics
      .f("#666666")
      .s()
      .p(
        "AACBFQgGgBgFgEIgFgGIgCgIIgBgIIAAgJIAAgtIgSAAIAAgYIATAAIACgfIAZgDIAAAiIAYAAIAAAYIgYAAIAAApIAAAIIACAGQACACADAAIAIABIAEAAIAGgBIAAAYIgKABIgJABIgPgCg"
      );
    this.shape_4.setTransform(139.2, 154.5);

    this.shape_5 = new cjs.Shape();
    this.shape_5.graphics
      .f("#666666")
      .s()
      .p(
        "AgSBIQgKgDgIgFQgHgFgHgHQgFgIgCgKIAegHQAEALAHAFQAJAEAIAAIAIgBQAFAAACgCQAEgCACgDQACgDAAgFQAAgEgCgDIgHgFIgIgCIgHgCIgSgFQgJgCgHgFQgHgDgEgHQgFgJAAgLQAAgKAEgJQAEgJAHgGQAIgGAKgDQAJgCAIAAQAJAAAJABQAIACAIAEQAGAEAFAHQAGAFADAKIgcAJQgEgIgFgFQgGgDgKAAIgFAAIgGACIgFAEQgCADAAAEQAAAEACADIAGADIAHADIAEACIAJACIALACIAJAEIAJADQAIAGAFAIQAFAIABALQgBALgFAJQgEAJgIAHIgJAFIgMAEQgKADgKgBQgJAAgJgBg"
      );
    this.shape_5.setTransform(128.8, 154.3);

    this.shape_6 = new cjs.Shape();
    this.shape_6.graphics
      .f("#666666")
      .s()
      .p(
        "AgTAzQgJgEgHgHQgHgHgEgKQgEgKAAgMQAAgKAEgKQADgLAHgHQAHgIAJgEQAKgFAKAAIAMABIAKAEQALAFAGAJQAHAKACAKQADALgBAJIhCAAIAAAFQAAAKAFAGIAGAGQAEABADAAIAHgBIAGgDIAFgGQABgDAAgEIAdADIgBAEIgEAHIgGAJIgJAIQgFADgIADQgHACgJAAQgKAAgKgEgAATgLIgBgJIgDgHQgCgDgDgBQgDgCgFAAQgDAAgEABIgGAFIgEAHIgBAJIAjAAg"
      );
    this.shape_6.setTransform(110.9, 156.1);

    this.shape_7 = new cjs.Shape();
    this.shape_7.graphics
      .f("#666666")
      .s()
      .p("AgLA1IgkhpIAhAAIASBCIAVhCIAXAAIgkBpg");
    this.shape_7.setTransform(100.2, 156.1);

    this.shape_8 = new cjs.Shape();
    this.shape_8.graphics
      .f("#666666")
      .s()
      .p("AgOBJIAAhpIAdAAIAABpgAgOgqIAAgdIAdAAIAAAdg");
    this.shape_8.setTransform(92.5, 154.2);

    this.shape_9 = new cjs.Shape();
    this.shape_9.graphics
      .f("#666666")
      .s()
      .p(
        "AACBFQgFgBgGgEIgFgGIgCgIIgCgIIAAgJIAAgtIgRAAIAAgYIATAAIADgfIAZgDIAAAiIAWAAIAAAYIgWAAIAAApIAAAIIABAGQACACADAAIAHABIAGAAIAFgBIAAAYIgKABIgKABIgOgCg"
      );
    this.shape_9.setTransform(85.6, 154.5);

    this.shape_10 = new cjs.Shape();
    this.shape_10.graphics
      .f("#666666")
      .s()
      .p(
        "AgbA2IAAhoIAbAAIAAAUIAAAAIADgJIAEgIIAHgFQAEgBAFAAIAFAAIAAAgQgIgBgGADQgFADgDAGQgCAEgBAGIgBAOIAAAog"
      );
    this.shape_10.setTransform(78.8, 156);

    this.shape_11 = new cjs.Shape();
    this.shape_11.graphics
      .f("#666666")
      .s()
      .p(
        "AgLA2QgFgBgFgDQgJgDgHgIQgGgHgDgLQgEgKAAgLQAAgKAEgLQADgKAHgHQAGgHAJgEIALgEIAKgBIALABIAKAEQAKAEAGAHQAHAIADAKQAEALAAAKQAAALgEAKQgEAKgGAIQgHAGgKAFQgJAEgLAAgAgIgeQgEADgCAFQgCAFAAAFIAAAKIAAAJIACANQABAGAEAEQADAFAGgBQAGABADgEQAEgEACgFIACgKIAAgLIAAgMQgBgGgCgGQgCgGgEgCQgDgCgFAAQgFAAgDADg"
      );
    this.shape_11.setTransform(69.1, 156.1);

    this.shape_12 = new cjs.Shape();
    this.shape_12.graphics
      .f("#666666")
      .s()
      .p(
        "AgvBIIAAiMIAdAAIAAAPIABAAQAEgJAGgEQAHgFAIAAQALAAAHAFQAJAFAFAIQAFAKABAIQACAKAAAKQAAAKgDAIQgBAJgFAJQgEAHgJAFIgJAEIgKABQgHAAgGgDQgGgDgEgIIAAAAIAAAwgAgHgvQgEACgCAFIgDAJIAAAJIAAALIAAALQABAEACAEQACAEAEACQADACAEAAQAEAAAEgDQAEgFABgEQACgEAAgGIABgKIgBgKIgCgLQgBgFgEgEQgDgDgFAAQgEAAgDACg"
      );
    this.shape_12.setTransform(58.2, 157.8);

    this.shape_13 = new cjs.Shape();
    this.shape_13.graphics
      .f("#666666")
      .s()
      .p(
        "AgvBIIAAiMIAdAAIAAAPIAAAAQAFgJAHgEQAGgFAJAAQAKAAAIAFQAHAFAGAIQAFAKACAIQABAKAAAKQAAAKgCAIQgCAJgFAJQgFAHgHAFIgJAEIgLABQgHAAgFgDQgHgDgDgIIgBAAIAAAwgAgHgvQgDACgDAFIgCAJIgBAJIAAALIAAALQAAAEADAEQADAEADACQADACAEAAQAEAAAEgDQADgFACgEQACgEAAgGIAAgKIAAgKIgCgLQgCgFgDgEQgDgDgFAAQgEAAgDACg"
      );
    this.shape_13.setTransform(46.9, 157.8);

    this.shape_14 = new cjs.Shape();
    this.shape_14.graphics
      .f("#666666")
      .s()
      .p(
        "AgbA0QgHgDgFgHQgEgHAAgIIgBgPIAAhBIAfAAIAABBIAAAGIACAGQABACACACQACABAFAAQADAAAEgDQAEgCACgFQACgEAAgEIAAgJIAAg3IAfAAIAABpIgdAAIAAgTIAAAAQgEALgIAFIgGAEIgLABQgIAAgGgCg"
      );
    this.shape_14.setTransform(35.2, 156.2);

    this.shape_15 = new cjs.Shape();
    this.shape_15.graphics
      .f("#666666")
      .s()
      .p(
        "AgSBIQgKgDgIgFQgHgFgHgHQgFgIgDgKIAggHQADALAHAFQAJAEAIAAIAJgBQAEAAADgCQADgCACgDQACgDAAgFQAAgEgDgDIgGgFIgIgCIgHgCIgSgFQgJgCgHgFQgHgDgEgHQgFgJAAgLQAAgKAEgJQAEgJAIgGQAHgGAKgDQAIgCAJAAQAKAAAIABQAIACAIAEQAHAEAEAHQAGAFAEAKIgdAJQgDgIgGgFQgGgDgKAAIgFAAIgGACIgFAEQgCADAAAEQAAAEACADIAGADIAGADIAFACIAJACIAKACIAKAEIAIADQAKAGAFAIQAEAIAAALQAAALgEAJQgFAJgJAHIgJAFIgLAEQgLADgJgBQgJAAgJgBg"
      );
    this.shape_15.setTransform(22.9, 154.3);

    this.shape_16 = new cjs.Shape();
    this.shape_16.graphics
      .f("#666666")
      .s()
      .p(
        "AgLAcQgFgCgFgFQgDgEgCgGQgDgFAAgGQAAgFACgFQACgGAEgEQAFgFAFgCQAGgCAFAAQAGAAAFACQAGACAEAFQAEAEADAGQACAFAAAFQAAAGgCAFQgDAGgEAEQgEAEgGADQgFACgGAAQgFAAgGgCg"
      );
    this.shape_16.setTransform(4.3, 154.3);

    this.shape_17 = new cjs.Shape();
    this.shape_17.graphics
      .f("#666666")
      .s()
      .p(
        "AgOA1QgIgBgGgDQgHgFgEgFQgGgHgBgJIAbgDQAAAEACADQACACAEACIAHACIAGABIAFgBIAHgBIAEgDQACgCAAgDIgBgEIgCgDIgEgCIgFAAIgHgBIgHgBIgJgCIgGgDQgKgCgFgHQgDgDgCgFQgBgEAAgFQAAgKAEgHQAEgHAGgEQAHgEAHgCQAJgCAGAAQAQAAAKAHQAGADADAFQAFAGACAHIgXAGQgBgHgGgDQgGgEgHAAIgDAAIgGACIgDADQgDABAAADQABAGAFABIAJAEIAQACQAIABAHADQAIADAEAFQADADAAAFIABALQAAAIgDAHQgEAIgGAEQgIAFgJACQgIACgJAAQgGAAgIgCg"
      );
    this.shape_17.setTransform(339.4, 131.3);

    this.shape_18 = new cjs.Shape();
    this.shape_18.graphics
      .f("#666666")
      .s()
      .p(
        "AAPA2IAAg3IAAgJIgBgJQgCgEgCgDQgDgCgGAAQgDAAgDACQgDACgCAEQgDAFAAAEIgBAKIAAA3IgfAAIAAhpIAdAAIAAASIABAAQAFgKAHgFQADgDADgBQAFgBAGAAQAHAAAHADQAHADAFAGIADAHIACAIIAAAIIABAIIAABAg"
      );
    this.shape_18.setTransform(328.8, 131.2);

    this.shape_19 = new cjs.Shape();
    this.shape_19.graphics
      .f("#666666")
      .s()
      .p(
        "AgLA2QgFgBgFgDQgJgDgHgIQgGgHgDgLQgEgKAAgLQAAgKAEgKQADgLAHgHQAGgHAJgEIALgEIAKgBIALABIAKAEQAKAEAGAHQAHAIADAKQAEALAAAJQAAAMgEAKQgEAKgGAIQgHAGgKAFQgJAEgLAAgAgIgeQgEADgCAFQgCAFAAAFIAAAKIAAAJIACANQABAGAEAEQADAFAGgBQAGABADgEQAEgEACgEIACgLIAAgMIAAgKQgBgIgCgFQgCgGgEgCQgDgDgFAAQgFAAgDAEg"
      );
    this.shape_19.setTransform(317.5, 131.3);

    this.shape_20 = new cjs.Shape();
    this.shape_20.graphics
      .f("#666666")
      .s()
      .p("AgOBJIAAhpIAdAAIAABpgAgOgqIAAgdIAdAAIAAAdg");
    this.shape_20.setTransform(309.1, 129.3);

    this.shape_21 = new cjs.Shape();
    this.shape_21.graphics
      .f("#666666")
      .s()
      .p(
        "AACBFQgGgBgFgEIgFgGIgDgIIgBgIIAAgJIAAgtIgRAAIAAgYIATAAIADgfIAZgDIAAAiIAWAAIAAAYIgWAAIAAApIAAAIIACAGQABACADAAIAHABIAGAAIAFgBIAAAYIgKABIgKABIgOgCg"
      );
    this.shape_21.setTransform(302.2, 129.7);

    this.shape_22 = new cjs.Shape();
    this.shape_22.graphics
      .f("#666666")
      .s()
      .p(
        "AgcA1QgGgBgFgEQgEgEgDgGQgCgGAAgHQAAgMAGgIQAHgGAKgEQAKgDALgCIAUgBIAAgDIAAgHQgBgEgCgDQgCgDgEgBIgHgBQgFAAgGAEQgFAEAAAHIgdgCQABgKAFgHQAFgGAHgEQAHgEAJgCIAPgBIAIAAIAJACIAJAEQAEABADADQAEADACAEIADAIIABAJIAAAKIAAAvIABAIIABAIIgeAAIgCgJIAAgIQgHAKgHAEQgDADgEABIgLABQgHAAgGgCgAAFAEIgIACQgGACgDAEQgEADAAAHQAAAGAEAEQADADAHAAQADAAAEgCQAEgCADgEQADgGAAgEIABgLIAAgEg"
      );
    this.shape_22.setTransform(292.7, 131.3);

    this.shape_23 = new cjs.Shape();
    this.shape_23.graphics
      .f("#666666")
      .s()
      .p(
        "AgTAzQgJgEgHgHQgGgIgEgJQgDgLgBgMQABgJADgLQADgKAIgIQAGgHAKgEQAKgFALAAQAJAAAIADQAIADAHAFQAFAGAFAHQADAIABAJIgdACIgBgHIgDgHIgFgEQgDgBgEAAQgFAAgEACQgDADgCAFQgCAEgBAGIgBAKIABAIIACALQACAEADADQAEAEAEAAQAJAAAEgGQAEgFABgIIAdACQgBAKgDAIQgFAHgGAGQgHAFgIADQgIADgKAAQgKAAgKgEg"
      );
    this.shape_23.setTransform(281.4, 131.3);

    this.shape_24 = new cjs.Shape();
    this.shape_24.graphics
      .f("#666666")
      .s()
      .p("AgOBJIAAhpIAdAAIAABpgAgOgqIAAgdIAdAAIAAAdg");
    this.shape_24.setTransform(273.1, 129.3);

    this.shape_25 = new cjs.Shape();
    this.shape_25.graphics
      .f("#666666")
      .s()
      .p(
        "AAPA2IAAg3IAAgJIgBgJQgCgEgCgDQgDgCgGAAQgDAAgDACQgDACgCAEQgDAFAAAEIgBAKIAAA3IgfAAIAAhpIAdAAIAAASIABAAQAFgKAHgFQADgDADgBQAFgBAGAAQAHAAAHADQAHADAFAGIADAHIACAIIAAAIIABAIIAABAg"
      );
    this.shape_25.setTransform(264.7, 131.2);

    this.shape_26 = new cjs.Shape();
    this.shape_26.graphics
      .f("#666666")
      .s()
      .p(
        "AgbA0QgHgDgFgHQgEgHAAgIIgBgPIAAhBIAfAAIAABBIAAAGIACAGQABACACACQACABAFAAQADAAAEgDQAEgCACgFQACgEAAgEIAAgJIAAg3IAfAAIAABpIgdAAIAAgTIAAAAQgEALgIAFIgGAEIgLABQgIAAgGgCg"
      );
    this.shape_26.setTransform(253.4, 131.4);

    this.shape_27 = new cjs.Shape();
    this.shape_27.graphics
      .f("#666666")
      .s()
      .p(
        "AAsA2IAAg3IAAgDIAAgGIAAgFIgBgEQgBgFgDgCQgEgCgFAAQgEAAgEACQgEADgBAEQgCADAAAGIAAAJIAAA3IgdAAIAAg3IAAgIQAAgFgBgFQgBgEgDgDQgDgCgGAAQgGAAgDACQgDADgCAEIgCAKIAAAIIAAA3IgeAAIAAhpIAdAAIAAAQIAAAAQAFgJAHgEQAIgFAKAAQALAAAFAFQAGAEAFAJIAFgIIAIgFQAIgFAKAAQAHAAAHADQAHACAFAGIAEAHIACAIIAAAIIAAAJIAABAg"
      );
    this.shape_27.setTransform(239.2, 131.2);

    this.shape_28 = new cjs.Shape();
    this.shape_28.graphics
      .f("#666666")
      .s()
      .p(
        "AAsA2IAAg3IAAgDIAAgGIAAgFIgBgEQgBgFgDgCQgEgCgFAAQgEAAgEACQgEADgBAEQgCADAAAGIAAAJIAAA3IgdAAIAAg3IAAgIQAAgFgBgFQgBgEgDgDQgDgCgGAAQgGAAgDACQgDADgCAEIgCAKIAAAIIAAA3IgeAAIAAhpIAdAAIAAAQIAAAAQAFgJAHgEQAIgFAKAAQALAAAFAFQAGAEAFAJIAFgIIAIgFQAIgFAKAAQAHAAAHADQAHACAFAGIAEAHIACAIIAAAIIAAAJIAABAg"
      );
    this.shape_28.setTransform(222, 131.2);

    this.shape_29 = new cjs.Shape();
    this.shape_29.graphics
      .f("#666666")
      .s()
      .p(
        "AgLA2QgFgBgFgDQgJgDgHgIQgGgHgDgLQgEgKAAgLQAAgKAEgKQADgLAHgHQAGgHAJgEIALgEIAKgBIALABIAKAEQAKAEAGAHQAHAIADAKQAEALAAAJQAAAMgEAKQgEAKgGAIQgHAGgKAFQgJAEgLAAgAgIgeQgEADgCAFQgCAFAAAFIAAAKIAAAJIACANQABAGAEAEQADAFAGgBQAGABADgEQAEgEACgEIACgLIAAgMIAAgKQgBgIgCgFQgCgGgEgCQgDgDgFAAQgFAAgDAEg"
      );
    this.shape_29.setTransform(207.7, 131.3);

    this.shape_30 = new cjs.Shape();
    this.shape_30.graphics
      .f("#666666")
      .s()
      .p(
        "AgYBDQgMgFgIgLQgIgKgEgNQgDgKgBgSQAAgNAEgOQAEgNAIgLQAIgJANgHQAMgFAOAAQAaAAAPAOQAHAHAFALQADAKACANIgjADQAAgGgCgGQgBgGgDgEQgCgEgFgDQgFgCgGAAQgHAAgGAEQgEAFgEAIQgCAIgBAIIgBANIABAPQABAIADAHQADAGAFAFQAGAEAHAAQAGAAAEgCQAFgDADgEQADgDACgFIADgKIAgACQgBANgFAKQgFAJgIAGQgHAIgLADQgKADgMABQgOAAgMgHg"
      );
    this.shape_30.setTransform(195, 129.4);

    this.shape_31 = new cjs.Shape();
    this.shape_31.graphics
      .f("#666666")
      .s()
      .p("AgOBIIAAiOIAdAAIAACOg");
    this.shape_31.setTransform(179.2, 129.4);

    this.shape_32 = new cjs.Shape();
    this.shape_32.graphics
      .f("#666666")
      .s()
      .p(
        "AgcA1QgGgBgFgEQgEgEgDgGQgCgGAAgHQAAgMAGgIQAHgGAKgEQAKgDALgCIAUgBIAAgDIAAgHQgBgEgCgDQgCgDgEgBIgHgBQgFAAgGAEQgFAEAAAHIgdgCQABgKAFgHQAFgGAHgEQAHgEAJgCIAPgBIAIAAIAJACIAJAEQAEABADADQAEADACAEIADAIIABAJIAAAKIAAAvIABAIIABAIIgeAAIgCgJIAAgIQgHAKgHAEQgDADgEABIgLABQgHAAgGgCgAAFAEIgIACQgGACgDAEQgEADAAAHQAAAGAEAEQADADAHAAQADAAAEgCQAEgCADgEQADgGAAgEIABgLIAAgEg"
      );
    this.shape_32.setTransform(170.8, 131.3);

    this.shape_33 = new cjs.Shape();
    this.shape_33.graphics
      .f("#666666")
      .s()
      .p(
        "AgDBIQgFgCgDgCIgGgFIgGgJQgDAEgCAEIgDAJIgQAAIAAiOIAfAAIAAAyIABAAQAEgIAGgEQAFgDAJAAQAFAAAFABIAJAEQAHAFAFAIQAFAIACAKIABARQAAAKgCAKQgCALgFAHQgFAIgJAFIgJAEIgLABgAgIgNQgDAEgCADQgCAEAAADIgBAJIAAAQIABAJQAAAEACAFQADAEADABQADACAEAAQAFAAAEgEQAEgDABgGIACgKIAAgLIAAgKIgCgKQgCgEgDgFQgDgDgGAAQgFAAgDACg"
      );
    this.shape_33.setTransform(159.9, 129.5);

    this.shape_34 = new cjs.Shape();
    this.shape_34.graphics
      .f("#666666")
      .s()
      .p(
        "AgbA2IAAhpIAbAAIAAAVIAAAAIADgJIAEgHIAHgGQAEgBAFAAIAFAAIAAAgQgIgBgGADQgFADgDAGQgCAEgCAGIAAAOIAAAog"
      );
    this.shape_34.setTransform(150.9, 131.2);

    this.shape_35 = new cjs.Shape();
    this.shape_35.graphics
      .f("#666666")
      .s()
      .p(
        "AgTAzQgJgEgHgHQgHgHgEgKQgEgKAAgMQAAgKAEgKQADgLAHgHQAHgIAJgEQAKgFAKAAIAMABIAKAEQALAFAGAJQAHAJACALQADALgBAJIhCAAIAAAFQAAAKAFAGIAGAGQAEABADAAIAHgBIAGgDIAFgGQABgDAAgEIAdACIgBAFIgEAHIgGAJIgJAIQgFAEgIACQgHACgJAAQgKAAgKgEgAATgLIgBgJIgDgHQgCgDgDgBQgDgCgFgBQgDAAgEACIgGAFIgEAHIgBAJIAjAAg"
      );
    this.shape_35.setTransform(141.1, 131.3);

    this.shape_36 = new cjs.Shape();
    this.shape_36.graphics
      .f("#666666")
      .s()
      .p("AgRBIIgriOIAkAAIAbBkIAehkIAcAAIgsCOg");
    this.shape_36.setTransform(129.2, 129.4);

    this.shape_37 = new cjs.Shape();
    this.shape_37.graphics
      .f("#666666")
      .s()
      .p(
        "AgTAzQgJgEgHgHQgHgHgEgKQgEgKAAgMQAAgKAEgKQADgLAHgHQAHgIAJgEQAKgFAKAAIAMABIAKAEQALAFAGAJQAHAJACALQADALgBAJIhCAAIAAAFQAAAKAFAGIAGAGQAEABADAAIAHgBIAGgDIAFgGQABgDAAgEIAdACIgBAFIgEAHIgGAJIgJAIQgFAEgIACQgHACgJAAQgKAAgKgEgAATgLIgBgJIgDgHQgCgDgDgBQgDgCgFgBQgDAAgEACIgGAFIgEAHIgBAJIAjAAg"
      );
    this.shape_37.setTransform(110.9, 131.3);

    this.shape_38 = new cjs.Shape();
    this.shape_38.graphics
      .f("#666666")
      .s()
      .p("AgLA1IgkhpIAhAAIASBCIAVhCIAXAAIgkBpg");
    this.shape_38.setTransform(100.2, 131.3);

    this.shape_39 = new cjs.Shape();
    this.shape_39.graphics
      .f("#666666")
      .s()
      .p("AgOBJIAAhpIAdAAIAABpgAgOgqIAAgdIAdAAIAAAdg");
    this.shape_39.setTransform(92.5, 129.3);

    this.shape_40 = new cjs.Shape();
    this.shape_40.graphics
      .f("#666666")
      .s()
      .p(
        "AACBFQgFgBgGgEIgFgGIgCgIIgCgIIAAgJIAAgtIgRAAIAAgYIATAAIADgfIAZgDIAAAiIAWAAIAAAYIgWAAIAAApIAAAIIABAGQACACADAAIAHABIAGAAIAFgBIAAAYIgKABIgKABIgOgCg"
      );
    this.shape_40.setTransform(85.6, 129.7);

    this.shape_41 = new cjs.Shape();
    this.shape_41.graphics
      .f("#666666")
      .s()
      .p(
        "AgbA2IAAhpIAbAAIAAAVIAAAAIADgJIAEgHIAHgGQAEgBAFAAIAFAAIAAAgQgIgBgGADQgFADgDAGQgCAEgBAGIgBAOIAAAog"
      );
    this.shape_41.setTransform(78.8, 131.2);

    this.shape_42 = new cjs.Shape();
    this.shape_42.graphics
      .f("#666666")
      .s()
      .p(
        "AgLA2QgFgBgFgDQgJgDgHgIQgGgHgDgLQgEgKAAgLQAAgKAEgKQADgLAHgHQAGgHAJgEIALgEIAKgBIALABIAKAEQAKAEAGAHQAHAIADAKQAEALAAAJQAAAMgEAKQgEAKgGAIQgHAGgKAFQgJAEgLAAgAgIgeQgEADgCAFQgCAFAAAFIAAAKIAAAJIACANQABAGAEAEQADAFAGgBQAGABADgEQAEgEACgEIACgLIAAgMIAAgKQgBgIgCgFQgCgGgEgCQgDgDgFAAQgFAAgDAEg"
      );
    this.shape_42.setTransform(69.1, 131.3);

    this.shape_43 = new cjs.Shape();
    this.shape_43.graphics
      .f("#666666")
      .s()
      .p(
        "AgvBIIAAiNIAdAAIAAAQIABAAQAEgJAGgEQAHgFAIAAQALAAAHAFQAJAFAFAIQAFAKABAIQACAKAAAKQAAAKgDAIQgBAJgFAJQgEAHgJAFIgJAEIgKABQgHAAgGgDQgGgEgEgHIAAAAIAAAwgAgHguQgEABgCAFIgDAJIAAAJIAAALIAAALQABAEACAEQACAEAEACQADACAEAAQAEAAAEgDQAEgFABgEQACgEAAgGIABgKIgBgKIgCgLQgBgFgEgDQgDgEgFAAQgEAAgDADg"
      );
    this.shape_43.setTransform(58.2, 133);

    this.shape_44 = new cjs.Shape();
    this.shape_44.graphics
      .f("#666666")
      .s()
      .p(
        "AgvBIIAAiNIAdAAIAAAQIAAAAQAFgJAHgEQAGgFAJAAQAKAAAIAFQAHAFAGAIQAFAKACAIQABAKAAAKQAAAKgCAIQgCAJgFAJQgFAHgHAFIgJAEIgLABQgHAAgFgDQgHgEgDgHIgBAAIAAAwgAgHguQgDABgDAFIgCAJIgBAJIAAALIAAALQAAAEADAEQADAEADACQADACAEAAQAEAAAEgDQADgFACgEQACgEAAgGIAAgKIAAgKIgCgLQgCgFgDgDQgDgEgFAAQgEAAgDADg"
      );
    this.shape_44.setTransform(46.9, 133);

    this.shape_45 = new cjs.Shape();
    this.shape_45.graphics
      .f("#666666")
      .s()
      .p(
        "AgbA0QgHgDgFgHQgEgHAAgIIgBgPIAAhBIAfAAIAABBIAAAGIACAGQABACACACQACABAFAAQADAAAEgDQAEgCACgFQACgEAAgEIAAgJIAAg3IAfAAIAABpIgdAAIAAgTIAAAAQgEALgIAFIgGAEIgLABQgIAAgGgCg"
      );
    this.shape_45.setTransform(35.2, 131.4);

    this.shape_46 = new cjs.Shape();
    this.shape_46.graphics
      .f("#666666")
      .s()
      .p(
        "AgSBIQgKgDgIgFQgHgFgHgHQgFgIgDgKIAggHQADALAHAFQAJAEAIAAIAJgBQAEgBADgBQADgCACgDQACgDAAgFQAAgEgDgDIgGgFIgIgCIgHgCIgSgFQgJgCgHgFQgHgDgEgHQgFgJAAgLQAAgKAEgJQAEgJAIgGQAHgGAKgDQAIgCAJAAQAKAAAIABQAIACAIAEQAHAEAEAHQAGAFAEAKIgdAJQgDgIgGgEQgGgEgKgBIgFABIgGACIgFAEQgCADAAAEQAAAEACADIAGADIAGADIAFACIAJACIAKACIAKADIAIAFQAKAFAFAIQAEAIAAALQAAALgEAJQgFAKgJAGIgJAFIgLAEQgLACgJABQgJAAgJgCg"
      );
    this.shape_46.setTransform(22.9, 129.4);

    this.shape_47 = new cjs.Shape();
    this.shape_47.graphics
      .f("#666666")
      .s()
      .p(
        "AgLAcQgFgCgFgFQgDgEgCgGQgDgFAAgGQAAgFACgGQACgFAEgEQAFgEAFgDQAGgCAFAAQAGAAAFACQAGADAEAEQAEAEADAFQACAGAAAFQAAAGgCAFQgDAGgEAEQgEAEgGADQgFACgGAAQgFAAgGgCg"
      );
    this.shape_47.setTransform(4.3, 129.4);

    this.shape_48 = new cjs.Shape();
    this.shape_48.graphics
      .f("#666666")
      .s()
      .p(
        "AgMBRIgMgBIgMgDIgLgEQgEgCgDgFQgDgEAAgGQAAgIAFgFQAGgFAHgBQgGgDgEgFQgDgEAAgHQAAgFACgEQABgEADgDIAHgCIAIgEQgJgDgFgHQgFgGAAgKQAAgKAFgGQAFgHAHgDQAHgEAJgCIAQgCIANACIANADIADgKQACgEACgCQAGgFAMAAIAIABIAAAUIgEgBIgEAAQgEAAgEACQgEACAAAFIAGAKQACAEAAAHQAAAKgFAGQgEAGgHAEQgHAEgIAAIgPABIgJgBIgIAAIgEACQgBABAAAAQAAABAAAAQgBABAAABQAAAAAAABQAAAGAHACIAFABIAGABIAFAAIAEAAIAOABIAOABQAHACAGADQAFADAEAFQAEAFAAAJQAAALgHAHQgHAHgJAEQgJAEgKABIgSABgAgcAuQgCACAAADQAAAEADACQACACADABIAMACIAKAAIAHAAIAKgBQAEgBAEgCQADgCAAgEIgBgEIgDgCIgEgBIgDgBIgIAAIgJAAIgLgBIgMAAIgFADgAgOgqQgEAEAAAHQAAAIAEAEQAFAFAIAAQAFAAAGgFQAFgEAAgIQAAgIgFgEQgGgEgFAAQgIAAgFAFg"
      );
    this.shape_48.setTransform(190.9, 107.4);

    this.shape_49 = new cjs.Shape();
    this.shape_49.graphics
      .f("#666666")
      .s()
      .p(
        "AAPA2IAAg3IAAgJIgBgJQgCgEgCgDQgDgCgGAAQgDAAgDACQgDACgCAEQgDAFAAAEIgBAKIAAA3IgfAAIAAhpIAdAAIAAASIABAAQAFgKAHgFQADgDADgBQAFgBAGAAQAHAAAHADQAHACAFAHIADAHIACAIIAAAJIABAHIAABAg"
      );
    this.shape_49.setTransform(179.3, 106.3);

    this.shape_50 = new cjs.Shape();
    this.shape_50.graphics
      .f("#666666")
      .s()
      .p("AgOBJIAAhpIAdAAIAABpgAgOgqIAAgeIAdAAIAAAeg");
    this.shape_50.setTransform(170.9, 104.5);

    this.shape_51 = new cjs.Shape();
    this.shape_51.graphics
      .f("#666666")
      .s()
      .p(
        "AAPA2IAAg3IAAgJIgBgJQgCgEgCgDQgDgCgGAAQgDAAgDACQgDACgCAEQgDAFAAAEIgBAKIAAA3IgfAAIAAhpIAdAAIAAASIABAAQAFgKAHgFQADgDADgBQAFgBAGAAQAHAAAHADQAHACAFAHIADAHIACAIIAAAJIABAHIAABAg"
      );
    this.shape_51.setTransform(162.5, 106.3);

    this.shape_52 = new cjs.Shape();
    this.shape_52.graphics
      .f("#666666")
      .s()
      .p(
        "AgTAzQgJgEgHgHQgHgHgEgKQgEgKAAgMQAAgKAEgKQADgKAHgIQAHgIAJgEQAKgFAKAAIAMABIAKAEQALAFAGAJQAHAJACALQADALgBAJIhCAAIAAAFQAAAKAFAGIAGAGQAEABADAAIAHgBIAGgEIAFgFQABgDAAgEIAdACIgBAFIgEAHIgGAJIgJAIQgFADgIADQgHACgJAAQgKAAgKgEgAATgLIgBgJIgDgHQgCgDgDgBQgDgDgFAAQgDAAgEACIgGAFIgEAHIgBAJIAjAAg"
      );
    this.shape_52.setTransform(151.2, 106.4);

    this.shape_53 = new cjs.Shape();
    this.shape_53.graphics
      .f("#666666")
      .s()
      .p(
        "AACBFQgGgBgFgEIgFgGIgCgIIgCgIIAAgJIAAgtIgRAAIAAgYIATAAIADgfIAZgDIAAAiIAWAAIAAAYIgWAAIAAApIAAAIIABAGQACACADAAIAHABIAFAAIAGgBIAAAYIgKABIgKABIgOgCg"
      );
    this.shape_53.setTransform(141.4, 104.8);

    this.shape_54 = new cjs.Shape();
    this.shape_54.graphics
      .f("#666666")
      .s()
      .p(
        "AgOA1QgIgBgHgDQgGgFgFgFQgEgGgDgJIAbgEQABAEADADQACACADACIAHACIAGABIAFgBIAGgBIAGgDQABgCAAgDIgBgFIgCgCIgFgCIgDAAIgHgBIgIgBIgIgDIgHgCQgKgCgFgHQgEgDgBgFQgBgEAAgFQAAgKADgHQAFgGAGgFQAHgEAHgCQAJgCAHAAQAPAAALAHQAFADAEAFQADAGAEAHIgYAGQgCgHgFgDQgGgEgHAAIgEAAIgEACIgFADQgCABABADQgBAGAGABIAKADIAPADQAIAAAHAEQAHADAFAFQACADACAFIAAALQAAAIgDAHQgEAIgGAEQgIAFgIACQgJACgIAAQgHAAgIgCg"
      );
    this.shape_54.setTransform(132.1, 106.4);

    this.shape_55 = new cjs.Shape();
    this.shape_55.graphics
      .f("#666666")
      .s()
      .p("AgOBJIAAhpIAdAAIAABpgAgOgqIAAgeIAdAAIAAAeg");
    this.shape_55.setTransform(124.4, 104.5);

    this.shape_56 = new cjs.Shape();
    this.shape_56.graphics
      .f("#666666")
      .s()
      .p("AgtBIIAAiOIAiAAIAABxIA5AAIAAAdg");
    this.shape_56.setTransform(117, 104.6);

    this.shape_57 = new cjs.Shape();
    this.shape_57.graphics
      .f("#666666")
      .s()
      .p(
        "AgTAzQgJgEgHgHQgGgHgEgKQgDgLgBgMQABgKADgKQADgKAIgIQAGgHAKgEQAKgFALAAQAJAAAIADQAIADAHAFQAFAGAFAHQADAHABAKIgdACIgBgHIgDgHIgFgDQgDgCgEAAQgFAAgEACQgDADgCAFQgCAEgBAGIAAAKIAAAIIACALQACAEADADQAEADAEABQAJAAAEgGQAEgFABgIIAdACQgBAKgDAIQgFAHgGAGQgGAFgJADQgIADgKAAQgKAAgKgEg"
      );
    this.shape_57.setTransform(99.2, 106.4);

    this.shape_58 = new cjs.Shape();
    this.shape_58.graphics
      .f("#666666")
      .s()
      .p("AgOBJIAAhpIAdAAIAABpgAgOgqIAAgeIAdAAIAAAeg");
    this.shape_58.setTransform(90.8, 104.5);

    this.shape_59 = new cjs.Shape();
    this.shape_59.graphics
      .f("#666666")
      .s()
      .p(
        "AAOBIIAAg6IAAgIIgBgHQgBgEgCgDQgDgDgFAAQgCAAgEADQgFACgCADQgCADAAAEIAAAKIAAA6IgfAAIAAiOIAfAAIAAAzQABgEADgCIAHgGIAGgDIAJgBQAHAAAHADQAIACAEAHQAFAFABAIIAAANIAABFg"
      );
    this.shape_59.setTransform(82.5, 104.6);

    this.shape_60 = new cjs.Shape();
    this.shape_60.graphics
      .f("#666666")
      .s()
      .p(
        "AACBFQgGgBgFgEIgFgGIgCgIIgBgIIAAgJIAAgtIgSAAIAAgYIATAAIACgfIAZgDIAAAiIAYAAIAAAYIgYAAIAAApIAAAIIACAGQACACADAAIAIABIAEAAIAGgBIAAAYIgKABIgJABIgPgCg"
      );
    this.shape_60.setTransform(72.6, 104.8);

    this.shape_61 = new cjs.Shape();
    this.shape_61.graphics
      .f("#666666")
      .s()
      .p(
        "AgcA1QgGgBgFgEQgEgEgDgGQgCgFAAgIQAAgMAGgIQAHgGAKgEQAKgDALgCIAUgBIAAgDIAAgHQgBgEgCgDQgCgDgEgBIgHgBQgFAAgGAEQgFAEAAAHIgdgCQABgKAFgHQAFgGAHgDQAHgEAJgDIAPgBIAIAAIAJACIAJAEQAEABADADQAEADACAEIADAIIABAJIAAAKIAAAvIABAIIABAIIgeAAIgCgJIAAgIQgHAKgHAFQgDACgEABIgLABQgHAAgGgCgAAFAEIgIACQgGADgDADQgEADAAAHQAAAGAEAEQADADAHAAQADABAEgDQAEgCADgEQADgGAAgEIABgLIAAgEg"
      );
    this.shape_61.setTransform(63.2, 106.4);

    this.shape_62 = new cjs.Shape();
    this.shape_62.graphics
      .f("#666666")
      .s()
      .p(
        "AgvBIIAAiNIAdAAIAAAQIAAAAQAFgJAGgEQAHgFAIAAQALAAAHAFQAJAEAFAJQAFAJABAJQACAKAAAKQAAAJgDAIQgBALgFAHQgEAIgJAFIgJAEIgKABQgHAAgGgDQgGgEgEgHIAAAAIAAAwgAgHguQgEABgCAEIgDAJIAAAKIAAALIAAALQABAEACAEQACAEAEACQADACAEAAQAEAAAEgDQAEgFABgEQACgEAAgGIABgKIgBgKIgCgKQgBgGgEgDQgDgEgFAAQgEAAgDADg"
      );
    this.shape_62.setTransform(52.3, 108.1);

    this.shape_63 = new cjs.Shape();
    this.shape_63.graphics
      .f("#666666")
      .s()
      .p(
        "AAsA2IAAg2IAAgFIAAgFIAAgFIgBgEQgBgFgDgCQgEgCgFAAQgEAAgEACQgEACgBAFIgCAJIAAAKIAAA2IgdAAIAAg2IAAgJQAAgFgBgEQgBgEgDgEQgDgCgGAAQgGAAgDACQgDAEgCAEIgCAJIAAAJIAAA2IgeAAIAAhpIAdAAIAAAQIAAAAQAFgJAHgEQAIgFAKAAQALAAAFAFQAGAEAFAJIAFgIIAIgFQAIgFAKAAQAHAAAHADQAHACAFAGIAEAHIACAIIAAAIIAAAJIAABAg"
      );
    this.shape_63.setTransform(37.7, 106.3);

    this.shape_64 = new cjs.Shape();
    this.shape_64.graphics
      .f("#666666")
      .s()
      .p("AgyBIIAAiOIBlAAIAAAcIhEAAIAAAcIA1AAIAAAaIg1AAIAAAgIBEAAIAAAcg");
    this.shape_64.setTransform(23.4, 104.6);

    this.shape_65 = new cjs.Shape();
    this.shape_65.graphics
      .f("#666666")
      .s()
      .p(
        "AgLAcQgFgDgFgEQgDgEgCgFQgDgGAAgGQAAgFACgGQACgFAEgEQAFgFAFgCQAGgCAFAAQAGAAAFACQAGACAEAFQAEAEADAFQACAGAAAFQAAAGgCAGQgDAFgEAEQgEAEgGADQgFACgGAAQgFAAgGgCg"
      );
    this.shape_65.setTransform(4.3, 104.6);

    this.shape_66 = new cjs.Shape();
    this.shape_66.graphics
      .f("#666666")
      .s()
      .p(
        "AgOA1QgIgBgGgDQgHgFgEgGQgGgGgBgIIAbgEQAAAEACADQACADAEABIAHADIAGAAIAFAAIAHgCIAEgDQACgCABgDIgCgFIgDgCIgDgBIgFgBIgHgBIgHgBIgJgDIgGgCQgJgDgHgFQgCgEgBgFQgCgEAAgFQAAgKAEgHQAEgGAGgFQAHgEAIgCQAIgCAGAAQAQAAAKAHQAGADADAFQAFAGACAHIgWAGQgDgHgFgDQgGgEgHAAIgDAAIgGACIgDADQgCACgBACQABAGAEACIAKACIAPADQAJAAAHAEQAHADAFAFQACADABAFIACALQAAAIgEAHQgEAHgHAFQgHAFgJACQgIACgJAAQgGAAgIgCg"
      );
    this.shape_66.setTransform(186.5, 81.6);

    this.shape_67 = new cjs.Shape();
    this.shape_67.graphics
      .f("#666666")
      .s()
      .p(
        "AAPA2IAAg3IAAgJIgBgJQgCgEgCgDQgDgCgGAAQgDAAgDACQgDACgCAEQgDAEAAAFIgBAKIAAA3IgfAAIAAhpIAdAAIAAASIABAAQAFgKAHgFQADgCADgCQAFgBAGAAQAHAAAHADQAHACAFAHIADAHIACAIIAAAJIABAHIAABAg"
      );
    this.shape_67.setTransform(175.9, 81.5);

    this.shape_68 = new cjs.Shape();
    this.shape_68.graphics
      .f("#666666")
      .s()
      .p(
        "AgLA2QgFgBgFgCQgJgFgHgHQgGgIgDgKQgEgKAAgLQAAgKAEgKQADgKAHgIQAGgHAJgFIALgDIAKgBIALABIAKADQAKAFAGAIQAHAHADALQAEAKAAAJQAAAMgEAKQgEAKgGAIQgHAGgKAFQgJAEgLAAgAgIgeQgEADgCAFQgCAFAAAFIAAALIAAAIIACANQABAGAEAEQADAEAGAAQAGAAADgDQAEgDACgFIACgMIAAgLIAAgKQgBgIgCgGQgCgFgEgCQgDgCgFgBQgFABgDADg"
      );
    this.shape_68.setTransform(164.6, 81.6);

    this.shape_69 = new cjs.Shape();
    this.shape_69.graphics
      .f("#666666")
      .s()
      .p("AgOBJIAAhpIAdAAIAABpgAgOgqIAAgeIAdAAIAAAeg");
    this.shape_69.setTransform(156.2, 79.6);

    this.shape_70 = new cjs.Shape();
    this.shape_70.graphics
      .f("#666666")
      .s()
      .p(
        "AgOA1QgIgBgGgDQgHgFgFgGQgEgGgCgIIAbgEQAAAEADADQACADADABIAHADIAGAAIAFAAIAGgCIAFgDQACgCAAgDIgBgFIgCgCIgFgBIgDgBIgIgBIgHgBIgJgDIgGgCQgKgDgFgFQgEgEgBgFQgBgEAAgFQAAgKADgHQAFgGAGgFQAHgEAHgCQAJgCAGAAQAQAAALAHQAFADADAFQAFAGADAHIgYAGQgCgHgFgDQgGgEgHAAIgEAAIgEACIgFADQgCACAAACQAAAGAGACIAKACIAPADQAIAAAHAEQAHADAFAFQACADABAFIABALQABAIgEAHQgEAHgGAFQgIAFgIACQgJACgIAAQgHAAgIgCg"
      );
    this.shape_70.setTransform(148, 81.6);

    this.shape_71 = new cjs.Shape();
    this.shape_71.graphics
      .f("#666666")
      .s()
      .p(
        "AgOA1QgIgBgGgDQgHgFgEgGQgGgGgBgIIAbgEQAAAEACADQACADAEABIAHADIAGAAIAFAAIAHgCIAEgDQACgCABgDIgCgFIgDgCIgDgBIgFgBIgHgBIgHgBIgJgDIgGgCQgJgDgHgFQgCgEgBgFQgCgEAAgFQAAgKAEgHQAEgGAGgFQAHgEAIgCQAIgCAGAAQAQAAAKAHQAGADADAFQAFAGACAHIgWAGQgDgHgFgDQgGgEgHAAIgDAAIgGACIgDADQgCACgBACQABAGAEACIAKACIAQADQAIAAAHAEQAHADAFAFQACADABAFIACALQAAAIgEAHQgEAHgHAFQgHAFgJACQgIACgJAAQgGAAgIgCg"
      );
    this.shape_71.setTransform(137.5, 81.6);

    this.shape_72 = new cjs.Shape();
    this.shape_72.graphics
      .f("#666666")
      .s()
      .p(
        "AgTAzQgJgEgHgHQgHgHgEgKQgEgKAAgMQAAgKAEgKQADgKAHgIQAHgIAJgFQAKgEAKAAIAMABIAKAEQALAFAGAJQAHAJACALQADALgBAJIhCAAIAAAFQAAAJAFAHIAGAGQAEABADAAIAHgBIAGgEIAFgFQABgDAAgDIAdABIgBAFIgEAHIgGAIIgJAJQgFADgIADQgHACgJAAQgKAAgKgEgAATgLIgBgJIgDgHQgCgDgDgCQgDgCgFAAQgDABgEABIgGAFIgEAHIgBAJIAjAAg"
      );
    this.shape_72.setTransform(126.8, 81.6);

    this.shape_73 = new cjs.Shape();
    this.shape_73.graphics
      .f("#666666")
      .s()
      .p(
        "AgbA2IAAhpIAbAAIAAAUIAAAAIADgIIAFgHIAGgGQAEgBAFAAIAFAAIAAAfQgIAAgGADQgFADgDAGQgCAFgCAFIAAAOIAAAog"
      );
    this.shape_73.setTransform(118.2, 81.5);

    this.shape_74 = new cjs.Shape();
    this.shape_74.graphics
      .f("#666666")
      .s()
      .p(
        "AgvBIIAAiNIAdAAIAAAQIABAAQADgJAHgFQAHgEAJAAQAKAAAIAFQAHAEAGAJQAFAJABAKQACAJAAAKQAAAKgCAHQgCALgFAHQgFAIgHAFIgJAEIgLABQgHAAgGgDQgGgDgEgIIAAAAIAAAwgAgHguQgEACgCADIgDAJIAAAKIAAALIAAALQABAEACAFQACADAEACQAEACADAAQAFAAADgEQAEgDABgGQACgDAAgGIABgKIgBgKIgCgKQgBgGgEgDQgDgEgFAAQgDAAgEADg"
      );
    this.shape_74.setTransform(108.8, 83.3);

    this.shape_75 = new cjs.Shape();
    this.shape_75.graphics
      .f("#666666")
      .s()
      .p("AARA1IgUglIgWAlIgbAAIAkg4IgfgxIAkAAIAPAdIARgdIAbAAIgfAxIAkA4g");
    this.shape_75.setTransform(97, 81.6);

    this.shape_76 = new cjs.Shape();
    this.shape_76.graphics
      .f("#666666")
      .s()
      .p("AgyBIIAAiOIBlAAIAAAcIhDAAIAAAdIA0AAIAAAZIg0AAIAAAfIBDAAIAAAdg");
    this.shape_76.setTransform(85.8, 79.7);

    this.shape_77 = new cjs.Shape();
    this.shape_77.graphics
      .f("#666666")
      .s()
      .p("AgOBIIAAiOIAdAAIAACOg");
    this.shape_77.setTransform(70.3, 79.7);

    this.shape_78 = new cjs.Shape();
    this.shape_78.graphics
      .f("#666666")
      .s()
      .p(
        "AgcA1QgGgCgFgEQgEgDgDgGQgCgGAAgHQAAgMAGgIQAHgGAKgEQAKgDALgBIAUgCIAAgDIAAgHQgBgEgCgDQgCgDgEgBIgHgBQgFAAgGAEQgFADAAAJIgdgDQABgKAFgGQAFgHAHgDQAHgFAJgCIAPgBIAIAAIAJACIAJAEQAEABADADQAEADACAEIADAIIABAJIAAAKIAAAvIABAIIABAIIgeAAIgCgJIAAgIQgHAKgHAFQgDACgEABIgLABQgHAAgGgCgAAFAEIgIADQgGACgDADQgEADAAAHQAAAGAEAEQADADAHAAQADABAEgDQAEgCADgEQADgGAAgEIABgLIAAgEg"
      );
    this.shape_78.setTransform(61.9, 81.6);

    this.shape_79 = new cjs.Shape();
    this.shape_79.graphics
      .f("#666666")
      .s()
      .p("AgOBJIAAhpIAdAAIAABpgAgOgqIAAgeIAdAAIAAAeg");
    this.shape_79.setTransform(53.5, 79.6);

    this.shape_80 = new cjs.Shape();
    this.shape_80.graphics
      .f("#666666")
      .s()
      .p(
        "AgTAzQgJgEgHgHQgGgIgEgJQgDgLAAgMQAAgKADgKQAEgKAGgIQAIgHAJgFQAKgEALAAQAJAAAIADQAJADAFAFQAGAGAEAHQAEAIACAJIgeACIgBgHIgDgHIgFgDQgDgCgEAAQgEAAgFADQgDADgCAEQgCAEAAAGIgCAKIABAIIACALQACAEADADQAEADAEAAQAJABAEgGQAEgGABgHIAeACQgCAKgEAIQgDAHgHAGQgHAGgIACQgJADgJAAQgKAAgKgEg"
      );
    this.shape_80.setTransform(45.1, 81.6);

    this.shape_81 = new cjs.Shape();
    this.shape_81.graphics
      .f("#666666")
      .s()
      .p(
        "AgcA1QgGgCgFgEQgEgDgDgGQgCgGAAgHQAAgMAGgIQAHgGAKgEQAKgDALgBIAUgCIAAgDIAAgHQgBgEgCgDQgCgDgEgBIgHgBQgFAAgGAEQgFADAAAJIgdgDQABgKAFgGQAFgHAHgDQAHgFAJgCIAPgBIAIAAIAJACIAJAEQAEABADADQAEADACAEIADAIIABAJIAAAKIAAAvIABAIIABAIIgeAAIgCgJIAAgIQgHAKgHAFQgDACgEABIgLABQgHAAgGgCgAAFAEIgIADQgGACgDADQgEADAAAHQAAAGAEAEQADADAHAAQADABAEgDQAEgCADgEQADgGAAgEIABgLIAAgEg"
      );
    this.shape_81.setTransform(33.8, 81.6);

    this.shape_82 = new cjs.Shape();
    this.shape_82.graphics
      .f("#666666")
      .s()
      .p("AgyBIIAAiOIBlAAIAAAcIhDAAIAAAgIA0AAIAAAZIg0AAIAAA5g");
    this.shape_82.setTransform(23.3, 79.7);

    this.shape_83 = new cjs.Shape();
    this.shape_83.graphics
      .f("#666666")
      .s()
      .p(
        "AgkBHQgJgCgIgFQgJgHgEgJQgFgJAAgLQAAgIADgHQADgGAEgFQAFgDAHgDIANgHIgJgMQgEgHAAgJQAAgJAEgHQAEgGAGgEQAGgEAIgCIAQgCQAHAAAIACQAHADAGAEQAGAFAEAGQADAHAAAJQAAANgHAJQgIAHgMAFIAUAUQAGgGADgHIAEgNIAeAEQgDAKgGAMQgGAMgIAKIAGAEQADACAFAAIAEAAIAFgBIAAAZQgHACgHAAQgKAAgHgDQgIgCgHgIQgKAJgKADQgJAEgNAAQgKAAgKgDgAgfANQgEAFAAAJQAAAFACADQABAEAEACIAHAFQAEABAFAAQAGAAAGgCQAEgCAFgEIgbghQgIADgFAEgAgNgwQgEADAAAFQAAAFAEAFIAKAKIAIgGQAFgEAAgHQAAgGgEgEQgFgEgFAAQgFAAgEADg"
      );
    this.shape_83.setTransform(316, 54.9);

    this.shape_84 = new cjs.Shape();
    this.shape_84.graphics
      .f("#666666")
      .s()
      .p(
        "AgOA1QgIgBgHgEQgGgDgFgHQgFgGgCgIIAbgEQABAEADADQACADADABIAHADIAGAAIAFAAIAGgCIAGgDQABgCAAgDIAAgFIgDgCIgFgBIgDgBIgHgBIgHgCIgJgCIgHgCQgJgDgHgFQgDgEAAgEQgCgFAAgFQAAgKADgHQAFgGAGgFQAGgEAIgCQAJgCAHAAQAPAAALAHQAFADAEAFQADAFAEAIIgYAGQgCgHgFgEQgGgDgHAAIgEAAIgEACIgFADQgBACAAACQAAAFAEADIALACIAOACQAJACAHADQAIAEAEAEQACAEACAEIABALQgBAIgDAIQgEAGgHAFQgHAFgIACQgJACgIAAQgHAAgIgCg"
      );
    this.shape_84.setTransform(296.7, 56.7);

    this.shape_85 = new cjs.Shape();
    this.shape_85.graphics
      .f("#666666")
      .s()
      .p(
        "AgTAzQgJgEgHgHQgHgHgEgKQgEgKAAgMQAAgJAEgLQADgLAHgHQAHgIAJgFQAKgEAKAAIAMABIAKAEQALAFAGAJQAHAJACALQADALgBAJIhCAAIAAAFQAAAJAFAHIAGAGQAEABADAAIAHgBIAGgEIAFgFQABgDAAgDIAdABIgBAFIgEAHIgGAIIgJAJQgFADgIADQgHACgJAAQgKAAgKgEgAATgLIgBgJIgDgHQgCgDgDgCQgDgCgFAAQgDABgEABIgGAFIgEAHIgBAJIAjAAg"
      );
    this.shape_85.setTransform(286, 56.7);

    this.shape_86 = new cjs.Shape();
    this.shape_86.graphics
      .f("#666666")
      .s()
      .p(
        "AgbA2IAAhpIAbAAIAAAUIAAAAIADgIIAEgHIAHgGQAEgBAFAAIAFABIAAAeQgIAAgGADQgFADgDAGQgCAFgBAFIgBANIAAApg"
      );
    this.shape_86.setTransform(277.4, 56.6);

    this.shape_87 = new cjs.Shape();
    this.shape_87.graphics
      .f("#666666")
      .s()
      .p(
        "AgbA0QgHgDgFgHQgEgHAAgIIgBgPIAAhBIAfAAIAABBIAAAGIACAGQABACACACQACABAFAAQADAAAEgDQAEgCACgFQACgEAAgEIAAgJIAAg3IAfAAIAABpIgdAAIAAgTIAAAAQgEALgIAFIgGAEIgLABQgIAAgGgCg"
      );
    this.shape_87.setTransform(267.7, 56.8);

    this.shape_88 = new cjs.Shape();
    this.shape_88.graphics
      .f("#666666")
      .s()
      .p(
        "AACBFQgFgBgGgEIgFgGIgDgIIgBgIIAAgJIAAgtIgRAAIAAgYIATAAIADgfIAZgDIAAAiIAWAAIAAAYIgWAAIAAApIAAAIIABAGQACACADAAIAHABIAGAAIAFgBIAAAYIgKABIgKABIgOgCg"
      );
    this.shape_88.setTransform(257.8, 55.1);

    this.shape_89 = new cjs.Shape();
    this.shape_89.graphics
      .f("#666666")
      .s()
      .p(
        "AgOA1QgIgBgHgEQgGgDgFgHQgFgGgCgIIAbgEQABAEADADQACADADABIAHADIAGAAIAFAAIAGgCIAGgDQACgCgBgDIAAgFIgDgCIgFgBIgDgBIgHgBIgHgCIgJgCIgHgCQgJgDgHgFQgDgEgBgEQgBgFAAgFQAAgKADgHQAFgGAGgFQAGgEAJgCQAIgCAHAAQAPAAALAHQAFADAEAFQADAFAEAIIgYAGQgCgHgFgEQgGgDgHAAIgEAAIgEACIgFADQgBACAAACQAAAFAEADIALACIAOACQAJACAHADQAHAEAFAEQACAEACAEIABALQgBAIgDAIQgEAGgHAFQgHAFgIACQgJACgIAAQgHAAgIgCg"
      );
    this.shape_89.setTransform(248.6, 56.7);

    this.shape_90 = new cjs.Shape();
    this.shape_90.graphics
      .f("#666666")
      .s()
      .p(
        "AgLA2QgFgBgFgCQgJgFgHgHQgGgIgDgKQgEgKAAgLQAAgKAEgKQADgKAHgIQAGgHAJgFIALgDIAKgBIALABIAKADQAKAFAGAIQAHAHADALQAEAJAAAKQAAAMgEAKQgEAKgGAHQgHAIgKAEQgJAEgLAAgAgIgeQgEADgCAFQgCAFAAAFIAAALIAAAJIACAMQABAGAEAEQADAEAGABQAGgBADgDQAEgDACgFIACgMIAAgLIAAgKQgBgHgCgHQgCgFgEgCQgDgCgFgBQgFABgDADg"
      );
    this.shape_90.setTransform(237.9, 56.7);

    this.shape_91 = new cjs.Shape();
    this.shape_91.graphics
      .f("#666666")
      .s()
      .p(
        "Ag2BHIAAiOIA2AAIASACQAJABAKAFQASAOAAAWQAAALgDAKQgFAHgIAHQgEAEgFACIgKADIgKABIgKAAIgVAAIAAA1gAgVgGIATAAIAJgBQAFgBAFgEQACgDABgEIABgGQAAgEgCgEQgBgFgEgCQgDgDgGgBIgHgBIgTAAg"
      );
    this.shape_91.setTransform(226.2, 54.9);

    this.shape_92 = new cjs.Shape();
    this.shape_92.graphics
      .f("#666666")
      .s()
      .p("AgPAhIAPghIgPAAIAAggIAfAAIAAAeIgTAjg");
    this.shape_92.setTransform(209.8, 62.1);

    this.shape_93 = new cjs.Shape();
    this.shape_93.graphics
      .f("#666666")
      .s()
      .p(
        "AgOA1QgIgBgGgEQgHgDgFgHQgEgGgCgIIAbgEQAAAEACADQADADADABIAHADIAGAAIAFAAIAHgCIAEgDQACgCAAgDIgBgFIgCgCIgFgBIgDgBIgIgBIgHgCIgJgCIgGgCQgKgDgFgFQgDgEgCgEQgBgFAAgFQAAgKAEgHQAEgGAGgFQAHgEAHgCQAJgCAGAAQAQAAAKAHQAGADADAFQAEAFAEAIIgYAGQgCgHgFgEQgGgDgHAAIgEAAIgEACIgFADQgCACAAACQAAAFAGADIAJACIAQACQAIACAHADQAIAEAEAEQADAEAAAEIABALQABAIgEAIQgEAGgGAFQgIAFgJACQgIACgJAAQgGAAgIgCg"
      );
    this.shape_93.setTransform(201.2, 56.7);

    this.shape_94 = new cjs.Shape();
    this.shape_94.graphics
      .f("#666666")
      .s()
      .p(
        "AgTAzQgJgEgHgHQgHgHgEgKQgEgKAAgMQAAgJAEgLQADgLAHgHQAHgIAJgFQAKgEAKAAIAMABIAKAEQALAFAGAJQAHAJACALQADALgBAJIhCAAIAAAFQAAAJAFAHIAGAGQAEABADAAIAHgBIAGgEIAFgFQABgDAAgDIAdABIgBAFIgEAHIgGAIIgJAJQgFADgIADQgHACgJAAQgKAAgKgEgAATgLIgBgJIgDgHQgCgDgDgCQgDgCgFAAQgDABgEABIgGAFIgEAHIgBAJIAjAAg"
      );
    this.shape_94.setTransform(190.5, 56.7);

    this.shape_95 = new cjs.Shape();
    this.shape_95.graphics
      .f("#666666")
      .s()
      .p(
        "AgbA2IAAhpIAbAAIAAAUIAAAAIADgIIAEgHIAHgGQAEgBAFAAIAFABIAAAeQgIAAgGADQgFADgDAGQgCAFgBAFIgBANIAAApg"
      );
    this.shape_95.setTransform(181.9, 56.6);

    this.shape_96 = new cjs.Shape();
    this.shape_96.graphics
      .f("#666666")
      .s()
      .p(
        "AgbA0QgHgDgFgHQgEgHAAgIIgBgPIAAhBIAfAAIAABBIAAAGIACAGQABACACACQACABAFAAQADAAAEgDQAEgCACgFQACgEAAgEIAAgJIAAg3IAfAAIAABpIgdAAIAAgTIAAAAQgEALgIAFIgGAEIgLABQgIAAgGgCg"
      );
    this.shape_96.setTransform(172.1, 56.8);

    this.shape_97 = new cjs.Shape();
    this.shape_97.graphics
      .f("#666666")
      .s()
      .p(
        "AACBFQgFgBgGgEIgFgGIgCgIIgBgIIAAgJIAAgtIgSAAIAAgYIATAAIACgfIAZgDIAAAiIAYAAIAAAYIgYAAIAAApIAAAIIACAGQACACADAAIAIABIAEAAIAGgBIAAAYIgKABIgJABIgPgCg"
      );
    this.shape_97.setTransform(162.3, 55.1);

    this.shape_98 = new cjs.Shape();
    this.shape_98.graphics
      .f("#666666")
      .s()
      .p(
        "AgOA1QgIgBgGgEQgHgDgFgHQgEgGgCgIIAbgEQAAAEACADQADADADABIAHADIAGAAIAFAAIAHgCIAEgDQACgCAAgDIgBgFIgCgCIgFgBIgEgBIgHgBIgHgCIgJgCIgGgCQgKgDgFgFQgDgEgCgEQgBgFAAgFQAAgKAEgHQAEgGAGgFQAHgEAHgCQAJgCAGAAQAQAAAKAHQAGADADAFQAEAFAEAIIgYAGQgCgHgFgEQgGgDgHAAIgEAAIgEACIgFADQgCACAAACQAAAFAGADIAJACIAQACQAIACAHADQAIAEAEAEQADAEAAAEIABALQABAIgEAIQgEAGgGAFQgIAFgIACQgJACgJAAQgGAAgIgCg"
      );
    this.shape_98.setTransform(153, 56.7);

    this.shape_99 = new cjs.Shape();
    this.shape_99.graphics
      .f("#666666")
      .s()
      .p(
        "AgTAzQgJgEgHgHQgHgHgEgKQgEgKAAgMQAAgJAEgLQADgLAHgHQAHgIAJgFQAKgEAKAAIAMABIAKAEQALAFAGAJQAHAJACALQADALgBAJIhCAAIAAAFQAAAJAFAHIAGAGQAEABADAAIAHgBIAGgEIAFgFQABgDAAgDIAdABIgBAFIgEAHIgGAIIgJAJQgFADgIADQgHACgJAAQgKAAgKgEgAATgLIgBgJIgDgHQgCgDgDgCQgDgCgFAAQgDABgEABIgGAFIgEAHIgBAJIAjAAg"
      );
    this.shape_99.setTransform(142.3, 56.7);

    this.shape_100 = new cjs.Shape();
    this.shape_100.graphics
      .f("#666666")
      .s()
      .p(
        "AgaBDQgLgFgHgLIgGgKIgFgNQgDgNAAgOQAAgIADgTIAFgNIAHgKQAHgLAMgGQAMgHAPAAQALAAAJAEQALADAHAHQAHAGAEAJQAFAJACAMIggAEIgDgKQgBgFgDgEQgDgDgFgDQgEgCgGAAQgHAAgGAGQgFAEgDAIQgDAHgBAJIgBANIACAPQAAAIAEAHQADAGAFAFQAGAFAHAAQALgBAHgGIAFgJIABgJIgbAAIAAgZIA7AAIAABKIgQAAIgEgQIgIAJIgJAFQgKAFgMAAQgPgBgLgGg"
      );
    this.shape_100.setTransform(129.5, 54.9);

    this.shape_101 = new cjs.Shape();
    this.shape_101.graphics
      .f("#666666")
      .s()
      .p(
        "AgTAzQgJgEgHgHQgHgHgEgKQgEgKAAgMQAAgJAEgLQADgLAHgHQAHgIAJgFQAKgEAKAAIAMABIAKAEQALAFAGAJQAHAJACALQADALgBAJIhCAAIAAAFQAAAJAFAHIAGAGQAEABADAAIAHgBIAGgEIAFgFQABgDAAgDIAdABIgBAFIgEAHIgGAIIgJAJQgFADgIADQgHACgJAAQgKAAgKgEgAATgLIgBgJIgDgHQgCgDgDgCQgDgCgFAAQgDABgEABIgGAFIgEAHIgBAJIAjAAg"
      );
    this.shape_101.setTransform(110.9, 56.7);

    this.shape_102 = new cjs.Shape();
    this.shape_102.graphics
      .f("#666666")
      .s()
      .p("AgLA1IgkhpIAhAAIASBCIAVhCIAXAAIgkBpg");
    this.shape_102.setTransform(100.2, 56.7);

    this.shape_103 = new cjs.Shape();
    this.shape_103.graphics
      .f("#666666")
      .s()
      .p("AgOBIIAAhoIAdAAIAABogAgOgqIAAgeIAdAAIAAAeg");
    this.shape_103.setTransform(92.5, 54.8);

    this.shape_104 = new cjs.Shape();
    this.shape_104.graphics
      .f("#666666")
      .s()
      .p(
        "AACBFQgFgBgGgEIgFgGIgCgIIgCgIIAAgJIAAgtIgRAAIAAgYIATAAIADgfIAZgDIAAAiIAWAAIAAAYIgWAAIAAApIAAAIIABAGQACACADAAIAHABIAGAAIAFgBIAAAYIgKABIgKABIgOgCg"
      );
    this.shape_104.setTransform(85.6, 55.1);

    this.shape_105 = new cjs.Shape();
    this.shape_105.graphics
      .f("#666666")
      .s()
      .p(
        "AgbA2IAAhpIAbAAIAAAUIAAAAIADgIIAEgHIAHgGQAEgBAFAAIAFABIAAAeQgIAAgGADQgFADgDAGQgCAFgBAFIgBANIAAApg"
      );
    this.shape_105.setTransform(78.8, 56.6);

    this.shape_106 = new cjs.Shape();
    this.shape_106.graphics
      .f("#666666")
      .s()
      .p(
        "AgLA2QgFgBgFgCQgJgFgHgHQgGgIgDgKQgEgKAAgLQAAgKAEgKQADgKAHgIQAGgHAJgFIALgDIAKgBIALABIAKADQAKAFAGAIQAHAHADALQAEAJAAAKQAAAMgEAKQgEAKgGAHQgHAIgKAEQgJAEgLAAgAgIgeQgEADgCAFQgCAFAAAFIAAALIAAAJIACAMQABAGAEAEQADAEAGABQAGgBADgDQAEgDACgFIACgMIAAgLIAAgKQgBgHgCgHQgCgFgEgCQgDgCgFgBQgFABgDADg"
      );
    this.shape_106.setTransform(69.1, 56.7);

    this.shape_107 = new cjs.Shape();
    this.shape_107.graphics
      .f("#666666")
      .s()
      .p(
        "AgvBIIAAiNIAdAAIAAAQIABAAQAEgJAGgFQAHgEAIAAQALAAAHAFQAJAEAFAKQAFAJABAJQACAJAAAKQAAAJgDAIQgBALgFAHQgEAIgJAFIgJAEIgKABQgHAAgGgDQgGgDgEgIIAAAAIAAAwgAgHguQgEACgCADIgDAJIAAAKIAAAKIAAAMQABAEACAFQACADAEACQADACAEAAQAEAAAEgEQAEgDABgGQACgDAAgGIABgKIgBgJIgCgLQgBgGgEgDQgDgEgFAAQgEAAgDADg"
      );
    this.shape_107.setTransform(58.2, 58.4);

    this.shape_108 = new cjs.Shape();
    this.shape_108.graphics
      .f("#666666")
      .s()
      .p(
        "AgvBIIAAiNIAdAAIAAAQIAAAAQAFgJAHgFQAGgEAJAAQAKAAAIAFQAHAEAGAKQAFAJACAJQABAJAAAKQAAAJgCAIQgCALgFAHQgFAIgHAFIgJAEIgLABQgHAAgFgDQgHgDgDgIIgBAAIAAAwgAgHguQgDACgDADIgCAJIgBAKIAAAKIAAAMQAAAEADAFQADADADACQADACAEAAQAEAAAEgEQADgDACgGQACgDAAgGIAAgKIAAgJIgCgLQgCgGgDgDQgDgEgFAAQgEAAgDADg"
      );
    this.shape_108.setTransform(46.9, 58.4);

    this.shape_109 = new cjs.Shape();
    this.shape_109.graphics
      .f("#666666")
      .s()
      .p(
        "AgbA0QgHgDgFgHQgEgHAAgIIgBgPIAAhBIAfAAIAABBIAAAGIACAGQABACACACQACABAFAAQADAAAEgDQAEgCACgFQACgEAAgEIAAgJIAAg3IAfAAIAABpIgdAAIAAgTIAAAAQgEALgIAFIgGAEIgLABQgIAAgGgCg"
      );
    this.shape_109.setTransform(35.2, 56.8);

    this.shape_110 = new cjs.Shape();
    this.shape_110.graphics
      .f("#666666")
      .s()
      .p(
        "AgSBHQgKgCgIgFQgHgEgHgJQgFgHgDgLIAggHQADAMAHAEQAJAFAIAAIAJgBQAEgBADgCQADgBACgDQACgDAAgFQAAgEgDgDIgGgEIgIgEIgHgBIgSgEQgJgDgHgFQgHgDgEgIQgFgHAAgMQAAgKAEgJQAEgJAIgGQAHgGAKgDQAIgCAJgBQAKABAIABQAIACAIAEQAHAEAEAGQAGAHAEAJIgdAJQgDgJgGgDQgGgFgKAAIgFABIgGACIgFAEQgCADAAAEQAAAEACACIAGAFIAGACIAFABIAJACIAKADIAKADIAIAFQAKAGAFAGQAEAJAAALQAAAKgEAKQgFAJgJAHIgJAFIgLAEQgLADgJAAQgJAAgJgDg"
      );
    this.shape_110.setTransform(22.9, 54.9);

    this.shape_111 = new cjs.Shape();
    this.shape_111.graphics
      .f("#666666")
      .s()
      .p(
        "AgLAcQgFgDgFgDQgDgFgCgFQgDgGAAgGQAAgFACgGQACgFAEgEQAFgFAFgCQAGgCAFAAQAGAAAFACQAGACAEAFQAEAEADAFQACAGAAAFQAAAGgCAGQgDAFgEAEQgEAEgGADQgFACgGAAQgFAAgGgCg"
      );
    this.shape_111.setTransform(4.3, 54.9);

    this.shape_112 = new cjs.Shape();
    this.shape_112.graphics
      .f("#666666")
      .s()
      .p(
        "AgOA2QgIgCgGgEQgHgDgEgHQgGgGgBgIIAbgEQAAAEACADQACADAEABIAHADIAGAAIAFAAIAHgCIAEgDQACgCABgDIgCgFIgDgCIgDgBIgFgBIgHgBIgHgCIgJgCIgGgBQgJgEgHgFQgCgEgBgEQgCgFAAgFQAAgKAEgHQAEgHAGgEQAHgEAIgCQAIgCAGAAQAQAAAKAGQAGAEADAFQAFAFACAIIgWAGQgDgHgFgEQgGgDgHAAIgDABIgGABIgDACQgCADgBACQABAFAEADIAKACIAPACQAJABAHAEQAHAEAFAEQACAEABAEIACALQAAAIgEAIQgEAGgHAFQgHAFgJACQgIACgJAAQgGAAgIgBg"
      );
    this.shape_112.setTransform(313.9, 31.9);

    this.shape_113 = new cjs.Shape();
    this.shape_113.graphics
      .f("#666666")
      .s()
      .p(
        "AAPA2IAAg4IAAgIIgBgJQgCgEgCgCQgDgDgGAAQgDAAgDACQgDACgCAEQgDAFAAAEIgBAJIAAA4IgfAAIAAhpIAdAAIAAATIABAAQAFgLAHgFQADgCADgBQAFgCAGAAQAHAAAHADQAHACAFAHIADAHIACAIIAAAJIABAHIAABAg"
      );
    this.shape_113.setTransform(303.2, 31.8);

    this.shape_114 = new cjs.Shape();
    this.shape_114.graphics
      .f("#666666")
      .s()
      .p(
        "AgLA2QgFgBgFgCQgJgFgHgHQgGgHgDgLQgEgKAAgLQAAgKAEgLQADgJAHgIQAGgHAJgFIALgCIAKgCIALACIAKACQAKAFAGAIQAHAHADALQAEAJAAALQAAALgEAKQgEAKgGAHQgHAIgKAEQgJAEgLAAgAgIgeQgEADgCAFQgCAFAAAFIAAALIAAAJIACAMQABAGAEAEQADAEAGABQAGgBADgDQAEgDACgGIACgLIAAgKIAAgLQgBgHgCgHQgCgFgEgCQgDgCgFAAQgFAAgDADg"
      );
    this.shape_114.setTransform(291.9, 31.9);

    this.shape_115 = new cjs.Shape();
    this.shape_115.graphics
      .f("#666666")
      .s()
      .p("AgOBIIAAhoIAdAAIAABogAgOgqIAAgeIAdAAIAAAeg");
    this.shape_115.setTransform(283.5, 29.9);

    this.shape_116 = new cjs.Shape();
    this.shape_116.graphics
      .f("#666666")
      .s()
      .p(
        "AACBFQgFgBgGgEIgFgGIgDgIIgBgIIAAgJIAAgtIgRAAIAAgYIATAAIADgfIAZgDIAAAiIAWAAIAAAYIgWAAIAAApIAAAIIACAGQABACADAAIAHABIAGAAIAFgBIAAAYIgKABIgKABIgOgCg"
      );
    this.shape_116.setTransform(276.6, 30.3);

    this.shape_117 = new cjs.Shape();
    this.shape_117.graphics
      .f("#666666")
      .s()
      .p(
        "AgcA1QgGgBgFgFQgEgDgDgGQgCgGAAgHQAAgMAGgIQAHgGAKgEQAKgEALAAIAUgDIAAgCIAAgIQgBgDgCgDQgCgDgEgBIgHgBQgFAAgGADQgFAFAAAIIgdgEQABgJAFgGQAFgHAHgDQAHgFAJgBIAPgCIAIABIAJABIAJADQAEACADADQAEADACAEIADAIIABAJIAAAKIAAAvIABAIIABAIIgeAAIgCgIIAAgJQgHAKgHAFQgDACgEABIgLABQgHAAgGgCgAAFADIgIAEQgGACgDADQgEAEAAAFQAAAHAEADQADAFAHAAQADgBAEgCQAEgCADgEQADgFAAgFIABgLIAAgEg"
      );
    this.shape_117.setTransform(267.2, 31.9);

    this.shape_118 = new cjs.Shape();
    this.shape_118.graphics
      .f("#666666")
      .s()
      .p(
        "AgTAzQgJgEgHgIQgHgGgDgLQgDgJgBgMQABgKADgLQADgKAIgIQAGgHAKgFQAKgEALAAQAJAAAIADQAIADAHAFQAFAFAFAIQADAHABAKIgdACIgBgHIgDgHIgFgDQgDgCgEAAQgFAAgEADQgDADgCAEQgCAEgBAGIgBAKIABAJIACAKQABAFAEADQAEACAEAAQAJABAEgGQAEgGABgHIAdACQgBAKgDAHQgFAJgGAFQgGAGgJADQgIACgKAAQgKAAgKgEg"
      );
    this.shape_118.setTransform(255.9, 31.9);

    this.shape_119 = new cjs.Shape();
    this.shape_119.graphics
      .f("#666666")
      .s()
      .p("AgOBIIAAhoIAdAAIAABogAgOgqIAAgeIAdAAIAAAeg");
    this.shape_119.setTransform(247.5, 29.9);

    this.shape_120 = new cjs.Shape();
    this.shape_120.graphics
      .f("#666666")
      .s()
      .p(
        "AAPA2IAAg4IAAgIIgBgJQgCgEgCgCQgDgDgGAAQgDAAgDACQgDACgCAEQgDAFAAAEIgBAJIAAA4IgfAAIAAhpIAdAAIAAATIABAAQAFgLAHgFQADgCADgBQAFgCAGAAQAHAAAHADQAHACAFAHIADAHIACAIIAAAJIABAHIAABAg"
      );
    this.shape_120.setTransform(239.2, 31.8);

    this.shape_121 = new cjs.Shape();
    this.shape_121.graphics
      .f("#666666")
      .s()
      .p(
        "AgbA0QgHgDgFgHQgEgHAAgIIgBgPIAAhBIAfAAIAABBIAAAGIACAGQABACACACQACABAFAAQADAAAEgDQAEgCACgFQACgEAAgEIAAgJIAAg3IAfAAIAABpIgdAAIAAgTIAAAAQgEALgIAFIgGAEIgLABQgIAAgGgCg"
      );
    this.shape_121.setTransform(227.9, 32);

    this.shape_122 = new cjs.Shape();
    this.shape_122.graphics
      .f("#666666")
      .s()
      .p(
        "AAsA2IAAg2IAAgFIAAgFIAAgFIgBgEQgBgFgDgCQgEgCgFAAQgEAAgEADQgEABgBAEIgCAKIAAAKIAAA2IgdAAIAAg2IAAgJQAAgGgBgDQgBgFgDgCQgDgDgGAAQgGAAgDADQgDACgCAFIgCAJIAAAJIAAA2IgeAAIAAhpIAdAAIAAARIAAAAQAFgKAHgFQAIgEAKAAQALAAAFAEQAGAFAFAKIAFgIIAIgHQAIgEAKAAQAHAAAHADQAHADAFAFIAEAHIACAIIAAAIIAAAIIAABBg"
      );
    this.shape_122.setTransform(213.6, 31.8);

    this.shape_123 = new cjs.Shape();
    this.shape_123.graphics
      .f("#666666")
      .s()
      .p(
        "AAsA2IAAg2IAAgFIAAgFIAAgFIgBgEQgBgFgDgCQgEgCgFAAQgEAAgEADQgEABgBAEIgCAKIAAAKIAAA2IgdAAIAAg2IAAgJQAAgGgBgDQgBgFgDgCQgDgDgGAAQgGAAgDADQgDACgCAFIgCAJIAAAJIAAA2IgeAAIAAhpIAdAAIAAARIAAAAQAFgKAHgFQAIgEAKAAQALAAAFAEQAGAFAFAKIAFgIIAIgHQAIgEAKAAQAHAAAHADQAHADAFAFIAEAHIACAIIAAAIIAAAIIAABBg"
      );
    this.shape_123.setTransform(196.4, 31.8);

    this.shape_124 = new cjs.Shape();
    this.shape_124.graphics
      .f("#666666")
      .s()
      .p(
        "AgLA2QgFgBgFgCQgJgFgHgHQgGgHgDgLQgEgKAAgLQAAgKAEgLQADgJAHgIQAGgHAJgFIALgCIAKgCIALACIAKACQAKAFAGAIQAHAHADALQAEAJAAALQAAALgEAKQgEAKgGAHQgHAIgKAEQgJAEgLAAgAgIgeQgEADgCAFQgCAFAAAFIAAALIAAAJIACAMQABAGAEAEQADAEAGABQAGgBADgDQAEgDACgGIACgLIAAgKIAAgLQgBgHgCgHQgCgFgEgCQgDgCgFAAQgFAAgDADg"
      );
    this.shape_124.setTransform(182.2, 31.9);

    this.shape_125 = new cjs.Shape();
    this.shape_125.graphics
      .f("#666666")
      .s()
      .p(
        "AgYBEQgMgHgIgKQgIgKgEgOQgCgIgCgTQAAgNAEgOQAEgOAIgJQAIgLAMgFQANgHANAAQAbAAAPAPQAHAHAFALQADAKACANIgjADIgBgNQgCgFgDgEQgCgFgFgCQgFgCgHgBQgGAAgGAGQgEAEgDAIQgDAIgBAIIgBANIABAPQABAIADAHQADAGAGAFQAFAEAHAAQAGAAAEgCQAFgCADgEQADgEACgFIACgKIAhACQgBAMgFAKQgFAKgHAHQgIAGgKAEQgLAEgNAAQgNgBgMgFg"
      );
    this.shape_125.setTransform(169.5, 30);

    this.shape_126 = new cjs.Shape();
    this.shape_126.graphics
      .f("#666666")
      .s()
      .p(
        "AgTAzQgJgEgHgHQgHgHgEgKQgEgKAAgMQAAgJAEgLQADgKAHgIQAHgIAJgFQAKgEAKAAIAMACIAKADQALAFAGAJQAHAKACAKQADALgBAJIhCAAIAAAFQAAAJAFAIIAGAEQAEACADAAIAHgBIAGgEIAFgFQABgDAAgDIAdABIgBAFIgEAHIgGAIIgJAJQgFADgIADQgHACgJAAQgKAAgKgEgAATgMIgBgIIgDgHQgCgDgDgCQgDgCgFABQgDAAgEABIgGAFIgEAHIgBAIIAjAAg"
      );
    this.shape_126.setTransform(150.7, 31.9);

    this.shape_127 = new cjs.Shape();
    this.shape_127.graphics
      .f("#666666")
      .s()
      .p(
        "AgoBGIAAgYIAHABIAIAAQAIAAADgCQAEgDACgIIgnhoIAiAAIASA/IAUg/IAXAAIghBhIgGASQgCAIgFAGQgCAFgHAEQgHADgLAAIgPgBg"
      );
    this.shape_127.setTransform(140.1, 33.7);

    this.shape_128 = new cjs.Shape();
    this.shape_128.graphics
      .f("#666666")
      .s()
      .p("AgyBHIAAiOIBlAAIAAAcIhDAAIAAAeIA0AAIAAAZIg0AAIAAAfIBDAAIAAAcg");
    this.shape_128.setTransform(129.3, 30);

    this.shape_129 = new cjs.Shape();
    this.shape_129.graphics
      .f("#666666")
      .s()
      .p(
        "AgTAzQgJgEgHgHQgHgHgEgKQgEgKAAgMQAAgJAEgLQADgKAHgIQAHgIAJgFQAKgEAKAAIAMACIAKADQALAFAGAJQAHAKACAKQADALgBAJIhCAAIAAAFQAAAJAFAIIAGAEQAEACADAAIAHgBIAGgEIAFgFQABgDAAgDIAdABIgBAFIgEAHIgGAIIgJAJQgFADgIADQgHACgJAAQgKAAgKgEgAATgMIgBgIIgDgHQgCgDgDgCQgDgCgFABQgDAAgEABIgGAFIgEAHIgBAIIAjAAg"
      );
    this.shape_129.setTransform(110.9, 31.9);

    this.shape_130 = new cjs.Shape();
    this.shape_130.graphics
      .f("#666666")
      .s()
      .p("AgLA1IgkhpIAhAAIASBCIAVhCIAXAAIgkBpg");
    this.shape_130.setTransform(100.2, 31.9);

    this.shape_131 = new cjs.Shape();
    this.shape_131.graphics
      .f("#666666")
      .s()
      .p("AgOBIIAAhoIAdAAIAABogAgOgqIAAgeIAdAAIAAAeg");
    this.shape_131.setTransform(92.5, 29.9);

    this.shape_132 = new cjs.Shape();
    this.shape_132.graphics
      .f("#666666")
      .s()
      .p(
        "AACBFQgFgBgGgEIgFgGIgCgIIgCgIIAAgJIAAgtIgRAAIAAgYIATAAIADgfIAZgDIAAAiIAWAAIAAAYIgWAAIAAApIAAAIIABAGQACACADAAIAHABIAGAAIAFgBIAAAYIgKABIgKABIgOgCg"
      );
    this.shape_132.setTransform(85.6, 30.3);

    this.shape_133 = new cjs.Shape();
    this.shape_133.graphics
      .f("#666666")
      .s()
      .p(
        "AgbA2IAAhpIAbAAIAAAUIAAAAIADgIIAEgIIAHgEQAEgCAFAAIAFABIAAAeQgIAAgGADQgFADgDAFQgCAGgBAFIgBANIAAApg"
      );
    this.shape_133.setTransform(78.8, 31.8);

    this.shape_134 = new cjs.Shape();
    this.shape_134.graphics
      .f("#666666")
      .s()
      .p(
        "AgLA2QgFgBgFgCQgJgFgHgHQgGgHgDgLQgEgKAAgLQAAgKAEgLQADgJAHgIQAGgHAJgFIALgCIAKgCIALACIAKACQAKAFAGAIQAHAHADALQAEAJAAALQAAALgEAKQgEAKgGAHQgHAIgKAEQgJAEgLAAgAgIgeQgEADgCAFQgCAFAAAFIAAALIAAAJIACAMQABAGAEAEQADAEAGABQAGgBADgDQAEgDACgGIACgLIAAgKIAAgLQgBgHgCgHQgCgFgEgCQgDgCgFAAQgFAAgDADg"
      );
    this.shape_134.setTransform(69.1, 31.9);

    this.shape_135 = new cjs.Shape();
    this.shape_135.graphics
      .f("#666666")
      .s()
      .p(
        "AgvBIIAAiNIAdAAIAAAQIABAAQAEgJAGgFQAHgEAIAAQALAAAHAFQAJAEAFAKQAFAIABAKQACAJAAAKQAAAJgDAIQgBALgFAHQgEAIgJAFIgJAEIgKABQgHAAgGgDQgGgDgEgIIAAAAIAAAwgAgHgvQgEADgCADIgDAJIAAAKIAAAKIAAAMQABAEACAFQACADAEACQADACAEAAQAEAAAEgEQAEgDABgGQACgDAAgGIABgKIgBgJIgCgLQgBgGgEgDQgDgEgFAAQgEAAgDACg"
      );
    this.shape_135.setTransform(58.2, 33.6);

    this.shape_136 = new cjs.Shape();
    this.shape_136.graphics
      .f("#666666")
      .s()
      .p(
        "AgvBIIAAiNIAdAAIAAAQIAAAAQAFgJAHgFQAGgEAJAAQAKAAAIAFQAHAEAGAKQAFAIACAKQABAJAAAKQAAAJgCAIQgCALgFAHQgFAIgHAFIgJAEIgLABQgHAAgFgDQgHgDgDgIIgBAAIAAAwgAgHgvQgDADgDADIgCAJIgBAKIAAAKIAAAMQAAAEADAFQADADADACQADACAEAAQAEAAAEgEQADgDACgGQACgDAAgGIAAgKIAAgJIgCgLQgCgGgDgDQgDgEgFAAQgEAAgDACg"
      );
    this.shape_136.setTransform(46.9, 33.6);

    this.shape_137 = new cjs.Shape();
    this.shape_137.graphics
      .f("#666666")
      .s()
      .p(
        "AgbA0QgHgDgFgHQgEgHAAgIIgBgPIAAhBIAfAAIAABBIAAAGIACAGQABACACACQACABAFAAQADAAAEgDQAEgCACgFQACgEAAgEIAAgJIAAg3IAfAAIAABpIgdAAIAAgTIAAAAQgEALgIAFIgGAEIgLABQgIAAgGgCg"
      );
    this.shape_137.setTransform(35.2, 32);

    this.shape_138 = new cjs.Shape();
    this.shape_138.graphics
      .f("#666666")
      .s()
      .p(
        "AgSBHQgKgCgIgFQgHgEgHgJQgFgHgDgLIAggHQADAMAHAEQAJAFAIAAIAJgBQAEgBADgCQADgBACgDQACgDAAgEQAAgFgDgDIgGgEIgIgEIgHgBIgSgEQgJgDgHgFQgHgDgEgIQgFgHAAgMQAAgKAEgJQAEgJAIgGQAHgHAKgCQAIgCAJgBQAKABAIABQAIACAIAEQAHAEAEAGQAGAHAEAJIgdAKQgDgJgGgFQgGgEgKAAIgFABIgGACIgFAEQgCADAAAEQAAAEACACIAGAFIAGACIAFABIAJACIAKADIAKADIAIAEQAKAGAFAHQAEAJAAALQAAALgEAJQgFAJgJAHIgJAGIgLADQgLADgJAAQgJgBgJgCg"
      );
    this.shape_138.setTransform(22.9, 30);

    this.shape_139 = new cjs.Shape();
    this.shape_139.graphics
      .f("#666666")
      .s()
      .p(
        "AgLAbQgFgCgFgDQgDgFgCgFQgDgGAAgGQAAgFACgGQACgFAEgEQAFgEAFgDQAGgCAFAAQAGAAAFACQAGADAEAEQAEAEADAFQACAGAAAFQAAAGgCAGQgDAFgEAEQgEAEgGACQgFADgGAAQgFAAgGgDg"
      );
    this.shape_139.setTransform(4.3, 30);

    this.shape_140 = new cjs.Shape();
    this.shape_140.graphics
      .f("#666666")
      .s()
      .p(
        "AgTAzQgJgEgHgHQgHgHgEgKQgEgKAAgMQAAgJAEgLQADgKAHgIQAHgIAJgFQAKgEAKAAIAMACIAKADQALAFAGAJQAHAKACAKQADALgBAJIhCAAIAAAFQAAAJAFAIIAGAEQAEACADAAIAHgBIAGgEIAFgFQABgDAAgDIAdACIgBAEIgEAHIgGAIIgJAJQgFAEgIACQgHACgJAAQgKAAgKgEgAATgMIgBgIIgDgHQgCgDgDgCQgDgBgFAAQgDgBgEACIgGAFIgEAHIgBAIIAjAAg"
      );
    this.shape_140.setTransform(136.4, 7);

    this.shape_141 = new cjs.Shape();
    this.shape_141.graphics
      .f("#666666")
      .s()
      .p(
        "AgTAzQgJgEgHgIQgGgGgEgLQgEgJAAgMQAAgKAEgLQAEgKAHgIQAHgIAJgEQAKgEALAAQAJAAAIADQAIADAHAGQAFAEAEAIQAEAHACAKIgeACIgBgHIgDgGIgFgFQgDgBgEAAQgEAAgFADQgDADgCAEQgCAEgBAFIgBALIABAJIACAKQABAFAEADQAEACAEAAQAJAAAEgFQAEgFABgIIAeACQgCAKgEAHQgDAJgHAFQgHAFgIAEQgJACgJAAQgKAAgKgEg"
      );
    this.shape_141.setTransform(125.1, 7);

    this.shape_142 = new cjs.Shape();
    this.shape_142.graphics
      .f("#666666")
      .s()
      .p(
        "AgcA1QgGgCgFgEQgEgDgDgGQgCgFAAgIQAAgMAGgIQAHgGAKgEQAKgEALAAIAUgDIAAgCIAAgIQgBgDgCgDQgCgDgEgBIgHgBQgFAAgGADQgFAFAAAIIgdgEQABgJAFgGQAFgHAHgEQAHgDAJgCIAPgCIAIABIAJACIAJACQAEACADADQAEADACAEIADAIIABAJIAAAJIAAAwIABAIIABAIIgeAAIgCgIIAAgIQgHAJgHAEQgDADgEABIgLABQgHAAgGgCgAAFADIgIAEQgGABgDAEQgEAEAAAFQAAAHAEADQADAFAHAAQADgBAEgCQAEgCADgEQADgFAAgFIABgLIAAgEg"
      );
    this.shape_142.setTransform(113.8, 7);

    this.shape_143 = new cjs.Shape();
    this.shape_143.graphics
      .f("#666666")
      .s()
      .p(
        "AgvBIIAAiMIAdAAIAAAPIABAAQADgJAIgFQAGgEAJAAQAKAAAIAFQAHAEAGAKQAFAIABAKQACAJAAAKQAAAJgDAJQgBAJgFAJQgFAHgHAFIgJAEIgLABQgHAAgGgDQgGgEgDgHIgBAAIAAAwgAgHgvQgEACgCAFIgCAJIgBAJIAAAKIAAAMQAAAEADAFQACADAEACQAEACADAAQAFAAADgEQAEgEABgFQACgDAAgGIABgKIgBgJIgCgMQgBgFgEgEQgDgDgFAAQgDAAgEACg"
      );
    this.shape_143.setTransform(103, 8.7);

    this.shape_144 = new cjs.Shape();
    this.shape_144.graphics
      .f("#666666")
      .s()
      .p(
        "AgSBHQgKgCgIgFQgHgEgHgJQgFgHgDgKIAggIQADAMAIAEQAHAFAJAAIAJgBQADgBAEgCQADgBACgDQACgDAAgEQAAgFgDgDIgGgFIgIgDIgHgBIgSgFQgJgCgHgFQgHgDgEgIQgFgIAAgLQAAgKAEgJQAEgJAIgGQAHgHAKgCQAJgCAIgBQAKABAIABQAIACAIAEQAHAEAFAGQAFAHAEAJIgdAKQgDgJgGgFQgGgDgKAAIgFAAIgGACIgFAEQgCADAAAEQAAAEADACIAFAFIAGACIAFABIAJACIAKADIAKAEIAIADQAJAGAGAHQAEAJAAALQAAAKgEAKQgFAKgJAGIgJAGIgLADQgLACgJAAQgKAAgIgCg"
      );
    this.shape_144.setTransform(90.3, 5.2);

    this.shape_145 = new cjs.Shape();
    this.shape_145.graphics
      .f("#666666")
      .s()
      .p(
        "AgbA2IAAhoIAbAAIAAATIAAAAIADgIIAEgIIAHgEQAEgCAFAAIAFABIAAAeQgJAAgFADQgFADgDAFQgDAGAAAFIgBANIAAApg"
      );
    this.shape_145.setTransform(75, 6.9);

    this.shape_146 = new cjs.Shape();
    this.shape_146.graphics
      .f("#666666")
      .s()
      .p(
        "AgTAzQgJgEgHgHQgHgHgEgKQgEgKAAgMQAAgJAEgLQADgKAHgIQAHgIAJgFQAKgEAKAAIAMACIAKADQALAFAGAJQAHAKACAKQADALgBAJIhCAAIAAAFQAAAJAFAIIAGAEQAEACADAAIAHgBIAGgEIAFgFQABgDAAgDIAdACIgBAEIgEAHIgGAIIgJAJQgFAEgIACQgHACgJAAQgKAAgKgEgAATgMIgBgIIgDgHQgCgDgDgCQgDgBgFAAQgDgBgEACIgGAFIgEAHIgBAIIAjAAg"
      );
    this.shape_146.setTransform(65.2, 7);

    this.shape_147 = new cjs.Shape();
    this.shape_147.graphics
      .f("#666666")
      .s()
      .p(
        "AgvBIIAAiMIAdAAIAAAPIABAAQADgJAHgFQAHgEAJAAQAKAAAIAFQAHAEAGAKQAFAIABAKQACAJAAAKQAAAJgCAJQgCAJgFAJQgFAHgHAFIgJAEIgLABQgHAAgGgDQgGgEgEgHIAAAAIAAAwgAgHgvQgEACgCAFIgDAJIAAAJIAAAKIAAAMQABAEACAFQACADAEACQAEACADAAQAFAAADgEQAEgEABgFQACgDAAgGIABgKIgBgJIgCgMQgBgFgEgEQgDgDgFAAQgDAAgEACg"
      );
    this.shape_147.setTransform(54.4, 8.7);

    this.shape_148 = new cjs.Shape();
    this.shape_148.graphics
      .f("#666666")
      .s()
      .p(
        "AgLA2QgFgBgFgDQgJgEgHgHQgGgIgDgKQgEgKAAgLQAAgKAEgLQADgJAHgIQAGgHAJgFIALgCIAKgCIALACIAKACQAKAFAGAHQAHAIADAKQAEAKAAALQAAALgEAKQgEAKgGAHQgHAIgKAEQgJAEgLAAgAgIgeQgEADgCAFQgCAFAAAFIAAAKIAAAKIACAMQABAGAEAEQADAFAGAAQAGAAADgEQAEgDACgGIACgLIAAgKIAAgMQgBgHgCgGQgCgFgEgCQgDgDgFABQgFAAgDADg"
      );
    this.shape_148.setTransform(42.7, 7);

    this.shape_149 = new cjs.Shape();
    this.shape_149.graphics
      .f("#666666")
      .s()
      .p(
        "AgbA2IAAhoIAbAAIAAATIAAAAIADgIIAFgIIAGgEQAEgCAFAAIAFABIAAAeQgIAAgGADQgFADgDAFQgCAGgCAFIAAANIAAApg"
      );
    this.shape_149.setTransform(34, 6.9);

    this.shape_150 = new cjs.Shape();
    this.shape_150.graphics
      .f("#666666")
      .s()
      .p(
        "Ag3BHIAAiOIA2AAIATABQAKACAJAFQATAOAAAWQAAALgFAJQgEAIgHAHQgFAEgEACIgKADIgLABIgKAAIgVAAIAAA1gAgVgGIATAAIAJgBQAFAAAEgFQADgDABgEIABgGQAAgFgBgEQgCgDgEgDQgEgEgFAAIgHgBIgTAAg"
      );
    this.shape_150.setTransform(23.8, 5.2);

    this.shape_151 = new cjs.Shape();
    this.shape_151.graphics
      .f("#666666")
      .s()
      .p(
        "AgLAbQgFgCgFgDQgDgFgCgFQgDgGAAgGQAAgFACgFQACgGAEgEQAFgEAFgDQAGgCAFAAQAGAAAFACQAGADAEAEQAEAEADAGQACAFAAAFQAAAGgCAGQgDAFgEAEQgEAEgGACQgFADgGAAQgFAAgGgDg"
      );
    this.shape_151.setTransform(4.3, 5.2);

    this.timeline.addTween(
      cjs.Tween.get({})
        .to({
          state: [
            { t: this.shape_151 },
            { t: this.shape_150 },
            { t: this.shape_149 },
            { t: this.shape_148 },
            { t: this.shape_147 },
            { t: this.shape_146 },
            { t: this.shape_145 },
            { t: this.shape_144 },
            { t: this.shape_143 },
            { t: this.shape_142 },
            { t: this.shape_141 },
            { t: this.shape_140 },
            { t: this.shape_139 },
            { t: this.shape_138 },
            { t: this.shape_137 },
            { t: this.shape_136 },
            { t: this.shape_135 },
            { t: this.shape_134 },
            { t: this.shape_133 },
            { t: this.shape_132 },
            { t: this.shape_131 },
            { t: this.shape_130 },
            { t: this.shape_129 },
            { t: this.shape_128 },
            { t: this.shape_127 },
            { t: this.shape_126 },
            { t: this.shape_125 },
            { t: this.shape_124 },
            { t: this.shape_123 },
            { t: this.shape_122 },
            { t: this.shape_121 },
            { t: this.shape_120 },
            { t: this.shape_119 },
            { t: this.shape_118 },
            { t: this.shape_117 },
            { t: this.shape_116 },
            { t: this.shape_115 },
            { t: this.shape_114 },
            { t: this.shape_113 },
            { t: this.shape_112 },
            { t: this.shape_111 },
            { t: this.shape_110 },
            { t: this.shape_109 },
            { t: this.shape_108 },
            { t: this.shape_107 },
            { t: this.shape_106 },
            { t: this.shape_105 },
            { t: this.shape_104 },
            { t: this.shape_103 },
            { t: this.shape_102 },
            { t: this.shape_101 },
            { t: this.shape_100 },
            { t: this.shape_99 },
            { t: this.shape_98 },
            { t: this.shape_97 },
            { t: this.shape_96 },
            { t: this.shape_95 },
            { t: this.shape_94 },
            { t: this.shape_93 },
            { t: this.shape_92 },
            { t: this.shape_91 },
            { t: this.shape_90 },
            { t: this.shape_89 },
            { t: this.shape_88 },
            { t: this.shape_87 },
            { t: this.shape_86 },
            { t: this.shape_85 },
            { t: this.shape_84 },
            { t: this.shape_83 },
            { t: this.shape_82 },
            { t: this.shape_81 },
            { t: this.shape_80 },
            { t: this.shape_79 },
            { t: this.shape_78 },
            { t: this.shape_77 },
            { t: this.shape_76 },
            { t: this.shape_75 },
            { t: this.shape_74 },
            { t: this.shape_73 },
            { t: this.shape_72 },
            { t: this.shape_71 },
            { t: this.shape_70 },
            { t: this.shape_69 },
            { t: this.shape_68 },
            { t: this.shape_67 },
            { t: this.shape_66 },
            { t: this.shape_65 },
            { t: this.shape_64 },
            { t: this.shape_63 },
            { t: this.shape_62 },
            { t: this.shape_61 },
            { t: this.shape_60 },
            { t: this.shape_59 },
            { t: this.shape_58 },
            { t: this.shape_57 },
            { t: this.shape_56 },
            { t: this.shape_55 },
            { t: this.shape_54 },
            { t: this.shape_53 },
            { t: this.shape_52 },
            { t: this.shape_51 },
            { t: this.shape_50 },
            { t: this.shape_49 },
            { t: this.shape_48 },
            { t: this.shape_47 },
            { t: this.shape_46 },
            { t: this.shape_45 },
            { t: this.shape_44 },
            { t: this.shape_43 },
            { t: this.shape_42 },
            { t: this.shape_41 },
            { t: this.shape_40 },
            { t: this.shape_39 },
            { t: this.shape_38 },
            { t: this.shape_37 },
            { t: this.shape_36 },
            { t: this.shape_35 },
            { t: this.shape_34 },
            { t: this.shape_33 },
            { t: this.shape_32 },
            { t: this.shape_31 },
            { t: this.shape_30 },
            { t: this.shape_29 },
            { t: this.shape_28 },
            { t: this.shape_27 },
            { t: this.shape_26 },
            { t: this.shape_25 },
            { t: this.shape_24 },
            { t: this.shape_23 },
            { t: this.shape_22 },
            { t: this.shape_21 },
            { t: this.shape_20 },
            { t: this.shape_19 },
            { t: this.shape_18 },
            { t: this.shape_17 },
            { t: this.shape_16 },
            { t: this.shape_15 },
            { t: this.shape_14 },
            { t: this.shape_13 },
            { t: this.shape_12 },
            { t: this.shape_11 },
            { t: this.shape_10 },
            { t: this.shape_9 },
            { t: this.shape_8 },
            { t: this.shape_7 },
            { t: this.shape_6 },
            { t: this.shape_5 },
            { t: this.shape_4 },
            { t: this.shape_3 },
            { t: this.shape_2 },
            { t: this.shape_1 },
            { t: this.shape }
          ]
        })
        .wait(1)
    );
  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = new cjs.Rectangle(-4, -9.2, 388.2, 202.8);

  (lib.text88 = function(mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {});

    // Layer 1
    this.shape = new cjs.Shape();
    this.shape.graphics
      .f("#000000")
      .s()
      .p(
        "AgOBBQgHgBgFgDQgKgGgFgJQgFgLAAgMIgCgXQAAgMACgMQACgMAFgJQAFgKAKgFQALgGAOAAQAPAAAJAFQAKAEAEAJQAGAIACANQACALAAAQIAAAFIhAAAIAAALIABALIADAJIAFAHQADACADABQAIAAAEgHQADgFACgNIAeAAQgBAWgLAMQgLAMgYAAQgHAAgHgCgAgGgpQgDACgCAEIgDAIIgBAJIAAAFIAgAAIgBgMQAAgHgDgDQgBgFgDgCQgEgBgFAAQgCgBgEADg"
      );
    this.shape.setTransform(215, 15.6);

    this.shape_1 = new cjs.Shape();
    this.shape_1.graphics
      .f("#000000")
      .s()
      .p(
        "AgWBAQgJgCgGgGQgFgEgCgIQgCgIAAgJIAAgFIAeAAIAAAFQAAAIAEAFQAEAFAIABQAGAAAFgFQAFgEAAgHQAAgHgEgDIgIgEIgWgJQgNgFgHgHQgEgEgCgGQgBgFAAgHQAAgIACgHQADgHAGgFQAGgGAIgDQAKgDAKAAQAMAAAIADQAIACAGAEQAKAKAAASIAAAFIgdAAQAAgKgEgFQgDgEgIAAQgEgBgFAEQgFAEAAAGQAAAGADADQADAEAIACIATAIQAPAEAHAHQAGAIAAAQQAAAKgDAHQgEAIgGAFQgHAFgIACQgJACgKAAQgNAAgJgDg"
      );
    this.shape_1.setTransform(204.1, 15.6);

    this.shape_2 = new cjs.Shape();
    this.shape_2.graphics
      .f("#000000")
      .s()
      .p("AgPBWIAAh/IAfAAIAAB/gAgPg5IAAgcIAfAAIAAAcg");
    this.shape_2.setTransform(195.9, 13.4);

    this.shape_3 = new cjs.Shape();
    this.shape_3.graphics
      .f("#000000")
      .s()
      .p(
        "AgUBAQgJgDgHgHQgGgJgDgNQgDgNAAgTQAAgSAEgNQAEgNAHgIQAHgHAJgEQAKgDAKAAQALAAAJAEQAIADAHAHQAFAGADAKQADAIAAAMIggAAIgBgJIgBgIQgCgEgDgDQgDgCgEAAQgFAAgDADQgEACgCAGQgCAFgBAJIAAARIAAAUQABAJACAGQACAFADADQAEACADABQAJgBAEgHQADgHAAgQIAgAAQAAANgDAKQgDAJgFAHQgMANgaAAQgLAAgJgDg"
      );
    this.shape_3.setTransform(187.5, 15.6);

    this.shape_4 = new cjs.Shape();
    this.shape_4.graphics
      .f("#000000")
      .s()
      .p(
        "AggBCIAAh/IAfAAIAAARQAEgJAHgGQAHgGAKAAIAEAAIACABIAAAfIgEAAIgGAAIgIABQgFABgEADQgDADgCAEQgBAFAAAGIAABMg"
      );
    this.shape_4.setTransform(178.5, 15.4);

    this.shape_5 = new cjs.Shape();
    this.shape_5.graphics
      .f("#000000")
      .s()
      .p(
        "AgOBBQgHgBgFgDQgKgGgFgJQgFgLgBgMIgBgXQAAgMACgMQACgMAFgJQAFgKALgFQAKgGAPAAQAOAAAJAFQAKAEAEAJQAGAIACANQACALAAAQIAAAFIg/AAIAAALIAAALIADAJIAFAHQADACADABQAIAAAEgHQAEgFABgNIAeAAQgBAWgLAMQgLAMgYAAQgHAAgHgCgAgGgpQgDACgCAEIgDAIIAAAJIAAAFIAfAAIgBgMQgBgHgCgDQgBgFgDgCQgEgBgEAAQgDgBgEADg"
      );
    this.shape_5.setTransform(168.5, 15.6);

    this.shape_6 = new cjs.Shape();
    this.shape_6.graphics
      .f("#000000")
      .s()
      .p("AATBAIgTgqIgSAqIgiAAIAjhBIgig+IAjAAIAQAnIARgnIAjAAIgiA+IAjBBg");
    this.shape_6.setTransform(157.4, 15.6);

    this.shape_7 = new cjs.Shape();
    this.shape_7.graphics
      .f("#000000")
      .s()
      .p("AgvBVIAAipIBdAAIAAAcIg7AAIAAAoIA4AAIAAAbIg4AAIAAAuIA+AAIAAAcg");
    this.shape_7.setTransform(146.5, 13.5);

    this.shape_8 = new cjs.Shape();
    this.shape_8.graphics
      .f("#000000")
      .s()
      .p("AgPBVIAAipIAfAAIAACpg");
    this.shape_8.setTransform(131.7, 13.5);

    this.shape_9 = new cjs.Shape();
    this.shape_9.graphics
      .f("#000000")
      .s()
      .p(
        "AggBAQgGgDgEgFQgDgFgCgHQgCgHAAgGQAAgKACgGQACgGAEgFQAEgEAGgCQAGgDAJgCIARgGQAHgCADgDQADgDAAgGQAAgIgDgEQgEgFgHABQgHgBgEAFQgEAEAAAJIAAADIgdAAIAAgDQAAgLADgIQAEgHAGgFQAGgFAIgCQAJgCAIAAQAOAAAJADQAJADAFAFQAFAFACAIQACAHAAAJIAABBIABAPIADAKIggAAIgCgGIgCgHIAAAAQgGAKgIADQgFADgMAAQgJAAgGgDgAAHAEIgHADQgIACgEAEQgFAGAAAJQAAAGADAGQADAFAHABIAFgCQADgBADgDQADgCACgDQACgFAAgEIAAgag"
      );
    this.shape_9.setTransform(123, 15.6);

    this.shape_10 = new cjs.Shape();
    this.shape_10.graphics
      .f("#000000")
      .s()
      .p(
        "AAMBTIgNgBQgGgCgDgEQgEgEgBgGIgBgQIAAhIIgRAAIAAgXIARAAIAAglIAfAAIAAAlIATAAIAAAXIgTAAIAABEQAAAHACADQADAEAGAAIAEAAIAEgBIAAAXIgKABg"
      );
    this.shape_10.setTransform(113.9, 13.8);

    this.shape_11 = new cjs.Shape();
    this.shape_11.graphics
      .f("#000000")
      .s()
      .p(
        "AAPBCIAAhXQAAgKgDgEQgDgEgIAAQgPAAAAAVIAABUIghAAIAAh/IAfAAIAAAPQAGgKAIgEQAHgFAKAAQARAAAIAJQAEAEADAHQACAHAAAKIAABeg"
      );
    this.shape_11.setTransform(104.3, 15.4);

    this.shape_12 = new cjs.Shape();
    this.shape_12.graphics
      .f("#000000")
      .s()
      .p(
        "AgOBBQgHgBgFgDQgKgGgFgJQgFgLAAgMIgCgXQAAgMACgMQACgMAFgJQAFgKAKgFQALgGAOAAQAPAAAJAFQAKAEAEAJQAGAIACANQACALAAAQIAAAFIhAAAIAAALIABALIADAJIAFAHQADACADABQAIAAAEgHQADgFACgNIAeAAQgBAWgLAMQgLAMgYAAQgHAAgHgCgAgGgpQgDACgCAEIgDAIIgBAJIAAAFIAgAAIgBgMQgBgHgBgDQgCgFgEgCQgDgBgFAAQgCgBgEADg"
      );
    this.shape_12.setTransform(92.7, 15.6);

    this.shape_13 = new cjs.Shape();
    this.shape_13.graphics
      .f("#000000")
      .s()
      .p(
        "AAsBVIAAiHIggCHIgYAAIgfiHIAAAAIAACHIgfAAIAAipIAyAAIAYB3IAAAAIAZh3IAyAAIAACpg"
      );
    this.shape_13.setTransform(78.3, 13.5);

    this.shape_14 = new cjs.Shape();
    this.shape_14.graphics
      .f("#000000")
      .s()
      .p("AgOA+IAAgmIAdAAIAAAmgAgOgXIAAgmIAdAAIAAAmg");
    this.shape_14.setTransform(60.8, 15.8);

    this.shape_15 = new cjs.Shape();
    this.shape_15.graphics
      .f("#000000")
      .s()
      .p(
        "AgzBUQAAgLACgJQADgLAEgIQAFgJAHgIIAQgSIAOgLIAIgJIAFgJIADgJIAAgMQAAgKgEgGQgEgFgIAAQgFAAgEADQgDADgDAEQgCAFAAAGIgBAMIghAAIAAgGQAAgMADgJQADgKAHgFQANgNAZgBQAaABAMALQAGAHAEAIQADAIAAAMQAAAIgCAHQgBAIgDAFQgDAHgFAFIgNAMIgTARQgGAIgEAGQgEAHgBAFIA+AAIAAAag"
      );
    this.shape_15.setTransform(52.1, 13.6);

    this.shape_16 = new cjs.Shape();
    this.shape_16.graphics
      .f("#000000")
      .s()
      .p(
        "AgxBWIAAioIAgAAIAAAOQAGgJAHgFQAFgDAKAAQAUgBAJARQAFAHACAOQADANAAARQAAASgDAMQgCANgFAHQgEAIgIADQgHAFgKAAQgKgBgFgDQgGgEgFgHIgBAAIAAA1gAgHg5QgEACgCAGQgDALAAAUQAAAUADAKQADALAKAAQAKAAADgLQAEgKAAgUQAAgUgEgLQgBgGgDgCQgEgDgFAAQgEAAgDADg"
      );
    this.shape_16.setTransform(34.8, 17.5);

    this.shape_17 = new cjs.Shape();
    this.shape_17.graphics
      .f("#000000")
      .s()
      .p(
        "AgOBBQgHgBgFgDQgKgGgFgJQgFgLgBgMIgBgXQAAgMACgMQACgMAFgJQAFgKALgFQAKgGAPAAQAOAAAJAFQAKAEAEAJQAGAIACANQACALAAAQIAAAFIg/AAIAAALIAAALIADAJIAFAHQADACADABQAIAAAEgHQAEgFABgNIAeAAQgBAWgLAMQgLAMgYAAQgHAAgHgCgAgGgpQgDACgCAEIgDAIIAAAJIAAAFIAfAAIgBgMQgBgHgCgDQgBgFgDgCQgEgBgEAAQgDgBgEADg"
      );
    this.shape_17.setTransform(23.1, 15.6);

    this.shape_18 = new cjs.Shape();
    this.shape_18.graphics
      .f("#000000")
      .s()
      .p(
        "AANBTIgOgBQgGgCgDgEQgEgEgBgGIgBgQIAAhIIgRAAIAAgXIARAAIAAglIAfAAIAAAlIATAAIAAAXIgTAAIAABEQAAAHACADQADAEAGAAIAFAAIADgBIAAAXIgKABg"
      );
    this.shape_18.setTransform(14.1, 13.8);

    this.shape_19 = new cjs.Shape();
    this.shape_19.graphics
      .f("#000000")
      .s()
      .p(
        "AgbBVQgKgDgGgGQgMgNAAgYIAAgHIAiAAIAAAFIABALQAAAFADADQADADAEACQAFACAFABQAIgBAGgEQADgDABgFQACgDABgGQgBgGgCgEQgBgEgDgDQgEgDgGgDIgNgGQgLgEgIgFQgJgEgGgEQgFgGgDgIQgDgJAAgKQAAgMAFgKQADgJAHgHQAHgGAKgDQAJgDAMAAQAKAAAKADQAKACAHAGQAHAFAEAJQAEAJAAAMIAAAEIgiAAQAAgMgDgGQgFgHgJAAQgFAAgEACQgDABgDADIgDAHIgBAHQAAAIADAFQAEAGALAEIAZAMQAKAFAGACQAGAFAEAFQAEAGABAGQACAHAAAIQgBANgEAJQgEALgHAGQgJAGgKADQgLADgMAAQgPAAgLgDg"
      );
    this.shape_19.setTransform(4.3, 13.5);

    this.timeline.addTween(
      cjs.Tween.get({})
        .to({
          state: [
            { t: this.shape_19 },
            { t: this.shape_18 },
            { t: this.shape_17 },
            { t: this.shape_16 },
            { t: this.shape_15 },
            { t: this.shape_14 },
            { t: this.shape_13 },
            { t: this.shape_12 },
            { t: this.shape_11 },
            { t: this.shape_10 },
            { t: this.shape_9 },
            { t: this.shape_8 },
            { t: this.shape_7 },
            { t: this.shape_6 },
            { t: this.shape_5 },
            { t: this.shape_4 },
            { t: this.shape_3 },
            { t: this.shape_2 },
            { t: this.shape_1 },
            { t: this.shape }
          ]
        })
        .wait(1)
    );
  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = new cjs.Rectangle(-4, -3, 250.6, 60.7);

  (lib.text87 = function(mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {});

    // Layer 1
    this.shape = new cjs.Shape();
    this.shape.graphics
      .f("#000000")
      .s()
      .p("AATBAIgTgqIgSAqIgiAAIAjhBIgig+IAjAAIAQAnIARgnIAjAAIgiA+IAjBBg");
    this.shape.setTransform(116.6, 15.6);

    this.shape_1 = new cjs.Shape();
    this.shape_1.graphics
      .f("#000000")
      .s()
      .p(
        "AggBAQgGgDgEgFQgDgFgCgHQgCgHAAgGQAAgKACgGQACgGAEgFQAEgEAGgCQAGgDAJgCIARgGQAHgCADgDQADgDAAgGQAAgIgDgEQgEgFgHABQgHgBgEAFQgEAEAAAJIAAADIgdAAIAAgDQAAgLADgIQAEgHAGgFQAGgFAIgCQAJgCAIAAQAOAAAJADQAJADAFAFQAFAFACAIQACAHAAAJIAABBIABAPIADAKIggAAIgCgGIgCgHIAAAAQgGAKgIADQgFADgMAAQgJAAgGgDgAAHAEIgHADQgIACgEAEQgFAGAAAJQAAAGADAGQADAFAHABIAFgCQADgBADgDQADgCACgDQACgFAAgEIAAgag"
      );
    this.shape_1.setTransform(105.2, 15.6);

    this.shape_2 = new cjs.Shape();
    this.shape_2.graphics
      .f("#000000")
      .s()
      .p("AgPBVIAAipIAfAAIAACpg");
    this.shape_2.setTransform(96.7, 13.5);

    this.shape_3 = new cjs.Shape();
    this.shape_3.graphics
      .f("#000000")
      .s()
      .p(
        "AgOBBQgHgBgFgDQgKgGgFgJQgFgLgBgMIgBgXQAAgMACgMQACgMAFgJQAFgKALgFQAKgGAPAAQAOAAAJAFQAKAEAFAJQAFAIACANQACALAAAQIAAAFIg/AAIAAALIAAALIADAJIAFAHQADACADABQAIAAAEgHQAEgFABgNIAeAAQgBAWgLAMQgLAMgYAAQgHAAgHgCgAgGgpQgDACgCAEIgDAIIAAAJIAAAFIAfAAIgBgMQgBgHgCgDQgBgFgDgCQgEgBgEAAQgEgBgDADg"
      );
    this.shape_3.setTransform(88.3, 15.6);

    this.shape_4 = new cjs.Shape();
    this.shape_4.graphics
      .f("#000000")
      .s()
      .p(
        "AAUBVQgDgDAAgFIgBgKIgBghQgBgKgEgFQgFgGgJAAIgSAAIAABIIgjAAIAAipIA/AAQAKAAAJADQAIACAGAGQAGAFADAJQADAIAAALQAAARgHALQgHALgPABIAAABIAMADQAEACAEADQACADACAGQACAFABAHIAAAKIABANIACAVQABAHAEADIAAABgAgWgJIAPAAQAFAAADgCQAFgBAEgDQADgDACgFQACgFAAgHQAAgMgHgGQgFgGgLAAIgQAAg"
      );
    this.shape_4.setTransform(76.4, 13.5);

    this.shape_5 = new cjs.Shape();
    this.shape_5.graphics
      .f("#000000")
      .s()
      .p("AgOA+IAAgmIAdAAIAAAmgAgOgXIAAgmIAdAAIAAAmg");
    this.shape_5.setTransform(60.8, 15.8);

    this.shape_6 = new cjs.Shape();
    this.shape_6.graphics
      .f("#000000")
      .s()
      .p("AAABUIAAh1IghAAIAAgXIADAAQARAAAKgHQAIgGADgPIAaAAIAACog");
    this.shape_6.setTransform(50.8, 13.6);

    this.shape_7 = new cjs.Shape();
    this.shape_7.graphics
      .f("#000000")
      .s()
      .p(
        "AgxBWIAAioIAgAAIAAAOQAGgJAHgFQAFgDAKAAQAUgBAJARQAFAHACAOQADANAAARQAAASgDAMQgCANgFAHQgEAIgIADQgHAFgKAAQgKgBgFgDQgGgEgFgHIgBAAIAAA1gAgHg5QgEACgCAGQgDALAAAUQAAAUADAKQADALAKAAQAKAAADgLQAEgKAAgUQAAgUgEgLQgBgGgDgCQgEgDgFAAQgEAAgDADg"
      );
    this.shape_7.setTransform(34.8, 17.5);

    this.shape_8 = new cjs.Shape();
    this.shape_8.graphics
      .f("#000000")
      .s()
      .p(
        "AgOBBQgHgBgFgDQgKgGgFgJQgFgLgBgMIgBgXQAAgMACgMQACgMAFgJQAFgKALgFQAKgGAPAAQAOAAAJAFQAKAEAEAJQAGAIACANQACALAAAQIAAAFIg/AAIAAALIAAALIADAJIAFAHQADACADABQAIAAAEgHQAEgFABgNIAeAAQgBAWgLAMQgLAMgYAAQgHAAgHgCgAgGgpQgDACgCAEIgDAIIAAAJIAAAFIAfAAIgBgMQgBgHgCgDQgBgFgDgCQgEgBgEAAQgDgBgEADg"
      );
    this.shape_8.setTransform(23.1, 15.6);

    this.shape_9 = new cjs.Shape();
    this.shape_9.graphics
      .f("#000000")
      .s()
      .p(
        "AANBTIgOgBQgGgCgDgEQgEgEgBgGIgBgQIAAhIIgRAAIAAgXIARAAIAAglIAfAAIAAAlIATAAIAAAXIgTAAIAABEQAAAHACADQADAEAGAAIAFAAIADgBIAAAXIgKABg"
      );
    this.shape_9.setTransform(14.1, 13.8);

    this.shape_10 = new cjs.Shape();
    this.shape_10.graphics
      .f("#000000")
      .s()
      .p(
        "AgbBVQgKgDgGgGQgMgNAAgYIAAgHIAiAAIAAAFIABALQAAAFADADQADADAEACQAFACAFABQAIgBAGgEQADgDABgFQACgDABgGQgBgGgCgEQgBgEgDgDQgEgDgGgDIgNgGQgLgEgIgFQgJgEgGgEQgFgGgDgIQgDgJAAgKQAAgMAFgKQADgJAHgHQAHgGAKgDQAJgDAMAAQAKAAAKADQAKACAHAGQAHAFAEAJQAEAJAAAMIAAAEIgiAAQAAgMgDgGQgFgHgJAAQgFAAgEACQgDABgDADIgDAHIgBAHQAAAIADAFQAEAGALAEIAZAMQAKAFAGACQAGAFAEAFQAEAGABAGQACAHAAAIQgBANgEAJQgEALgHAGQgJAGgKADQgLADgMAAQgPAAgLgDg"
      );
    this.shape_10.setTransform(4.3, 13.5);

    this.timeline.addTween(
      cjs.Tween.get({})
        .to({
          state: [
            { t: this.shape_10 },
            { t: this.shape_9 },
            { t: this.shape_8 },
            { t: this.shape_7 },
            { t: this.shape_6 },
            { t: this.shape_5 },
            { t: this.shape_4 },
            { t: this.shape_3 },
            { t: this.shape_2 },
            { t: this.shape_1 },
            { t: this.shape }
          ]
        })
        .wait(1)
    );
  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = new cjs.Rectangle(-4, -3, 142.7, 60.7);

  (lib.text86 = function(mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {});

    // Layer 1
    this.shape = new cjs.Shape();
    this.shape.graphics
      .f("#000000")
      .s()
      .p("AgOA+IAAgmIAdAAIAAAmgAgOgXIAAgmIAdAAIAAAmg");
    this.shape.setTransform(81.1, 15.8);

    this.shape_1 = new cjs.Shape();
    this.shape_1.graphics
      .f("#000000")
      .s()
      .p(
        "AgOBBQgHgBgFgDQgKgGgFgJQgEgLgBgMIgCgXQAAgMACgMQACgMAFgJQAGgKAJgFQALgGAOAAQAPAAAJAFQAJAEAGAJQAFAIACANQACALAAAQIAAAFIhAAAIAAALIABALIADAJIAFAHQADACADABQAIAAAEgHQADgFACgNIAeAAQgBAWgLAMQgLAMgYAAQgHAAgHgCgAgGgpQgDACgCAEIgDAIIgBAJIAAAFIAgAAIgBgMQAAgHgCgDQgCgFgEgCQgCgBgGAAQgDgBgDADg"
      );
    this.shape_1.setTransform(72.7, 15.6);

    this.shape_2 = new cjs.Shape();
    this.shape_2.graphics
      .f("#000000")
      .s()
      .p(
        "AgWBAQgJgCgGgGQgFgEgCgIQgCgIAAgJIAAgFIAeAAIAAAFQAAAIAEAFQAEAFAIABQAGAAAFgFQAFgEAAgHQAAgHgEgDIgIgEIgWgJQgNgFgHgHQgEgEgCgGQgBgFAAgHQAAgIACgHQADgHAGgFQAGgGAIgDQAKgDAKAAQAMAAAIADQAIACAGAEQAKAKAAASIAAAFIgdAAQAAgKgEgFQgDgEgIAAQgEgBgFAEQgFAEAAAGQAAAGADADQADAEAIACIATAIQAPAEAHAHQAGAIAAAQQAAAKgDAHQgEAIgGAFQgHAFgIACQgJACgKAAQgNAAgJgDg"
      );
    this.shape_2.setTransform(61.8, 15.6);

    this.shape_3 = new cjs.Shape();
    this.shape_3.graphics
      .f("#000000")
      .s()
      .p("AgPBWIAAh/IAfAAIAAB/gAgPg5IAAgcIAfAAIAAAcg");
    this.shape_3.setTransform(53.6, 13.4);

    this.shape_4 = new cjs.Shape();
    this.shape_4.graphics
      .f("#000000")
      .s()
      .p(
        "AgUBAQgKgDgFgHQgHgJgCgNQgEgNAAgTQAAgSAEgNQAEgNAHgIQAHgHAKgEQAJgDAKAAQALAAAJAEQAIADAHAHQAFAGADAKQADAIAAAMIggAAIAAgJIgDgIQgBgEgDgDQgDgCgEAAQgEAAgEADQgEACgCAGQgCAFgBAJIAAARIAAAUQABAJACAGQACAFADADQAEACADABQAJgBADgHQAEgHAAgQIAgAAQAAANgDAKQgDAJgFAHQgMANgaAAQgLAAgJgDg"
      );
    this.shape_4.setTransform(45.2, 15.6);

    this.shape_5 = new cjs.Shape();
    this.shape_5.graphics
      .f("#000000")
      .s()
      .p(
        "AggBCIAAh/IAfAAIAAARQAEgJAHgGQAHgGALAAIACAAIADABIAAAfIgEAAIgGAAIgJABQgEABgEADQgDADgCAEQgBAFAAAGIAABMg"
      );
    this.shape_5.setTransform(36.2, 15.4);

    this.shape_6 = new cjs.Shape();
    this.shape_6.graphics
      .f("#000000")
      .s()
      .p(
        "AgOBBQgHgBgFgDQgKgGgFgJQgFgLAAgMIgCgXQAAgMACgMQACgMAFgJQAFgKAKgFQALgGAOAAQAPAAAJAFQAKAEAEAJQAGAIACANQACALAAAQIAAAFIhAAAIAAALIABALIADAJIAFAHQADACADABQAIAAAEgHQADgFACgNIAeAAQgBAWgLAMQgLAMgYAAQgHAAgHgCgAgGgpQgDACgCAEIgDAIIgBAJIAAAFIAgAAIgBgMQgBgHgBgDQgCgFgEgCQgDgBgFAAQgCgBgEADg"
      );
    this.shape_6.setTransform(26.1, 15.6);

    this.shape_7 = new cjs.Shape();
    this.shape_7.graphics
      .f("#000000")
      .s()
      .p("AATBAIgTgqIgSAqIgiAAIAjhBIgig+IAjAAIAQAnIARgnIAjAAIgiA+IAjBBg");
    this.shape_7.setTransform(15, 15.6);

    this.shape_8 = new cjs.Shape();
    this.shape_8.graphics
      .f("#000000")
      .s()
      .p("AgwBVIAAipIBfAAIAAAcIg8AAIAAAoIA3AAIAAAbIg3AAIAAAuIA+AAIAAAcg");
    this.shape_8.setTransform(4.1, 13.5);

    this.timeline.addTween(
      cjs.Tween.get({})
        .to({
          state: [
            { t: this.shape_8 },
            { t: this.shape_7 },
            { t: this.shape_6 },
            { t: this.shape_5 },
            { t: this.shape_4 },
            { t: this.shape_3 },
            { t: this.shape_2 },
            { t: this.shape_1 },
            { t: this.shape }
          ]
        })
        .wait(1)
    );
  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = new cjs.Rectangle(-4, -3, 99.5, 60.7);

  (lib.text83 = function(mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {});

    // Layer 1
    this.shape = new cjs.Shape();
    this.shape.graphics
      .f("#000000")
      .s()
      .p(
        "AgpBVIAAgZIAJABQAJAAAEgFQAEgFABgIIglh/IAjAAIARBXIABAAIAQhXIAiAAIggB3QgEAQgEAKQgEAKgFAFQgEAFgHACQgIACgLAAg"
      );
    this.shape.setTransform(87.9, 17.7);

    this.shape_1 = new cjs.Shape();
    this.shape_1.graphics
      .f("#000000")
      .s()
      .p(
        "AggBCIAAh/IAfAAIAAARQAEgJAHgGQAHgGALAAIADAAIACABIAAAfIgEAAIgGAAIgJABQgEABgEADQgDADgCAEQgBAFAAAGIAABMg"
      );
    this.shape_1.setTransform(79.2, 15.4);

    this.shape_2 = new cjs.Shape();
    this.shape_2.graphics
      .f("#000000")
      .s()
      .p(
        "AgOBBQgHgBgFgDQgKgGgFgJQgEgLgCgMIgBgXQAAgMACgMQACgMAFgJQAFgKAKgFQALgGAOAAQAPAAAJAFQAKAEAEAJQAGAIACANQACALAAAQIAAAFIg/AAIAAALIAAALIADAJIAFAHQADACADABQAIAAAEgHQADgFACgNIAeAAQgBAWgLAMQgLAMgYAAQgHAAgHgCgAgGgpQgDACgCAEIgDAIIAAAJIAAAFIAfAAIgBgMQgBgHgCgDQgBgFgDgCQgDgBgFAAQgDgBgEADg"
      );
    this.shape_2.setTransform(69.1, 15.6);

    this.shape_3 = new cjs.Shape();
    this.shape_3.graphics
      .f("#000000")
      .s()
      .p(
        "AgjBOQgMgIAAgRIAgAAQAAAGAFAEIAFADIAFAAQAJAAAEgGQAEgHAAgJIAAgRIAAAAQgFAHgHAFQgGADgIAAQgTAAgKgOQgFgIgDgNQgCgKAAgSIABgXQABgMAEgJQAFgJAIgHQAEgCAFgCQAFgCAHABQAHAAAGADQAHAEAFALIAAAAIAAgPIAgAAIAAB5QAAAZgMAMQgHAGgKAEQgKACgNAAQgVAAgLgJgAgHg6QgDACgCAFIgDAOIAAAXIAAAMQABAFACAEQACAEADADQADADAEAAQAFAAADgDQAEgDACgEQACgFAAgFIABgPQAAgYgDgJQgEgKgKAAQgDAAgEADg"
      );
    this.shape_3.setTransform(57.4, 17.6);

    this.shape_4 = new cjs.Shape();
    this.shape_4.graphics
      .f("#000000")
      .s()
      .p(
        "AggBAQgGgDgEgFQgDgFgCgHQgCgHAAgGQAAgKACgGQACgGAEgFQAEgEAGgCQAGgDAJgCIARgGQAHgCADgDQADgDAAgGQAAgIgDgEQgEgFgHABQgHgBgEAFQgEAEAAAJIAAADIgdAAIAAgDQAAgLADgIQAEgHAGgFQAGgFAIgCQAJgCAIAAQAOAAAJADQAJADAFAFQAFAFACAIQACAHAAAJIAABBIABAPIADAKIggAAIgCgGIgCgHIAAAAQgGAKgIADQgFADgMAAQgJAAgGgDgAAHAEIgHADQgIACgEAEQgFAGAAAJQAAAGADAGQADAFAHABIAFgCQADgBADgDQADgCACgDQACgFAAgEIAAgag"
      );
    this.shape_4.setTransform(45.7, 15.6);

    this.shape_5 = new cjs.Shape();
    this.shape_5.graphics
      .f("#000000")
      .s()
      .p(
        "AAvBCIAAhYQAAgJgEgEQgDgEgHAAQgHAAgFAFQgFAFAAAMIAABTIgfAAIAAhYQAAgJgDgEQgDgEgHAAQgIAAgEAFQgGAFAAAMIAABTIggAAIAAh/IAfAAIAAANQAHgJAIgEQAHgEAMAAQALAAAGAGQAHAFADAKIAAAAQAEgKAJgGQAJgFAMAAQAHAAAGADQAHACADAFQAFAFABAHQACAIAAAJIAABcg"
      );
    this.shape_5.setTransform(31, 15.4);

    this.shape_6 = new cjs.Shape();
    this.shape_6.graphics
      .f("#000000")
      .s()
      .p("AgQBVIAAipIAhAAIAACpg");
    this.shape_6.setTransform(18.9, 13.5);

    this.shape_7 = new cjs.Shape();
    this.shape_7.graphics
      .f("#000000")
      .s()
      .p(
        "AgPAnQgIgDgGgGQgFgGgEgIQgEgIABgIQgBgHAEgIQAEgIAFgGQAGgFAIgEQAIgDAHAAQAIAAAIADQAIAEAGAFQAFAGAEAIQAEAIgBAHQABAIgEAIQgEAIgFAGQgGAGgIADQgIADgIAAQgHAAgIgDg"
      );
    this.shape_7.setTransform(4, 13.5);

    this.timeline.addTween(
      cjs.Tween.get({})
        .to({
          state: [
            { t: this.shape_7 },
            { t: this.shape_6 },
            { t: this.shape_5 },
            { t: this.shape_4 },
            { t: this.shape_3 },
            { t: this.shape_2 },
            { t: this.shape_1 },
            { t: this.shape }
          ]
        })
        .wait(1)
    );
  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = new cjs.Rectangle(-4, -3, 111.1, 60.7);

  (lib.text78 = function(mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {});

    // Layer 1
    this.shape = new cjs.Shape();
    this.shape.graphics
      .f("#000000")
      .s()
      .p(
        "AAPBCIAAhXQABgKgEgEQgDgEgIAAQgPAAAAAVIAABUIgiAAIAAh/IAhAAIAAAPQAFgKAIgEQAHgFAKAAQARAAAIAJQAEAEADAHQABAHAAAKIAABeg"
      );
    this.shape.setTransform(110.3, 15.4);

    this.shape_1 = new cjs.Shape();
    this.shape_1.graphics
      .f("#000000")
      .s()
      .p(
        "AgXA/QgKgDgGgJQgFgJgDgNQgDgMAAgRQAAgPAEgMQACgNAGgJQAGgIAKgFQAKgEAMAAQAOgBALAFQAJAEAGAJQAFAIADANQADANAAAPQAAARgDAMQgDANgGAIQgGAJgJAEQgLAEgNAAIgCAAQgNAAgIgEgAgIgoQgEADgCAGIgCAOIAAARIAAASIACAOQACAHAEADQAEADAEAAQAEAAAEgCQADgDADgFQACgIABgbIAAgTQgBgJgCgFQgFgKgJgBQgEAAgEAEg"
      );
    this.shape_1.setTransform(98.6, 15.6);

    this.shape_2 = new cjs.Shape();
    this.shape_2.graphics
      .f("#000000")
      .s()
      .p("AgPBWIAAh/IAfAAIAAB/gAgPg5IAAgcIAfAAIAAAcg");
    this.shape_2.setTransform(89.9, 13.4);

    this.shape_3 = new cjs.Shape();
    this.shape_3.graphics
      .f("#000000")
      .s()
      .p(
        "AANBTIgOgBQgHgCgDgEQgDgEgBgGIgBgQIAAhIIgRAAIAAgXIARAAIAAglIAfAAIAAAlIATAAIAAAXIgTAAIAABEQAAAHACADQADAEAGAAIAFAAIADgBIAAAXIgLABg"
      );
    this.shape_3.setTransform(83.6, 13.8);

    this.shape_4 = new cjs.Shape();
    this.shape_4.graphics
      .f("#000000")
      .s()
      .p(
        "AggBAQgGgDgEgFQgDgFgCgHQgCgHAAgGQAAgKACgGQACgGAEgFQAEgEAGgCQAGgDAJgCIARgGQAHgCADgDQADgDAAgGQAAgIgDgEQgEgFgHABQgHgBgEAFQgEAEAAAJIAAADIgdAAIAAgDQAAgLADgIQAEgHAGgFQAGgFAIgCQAJgCAIAAQAOAAAJADQAJADAFAFQAFAFACAIQACAHAAAJIAABBIABAPIADAKIggAAIgCgGIgCgHIAAAAQgGAKgIADQgFADgMAAQgJAAgGgDgAAHAEIgHADQgIACgEAEQgFAGAAAJQAAAGADAGQADAFAHABIAFgCQADgBADgDQADgCACgDQACgFAAgEIAAgag"
      );
    this.shape_4.setTransform(74.1, 15.6);

    this.shape_5 = new cjs.Shape();
    this.shape_5.graphics
      .f("#000000")
      .s()
      .p("AATBAIgTgqIgSAqIgiAAIAjhBIgig+IAjAAIAQAnIARgnIAjAAIgiA+IAjBBg");
    this.shape_5.setTransform(62.9, 15.6);

    this.shape_6 = new cjs.Shape();
    this.shape_6.graphics
      .f("#000000")
      .s()
      .p(
        "AggBAQgGgDgEgFQgDgFgCgHQgCgHAAgGQAAgKACgGQACgGAEgFQAEgEAGgCQAGgDAJgCIARgGQAHgCADgDQADgDAAgGQAAgIgDgEQgEgFgHABQgHgBgEAFQgEAEAAAJIAAADIgdAAIAAgDQAAgLADgIQAEgHAGgFQAGgFAIgCQAJgCAIAAQAOAAAJADQAJADAFAFQAFAFACAIQACAHAAAJIAABBIABAPIADAKIggAAIgCgGIgCgHIAAAAQgGAKgIADQgFADgMAAQgJAAgGgDgAAHAEIgHADQgIACgEAEQgFAGAAAJQAAAGADAGQADAFAHABIAFgCQADgBADgDQADgCACgDQACgFAAgEIAAgag"
      );
    this.shape_6.setTransform(51.6, 15.6);

    this.shape_7 = new cjs.Shape();
    this.shape_7.graphics
      .f("#000000")
      .s()
      .p("AgPBVIAAipIAfAAIAACpg");
    this.shape_7.setTransform(43, 13.5);

    this.shape_8 = new cjs.Shape();
    this.shape_8.graphics
      .f("#000000")
      .s()
      .p(
        "AgOBBQgHgBgFgDQgKgGgFgJQgEgLgCgMIgBgXQAAgMACgMQACgMAFgJQAGgKAKgFQAKgGAPAAQAOAAAJAFQAJAEAGAJQAFAIACANQACALAAAQIAAAFIg/AAIAAALIAAALIADAJIAFAHQADACADABQAIAAAEgHQAEgFABgNIAeAAQgBAWgLAMQgLAMgYAAQgHAAgHgCgAgGgpQgDACgCAEIgDAIIAAAJIAAAFIAfAAIgBgMQAAgHgCgDQgCgFgEgCQgDgBgEAAQgEgBgDADg"
      );
    this.shape_8.setTransform(34.6, 15.6);

    this.shape_9 = new cjs.Shape();
    this.shape_9.graphics
      .f("#000000")
      .s()
      .p(
        "AAUBVQgDgDAAgFIgBgKIgBghQAAgKgFgFQgEgGgKAAIgSAAIAABIIgjAAIAAipIA+AAQALAAAJADQAIACAGAGQAGAFADAJQADAIAAALQAAARgHALQgHALgPABIAAABIAMADQAEACADADQAEADABAGQACAFABAHIAAAKIABANIACAVQABAHAEADIAAABgAgWgJIAPAAQAGAAACgCQAFgBAEgDQADgDABgFQADgFAAgHQgBgMgFgGQgGgGgLAAIgQAAg"
      );
    this.shape_9.setTransform(22.8, 13.5);

    this.shape_10 = new cjs.Shape();
    this.shape_10.graphics
      .f("#000000")
      .s()
      .p(
        "AgPAnQgIgDgGgGQgFgGgEgIQgEgIABgIQgBgHAEgIQAEgIAFgGQAGgFAIgEQAIgDAHAAQAIAAAIADQAIAEAGAFQAFAGAEAIQAEAIgBAHQABAIgEAIQgEAIgFAGQgGAGgIADQgIADgIAAQgHAAgIgDg"
      );
    this.shape_10.setTransform(4, 13.5);

    this.timeline.addTween(
      cjs.Tween.get({})
        .to({
          state: [
            { t: this.shape_10 },
            { t: this.shape_9 },
            { t: this.shape_8 },
            { t: this.shape_7 },
            { t: this.shape_6 },
            { t: this.shape_5 },
            { t: this.shape_4 },
            { t: this.shape_3 },
            { t: this.shape_2 },
            { t: this.shape_1 },
            { t: this.shape }
          ]
        })
        .wait(1)
    );
  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = new cjs.Rectangle(-4, -3, 135.3, 60.7);

  (lib.text71 = function(mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {});

    // Layer 1
    this.shape = new cjs.Shape();
    this.shape.graphics
      .f("#000000")
      .s()
      .p(
        "AgOBBQgHgBgFgDQgKgGgFgJQgFgLAAgMIgCgXQAAgMACgMQACgMAFgJQAFgKAKgFQALgGAOAAQAPAAAJAFQAKAEAEAJQAGAIACANQACALAAAQIAAAFIhAAAIAAALIABALIADAJIAFAHQADACADABQAIAAAEgHQADgFACgNIAeAAQgBAWgLAMQgLAMgYAAQgHAAgHgCgAgGgpQgDACgCAEIgDAIIgBAJIAAAFIAgAAIgBgMQAAgHgDgDQgBgFgDgCQgEgBgEAAQgDgBgEADg"
      );
    this.shape.setTransform(193, 15.6);

    this.shape_1 = new cjs.Shape();
    this.shape_1.graphics
      .f("#000000")
      .s()
      .p(
        "AgUBAQgJgDgHgHQgFgJgEgNQgDgNAAgTQAAgSAEgNQAEgNAHgIQAHgHAKgEQAJgDAKAAQALAAAJAEQAIADAHAHQAFAGADAKQADAIAAAMIggAAIgBgJIgCgIQgBgEgDgDQgDgCgEAAQgFAAgDADQgFACgBAGQgCAFgBAJIAAARIAAAUQABAJACAGQACAFADADQADACAEABQAJgBADgHQAEgHAAgQIAgAAQAAANgDAKQgDAJgFAHQgMANgaAAQgLAAgJgDg"
      );
    this.shape_1.setTransform(181.9, 15.6);

    this.shape_2 = new cjs.Shape();
    this.shape_2.graphics
      .f("#000000")
      .s()
      .p(
        "AAPBCIAAhXQAAgKgDgEQgEgEgHAAQgPAAgBAVIAABUIggAAIAAh/IAfAAIAAAPQAGgKAJgEQAGgFAKAAQARAAAIAJQAEAEACAHQADAHAAAKIAABeg"
      );
    this.shape_2.setTransform(170.3, 15.4);

    this.shape_3 = new cjs.Shape();
    this.shape_3.graphics
      .f("#000000")
      .s()
      .p(
        "AgOBBQgHgBgFgDQgKgGgFgJQgFgLAAgMIgCgXQAAgMACgMQACgMAFgJQAFgKAKgFQALgGAOAAQAPAAAJAFQAKAEAEAJQAGAIACANQACALAAAQIAAAFIhAAAIAAALIABALIADAJIAFAHQADACADABQAIAAAEgHQADgFACgNIAeAAQgBAWgLAMQgLAMgYAAQgHAAgHgCgAgGgpQgDACgCAEIgDAIIgBAJIAAAFIAgAAIgBgMQAAgHgDgDQgBgFgDgCQgEgBgFAAQgCgBgEADg"
      );
    this.shape_3.setTransform(158.8, 15.6);

    this.shape_4 = new cjs.Shape();
    this.shape_4.graphics
      .f("#000000")
      .s()
      .p(
        "AgbBSQgHgDgGgIQgJgQAAgkQAAgRADgLQACgOAEgHQAKgRAVABQAJAAAEADQAHAEAGAIIAAAAIAAg3IAhAAIAACqIggAAIAAgOQgGAKgGADQgGADgJABQgKAAgIgFgAgHgSQgEACgCAGQgDAKAAATQAAAWADAKQAEALAJAAQAFAAAEgCQADgDABgGQAEgKAAgWQAAgTgEgKQgBgGgDgCQgEgDgFAAQgEAAgDADg"
      );
    this.shape_4.setTransform(147.1, 13.6);

    this.shape_5 = new cjs.Shape();
    this.shape_5.graphics
      .f("#000000")
      .s()
      .p("AgPBWIAAh/IAfAAIAAB/gAgPg5IAAgcIAfAAIAAAcg");
    this.shape_5.setTransform(138.3, 13.4);

    this.shape_6 = new cjs.Shape();
    this.shape_6.graphics
      .f("#000000")
      .s()
      .p(
        "AgQBXIAAhpIgRAAIAAgWIARAAIAAgPQAAgJACgGQACgGAFgDQAEgEAFgBQAGgCAIAAIASABIAAAXIgDAAIgEAAQgGAAgDACQgDADAAAFIAAAMIATAAIAAAWIgTAAIAABpg"
      );
    this.shape_6.setTransform(132, 13.3);

    this.shape_7 = new cjs.Shape();
    this.shape_7.graphics
      .f("#000000")
      .s()
      .p(
        "AAPBCIAAhXQABgKgEgEQgDgEgIAAQgPAAAAAVIAABUIgiAAIAAh/IAhAAIAAAPQAFgKAIgEQAHgFAKAAQAQAAAJAJQAEAEADAHQACAHAAAKIAABeg"
      );
    this.shape_7.setTransform(122.4, 15.4);

    this.shape_8 = new cjs.Shape();
    this.shape_8.graphics
      .f("#000000")
      .s()
      .p(
        "AgXA/QgKgDgGgJQgGgJgCgNQgCgMgBgRQAAgPAEgMQACgNAGgJQAGgIAKgFQAJgEANAAQAOgBALAFQAJAEAGAJQAFAIADANQADANAAAPQAAARgDAMQgDANgGAIQgGAJgJAEQgKAEgOAAIgCAAQgNAAgIgEgAgIgoQgEADgCAGIgBAOIgBARIABASIABAOQACAHAEADQAEADAEAAQAEAAAEgCQAEgDABgFQADgIACgbIgBgTQgBgJgDgFQgDgKgKgBQgEAAgEAEg"
      );
    this.shape_8.setTransform(110.6, 15.6);

    this.shape_9 = new cjs.Shape();
    this.shape_9.graphics
      .f("#000000")
      .s()
      .p(
        "AgUBAQgJgDgHgHQgGgJgDgNQgDgNAAgTQAAgSAEgNQAEgNAHgIQAHgHAJgEQAKgDAKAAQALAAAJAEQAIADAHAHQAFAGADAKQADAIAAAMIggAAIgBgJIgCgIQgBgEgDgDQgDgCgEAAQgFAAgDADQgEACgCAGQgCAFgBAJIAAARIAAAUQABAJACAGQACAFADADQAEACADABQAJgBAEgHQADgHAAgQIAgAAQAAANgDAKQgDAJgFAHQgMANgaAAQgLAAgJgDg"
      );
    this.shape_9.setTransform(99.3, 15.6);

    this.shape_10 = new cjs.Shape();
    this.shape_10.graphics
      .f("#000000")
      .s()
      .p(
        "AgWBAQgJgCgGgGQgFgEgCgIQgCgIAAgJIAAgFIAeAAIAAAFQAAAIAEAFQAEAFAIABQAGAAAFgFQAFgEAAgHQAAgHgEgDIgIgEIgWgJQgNgFgHgHQgEgEgCgGQgBgFAAgHQAAgIACgHQADgHAGgFQAGgGAIgDQAKgDAKAAQAMAAAIADQAIACAGAEQAKAKAAASIAAAFIgdAAQAAgKgEgFQgDgEgIAAQgEgBgFAEQgFAEAAAGQAAAGADADQADAEAIACIATAIQAPAEAHAHQAGAIAAAQQAAAKgDAHQgEAIgGAFQgHAFgIACQgJACgKAAQgNAAgJgDg"
      );
    this.shape_10.setTransform(82.7, 15.6);

    this.shape_11 = new cjs.Shape();
    this.shape_11.graphics
      .f("#000000")
      .s()
      .p(
        "AgOBBQgHgBgFgDQgKgGgFgJQgEgLgCgMIgBgXQAAgMACgMQACgMAFgJQAFgKAKgFQALgGAPAAQAOAAAJAFQAKAEAEAJQAGAIACANQACALAAAQIAAAFIhAAAIAAALIABALIADAJIAFAHQADACADABQAIAAAEgHQADgFACgNIAeAAQgBAWgLAMQgLAMgYAAQgHAAgHgCgAgGgpQgDACgCAEIgDAIIgBAJIAAAFIAgAAIgBgMQgBgHgCgDQgBgFgDgCQgDgBgFAAQgDgBgEADg"
      );
    this.shape_11.setTransform(71.8, 15.6);

    this.shape_12 = new cjs.Shape();
    this.shape_12.graphics
      .f("#000000")
      .s()
      .p(
        "AANBTIgOgBQgGgCgDgEQgEgEgBgGIgBgQIAAhIIgRAAIAAgXIARAAIAAglIAfAAIAAAlIATAAIAAAXIgTAAIAABEQAAAHACADQADAEAGAAIAFAAIADgBIAAAXIgKABg"
      );
    this.shape_12.setTransform(62.8, 13.8);

    this.shape_13 = new cjs.Shape();
    this.shape_13.graphics
      .f("#000000")
      .s()
      .p(
        "AggBAQgGgDgEgFQgDgFgCgHQgCgHAAgGQAAgKACgGQACgGAEgFQAEgEAGgCQAGgDAJgCIARgGQAHgCADgDQADgDAAgGQAAgIgDgEQgEgFgHABQgHgBgEAFQgEAEAAAJIAAADIgdAAIAAgDQAAgLADgIQAEgHAGgFQAGgFAIgCQAJgCAIAAQAOAAAJADQAJADAFAFQAFAFACAIQACAHAAAJIAABBIABAPIADAKIggAAIgCgGIgCgHIAAAAQgGAKgIADQgFADgMAAQgJAAgGgDgAAHAEIgHADQgIACgEAEQgFAGAAAJQAAAGADAGQADAFAHABIAFgCQADgBADgDQADgCACgDQACgFAAgEIAAgag"
      );
    this.shape_13.setTransform(53.3, 15.6);

    this.shape_14 = new cjs.Shape();
    this.shape_14.graphics
      .f("#000000")
      .s()
      .p(
        "AgOBBQgHgBgFgDQgKgGgFgJQgEgLgCgMIgBgXQAAgMACgMQACgMAFgJQAFgKAKgFQALgGAOAAQAPAAAJAFQAKAEAEAJQAGAIACANQACALAAAQIAAAFIg/AAIAAALIAAALIADAJIAFAHQADACADABQAIAAAEgHQADgFACgNIAeAAQgBAWgLAMQgLAMgYAAQgHAAgHgCgAgGgpQgDACgCAEIgDAIIAAAJIAAAFIAfAAIgBgMQgBgHgCgDQgBgFgDgCQgDgBgFAAQgDgBgEADg"
      );
    this.shape_14.setTransform(42.1, 15.6);

    this.shape_15 = new cjs.Shape();
    this.shape_15.graphics
      .f("#000000")
      .s()
      .p(
        "AghBCIAAh/IAhAAIAAARQADgJAHgGQAHgGALAAIACAAIAEABIAAAfIgGAAIgFAAIgJABQgEABgDADQgEADgCAEQgBAFAAAGIAABMg"
      );
    this.shape_15.setTransform(33.1, 15.4);

    this.shape_16 = new cjs.Shape();
    this.shape_16.graphics
      .f("#000000")
      .s()
      .p(
        "AgcBSQgLgGgGgMQgGgMgCgQQgCgRAAgTQAAgRACgRQACgQAGgNQAGgLALgHQAMgGARAAQAKAAAHACQAHABAGADQAKAGAGAJQAFAJABALIACAUIgjAAQAAgSgFgJQgCgEgEgCQgEgDgFAAQgFAAgEAEQgFADgCAIQgCAIgBAMIgBAdQAAAUABALQABAMADAHQADAHAEACQAEADAEAAQAEAAAEgCQAEgBADgFQADgFACgJQABgIAAgOIAjAAQAAAOgCANQgCAMgGAJIgHAIIgKAHIgMAEIgQABQgRAAgMgGg"
      );
    this.shape_16.setTransform(22.2, 13.5);

    this.shape_17 = new cjs.Shape();
    this.shape_17.graphics
      .f("#000000")
      .s()
      .p(
        "AgPAnQgIgDgGgGQgFgGgEgIQgEgIABgIQgBgHAEgIQAEgIAFgGQAGgFAIgEQAIgDAHAAQAIAAAIADQAIAEAGAFQAFAGAEAIQAEAIgBAHQABAIgEAIQgEAIgFAGQgGAGgIADQgIADgIAAQgHAAgIgDg"
      );
    this.shape_17.setTransform(4, 13.5);

    this.timeline.addTween(
      cjs.Tween.get({})
        .to({
          state: [
            { t: this.shape_17 },
            { t: this.shape_16 },
            { t: this.shape_15 },
            { t: this.shape_14 },
            { t: this.shape_13 },
            { t: this.shape_12 },
            { t: this.shape_11 },
            { t: this.shape_10 },
            { t: this.shape_9 },
            { t: this.shape_8 },
            { t: this.shape_7 },
            { t: this.shape_6 },
            { t: this.shape_5 },
            { t: this.shape_4 },
            { t: this.shape_3 },
            { t: this.shape_2 },
            { t: this.shape_1 },
            { t: this.shape }
          ]
        })
        .wait(1)
    );
  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = new cjs.Rectangle(-4, -3, 226.3, 60.7);

  (lib.text70 = function(mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {});

    // Layer 1
    this.shape = new cjs.Shape();
    this.shape.graphics
      .f("#000000")
      .s()
      .p(
        "AgOBBQgHgBgFgDQgKgGgFgJQgEgLgBgMIgCgXQAAgMACgMQACgMAFgJQAGgKAJgFQALgGAOAAQAPAAAJAFQAJAEAGAJQAFAIACANQACALAAAQIAAAFIhAAAIAAALIABALIADAJIAFAHQADACADABQAIAAAEgHQADgFACgNIAeAAQgBAWgLAMQgLAMgYAAQgHAAgHgCgAgGgpQgDACgCAEIgDAIIgBAJIAAAFIAgAAIgBgMQAAgHgCgDQgCgFgEgCQgCgBgGAAQgDgBgDADg"
      );
    this.shape.setTransform(310.7, 15.6);

    this.shape_1 = new cjs.Shape();
    this.shape_1.graphics
      .f("#000000")
      .s()
      .p(
        "AgUBAQgKgDgFgHQgHgJgCgNQgEgNAAgTQAAgSAEgNQAEgNAHgIQAHgHAKgEQAJgDAJAAQAMAAAJAEQAJADAFAHQAGAGADAKQADAIAAAMIggAAIAAgJIgCgIQgCgEgDgDQgDgCgFAAQgEAAgEADQgDACgCAGQgCAFgBAJIgBARIABAUQABAJACAGQABAFAEADQADACAEABQAIgBAEgHQAEgHAAgQIAgAAQAAANgDAKQgDAJgGAHQgLANgaAAQgLAAgJgDg"
      );
    this.shape_1.setTransform(299.6, 15.6);

    this.shape_2 = new cjs.Shape();
    this.shape_2.graphics
      .f("#000000")
      .s()
      .p(
        "AAPBCIAAhXQABgKgEgEQgDgEgIAAQgPAAAAAVIAABUIgiAAIAAh/IAhAAIAAAPQAFgKAIgEQAHgFAKAAQARAAAIAJQAEAEADAHQABAHAAAKIAABeg"
      );
    this.shape_2.setTransform(288.1, 15.4);

    this.shape_3 = new cjs.Shape();
    this.shape_3.graphics
      .f("#000000")
      .s()
      .p(
        "AggBAQgGgDgEgFQgDgFgCgHQgCgHAAgGQAAgKACgGQACgGAEgFQAEgEAGgCQAGgDAJgCIARgGQAHgCADgDQADgDAAgGQAAgIgDgEQgEgFgHABQgHgBgEAFQgEAEAAAJIAAADIgdAAIAAgDQAAgLADgIQAEgHAGgFQAGgFAIgCQAJgCAIAAQAOAAAJADQAJADAFAFQAFAFACAIQACAHAAAJIAABBIABAPIADAKIggAAIgCgGIgCgHIAAAAQgGAKgIADQgFADgMAAQgJAAgGgDgAAHAEIgHADQgIACgEAEQgFAGAAAJQAAAGADAGQADAFAHABIAFgCQADgBADgDQADgCACgDQACgFAAgEIAAgag"
      );
    this.shape_3.setTransform(276.2, 15.6);

    this.shape_4 = new cjs.Shape();
    this.shape_4.graphics
      .f("#000000")
      .s()
      .p(
        "AAvBCIAAhYQAAgJgEgEQgDgEgHAAQgHAAgFAFQgFAFAAAMIAABTIgfAAIAAhYQAAgJgDgEQgDgEgHAAQgIAAgEAFQgFAFgBAMIAABTIggAAIAAh/IAfAAIAAANQAHgJAIgEQAHgEAMAAQALAAAFAGQAIAFADAKIAAAAQAFgKAIgGQAJgFAMAAQAHAAAGADQAGACAFAFQADAFACAHQACAIAAAJIAABcg"
      );
    this.shape_4.setTransform(261.5, 15.4);

    this.shape_5 = new cjs.Shape();
    this.shape_5.graphics
      .f("#000000")
      .s()
      .p(
        "AghBCIAAh/IAhAAIAAARQADgJAHgGQAHgGAKAAIAEAAIADABIAAAfIgGAAIgFAAIgIABQgFABgDADQgEADgCAEQgBAFAAAGIAABMg"
      );
    this.shape_5.setTransform(249, 15.4);

    this.shape_6 = new cjs.Shape();
    this.shape_6.graphics
      .f("#000000")
      .s()
      .p(
        "AgXA/QgKgDgGgJQgFgJgDgNQgCgMAAgRQAAgPADgMQACgNAGgJQAGgIAKgFQAKgEAMAAQAOgBAKAFQAKAEAGAJQAGAIACANQACANABAPQgBARgCAMQgDANgGAIQgGAJgJAEQgLAEgNAAIgCAAQgNAAgIgEgAgIgoQgEADgBAGIgDAOIAAARIAAASIADAOQABAHAEADQAEADAEAAQAEAAAEgCQAEgDACgFQACgIABgbIgBgTQgBgJgBgFQgFgKgJgBQgEAAgEAEg"
      );
    this.shape_6.setTransform(238.7, 15.6);

    this.shape_7 = new cjs.Shape();
    this.shape_7.graphics
      .f("#000000")
      .s()
      .p(
        "AgQBXIAAhpIgRAAIAAgWIARAAIAAgPQAAgJACgGQACgGAFgDQAEgEAFgBQAHgCAHAAIASABIAAAXIgDAAIgDAAQgIAAgCACQgDADAAAFIAAAMIATAAIAAAWIgTAAIAABpg"
      );
    this.shape_7.setTransform(229.5, 13.3);

    this.shape_8 = new cjs.Shape();
    this.shape_8.graphics
      .f("#000000")
      .s()
      .p(
        "AghBCIAAh/IAhAAIAAARQADgJAHgGQAHgGAKAAIAEAAIADABIAAAfIgGAAIgFAAIgIABQgFABgDADQgEADgCAEQgBAFAAAGIAABMg"
      );
    this.shape_8.setTransform(222.4, 15.4);

    this.shape_9 = new cjs.Shape();
    this.shape_9.graphics
      .f("#000000")
      .s()
      .p(
        "AgOBBQgHgBgFgDQgKgGgFgJQgEgLgCgMIgBgXQAAgMACgMQACgMAFgJQAGgKAKgFQAKgGAPAAQAOAAAJAFQAJAEAGAJQAFAIACANQACALAAAQIAAAFIg/AAIAAALIAAALIADAJIAFAHQADACADABQAIAAAEgHQAEgFABgNIAeAAQgBAWgLAMQgLAMgYAAQgHAAgHgCgAgGgpQgDACgCAEIgDAIIAAAJIAAAFIAfAAIgBgMQAAgHgDgDQgBgFgEgCQgDgBgEAAQgEgBgDADg"
      );
    this.shape_9.setTransform(212.4, 15.6);

    this.shape_10 = new cjs.Shape();
    this.shape_10.graphics
      .f("#000000")
      .s()
      .p(
        "AgxBWIAAioIAgAAIAAAOQAGgJAGgFQAGgDAKAAQAUgBAJARQAFAHACAOQADANAAARQAAASgDAMQgCANgFAHQgEAIgIADQgHAFgKAAQgKgBgFgDQgGgEgFgHIgBAAIAAA1gAgHg5QgEACgCAGQgDALAAAUQAAAUADAKQADALAKAAQALAAACgLQAEgKAAgUQAAgUgEgLQgBgGgDgCQgEgDgFAAQgEAAgDADg"
      );
    this.shape_10.setTransform(201, 17.5);

    this.shape_11 = new cjs.Shape();
    this.shape_11.graphics
      .f("#000000")
      .s()
      .p("AgPBVIAAipIAfAAIAACpg");
    this.shape_11.setTransform(186.2, 13.5);

    this.shape_12 = new cjs.Shape();
    this.shape_12.graphics
      .f("#000000")
      .s()
      .p(
        "AggBAQgGgDgEgFQgDgFgCgHQgCgHAAgGQAAgKACgGQACgGAEgFQAEgEAGgCQAGgDAJgCIARgGQAHgCADgDQADgDAAgGQAAgIgDgEQgEgFgHABQgHgBgEAFQgEAEAAAJIAAADIgdAAIAAgDQAAgLADgIQAEgHAGgFQAGgFAIgCQAJgCAIAAQAOAAAJADQAJADAFAFQAFAFACAIQACAHAAAJIAABBIABAPIADAKIggAAIgCgGIgCgHIAAAAQgGAKgIADQgFADgMAAQgJAAgGgDgAAHAEIgHADQgIACgEAEQgFAGAAAJQAAAGADAGQADAFAHABIAFgCQADgBADgDQADgCACgDQACgFAAgEIAAgag"
      );
    this.shape_12.setTransform(177.5, 15.6);

    this.shape_13 = new cjs.Shape();
    this.shape_13.graphics
      .f("#000000")
      .s()
      .p(
        "AgUBAQgJgDgHgHQgFgJgEgNQgDgNAAgTQAAgSAEgNQAEgNAHgIQAHgHAJgEQAKgDAKAAQALAAAJAEQAJADAFAHQAGAGADAKQADAIAAAMIggAAIgBgJIgBgIQgCgEgDgDQgDgCgEAAQgEAAgFADQgEACgBAGQgCAFgBAJIgBARIABAUQABAJACAGQABAFAEADQADACAEABQAIgBAFgHQADgHAAgQIAgAAQAAANgDAKQgDAJgGAHQgLANgaAAQgLAAgJgDg"
      );
    this.shape_13.setTransform(166.3, 15.6);

    this.shape_14 = new cjs.Shape();
    this.shape_14.graphics
      .f("#000000")
      .s()
      .p("AgPBWIAAh/IAfAAIAAB/gAgPg5IAAgcIAfAAIAAAcg");
    this.shape_14.setTransform(157.8, 13.4);

    this.shape_15 = new cjs.Shape();
    this.shape_15.graphics
      .f("#000000")
      .s()
      .p(
        "AgWBAQgJgCgGgGQgFgEgCgIQgCgIAAgJIAAgFIAeAAIAAAFQAAAIAEAFQAEAFAIABQAGAAAFgFQAFgEAAgHQAAgHgEgDIgIgEIgWgJQgNgFgHgHQgEgEgCgGQgBgFAAgHQAAgIACgHQADgHAGgFQAGgGAIgDQAKgDAKAAQAMAAAIADQAIACAGAEQAKAKAAASIAAAFIgdAAQAAgKgEgFQgDgEgIAAQgEgBgFAEQgFAEAAAGQAAAGADADQADAEAIACIATAIQAPAEAHAHQAGAIAAAQQAAAKgDAHQgEAIgGAFQgHAFgIACQgJACgKAAQgNAAgJgDg"
      );
    this.shape_15.setTransform(149.6, 15.6);

    this.shape_16 = new cjs.Shape();
    this.shape_16.graphics
      .f("#000000")
      .s()
      .p(
        "AgpBVIAAgZIAJABQAJAAAEgFQAEgFABgIIglh/IAjAAIARBXIABAAIAQhXIAiAAIggB3QgEAQgEAKQgEAKgFAFQgEAFgHACQgIACgLAAg"
      );
    this.shape_16.setTransform(139, 17.7);

    this.shape_17 = new cjs.Shape();
    this.shape_17.graphics
      .f("#000000")
      .s()
      .p(
        "AAPBVIAAhXQAAgKgDgEQgDgEgIAAQgPAAAAAUIAABVIghAAIAAipIAhAAIAAA3IAAAAQAKgQATAAQARAAAIAIQAEAFADAHQACAHAAAKIAABdg"
      );
    this.shape_17.setTransform(127.7, 13.5);

    this.shape_18 = new cjs.Shape();
    this.shape_18.graphics
      .f("#000000")
      .s()
      .p(
        "AgxBWIAAioIAgAAIAAAOQAGgJAGgFQAGgDAKAAQAUgBAJARQAFAHACAOQADANAAARQAAASgDAMQgCANgFAHQgEAIgIADQgHAFgKAAQgKgBgFgDQgGgEgFgHIgBAAIAAA1gAgHg5QgEACgCAGQgDALAAAUQAAAUADAKQADALAKAAQAKAAADgLQAEgKAAgUQAAgUgEgLQgBgGgDgCQgEgDgFAAQgEAAgDADg"
      );
    this.shape_18.setTransform(115.8, 17.5);

    this.shape_19 = new cjs.Shape();
    this.shape_19.graphics
      .f("#000000")
      .s()
      .p(
        "AgWBAQgJgCgGgGQgFgEgCgIQgCgIAAgJIAAgFIAeAAIAAAFQAAAIAEAFQAEAFAIABQAGAAAFgFQAFgEAAgHQAAgHgEgDIgIgEIgWgJQgNgFgHgHQgEgEgCgGQgBgFAAgHQAAgIACgHQADgHAGgFQAGgGAIgDQAKgDAKAAQAMAAAIADQAIACAGAEQAKAKAAASIAAAFIgdAAQAAgKgEgFQgDgEgIAAQgEgBgFAEQgFAEAAAGQAAAGADADQADAEAIACIATAIQAPAEAHAHQAGAIAAAQQAAAKgDAHQgEAIgGAFQgHAFgIACQgJACgKAAQgNAAgJgDg"
      );
    this.shape_19.setTransform(98.6, 15.6);

    this.shape_20 = new cjs.Shape();
    this.shape_20.graphics
      .f("#000000")
      .s()
      .p(
        "AgOBBQgHgBgFgDQgKgGgFgJQgEgLgCgMIgBgXQAAgMACgMQACgMAFgJQAGgKAKgFQAKgGAPAAQAOAAAJAFQAJAEAGAJQAFAIACANQACALAAAQIAAAFIg/AAIAAALIAAALIADAJIAFAHQADACADABQAIAAAEgHQAEgFABgNIAeAAQgBAWgLAMQgLAMgYAAQgHAAgHgCgAgGgpQgDACgCAEIgDAIIAAAJIAAAFIAfAAIgBgMQAAgHgDgDQgBgFgEgCQgDgBgEAAQgEgBgDADg"
      );
    this.shape_20.setTransform(87.7, 15.6);

    this.shape_21 = new cjs.Shape();
    this.shape_21.graphics
      .f("#000000")
      .s()
      .p("AgRBAIgih/IAjAAIARBaIARhaIAiAAIghB/g");
    this.shape_21.setTransform(76.8, 15.6);

    this.shape_22 = new cjs.Shape();
    this.shape_22.graphics
      .f("#000000")
      .s()
      .p(
        "AgXA/QgKgDgGgJQgGgJgCgNQgDgMABgRQAAgPACgMQADgNAGgJQAGgIAKgFQAKgEAMAAQAPgBAJAFQAKAEAGAJQAFAIADANQADANgBAPQABARgDAMQgDANgGAIQgGAJgKAEQgKAEgNAAIgCAAQgNAAgIgEgAgIgoQgDADgCAGIgCAOIgBARIABASIACAOQACAHADADQADADAFAAQAFAAADgCQADgDACgFQADgIACgbIgCgTQgBgJgCgFQgEgKgJgBQgFAAgDAEg"
      );
    this.shape_22.setTransform(65.8, 15.6);

    this.shape_23 = new cjs.Shape();
    this.shape_23.graphics
      .f("#000000")
      .s()
      .p(
        "AggBCIAAh/IAfAAIAAARQAEgJAHgGQAHgGAKAAIAEAAIACABIAAAfIgEAAIgGAAIgJABQgEABgEADQgDADgCAEQgBAFAAAGIAABMg"
      );
    this.shape_23.setTransform(56.6, 15.4);

    this.shape_24 = new cjs.Shape();
    this.shape_24.graphics
      .f("#000000")
      .s()
      .p(
        "AgxBWIAAioIAgAAIAAAOQAGgJAHgFQAEgDALAAQAUgBAKARQAEAHADAOQACANAAARQAAASgCAMQgDANgEAHQgFAIgIADQgIAFgJAAQgKgBgEgDQgHgEgGgHIAAAAIAAA1gAgIg5QgDACgBAGQgEALAAAUQAAAUAEAKQADALAJAAQALAAADgLQADgKAAgUQAAgUgDgLQgCgGgEgCQgDgDgFAAQgEAAgEADg"
      );
    this.shape_24.setTransform(46.2, 17.5);

    this.shape_25 = new cjs.Shape();
    this.shape_25.graphics
      .f("#000000")
      .s()
      .p(
        "AAvBCIAAhYQAAgJgEgEQgDgEgHAAQgHAAgFAFQgFAFAAAMIAABTIgfAAIAAhYQAAgJgDgEQgDgEgHAAQgIAAgEAFQgGAFAAAMIAABTIggAAIAAh/IAfAAIAAANQAHgJAIgEQAHgEAMAAQALAAAGAGQAHAFADAKIAAAAQAEgKAJgGQAJgFAMAAQAHAAAGADQAHACADAFQAFAFABAHQACAIAAAJIAABcg"
      );
    this.shape_25.setTransform(31, 15.4);

    this.shape_26 = new cjs.Shape();
    this.shape_26.graphics
      .f("#000000")
      .s()
      .p("AgQBVIAAipIAhAAIAACpg");
    this.shape_26.setTransform(18.9, 13.5);

    this.shape_27 = new cjs.Shape();
    this.shape_27.graphics
      .f("#000000")
      .s()
      .p(
        "AgPAnQgIgDgGgGQgFgGgEgIQgEgIABgIQgBgHAEgIQAEgIAFgGQAGgFAIgEQAIgDAHAAQAIAAAIADQAIAEAGAFQAFAGAEAIQAEAIgBAHQABAIgEAIQgEAIgFAGQgGAGgIADQgIADgIAAQgHAAgIgDg"
      );
    this.shape_27.setTransform(4, 13.5);

    this.timeline.addTween(
      cjs.Tween.get({})
        .to({
          state: [
            { t: this.shape_27 },
            { t: this.shape_26 },
            { t: this.shape_25 },
            { t: this.shape_24 },
            { t: this.shape_23 },
            { t: this.shape_22 },
            { t: this.shape_21 },
            { t: this.shape_20 },
            { t: this.shape_19 },
            { t: this.shape_18 },
            { t: this.shape_17 },
            { t: this.shape_16 },
            { t: this.shape_15 },
            { t: this.shape_14 },
            { t: this.shape_13 },
            { t: this.shape_12 },
            { t: this.shape_11 },
            { t: this.shape_10 },
            { t: this.shape_9 },
            { t: this.shape_8 },
            { t: this.shape_7 },
            { t: this.shape_6 },
            { t: this.shape_5 },
            { t: this.shape_4 },
            { t: this.shape_3 },
            { t: this.shape_2 },
            { t: this.shape_1 },
            { t: this.shape }
          ]
        })
        .wait(1)
    );
  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = new cjs.Rectangle(-4, -3, 356.1, 60.7);

  (lib.text69 = function(mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {});

    // Layer 1
    this.shape = new cjs.Shape();
    this.shape.graphics
      .f("#000000")
      .s()
      .p(
        "AgjBOQgMgIAAgRIAgAAQAAAGAFAEIAFADIAFAAQAJAAAEgGQAEgHAAgJIAAgRIAAAAQgFAHgHAFQgGADgIAAQgTAAgKgOQgFgIgDgNQgCgKAAgSIABgXQABgMAEgJQAFgJAIgHQAEgCAFgCQAFgCAHABQAHAAAGADQAHAEAFALIAAAAIAAgPIAgAAIAAB5QAAAZgMAMQgHAGgKAEQgKACgNAAQgVAAgLgJgAgHg6QgDACgCAFIgDAOIAAAXIAAAMQABAFACAEQACAEADADQADADAEAAQAFAAADgDQAEgDACgEQACgFAAgFIABgPQAAgYgDgJQgEgKgKAAQgDAAgEADg"
      );
    this.shape.setTransform(260.5, 17.6);

    this.shape_1 = new cjs.Shape();
    this.shape_1.graphics
      .f("#000000")
      .s()
      .p(
        "AAQBCIAAhXQAAgKgEgEQgEgEgHAAQgQAAABAVIAABUIgiAAIAAh/IAhAAIAAAPQAFgKAIgEQAHgFALAAQAPAAAJAJQAEAEADAHQABAHAAAKIAABeg"
      );
    this.shape_1.setTransform(248.7, 15.4);

    this.shape_2 = new cjs.Shape();
    this.shape_2.graphics
      .f("#000000")
      .s()
      .p("AgPBWIAAh/IAfAAIAAB/gAgPg5IAAgcIAfAAIAAAcg");
    this.shape_2.setTransform(239.8, 13.4);

    this.shape_3 = new cjs.Shape();
    this.shape_3.graphics
      .f("#000000")
      .s()
      .p("AASBVIgag1IgMAQIAAAlIghAAIAAipIAhAAIAABYIABAAIAfguIAkAAIglAxIArBOg");
    this.shape_3.setTransform(231.6, 13.5);

    this.shape_4 = new cjs.Shape();
    this.shape_4.graphics
      .f("#000000")
      .s()
      .p(
        "AggBAQgGgDgEgFQgDgFgCgHQgCgHAAgGQAAgKACgGQACgGAEgFQAEgEAGgCQAGgDAJgCIARgGQAHgCADgDQADgDAAgGQAAgIgDgEQgEgFgHABQgHgBgEAFQgEAEAAAJIAAADIgdAAIAAgDQAAgLADgIQAEgHAGgFQAGgFAIgCQAJgCAIAAQAOAAAJADQAJADAFAFQAFAFACAIQACAHAAAJIAABBIABAPIADAKIggAAIgCgGIgCgHIAAAAQgGAKgIADQgFADgMAAQgJAAgGgDgAAHAEIgHADQgIACgEAEQgFAGAAAJQAAAGADAGQADAFAHABIAFgCQADgBADgDQADgCACgDQACgFAAgEIAAgag"
      );
    this.shape_4.setTransform(219.1, 15.6);

    this.shape_5 = new cjs.Shape();
    this.shape_5.graphics
      .f("#000000")
      .s()
      .p(
        "AAvBCIAAhYQAAgJgEgEQgDgEgHAAQgHAAgFAFQgFAFAAAMIAABTIgfAAIAAhYQAAgJgDgEQgDgEgHAAQgIAAgEAFQgFAFgBAMIAABTIggAAIAAh/IAfAAIAAANQAHgJAIgEQAHgEAMAAQALAAAGAGQAHAFADAKIAAAAQAFgKAIgGQAJgFAMAAQAHAAAGADQAGACAFAFQAEAFABAHQACAIAAAJIAABcg"
      );
    this.shape_5.setTransform(204.4, 15.4);

    this.shape_6 = new cjs.Shape();
    this.shape_6.graphics
      .f("#000000")
      .s()
      .p(
        "AAQBCIAAhXQAAgKgEgEQgDgEgIAAQgQAAAAAVIAABUIghAAIAAh/IAhAAIAAAPQAFgKAJgEQAGgFALAAQAPAAAJAJQAEAEACAHQACAHAAAKIAABeg"
      );
    this.shape_6.setTransform(183.5, 15.4);

    this.shape_7 = new cjs.Shape();
    this.shape_7.graphics
      .f("#000000")
      .s()
      .p(
        "AgXA/QgKgDgGgJQgFgJgDgNQgCgMAAgRQAAgPACgMQADgNAGgJQAGgIAKgFQAJgEANAAQAOgBAKAFQAKAEAGAJQAGAIACANQACANAAAPQAAARgCAMQgDANgGAIQgGAJgKAEQgKAEgNAAIgCAAQgNAAgIgEgAgIgoQgDADgCAGIgDAOIAAARIAAASIADAOQACAHADADQAEADAEAAQAFAAADgCQAEgDACgFQACgIABgbIgBgTQgBgJgBgFQgEgKgKgBQgEAAgEAEg"
      );
    this.shape_7.setTransform(171.8, 15.6);

    this.shape_8 = new cjs.Shape();
    this.shape_8.graphics
      .f("#000000")
      .s()
      .p("AgPBWIAAh/IAfAAIAAB/gAgPg5IAAgcIAfAAIAAAcg");
    this.shape_8.setTransform(163.1, 13.4);

    this.shape_9 = new cjs.Shape();
    this.shape_9.graphics
      .f("#000000")
      .s()
      .p(
        "AgWBAQgJgCgGgGQgFgEgCgIQgCgIAAgJIAAgFIAeAAIAAAFQAAAIAEAFQAEAFAIABQAGAAAFgFQAFgEAAgHQAAgHgEgDIgIgEIgWgJQgNgFgHgHQgEgEgCgGQgBgFAAgHQAAgIACgHQADgHAGgFQAGgGAIgDQAKgDAKAAQAMAAAIADQAIACAGAEQAKAKAAASIAAAFIgdAAQAAgKgEgFQgDgEgIAAQgEgBgFAEQgFAEAAAGQAAAGADADQADAEAIACIATAIQAPAEAHAHQAGAIAAAQQAAAKgDAHQgEAIgGAFQgHAFgIACQgJACgKAAQgNAAgJgDg"
      );
    this.shape_9.setTransform(154.9, 15.6);

    this.shape_10 = new cjs.Shape();
    this.shape_10.graphics
      .f("#000000")
      .s()
      .p("AgPBWIAAh/IAfAAIAAB/gAgPg5IAAgcIAfAAIAAAcg");
    this.shape_10.setTransform(146.7, 13.4);

    this.shape_11 = new cjs.Shape();
    this.shape_11.graphics
      .f("#000000")
      .s()
      .p(
        "AgUBAQgKgDgFgHQgHgJgCgNQgEgNAAgTQAAgSAEgNQAEgNAHgIQAHgHAKgEQAJgDAJAAQAMAAAJAEQAIADAHAHQAFAGADAKQADAIAAAMIggAAIAAgJIgDgIQgBgEgDgDQgDgCgFAAQgDAAgEADQgEACgCAGQgCAFgBAJIAAARIAAAUQABAJACAGQACAFADADQAEACADABQAJgBADgHQAEgHAAgQIAgAAQAAANgDAKQgDAJgFAHQgMANgaAAQgLAAgJgDg"
      );
    this.shape_11.setTransform(138.3, 15.6);

    this.shape_12 = new cjs.Shape();
    this.shape_12.graphics
      .f("#000000")
      .s()
      .p(
        "AgOBBQgHgBgFgDQgKgGgFgJQgEgLgBgMIgCgXQAAgMACgMQACgMAFgJQAGgKAKgFQAKgGAPAAQAOAAAJAFQAJAEAGAJQAFAIACANQACALAAAQIAAAFIg/AAIAAALIAAALIADAJIAFAHQADACADABQAIAAAEgHQADgFACgNIAeAAQgBAWgLAMQgLAMgYAAQgHAAgHgCgAgGgpQgDACgCAEIgDAIIAAAJIAAAFIAfAAIgBgMQAAgHgCgDQgCgFgEgCQgCgBgGAAQgDgBgDADg"
      );
    this.shape_12.setTransform(127.2, 15.6);

    this.shape_13 = new cjs.Shape();
    this.shape_13.graphics
      .f("#000000")
      .s()
      .p(
        "AgbBSQgIgDgEgIQgKgQAAgkQAAgRACgLQADgOAFgHQAJgRAUABQAKAAAFADQAGAEAFAIIABAAIAAg3IAhAAIAACqIggAAIAAgOQgGAKgHADQgFADgKABQgKAAgHgFgAgIgSQgDACgBAGQgEAKAAATQAAAWAEAKQADALAJAAQAFAAADgCQAEgDACgGQADgKAAgWQAAgTgDgKQgCgGgEgCQgDgDgFAAQgEAAgEADg"
      );
    this.shape_13.setTransform(115.5, 13.6);

    this.shape_14 = new cjs.Shape();
    this.shape_14.graphics
      .f("#000000")
      .s()
      .p(
        "AgWBAQgJgCgGgGQgFgEgCgIQgCgIAAgJIAAgFIAeAAIAAAFQAAAIAEAFQAEAFAIABQAGAAAFgFQAFgEAAgHQAAgHgEgDIgIgEIgWgJQgNgFgHgHQgEgEgCgGQgBgFAAgHQAAgIACgHQADgHAGgFQAGgGAIgDQAKgDAKAAQAMAAAIADQAIACAGAEQAKAKAAASIAAAFIgdAAQAAgKgEgFQgDgEgIAAQgEgBgFAEQgFAEAAAGQAAAGADADQADAEAIACIATAIQAPAEAHAHQAGAIAAAQQAAAKgDAHQgEAIgGAFQgHAFgIACQgJACgKAAQgNAAgJgDg"
      );
    this.shape_14.setTransform(98.6, 15.6);

    this.shape_15 = new cjs.Shape();
    this.shape_15.graphics
      .f("#000000")
      .s()
      .p(
        "AgOBBQgHgBgFgDQgKgGgFgJQgEgLgCgMIgBgXQAAgMACgMQACgMAFgJQAGgKAKgFQAKgGAPAAQAOAAAJAFQAJAEAGAJQAFAIACANQACALAAAQIAAAFIg/AAIAAALIAAALIADAJIAFAHQADACADABQAIAAAEgHQAEgFABgNIAeAAQgBAWgLAMQgLAMgYAAQgHAAgHgCgAgGgpQgDACgCAEIgDAIIAAAJIAAAFIAfAAIgBgMQAAgHgDgDQgBgFgEgCQgDgBgEAAQgEgBgDADg"
      );
    this.shape_15.setTransform(87.7, 15.6);

    this.shape_16 = new cjs.Shape();
    this.shape_16.graphics
      .f("#000000")
      .s()
      .p("AgRBAIgih/IAjAAIARBaIARhaIAiAAIghB/g");
    this.shape_16.setTransform(76.8, 15.6);

    this.shape_17 = new cjs.Shape();
    this.shape_17.graphics
      .f("#000000")
      .s()
      .p(
        "AgXA/QgKgDgGgJQgGgJgCgNQgDgMABgRQAAgPACgMQADgNAGgJQAGgIAKgFQAKgEAMAAQAPgBAJAFQAKAEAGAJQAFAIADANQADANgBAPQABARgDAMQgDANgGAIQgGAJgKAEQgKAEgNAAIgCAAQgNAAgIgEgAgIgoQgDADgCAGIgCAOIgBARIABASIACAOQACAHADADQADADAFAAQAFAAADgCQADgDACgFQADgIACgbIgCgTQgBgJgCgFQgEgKgJgBQgFAAgDAEg"
      );
    this.shape_17.setTransform(65.8, 15.6);

    this.shape_18 = new cjs.Shape();
    this.shape_18.graphics
      .f("#000000")
      .s()
      .p(
        "AggBCIAAh/IAfAAIAAARQAEgJAHgGQAHgGAKAAIAEAAIACABIAAAfIgEAAIgGAAIgJABQgEABgEADQgDADgCAEQgBAFAAAGIAABMg"
      );
    this.shape_18.setTransform(56.6, 15.4);

    this.shape_19 = new cjs.Shape();
    this.shape_19.graphics
      .f("#000000")
      .s()
      .p(
        "AgxBWIAAioIAgAAIAAAOQAGgJAHgFQAEgDALAAQAUgBAKARQAEAHADAOQACANAAARQAAASgCAMQgDANgEAHQgFAIgIADQgIAFgJAAQgKgBgEgDQgHgEgGgHIAAAAIAAA1gAgIg5QgDACgBAGQgEALAAAUQAAAUAEAKQADALAJAAQALAAADgLQADgKAAgUQAAgUgDgLQgCgGgEgCQgDgDgFAAQgEAAgEADg"
      );
    this.shape_19.setTransform(46.2, 17.5);

    this.shape_20 = new cjs.Shape();
    this.shape_20.graphics
      .f("#000000")
      .s()
      .p(
        "AAvBCIAAhYQAAgJgEgEQgDgEgHAAQgHAAgFAFQgFAFAAAMIAABTIgfAAIAAhYQAAgJgDgEQgDgEgHAAQgIAAgEAFQgGAFAAAMIAABTIggAAIAAh/IAfAAIAAANQAHgJAIgEQAHgEAMAAQALAAAGAGQAHAFADAKIAAAAQAEgKAJgGQAJgFAMAAQAHAAAGADQAHACADAFQAFAFABAHQACAIAAAJIAABcg"
      );
    this.shape_20.setTransform(31, 15.4);

    this.shape_21 = new cjs.Shape();
    this.shape_21.graphics
      .f("#000000")
      .s()
      .p("AgQBVIAAipIAhAAIAACpg");
    this.shape_21.setTransform(18.9, 13.5);

    this.shape_22 = new cjs.Shape();
    this.shape_22.graphics
      .f("#000000")
      .s()
      .p(
        "AgPAnQgIgDgGgGQgFgGgEgIQgEgIABgIQgBgHAEgIQAEgIAFgGQAGgFAIgEQAIgDAHAAQAIAAAIADQAIAEAGAFQAFAGAEAIQAEAIgBAHQABAIgEAIQgEAIgFAGQgGAGgIADQgIADgIAAQgHAAgIgDg"
      );
    this.shape_22.setTransform(4, 13.5);

    this.timeline.addTween(
      cjs.Tween.get({})
        .to({
          state: [
            { t: this.shape_22 },
            { t: this.shape_21 },
            { t: this.shape_20 },
            { t: this.shape_19 },
            { t: this.shape_18 },
            { t: this.shape_17 },
            { t: this.shape_16 },
            { t: this.shape_15 },
            { t: this.shape_14 },
            { t: this.shape_13 },
            { t: this.shape_12 },
            { t: this.shape_11 },
            { t: this.shape_10 },
            { t: this.shape_9 },
            { t: this.shape_8 },
            { t: this.shape_7 },
            { t: this.shape_6 },
            { t: this.shape_5 },
            { t: this.shape_4 },
            { t: this.shape_3 },
            { t: this.shape_2 },
            { t: this.shape_1 },
            { t: this.shape }
          ]
        })
        .wait(1)
    );
  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = new cjs.Rectangle(-4, -3, 300.7, 60.7);

  (lib.text68 = function(mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {});

    // Layer 1
    this.shape = new cjs.Shape();
    this.shape.graphics
      .f("#000000")
      .s()
      .p(
        "AgWBAQgJgCgGgGQgFgEgCgIQgCgIAAgJIAAgFIAeAAIAAAFQAAAIAEAFQAEAFAIABQAGAAAFgFQAFgEAAgHQAAgHgEgDIgIgEIgWgJQgNgFgHgHQgEgEgCgGQgBgFAAgHQAAgIACgHQADgHAGgFQAGgGAIgDQAKgDAKAAQAMAAAIADQAIACAGAEQAKAKAAASIAAAFIgdAAQAAgKgEgFQgDgEgIAAQgEgBgFAEQgFAEAAAGQAAAGADADQADAEAIACIATAIQAPAEAHAHQAGAIAAAQQAAAKgDAHQgEAIgGAFQgHAFgIACQgJACgKAAQgNAAgJgDg"
      );
    this.shape.setTransform(153.6, 15.6);

    this.shape_1 = new cjs.Shape();
    this.shape_1.graphics
      .f("#000000")
      .s()
      .p(
        "AgWBAQgJgCgGgGQgFgEgCgIQgCgIAAgJIAAgFIAeAAIAAAFQAAAIAEAFQAEAFAIABQAGAAAFgFQAFgEAAgHQAAgHgEgDIgIgEIgWgJQgNgFgHgHQgEgEgCgGQgBgFAAgHQAAgIACgHQADgHAGgFQAGgGAIgDQAKgDAKAAQAMAAAIADQAIACAGAEQAKAKAAASIAAAFIgdAAQAAgKgEgFQgDgEgIAAQgEgBgFAEQgFAEAAAGQAAAGADADQADAEAIACIATAIQAPAEAHAHQAGAIAAAQQAAAKgDAHQgEAIgGAFQgHAFgIACQgJACgKAAQgNAAgJgDg"
      );
    this.shape_1.setTransform(142.9, 15.6);

    this.shape_2 = new cjs.Shape();
    this.shape_2.graphics
      .f("#000000")
      .s()
      .p(
        "AgOBBQgHgBgFgDQgKgGgFgJQgEgLgBgMIgCgXQAAgMACgMQACgMAFgJQAGgKAJgFQALgGAOAAQAPAAAJAFQAJAEAGAJQAFAIACANQACALAAAQIAAAFIhAAAIAAALIABALIADAJIAFAHQADACADABQAIAAAEgHQADgFACgNIAeAAQgBAWgLAMQgLAMgYAAQgHAAgHgCgAgGgpQgDACgCAEIgDAIIgBAJIAAAFIAgAAIgBgMQAAgHgCgDQgCgFgEgCQgCgBgGAAQgDgBgDADg"
      );
    this.shape_2.setTransform(132.1, 15.6);

    this.shape_3 = new cjs.Shape();
    this.shape_3.graphics
      .f("#000000")
      .s()
      .p(
        "AghBCIAAh/IAgAAIAAARQAEgJAHgGQAHgGAKAAIAEAAIACABIAAAfIgFAAIgFAAIgIABQgFABgEADQgDADgCAEQgBAFAAAGIAABMg"
      );
    this.shape_3.setTransform(123.1, 15.4);

    this.shape_4 = new cjs.Shape();
    this.shape_4.graphics
      .f("#000000")
      .s()
      .p(
        "AANBTIgOgBQgHgCgDgEQgDgEgBgGIgBgQIAAhIIgRAAIAAgXIARAAIAAglIAfAAIAAAlIATAAIAAAXIgTAAIAABEQAAAHACADQADAEAGAAIAFAAIADgBIAAAXIgLABg"
      );
    this.shape_4.setTransform(115.1, 13.8);

    this.shape_5 = new cjs.Shape();
    this.shape_5.graphics
      .f("#000000")
      .s()
      .p(
        "AgWBAQgJgCgGgGQgFgEgCgIQgCgIAAgJIAAgFIAeAAIAAAFQAAAIAEAFQAEAFAIABQAGAAAFgFQAFgEAAgHQAAgHgEgDIgIgEIgWgJQgNgFgHgHQgEgEgCgGQgBgFAAgHQAAgIACgHQADgHAGgFQAGgGAIgDQAKgDAKAAQAMAAAIADQAIACAGAEQAKAKAAASIAAAFIgdAAQAAgKgEgFQgDgEgIAAQgEgBgFAEQgFAEAAAGQAAAGADADQADAEAIACIATAIQAPAEAHAHQAGAIAAAQQAAAKgDAHQgEAIgGAFQgHAFgIACQgJACgKAAQgNAAgJgDg"
      );
    this.shape_5.setTransform(106.1, 15.6);

    this.shape_6 = new cjs.Shape();
    this.shape_6.graphics
      .f("#000000")
      .s()
      .p(
        "AgWBAQgJgCgGgGQgFgEgCgIQgCgIAAgJIAAgFIAeAAIAAAFQAAAIAEAFQAEAFAIABQAGAAAFgFQAFgEAAgHQAAgHgEgDIgIgEIgWgJQgNgFgHgHQgEgEgCgGQgBgFAAgHQAAgIACgHQADgHAGgFQAGgGAIgDQAKgDAKAAQAMAAAIADQAIACAGAEQAKAKAAASIAAAFIgdAAQAAgKgEgFQgDgEgIAAQgEgBgFAEQgFAEAAAGQAAAGADADQADAEAIACIATAIQAPAEAHAHQAGAIAAAQQAAAKgDAHQgEAIgGAFQgHAFgIACQgJACgKAAQgNAAgJgDg"
      );
    this.shape_6.setTransform(89.7, 15.6);

    this.shape_7 = new cjs.Shape();
    this.shape_7.graphics
      .f("#000000")
      .s()
      .p("AgPBVIAAipIAfAAIAACpg");
    this.shape_7.setTransform(81.5, 13.5);

    this.shape_8 = new cjs.Shape();
    this.shape_8.graphics
      .f("#000000")
      .s()
      .p(
        "AgXA/QgKgDgGgJQgFgJgDgNQgDgMAAgRQAAgPAEgMQACgNAGgJQAGgIAKgFQAKgEAMAAQAOgBALAFQAJAEAGAJQAFAIADANQADANAAAPQAAARgDAMQgDANgGAIQgGAJgJAEQgLAEgNAAIgCAAQgNAAgIgEgAgIgoQgEADgCAGIgCAOIAAARIAAASIACAOQACAHAEADQAEADAEAAQAEAAAEgCQADgDADgFQACgIABgbIAAgTQgBgJgCgFQgFgKgJgBQgEAAgEAEg"
      );
    this.shape_8.setTransform(72.9, 15.6);

    this.shape_9 = new cjs.Shape();
    this.shape_9.graphics
      .f("#000000")
      .s()
      .p(
        "AghBCIAAh/IAhAAIAAARQADgJAHgGQAHgGALAAIACAAIAEABIAAAfIgGAAIgFAAIgJABQgEABgDADQgEADgCAEQgBAFAAAGIAABMg"
      );
    this.shape_9.setTransform(63.7, 15.4);

    this.shape_10 = new cjs.Shape();
    this.shape_10.graphics
      .f("#000000")
      .s()
      .p(
        "AAMBTIgNgBQgGgCgDgEQgEgEgBgGIgBgQIAAhIIgRAAIAAgXIARAAIAAglIAfAAIAAAlIATAAIAAAXIgTAAIAABEQAAAHACADQADAEAHAAIADAAIAEgBIAAAXIgKABg"
      );
    this.shape_10.setTransform(55.7, 13.8);

    this.shape_11 = new cjs.Shape();
    this.shape_11.graphics
      .f("#000000")
      .s()
      .p(
        "AAQBCIAAhXQgBgKgDgEQgEgEgHAAQgPAAgBAVIAABUIggAAIAAh/IAfAAIAAAPQAGgKAJgEQAGgFALAAQAQAAAIAJQAEAEACAHQADAHAAAKIAABeg"
      );
    this.shape_11.setTransform(46.1, 15.4);

    this.shape_12 = new cjs.Shape();
    this.shape_12.graphics
      .f("#000000")
      .s()
      .p(
        "AgXA/QgKgDgGgJQgGgJgCgNQgCgMgBgRQAAgPADgMQADgNAGgJQAGgIAKgFQAJgEANAAQAPgBAJAFQAKAEAGAJQAFAIADANQACANAAAPQAAARgCAMQgDANgGAIQgGAJgKAEQgJAEgOAAIgCAAQgNAAgIgEgAgIgoQgDADgDAGIgBAOIgBARIABASIABAOQADAHADADQADADAFAAQAFAAADgCQADgDACgFQADgIACgbIgBgTQgCgJgCgFQgEgKgJgBQgFAAgDAEg"
      );
    this.shape_12.setTransform(34.4, 15.6);

    this.shape_13 = new cjs.Shape();
    this.shape_13.graphics
      .f("#000000")
      .s()
      .p(
        "AgcBSQgLgGgGgMQgGgMgCgQQgCgRAAgTQAAgRACgRQACgQAGgNQAGgLALgHQAMgGARAAQAKAAAHACQAHABAGADQAKAGAGAJQAFAJABALIACAUIgjAAQAAgSgFgJQgCgEgEgCQgEgDgFAAQgFAAgEAEQgFADgCAIQgCAIgBAMIgBAdQAAAUABALQABAMADAHQADAHAEACQAEADAEAAQAEAAAEgCQAEgBADgFQADgFACgJQABgIAAgOIAjAAQAAAOgCANQgCAMgGAJIgHAIIgKAHIgMAEIgQABQgRAAgMgGg"
      );
    this.shape_13.setTransform(22.2, 13.5);

    this.shape_14 = new cjs.Shape();
    this.shape_14.graphics
      .f("#000000")
      .s()
      .p(
        "AgPAnQgIgDgGgGQgFgGgEgIQgEgIABgIQgBgHAEgIQAEgIAFgGQAGgFAIgEQAIgDAHAAQAIAAAIADQAIAEAGAFQAFAGAEAIQAEAIgBAHQABAIgEAIQgEAIgFAGQgGAGgIADQgIADgIAAQgHAAgIgDg"
      );
    this.shape_14.setTransform(4, 13.5);

    this.timeline.addTween(
      cjs.Tween.get({})
        .to({
          state: [
            { t: this.shape_14 },
            { t: this.shape_13 },
            { t: this.shape_12 },
            { t: this.shape_11 },
            { t: this.shape_10 },
            { t: this.shape_9 },
            { t: this.shape_8 },
            { t: this.shape_7 },
            { t: this.shape_6 },
            { t: this.shape_5 },
            { t: this.shape_4 },
            { t: this.shape_3 },
            { t: this.shape_2 },
            { t: this.shape_1 },
            { t: this.shape }
          ]
        })
        .wait(1)
    );
  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = new cjs.Rectangle(-4, -3, 182.8, 60.7);

  (lib.text67 = function(mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {});

    // Layer 1
    this.shape = new cjs.Shape();
    this.shape.graphics
      .f("#000000")
      .s()
      .p(
        "AgWBAQgJgCgGgGQgFgEgCgIQgCgIAAgJIAAgFIAeAAIAAAFQAAAIAEAFQAEAFAIABQAGAAAFgFQAFgEAAgHQAAgHgEgDIgIgEIgWgJQgNgFgHgHQgEgEgCgGQgBgFAAgHQAAgIACgHQADgHAGgFQAGgGAIgDQAKgDAKAAQAMAAAIADQAIACAGAEQAKAKAAASIAAAFIgdAAQAAgKgEgFQgDgEgIAAQgEgBgFAEQgFAEAAAGQAAAGADADQADAEAIACIATAIQAPAEAHAHQAGAIAAAQQAAAKgDAHQgEAIgGAFQgHAFgIACQgJACgKAAQgNAAgJgDg"
      );
    this.shape.setTransform(377.6, 15.6);

    this.shape_1 = new cjs.Shape();
    this.shape_1.graphics
      .f("#000000")
      .s()
      .p(
        "AANBTIgOgBQgGgCgDgEQgEgEgBgGIgBgQIAAhIIgRAAIAAgXIARAAIAAglIAfAAIAAAlIATAAIAAAXIgTAAIAABEQAAAHACADQADAEAGAAIAFAAIADgBIAAAXIgKABg"
      );
    this.shape_1.setTransform(368.8, 13.8);

    this.shape_2 = new cjs.Shape();
    this.shape_2.graphics
      .f("#000000")
      .s()
      .p("AgPBWIAAh/IAfAAIAAB/gAgPg5IAAgcIAfAAIAAAcg");
    this.shape_2.setTransform(362.3, 13.4);

    this.shape_3 = new cjs.Shape();
    this.shape_3.graphics
      .f("#000000")
      .s()
      .p(
        "AgEBTQgHgDgGgKIAAAOIggAAIAAiqIAhAAIAAA3IAAAAQAGgIAHgEQAEgDAKAAQAUgBAKARQAEAHADAOQACALAAARQAAATgCANQgDANgEAHQgGAIgHADQgIAFgJAAQgLgBgEgDgAgIgSQgDACgBAGQgEAKAAATQAAAWAEAKQADALAJAAQALAAADgLQADgKAAgWQAAgTgDgKQgCgGgEgCQgDgDgFAAQgEAAgEADg"
      );
    this.shape_3.setTransform(353.6, 13.6);

    this.shape_4 = new cjs.Shape();
    this.shape_4.graphics
      .f("#000000")
      .s()
      .p(
        "AggBAQgGgDgEgFQgDgFgCgHQgCgHAAgGQAAgKACgGQACgGAEgFQAEgEAGgCQAGgDAJgCIARgGQAHgCADgDQADgDAAgGQAAgIgDgEQgEgFgHABQgHgBgEAFQgEAEAAAJIAAADIgdAAIAAgDQAAgLADgIQAEgHAGgFQAGgFAIgCQAJgCAIAAQAOAAAJADQAJADAFAFQAFAFACAIQACAHAAAJIAABBIABAPIADAKIggAAIgCgGIgCgHIAAAAQgGAKgIADQgFADgMAAQgJAAgGgDgAAHAEIgHADQgIACgEAEQgFAGAAAJQAAAGADAGQADAFAHABIAFgCQADgBADgDQADgCACgDQACgFAAgEIAAgag"
      );
    this.shape_4.setTransform(341.6, 15.6);

    this.shape_5 = new cjs.Shape();
    this.shape_5.graphics
      .f("#000000")
      .s()
      .p(
        "AAPBVIAAhXQABgKgEgEQgDgEgIAAQgPAAAAAUIAABVIgiAAIAAipIAiAAIAAA3IAAAAQAKgQATAAQARAAAIAIQAEAFADAHQABAHAAAKIAABdg"
      );
    this.shape_5.setTransform(329.9, 13.5);

    this.shape_6 = new cjs.Shape();
    this.shape_6.graphics
      .f("#000000")
      .s()
      .p(
        "AgbBSQgIgDgFgIQgJgQAAgkQAAgRACgLQADgOAEgHQAKgRAUABQAKAAAEADQAHAEAGAIIAAAAIAAg3IAhAAIAACqIggAAIAAgOQgFAKgIADQgFADgKABQgJAAgIgFgAgHgSQgEACgCAGQgDAKAAATQAAAWADAKQADALAKAAQAFAAAEgCQADgDABgGQAEgKAAgWQAAgTgEgKQgBgGgDgCQgEgDgFAAQgEAAgDADg"
      );
    this.shape_6.setTransform(312, 13.6);

    this.shape_7 = new cjs.Shape();
    this.shape_7.graphics
      .f("#000000")
      .s()
      .p(
        "AAQBCIAAhXQgBgKgDgEQgDgEgIAAQgQAAAAAVIAABUIggAAIAAh/IAfAAIAAAPQAGgKAJgEQAGgFALAAQAPAAAJAJQAEAEACAHQACAHAAAKIAABeg"
      );
    this.shape_7.setTransform(300.2, 15.4);

    this.shape_8 = new cjs.Shape();
    this.shape_8.graphics
      .f("#000000")
      .s()
      .p(
        "AggBAQgGgDgEgFQgDgFgCgHQgCgHAAgGQAAgKACgGQACgGAEgFQAEgEAGgCQAGgDAJgCIARgGQAHgCADgDQADgDAAgGQAAgIgDgEQgEgFgHABQgHgBgEAFQgEAEAAAJIAAADIgdAAIAAgDQAAgLADgIQAEgHAGgFQAGgFAIgCQAJgCAIAAQAOAAAJADQAJADAFAFQAFAFACAIQACAHAAAJIAABBIABAPIADAKIggAAIgCgGIgCgHIAAAAQgGAKgIADQgFADgMAAQgJAAgGgDgAAHAEIgHADQgIACgEAEQgFAGAAAJQAAAGADAGQADAFAHABIAFgCQADgBADgDQADgCACgDQACgFAAgEIAAgag"
      );
    this.shape_8.setTransform(288.3, 15.6);

    this.shape_9 = new cjs.Shape();
    this.shape_9.graphics
      .f("#000000")
      .s()
      .p(
        "AgWBAQgJgCgGgGQgFgEgCgIQgCgIAAgJIAAgFIAeAAIAAAFQAAAIAEAFQAEAFAIABQAGAAAFgFQAFgEAAgHQAAgHgEgDIgIgEIgWgJQgNgFgHgHQgEgEgCgGQgBgFAAgHQAAgIACgHQADgHAGgFQAGgGAIgDQAKgDAKAAQAMAAAIADQAIACAGAEQAKAKAAASIAAAFIgdAAQAAgKgEgFQgDgEgIAAQgEgBgFAEQgFAEAAAGQAAAGADADQADAEAIACIATAIQAPAEAHAHQAGAIAAAQQAAAKgDAHQgEAIgGAFQgHAFgIACQgJACgKAAQgNAAgJgDg"
      );
    this.shape_9.setTransform(271.6, 15.6);

    this.shape_10 = new cjs.Shape();
    this.shape_10.graphics
      .f("#000000")
      .s()
      .p("AgPBVIAAipIAfAAIAACpg");
    this.shape_10.setTransform(263.4, 13.5);

    this.shape_11 = new cjs.Shape();
    this.shape_11.graphics
      .f("#000000")
      .s()
      .p("AgPBVIAAipIAfAAIAACpg");
    this.shape_11.setTransform(257.6, 13.5);

    this.shape_12 = new cjs.Shape();
    this.shape_12.graphics
      .f("#000000")
      .s()
      .p("AgPBWIAAh/IAfAAIAAB/gAgPg5IAAgcIAfAAIAAAcg");
    this.shape_12.setTransform(251.9, 13.4);

    this.shape_13 = new cjs.Shape();
    this.shape_13.graphics
      .f("#000000")
      .s()
      .p("AARBVIgZg1IgLAQIAAAlIgiAAIAAipIAiAAIAABYIAAAAIAfguIAlAAIglAxIAqBOg");
    this.shape_13.setTransform(243.7, 13.5);

    this.shape_14 = new cjs.Shape();
    this.shape_14.graphics
      .f("#000000")
      .s()
      .p(
        "AgWBAQgJgCgGgGQgFgEgCgIQgCgIAAgJIAAgFIAeAAIAAAFQAAAIAEAFQAEAFAIABQAGAAAFgFQAFgEAAgHQAAgHgEgDIgIgEIgWgJQgNgFgHgHQgEgEgCgGQgBgFAAgHQAAgIACgHQADgHAGgFQAGgGAIgDQAKgDAKAAQAMAAAIADQAIACAGAEQAKAKAAASIAAAFIgdAAQAAgKgEgFQgDgEgIAAQgEgBgFAEQgFAEAAAGQAAAGADADQADAEAIACIATAIQAPAEAHAHQAGAIAAAQQAAAKgDAHQgEAIgGAFQgHAFgIACQgJACgKAAQgNAAgJgDg"
      );
    this.shape_14.setTransform(231.7, 15.6);

    this.shape_15 = new cjs.Shape();
    this.shape_15.graphics
      .f("#000000")
      .s()
      .p(
        "AgOBBQgHgBgFgDQgKgGgFgJQgEgLgCgMIgBgXQAAgMACgMQACgMAFgJQAGgKAKgFQAKgGAPAAQAOAAAJAFQAJAEAGAJQAFAIACANQACALAAAQIAAAFIg/AAIAAALIAAALIADAJIAFAHQADACADABQAIAAAEgHQAEgFABgNIAeAAQgBAWgLAMQgLAMgYAAQgHAAgHgCgAgGgpQgDACgCAEIgDAIIAAAJIAAAFIAfAAIgBgMQAAgHgDgDQgBgFgEgCQgDgBgEAAQgEgBgDADg"
      );
    this.shape_15.setTransform(215.1, 15.6);

    this.shape_16 = new cjs.Shape();
    this.shape_16.graphics
      .f("#000000")
      .s()
      .p("AgRBAIgih/IAjAAIARBaIARhaIAiAAIghB/g");
    this.shape_16.setTransform(204.2, 15.6);

    this.shape_17 = new cjs.Shape();
    this.shape_17.graphics
      .f("#000000")
      .s()
      .p("AgPBWIAAh/IAfAAIAAB/gAgPg5IAAgcIAfAAIAAAcg");
    this.shape_17.setTransform(196, 13.4);

    this.shape_18 = new cjs.Shape();
    this.shape_18.graphics
      .f("#000000")
      .s()
      .p(
        "AAMBTIgNgBQgGgCgEgEQgDgEgBgGIgBgQIAAhIIgRAAIAAgXIARAAIAAglIAfAAIAAAlIATAAIAAAXIgTAAIAABEQAAAHACADQACAEAIAAIADAAIAEgBIAAAXIgLABg"
      );
    this.shape_18.setTransform(189.6, 13.8);

    this.shape_19 = new cjs.Shape();
    this.shape_19.graphics
      .f("#000000")
      .s()
      .p(
        "AgUBAQgKgDgFgHQgHgJgCgNQgEgNAAgTQAAgSAEgNQAEgNAHgIQAHgHAJgEQAKgDAJAAQAMAAAJAEQAJADAFAHQAGAGADAKQADAIAAAMIggAAIAAgJIgCgIQgCgEgDgDQgDgCgFAAQgDAAgFADQgEACgBAGQgCAFgBAJIgBARIABAUQABAJACAGQABAFAEADQADACAEABQAIgBAFgHQADgHAAgQIAgAAQAAANgDAKQgDAJgGAHQgLANgaAAQgLAAgJgDg"
      );
    this.shape_19.setTransform(180.5, 15.6);

    this.shape_20 = new cjs.Shape();
    this.shape_20.graphics
      .f("#000000")
      .s()
      .p(
        "AgOBBQgHgBgFgDQgKgGgFgJQgFgLgBgMIgBgXQAAgMACgMQACgMAFgJQAFgKALgFQAKgGAPAAQAOAAAJAFQAKAEAEAJQAGAIACANQACALAAAQIAAAFIg/AAIAAALIAAALIADAJIAFAHQADACADABQAIAAAEgHQAEgFABgNIAeAAQgBAWgLAMQgLAMgYAAQgHAAgHgCgAgGgpQgDACgCAEIgDAIIAAAJIAAAFIAfAAIgBgMQgBgHgCgDQgBgFgDgCQgEgBgEAAQgDgBgEADg"
      );
    this.shape_20.setTransform(169.4, 15.6);

    this.shape_21 = new cjs.Shape();
    this.shape_21.graphics
      .f("#000000")
      .s()
      .p(
        "AgQBXIAAhpIgRAAIAAgWIARAAIAAgPQAAgJACgGQACgGAFgDQAEgEAFgBQAGgCAIAAIASABIAAAXIgDAAIgEAAQgGAAgDACQgDADAAAFIAAAMIATAAIAAAWIgTAAIAABpg"
      );
    this.shape_21.setTransform(160.3, 13.3);

    this.shape_22 = new cjs.Shape();
    this.shape_22.graphics
      .f("#000000")
      .s()
      .p(
        "AgQBXIAAhpIgRAAIAAgWIARAAIAAgPQAAgJACgGQACgGAFgDQAFgEAEgBQAHgCAHAAIASABIAAAXIgDAAIgEAAQgGAAgDACQgDADAAAFIAAAMIATAAIAAAWIgTAAIAABpg"
      );
    this.shape_22.setTransform(153.2, 13.3);

    this.shape_23 = new cjs.Shape();
    this.shape_23.graphics
      .f("#000000")
      .s()
      .p(
        "AgOBBQgHgBgFgDQgKgGgFgJQgFgLgBgMIgBgXQAAgMACgMQACgMAFgJQAFgKALgFQAKgGAPAAQAOAAAJAFQAKAEAFAJQAFAIACANQACALAAAQIAAAFIg/AAIAAALIAAALIADAJIAFAHQADACADABQAIAAAEgHQAEgFABgNIAeAAQgBAWgLAMQgLAMgYAAQgHAAgHgCgAgGgpQgDACgCAEIgDAIIAAAJIAAAFIAfAAIgBgMQgBgHgCgDQgBgFgDgCQgEgBgEAAQgEgBgDADg"
      );
    this.shape_23.setTransform(144.1, 15.6);

    this.shape_24 = new cjs.Shape();
    this.shape_24.graphics
      .f("#000000")
      .s()
      .p(
        "AAPBCIAAhXQAAgKgDgEQgEgEgHAAQgPAAgBAVIAABUIggAAIAAh/IAfAAIAAAPQAGgKAJgEQAGgFAKAAQARAAAIAJQAEAEACAHQADAHAAAKIAABeg"
      );
    this.shape_24.setTransform(132.5, 15.4);

    this.shape_25 = new cjs.Shape();
    this.shape_25.graphics
      .f("#000000")
      .s()
      .p("AgPBWIAAh/IAfAAIAAB/gAgPg5IAAgcIAfAAIAAAcg");
    this.shape_25.setTransform(123.6, 13.4);

    this.shape_26 = new cjs.Shape();
    this.shape_26.graphics
      .f("#000000")
      .s()
      .p(
        "AgWBAQgJgCgGgGQgFgEgCgIQgCgIAAgJIAAgFIAeAAIAAAFQAAAIAEAFQAEAFAIABQAGAAAFgFQAFgEAAgHQAAgHgEgDIgIgEIgWgJQgNgFgHgHQgEgEgCgGQgBgFAAgHQAAgIACgHQADgHAGgFQAGgGAIgDQAKgDAKAAQAMAAAIADQAIACAGAEQAKAKAAASIAAAFIgdAAQAAgKgEgFQgDgEgIAAQgEgBgFAEQgFAEAAAGQAAAGADADQADAEAIACIATAIQAPAEAHAHQAGAIAAAQQAAAKgDAHQgEAIgGAFQgHAFgIACQgJACgKAAQgNAAgJgDg"
      );
    this.shape_26.setTransform(109.7, 15.6);

    this.shape_27 = new cjs.Shape();
    this.shape_27.graphics
      .f("#000000")
      .s()
      .p(
        "AgOBBQgHgBgFgDQgKgGgFgJQgEgLgCgMIgBgXQAAgMACgMQACgMAFgJQAFgKAKgFQALgGAPAAQAOAAAJAFQAKAEAEAJQAGAIACANQACALAAAQIAAAFIhAAAIAAALIABALIADAJIAFAHQADACADABQAIAAAEgHQADgFACgNIAeAAQgBAWgLAMQgLAMgYAAQgHAAgHgCgAgGgpQgDACgCAEIgDAIIgBAJIAAAFIAgAAIgBgMQgBgHgCgDQgBgFgDgCQgDgBgFAAQgDgBgEADg"
      );
    this.shape_27.setTransform(98.8, 15.6);

    this.shape_28 = new cjs.Shape();
    this.shape_28.graphics
      .f("#000000")
      .s()
      .p(
        "AANBTIgOgBQgGgCgDgEQgEgEgBgGIgBgQIAAhIIgRAAIAAgXIARAAIAAglIAfAAIAAAlIATAAIAAAXIgTAAIAABEQAAAHACADQADAEAGAAIAFAAIADgBIAAAXIgKABg"
      );
    this.shape_28.setTransform(89.8, 13.8);

    this.shape_29 = new cjs.Shape();
    this.shape_29.graphics
      .f("#000000")
      .s()
      .p(
        "AggBAQgGgDgEgFQgDgFgCgHQgCgHAAgGQAAgKACgGQACgGAEgFQAEgEAGgCQAGgDAJgCIARgGQAHgCADgDQADgDAAgGQAAgIgDgEQgEgFgHABQgHgBgEAFQgEAEAAAJIAAADIgdAAIAAgDQAAgLADgIQAEgHAGgFQAGgFAIgCQAJgCAIAAQAOAAAJADQAJADAFAFQAFAFACAIQACAHAAAJIAABBIABAPIADAKIggAAIgCgGIgCgHIAAAAQgGAKgIADQgFADgMAAQgJAAgGgDgAAHAEIgHADQgIACgEAEQgFAGAAAJQAAAGADAGQADAFAHABIAFgCQADgBADgDQADgCACgDQACgFAAgEIAAgag"
      );
    this.shape_29.setTransform(80.3, 15.6);

    this.shape_30 = new cjs.Shape();
    this.shape_30.graphics
      .f("#000000")
      .s()
      .p(
        "AAQBCIAAhXQAAgKgEgEQgEgEgHAAQgQAAAAAVIAABUIghAAIAAh/IAhAAIAAAPQAFgKAIgEQAHgFALAAQAPAAAJAJQAEAEACAHQACAHAAAKIAABeg"
      );
    this.shape_30.setTransform(68.7, 15.4);

    this.shape_31 = new cjs.Shape();
    this.shape_31.graphics
      .f("#000000")
      .s()
      .p("AgPBWIAAh/IAfAAIAAB/gAgPg5IAAgcIAfAAIAAAcg");
    this.shape_31.setTransform(59.8, 13.4);

    this.shape_32 = new cjs.Shape();
    this.shape_32.graphics
      .f("#000000")
      .s()
      .p(
        "AAvBCIAAhYQAAgJgDgEQgEgEgHAAQgIAAgEAFQgFAFAAAMIAABTIgfAAIAAhYQAAgJgDgEQgDgEgHAAQgIAAgFAFQgEAFgBAMIAABTIggAAIAAh/IAfAAIAAANQAHgJAIgEQAHgEALAAQAMAAAFAGQAJAFACAKIAAAAQAFgKAIgGQAJgFALAAQAJAAAGADQAFACAFAFQADAFACAHQACAIABAJIAABcg"
      );
    this.shape_32.setTransform(47.9, 15.4);

    this.shape_33 = new cjs.Shape();
    this.shape_33.graphics
      .f("#000000")
      .s()
      .p("AgPBWIAAh/IAfAAIAAB/gAgPg5IAAgcIAfAAIAAAcg");
    this.shape_33.setTransform(35.9, 13.4);

    this.shape_34 = new cjs.Shape();
    this.shape_34.graphics
      .f("#000000")
      .s()
      .p("AgPBVIAAipIAfAAIAACpg");
    this.shape_34.setTransform(30.1, 13.5);

    this.shape_35 = new cjs.Shape();
    this.shape_35.graphics
      .f("#000000")
      .s()
      .p("AgwBVIAAipIBeAAIAAAcIg7AAIAAAoIA4AAIAAAbIg4AAIAAAuIA9AAIAAAcg");
    this.shape_35.setTransform(21.9, 13.5);

    this.shape_36 = new cjs.Shape();
    this.shape_36.graphics
      .f("#000000")
      .s()
      .p(
        "AgPAnQgIgDgGgGQgFgGgEgIQgEgIABgIQgBgHAEgIQAEgIAFgGQAGgFAIgEQAIgDAHAAQAIAAAIADQAIAEAGAFQAFAGAEAIQAEAIgBAHQABAIgEAIQgEAIgFAGQgGAGgIADQgIADgIAAQgHAAgIgDg"
      );
    this.shape_36.setTransform(4, 13.5);

    this.timeline.addTween(
      cjs.Tween.get({})
        .to({
          state: [
            { t: this.shape_36 },
            { t: this.shape_35 },
            { t: this.shape_34 },
            { t: this.shape_33 },
            { t: this.shape_32 },
            { t: this.shape_31 },
            { t: this.shape_30 },
            { t: this.shape_29 },
            { t: this.shape_28 },
            { t: this.shape_27 },
            { t: this.shape_26 },
            { t: this.shape_25 },
            { t: this.shape_24 },
            { t: this.shape_23 },
            { t: this.shape_22 },
            { t: this.shape_21 },
            { t: this.shape_20 },
            { t: this.shape_19 },
            { t: this.shape_18 },
            { t: this.shape_17 },
            { t: this.shape_16 },
            { t: this.shape_15 },
            { t: this.shape_14 },
            { t: this.shape_13 },
            { t: this.shape_12 },
            { t: this.shape_11 },
            { t: this.shape_10 },
            { t: this.shape_9 },
            { t: this.shape_8 },
            { t: this.shape_7 },
            { t: this.shape_6 },
            { t: this.shape_5 },
            { t: this.shape_4 },
            { t: this.shape_3 },
            { t: this.shape_2 },
            { t: this.shape_1 },
            { t: this.shape }
          ]
        })
        .wait(1)
    );
  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = new cjs.Rectangle(-4, -3, 429.3, 60.7);

  (lib.text66 = function(mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {});

    // Layer 1
    this.shape = new cjs.Shape();
    this.shape.graphics
      .f("#000000")
      .s()
      .p(
        "AgWBAQgJgCgGgGQgFgEgCgIQgCgIAAgJIAAgFIAeAAIAAAFQAAAIAEAFQAEAFAIABQAGAAAFgFQAFgEAAgHQAAgHgEgDIgIgEIgWgJQgNgFgHgHQgEgEgCgGQgBgFAAgHQAAgIACgHQADgHAGgFQAGgGAIgDQAKgDAKAAQAMAAAIADQAIACAGAEQAKAKAAASIAAAFIgdAAQAAgKgEgFQgDgEgIAAQgEgBgFAEQgFAEAAAGQAAAGADADQADAEAIACIATAIQAPAEAHAHQAGAIAAAQQAAAKgDAHQgEAIgGAFQgHAFgIACQgJACgKAAQgNAAgJgDg"
      );
    this.shape.setTransform(445, 15.6);

    this.shape_1 = new cjs.Shape();
    this.shape_1.graphics
      .f("#000000")
      .s()
      .p("AgPBVIAAipIAfAAIAACpg");
    this.shape_1.setTransform(436.8, 13.5);

    this.shape_2 = new cjs.Shape();
    this.shape_2.graphics
      .f("#000000")
      .s()
      .p("AgPBVIAAipIAfAAIAACpg");
    this.shape_2.setTransform(431.1, 13.5);

    this.shape_3 = new cjs.Shape();
    this.shape_3.graphics
      .f("#000000")
      .s()
      .p("AgPBWIAAh/IAfAAIAAB/gAgPg5IAAgcIAfAAIAAAcg");
    this.shape_3.setTransform(425.3, 13.4);

    this.shape_4 = new cjs.Shape();
    this.shape_4.graphics
      .f("#000000")
      .s()
      .p("AARBVIgZg1IgMAQIAAAlIghAAIAAipIAhAAIAABYIABAAIAfguIAlAAIglAxIAqBOg");
    this.shape_4.setTransform(417.1, 13.5);

    this.shape_5 = new cjs.Shape();
    this.shape_5.graphics
      .f("#000000")
      .s()
      .p(
        "AgWBAQgJgCgGgGQgFgEgCgIQgCgIAAgJIAAgFIAeAAIAAAFQAAAIAEAFQAEAFAIABQAGAAAFgFQAFgEAAgHQAAgHgEgDIgIgEIgWgJQgNgFgHgHQgEgEgCgGQgBgFAAgHQAAgIACgHQADgHAGgFQAGgGAIgDQAKgDAKAAQAMAAAIADQAIACAGAEQAKAKAAASIAAAFIgdAAQAAgKgEgFQgDgEgIAAQgEgBgFAEQgFAEAAAGQAAAGADADQADAEAIACIATAIQAPAEAHAHQAGAIAAAQQAAAKgDAHQgEAIgGAFQgHAFgIACQgJACgKAAQgNAAgJgDg"
      );
    this.shape_5.setTransform(405.1, 15.6);

    this.shape_6 = new cjs.Shape();
    this.shape_6.graphics
      .f("#000000")
      .s()
      .p(
        "AARBAIgRhaIgPBaIgmAAIgch/IAhAAIAPBZIABAAIAQhZIAiAAIARBZIAAAAIAQhZIAfAAIgbB/g"
      );
    this.shape_6.setTransform(385.6, 15.6);

    this.shape_7 = new cjs.Shape();
    this.shape_7.graphics
      .f("#000000")
      .s()
      .p(
        "AgOBBQgHgBgFgDQgKgGgFgJQgEgLgCgMIgBgXQAAgMACgMQACgMAFgJQAGgKAKgFQAKgGAPAAQAOAAAJAFQAJAEAGAJQAFAIACANQACALAAAQIAAAFIg/AAIAAALIAAALIADAJIAFAHQADACADABQAIAAAEgHQAEgFABgNIAeAAQgBAWgLAMQgLAMgYAAQgHAAgHgCgAgGgpQgDACgCAEIgDAIIAAAJIAAAFIAfAAIgBgMQAAgHgDgDQgBgFgEgCQgDgBgEAAQgEgBgDADg"
      );
    this.shape_7.setTransform(371.7, 15.6);

    this.shape_8 = new cjs.Shape();
    this.shape_8.graphics
      .f("#000000")
      .s()
      .p(
        "AAQBCIAAhXQgBgKgDgEQgEgEgHAAQgQAAAAAVIAABUIggAAIAAh/IAfAAIAAAPQAGgKAJgEQAGgFALAAQAPAAAJAJQAEAEACAHQACAHABAKIAABeg"
      );
    this.shape_8.setTransform(360.1, 15.4);

    this.shape_9 = new cjs.Shape();
    this.shape_9.graphics
      .f("#000000")
      .s()
      .p(
        "AgQBXIAAhpIgRAAIAAgWIARAAIAAgPQAAgJACgGQADgGAEgDQAFgEAEgBQAHgCAIAAIARABIAAAXIgEAAIgCAAQgIAAgCACQgDADAAAFIAAAMIATAAIAAAWIgTAAIAABpg"
      );
    this.shape_9.setTransform(344.9, 13.3);

    this.shape_10 = new cjs.Shape();
    this.shape_10.graphics
      .f("#000000")
      .s()
      .p(
        "AgXA/QgKgDgGgJQgGgJgCgNQgCgMgBgRQAAgPADgMQADgNAGgJQAGgIAKgFQAJgEANAAQAPgBAKAFQAJAEAGAJQAFAIADANQACANAAAPQAAARgCAMQgDANgGAIQgGAJgKAEQgJAEgOAAIgCAAQgNAAgIgEgAgIgoQgEADgCAGIgBAOIgBARIABASIABAOQACAHAEADQADADAFAAQAEAAAEgCQADgDACgFQADgIACgbIgBgTQgCgJgCgFQgEgKgJgBQgFAAgDAEg"
      );
    this.shape_10.setTransform(335.5, 15.6);

    this.shape_11 = new cjs.Shape();
    this.shape_11.graphics
      .f("#000000")
      .s()
      .p(
        "AAPBCIAAhXQAAgKgDgEQgDgEgIAAQgPAAAAAVIAABUIghAAIAAh/IAfAAIAAAPQAGgKAIgEQAHgFAKAAQARAAAIAJQAEAEADAHQACAHAAAKIAABeg"
      );
    this.shape_11.setTransform(318, 15.4);

    this.shape_12 = new cjs.Shape();
    this.shape_12.graphics
      .f("#000000")
      .s()
      .p(
        "AgXA/QgKgDgGgJQgGgJgCgNQgCgMgBgRQAAgPADgMQADgNAGgJQAGgIAKgFQAJgEANAAQAPgBAKAFQAJAEAGAJQAFAIADANQACANAAAPQAAARgCAMQgDANgGAIQgGAJgKAEQgJAEgOAAIgCAAQgNAAgIgEgAgIgoQgEADgCAGIgBAOIgBARIABASIABAOQACAHAEADQADADAFAAQAEAAAEgCQADgDACgFQADgIACgbIgBgTQgCgJgCgFQgEgKgJgBQgFAAgDAEg"
      );
    this.shape_12.setTransform(306.3, 15.6);

    this.shape_13 = new cjs.Shape();
    this.shape_13.graphics
      .f("#000000")
      .s()
      .p("AgPBWIAAh/IAfAAIAAB/gAgPg5IAAgcIAfAAIAAAcg");
    this.shape_13.setTransform(297.6, 13.4);

    this.shape_14 = new cjs.Shape();
    this.shape_14.graphics
      .f("#000000")
      .s()
      .p(
        "AANBTIgOgBQgGgCgDgEQgEgEgBgGIgBgQIAAhIIgRAAIAAgXIARAAIAAglIAfAAIAAAlIATAAIAAAXIgTAAIAABEQAAAHACADQADAEAGAAIAFAAIADgBIAAAXIgKABg"
      );
    this.shape_14.setTransform(291.3, 13.8);

    this.shape_15 = new cjs.Shape();
    this.shape_15.graphics
      .f("#000000")
      .s()
      .p(
        "AAPBCIAAhXQABgKgEgEQgDgEgIAAQgPAAAAAVIAABUIghAAIAAh/IAgAAIAAAPQAFgKAIgEQAHgFAKAAQAQAAAJAJQAEAEADAHQACAHAAAKIAABeg"
      );
    this.shape_15.setTransform(281.7, 15.4);

    this.shape_16 = new cjs.Shape();
    this.shape_16.graphics
      .f("#000000")
      .s()
      .p(
        "AgOBBQgHgBgFgDQgKgGgFgJQgEgLgBgMIgCgXQAAgMACgMQACgMAFgJQAGgKAJgFQALgGAOAAQAPAAAJAFQAJAEAGAJQAFAIACANQACALAAAQIAAAFIhAAAIAAALIABALIADAJIAFAHQADACADABQAIAAAEgHQADgFACgNIAeAAQgBAWgLAMQgLAMgYAAQgHAAgHgCgAgGgpQgDACgCAEIgDAIIgBAJIAAAFIAgAAIgBgMQgBgHgBgDQgCgFgEgCQgCgBgGAAQgCgBgEADg"
      );
    this.shape_16.setTransform(270.1, 15.6);

    this.shape_17 = new cjs.Shape();
    this.shape_17.graphics
      .f("#000000")
      .s()
      .p(
        "AANBTIgOgBQgHgCgDgEQgDgEgBgGIgBgQIAAhIIgRAAIAAgXIARAAIAAglIAfAAIAAAlIATAAIAAAXIgTAAIAABEQAAAHACADQACAEAIAAIADAAIAEgBIAAAXIgLABg"
      );
    this.shape_17.setTransform(261.1, 13.8);

    this.shape_18 = new cjs.Shape();
    this.shape_18.graphics
      .f("#000000")
      .s()
      .p(
        "AgOBBQgHgBgFgDQgKgGgFgJQgFgLAAgMIgCgXQAAgMACgMQACgMAFgJQAFgKAKgFQALgGAOAAQAPAAAJAFQAKAEAEAJQAGAIACANQACALAAAQIAAAFIhAAAIAAALIABALIADAJIAFAHQADACADABQAIAAAEgHQADgFACgNIAeAAQgBAWgLAMQgLAMgYAAQgHAAgHgCgAgGgpQgDACgCAEIgDAIIgBAJIAAAFIAgAAIgBgMQAAgHgDgDQgBgFgDgCQgEgBgFAAQgCgBgEADg"
      );
    this.shape_18.setTransform(251.9, 15.6);

    this.shape_19 = new cjs.Shape();
    this.shape_19.graphics
      .f("#000000")
      .s()
      .p(
        "AghBCIAAh/IAhAAIAAARQADgJAHgGQAHgGAKAAIADAAIAEABIAAAfIgGAAIgFAAIgIABQgFABgDADQgEADgCAEQgBAFAAAGIAABMg"
      );
    this.shape_19.setTransform(242.9, 15.4);

    this.shape_20 = new cjs.Shape();
    this.shape_20.graphics
      .f("#000000")
      .s()
      .p(
        "AgbBSQgIgDgFgIQgJgQAAgkQAAgRACgLQADgOAEgHQAKgRAUABQAKAAAEADQAHAEAGAIIAAAAIAAg3IAhAAIAACqIggAAIAAgOQgFAKgIADQgFADgKABQgJAAgIgFgAgHgSQgEACgCAGQgDAKAAATQAAAWADAKQADALAKAAQAFAAAEgCQADgDABgGQAEgKAAgWQAAgTgEgKQgBgGgDgCQgEgDgFAAQgEAAgDADg"
      );
    this.shape_20.setTransform(226.5, 13.6);

    this.shape_21 = new cjs.Shape();
    this.shape_21.graphics
      .f("#000000")
      .s()
      .p(
        "AAQBCIAAhXQgBgKgDgEQgEgEgHAAQgQAAAAAVIAABUIggAAIAAh/IAfAAIAAAPQAGgKAJgEQAGgFALAAQAPAAAJAJQAEAEACAHQACAHAAAKIAABeg"
      );
    this.shape_21.setTransform(214.7, 15.4);

    this.shape_22 = new cjs.Shape();
    this.shape_22.graphics
      .f("#000000")
      .s()
      .p(
        "AggBAQgGgDgEgFQgDgFgCgHQgCgHAAgGQAAgKACgGQACgGAEgFQAEgEAGgCQAGgDAJgCIARgGQAHgCADgDQADgDAAgGQAAgIgDgEQgEgFgHABQgHgBgEAFQgEAEAAAJIAAADIgdAAIAAgDQAAgLADgIQAEgHAGgFQAGgFAIgCQAJgCAIAAQAOAAAJADQAJADAFAFQAFAFACAIQACAHAAAJIAABBIABAPIADAKIggAAIgCgGIgCgHIAAAAQgGAKgIADQgFADgMAAQgJAAgGgDgAAHAEIgHADQgIACgEAEQgFAGAAAJQAAAGADAGQADAFAHABIAFgCQADgBADgDQADgCACgDQACgFAAgEIAAgag"
      );
    this.shape_22.setTransform(202.8, 15.6);

    this.shape_23 = new cjs.Shape();
    this.shape_23.graphics
      .f("#000000")
      .s()
      .p(
        "AgjBOQgMgIAAgRIAgAAQAAAGAFAEIAFADIAFAAQAJAAAEgGQAEgHAAgJIAAgRIAAAAQgFAHgHAFQgGADgIAAQgTAAgKgOQgFgIgDgNQgCgKAAgSIABgXQABgMAEgJQAFgJAIgHQAEgCAFgCQAFgCAHABQAHAAAGADQAHAEAFALIAAAAIAAgPIAgAAIAAB5QAAAZgMAMQgHAGgKAEQgKACgNAAQgVAAgLgJgAgHg6QgDACgCAFIgDAOIAAAXIAAAMQABAFACAEQACAEADADQADADAEAAQAFAAADgDQAEgDACgEQACgFAAgFIABgPQAAgYgDgJQgEgKgKAAQgDAAgEADg"
      );
    this.shape_23.setTransform(185.2, 17.6);

    this.shape_24 = new cjs.Shape();
    this.shape_24.graphics
      .f("#000000")
      .s()
      .p(
        "AAPBCIAAhXQAAgKgDgEQgEgEgHAAQgPAAAAAVIAABUIgiAAIAAh/IAhAAIAAAPQAFgKAIgEQAHgFAKAAQARAAAIAJQAEAEADAHQABAHAAAKIAABeg"
      );
    this.shape_24.setTransform(173.4, 15.4);

    this.shape_25 = new cjs.Shape();
    this.shape_25.graphics
      .f("#000000")
      .s()
      .p("AgPBWIAAh/IAfAAIAAB/gAgPg5IAAgcIAfAAIAAAcg");
    this.shape_25.setTransform(164.5, 13.4);

    this.shape_26 = new cjs.Shape();
    this.shape_26.graphics
      .f("#000000")
      .s()
      .p(
        "AAPBCIAAhXQABgKgEgEQgDgEgIAAQgPAAAAAVIAABUIgiAAIAAh/IAhAAIAAAPQAFgKAIgEQAHgFAKAAQAQAAAJAJQAEAEADAHQACAHAAAKIAABeg"
      );
    this.shape_26.setTransform(155.7, 15.4);

    this.shape_27 = new cjs.Shape();
    this.shape_27.graphics
      .f("#000000")
      .s()
      .p(
        "AggBCIAAh/IAfAAIAAARQAEgJAHgGQAHgGALAAIADAAIACABIAAAfIgEAAIgGAAIgJABQgEABgEADQgDADgCAEQgBAFAAAGIAABMg"
      );
    this.shape_27.setTransform(146.2, 15.4);

    this.shape_28 = new cjs.Shape();
    this.shape_28.graphics
      .f("#000000")
      .s()
      .p(
        "AggBAQgGgDgEgFQgDgFgCgHQgCgHAAgGQAAgKACgGQACgGAEgFQAEgEAGgCQAGgDAJgCIARgGQAHgCADgDQADgDAAgGQAAgIgDgEQgEgFgHABQgHgBgEAFQgEAEAAAJIAAADIgdAAIAAgDQAAgLADgIQAEgHAGgFQAGgFAIgCQAJgCAIAAQAOAAAJADQAJADAFAFQAFAFACAIQACAHAAAJIAABBIABAPIADAKIggAAIgCgGIgCgHIAAAAQgGAKgIADQgFADgMAAQgJAAgGgDgAAHAEIgHADQgIACgEAEQgFAGAAAJQAAAGADAGQADAFAHABIAFgCQADgBADgDQADgCACgDQACgFAAgEIAAgag"
      );
    this.shape_28.setTransform(135.9, 15.6);

    this.shape_29 = new cjs.Shape();
    this.shape_29.graphics
      .f("#000000")
      .s()
      .p(
        "AgOBBQgHgBgFgDQgKgGgFgJQgFgLAAgMIgCgXQAAgMACgMQACgMAFgJQAFgKAKgFQALgGAOAAQAPAAAJAFQAKAEAEAJQAGAIACANQACALAAAQIAAAFIhAAAIAAALIABALIADAJIAFAHQADACADABQAIAAAEgHQADgFACgNIAeAAQgBAWgLAMQgLAMgYAAQgHAAgHgCgAgGgpQgDACgCAEIgDAIIgBAJIAAAFIAgAAIgBgMQgBgHgBgDQgCgFgDgCQgEgBgFAAQgCgBgEADg"
      );
    this.shape_29.setTransform(124.7, 15.6);

    this.shape_30 = new cjs.Shape();
    this.shape_30.graphics
      .f("#000000")
      .s()
      .p("AgPBVIAAipIAfAAIAACpg");
    this.shape_30.setTransform(116.2, 13.5);

    this.shape_31 = new cjs.Shape();
    this.shape_31.graphics
      .f("#000000")
      .s()
      .p(
        "AgWBAQgJgCgGgGQgFgEgCgIQgCgIAAgJIAAgFIAeAAIAAAFQAAAIAEAFQAEAFAIABQAGAAAFgFQAFgEAAgHQAAgHgEgDIgIgEIgWgJQgNgFgHgHQgEgEgCgGQgBgFAAgHQAAgIACgHQADgHAGgFQAGgGAIgDQAKgDAKAAQAMAAAIADQAIACAGAEQAKAKAAASIAAAFIgdAAQAAgKgEgFQgDgEgIAAQgEgBgFAEQgFAEAAAGQAAAGADADQADAEAIACIATAIQAPAEAHAHQAGAIAAAQQAAAKgDAHQgEAIgGAFQgHAFgIACQgJACgKAAQgNAAgJgDg"
      );
    this.shape_31.setTransform(102.3, 15.6);

    this.shape_32 = new cjs.Shape();
    this.shape_32.graphics
      .f("#000000")
      .s()
      .p(
        "AgOBBQgHgBgFgDQgKgGgFgJQgFgLgBgMIgBgXQAAgMACgMQACgMAFgJQAFgKALgFQAKgGAPAAQAOAAAJAFQAKAEAFAJQAFAIACANQACALAAAQIAAAFIg/AAIAAALIAAALIADAJIAFAHQADACADABQAIAAAEgHQAEgFABgNIAeAAQgBAWgLAMQgLAMgYAAQgHAAgHgCgAgGgpQgDACgCAEIgDAIIAAAJIAAAFIAfAAIgBgMQgBgHgCgDQgBgFgDgCQgEgBgEAAQgEgBgDADg"
      );
    this.shape_32.setTransform(91.4, 15.6);

    this.shape_33 = new cjs.Shape();
    this.shape_33.graphics
      .f("#000000")
      .s()
      .p(
        "AgUBAQgJgDgHgHQgFgJgEgNQgDgNAAgTQAAgSAEgNQAEgNAHgIQAHgHAJgEQAKgDAKAAQALAAAJAEQAJADAFAHQAGAGADAKQADAIAAAMIggAAIgBgJIgBgIQgCgEgDgDQgDgCgEAAQgEAAgFADQgEACgBAGQgCAFgBAJIgBARIABAUQABAJACAGQACAFADADQADACAEABQAIgBAFgHQADgHAAgQIAgAAQAAANgDAKQgDAJgGAHQgLANgaAAQgLAAgJgDg"
      );
    this.shape_33.setTransform(80.3, 15.6);

    this.shape_34 = new cjs.Shape();
    this.shape_34.graphics
      .f("#000000")
      .s()
      .p(
        "AAQBCIAAhXQAAgKgEgEQgDgEgIAAQgQAAAAAVIAABUIghAAIAAh/IAgAAIAAAPQAGgKAJgEQAGgFALAAQAPAAAJAJQAEAEACAHQACAHAAAKIAABeg"
      );
    this.shape_34.setTransform(68.8, 15.4);

    this.shape_35 = new cjs.Shape();
    this.shape_35.graphics
      .f("#000000")
      .s()
      .p(
        "AggBAQgGgDgEgFQgDgFgCgHQgCgHAAgGQAAgKACgGQACgGAEgFQAEgEAGgCQAGgDAJgCIARgGQAHgCADgDQADgDAAgGQAAgIgDgEQgEgFgHABQgHgBgEAFQgEAEAAAJIAAADIgdAAIAAgDQAAgLADgIQAEgHAGgFQAGgFAIgCQAJgCAIAAQAOAAAJADQAJADAFAFQAFAFACAIQACAHAAAJIAABBIABAPIADAKIggAAIgCgGIgCgHIAAAAQgGAKgIADQgFADgMAAQgJAAgGgDgAAHAEIgHADQgIACgEAEQgFAGAAAJQAAAGADAGQADAFAHABIAFgCQADgBADgDQADgCACgDQACgFAAgEIAAgag"
      );
    this.shape_35.setTransform(56.9, 15.6);

    this.shape_36 = new cjs.Shape();
    this.shape_36.graphics
      .f("#000000")
      .s()
      .p(
        "AAQBVIAAhXQAAgKgEgEQgEgEgHAAQgQAAAAAUIAABVIghAAIAAipIAhAAIAAA3IABAAQAKgQAUAAQAPAAAJAIQAEAFADAHQABAHAAAKIAABdg"
      );
    this.shape_36.setTransform(45.3, 13.5);

    this.shape_37 = new cjs.Shape();
    this.shape_37.graphics
      .f("#000000")
      .s()
      .p(
        "AAPBCIAAhXQABgKgEgEQgDgEgIAAQgPAAAAAVIAABUIghAAIAAh/IAgAAIAAAPQAFgKAIgEQAHgFAKAAQAQAAAJAJQAEAEADAHQACAHAAAKIAABeg"
      );
    this.shape_37.setTransform(33.3, 15.4);

    this.shape_38 = new cjs.Shape();
    this.shape_38.graphics
      .f("#000000")
      .s()
      .p("AgwBVIAAipIBeAAIAAAcIg7AAIAAAoIA4AAIAAAbIg4AAIAAAuIA9AAIAAAcg");
    this.shape_38.setTransform(21.9, 13.5);

    this.shape_39 = new cjs.Shape();
    this.shape_39.graphics
      .f("#000000")
      .s()
      .p(
        "AgPAnQgIgDgGgGQgFgGgEgIQgEgIABgIQgBgHAEgIQAEgIAFgGQAGgFAIgEQAIgDAHAAQAIAAAIADQAIAEAGAFQAFAGAEAIQAEAIgBAHQABAIgEAIQgEAIgFAGQgGAGgIADQgIADgIAAQgHAAgIgDg"
      );
    this.shape_39.setTransform(4, 13.5);

    this.timeline.addTween(
      cjs.Tween.get({})
        .to({
          state: [
            { t: this.shape_39 },
            { t: this.shape_38 },
            { t: this.shape_37 },
            { t: this.shape_36 },
            { t: this.shape_35 },
            { t: this.shape_34 },
            { t: this.shape_33 },
            { t: this.shape_32 },
            { t: this.shape_31 },
            { t: this.shape_30 },
            { t: this.shape_29 },
            { t: this.shape_28 },
            { t: this.shape_27 },
            { t: this.shape_26 },
            { t: this.shape_25 },
            { t: this.shape_24 },
            { t: this.shape_23 },
            { t: this.shape_22 },
            { t: this.shape_21 },
            { t: this.shape_20 },
            { t: this.shape_19 },
            { t: this.shape_18 },
            { t: this.shape_17 },
            { t: this.shape_16 },
            { t: this.shape_15 },
            { t: this.shape_14 },
            { t: this.shape_13 },
            { t: this.shape_12 },
            { t: this.shape_11 },
            { t: this.shape_10 },
            { t: this.shape_9 },
            { t: this.shape_8 },
            { t: this.shape_7 },
            { t: this.shape_6 },
            { t: this.shape_5 },
            { t: this.shape_4 },
            { t: this.shape_3 },
            { t: this.shape_2 },
            { t: this.shape_1 },
            { t: this.shape }
          ]
        })
        .wait(1)
    );
  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = new cjs.Rectangle(-4, -3, 503.6, 60.7);

  (lib.text63 = function(mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {});

    // Layer 1
    this.shape = new cjs.Shape();
    this.shape.graphics
      .f("#000000")
      .s()
      .p("AgOA+IAAgmIAdAAIAAAmgAgOgXIAAgmIAdAAIAAAmg");
    this.shape.setTransform(78.5, 15.8);

    this.shape_1 = new cjs.Shape();
    this.shape_1.graphics
      .f("#000000")
      .s()
      .p(
        "AgOBBQgHgBgFgDQgKgGgFgJQgFgLAAgMIgCgXQAAgMACgMQACgMAFgJQAFgKAKgFQALgGAOAAQAPAAAJAFQAKAEAEAJQAGAIACANQACALAAAQIAAAFIhAAAIAAALIABALIADAJIAFAHQADACADABQAIAAAEgHQADgFACgNIAeAAQgBAWgLAMQgLAMgYAAQgHAAgHgCgAgGgpQgDACgCAEIgDAIIgBAJIAAAFIAgAAIgBgMQAAgHgDgDQgBgFgDgCQgEgBgFAAQgCgBgEADg"
      );
    this.shape_1.setTransform(70.1, 15.6);

    this.shape_2 = new cjs.Shape();
    this.shape_2.graphics
      .f("#000000")
      .s()
      .p(
        "AgWBAQgJgCgGgGQgFgEgCgIQgCgIAAgJIAAgFIAeAAIAAAFQAAAIAEAFQAEAFAIABQAGAAAFgFQAFgEAAgHQAAgHgEgDIgIgEIgWgJQgNgFgHgHQgEgEgCgGQgBgFAAgHQAAgIACgHQADgHAGgFQAGgGAIgDQAKgDAKAAQAMAAAIADQAIACAGAEQAKAKAAASIAAAFIgdAAQAAgKgEgFQgDgEgIAAQgEgBgFAEQgFAEAAAGQAAAGADADQADAEAIACIATAIQAPAEAHAHQAGAIAAAQQAAAKgDAHQgEAIgGAFQgHAFgIACQgJACgKAAQgNAAgJgDg"
      );
    this.shape_2.setTransform(59.2, 15.6);

    this.shape_3 = new cjs.Shape();
    this.shape_3.graphics
      .f("#000000")
      .s()
      .p(
        "AgXA/QgKgDgGgJQgFgJgDgNQgDgMAAgRQAAgPAEgMQACgNAGgJQAGgIAKgFQAKgEAMAAQAOgBALAFQAJAEAGAJQAFAIADANQADANAAAPQAAARgDAMQgDANgGAIQgGAJgJAEQgLAEgNAAIgCAAQgNAAgIgEgAgIgoQgEADgCAGIgCAOIAAARIAAASIACAOQACAHAEADQAEADAEAAQAEAAAEgCQADgDADgFQACgIACgbIgBgTQgBgJgCgFQgFgKgJgBQgEAAgEAEg"
      );
    this.shape_3.setTransform(48.2, 15.6);

    this.shape_4 = new cjs.Shape();
    this.shape_4.graphics
      .f("#000000")
      .s()
      .p(
        "AgxBWIAAioIAgAAIAAAOQAGgJAGgFQAGgDAJAAQAVgBAKARQAEAHACAOQADANAAARQAAASgDAMQgCANgEAHQgGAIgHADQgIAFgKAAQgJgBgEgDQgHgEgGgHIAAAAIAAA1gAgIg5QgDACgBAGQgEALAAAUQAAAUAEAKQACALAKAAQAKAAAEgLQADgKAAgUQAAgUgDgLQgCgGgEgCQgDgDgFAAQgEAAgEADg"
      );
    this.shape_4.setTransform(36.6, 17.5);

    this.shape_5 = new cjs.Shape();
    this.shape_5.graphics
      .f("#000000")
      .s()
      .p(
        "AggBCIAAh/IAfAAIAAARQAEgJAHgGQAHgGALAAIADAAIACABIAAAfIgEAAIgGAAIgJABQgEABgEADQgDADgCAEQgBAFAAAGIAABMg"
      );
    this.shape_5.setTransform(27, 15.4);

    this.shape_6 = new cjs.Shape();
    this.shape_6.graphics
      .f("#000000")
      .s()
      .p(
        "AgdA/QgGgCgEgEQgJgIAAgUIAAhdIAhAAIAABXQABAKADAEQAEAEAHAAQAGAAAFgGQAFgFAAgLIAAhTIAgAAIAAB/IgfAAIAAgPQgGAJgJAEQgGAEgLAAQgIAAgGgCg"
      );
    this.shape_6.setTransform(16.5, 15.7);

    this.shape_7 = new cjs.Shape();
    this.shape_7.graphics
      .f("#000000")
      .s()
      .p(
        "Ag0BVIAAipIA6AAQANAAAJAEQAJAFAGAHQAFAHADAJQACAKAAAJQAAANgEAKQgEAKgHAEQgHAHgKADQgKADgLAAIgSAAIAABEgAgSgHIAQAAQAIAAAGgGQAEgDABgFQACgFAAgGQAAgNgGgHQgDgDgEgCQgFgCgEAAIgPAAg"
      );
    this.shape_7.setTransform(4.6, 13.5);

    this.timeline.addTween(
      cjs.Tween.get({})
        .to({
          state: [
            { t: this.shape_7 },
            { t: this.shape_6 },
            { t: this.shape_5 },
            { t: this.shape_4 },
            { t: this.shape_3 },
            { t: this.shape_2 },
            { t: this.shape_1 },
            { t: this.shape }
          ]
        })
        .wait(1)
    );
  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = new cjs.Rectangle(-4, -3, 96.6, 60.7);

  (lib.text55 = function(mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {});

    // Layer 1
    this.shape = new cjs.Shape();
    this.shape.graphics
      .f("#330066")
      .s()
      .p(
        "AgwBpQgPgMAAgWIAqAAQAAAIAHAFIAHADIAHABQAMAAAGgIQAFgJAAgNIAAgWIAAAAQgHAJgKAGQgIAGgKAAQgaAAgOgUQgGgKgEgRQgDgPAAgXIACgfQABgQAGgMQAGgNAKgIQAGgEAHgCQAHgCAJAAQAJAAAIAFQAKAFAHAOIAAAAIAAgTIArAAIAAChQAAAhgRARQgIAIgOAFQgOAEgRAAQgcAAgQgMgAgKhPQgEAEgDAHQgCAHgBAMIgBAdIABARQABAGACAGQACAHAFADQAEAEAGAAQAGAAAFgEQAFgDACgHQADgGABgHIABgUQAAgggFgNQgFgNgNAAQgFAAgFADg"
      );
    this.shape.setTransform(244.6, 24.5);

    this.shape_1 = new cjs.Shape();
    this.shape_1.graphics
      .f("#330066")
      .s()
      .p(
        "AAVBYIAAh1QAAgNgFgGQgFgFgKAAQgUAAAAAdIAABwIgtAAIAAiqIArAAIAAAUIAAAAQAHgNAMgGQAJgGAOAAQAVAAALAMQAGAFADAKQADAJAAANIAAB+g"
      );
    this.shape_1.setTransform(228.8, 21.6);

    this.shape_2 = new cjs.Shape();
    this.shape_2.graphics
      .f("#330066")
      .s()
      .p("AgUBzIAAiqIAqAAIAACqgAgUhMIAAgmIAqAAIAAAmg");
    this.shape_2.setTransform(217, 18.9);

    this.shape_3 = new cjs.Shape();
    this.shape_3.graphics
      .f("#330066")
      .s()
      .p(
        "AAVBYIAAh1QgBgNgEgGQgFgFgJAAQgWAAAAAdIAABwIgsAAIAAiqIArAAIAAAUIAAAAQAHgNAMgGQAJgGAOAAQAVAAALAMQAGAFADAKQADAJAAANIAAB+g"
      );
    this.shape_3.setTransform(205.2, 21.6);

    this.shape_4 = new cjs.Shape();
    this.shape_4.graphics
      .f("#330066")
      .s()
      .p(
        "AgfBUQgNgEgIgMQgIgMgDgRQgDgQAAgXQAAgUADgRQAEgRAIgMQAIgLANgGQANgGARABQATgBANAFQAOAGAHAMQAIAMADAQQADASAAAUQAAAWgDARQgEARgIALQgIALgNAGQgNAGgSAAIgCAAQgRAAgMgGgAgLg2QgFAEgCAJQgDAHAAAMIgBAWIABAYQAAALADAJQACAHAFAFQAFAFAGgBQAGAAAFgDQAFgEACgGQAEgKABglIgBgaQgBgMgDgGQgFgOgNgBQgGABgFAEg"
      );
    this.shape_4.setTransform(189.5, 21.8);

    this.shape_5 = new cjs.Shape();
    this.shape_5.graphics
      .f("#330066")
      .s()
      .p("AgVBzIAAiqIAqAAIAACqgAgVhMIAAgmIAqAAIAAAmg");
    this.shape_5.setTransform(178, 18.9);

    this.shape_6 = new cjs.Shape();
    this.shape_6.graphics
      .f("#330066")
      .s()
      .p(
        "AgCBtQgIgCgEgFQgFgFgBgJQgCgJAAgNIAAhgIgXAAIAAgeIAXAAIAAgyIAqAAIAAAyIAZAAIAAAeIgZAAIAABbQAAAKADAEQADAFAJAAIAGgBIAEAAIAAAfIgNAAIgPABQgNAAgGgCg"
      );
    this.shape_6.setTransform(169.5, 19.4);

    this.shape_7 = new cjs.Shape();
    this.shape_7.graphics
      .f("#330066")
      .s()
      .p("AgVBzIAAiqIAqAAIAACqgAgVhMIAAgmIAqAAIAAAmg");
    this.shape_7.setTransform(160.9, 18.9);

    this.shape_8 = new cjs.Shape();
    this.shape_8.graphics
      .f("#330066")
      .s()
      .p(
        "AglBuQgKgFgGgLQgNgUAAgwQAAgYAEgQQADgQAGgMQANgVAbABQAMAAAHAEQAJAGAHAKIAAAAIAAhIIAtAAIAADiIgqAAIAAgTIgBAAQgIANgIAFQgIAFgNAAQgOgBgKgFgAgKgZQgFAEgCAGQgFAPAAAaQAAAcAFAOQAEAOANAAQAGAAAFgDQAFgDADgIQADgOAAgcQAAgagDgPQgDgGgFgEQgFgEgGAAQgGAAgEAEg"
      );
    this.shape_8.setTransform(148.9, 19.2);

    this.shape_9 = new cjs.Shape();
    this.shape_9.graphics
      .f("#330066")
      .s()
      .p(
        "AAVBYIAAh1QAAgNgFgGQgFgFgJAAQgWAAAAAdIAABwIgsAAIAAiqIArAAIAAAUIAAAAQAHgNAMgGQAJgGAOAAQAVAAALAMQAGAFADAKQADAJAAANIAAB+g"
      );
    this.shape_9.setTransform(133.1, 21.6);

    this.shape_10 = new cjs.Shape();
    this.shape_10.graphics
      .f("#330066")
      .s()
      .p(
        "AgfBUQgNgEgIgMQgIgMgDgRQgDgQAAgXQAAgUADgRQAEgRAIgMQAIgLANgGQANgGARABQATgBANAFQAOAGAHAMQAIAMADAQQADASAAAUQAAAWgDARQgEARgIALQgIALgNAGQgNAGgSAAIgCAAQgRAAgMgGgAgLg2QgFAEgCAJQgDAHAAAMIgBAWIABAYQAAALADAJQACAHAFAFQAFAFAGgBQAGAAAFgDQAFgEACgGQAEgKABglIgBgaQgBgMgDgGQgFgOgNgBQgGABgFAEg"
      );
    this.shape_10.setTransform(117.4, 21.8);

    this.shape_11 = new cjs.Shape();
    this.shape_11.graphics
      .f("#330066")
      .s()
      .p(
        "AgmBtQgOgIgJgPQgIgQgDgWQgCgWAAgaQAAgYACgWQADgWAIgPQAJgQAOgJQAQgJAYAAQAMAAAKACQAKACAHAEQAOAIAHANQAHAMACAOIACAbIgvAAQAAgZgFgLQgDgGgFgDQgGgDgHAAQgHAAgGAFQgFAFgEAKQgDAKgCARIgBAnQABAaABAQQACAQADAJQAEAJAGADQAGADAFAAQAGAAAFgCQAGgCADgHQAEgGACgLQADgLAAgTIAuAAQgBATgCAQQgDARgIAMQgEAGgGAFQgFAFgHAEQgHADgKACQgJACgLAAQgYAAgQgJg"
      );
    this.shape_11.setTransform(101.2, 18.9);

    this.shape_12 = new cjs.Shape();
    this.shape_12.graphics
      .f("#330066")
      .s()
      .p("AgUByIAAjjIAqAAIAADjg");
    this.shape_12.setTransform(81.1, 19);

    this.shape_13 = new cjs.Shape();
    this.shape_13.graphics
      .f("#330066")
      .s()
      .p(
        "AgrBVQgIgDgFgHQgFgIgCgJQgCgIAAgJQAAgMACgJQADgJAFgGQAFgFAJgDQAIgEALgEIAXgGQAKgDAEgEQAEgFAAgJQAAgJgFgGQgEgFgKgBQgKAAgFAHQgFAFAAALIAAAEIgoAAIAAgDQAAgQAFgJQAFgKAIgHQAIgGALgDQALgCAMAAQASgBANAEQAMAEAHAHQAGAHADAKQACAJAAAMIAABZIABATIAEAOIgqAAIgDgJIgCgJIgBAAQgIAOgKADQgIAFgQAAQgLAAgIgFgAAJAFIgJAEQgMADgFAGQgGAHAAAMQAAAKAEAHQAEAGAJAAIAHgBQAFgBAEgDQAEgEACgFQADgFAAgHIAAgig"
      );
    this.shape_13.setTransform(69.5, 21.8);

    this.shape_14 = new cjs.Shape();
    this.shape_14.graphics
      .f("#330066")
      .s()
      .p(
        "AgCBtQgIgCgFgFQgEgFgBgJQgCgJAAgNIAAhgIgXAAIAAgeIAXAAIAAgyIAqAAIAAAyIAZAAIAAAeIgZAAIAABbQAAAKADAEQADAFAJAAIAGgBIAEAAIAAAfIgNAAIgPABQgNAAgGgCg"
      );
    this.shape_14.setTransform(57.3, 19.4);

    this.shape_15 = new cjs.Shape();
    this.shape_15.graphics
      .f("#330066")
      .s()
      .p(
        "AAUBYIAAh1QABgNgFgGQgEgFgLAAQgVAAABAdIAABwIgtAAIAAiqIAqAAIAAAUIABAAQAHgNALgGQAKgGAOAAQAVAAAMAMQAFAFADAKQADAJAAANIAAB+g"
      );
    this.shape_15.setTransform(44.5, 21.6);

    this.shape_16 = new cjs.Shape();
    this.shape_16.graphics
      .f("#330066")
      .s()
      .p(
        "AgTBXQgKgCgGgDQgOgJgGgNQgGgNgCgQIgBgfQAAgRACgQQACgQAIgMQAHgNANgHQAOgIAUABQATAAANAFQAMAHAHALQAHAMADAPQACARAAAUIAAAHIhVAAIAAAPIABAOIAEANQACAFAEAEQAEADAFAAQALAAAFgHQAFgIACgRIAoAAQgCAegOAQQgPAQggAAQgKAAgJgDgAgJg4QgEAEgCAEIgEALIgBANIAAAHIArAAIgBgSQgBgHgDgGQgCgFgEgDQgFgCgHgBQgEABgFACg"
      );
    this.shape_16.setTransform(29.1, 21.8);

    this.shape_17 = new cjs.Shape();
    this.shape_17.graphics
      .f("#330066")
      .s()
      .p(
        "AA7ByIAAi1IgBAAIgpC1IgiAAIgoi1IgBAAIAAC1IgqAAIAAjjIBFAAIAfCgIAAAAIAgigIBFAAIAADjg"
      );
    this.shape_17.setTransform(9.9, 19);

    this.timeline.addTween(
      cjs.Tween.get({})
        .to({
          state: [
            { t: this.shape_17 },
            { t: this.shape_16 },
            { t: this.shape_15 },
            { t: this.shape_14 },
            { t: this.shape_13 },
            { t: this.shape_12 },
            { t: this.shape_11 },
            { t: this.shape_10 },
            { t: this.shape_9 },
            { t: this.shape_8 },
            { t: this.shape_7 },
            { t: this.shape_6 },
            { t: this.shape_5 },
            { t: this.shape_4 },
            { t: this.shape_3 },
            { t: this.shape_2 },
            { t: this.shape_1 },
            { t: this.shape }
          ]
        })
        .wait(1)
    );
  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = new cjs.Rectangle(-4, -2.3, 285.2, 79.6);

  (lib.text54 = function(mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {});

    // Layer 1
    this.shape = new cjs.Shape();
    this.shape.graphics
      .f("#000000")
      .s()
      .p("AgOASIAAgjIAdAAIAAAjg");
    this.shape.setTransform(221.2, 105.2);

    this.shape_1 = new cjs.Shape();
    this.shape_1.graphics
      .f("#000000")
      .s()
      .p(
        "AgWBAQgJgCgGgGQgFgEgCgIQgCgIAAgJIAAgFIAeAAIAAAFQAAAIAEAFQAEAFAIABQAGAAAFgFQAFgEAAgHQAAgHgEgDIgIgEIgWgJQgNgFgHgHQgEgEgCgFQgBgGAAgHQAAgIACgHQADgHAGgFQAGgGAIgDQAKgDAKAAQAMAAAIADQAIACAGAEQAKAKAAASIAAAFIgdAAQAAgKgEgFQgDgEgIAAQgEgBgFAEQgFAEAAAGQAAAGADADQADAEAIADIATAHQAPAEAHAHQAGAIAAAQQAAAKgDAHQgEAIgGAFQgHAFgIACQgJACgKAAQgNAAgJgDg"
      );
    this.shape_1.setTransform(213, 100.6);

    this.shape_2 = new cjs.Shape();
    this.shape_2.graphics
      .f("#000000")
      .s()
      .p(
        "AAMBTIgNgBQgGgCgDgEQgEgEgBgGIgBgQIAAhIIgRAAIAAgXIARAAIAAglIAfAAIAAAlIATAAIAAAXIgTAAIAABEQAAAHACADQADAEAHAAIADAAIAEgBIAAAXIgKABg"
      );
    this.shape_2.setTransform(204.2, 98.8);

    this.shape_3 = new cjs.Shape();
    this.shape_3.graphics
      .f("#000000")
      .s()
      .p(
        "AAPBCIAAhXQAAgKgDgEQgEgEgHAAQgPAAgBAVIAABUIggAAIAAh/IAfAAIAAAPQAGgKAJgEQAGgFAKAAQARAAAIAJQAEAEACAHQADAHAAAKIAABeg"
      );
    this.shape_3.setTransform(194.6, 100.5);

    this.shape_4 = new cjs.Shape();
    this.shape_4.graphics
      .f("#000000")
      .s()
      .p(
        "AgOBBQgHgBgFgDQgKgGgFgJQgFgLAAgMIgCgXQAAgMACgMQACgMAFgJQAFgKAKgFQALgGAOAAQAPAAAJAFQAKAEAEAJQAGAIACANQACALAAAQIAAAFIhAAAIAAALIABALIADAJIAFAHQADACADABQAIAAAEgHQADgFACgNIAeAAQgBAWgLAMQgLAMgYAAQgHAAgHgCgAgGgpQgDACgCAEIgDAIIgBAJIAAAFIAgAAIgBgMQAAgHgDgDQgBgFgDgCQgEgBgFAAQgCgBgEADg"
      );
    this.shape_4.setTransform(183.1, 100.6);

    this.shape_5 = new cjs.Shape();
    this.shape_5.graphics
      .f("#000000")
      .s()
      .p(
        "AAvBCIAAhYQAAgJgDgEQgEgEgHAAQgIAAgEAFQgFAFAAAMIAABTIgfAAIAAhYQAAgJgDgEQgDgEgHAAQgIAAgEAFQgFAFgBAMIAABTIggAAIAAh/IAfAAIAAANQAHgJAIgEQAHgEALAAQAMAAAFAGQAJAFACAKIAAAAQAFgKAIgGQAJgFAMAAQAIAAAGADQAFACAFAFQADAFACAHQACAIABAJIAABcg"
      );
    this.shape_5.setTransform(168.5, 100.5);

    this.shape_6 = new cjs.Shape();
    this.shape_6.graphics
      .f("#000000")
      .s()
      .p(
        "AgOBBQgHgBgFgDQgKgGgFgJQgFgLAAgMIgCgXQAAgMACgMQACgMAFgJQAFgKAKgFQALgGAOAAQAPAAAJAFQAKAEAEAJQAGAIACANQACALAAAQIAAAFIhAAAIAAALIABALIADAJIAFAHQADACADABQAIAAAEgHQADgFACgNIAeAAQgBAWgLAMQgLAMgYAAQgHAAgHgCgAgGgpQgDACgCAEIgDAIIgBAJIAAAFIAgAAIgBgMQAAgHgDgDQgBgFgDgCQgEgBgFAAQgCgBgEADg"
      );
    this.shape_6.setTransform(153.8, 100.6);

    this.shape_7 = new cjs.Shape();
    this.shape_7.graphics
      .f("#000000")
      .s()
      .p("AgRBAIgih/IAjAAIARBaIARhaIAiAAIghB/g");
    this.shape_7.setTransform(142.9, 100.7);

    this.shape_8 = new cjs.Shape();
    this.shape_8.graphics
      .f("#000000")
      .s()
      .p(
        "AgXA/QgKgDgGgJQgFgJgDgNQgDgMAAgRQAAgPAEgMQACgNAGgJQAGgIAKgFQAKgEAMAAQAOgBALAFQAJAEAGAJQAFAIADANQADANAAAPQAAARgDAMQgDANgGAIQgGAJgJAEQgLAEgNAAIgCAAQgNAAgIgEgAgIgoQgEADgCAGIgCAOIAAARIAAASIACAOQACAHAEADQAEADAEAAQAEAAAEgCQADgDADgFQACgIABgbIAAgTQgBgJgCgFQgFgKgJgBQgEAAgEAEg"
      );
    this.shape_8.setTransform(131.9, 100.6);

    this.shape_9 = new cjs.Shape();
    this.shape_9.graphics
      .f("#000000")
      .s()
      .p(
        "AAvBCIAAhYQAAgJgEgEQgDgEgHAAQgHAAgFAFQgFAFAAAMIAABTIgfAAIAAhYQAAgJgDgEQgDgEgHAAQgIAAgEAFQgFAFgBAMIAABTIggAAIAAh/IAfAAIAAANQAHgJAIgEQAHgEAMAAQALAAAFAGQAIAFADAKIAAAAQAFgKAIgGQAJgFAMAAQAHAAAGADQAGACAFAFQADAFACAHQACAIAAAJIAABcg"
      );
    this.shape_9.setTransform(117.1, 100.5);

    this.shape_10 = new cjs.Shape();
    this.shape_10.graphics
      .f("#000000")
      .s()
      .p(
        "AgOBBQgHgBgFgDQgKgGgFgJQgFgLAAgMIgCgXQAAgMACgMQACgMAFgJQAFgKAKgFQALgGAOAAQAPAAAJAFQAKAEAEAJQAGAIACANQACALAAAQIAAAFIhAAAIAAALIABALIADAJIAFAHQADACADABQAIAAAEgHQADgFACgNIAeAAQgBAWgLAMQgLAMgYAAQgHAAgHgCgAgGgpQgDACgCAEIgDAIIgBAJIAAAFIAgAAIgBgMQAAgHgDgDQgBgFgDgCQgEgBgFAAQgCgBgEADg"
      );
    this.shape_10.setTransform(96.7, 100.6);

    this.shape_11 = new cjs.Shape();
    this.shape_11.graphics
      .f("#000000")
      .s()
      .p("AgPBVIAAipIAfAAIAACpg");
    this.shape_11.setTransform(88.2, 98.5);

    this.shape_12 = new cjs.Shape();
    this.shape_12.graphics
      .f("#000000")
      .s()
      .p(
        "AgEBTQgHgDgGgKIAAAOIggAAIAAiqIAhAAIAAA3IAAAAQAGgIAHgEQAEgDAKAAQAUgBAKARQAEAHADAOQACALAAARQAAATgCANQgDANgEAHQgFAIgIADQgIAFgJAAQgLgBgEgDgAgIgSQgDACgBAGQgEAKAAATQAAAWAEAKQADALAJAAQALAAADgLQADgKAAgWQAAgTgDgKQgCgGgEgCQgDgDgFAAQgEAAgEADg"
      );
    this.shape_12.setTransform(79.5, 98.7);

    this.shape_13 = new cjs.Shape();
    this.shape_13.graphics
      .f("#000000")
      .s()
      .p(
        "AggBAQgGgDgEgFQgDgFgCgHQgCgHAAgGQAAgKACgGQACgGAEgFQAEgEAGgCQAGgDAJgCIARgGQAHgCADgDQADgDAAgGQAAgIgDgEQgEgFgHABQgHgBgEAFQgEAEAAAJIAAADIgdAAIAAgDQAAgLADgIQAEgHAGgFQAGgFAIgCQAJgCAIAAQAOAAAJADQAJADAFAFQAFAFACAIQACAHAAAJIAABBIABAPIADAKIggAAIgCgGIgCgHIAAAAQgGAKgIADQgFADgMAAQgJAAgGgDgAAHAEIgHADQgIACgEAEQgFAGAAAJQAAAGADAGQADAFAHABIAFgCQADgBADgDQADgCACgDQACgFAAgEIAAgag"
      );
    this.shape_13.setTransform(67.5, 100.6);

    this.shape_14 = new cjs.Shape();
    this.shape_14.graphics
      .f("#000000")
      .s()
      .p("AgRBAIgih/IAjAAIARBaIARhaIAiAAIghB/g");
    this.shape_14.setTransform(56.5, 100.7);

    this.shape_15 = new cjs.Shape();
    this.shape_15.graphics
      .f("#000000")
      .s()
      .p(
        "AggBCIAAh/IAfAAIAAARQAEgJAHgGQAHgGALAAIACAAIADABIAAAfIgEAAIgGAAIgJABQgEABgEADQgDADgCAEQgBAFAAAGIAABMg"
      );
    this.shape_15.setTransform(47.8, 100.5);

    this.shape_16 = new cjs.Shape();
    this.shape_16.graphics
      .f("#000000")
      .s()
      .p(
        "AgOBBQgHgBgFgDQgKgGgFgJQgFgLAAgMIgCgXQAAgMACgMQACgMAFgJQAFgKAKgFQALgGAOAAQAPAAAJAFQAKAEAEAJQAGAIACANQACALAAAQIAAAFIhAAAIAAALIABALIADAJIAFAHQADACADABQAIAAAEgHQADgFACgNIAeAAQgBAWgLAMQgLAMgYAAQgHAAgHgCgAgGgpQgDACgCAEIgDAIIgBAJIAAAFIAgAAIgBgMQAAgHgDgDQgBgFgDgCQgEgBgFAAQgCgBgEADg"
      );
    this.shape_16.setTransform(37.7, 100.6);

    this.shape_17 = new cjs.Shape();
    this.shape_17.graphics
      .f("#000000")
      .s()
      .p(
        "AgWBAQgJgCgGgGQgFgEgCgIQgCgIAAgJIAAgFIAeAAIAAAFQAAAIAEAFQAEAFAIABQAGAAAFgFQAFgEAAgHQAAgHgEgDIgIgEIgWgJQgNgFgHgHQgEgEgCgFQgBgGAAgHQAAgIACgHQADgHAGgFQAGgGAIgDQAKgDAKAAQAMAAAIADQAIACAGAEQAKAKAAASIAAAFIgdAAQAAgKgEgFQgDgEgIAAQgEgBgFAEQgFAEAAAGQAAAGADADQADAEAIADIATAHQAPAEAHAHQAGAIAAAQQAAAKgDAHQgEAIgGAFQgHAFgIACQgJACgKAAQgNAAgJgDg"
      );
    this.shape_17.setTransform(26.8, 100.6);

    this.shape_18 = new cjs.Shape();
    this.shape_18.graphics
      .f("#000000")
      .s()
      .p(
        "AgFBTQgGgDgGgKIAAAOIggAAIAAiqIAhAAIAAA3IAAAAQAGgIAGgEQAFgDAJAAQAVgBAJARQAFAHACAOQADALAAARQAAATgDANQgCANgFAHQgFAIgHADQgHAFgLAAQgJgBgGgDgAgHgSQgEACgCAGQgDAKAAATQAAAWADAKQAEALAJAAQALAAACgLQAEgKAAgWQAAgTgEgKQgBgGgDgCQgEgDgFAAQgEAAgDADg"
      );
    this.shape_18.setTransform(15.7, 98.7);

    this.shape_19 = new cjs.Shape();
    this.shape_19.graphics
      .f("#000000")
      .s()
      .p(
        "AgXA/QgKgDgGgJQgGgJgCgNQgCgMgBgRQAAgPADgMQADgNAGgJQAGgIAKgFQAJgEANAAQAPgBAJAFQAKAEAGAJQAFAIADANQACANAAAPQAAARgCAMQgDANgGAIQgGAJgKAEQgJAEgOAAIgCAAQgNAAgIgEgAgIgoQgDADgDAGIgBAOIgBARIABASIABAOQADAHADADQADADAFAAQAFAAADgCQADgDACgFQADgIACgbIgBgTQgCgJgCgFQgEgKgJgBQgFAAgDAEg"
      );
    this.shape_19.setTransform(3.8, 100.6);

    this.shape_20 = new cjs.Shape();
    this.shape_20.graphics
      .f("#000000")
      .s()
      .p(
        "AgXA/QgKgDgGgJQgFgJgDgNQgCgMAAgRQAAgPACgMQADgNAGgJQAGgIAKgFQAJgEANAAQAOgBAKAFQAKAEAGAJQAGAIACANQACANAAAPQAAARgCAMQgDANgGAIQgGAJgJAEQgLAEgNAAIgCAAQgNAAgIgEgAgIgoQgDADgCAGIgDAOIAAARIAAASIADAOQACAHADADQAEADAEAAQAFAAADgCQAEgDACgFQACgIABgbIgBgTQgBgJgBgFQgEgKgKgBQgEAAgEAEg"
      );
    this.shape_20.setTransform(257.7, 72.3);

    this.shape_21 = new cjs.Shape();
    this.shape_21.graphics
      .f("#000000")
      .s()
      .p(
        "AAQBCIAAhXQAAgKgEgEQgEgEgHAAQgQAAAAAVIAABUIghAAIAAh/IAhAAIAAAPQAFgKAIgEQAHgFALAAQAPAAAJAJQAEAEACAHQACAHAAAKIAABeg"
      );
    this.shape_21.setTransform(246, 72.1);

    this.shape_22 = new cjs.Shape();
    this.shape_22.graphics
      .f("#000000")
      .s()
      .p(
        "AAPBVIAAhXQABgKgEgEQgDgEgIAAQgPAAAAAUIAABVIgiAAIAAipIAiAAIAAA3IAAAAQAKgQATAAQARAAAIAIQAEAFADAHQABAHAAAKIAABdg"
      );
    this.shape_22.setTransform(228.2, 70.2);

    this.shape_23 = new cjs.Shape();
    this.shape_23.graphics
      .f("#000000")
      .s()
      .p(
        "AAMBTIgNgBQgGgCgDgEQgEgEgBgGIgBgQIAAhIIgRAAIAAgXIARAAIAAglIAfAAIAAAlIATAAIAAAXIgTAAIAABEQAAAHACADQADAEAGAAIAEAAIAEgBIAAAXIgKABg"
      );
    this.shape_23.setTransform(218.7, 70.5);

    this.shape_24 = new cjs.Shape();
    this.shape_24.graphics
      .f("#000000")
      .s()
      .p("AgPBWIAAh/IAfAAIAAB/gAgPg5IAAgcIAfAAIAAAcg");
    this.shape_24.setTransform(212.2, 70.1);

    this.shape_25 = new cjs.Shape();
    this.shape_25.graphics
      .f("#000000")
      .s()
      .p(
        "AARBAIgRhaIgPBaIgmAAIgch/IAhAAIAPBZIABAAIAQhZIAiAAIARBZIAAAAIAQhZIAfAAIgbB/g"
      );
    this.shape_25.setTransform(200.9, 72.3);

    this.shape_26 = new cjs.Shape();
    this.shape_26.graphics
      .f("#000000")
      .s()
      .p(
        "AggBCIAAh/IAfAAIAAARQAEgJAHgGQAHgGALAAIACAAIADABIAAAfIgEAAIgGAAIgJABQgEABgEADQgDADgCAEQgBAFAAAGIAABMg"
      );
    this.shape_26.setTransform(183.3, 72.1);

    this.shape_27 = new cjs.Shape();
    this.shape_27.graphics
      .f("#000000")
      .s()
      .p(
        "AgXA/QgKgDgGgJQgGgJgCgNQgCgMgBgRQAAgPADgMQADgNAGgJQAGgIAKgFQAJgEANAAQAPgBAKAFQAJAEAGAJQAFAIADANQACANAAAPQAAARgCAMQgDANgGAIQgGAJgKAEQgJAEgOAAIgCAAQgNAAgIgEgAgIgoQgEADgCAGIgBAOIgBARIABASIABAOQACAHAEADQADADAFAAQAEAAAEgCQADgDACgFQADgIACgbIgBgTQgCgJgCgFQgDgKgKgBQgFAAgDAEg"
      );
    this.shape_27.setTransform(173.1, 72.3);

    this.shape_28 = new cjs.Shape();
    this.shape_28.graphics
      .f("#000000")
      .s()
      .p("AgPBWIAAh/IAfAAIAAB/gAgPg5IAAgcIAfAAIAAAcg");
    this.shape_28.setTransform(164.4, 70.1);

    this.shape_29 = new cjs.Shape();
    this.shape_29.graphics
      .f("#000000")
      .s()
      .p("AgRBAIgih/IAjAAIARBaIARhaIAiAAIghB/g");
    this.shape_29.setTransform(156.2, 72.3);

    this.shape_30 = new cjs.Shape();
    this.shape_30.graphics
      .f("#000000")
      .s()
      .p(
        "AggBAQgGgDgEgFQgDgFgCgHQgCgHAAgGQAAgKACgGQACgGAEgFQAEgEAGgCQAGgDAJgCIARgGQAHgCADgDQADgDAAgGQAAgIgDgEQgEgFgHABQgHgBgEAFQgEAEAAAJIAAADIgdAAIAAgDQAAgLADgIQAEgHAGgFQAGgFAIgCQAJgCAIAAQAOAAAJADQAJADAFAFQAFAFACAIQACAHAAAJIAABBIABAPIADALIggAAIgCgHIgCgHIAAAAQgGAKgIADQgFADgMAAQgJAAgGgDgAAHAEIgHADQgIACgEAEQgFAGAAAJQAAAGADAGQADAFAHABIAFgCQADgBADgDQADgCACgDQACgFAAgEIAAgag"
      );
    this.shape_30.setTransform(145.1, 72.3);

    this.shape_31 = new cjs.Shape();
    this.shape_31.graphics
      .f("#000000")
      .s()
      .p(
        "AAPBVIAAhXQAAgKgDgEQgEgEgHAAQgPAAgBAUIAABVIggAAIAAipIAgAAIAAA3IABAAQAKgQATAAQARAAAIAIQAEAFACAHQADAHAAAKIAABdg"
      );
    this.shape_31.setTransform(133.4, 70.2);

    this.shape_32 = new cjs.Shape();
    this.shape_32.graphics
      .f("#000000")
      .s()
      .p(
        "AgOBBQgHgBgFgDQgKgGgFgJQgFgLAAgMIgCgXQAAgMACgMQACgMAFgJQAFgKAKgFQALgGAOAAQAPAAAJAFQAKAEAEAJQAGAIACANQACALAAAQIAAAFIhAAAIAAALIABALIADAJIAFAHQADACADABQAIAAAEgHQADgFACgNIAeAAQgBAWgLAMQgLAMgYAAQgHAAgHgCgAgGgpQgDACgCAEIgDAIIgBAJIAAAFIAgAAIgBgMQAAgHgDgDQgBgFgDgCQgEgBgFAAQgCgBgEADg"
      );
    this.shape_32.setTransform(121.9, 72.3);

    this.shape_33 = new cjs.Shape();
    this.shape_33.graphics
      .f("#000000")
      .s()
      .p(
        "AgEBTQgHgDgGgJIAAANIggAAIAAiqIAhAAIAAA3IAAAAQAGgIAHgEQAEgDAJAAQAVgBAKARQAEAHADAOQACALAAARQAAATgCANQgDANgEAHQgGAIgHADQgIAFgKAAQgJgBgFgDgAgIgSQgDACgBAGQgEAKAAATQAAAWAEAKQACALAKAAQALAAADgLQADgKAAgWQAAgTgDgKQgCgGgEgCQgDgDgFAAQgEAAgEADg"
      );
    this.shape_33.setTransform(110.5, 70.3);

    this.shape_34 = new cjs.Shape();
    this.shape_34.graphics
      .f("#000000")
      .s()
      .p(
        "AggBCIAAh/IAfAAIAAARQAEgJAHgGQAHgGALAAIACAAIADABIAAAfIgEAAIgGAAIgJABQgEABgEADQgDADgCAEQgBAFAAAGIAABMg"
      );
    this.shape_34.setTransform(95.1, 72.1);

    this.shape_35 = new cjs.Shape();
    this.shape_35.graphics
      .f("#000000")
      .s()
      .p(
        "AgXA/QgKgDgGgJQgGgJgCgNQgCgMgBgRQAAgPADgMQADgNAGgJQAGgIAKgFQAJgEANAAQAPgBAKAFQAJAEAGAJQAFAIADANQACANAAAPQAAARgCAMQgDANgGAIQgGAJgKAEQgJAEgOAAIgCAAQgNAAgIgEgAgIgoQgEADgCAGIgBAOIgBARIABASIABAOQACAHAEADQADADAFAAQAEAAAEgCQADgDACgFQADgIACgbIgBgTQgCgJgCgFQgDgKgKgBQgFAAgDAEg"
      );
    this.shape_35.setTransform(84.9, 72.3);

    this.shape_36 = new cjs.Shape();
    this.shape_36.graphics
      .f("#000000")
      .s()
      .p(
        "AgOAVQAGgBADgGQADgFAAgHIAAgCIgMAAIAAglIAdAAIAAAgIgBAOQgBAJgEAFQgDAGgGAEQgFAEgJABg"
      );
    this.shape_36.setTransform(70.5, 78.8);

    this.shape_37 = new cjs.Shape();
    this.shape_37.graphics
      .f("#000000")
      .s()
      .p(
        "AgpBVIAAgZIAJABQAJAAAEgFQAEgFABgIIglh/IAjAAIARBXIABAAIAQhXIAiAAIggB3QgEAQgEAKQgEAKgFAFQgEAFgHACQgIACgLAAg"
      );
    this.shape_37.setTransform(62.3, 74.4);

    this.shape_38 = new cjs.Shape();
    this.shape_38.graphics
      .f("#000000")
      .s()
      .p(
        "AAMBTIgNgBQgGgCgDgEQgEgEgBgGIgBgQIAAhIIgRAAIAAgXIARAAIAAglIAfAAIAAAlIATAAIAAAXIgTAAIAABEQAAAHACADQADAEAHAAIADAAIAEgBIAAAXIgKABg"
      );
    this.shape_38.setTransform(53.5, 70.5);

    this.shape_39 = new cjs.Shape();
    this.shape_39.graphics
      .f("#000000")
      .s()
      .p("AgPBWIAAh/IAfAAIAAB/gAgPg5IAAgcIAfAAIAAAcg");
    this.shape_39.setTransform(47, 70.1);

    this.shape_40 = new cjs.Shape();
    this.shape_40.graphics
      .f("#000000")
      .s()
      .p("AgRBAIgih/IAjAAIARBaIARhaIAiAAIghB/g");
    this.shape_40.setTransform(38.8, 72.3);

    this.shape_41 = new cjs.Shape();
    this.shape_41.graphics
      .f("#000000")
      .s()
      .p("AgPBWIAAh/IAfAAIAAB/gAgPg5IAAgcIAfAAIAAAcg");
    this.shape_41.setTransform(30.6, 70.1);

    this.shape_42 = new cjs.Shape();
    this.shape_42.graphics
      .f("#000000")
      .s()
      .p(
        "AAMBTIgNgBQgGgCgDgEQgEgEgBgGIgBgQIAAhIIgRAAIAAgXIARAAIAAglIAfAAIAAAlIATAAIAAAXIgTAAIAABEQAAAHACADQADAEAHAAIADAAIAEgBIAAAXIgKABg"
      );
    this.shape_42.setTransform(24.2, 70.5);

    this.shape_43 = new cjs.Shape();
    this.shape_43.graphics
      .f("#000000")
      .s()
      .p(
        "AgUBAQgJgDgHgHQgFgJgEgNQgDgNAAgTQAAgSAEgNQAEgNAHgIQAHgIAJgDQAKgDAKAAQALAAAJAEQAJADAFAHQAGAGADAKQADAIAAAMIggAAIgBgJIgBgIQgCgEgDgDQgDgCgEAAQgEAAgFADQgEACgBAGQgCAFgBAJIgBARIABAUQABAJACAGQABAFAEADQADACAEABQAIgBAFgHQADgHAAgQIAgAAQAAANgDAJQgDAKgGAHQgLANgaAAQgLAAgJgDg"
      );
    this.shape_43.setTransform(15.1, 72.3);

    this.shape_44 = new cjs.Shape();
    this.shape_44.graphics
      .f("#000000")
      .s()
      .p(
        "AggBAQgGgDgEgFQgDgFgCgHQgCgHAAgGQAAgKACgGQACgGAEgFQAEgEAGgCQAGgDAJgCIARgGQAHgCADgDQADgDAAgGQAAgIgDgEQgEgFgHABQgHgBgEAFQgEAEAAAJIAAADIgdAAIAAgDQAAgLADgIQAEgHAGgFQAGgFAIgCQAJgCAIAAQAOAAAJADQAJADAFAFQAFAFACAIQACAHAAAJIAABBIABAPIADALIggAAIgCgHIgCgHIAAAAQgGAKgIADQgFADgMAAQgJAAgGgDgAAHAEIgHADQgIACgEAEQgFAGAAAJQAAAGADAGQADAFAHABIAFgCQADgBADgDQADgCACgDQACgFAAgEIAAgag"
      );
    this.shape_44.setTransform(3.7, 72.3);

    this.shape_45 = new cjs.Shape();
    this.shape_45.graphics
      .f("#000000")
      .s()
      .p(
        "AgOAVQAGgBADgGQADgFAAgHIAAgCIgMAAIAAglIAdAAIAAAgIgBAOQgBAJgEAFQgDAGgGAEQgFAEgJABg"
      );
    this.shape_45.setTransform(238, 50.5);

    this.shape_46 = new cjs.Shape();
    this.shape_46.graphics
      .f("#000000")
      .s()
      .p(
        "AgOBBQgHgBgFgDQgKgGgFgJQgFgLgBgMIgBgXQAAgMACgMQACgMAFgJQAFgKALgFQAKgGAPAAQAOAAAJAFQAKAEAFAJQAFAIACANQACALAAAQIAAAFIg/AAIAAALIAAALIADAJIAFAHQADACADABQAIAAAEgHQAEgFABgNIAeAAQgBAWgLANQgLALgYAAQgHAAgHgCgAgGgpQgDACgCAEIgDAIIAAAJIAAAFIAfAAIgBgMQgBgHgCgDQgBgFgDgCQgEgBgEAAQgEgBgDADg"
      );
    this.shape_46.setTransform(229.6, 43.9);

    this.shape_47 = new cjs.Shape();
    this.shape_47.graphics
      .f("#000000")
      .s()
      .p(
        "AgjBOQgMgIAAgRIAgAAQAAAGAFAEIAFADIAFAAQAJAAAEgGQAEgHAAgJIAAgRIAAAAQgFAHgHAFQgGADgIAAQgTAAgKgOQgFgIgDgNQgCgKAAgSIABgXQABgMAEgJQAFgJAIgHQAEgCAFgCQAFgCAHABQAHAAAGADQAHAEAFALIAAAAIAAgPIAgAAIAAB5QAAAZgMAMQgHAGgKAEQgKACgNAAQgVAAgLgJgAgHg6QgDACgCAFIgDAOIAAAXIAAAMQABAFACAEQACAEADADQADADAEAAQAFAAADgDQAEgDACgEQACgFAAgFIABgPQAAgYgDgJQgEgKgKAAQgDAAgEADg"
      );
    this.shape_47.setTransform(217.8, 46);

    this.shape_48 = new cjs.Shape();
    this.shape_48.graphics
      .f("#000000")
      .s()
      .p(
        "AggBAQgGgDgEgFQgDgFgCgHQgCgGAAgHQAAgKACgGQACgGAEgFQAEgEAGgCQAGgDAJgCIARgGQAHgCADgDQADgDAAgGQAAgIgDgEQgEgFgHABQgHgBgEAFQgEAEAAAJIAAADIgdAAIAAgDQAAgLADgIQAEgHAGgFQAGgFAIgCQAJgCAIAAQAOAAAJADQAJADAFAFQAFAFACAIQACAHAAAJIAABBIABAPIADAKIggAAIgCgGIgCgHIAAAAQgGAKgIADQgFADgMAAQgJAAgGgDgAAHAEIgHADQgIACgEAEQgFAGAAAJQAAAGADAGQADAFAHABIAFgCQADgBADgDQADgCACgDQACgFAAgEIAAgag"
      );
    this.shape_48.setTransform(206.2, 43.9);

    this.shape_49 = new cjs.Shape();
    this.shape_49.graphics
      .f("#000000")
      .s()
      .p(
        "AAuBCIAAhYQAAgJgDgEQgDgEgHAAQgIAAgEAFQgFAFAAAMIAABTIgfAAIAAhYQAAgJgDgEQgDgEgHAAQgIAAgEAFQgGAFABAMIAABTIgiAAIAAh/IAhAAIAAANQAGgJAHgEQAJgEALAAQALAAAGAGQAHAFADAKIABAAQADgKAJgGQAIgFANAAQAIAAAFADQAHACADAFQAFAFACAHQABAIAAAJIAABcg"
      );
    this.shape_49.setTransform(191.5, 43.8);

    this.shape_50 = new cjs.Shape();
    this.shape_50.graphics
      .f("#000000")
      .s()
      .p("AgPBWIAAh/IAfAAIAAB/gAgPg5IAAgcIAfAAIAAAcg");
    this.shape_50.setTransform(179.5, 41.7);

    this.shape_51 = new cjs.Shape();
    this.shape_51.graphics
      .f("#000000")
      .s()
      .p(
        "AgOBBQgHgBgFgDQgKgGgFgJQgFgLgBgMIgBgXQAAgMACgMQACgMAFgJQAFgKALgFQAKgGAPAAQAOAAAJAFQAKAEAEAJQAGAIACANQACALAAAQIAAAFIg/AAIAAALIAAALIADAJIAFAHQADACADABQAIAAAEgHQAEgFABgNIAeAAQgBAWgLANQgLALgYAAQgHAAgHgCgAgGgpQgDACgCAEIgDAIIAAAJIAAAFIAfAAIgBgMQgBgHgCgDQgBgFgDgCQgEgBgEAAQgDgBgEADg"
      );
    this.shape_51.setTransform(165.3, 43.9);

    this.shape_52 = new cjs.Shape();
    this.shape_52.graphics
      .f("#000000")
      .s()
      .p(
        "AAvBCIAAhYQAAgJgEgEQgDgEgHAAQgHAAgFAFQgFAFAAAMIAABTIgfAAIAAhYQAAgJgDgEQgDgEgHAAQgIAAgEAFQgGAFAAAMIAABTIggAAIAAh/IAfAAIAAANQAHgJAIgEQAHgEAMAAQALAAAGAGQAHAFADAKIAAAAQAEgKAJgGQAJgFAMAAQAHAAAGADQAHACADAFQAFAFABAHQACAIAAAJIAABcg"
      );
    this.shape_52.setTransform(150.7, 43.8);

    this.shape_53 = new cjs.Shape();
    this.shape_53.graphics
      .f("#000000")
      .s()
      .p(
        "AgXA/QgKgDgGgJQgFgJgDgNQgDgMABgRQAAgPACgMQADgNAGgJQAGgIAKgFQAJgEANAAQAPgBAJAFQAKAEAGAJQAGAIACANQADANgBAPQABARgDAMQgDANgGAIQgGAJgKAEQgKAEgNAAIgCAAQgNAAgIgEgAgIgoQgDADgCAGIgCAOIgBARIABASIACAOQACAHADADQADADAFAAQAFAAADgCQADgDADgFQACgIABgbIgBgTQgBgJgBgFQgEgKgKgBQgFAAgDAEg"
      );
    this.shape_53.setTransform(135.9, 43.9);

    this.shape_54 = new cjs.Shape();
    this.shape_54.graphics
      .f("#000000")
      .s()
      .p(
        "AgWBAQgJgCgGgGQgFgEgCgIQgCgIAAgJIAAgFIAeAAIAAAFQAAAIAEAFQAEAFAIABQAGAAAFgFQAFgEAAgHQAAgHgEgDIgIgEIgWgJQgNgFgHgHQgEgEgCgGQgBgFAAgHQAAgIACgHQADgHAGgFQAGgGAIgDQAKgDAKAAQAMAAAIADQAIACAGAEQAKAKAAASIAAAFIgdAAQAAgKgEgFQgDgEgIAAQgEgBgFAEQgFAEAAAGQAAAGADADQADAEAIACIATAIQAPAEAHAHQAGAIAAAQQAAAKgDAHQgEAIgGAFQgHAFgIACQgJACgKAAQgNAAgJgDg"
      );
    this.shape_54.setTransform(124.8, 43.9);

    this.shape_55 = new cjs.Shape();
    this.shape_55.graphics
      .f("#000000")
      .s()
      .p(
        "AgQBXIAAhpIgRAAIAAgWIARAAIAAgPQAAgJACgGQADgGAEgDQAEgEAFgBQAHgCAHAAIASABIAAAXIgDAAIgDAAQgIAAgCACQgDADAAAFIAAAMIATAAIAAAWIgTAAIAABpg"
      );
    this.shape_55.setTransform(110.2, 41.7);

    this.shape_56 = new cjs.Shape();
    this.shape_56.graphics
      .f("#000000")
      .s()
      .p(
        "AgXA/QgKgDgGgJQgGgJgCgNQgDgMABgRQAAgPACgMQADgNAGgJQAGgIAKgFQAKgEAMAAQAPgBAJAFQAKAEAGAJQAFAIADANQADANgBAPQABARgDAMQgDANgGAIQgGAJgKAEQgKAEgNAAIgCAAQgNAAgIgEgAgIgoQgDADgCAGIgCAOIgBARIABASIACAOQACAHADADQADADAFAAQAFAAADgCQADgDACgFQADgIACgbIgCgTQgBgJgCgFQgEgKgJgBQgFAAgDAEg"
      );
    this.shape_56.setTransform(100.9, 43.9);

    this.shape_57 = new cjs.Shape();
    this.shape_57.graphics
      .f("#000000")
      .s()
      .p(
        "AAQBCIAAhXQgBgKgDgEQgEgEgHAAQgQAAAAAVIAABUIggAAIAAh/IAfAAIAAAPQAGgKAJgEQAGgFALAAQAPAAAJAJQAEAEACAHQACAHABAKIAABeg"
      );
    this.shape_57.setTransform(83.4, 43.8);

    this.shape_58 = new cjs.Shape();
    this.shape_58.graphics
      .f("#000000")
      .s()
      .p(
        "AgXA/QgKgDgGgJQgGgJgCgNQgDgMABgRQAAgPACgMQADgNAGgJQAGgIAKgFQAKgEAMAAQAPgBAJAFQAKAEAGAJQAFAIADANQADANgBAPQABARgDAMQgDANgGAIQgGAJgKAEQgKAEgNAAIgCAAQgNAAgIgEgAgIgoQgDADgCAGIgCAOIgBARIABASIACAOQACAHADADQADADAFAAQAFAAADgCQADgDACgFQADgIACgbIgCgTQgBgJgCgFQgEgKgJgBQgFAAgDAEg"
      );
    this.shape_58.setTransform(71.6, 43.9);

    this.shape_59 = new cjs.Shape();
    this.shape_59.graphics
      .f("#000000")
      .s()
      .p("AgPBWIAAh/IAfAAIAAB/gAgPg5IAAgcIAfAAIAAAcg");
    this.shape_59.setTransform(63, 41.7);

    this.shape_60 = new cjs.Shape();
    this.shape_60.graphics
      .f("#000000")
      .s()
      .p(
        "AAMBTIgNgBQgGgCgDgEQgEgEgBgGIgBgQIAAhIIgRAAIAAgXIARAAIAAglIAfAAIAAAlIATAAIAAAXIgTAAIAABEQAAAHACADQADAEAHAAIADAAIAEgBIAAAXIgKABg"
      );
    this.shape_60.setTransform(56.6, 42.1);

    this.shape_61 = new cjs.Shape();
    this.shape_61.graphics
      .f("#000000")
      .s()
      .p("AgPBWIAAh/IAfAAIAAB/gAgPg5IAAgcIAfAAIAAAcg");
    this.shape_61.setTransform(50.1, 41.7);

    this.shape_62 = new cjs.Shape();
    this.shape_62.graphics
      .f("#000000")
      .s()
      .p(
        "AANBTIgOgBQgGgCgDgEQgEgEgBgGIgBgQIAAhIIgRAAIAAgXIARAAIAAglIAfAAIAAAlIATAAIAAAXIgTAAIAABEQAAAHACADQADAEAGAAIAFAAIADgBIAAAXIgKABg"
      );
    this.shape_62.setTransform(43.8, 42.1);

    this.shape_63 = new cjs.Shape();
    this.shape_63.graphics
      .f("#000000")
      .s()
      .p(
        "AgOBBQgHgBgFgDQgKgGgFgJQgEgLgCgMIgBgXQAAgMACgMQACgMAFgJQAGgKAKgFQAKgGAPAAQAOAAAJAFQAJAEAGAJQAFAIACANQACALAAAQIAAAFIg/AAIAAALIAAALIADAJIAFAHQADACADABQAIAAAEgHQAEgFABgNIAeAAQgBAWgLANQgLALgYAAQgHAAgHgCgAgGgpQgDACgCAEIgDAIIAAAJIAAAFIAfAAIgBgMQAAgHgCgDQgCgFgEgCQgDgBgEAAQgEgBgDADg"
      );
    this.shape_63.setTransform(34.6, 43.9);

    this.shape_64 = new cjs.Shape();
    this.shape_64.graphics
      .f("#000000")
      .s()
      .p(
        "AgxBWIAAioIAgAAIAAAOQAGgJAGgFQAGgDAJAAQAVgBAJARQAFAHACAOQADANAAARQAAASgDAMQgCANgFAHQgEAIgIADQgHAFgLAAQgJgBgFgDQgGgEgFgHIgBAAIAAA1gAgHg5QgEACgCAGQgDALAAAUQAAAUADAKQADALAKAAQALAAACgLQAEgKAAgUQAAgUgEgLQgBgGgDgCQgEgDgFAAQgEAAgDADg"
      );
    this.shape_64.setTransform(23.2, 45.9);

    this.shape_65 = new cjs.Shape();
    this.shape_65.graphics
      .f("#000000")
      .s()
      .p(
        "AgOBBQgHgBgFgDQgKgGgFgJQgEgLgCgMIgBgXQAAgMACgMQACgMAFgJQAFgKAKgFQALgGAOAAQAPAAAJAFQAKAEAEAJQAGAIACANQACALAAAQIAAAFIhAAAIAAALIABALIADAJIAFAHQADACADABQAIAAAEgHQADgFACgNIAeAAQgBAWgLANQgLALgYAAQgHAAgHgCgAgGgpQgDACgCAEIgDAIIgBAJIAAAFIAgAAIgBgMQgBgHgCgDQgBgFgDgCQgDgBgFAAQgDgBgEADg"
      );
    this.shape_65.setTransform(11.5, 43.9);

    this.shape_66 = new cjs.Shape();
    this.shape_66.graphics
      .f("#000000")
      .s()
      .p(
        "AghBCIAAh/IAhAAIAAARQADgJAHgGQAHgGALAAIACAAIAEABIAAAfIgFAAIgGAAIgJABQgEABgDADQgEADgCAEQgBAFAAAGIAABMg"
      );
    this.shape_66.setTransform(2.5, 43.8);

    this.shape_67 = new cjs.Shape();
    this.shape_67.graphics
      .f("#000000")
      .s()
      .p("AgPBVIAAipIAfAAIAACpg");
    this.shape_67.setTransform(210.6, 13.5);

    this.shape_68 = new cjs.Shape();
    this.shape_68.graphics
      .f("#000000")
      .s()
      .p(
        "AggBAQgGgDgEgFQgDgFgCgHQgCgHAAgGQAAgKACgGQACgGAEgFQAEgEAGgCQAGgDAJgCIARgGQAHgCADgDQADgDAAgGQAAgIgDgEQgEgFgHABQgHgBgEAFQgEAEAAAJIAAADIgdAAIAAgDQAAgLADgIQAEgHAGgFQAGgFAIgCQAJgCAIAAQAOAAAJADQAJADAFAFQAFAFACAIQACAHAAAJIAABBIABAPIADAKIggAAIgCgGIgCgHIAAAAQgGAKgIADQgFADgMAAQgJAAgGgDgAAHAEIgHADQgIACgEAEQgFAGAAAJQAAAGADAGQADAFAHABIAFgCQADgBADgDQADgCACgDQACgFAAgEIAAgag"
      );
    this.shape_68.setTransform(201.9, 15.6);

    this.shape_69 = new cjs.Shape();
    this.shape_69.graphics
      .f("#000000")
      .s()
      .p(
        "AANBTIgOgBQgGgCgDgEQgEgEgBgGIgBgQIAAhIIgRAAIAAgXIARAAIAAglIAfAAIAAAlIATAAIAAAXIgTAAIAABEQAAAHACADQADAEAGAAIAFAAIADgBIAAAXIgKABg"
      );
    this.shape_69.setTransform(192.7, 13.8);

    this.shape_70 = new cjs.Shape();
    this.shape_70.graphics
      .f("#000000")
      .s()
      .p(
        "AAPBCIAAhXQABgKgEgEQgDgEgIAAQgPAAAAAVIAABUIgiAAIAAh/IAhAAIAAAPQAFgKAIgEQAHgFAKAAQAQAAAJAJQAEAEADAHQACAHAAAKIAABeg"
      );
    this.shape_70.setTransform(183.1, 15.4);

    this.shape_71 = new cjs.Shape();
    this.shape_71.graphics
      .f("#000000")
      .s()
      .p(
        "AgOBBQgHgBgFgDQgKgGgFgJQgEgLgBgMIgCgXQAAgMACgMQACgMAFgJQAGgKAJgFQALgGAOAAQAPAAAJAFQAJAEAGAJQAFAIACANQACALAAAQIAAAFIhAAAIAAALIABALIADAJIAFAHQADACADABQAIAAAEgHQADgFACgNIAeAAQgBAWgLAMQgLAMgYAAQgHAAgHgCgAgGgpQgDACgCAEIgDAIIgBAJIAAAFIAgAAIgBgMQgBgHgBgDQgCgFgEgCQgCgBgGAAQgCgBgEADg"
      );
    this.shape_71.setTransform(171.6, 15.6);

    this.shape_72 = new cjs.Shape();
    this.shape_72.graphics
      .f("#000000")
      .s()
      .p(
        "AAuBCIAAhYQAAgJgCgEQgEgEgGAAQgIAAgGAFQgEAFAAAMIAABTIgfAAIAAhYQAAgJgDgEQgDgEgHAAQgIAAgFAFQgEAFAAAMIAABTIgiAAIAAh/IAhAAIAAANQAGgJAHgEQAIgEALAAQAMAAAFAGQAJAFACAKIABAAQAEgKAIgGQAIgFAMAAQAIAAAHADQAGACAEAFQADAFADAHQACAIAAAJIAABcg"
      );
    this.shape_72.setTransform(157, 15.4);

    this.shape_73 = new cjs.Shape();
    this.shape_73.graphics
      .f("#000000")
      .s()
      .p(
        "AgUBAQgJgDgHgHQgFgJgEgNQgDgNAAgTQAAgSAEgNQAEgNAHgIQAHgHAJgEQAKgDAKAAQALAAAJAEQAJADAFAHQAGAGADAKQADAIAAAMIggAAIgBgJIgBgIQgCgEgDgDQgDgCgEAAQgEAAgFADQgEACgBAGQgCAFgBAJIgBARIABAUQABAJACAGQACAFADADQADACAEABQAIgBAFgHQADgHAAgQIAgAAQAAANgDAKQgDAJgGAHQgLANgaAAQgLAAgJgDg"
      );
    this.shape_73.setTransform(136.6, 15.6);

    this.shape_74 = new cjs.Shape();
    this.shape_74.graphics
      .f("#000000")
      .s()
      .p("AgPBWIAAh/IAfAAIAAB/gAgPg5IAAgcIAfAAIAAAcg");
    this.shape_74.setTransform(128.1, 13.4);

    this.shape_75 = new cjs.Shape();
    this.shape_75.graphics
      .f("#000000")
      .s()
      .p(
        "AAMBTIgNgBQgGgCgEgEQgDgEgBgGIgBgQIAAhIIgRAAIAAgXIARAAIAAglIAfAAIAAAlIATAAIAAAXIgTAAIAABEQAAAHACADQACAEAIAAIADAAIAEgBIAAAXIgLABg"
      );
    this.shape_75.setTransform(121.8, 13.8);

    this.shape_76 = new cjs.Shape();
    this.shape_76.graphics
      .f("#000000")
      .s()
      .p(
        "AggBAQgGgDgEgFQgDgFgCgHQgCgHAAgGQAAgKACgGQACgGAEgFQAEgEAGgCQAGgDAJgCIARgGQAHgCADgDQADgDAAgGQAAgIgDgEQgEgFgHABQgHgBgEAFQgEAEAAAJIAAADIgdAAIAAgDQAAgLADgIQAEgHAGgFQAGgFAIgCQAJgCAIAAQAOAAAJADQAJADAFAFQAFAFACAIQACAHAAAJIAABBIABAPIADAKIggAAIgCgGIgCgHIAAAAQgGAKgIADQgFADgMAAQgJAAgGgDgAAHAEIgHADQgIACgEAEQgFAGAAAJQAAAGADAGQADAFAHABIAFgCQADgBADgDQADgCACgDQACgFAAgEIAAgag"
      );
    this.shape_76.setTransform(112.3, 15.6);

    this.shape_77 = new cjs.Shape();
    this.shape_77.graphics
      .f("#000000")
      .s()
      .p(
        "AAvBCIAAhYQAAgJgEgEQgDgEgHAAQgHAAgFAFQgFAFAAAMIAABTIgfAAIAAhYQAAgJgDgEQgDgEgHAAQgIAAgEAFQgGAFAAAMIAABTIggAAIAAh/IAfAAIAAANQAHgJAIgEQAHgEAMAAQALAAAGAGQAHAFADAKIAAAAQAEgKAJgGQAJgFAMAAQAHAAAGADQAHACADAFQAFAFABAHQACAIAAAJIAABcg"
      );
    this.shape_77.setTransform(97.6, 15.4);

    this.shape_78 = new cjs.Shape();
    this.shape_78.graphics
      .f("#000000")
      .s()
      .p(
        "AgOBBQgHgBgFgDQgKgGgFgJQgFgLgBgMIgBgXQAAgMACgMQACgMAFgJQAFgKALgFQAKgGAPAAQAOAAAJAFQAKAEAEAJQAGAIACANQACALAAAQIAAAFIg/AAIAAALIAAALIADAJIAFAHQADACADABQAIAAAEgHQAEgFABgNIAeAAQgBAWgLAMQgLAMgYAAQgHAAgHgCgAgGgpQgDACgCAEIgDAIIAAAJIAAAFIAfAAIgBgMQgBgHgCgDQgBgFgDgCQgEgBgEAAQgDgBgEADg"
      );
    this.shape_78.setTransform(83, 15.6);

    this.shape_79 = new cjs.Shape();
    this.shape_79.graphics
      .f("#000000")
      .s()
      .p(
        "AANBTIgOgBQgGgCgDgEQgEgEgBgGIgBgQIAAhIIgRAAIAAgXIARAAIAAglIAfAAIAAAlIATAAIAAAXIgTAAIAABEQAAAHACADQADAEAGAAIAFAAIADgBIAAAXIgKABg"
      );
    this.shape_79.setTransform(73.9, 13.8);

    this.shape_80 = new cjs.Shape();
    this.shape_80.graphics
      .f("#000000")
      .s()
      .p(
        "AgWBAQgJgCgGgGQgFgEgCgIQgCgIAAgJIAAgFIAeAAIAAAFQAAAIAEAFQAEAFAIABQAGAAAFgFQAFgEAAgHQAAgHgEgDIgIgEIgWgJQgNgFgHgHQgEgEgCgGQgBgFAAgHQAAgIACgHQADgHAGgFQAGgGAIgDQAKgDAKAAQAMAAAIADQAIACAGAEQAKAKAAASIAAAFIgdAAQAAgKgEgFQgDgEgIAAQgEgBgFAEQgFAEAAAGQAAAGADADQADAEAIACIATAIQAPAEAHAHQAGAIAAAQQAAAKgDAHQgEAIgGAFQgHAFgIACQgJACgKAAQgNAAgJgDg"
      );
    this.shape_80.setTransform(65, 15.6);

    this.shape_81 = new cjs.Shape();
    this.shape_81.graphics
      .f("#000000")
      .s()
      .p(
        "AgpBVIAAgZIAJABQAJAAAEgFQAEgFABgIIglh/IAjAAIARBXIABAAIAQhXIAiAAIggB3QgEAQgEAKQgEAKgFAFQgEAFgHACQgIACgLAAg"
      );
    this.shape_81.setTransform(54.3, 17.7);

    this.shape_82 = new cjs.Shape();
    this.shape_82.graphics
      .f("#000000")
      .s()
      .p(
        "AgWBAQgJgCgGgGQgFgEgCgIQgCgIAAgJIAAgFIAeAAIAAAFQAAAIAEAFQAEAFAIABQAGAAAFgFQAFgEAAgHQAAgHgEgDIgIgEIgWgJQgNgFgHgHQgEgEgCgGQgBgFAAgHQAAgIACgHQADgHAGgFQAGgGAIgDQAKgDAKAAQAMAAAIADQAIACAGAEQAKAKAAASIAAAFIgdAAQAAgKgEgFQgDgEgIAAQgEgBgFAEQgFAEAAAGQAAAGADADQADAEAIACIATAIQAPAEAHAHQAGAIAAAQQAAAKgDAHQgEAIgGAFQgHAFgIACQgJACgKAAQgNAAgJgDg"
      );
    this.shape_82.setTransform(43.7, 15.6);

    this.shape_83 = new cjs.Shape();
    this.shape_83.graphics
      .f("#000000")
      .s()
      .p(
        "AgOBBQgHgBgFgDQgKgGgFgJQgFgLgBgMIgBgXQAAgMACgMQACgMAFgJQAFgKALgFQAKgGAPAAQAOAAAJAFQAKAEAEAJQAGAIACANQACALAAAQIAAAFIg/AAIAAALIAAALIADAJIAFAHQADACADABQAIAAAEgHQAEgFABgNIAeAAQgBAWgLAMQgLAMgYAAQgHAAgHgCgAgGgpQgDACgCAEIgDAIIAAAJIAAAFIAfAAIgBgMQgBgHgCgDQgBgFgDgCQgEgBgEAAQgEgBgDADg"
      );
    this.shape_83.setTransform(27.1, 15.6);

    this.shape_84 = new cjs.Shape();
    this.shape_84.graphics
      .f("#000000")
      .s()
      .p(
        "AAQBVIAAhXQgBgKgDgEQgEgEgHAAQgPAAgBAUIAABVIggAAIAAipIAgAAIAAA3IABAAQAKgQAUAAQAQAAAIAIQAEAFACAHQADAHAAAKIAABdg"
      );
    this.shape_84.setTransform(15.5, 13.5);

    this.shape_85 = new cjs.Shape();
    this.shape_85.graphics
      .f("#000000")
      .s()
      .p("AgQBVIAAiNIglAAIAAgcIBrAAIAAAcIglAAIAACNg");
    this.shape_85.setTransform(3.8, 13.5);

    this.timeline.addTween(
      cjs.Tween.get({})
        .to({
          state: [
            { t: this.shape_85 },
            { t: this.shape_84 },
            { t: this.shape_83 },
            { t: this.shape_82 },
            { t: this.shape_81 },
            { t: this.shape_80 },
            { t: this.shape_79 },
            { t: this.shape_78 },
            { t: this.shape_77 },
            { t: this.shape_76 },
            { t: this.shape_75 },
            { t: this.shape_74 },
            { t: this.shape_73 },
            { t: this.shape_72 },
            { t: this.shape_71 },
            { t: this.shape_70 },
            { t: this.shape_69 },
            { t: this.shape_68 },
            { t: this.shape_67 },
            { t: this.shape_66 },
            { t: this.shape_65 },
            { t: this.shape_64 },
            { t: this.shape_63 },
            { t: this.shape_62 },
            { t: this.shape_61 },
            { t: this.shape_60 },
            { t: this.shape_59 },
            { t: this.shape_58 },
            { t: this.shape_57 },
            { t: this.shape_56 },
            { t: this.shape_55 },
            { t: this.shape_54 },
            { t: this.shape_53 },
            { t: this.shape_52 },
            { t: this.shape_51 },
            { t: this.shape_50 },
            { t: this.shape_49 },
            { t: this.shape_48 },
            { t: this.shape_47 },
            { t: this.shape_46 },
            { t: this.shape_45 },
            { t: this.shape_44 },
            { t: this.shape_43 },
            { t: this.shape_42 },
            { t: this.shape_41 },
            { t: this.shape_40 },
            { t: this.shape_39 },
            { t: this.shape_38 },
            { t: this.shape_37 },
            { t: this.shape_36 },
            { t: this.shape_35 },
            { t: this.shape_34 },
            { t: this.shape_33 },
            { t: this.shape_32 },
            { t: this.shape_31 },
            { t: this.shape_30 },
            { t: this.shape_29 },
            { t: this.shape_28 },
            { t: this.shape_27 },
            { t: this.shape_26 },
            { t: this.shape_25 },
            { t: this.shape_24 },
            { t: this.shape_23 },
            { t: this.shape_22 },
            { t: this.shape_21 },
            { t: this.shape_20 },
            { t: this.shape_19 },
            { t: this.shape_18 },
            { t: this.shape_17 },
            { t: this.shape_16 },
            { t: this.shape_15 },
            { t: this.shape_14 },
            { t: this.shape_13 },
            { t: this.shape_12 },
            { t: this.shape_11 },
            { t: this.shape_10 },
            { t: this.shape_9 },
            { t: this.shape_8 },
            { t: this.shape_7 },
            { t: this.shape_6 },
            { t: this.shape_5 },
            { t: this.shape_4 },
            { t: this.shape_3 },
            { t: this.shape_2 },
            { t: this.shape_1 },
            { t: this.shape }
          ]
        })
        .wait(1)
    );
  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = new cjs.Rectangle(-4, -3, 297.8, 145.8);

  (lib.text45 = function(mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {});

    // Layer 1
    this.shape = new cjs.Shape();
    this.shape.graphics
      .f("#330066")
      .s()
      .p("AgUByIAAgqIAqAAIAAAqgAgPAyIgFhYIAAhLIAqAAIAABLIgHBYg");
    this.shape.setTransform(150.5, 19);

    this.shape_1 = new cjs.Shape();
    this.shape_1.graphics
      .f("#330066")
      .s()
      .p(
        "AAVBYIAAh1QgBgNgEgGQgEgFgKAAQgWAAAAAdIAABwIgsAAIAAiqIAqAAIAAAUIABAAQAHgNALgGQAJgGAPAAQAVAAAMAMQAFAFADAKQADAJAAANIAAB+g"
      );
    this.shape_1.setTransform(137.8, 21.6);

    this.shape_2 = new cjs.Shape();
    this.shape_2.graphics
      .f("#330066")
      .s()
      .p(
        "AgrBVQgIgDgFgHQgFgIgCgJQgCgIAAgJQAAgMACgJQADgJAFgGQAFgFAJgDQAIgEALgEIAXgGQAKgDAEgEQAEgFAAgJQAAgJgFgGQgEgFgKgBQgKAAgFAHQgFAFAAALIAAAEIgoAAIAAgDQAAgQAFgJQAFgKAIgHQAIgGALgDQALgCAMAAQASgBANAEQAMAEAHAHQAGAHADAKQACAJAAAMIAABZIABATIAEAOIgqAAIgDgJIgCgJIgBAAQgIAOgKADQgIAFgQAAQgLAAgIgFgAAJAFIgJAEQgMADgFAGQgGAHAAAMQAAAKAEAHQAEAGAJAAIAHgBQAFgBAEgDQAEgEACgFQADgFAAgHIAAgig"
      );
    this.shape_2.setTransform(122, 21.8);

    this.shape_3 = new cjs.Shape();
    this.shape_3.graphics
      .f("#330066")
      .s()
      .p("AgVByIAAjjIAqAAIAADjg");
    this.shape_3.setTransform(110.6, 19);

    this.shape_4 = new cjs.Shape();
    this.shape_4.graphics
      .f("#330066")
      .s()
      .p(
        "AhCBzIAAjhIArAAIAAASIAAAAQAIgMAJgGQAGgEAOAAQAcgBAMAVQAGAMAEAQQADASAAAYQAAAYgDAPQgEASgGAJQgGALgKAFQgKAFgOABQgMAAgHgFQgJgFgHgKIAAAAIAABHgAgLhNQgEAEgDAGQgDAPAAAcQAAAaADAOQAFAOANAAQAOAAAFgOQAEgOAAgaQAAgcgEgPQgDgGgEgEQgFgEgHAAQgGAAgFAEg"
      );
    this.shape_4.setTransform(99, 24.4);

    this.shape_5 = new cjs.Shape();
    this.shape_5.graphics
      .f("#330066")
      .s()
      .p(
        "AgrBVQgIgDgFgHQgFgIgCgJQgCgIAAgJQAAgMACgJQADgJAFgGQAFgFAJgDQAIgEALgEIAXgGQAKgDAEgEQAEgFAAgJQAAgJgFgGQgEgFgKgBQgKAAgFAHQgFAFAAALIAAAEIgoAAIAAgDQAAgQAFgJQAFgKAIgHQAIgGALgDQALgCAMAAQASgBANAEQAMAEAHAHQAGAHADAKQACAJAAAMIAABZIABATIAEAOIgqAAIgDgJIgCgJIgBAAQgIAOgKADQgIAFgQAAQgLAAgIgFgAAJAFIgJAEQgMADgFAGQgGAHAAAMQAAAKAEAHQAEAGAJAAIAHgBQAFgBAEgDQAEgEACgFQADgFAAgHIAAgig"
      );
    this.shape_5.setTransform(75.3, 21.8);

    this.shape_6 = new cjs.Shape();
    this.shape_6.graphics
      .f("#330066")
      .s()
      .p(
        "AgTBXQgKgCgGgDQgOgJgGgNQgGgNgCgQIgBgfQAAgRACgQQACgQAIgMQAHgNANgHQAOgIAUABQATAAANAFQAMAHAHALQAHAMADAPQACARAAAUIAAAHIhVAAIAAAPIABAOIAEANQACAFAEAEQAEADAFAAQALAAAFgHQAFgIACgRIAoAAQgCAegOAQQgPAQggAAQgKAAgJgDgAgJg4QgEAEgCAEIgEALIgBANIAAAHIArAAIgBgSQgBgHgDgGQgCgFgEgDQgFgCgHgBQgEABgFACg"
      );
    this.shape_6.setTransform(52.7, 21.8);

    this.shape_7 = new cjs.Shape();
    this.shape_7.graphics
      .f("#330066")
      .s()
      .p("AgXBWIgtiqIAuAAIAXB4IABAAIAXh4IAsAAIgrCqg");
    this.shape_7.setTransform(38.2, 21.8);

    this.shape_8 = new cjs.Shape();
    this.shape_8.graphics
      .f("#330066")
      .s()
      .p(
        "AgrBVQgIgDgFgHQgFgIgCgJQgCgIAAgJQAAgMACgJQADgJAFgGQAFgFAJgDQAIgEALgEIAXgGQAKgDAEgEQAEgFAAgJQAAgJgFgGQgEgFgKgBQgKAAgFAHQgFAFAAALIAAAEIgoAAIAAgDQAAgQAFgJQAFgKAIgHQAIgGALgDQALgCAMAAQASgBANAEQAMAEAHAHQAGAHADAKQACAJAAAMIAABZIABATIAEAOIgqAAIgDgJIgCgJIgBAAQgIAOgKADQgIAFgQAAQgLAAgIgFgAAJAFIgJAEQgMADgFAGQgGAHAAAMQAAAKAEAHQAEAGAJAAIAHgBQAFgBAEgDQAEgEACgFQADgFAAgHIAAgig"
      );
    this.shape_8.setTransform(23.3, 21.8);

    this.shape_9 = new cjs.Shape();
    this.shape_9.graphics
      .f("#330066")
      .s()
      .p("AAbByIAAhmIg0AAIAABmIguAAIAAjjIAuAAIAABYIA0AAIAAhYIAuAAIAADjg");
    this.shape_9.setTransform(6.9, 19);

    this.timeline.addTween(
      cjs.Tween.get({})
        .to({
          state: [
            { t: this.shape_9 },
            { t: this.shape_8 },
            { t: this.shape_7 },
            { t: this.shape_6 },
            { t: this.shape_5 },
            { t: this.shape_4 },
            { t: this.shape_3 },
            { t: this.shape_2 },
            { t: this.shape_1 },
            { t: this.shape }
          ]
        })
        .wait(1)
    );
  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = new cjs.Rectangle(-4, -2.3, 176.7, 79.6);

  (lib.text41 = function(mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {});

    // Layer 1
    this.shape = new cjs.Shape();
    this.shape.graphics
      .f("#000000")
      .s()
      .p("AgOASIAAgjIAdAAIAAAjg");
    this.shape.setTransform(130.2, 105.2);

    this.shape_1 = new cjs.Shape();
    this.shape_1.graphics
      .f("#000000")
      .s()
      .p(
        "AgpBVIAAgZIAJABQAJAAAEgFQAEgFABgIIglh/IAjAAIARBXIABAAIAQhXIAiAAIggB3QgEAQgEAKQgEAKgFAFQgEAFgHACQgIACgLAAg"
      );
    this.shape_1.setTransform(122, 102.7);

    this.shape_2 = new cjs.Shape();
    this.shape_2.graphics
      .f("#000000")
      .s()
      .p("AgPBVIAAipIAfAAIAACpg");
    this.shape_2.setTransform(113.8, 98.5);

    this.shape_3 = new cjs.Shape();
    this.shape_3.graphics
      .f("#000000")
      .s()
      .p("AgPBVIAAipIAfAAIAACpg");
    this.shape_3.setTransform(108.1, 98.5);

    this.shape_4 = new cjs.Shape();
    this.shape_4.graphics
      .f("#000000")
      .s()
      .p(
        "AggBAQgGgDgEgFQgDgFgCgHQgCgHAAgGQAAgKACgGQACgGAEgFQAEgEAGgCQAGgDAJgCIARgGQAHgCADgDQADgDAAgGQAAgIgDgEQgEgFgHABQgHgBgEAFQgEAEAAAJIAAADIgdAAIAAgDQAAgLADgIQAEgHAGgFQAGgFAIgCQAJgCAIAAQAOAAAJADQAJADAFAFQAFAFACAIQACAHAAAJIAABBIABAPIADAKIggAAIgCgGIgCgHIAAAAQgGAKgIADQgFADgMAAQgJAAgGgDgAAHAEIgHADQgIACgEAEQgFAGAAAJQAAAGADAGQADAFAHABIAFgCQADgBADgDQADgCACgDQACgFAAgEIAAgag"
      );
    this.shape_4.setTransform(99.4, 100.6);

    this.shape_5 = new cjs.Shape();
    this.shape_5.graphics
      .f("#000000")
      .s()
      .p(
        "AgUBAQgJgDgHgHQgFgJgEgNQgDgNAAgTQAAgSAEgNQAEgNAHgIQAHgIAJgDQAKgDAKAAQALAAAJAEQAIADAHAHQAFAGADAKQADAIAAAMIggAAIgBgJIgCgIQgBgEgDgDQgDgCgEAAQgFAAgDADQgFACgBAGQgCAFgBAJIAAARIAAAUQABAJACAGQACAFADADQADACAEABQAJgBADgHQAEgHAAgQIAgAAQAAANgDAKQgDAJgFAHQgMANgaAAQgLAAgJgDg"
      );
    this.shape_5.setTransform(88.2, 100.6);

    this.shape_6 = new cjs.Shape();
    this.shape_6.graphics
      .f("#000000")
      .s()
      .p("AgPBWIAAh/IAfAAIAAB/gAgPg5IAAgcIAfAAIAAAcg");
    this.shape_6.setTransform(79.7, 98.4);

    this.shape_7 = new cjs.Shape();
    this.shape_7.graphics
      .f("#000000")
      .s()
      .p(
        "AAMBTIgNgBQgGgCgDgEQgEgEgBgGIgBgQIAAhIIgRAAIAAgXIARAAIAAglIAfAAIAAAlIATAAIAAAXIgTAAIAABEQAAAHACADQADAEAGAAIAEAAIAEgBIAAAXIgKABg"
      );
    this.shape_7.setTransform(73.4, 98.8);

    this.shape_8 = new cjs.Shape();
    this.shape_8.graphics
      .f("#000000")
      .s()
      .p(
        "AggBAQgGgDgEgFQgDgFgCgHQgCgHAAgGQAAgKACgGQACgGAEgFQAEgEAGgCQAGgDAJgCIARgGQAHgCADgDQADgDAAgGQAAgIgDgEQgEgFgHABQgHgBgEAFQgEAEAAAJIAAADIgdAAIAAgDQAAgLADgIQAEgHAGgFQAGgFAIgCQAJgCAIAAQAOAAAJADQAJADAFAFQAFAFACAIQACAHAAAJIAABBIABAPIADAKIggAAIgCgGIgCgHIAAAAQgGAKgIADQgFADgMAAQgJAAgGgDgAAHAEIgHADQgIACgEAEQgFAGAAAJQAAAGADAGQADAFAHABIAFgCQADgBADgDQADgCACgDQACgFAAgEIAAgag"
      );
    this.shape_8.setTransform(63.9, 100.6);

    this.shape_9 = new cjs.Shape();
    this.shape_9.graphics
      .f("#000000")
      .s()
      .p(
        "AAvBCIAAhYQAAgJgDgEQgEgEgHAAQgIAAgFAFQgEAFAAAMIAABTIgfAAIAAhYQAAgJgDgEQgDgEgHAAQgIAAgFAFQgEAFgBAMIAABTIggAAIAAh/IAfAAIAAANQAHgJAIgEQAHgEAMAAQALAAAFAGQAJAFACAKIAAAAQAFgKAIgGQAJgFALAAQAJAAAGADQAFACAFAFQADAFACAHQACAIABAJIAABcg"
      );
    this.shape_9.setTransform(49.2, 100.5);

    this.shape_10 = new cjs.Shape();
    this.shape_10.graphics
      .f("#000000")
      .s()
      .p(
        "AgXA/QgKgDgGgJQgGgJgCgNQgCgMgBgRQAAgPADgMQADgNAGgJQAGgIAKgFQAJgEANAAQAPgBAJAFQAKAEAGAJQAFAIADANQACANAAAPQAAARgCAMQgDANgGAIQgGAJgKAEQgJAEgOAAIgCAAQgNAAgIgEgAgIgoQgDADgDAGIgBAOIgBARIABASIABAOQADAHADADQADADAFAAQAFAAADgCQADgDACgFQADgIACgbIgBgTQgCgJgCgFQgEgKgJgBQgFAAgDAEg"
      );
    this.shape_10.setTransform(34.4, 100.6);

    this.shape_11 = new cjs.Shape();
    this.shape_11.graphics
      .f("#000000")
      .s()
      .p(
        "AAMBTIgNgBQgGgCgDgEQgEgEgBgGIgBgQIAAhIIgRAAIAAgXIARAAIAAglIAfAAIAAAlIATAAIAAAXIgTAAIAABEQAAAHACADQADAEAHAAIADAAIAEgBIAAAXIgKABg"
      );
    this.shape_11.setTransform(25.1, 98.8);

    this.shape_12 = new cjs.Shape();
    this.shape_12.graphics
      .f("#000000")
      .s()
      .p(
        "AgcA/QgGgCgFgEQgIgIAAgUIAAhdIAgAAIAABXQAAAKAEAEQAEAEAHAAQAHAAAEgGQAEgFABgLIAAhTIAhAAIAAB/IghAAIAAgPQgFAJgIAEQgHAEgLAAQgIAAgFgCg"
      );
    this.shape_12.setTransform(15.5, 100.8);

    this.shape_13 = new cjs.Shape();
    this.shape_13.graphics
      .f("#000000")
      .s()
      .p(
        "AggBAQgGgDgEgFQgDgFgCgHQgCgHAAgGQAAgKACgGQACgGAEgFQAEgEAGgCQAGgDAJgCIARgGQAHgCADgDQADgDAAgGQAAgIgDgEQgEgFgHABQgHgBgEAFQgEAEAAAJIAAADIgdAAIAAgDQAAgLADgIQAEgHAGgFQAGgFAIgCQAJgCAIAAQAOAAAJADQAJADAFAFQAFAFACAIQACAHAAAJIAABBIABAPIADAKIggAAIgCgGIgCgHIAAAAQgGAKgIADQgFADgMAAQgJAAgGgDgAAHAEIgHADQgIACgEAEQgFAGAAAJQAAAGADAGQADAFAHABIAFgCQADgBADgDQADgCACgDQACgFAAgEIAAgag"
      );
    this.shape_13.setTransform(3.7, 100.6);

    this.shape_14 = new cjs.Shape();
    this.shape_14.graphics
      .f("#000000")
      .s()
      .p(
        "AgbBSQgHgDgGgIQgJgQAAgkQAAgRACgLQADgOAEgHQAKgRAVABQAJAAAEADQAHAEAGAIIAAAAIAAg3IAhAAIAACqIggAAIAAgNQgFAJgIADQgFADgJABQgKAAgIgFgAgHgSQgEACgCAGQgDAKAAATQAAAWADAKQADALAKAAQAFAAAEgCQADgDABgGQAEgKAAgWQAAgTgEgKQgBgGgDgCQgEgDgFAAQgEAAgDADg"
      );
    this.shape_14.setTransform(242.8, 70.3);

    this.shape_15 = new cjs.Shape();
    this.shape_15.graphics
      .f("#000000")
      .s()
      .p(
        "AAQBCIAAhXQgBgKgDgEQgEgEgHAAQgQAAAAAVIAABUIggAAIAAh/IAfAAIAAAPQAGgKAJgEQAGgFALAAQAPAAAJAJQAEAEACAHQACAHABAKIAABeg"
      );
    this.shape_15.setTransform(231, 72.1);

    this.shape_16 = new cjs.Shape();
    this.shape_16.graphics
      .f("#000000")
      .s()
      .p(
        "AggBAQgGgDgEgFQgDgFgCgHQgCgHAAgGQAAgKACgGQACgGAEgFQAEgEAGgCQAGgDAJgCIARgGQAHgCADgDQADgDAAgGQAAgIgDgEQgEgFgHABQgHgBgEAFQgEAEAAAJIAAADIgdAAIAAgDQAAgLADgIQAEgHAGgFQAGgFAIgCQAJgCAIAAQAOAAAJADQAJADAFAFQAFAFACAIQACAHAAAJIAABBIABAPIADALIggAAIgCgHIgCgHIAAAAQgGAKgIADQgFADgMAAQgJAAgGgDgAAHAEIgHADQgIACgEAEQgFAGAAAJQAAAGADAGQADAFAHABIAFgCQADgBADgDQADgCACgDQACgFAAgEIAAgag"
      );
    this.shape_16.setTransform(219.1, 72.3);

    this.shape_17 = new cjs.Shape();
    this.shape_17.graphics
      .f("#000000")
      .s()
      .p(
        "AgpBVIAAgZIAJABQAJAAAEgFQAEgFABgIIglh/IAjAAIARBXIABAAIAQhXIAiAAIggB3QgEAQgEAKQgEAKgFAFQgEAFgHACQgIACgLAAg"
      );
    this.shape_17.setTransform(202.4, 74.4);

    this.shape_18 = new cjs.Shape();
    this.shape_18.graphics
      .f("#000000")
      .s()
      .p("AgPBVIAAipIAfAAIAACpg");
    this.shape_18.setTransform(194.2, 70.2);

    this.shape_19 = new cjs.Shape();
    this.shape_19.graphics
      .f("#000000")
      .s()
      .p(
        "AgOBBQgHgBgFgDQgKgGgFgJQgFgLAAgMIgCgXQAAgMACgMQACgMAFgJQAFgKAKgFQALgGAOAAQAPAAAJAFQAKAEAEAJQAGAIACANQACALAAAQIAAAFIhAAAIAAALIABALIADAJIAFAHQADACADABQAIAAAEgHQADgFACgNIAeAAQgBAWgLAMQgLAMgYAAQgHAAgHgCgAgGgpQgDACgCAEIgDAIIgBAJIAAAFIAgAAIgBgMQAAgHgDgDQgBgFgDgCQgEgBgFAAQgCgBgEADg"
      );
    this.shape_19.setTransform(185.8, 72.3);

    this.shape_20 = new cjs.Shape();
    this.shape_20.graphics
      .f("#000000")
      .s()
      .p(
        "AANBTIgOgBQgHgCgCgEQgEgEgBgGIgBgQIAAhIIgRAAIAAgXIARAAIAAglIAfAAIAAAlIATAAIAAAXIgTAAIAABEQAAAHACADQADAEAGAAIAFAAIADgBIAAAXIgLABg"
      );
    this.shape_20.setTransform(176.7, 70.5);

    this.shape_21 = new cjs.Shape();
    this.shape_21.graphics
      .f("#000000")
      .s()
      .p(
        "AggBAQgGgDgEgFQgDgFgCgHQgCgHAAgGQAAgKACgGQACgGAEgFQAEgEAGgCQAGgDAJgCIARgGQAHgCADgDQADgDAAgGQAAgIgDgEQgEgFgHABQgHgBgEAFQgEAEAAAJIAAADIgdAAIAAgDQAAgLADgIQAEgHAGgFQAGgFAIgCQAJgCAIAAQAOAAAJADQAJADAFAFQAFAFACAIQACAHAAAJIAABBIABAPIADALIggAAIgCgHIgCgHIAAAAQgGAKgIADQgFADgMAAQgJAAgGgDgAAHAEIgHADQgIACgEAEQgFAGAAAJQAAAGADAGQADAFAHABIAFgCQADgBADgDQADgCACgDQACgFAAgEIAAgag"
      );
    this.shape_21.setTransform(167.3, 72.3);

    this.shape_22 = new cjs.Shape();
    this.shape_22.graphics
      .f("#000000")
      .s()
      .p("AgPBWIAAh/IAfAAIAAB/gAgPg5IAAgcIAfAAIAAAcg");
    this.shape_22.setTransform(158.7, 70.1);

    this.shape_23 = new cjs.Shape();
    this.shape_23.graphics
      .f("#000000")
      .s()
      .p(
        "AggBCIAAh/IAfAAIAAARQAEgJAHgGQAHgGAKAAIAEAAIACABIAAAfIgEAAIgGAAIgJABQgEABgEADQgDADgCAEQgBAFAAAGIAABMg"
      );
    this.shape_23.setTransform(152.4, 72.1);

    this.shape_24 = new cjs.Shape();
    this.shape_24.graphics
      .f("#000000")
      .s()
      .p(
        "AgxBWIAAioIAgAAIAAAOQAGgJAHgFQAEgDALAAQAUgBAKARQAEAHADAOQACANAAARQAAASgCAMQgDANgEAHQgFAIgIADQgIAFgJAAQgKgBgEgDQgHgEgGgHIAAAAIAAA1gAgIg5QgDACgBAGQgEALAAAUQAAAUAEAKQADALAJAAQALAAADgLQADgKAAgUQAAgUgDgLQgCgGgEgCQgDgDgFAAQgEAAgEADg"
      );
    this.shape_24.setTransform(142.1, 74.2);

    this.shape_25 = new cjs.Shape();
    this.shape_25.graphics
      .f("#000000")
      .s()
      .p(
        "AgXA/QgKgDgGgJQgGgJgCgNQgDgMAAgRQABgPADgMQACgNAGgJQAGgIAKgFQAKgEAMAAQAOgBALAFQAJAEAGAJQAGAIACANQACANABAPQgBARgCAMQgDANgGAIQgGAJgJAEQgLAEgNAAIgCAAQgNAAgIgEgAgIgoQgDADgDAGIgCAOIAAARIAAASIACAOQADAHADADQAEADAEAAQAEAAAEgCQAEgDACgFQACgIABgbIgBgTQAAgJgCgFQgFgKgJgBQgEAAgEAEg"
      );
    this.shape_25.setTransform(130.2, 72.3);

    this.shape_26 = new cjs.Shape();
    this.shape_26.graphics
      .f("#000000")
      .s()
      .p(
        "AghBCIAAh/IAhAAIAAARQADgJAHgGQAHgGALAAIACAAIAEABIAAAfIgGAAIgFAAIgIABQgFABgDADQgEADgCAEQgBAFAAAGIAABMg"
      );
    this.shape_26.setTransform(121, 72.1);

    this.shape_27 = new cjs.Shape();
    this.shape_27.graphics
      .f("#000000")
      .s()
      .p(
        "AgxBWIAAioIAgAAIAAAOQAGgJAGgFQAFgDAKAAQAVgBAJARQAFAHACAOQADANAAARQAAASgDAMQgCANgFAHQgFAIgHADQgHAFgLAAQgJgBgFgDQgGgEgFgHIgBAAIAAA1gAgHg5QgEACgCAGQgDALAAAUQAAAUADAKQAEALAJAAQALAAACgLQAEgKAAgUQAAgUgEgLQgBgGgDgCQgEgDgFAAQgEAAgDADg"
      );
    this.shape_27.setTransform(110.6, 74.2);

    this.shape_28 = new cjs.Shape();
    this.shape_28.graphics
      .f("#000000")
      .s()
      .p(
        "AgxBWIAAioIAgAAIAAAOQAGgJAHgFQAEgDALAAQAUgBAJARQAFAHADAOQACANAAARQAAASgCAMQgDANgFAHQgEAIgIADQgHAFgKAAQgKgBgFgDQgGgEgFgHIgBAAIAAA1gAgHg5QgEACgCAGQgDALAAAUQAAAUADAKQADALAKAAQAKAAADgLQAEgKAAgUQAAgUgEgLQgBgGgDgCQgEgDgFAAQgEAAgDADg"
      );
    this.shape_28.setTransform(98.6, 74.2);

    this.shape_29 = new cjs.Shape();
    this.shape_29.graphics
      .f("#000000")
      .s()
      .p(
        "AggBAQgGgDgEgFQgDgFgCgHQgCgHAAgGQAAgKACgGQACgGAEgFQAEgEAGgCQAGgDAJgCIARgGQAHgCADgDQADgDAAgGQAAgIgDgEQgEgFgHABQgHgBgEAFQgEAEAAAJIAAADIgdAAIAAgDQAAgLADgIQAEgHAGgFQAGgFAIgCQAJgCAIAAQAOAAAJADQAJADAFAFQAFAFACAIQACAHAAAJIAABBIABAPIADALIggAAIgCgHIgCgHIAAAAQgGAKgIADQgFADgMAAQgJAAgGgDgAAHAEIgHADQgIACgEAEQgFAGAAAJQAAAGADAGQADAFAHABIAFgCQADgBADgDQADgCACgDQACgFAAgEIAAgag"
      );
    this.shape_29.setTransform(86.6, 72.3);

    this.shape_30 = new cjs.Shape();
    this.shape_30.graphics
      .f("#000000")
      .s()
      .p(
        "AgbBSQgIgDgEgIQgKgQAAgkQAAgRADgLQACgOAFgHQAJgRAUABQAKAAAFADQAGAEAFAIIABAAIAAg3IAhAAIAACqIggAAIAAgNQgGAJgGADQgGADgKABQgKAAgHgFgAgIgSQgDACgBAGQgEAKAAATQAAAWAEAKQACALAKAAQAFAAADgCQAEgDACgGQADgKAAgWQAAgTgDgKQgCgGgEgCQgDgDgFAAQgEAAgEADg"
      );
    this.shape_30.setTransform(69.1, 70.3);

    this.shape_31 = new cjs.Shape();
    this.shape_31.graphics
      .f("#000000")
      .s()
      .p(
        "AAPBCIAAhXQABgKgEgEQgDgEgIAAQgPAAAAAVIAABUIgiAAIAAh/IAhAAIAAAPQAFgKAIgEQAHgFAKAAQARAAAIAJQAEAEADAHQACAHgBAKIAABeg"
      );
    this.shape_31.setTransform(57.2, 72.1);

    this.shape_32 = new cjs.Shape();
    this.shape_32.graphics
      .f("#000000")
      .s()
      .p(
        "AgXA/QgKgDgGgJQgFgJgDgNQgDgMAAgRQAAgPAEgMQACgNAGgJQAGgIAKgFQAKgEAMAAQAOgBALAFQAJAEAGAJQAFAIADANQADANAAAPQAAARgDAMQgDANgGAIQgGAJgJAEQgLAEgNAAIgCAAQgNAAgIgEgAgIgoQgEADgCAGIgCAOIAAARIAAASIACAOQACAHAEADQAEADAEAAQAEAAAEgCQADgDADgFQACgIABgbIAAgTQgBgJgCgFQgFgKgJgBQgEAAgEAEg"
      );
    this.shape_32.setTransform(45.5, 72.3);

    this.shape_33 = new cjs.Shape();
    this.shape_33.graphics
      .f("#000000")
      .s()
      .p(
        "AgxBWIAAioIAgAAIAAAOQAGgJAGgFQAGgDAJAAQAVgBAKARQAEAHACAOQADANAAARQAAASgDAMQgCANgEAHQgGAIgHADQgIAFgKAAQgJgBgEgDQgHgEgGgHIAAAAIAAA1gAgIg5QgDACgBAGQgEALAAAUQAAAUAEAKQACALAKAAQAKAAAEgLQADgKAAgUQAAgUgDgLQgCgGgEgCQgDgDgFAAQgEAAgEADg"
      );
    this.shape_33.setTransform(33.9, 74.2);

    this.shape_34 = new cjs.Shape();
    this.shape_34.graphics
      .f("#000000")
      .s()
      .p(
        "AgWBBQgJgDgGgGQgFgEgCgIQgCgIAAgJIAAgFIAeAAIAAAFQAAAIAEAFQAEAFAIABQAGAAAFgFQAFgEAAgHQAAgHgEgDIgIgEIgWgJQgNgFgHgHQgEgEgCgFQgBgGAAgHQAAgIACgHQADgHAGgFQAGgGAIgDQAKgDAKAAQAMAAAIADQAIACAGAEQAKAKAAASIAAAFIgdAAQAAgKgEgFQgDgEgIAAQgEgBgFAEQgFAEAAAGQAAAGADADQADAEAIADIATAHQAPAEAHAHQAGAIAAAQQAAAKgDAHQgEAIgGAFQgHAFgIACQgJACgKAAQgNAAgJgCg"
      );
    this.shape_34.setTransform(22.4, 72.3);

    this.shape_35 = new cjs.Shape();
    this.shape_35.graphics
      .f("#000000")
      .s()
      .p(
        "AgOBBQgHgBgFgDQgKgGgFgJQgEgLgCgMIgBgXQAAgMACgMQACgMAFgJQAFgKAKgFQALgGAOAAQAPAAAJAFQAKAEAEAJQAGAIACANQACALAAAQIAAAFIhAAAIAAALIABALIADAJIAFAHQADACADABQAIAAAEgHQADgFACgNIAeAAQgBAWgLAMQgLAMgYAAQgHAAgHgCgAgGgpQgDACgCAEIgDAIIgBAJIAAAFIAgAAIgBgMQgBgHgCgDQgBgFgDgCQgDgBgFAAQgDgBgEADg"
      );
    this.shape_35.setTransform(11.5, 72.3);

    this.shape_36 = new cjs.Shape();
    this.shape_36.graphics
      .f("#000000")
      .s()
      .p(
        "AghBCIAAh/IAhAAIAAARQADgJAHgGQAHgGALAAIACAAIAEABIAAAfIgFAAIgGAAIgJABQgEABgDADQgEADgCAEQgBAFAAAGIAABMg"
      );
    this.shape_36.setTransform(2.5, 72.1);

    this.shape_37 = new cjs.Shape();
    this.shape_37.graphics
      .f("#000000")
      .s()
      .p(
        "AgXA/QgKgDgGgJQgGgJgCgNQgDgMAAgRQABgPADgMQACgNAGgJQAGgIAKgFQAKgEAMAAQAOgBALAFQAJAEAGAJQAGAIACANQACANABAPQgBARgCAMQgDANgGAIQgGAJgJAEQgLAEgNAAIgCAAQgNAAgIgEgAgIgoQgDADgDAGIgCAOIAAARIAAASIACAOQADAHADADQAEADAEAAQAEAAAEgCQAEgDACgFQACgIABgbIAAgTQgBgJgCgFQgFgKgJgBQgEAAgEAEg"
      );
    this.shape_37.setTransform(216.1, 43.9);

    this.shape_38 = new cjs.Shape();
    this.shape_38.graphics
      .f("#000000")
      .s()
      .p(
        "AANBTIgOgBQgHgCgDgEQgDgEgBgGIgBgQIAAhIIgRAAIAAgXIARAAIAAglIAfAAIAAAlIATAAIAAAXIgTAAIAABEQAAAHACADQADAEAGAAIAFAAIADgBIAAAXIgLABg"
      );
    this.shape_38.setTransform(206.9, 42.1);

    this.shape_39 = new cjs.Shape();
    this.shape_39.graphics
      .f("#000000")
      .s()
      .p(
        "AgWBAQgJgCgGgGQgFgEgCgIQgCgIAAgJIAAgFIAeAAIAAAFQAAAIAEAFQAEAFAIABQAGAAAFgFQAFgEAAgHQAAgHgEgDIgIgEIgWgJQgNgFgHgHQgEgEgCgGQgBgFAAgHQAAgIACgHQADgHAGgFQAGgGAIgDQAKgDAKAAQAMAAAIADQAIACAGAEQAKAKAAASIAAAFIgdAAQAAgKgEgFQgDgEgIAAQgEgBgFAEQgFAEAAAGQAAAGADADQADAEAIACIATAIQAPAEAHAHQAGAIAAAQQAAAKgDAHQgEAIgGAFQgHAFgIACQgJACgKAAQgNAAgJgDg"
      );
    this.shape_39.setTransform(192.2, 43.9);

    this.shape_40 = new cjs.Shape();
    this.shape_40.graphics
      .f("#000000")
      .s()
      .p(
        "AgdA/QgFgCgFgEQgIgIgBgUIAAhdIAiAAIAABXQgBAKAEAEQADAEAIAAQAGAAAFgGQAFgFgBgLIAAhTIAiAAIAAB/IghAAIAAgPQgFAJgIAEQgHAEgKAAQgIAAgHgCg"
      );
    this.shape_40.setTransform(180.9, 44.1);

    this.shape_41 = new cjs.Shape();
    this.shape_41.graphics
      .f("#000000")
      .s()
      .p(
        "AgWBAQgJgCgGgGQgFgEgCgIQgCgIAAgJIAAgFIAeAAIAAAFQAAAIAEAFQAEAFAIABQAGAAAFgFQAFgEAAgHQAAgHgEgDIgIgEIgWgJQgNgFgHgHQgEgEgCgGQgBgFAAgHQAAgIACgHQADgHAGgFQAGgGAIgDQAKgDAKAAQAMAAAIADQAIACAGAEQAKAKAAASIAAAFIgdAAQAAgKgEgFQgDgEgIAAQgEgBgFAEQgFAEAAAGQAAAGADADQADAEAIACIATAIQAPAEAHAHQAGAIAAAQQAAAKgDAHQgEAIgGAFQgHAFgIACQgJACgKAAQgNAAgJgDg"
      );
    this.shape_41.setTransform(163.8, 43.9);

    this.shape_42 = new cjs.Shape();
    this.shape_42.graphics
      .f("#000000")
      .s()
      .p(
        "AARBAIgRhaIgPBaIgmAAIgch/IAhAAIAPBZIABAAIAQhZIAiAAIARBZIAAAAIAQhZIAfAAIgbB/g"
      );
    this.shape_42.setTransform(150, 44);

    this.shape_43 = new cjs.Shape();
    this.shape_43.graphics
      .f("#000000")
      .s()
      .p(
        "AgXA/QgKgDgGgJQgFgJgDgNQgDgMABgRQAAgPACgMQADgNAGgJQAGgIAKgFQAJgEANAAQAPgBAJAFQAKAEAGAJQAGAIACANQADANgBAPQABARgDAMQgDANgGAIQgGAJgKAEQgKAEgNAAIgCAAQgNAAgIgEgAgIgoQgDADgCAGIgCAOIgBARIABASIACAOQACAHADADQADADAFAAQAFAAADgCQADgDADgFQACgIABgbIgBgTQgBgJgBgFQgEgKgKgBQgFAAgDAEg"
      );
    this.shape_43.setTransform(135.9, 43.9);

    this.shape_44 = new cjs.Shape();
    this.shape_44.graphics
      .f("#000000")
      .s()
      .p("AgPBVIAAipIAfAAIAACpg");
    this.shape_44.setTransform(127.2, 41.8);

    this.shape_45 = new cjs.Shape();
    this.shape_45.graphics
      .f("#000000")
      .s()
      .p("AgPBVIAAipIAfAAIAACpg");
    this.shape_45.setTransform(121.5, 41.8);

    this.shape_46 = new cjs.Shape();
    this.shape_46.graphics
      .f("#000000")
      .s()
      .p(
        "AggBAQgGgDgEgFQgDgFgCgHQgCgGAAgHQAAgKACgGQACgGAEgFQAEgEAGgCQAGgDAJgCIARgGQAHgCADgDQADgDAAgGQAAgIgDgEQgEgFgHABQgHgBgEAFQgEAEAAAJIAAADIgdAAIAAgDQAAgLADgIQAEgHAGgFQAGgFAIgCQAJgCAIAAQAOAAAJADQAJADAFAFQAFAFACAIQACAHAAAJIAABBIABAPIADAKIggAAIgCgGIgCgHIAAAAQgGAKgIADQgFADgMAAQgJAAgGgDgAAHAEIgHADQgIACgEAEQgFAGAAAJQAAAGADAGQADAFAHABIAFgCQADgBADgDQADgCACgDQACgFAAgEIAAgag"
      );
    this.shape_46.setTransform(112.8, 43.9);

    this.shape_47 = new cjs.Shape();
    this.shape_47.graphics
      .f("#000000")
      .s()
      .p(
        "AgOBBQgHgBgFgDQgKgGgFgJQgEgLgCgMIgBgXQAAgMACgMQACgMAFgJQAGgKAKgFQAKgGAPAAQAOAAAJAFQAJAEAGAJQAFAIACANQACALAAAQIAAAFIg/AAIAAALIAAALIADAJIAFAHQADACADABQAIAAAEgHQAEgFABgNIAeAAQgBAWgLANQgLALgYAAQgHAAgHgCgAgGgpQgDACgCAEIgDAIIAAAJIAAAFIAfAAIgBgMQAAgHgDgDQgBgFgEgCQgDgBgEAAQgEgBgDADg"
      );
    this.shape_47.setTransform(95.8, 43.9);

    this.shape_48 = new cjs.Shape();
    this.shape_48.graphics
      .f("#000000")
      .s()
      .p(
        "AgUBAQgJgDgHgHQgFgJgEgNQgDgNAAgTQAAgSAEgNQAEgNAHgIQAHgIAJgDQAKgDAJAAQAMAAAJAEQAJADAFAHQAGAGADAKQADAIAAAMIggAAIAAgJIgCgIQgCgEgDgDQgDgCgFAAQgDAAgFADQgEACgBAGQgCAFgBAJIgBARIABAUQABAJACAGQACAFADADQADACAEABQAIgBAFgHQADgHAAgQIAgAAQAAANgDAKQgDAJgGAHQgLANgaAAQgLAAgJgDg"
      );
    this.shape_48.setTransform(84.7, 43.9);

    this.shape_49 = new cjs.Shape();
    this.shape_49.graphics
      .f("#000000")
      .s()
      .p(
        "AAQBCIAAhXQAAgKgEgEQgEgEgHAAQgQAAAAAVIAABUIghAAIAAh/IAhAAIAAAPQAFgKAIgEQAHgFALAAQAPAAAJAJQAEAEACAHQACAHAAAKIAABeg"
      );
    this.shape_49.setTransform(73.2, 43.8);

    this.shape_50 = new cjs.Shape();
    this.shape_50.graphics
      .f("#000000")
      .s()
      .p(
        "AggBAQgGgDgEgFQgDgFgCgHQgCgGAAgHQAAgKACgGQACgGAEgFQAEgEAGgCQAGgDAJgCIARgGQAHgCADgDQADgDAAgGQAAgIgDgEQgEgFgHABQgHgBgEAFQgEAEAAAJIAAADIgdAAIAAgDQAAgLADgIQAEgHAGgFQAGgFAIgCQAJgCAIAAQAOAAAJADQAJADAFAFQAFAFACAIQACAHAAAJIAABBIABAPIADAKIggAAIgCgGIgCgHIAAAAQgGAKgIADQgFADgMAAQgJAAgGgDgAAHAEIgHADQgIACgEAEQgFAGAAAJQAAAGADAGQADAFAHABIAFgCQADgBADgDQADgCACgDQACgFAAgEIAAgag"
      );
    this.shape_50.setTransform(61.3, 43.9);

    this.shape_51 = new cjs.Shape();
    this.shape_51.graphics
      .f("#000000")
      .s()
      .p("AgRBAIgih/IAjAAIARBaIARhaIAiAAIghB/g");
    this.shape_51.setTransform(50.3, 44);

    this.shape_52 = new cjs.Shape();
    this.shape_52.graphics
      .f("#000000")
      .s()
      .p(
        "AgbBSQgIgDgFgIQgJgQAAgkQAAgRACgLQADgOAEgHQAKgRAUABQAKAAAEADQAHAEAGAIIAAAAIAAg3IAhAAIAACqIggAAIAAgOQgFAKgIADQgFADgKABQgJAAgIgFgAgHgSQgEACgCAGQgDAKAAATQAAAWADAKQADALAKAAQAFAAAEgCQADgDABgGQAEgKAAgWQAAgTgEgKQgBgGgDgCQgEgDgFAAQgEAAgDADg"
      );
    this.shape_52.setTransform(38.9, 42);

    this.shape_53 = new cjs.Shape();
    this.shape_53.graphics
      .f("#000000")
      .s()
      .p(
        "AggBAQgGgDgEgFQgDgFgCgHQgCgGAAgHQAAgKACgGQACgGAEgFQAEgEAGgCQAGgDAJgCIARgGQAHgCADgDQADgDAAgGQAAgIgDgEQgEgFgHABQgHgBgEAFQgEAEAAAJIAAADIgdAAIAAgDQAAgLADgIQAEgHAGgFQAGgFAIgCQAJgCAIAAQAOAAAJADQAJADAFAFQAFAFACAIQACAHAAAJIAABBIABAPIADAKIggAAIgCgGIgCgHIAAAAQgGAKgIADQgFADgMAAQgJAAgGgDgAAHAEIgHADQgIACgEAEQgFAGAAAJQAAAGADAGQADAFAHABIAFgCQADgBADgDQADgCACgDQACgFAAgEIAAgag"
      );
    this.shape_53.setTransform(27.2, 43.9);

    this.shape_54 = new cjs.Shape();
    this.shape_54.graphics
      .f("#000000")
      .s()
      .p(
        "AAPBCIAAhXQAAgKgDgEQgDgEgIAAQgPAAAAAVIAABUIghAAIAAh/IAfAAIAAAPQAGgKAIgEQAHgFAKAAQARAAAIAJQAEAEADAHQACAHAAAKIAABeg"
      );
    this.shape_54.setTransform(9.8, 43.8);

    this.shape_55 = new cjs.Shape();
    this.shape_55.graphics
      .f("#000000")
      .s()
      .p("AgPBWIAAh/IAfAAIAAB/gAgPg5IAAgcIAfAAIAAAcg");
    this.shape_55.setTransform(0.9, 41.7);

    this.shape_56 = new cjs.Shape();
    this.shape_56.graphics
      .f("#000000")
      .s()
      .p(
        "AAPBCIAAhXQAAgKgDgEQgEgEgHAAQgPAAAAAVIAABUIgiAAIAAh/IAhAAIAAAPQAFgKAIgEQAHgFAKAAQARAAAIAJQAEAEADAHQABAHAAAKIAABeg"
      );
    this.shape_56.setTransform(258, 15.4);

    this.shape_57 = new cjs.Shape();
    this.shape_57.graphics
      .f("#000000")
      .s()
      .p(
        "AgXA/QgKgDgGgJQgFgJgDgNQgDgMAAgRQABgPADgMQACgNAGgJQAGgIAKgFQAKgEAMAAQAOgBALAFQAJAEAGAJQAGAIACANQACANABAPQgBARgCAMQgDANgGAIQgGAJgJAEQgLAEgNAAIgCAAQgNAAgIgEgAgIgoQgDADgDAGIgCAOIAAARIAAASIACAOQADAHADADQAEADAEAAQAEAAAEgCQAEgDACgFQACgIABgbIgBgTQAAgJgCgFQgFgKgJgBQgEAAgEAEg"
      );
    this.shape_57.setTransform(246.3, 15.6);

    this.shape_58 = new cjs.Shape();
    this.shape_58.graphics
      .f("#000000")
      .s()
      .p("AgPBWIAAh/IAfAAIAAB/gAgPg5IAAgcIAfAAIAAAcg");
    this.shape_58.setTransform(237.6, 13.4);

    this.shape_59 = new cjs.Shape();
    this.shape_59.graphics
      .f("#000000")
      .s()
      .p(
        "AANBTIgOgBQgHgCgDgEQgDgEgBgGIgBgQIAAhIIgRAAIAAgXIARAAIAAglIAfAAIAAAlIATAAIAAAXIgTAAIAABEQAAAHACADQADAEAGAAIAFAAIADgBIAAAXIgLABg"
      );
    this.shape_59.setTransform(231.3, 13.8);

    this.shape_60 = new cjs.Shape();
    this.shape_60.graphics
      .f("#000000")
      .s()
      .p(
        "AgUBAQgKgDgFgHQgHgJgCgNQgEgNAAgTQAAgSAEgNQAEgNAHgIQAHgHAKgEQAJgDAJAAQAMAAAJAEQAJADAFAHQAGAGADAKQADAIAAAMIggAAIAAgJIgDgIQgBgEgDgDQgDgCgFAAQgDAAgFADQgDACgCAGQgCAFgBAJIgBARIABAUQABAJACAGQABAFAEADQAEACADABQAJgBADgHQAEgHAAgQIAgAAQAAANgDAKQgDAJgGAHQgLANgaAAQgLAAgJgDg"
      );
    this.shape_60.setTransform(222.1, 15.6);

    this.shape_61 = new cjs.Shape();
    this.shape_61.graphics
      .f("#000000")
      .s()
      .p(
        "AggBAQgGgDgEgFQgDgFgCgHQgCgHAAgGQAAgKACgGQACgGAEgFQAEgEAGgCQAGgDAJgCIARgGQAHgCADgDQADgDAAgGQAAgIgDgEQgEgFgHABQgHgBgEAFQgEAEAAAJIAAADIgdAAIAAgDQAAgLADgIQAEgHAGgFQAGgFAIgCQAJgCAIAAQAOAAAJADQAJADAFAFQAFAFACAIQACAHAAAJIAABBIABAPIADAKIggAAIgCgGIgCgHIAAAAQgGAKgIADQgFADgMAAQgJAAgGgDgAAHAEIgHADQgIACgEAEQgFAGAAAJQAAAGADAGQADAFAHABIAFgCQADgBADgDQADgCACgDQACgFAAgEIAAgag"
      );
    this.shape_61.setTransform(210.7, 15.6);

    this.shape_62 = new cjs.Shape();
    this.shape_62.graphics
      .f("#000000")
      .s()
      .p(
        "AgQBXIAAhpIgRAAIAAgWIARAAIAAgPQAAgJACgGQADgGAEgDQAEgEAFgBQAHgCAHAAIASABIAAAXIgEAAIgCAAQgIAAgCACQgDADAAAFIAAAMIATAAIAAAWIgTAAIAABpg"
      );
    this.shape_62.setTransform(195.8, 13.3);

    this.shape_63 = new cjs.Shape();
    this.shape_63.graphics
      .f("#000000")
      .s()
      .p(
        "AgXA/QgKgDgGgJQgGgJgCgNQgCgMgBgRQAAgPADgMQADgNAGgJQAGgIAKgFQAJgEANAAQAPgBAJAFQAKAEAGAJQAFAIADANQACANAAAPQAAARgCAMQgDANgGAIQgGAJgKAEQgJAEgOAAIgCAAQgNAAgIgEgAgIgoQgDADgDAGIgBAOIgBARIABASIABAOQADAHADADQADADAFAAQAFAAADgCQADgDACgFQADgIACgbIgBgTQgCgJgCgFQgEgKgJgBQgFAAgDAEg"
      );
    this.shape_63.setTransform(186.5, 15.6);

    this.shape_64 = new cjs.Shape();
    this.shape_64.graphics
      .f("#000000")
      .s()
      .p(
        "AAQBCIAAhXQgBgKgDgEQgEgEgHAAQgPAAgBAVIAABUIggAAIAAh/IAfAAIAAAPQAGgKAJgEQAGgFALAAQAQAAAIAJQAEAEACAHQADAHAAAKIAABeg"
      );
    this.shape_64.setTransform(169, 15.4);

    this.shape_65 = new cjs.Shape();
    this.shape_65.graphics
      .f("#000000")
      .s()
      .p(
        "AggBAQgGgDgEgFQgDgFgCgHQgCgHAAgGQAAgKACgGQACgGAEgFQAEgEAGgCQAGgDAJgCIARgGQAHgCADgDQADgDAAgGQAAgIgDgEQgEgFgHABQgHgBgEAFQgEAEAAAJIAAADIgdAAIAAgDQAAgLADgIQAEgHAGgFQAGgFAIgCQAJgCAIAAQAOAAAJADQAJADAFAFQAFAFACAIQACAHAAAJIAABBIABAPIADAKIggAAIgCgGIgCgHIAAAAQgGAKgIADQgFADgMAAQgJAAgGgDgAAHAEIgHADQgIACgEAEQgFAGAAAJQAAAGADAGQADAFAHABIAFgCQADgBADgDQADgCACgDQACgFAAgEIAAgag"
      );
    this.shape_65.setTransform(157.1, 15.6);

    this.shape_66 = new cjs.Shape();
    this.shape_66.graphics
      .f("#000000")
      .s()
      .p("AgPBVIAAipIAfAAIAACpg");
    this.shape_66.setTransform(148.6, 13.5);

    this.shape_67 = new cjs.Shape();
    this.shape_67.graphics
      .f("#000000")
      .s()
      .p(
        "AgxBWIAAioIAgAAIAAAOQAGgJAGgFQAFgDAKAAQAVgBAJARQAFAHACAOQADANAAARQAAASgDAMQgCANgFAHQgFAIgHADQgHAFgLAAQgJgBgFgDQgGgEgGgHIAAAAIAAA1gAgHg5QgEACgCAGQgDALAAAUQAAAUADAKQAEALAJAAQALAAACgLQAEgKAAgUQAAgUgEgLQgBgGgDgCQgEgDgFAAQgEAAgDADg"
      );
    this.shape_67.setTransform(139.9, 17.5);

    this.shape_68 = new cjs.Shape();
    this.shape_68.graphics
      .f("#000000")
      .s()
      .p(
        "AggBAQgGgDgEgFQgDgFgCgHQgCgHAAgGQAAgKACgGQACgGAEgFQAEgEAGgCQAGgDAJgCIARgGQAHgCADgDQADgDAAgGQAAgIgDgEQgEgFgHABQgHgBgEAFQgEAEAAAJIAAADIgdAAIAAgDQAAgLADgIQAEgHAGgFQAGgFAIgCQAJgCAIAAQAOAAAJADQAJADAFAFQAFAFACAIQACAHAAAJIAABBIABAPIADAKIggAAIgCgGIgCgHIAAAAQgGAKgIADQgFADgMAAQgJAAgGgDgAAHAEIgHADQgIACgEAEQgFAGAAAJQAAAGADAGQADAFAHABIAFgCQADgBADgDQADgCACgDQACgFAAgEIAAgag"
      );
    this.shape_68.setTransform(122.1, 15.6);

    this.shape_69 = new cjs.Shape();
    this.shape_69.graphics
      .f("#000000")
      .s()
      .p(
        "AAPBCIAAhXQAAgKgDgEQgDgEgIAAQgPAAAAAVIAABUIghAAIAAh/IAfAAIAAAPQAGgKAJgEQAGgFAKAAQARAAAIAJQAEAEADAHQACAHAAAKIAABeg"
      );
    this.shape_69.setTransform(104.7, 15.4);

    this.shape_70 = new cjs.Shape();
    this.shape_70.graphics
      .f("#000000")
      .s()
      .p(
        "AgXA/QgKgDgGgJQgGgJgCgNQgCgMgBgRQAAgPADgMQADgNAGgJQAGgIAKgFQAJgEANAAQAPgBAKAFQAJAEAGAJQAFAIADANQACANAAAPQAAARgCAMQgDANgGAIQgGAJgKAEQgJAEgOAAIgCAAQgNAAgIgEgAgIgoQgEADgCAGIgBAOIgBARIABASIABAOQACAHAEADQADADAFAAQAEAAAEgCQADgDACgFQADgIACgbIgBgTQgCgJgCgFQgDgKgKgBQgFAAgDAEg"
      );
    this.shape_70.setTransform(93, 15.6);

    this.shape_71 = new cjs.Shape();
    this.shape_71.graphics
      .f("#000000")
      .s()
      .p(
        "AgjBOQgMgIAAgRIAgAAQAAAGAFAEIAFADIAFAAQAJAAAEgGQAEgHAAgJIAAgRIAAAAQgFAHgHAFQgGADgIAAQgTAAgKgOQgFgIgDgNQgCgKAAgSIABgXQABgMAEgJQAFgJAIgHQAEgCAFgCQAFgCAHABQAHAAAGADQAHAEAFALIAAAAIAAgPIAgAAIAAB5QAAAZgMAMQgHAGgKAEQgKACgNAAQgVAAgLgJgAgHg6QgDACgCAFIgDAOIAAAXIAAAMQABAFACAEQACAEADADQADADAEAAQAFAAADgDQAEgDACgEQACgFAAgFIABgPQAAgYgDgJQgEgKgKAAQgDAAgEADg"
      );
    this.shape_71.setTransform(75.3, 17.6);

    this.shape_72 = new cjs.Shape();
    this.shape_72.graphics
      .f("#000000")
      .s()
      .p(
        "AAQBCIAAhXQgBgKgDgEQgEgEgHAAQgQAAAAAVIAABUIggAAIAAh/IAfAAIAAAPQAGgKAJgEQAGgFALAAQAPAAAJAJQAEAEACAHQACAHAAAKIAABeg"
      );
    this.shape_72.setTransform(63.5, 15.4);

    this.shape_73 = new cjs.Shape();
    this.shape_73.graphics
      .f("#000000")
      .s()
      .p("AgPBWIAAh/IAfAAIAAB/gAgPg5IAAgcIAfAAIAAAcg");
    this.shape_73.setTransform(54.6, 13.4);

    this.shape_74 = new cjs.Shape();
    this.shape_74.graphics
      .f("#000000")
      .s()
      .p(
        "AgbBSQgHgDgFgIQgKgQAAgkQAAgRADgLQACgOAFgHQAJgRAVABQAJAAAFADQAGAEAGAIIAAAAIAAg3IAhAAIAACqIggAAIAAgOQgGAKgGADQgGADgJABQgLAAgHgFgAgIgSQgDACgBAGQgEAKAAATQAAAWAEAKQACALAKAAQAFAAADgCQAEgDACgGQADgKAAgWQAAgTgDgKQgCgGgEgCQgDgDgFAAQgEAAgEADg"
      );
    this.shape_74.setTransform(45.6, 13.6);

    this.shape_75 = new cjs.Shape();
    this.shape_75.graphics
      .f("#000000")
      .s()
      .p("AgPBWIAAh/IAfAAIAAB/gAgPg5IAAgcIAfAAIAAAcg");
    this.shape_75.setTransform(36.8, 13.4);

    this.shape_76 = new cjs.Shape();
    this.shape_76.graphics
      .f("#000000")
      .s()
      .p(
        "AgUBAQgJgDgHgHQgFgJgEgNQgDgNAAgTQAAgSAEgNQAEgNAHgIQAHgHAKgEQAJgDAKAAQALAAAJAEQAIADAHAHQAFAGADAKQADAIAAAMIggAAIgBgJIgCgIQgBgEgDgDQgDgCgEAAQgFAAgDADQgFACgBAGQgCAFgBAJIAAARIAAAUQABAJACAGQACAFADADQADACAEABQAJgBADgHQAEgHAAgQIAgAAQAAANgDAKQgDAJgFAHQgMANgaAAQgLAAgJgDg"
      );
    this.shape_76.setTransform(28.4, 15.6);

    this.shape_77 = new cjs.Shape();
    this.shape_77.graphics
      .f("#000000")
      .s()
      .p(
        "AgOBBQgHgBgFgDQgKgGgFgJQgEgLgBgMIgCgXQAAgMACgMQACgMAFgJQAGgKAJgFQALgGAOAAQAPAAAJAFQAJAEAGAJQAFAIACANQACALAAAQIAAAFIhAAAIAAALIABALIADAJIAFAHQADACADABQAIAAAEgHQADgFACgNIAeAAQgBAWgLAMQgLAMgYAAQgHAAgHgCgAgGgpQgDACgCAEIgDAIIgBAJIAAAFIAgAAIgBgMQAAgHgCgDQgCgFgEgCQgCgBgGAAQgDgBgDADg"
      );
    this.shape_77.setTransform(17.3, 15.6);

    this.shape_78 = new cjs.Shape();
    this.shape_78.graphics
      .f("#000000")
      .s()
      .p(
        "Ag3BVIAAipIA3AAQASAAALAGQAFADAEAEQAFAEADAGQAGAKACAQQACAPAAATQAAAVgDAQIgDAQQgDAHgDAFQgDAFgFAEQgEAEgGADQgGADgHABQgHABgHAAgAgUA8IAPAAQAHAAAGgDQAFgDADgIQADgHACgMIABgbIgBgaQgBgLgDgHQgDgHgGgEQgGgEgIAAIgOAAg"
      );
    this.shape_78.setTransform(5, 13.5);

    this.timeline.addTween(
      cjs.Tween.get({})
        .to({
          state: [
            { t: this.shape_78 },
            { t: this.shape_77 },
            { t: this.shape_76 },
            { t: this.shape_75 },
            { t: this.shape_74 },
            { t: this.shape_73 },
            { t: this.shape_72 },
            { t: this.shape_71 },
            { t: this.shape_70 },
            { t: this.shape_69 },
            { t: this.shape_68 },
            { t: this.shape_67 },
            { t: this.shape_66 },
            { t: this.shape_65 },
            { t: this.shape_64 },
            { t: this.shape_63 },
            { t: this.shape_62 },
            { t: this.shape_61 },
            { t: this.shape_60 },
            { t: this.shape_59 },
            { t: this.shape_58 },
            { t: this.shape_57 },
            { t: this.shape_56 },
            { t: this.shape_55 },
            { t: this.shape_54 },
            { t: this.shape_53 },
            { t: this.shape_52 },
            { t: this.shape_51 },
            { t: this.shape_50 },
            { t: this.shape_49 },
            { t: this.shape_48 },
            { t: this.shape_47 },
            { t: this.shape_46 },
            { t: this.shape_45 },
            { t: this.shape_44 },
            { t: this.shape_43 },
            { t: this.shape_42 },
            { t: this.shape_41 },
            { t: this.shape_40 },
            { t: this.shape_39 },
            { t: this.shape_38 },
            { t: this.shape_37 },
            { t: this.shape_36 },
            { t: this.shape_35 },
            { t: this.shape_34 },
            { t: this.shape_33 },
            { t: this.shape_32 },
            { t: this.shape_31 },
            { t: this.shape_30 },
            { t: this.shape_29 },
            { t: this.shape_28 },
            { t: this.shape_27 },
            { t: this.shape_26 },
            { t: this.shape_25 },
            { t: this.shape_24 },
            { t: this.shape_23 },
            { t: this.shape_22 },
            { t: this.shape_21 },
            { t: this.shape_20 },
            { t: this.shape_19 },
            { t: this.shape_18 },
            { t: this.shape_17 },
            { t: this.shape_16 },
            { t: this.shape_15 },
            { t: this.shape_14 },
            { t: this.shape_13 },
            { t: this.shape_12 },
            { t: this.shape_11 },
            { t: this.shape_10 },
            { t: this.shape_9 },
            { t: this.shape_8 },
            { t: this.shape_7 },
            { t: this.shape_6 },
            { t: this.shape_5 },
            { t: this.shape_4 },
            { t: this.shape_3 },
            { t: this.shape_2 },
            { t: this.shape_1 },
            { t: this.shape }
          ]
        })
        .wait(1)
    );
  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = new cjs.Rectangle(-4, -3, 297.8, 145.8);

  (lib.text38 = function(mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {});

    // Layer 1
    this.shape = new cjs.Shape();
    this.shape.graphics
      .f("#FFFF00")
      .s()
      .p(
        "AgwBpQgPgMAAgWIAqAAQAAAIAHAFIAHADIAHABQAMAAAGgIQAFgJAAgNIAAgWIAAAAQgHAJgKAGQgIAGgKAAQgaAAgOgUQgGgKgEgRQgDgPAAgXIACgfQABgQAGgMQAGgNAKgIQAGgEAHgCQAHgCAJAAQAJAAAIAFQAKAFAHAOIAAAAIAAgTIArAAIAAChQAAAhgRARQgIAIgOAFQgOAEgRAAQgcAAgQgMgAgKhPQgEAEgDAHQgCAHgBAMIgBAdIABARQABAGACAGQACAHAFADQAEAEAGAAQAGAAAFgEQAFgDACgHQADgGABgHIABgUQAAgggFgNQgFgNgNAAQgFAAgFADg"
      );
    this.shape.setTransform(118.4, 24.5);

    this.shape_1 = new cjs.Shape();
    this.shape_1.graphics
      .f("#FFFF00")
      .s()
      .p(
        "AAVBYIAAh1QgBgNgEgGQgEgFgKAAQgWAAAAAdIAABwIgsAAIAAiqIAqAAIAAAUIABAAQAHgNALgGQAJgGAPAAQAVAAAMAMQAFAFADAKQADAJAAANIAAB+g"
      );
    this.shape_1.setTransform(102.7, 21.6);

    this.shape_2 = new cjs.Shape();
    this.shape_2.graphics
      .f("#FFFF00")
      .s()
      .p("AgUBzIAAiqIAqAAIAACqgAgUhMIAAgmIAqAAIAAAmg");
    this.shape_2.setTransform(90.9, 18.9);

    this.shape_3 = new cjs.Shape();
    this.shape_3.graphics
      .f("#FFFF00")
      .s()
      .p(
        "AAUBYIAAh1QAAgNgEgGQgEgFgLAAQgVAAAAAdIAABwIgsAAIAAiqIAqAAIAAAUIABAAQAHgNALgGQAKgGAOAAQAVAAAMAMQAFAFADAKQADAJAAANIAAB+g"
      );
    this.shape_3.setTransform(79, 21.6);

    this.shape_4 = new cjs.Shape();
    this.shape_4.graphics
      .f("#FFFF00")
      .s()
      .p(
        "AgfBUQgNgEgIgMQgIgMgDgRQgDgQAAgXQAAgUADgRQAEgRAIgMQAIgLANgGQANgGARABQATgBANAFQAOAGAHAMQAIAMADAQQADASAAAUQAAAWgDARQgEARgIALQgIALgNAGQgNAGgSAAIgCAAQgRAAgMgGgAgLg2QgFAEgCAJQgDAHAAAMIgBAWIABAYQAAALADAJQACAHAFAFQAFAFAGgBQAGAAAFgDQAFgEACgGQAEgKABglIgBgaQgBgMgDgGQgFgOgNgBQgGABgFAEg"
      );
    this.shape_4.setTransform(63.3, 21.8);

    this.shape_5 = new cjs.Shape();
    this.shape_5.graphics
      .f("#FFFF00")
      .s()
      .p("AgUBzIAAiqIAqAAIAACqgAgUhMIAAgmIAqAAIAAAmg");
    this.shape_5.setTransform(51.9, 18.9);

    this.shape_6 = new cjs.Shape();
    this.shape_6.graphics
      .f("#FFFF00")
      .s()
      .p(
        "AgCBtQgJgCgDgFQgFgFgCgJQgBgJAAgNIAAhgIgWAAIAAgeIAWAAIAAgyIAqAAIAAAyIAaAAIAAAeIgaAAIAABbQAAAKADAEQADAFAKAAIAEgBIAGAAIAAAfIgPAAIgOABQgNAAgGgCg"
      );
    this.shape_6.setTransform(43.4, 19.4);

    this.shape_7 = new cjs.Shape();
    this.shape_7.graphics
      .f("#FFFF00")
      .s()
      .p("AgUBzIAAiqIAqAAIAACqgAgUhMIAAgmIAqAAIAAAmg");
    this.shape_7.setTransform(34.8, 18.9);

    this.shape_8 = new cjs.Shape();
    this.shape_8.graphics
      .f("#FFFF00")
      .s()
      .p(
        "AglBuQgKgFgGgLQgNgUAAgwQAAgYADgQQADgQAHgMQANgVAbABQANAAAGAEQAJAGAHAKIABAAIAAhIIAsAAIAADiIgrAAIAAgTIAAAAQgHANgKAFQgHAFgNAAQgOgBgKgFgAgKgZQgFAEgDAGQgEAPAAAaQAAAcAEAOQAFAOANAAQAGAAAGgDQAEgDACgIQAFgOAAgcQAAgagFgPQgCgGgEgEQgGgEgGAAQgGAAgEAEg"
      );
    this.shape_8.setTransform(22.7, 19.2);

    this.shape_9 = new cjs.Shape();
    this.shape_9.graphics
      .f("#FFFF00")
      .s()
      .p(
        "AAVBYIAAh1QgBgNgEgGQgEgFgKAAQgWAAAAAdIAABwIgsAAIAAiqIAqAAIAAAUIABAAQAHgNALgGQAJgGAPAAQAVAAAMAMQAFAFADAKQADAJAAANIAAB+g"
      );
    this.shape_9.setTransform(6.9, 21.6);

    this.shape_10 = new cjs.Shape();
    this.shape_10.graphics
      .f("#FFFF00")
      .s()
      .p(
        "AgfBUQgNgEgIgMQgIgMgDgRQgDgQAAgXQAAgUADgRQAEgRAIgMQAIgLANgGQANgGARABQATgBANAFQAOAGAHAMQAIAMADAQQADASAAAUQAAAWgDARQgEARgIALQgIALgNAGQgNAGgSAAIgCAAQgRAAgMgGgAgLg2QgFAEgCAJQgDAHAAAMIgBAWIABAYQAAALADAJQACAHAFAFQAFAFAGgBQAGAAAFgDQAFgEACgGQAEgKABglIgBgaQgBgMgDgGQgFgOgNgBQgGABgFAEg"
      );
    this.shape_10.setTransform(-8.8, 21.8);

    this.shape_11 = new cjs.Shape();
    this.shape_11.graphics
      .f("#FFFF00")
      .s()
      .p(
        "AgmBtQgPgIgIgPQgIgQgCgWQgCgWgBgaQABgYACgWQACgWAIgPQAIgQAPgJQAQgJAYAAQAMAAAKACQAKACAHAEQAOAIAHANQAHAMACAOIACAbIguAAQAAgZgHgLQgCgGgGgDQgFgDgHAAQgHAAgGAFQgGAFgDAKQgDAKgBARIgBAnQAAAaABAQQACAQADAJQAEAJAGADQAFADAGAAQAGAAAFgCQAFgCAEgHQAEgGADgLQABgLAAgTIAuAAQABATgDAQQgDARgIAMQgEAGgFAFQgGAFgHAEQgHADgKACQgJACgLAAQgYAAgQgJg"
      );
    this.shape_11.setTransform(-24.9, 18.9);

    this.shape_12 = new cjs.Shape();
    this.shape_12.graphics
      .f("#FFFF00")
      .s()
      .p("AgVByIAAjjIArAAIAADjg");
    this.shape_12.setTransform(-45, 19);

    this.shape_13 = new cjs.Shape();
    this.shape_13.graphics
      .f("#FFFF00")
      .s()
      .p(
        "AgrBVQgIgDgFgHQgFgIgCgJQgCgIAAgJQAAgMACgJQADgJAFgGQAFgFAJgDQAIgEALgEIAXgGQAKgDAEgEQAEgFAAgJQAAgJgFgGQgEgFgKgBQgKAAgFAHQgFAFAAALIAAAEIgoAAIAAgDQAAgQAFgJQAFgKAIgHQAIgGALgDQALgCAMAAQASgBANAEQAMAEAHAHQAGAHADAKQACAJAAAMIAABZIABATIAEAOIgqAAIgDgJIgCgJIgBAAQgIAOgKADQgIAFgQAAQgLAAgIgFgAAJAFIgJAEQgMADgFAGQgGAHAAAMQAAAKAEAHQAEAGAJAAIAHgBQAFgBAEgDQAEgEACgFQADgFAAgHIAAgig"
      );
    this.shape_13.setTransform(-56.7, 21.8);

    this.shape_14 = new cjs.Shape();
    this.shape_14.graphics
      .f("#FFFF00")
      .s()
      .p(
        "AgCBtQgJgCgDgFQgFgFgCgJQgBgJAAgNIAAhgIgXAAIAAgeIAXAAIAAgyIAqAAIAAAyIAaAAIAAAeIgaAAIAABbQAAAKADAEQADAFAJAAIAFgBIAGAAIAAAfIgPAAIgOABQgNAAgGgCg"
      );
    this.shape_14.setTransform(-68.9, 19.4);

    this.shape_15 = new cjs.Shape();
    this.shape_15.graphics
      .f("#FFFF00")
      .s()
      .p(
        "AAVBYIAAh1QAAgNgFgGQgFgFgKAAQgUAAAAAdIAABwIgtAAIAAiqIArAAIAAAUIAAAAQAHgNAMgGQAJgGAOAAQAVAAALAMQAGAFADAKQADAJAAANIAAB+g"
      );
    this.shape_15.setTransform(-81.7, 21.6);

    this.shape_16 = new cjs.Shape();
    this.shape_16.graphics
      .f("#FFFF00")
      .s()
      .p(
        "AgTBXQgKgCgGgDQgOgJgGgNQgGgNgCgQIgBgfQAAgRACgQQACgQAIgMQAHgNANgHQAOgIAUABQATAAANAFQAMAHAHALQAHAMADAPQACARAAAUIAAAHIhVAAIAAAPIABAOIAEANQACAFAEAEQAEADAFAAQALAAAFgHQAFgIACgRIAoAAQgCAegOAQQgPAQggAAQgKAAgJgDgAgJg4QgEAEgCAEIgEALIgBANIAAAHIArAAIgBgSQgBgHgDgGQgCgFgEgDQgFgCgHgBQgEABgFACg"
      );
    this.shape_16.setTransform(-97.1, 21.8);

    this.shape_17 = new cjs.Shape();
    this.shape_17.graphics
      .f("#FFFF00")
      .s()
      .p(
        "AA6ByIAAi1IAAAAIgoC1IgiAAIgpi1IgBAAIAAC1IgqAAIAAjjIBEAAIAgCgIAAAAIAgigIBFAAIAADjg"
      );
    this.shape_17.setTransform(-116.3, 19);

    this.timeline.addTween(
      cjs.Tween.get({})
        .to({
          state: [
            { t: this.shape_17 },
            { t: this.shape_16 },
            { t: this.shape_15 },
            { t: this.shape_14 },
            { t: this.shape_13 },
            { t: this.shape_12 },
            { t: this.shape_11 },
            { t: this.shape_10 },
            { t: this.shape_9 },
            { t: this.shape_8 },
            { t: this.shape_7 },
            { t: this.shape_6 },
            { t: this.shape_5 },
            { t: this.shape_4 },
            { t: this.shape_3 },
            { t: this.shape_2 },
            { t: this.shape_1 },
            { t: this.shape }
          ]
        })
        .wait(1)
    );
  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = new cjs.Rectangle(-130.1, -2.3, 285.2, 79.6);

  (lib.shape244UpOverDownHit = function(mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {});

    // Layer 1
    this.shape = new cjs.Shape();
    this.shape.graphics
      .f("#FFFFFF")
      .s()
      .p("AkrBoIAAjQIJXAAIAADQg");
    this.shape.setTransform(30, 10.5);

    this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));
  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = new cjs.Rectangle(0, 0, 60, 21);

  (lib.shape110Hit = function(mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {});

    // Layer 1
    this.shape = new cjs.Shape();
    this.shape.graphics
      .f()
      .s("#FFFFFF")
      .ss(1, 0, 0, 3)
      .p("EAosgZ/MAAAAz/MhRXAAAMAAAgz/g");
    this.shape.setTransform(252.2, 111);

    this.shape_1 = new cjs.Shape();
    this.shape_1.graphics
      .f("#990000")
      .s()
      .p("EgorAaAMAAAgz/MBRXAAAMAAAAz/g");
    this.shape_1.setTransform(252.2, 111);

    this.timeline.addTween(
      cjs.Tween.get({})
        .to({ state: [{ t: this.shape_1 }, { t: this.shape }] })
        .wait(1)
    );
  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = new cjs.Rectangle(-9.3, -56.5, 522.9, 335);

  (lib.shape107Up = function(mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {});

    // Layer 1
    this.shape = new cjs.Shape();
    this.shape.graphics
      .bf(img.image106, null, new cjs.Matrix2D(1, 0, 0, 1, -245, -73))
      .s()
      .p("EgmRALZIAA2yMBMjAAAIAAWyg");
    this.shape.setTransform(256, 93);

    this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));
  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = new cjs.Rectangle(11, 20, 490, 146);

  (lib.shape101 = function(mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {});

    // Layer 1
    this.shape = new cjs.Shape();
    this.shape.graphics
      .bf(img.image100, null, new cjs.Matrix2D(-1, 0, 0, 1, 150.5, -86.5))
      .s()
      .p("A1yNhIAA7BMArlAAAIAAbBg");
    this.shape.setTransform(139.6, 79.9);

    this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));
  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = new cjs.Rectangle(0, -6.6, 279.1, 173);

  (lib.shape96 = function(mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {});

    // Layer 1
    this.shape = new cjs.Shape();
    this.shape.graphics
      .bf(img.image95, null, new cjs.Matrix2D(-1, 0, 0, 1, 151.3, -88.1))
      .s()
      .p("A1qNxIAA7hMArVAAAIAAbhg");
    this.shape.setTransform(138.8, 81.6);

    this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));
  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = new cjs.Rectangle(0, -6.6, 277.5, 176.3);

  (lib.shape82 = function(mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {});

    // Layer 1
    this.shape = new cjs.Shape();
    this.shape.graphics
      .bf(img.image81, null, new cjs.Matrix2D(-1, 0, 0, 1, 145, -89.2))
      .s()
      .p("A2pNmIAA7LMAtSAAAIAAbLg");
    this.shape.setTransform(163, 79.5);

    this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));
  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = new cjs.Rectangle(18, -7.6, 290, 174.2);

  (lib.shape77 = function(mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {});

    // Layer 1
    this.shape = new cjs.Shape();
    this.shape.graphics
      .bf(img.image76, null, new cjs.Matrix2D(-1, 0, 0, 1, 108.5, -108.5))
      .s()
      .p("Aw8Q8MAAAgh4MAh4AAAMAAAAh4g");
    this.shape.setTransform(108.5, 108.5);

    this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));
  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = new cjs.Rectangle(0, 0, 217, 217);

  (lib.shape73 = function(mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {});

    // Layer 1
    this.shape = new cjs.Shape();
    this.shape.graphics
      .bf(img.image72, null, new cjs.Matrix2D(1, 0, 0, 1, -108.5, -108.5))
      .s()
      .p("Aw8Q8MAAAgh4MAh4AAAMAAAAh4g");
    this.shape.setTransform(108.5, 108.5);

    this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));
  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = new cjs.Rectangle(0, 0, 217, 217);

  (lib.shape60 = function(mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {});

    // Layer 2
    this.shape = new cjs.Shape();
    this.shape.graphics
      .bf(img.image57, null, new cjs.Matrix2D(1, 0, 0, 1, -108.5, -108.5))
      .s()
      .p(
        "Ak5Q8QgIgTgKgOQgWgag+gXIiJgzQhigrhdhIQgRgNgrg+IhUh7QhzingzAAIgfACIAAsMQBqhuDBjyQCIiqBriSIBOhtIN/AAQgDAPAAASQAABFAuAlQAfAYBWAcQBoAjA0AcQBdAyBCBVQAQAUAZBJQAgBgARAnQAmBUAyAsIAALlQhYAmhMCLQgYAsgqBfQggBHgMAMQg6A0hrA/Qh9BFg7AiQg+AkgqAdg"
      );
    this.shape.setTransform(-37.6, 301.1);

    this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

    // Layer 1
    this.shape_1 = new cjs.Shape();
    this.shape_1.graphics
      .bf(img.image58, null, new cjs.Matrix2D(1, 0, 0, 1, -108.5, -108.5))
      .s()
      .p(
        "AolQ8QhNhjhZhkQjrkJiFgiIAAv/IC2j9QC3kABbiKISmAAIAPAWIAJAPIBHBqQAsA+AwA8QBUBsBHBIIA0AyQBHBAA5AVIAAPMIgdgCQiQABjQFxQhEB5g4B/g"
      );
    this.shape_1.setTransform(192.1, 285.4);

    this.shape_2 = new cjs.Shape();
    this.shape_2.graphics
      .bf(img.image59, null, new cjs.Matrix2D(1, 0, 0, 1, -108.5, -104.1))
      .s()
      .p(
        "An5QRIg0gxQhHhJhUhrIhbh8IhHhpIgKgOIgOgXIi5AAIAA2jQAhA0BMAAQARAABxi0IAKgPIUXAAQBYBODQCsQDWCxBqBJIAASwIlyF9g"
      );
    this.shape_2.setTransform(344.8, 109);

    this.shape_3 = new cjs.Shape();
    this.shape_3.graphics
      .bf(img.image58, null, new cjs.Matrix2D(1, 0, 0, 1, -216.2, -215.6))
      .s()
      .p("AgHANIAFgHIAKgTIAAAag");
    this.shape_3.setTransform(758.7, 389.2);

    this.timeline.addTween(
      cjs.Tween.get({})
        .to({
          state: [{ t: this.shape_3 }, { t: this.shape_2 }, { t: this.shape_1 }]
        })
        .wait(1)
    );
  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = new cjs.Rectangle(-146.1, 4.8, 905.7, 404.8);

  (lib.shape53 = function(mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {});

    // Layer 1
    this.shape = new cjs.Shape();
    this.shape.graphics
      .bf(img.image52, null, new cjs.Matrix2D(1, 0, 0, 1, -108.5, -108.5))
      .s()
      .p("Aw8Q8MAAAgh4MAh4AAAMAAAAh4g");
    this.shape.setTransform(108.5, 108.5);

    this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));
  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = new cjs.Rectangle(0, 0, 217, 217);

  (lib.shape40 = function(mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {});

    // Layer 1
    this.shape = new cjs.Shape();
    this.shape.graphics
      .bf(img.image39, null, new cjs.Matrix2D(-1, 0, 0, 1, 108.5, -108.5))
      .s()
      .p("Aw8Q8MAAAgh4MAh4AAAMAAAAh4g");
    this.shape.setTransform(108.5, 108.5);

    this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));
  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = new cjs.Rectangle(0, 0, 217, 217);

  (lib.shape36UpOverDownHit = function(mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {});

    // Layer 1
    this.shape = new cjs.Shape();
    this.shape.graphics
      .f("#FFFFFF")
      .s()
      .p("A3QUJMAAAgoRMAuiAAAMAAAAoRg");
    this.shape.setTransform(60, -45);

    this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));
  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = new cjs.Rectangle(-89, -174, 298, 258);

  (lib.shape35 = function(mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {});

    // Layer 1
    this.shape = new cjs.Shape();
    this.shape.graphics
      .bf(img.image34, null, new cjs.Matrix2D(1, 0, 0, 1, -364.5, -575))
      .s()
      .p("EgmLAD6IAAnzMBMXAAAIAAHzg");
    this.shape.setTransform(554.4, 574);

    this.shape_1 = new cjs.Shape();
    this.shape_1.graphics
      .bf(img.image34, null, new cjs.Matrix2D(1, 0, 0, 1, -400, -276.5))
      .s()
      .p("Eg+fArNIAAgfISxAAIAAAfgEg+fApzMAAAhU/MB8+AAAMAAABTBIAAAAIAAB+g");
    this.shape_1.setTransform(400, 275.5);

    this.timeline.addTween(
      cjs.Tween.get({})
        .to({ state: [{ t: this.shape_1 }, { t: this.shape }] })
        .wait(1)
    );
  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = new cjs.Rectangle(0, -1, 800, 600);

  (lib.shape33Over = function(mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {});

    // Layer 1
    this.shape = new cjs.Shape();
    this.shape.graphics
      .f("#FF0000")
      .s()
      .p("AAHgCIDcisIAAFdgAjigCIDcisIAAFdg");
    this.shape.setTransform(15.8, 18.5);

    this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));
  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = new cjs.Rectangle(-7, 1, 45.5, 35);

  (lib.shape32Up = function(mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {});

    // Layer 1
    this.shape = new cjs.Shape();
    this.shape.graphics
      .f("#000000")
      .s()
      .p("AAHgCIDcisIAAFdgAjigCIDcisIAAFdg");
    this.shape.setTransform(15.8, 18.5);

    this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));
  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = new cjs.Rectangle(-7, 1, 45.5, 35);

  (lib.shape30Over = function(mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {});

    // Layer 1
    this.shape = new cjs.Shape();
    this.shape.graphics
      .f("#FF0000")
      .s()
      .p("AAHiuIDcCsIjcCxgAjiiuIDcCsIjcCxg");
    this.shape.setTransform(22.8, 18.5);

    this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));
  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = new cjs.Rectangle(0, 1, 45.5, 35);

  (lib.shape29Up = function(mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {});

    // Layer 1
    this.shape = new cjs.Shape();
    this.shape.graphics
      .f("#000000")
      .s()
      .p("AAHiuIDcCsIjcCxgAjiiuIDcCsIjcCxg");
    this.shape.setTransform(22.8, 18.5);

    this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));
  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = new cjs.Rectangle(0, 1, 45.5, 35);

  (lib.shape22Over = function(mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {});

    // Layer 1
    this.shape = new cjs.Shape();
    this.shape.graphics
      .f()
      .s("#FF0000")
      .ss(5, 0, 0, 3)
      .p(
        "AhqhnIAEgEQAtgtA9AAQBAAAAtAtQAtAtAAA+QAAA/gtAtQgtAthAAAQg9AAgtgtIgTgXAgiBFIh7giIAAB9"
      );
    this.shape.setTransform(19.8, 20.4);

    this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));
  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = new cjs.Rectangle(1.5, 2.5, 36.7, 36.4);

  (lib.shape21Up = function(mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {});

    // Layer 1
    this.shape = new cjs.Shape();
    this.shape.graphics
      .f()
      .s("#000000")
      .ss(5, 0, 0, 3)
      .p(
        "AhqhnIAEgEQAtgtA9AAQBAAAAtAtQAtAtAAA+QAAA/gtAtQgtAthAAAQg9AAgtgtIgTgXAgiBFIh7giIAAB9"
      );
    this.shape.setTransform(19.8, 20.4);

    this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));
  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = new cjs.Rectangle(1.5, 2.5, 36.7, 36.4);

  (lib.shape18Over = function(mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {});

    // Layer 1
    this.shape = new cjs.Shape();
    this.shape.graphics
      .f("#FF0000")
      .s()
      .p("AiAjMIECDKIkCDQg");
    this.shape.setTransform(22.4, 19.6);

    this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));
  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = new cjs.Rectangle(9.4, -1, 26, 41.2);

  (lib.shape17Up = function(mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {});

    // Layer 1
    this.shape = new cjs.Shape();
    this.shape.graphics
      .f("#000000")
      .s()
      .p("AiBjMIEDDKIkDDQg");
    this.shape.setTransform(19, 19.6);

    this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));
  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = new cjs.Rectangle(6, -1, 26, 41.2);

  (lib.shape15Over = function(mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {});

    // Layer 1
    this.shape = new cjs.Shape();
    this.shape.graphics
      .f("#FF0000")
      .s()
      .p("AA1CiIAAlCIBhAAIAAFCgAiVChIAAlCIBhAAIAAFCg");
    this.shape.setTransform(18, 19.3);

    this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));
  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = new cjs.Rectangle(3, 3, 30, 32.5);

  (lib.shape14Up = function(mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {});

    // Layer 1
    this.shape = new cjs.Shape();
    this.shape.graphics
      .f("#000000")
      .s()
      .p("AA1CiIAAlCIBhAAIAAFCgAiVChIAAlCIBiAAIAAFCg");
    this.shape.setTransform(18, 19.3);

    this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));
  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = new cjs.Rectangle(3, 3, 30, 32.5);

  (lib.shape12Hit = function(mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {});

    // Layer 1
    this.shape = new cjs.Shape();
    this.shape.graphics
      .rf(["#FFFFFF", "#FFFFFF"], [0, 1], 0, 0, 0, 0, 0, 44.9)
      .s()
      .p(
        "AkaEZQh0h0gBilQABimB0h2QB0hzCmABQCngBBzBzQB2B2AACmQAAClh2B0QhzB3inAAQimAAh0h3g"
      );
    this.shape.setTransform(40, 28);

    this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));
  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = new cjs.Rectangle(0, -12, 80, 80);

  (lib.shape8 = function(mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {});

    // Layer 1
    this.shape = new cjs.Shape();
    this.shape.graphics
      .lf(["#dcdcdc", "#dcdcdc", "#dcdcdc"], [0, 0, 1], -1.4, 0, 1.5, 0)
      .s()
      .p("AgNAMIANgXIAAAAIAOAXg");
    this.shape.setTransform(0, 1.3);

    this.shape_1 = new cjs.Shape();
    this.shape_1.graphics
      .lf(["#dcdcdc", "#dcdcdc", "#dcdcdc"], [0, 0, 1], -1.4, 0, 1.5, 0)
      .s()
      .p("AgOAPIAAgdIABAAIAcAAIAAAdg");
    this.shape_1.setTransform(0, 4);

    this.timeline.addTween(
      cjs.Tween.get({})
        .to({ state: [{ t: this.shape_1 }, { t: this.shape }] })
        .wait(1)
    );
  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = new cjs.Rectangle(-1.5, 0.1, 3, 5.5);

  (lib.shape6 = function(mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {});

    // Layer 1
    this.shape = new cjs.Shape();
    this.shape.graphics
      .f()
      .s("#333333")
      .ss(1, 0, 0, 3)
      .p("APoAyI/PAAIAAhjIfPAAg");
    this.shape.setTransform(100, 5);

    this.shape_1 = new cjs.Shape();
    this.shape_1.graphics
      .f("#C671EC")
      .s()
      .p("AvnAxIAAhiIfOAAIAABig");
    this.shape_1.setTransform(100, 5);

    this.timeline.addTween(
      cjs.Tween.get({})
        .to({ state: [{ t: this.shape_1 }, { t: this.shape }] })
        .wait(1)
    );
  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = new cjs.Rectangle(-1, -1, 202, 12);

  (lib.shape5 = function(mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {});

    // Layer 1
    this.shape = new cjs.Shape();
    this.shape.graphics
      .f()
      .s("#333333")
      .ss(1, 0, 0, 3)
      .p("APoAyI/PAAIAAhjIfPAAg");
    this.shape.setTransform(100, 5);

    this.shape_1 = new cjs.Shape();
    this.shape_1.graphics
      .lf(["#CCCCCC", "#6699CC"], [0, 1], -100, 0, 100, 0)
      .s()
      .p("AvnAxIAAhiIfOAAIAABig");
    this.shape_1.setTransform(100, 5);

    this.timeline.addTween(
      cjs.Tween.get({})
        .to({ state: [{ t: this.shape_1 }, { t: this.shape }] })
        .wait(1)
    );
  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = new cjs.Rectangle(-1, -1, 202, 12);

  (lib.sprite13Up = function(mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {});

    // Layer 1
    this.instance = new lib.shape12Hit("synched", 0);
    this.instance.parent = this;

    this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = new cjs.Rectangle(0, -12, 80, 80);

  (lib.sprite9 = function(mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {});

    // Layer 1
    this.instance = new lib.shape8("synched", 0);
    this.instance.parent = this;

    this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = new cjs.Rectangle(-1.5, 0.1, 3, 5.5);

  (lib.sprite7 = function(mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {});

    // Layer 1
    this.instance = new lib.shape6("synched", 0);
    this.instance.parent = this;

    this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = new cjs.Rectangle(-1, -1, 202, 12);

  (lib.ForwardButtonGraphic = function(mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {});

    // Layer 1
    this.instance = new lib.shape29Up("synched", 0);
    this.instance.parent = this;
    this.instance.setTransform(21.8, 19.7);

    this.instance_1 = new lib.sprite13Up();
    this.instance_1.parent = this;
    this.instance_1.setTransform(0, 12);
    this.instance_1.shadow = new cjs.Shadow("#FFFFFF", 0, 0, 5);
    this.instance_1.filters = [
      new cjs.ColorFilter(0.8515625, 0.8515625, 0.8515625, 1, 0, 0, 0, 0)
    ];
    this.instance_1.cache(-2, -14, 84, 84);

    this.timeline.addTween(
      cjs.Tween.get({})
        .to({ state: [{ t: this.instance_1 }, { t: this.instance }] })
        .wait(1)
    );
  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = new cjs.Rectangle(-6, -6, 96, 96);

  (lib.button248 = function(mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {});

    // Layer 2
    this.instance = new lib.text247UpOverDownHit("synched", 0);
    this.instance.parent = this;
    this.instance.setTransform(12.2, 5.9);

    this.timeline.addTween(
      cjs.Tween.get(this.instance)
        .wait(1)
        .to({ startPosition: 0 }, 0)
        .wait(1)
        .to({ startPosition: 0 }, 0)
        .wait(1)
        .to({ startPosition: 0 }, 0)
        .wait(1)
    );

    // Layer 1
    this.instance_1 = new lib.shape244UpOverDownHit("synched", 0);
    this.instance_1.parent = this;

    this.timeline.addTween(
      cjs.Tween.get(this.instance_1)
        .wait(1)
        .to({ startPosition: 0 }, 0)
        .wait(1)
        .to({ startPosition: 0 }, 0)
        .wait(1)
        .to({ startPosition: 0 }, 0)
        .wait(1)
    );
  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = new cjs.Rectangle(0, -1, 60, 37.2);

  (lib.button111 = function(mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {});

    // Layer 4
    this.instance = new lib.text108Up("synched", 0);
    this.instance.parent = this;
    this.instance.setTransform(-18.4, -46.6);
    this.instance._off = true;

    this.timeline.addTween(
      cjs.Tween.get(this.instance)
        .wait(2)
        .to({ _off: false }, 0)
        .wait(1)
        .to({ startPosition: 0 }, 0)
        .wait(1)
    );

    // Layer 3
    this.instance_1 = new lib.text108Up("synched", 0);
    this.instance_1.parent = this;
    this.instance_1.setTransform(-18.4, -46.6);

    this.instance_2 = new lib.shape107Up("synched", 0);
    this.instance_2.parent = this;

    this.timeline.addTween(
      cjs.Tween.get({})
        .to({ state: [{ t: this.instance_1 }] })
        .to({ state: [{ t: this.instance_1 }] }, 1)
        .to({ state: [{ t: this.instance_2 }] }, 1)
        .to({ state: [{ t: this.instance_2 }] }, 1)
        .wait(1)
    );

    // Layer 2
    this.instance_3 = new lib.shape107Up("synched", 0);
    this.instance_3.parent = this;

    this.instance_4 = new lib.text105Up("synched", 0);
    this.instance_4.parent = this;
    this.instance_4.setTransform(15.3, 210.8);

    this.timeline.addTween(
      cjs.Tween.get({})
        .to({ state: [{ t: this.instance_3 }] })
        .to({ state: [{ t: this.instance_3 }] }, 1)
        .to({ state: [{ t: this.instance_4 }] }, 1)
        .to({ state: [{ t: this.instance_4 }] }, 1)
        .wait(1)
    );

    // Layer 1
    this.instance_5 = new lib.text105Up("synched", 0);
    this.instance_5.parent = this;
    this.instance_5.setTransform(15.3, 210.8);

    this.instance_6 = new lib.text109Over("synched", 0);
    this.instance_6.parent = this;
    this.instance_6.setTransform(15.3, 210.8);

    this.instance_7 = new lib.shape110Hit("synched", 0);
    this.instance_7.parent = this;

    this.timeline.addTween(
      cjs.Tween.get({})
        .to({ state: [{ t: this.instance_5 }] })
        .to({ state: [{ t: this.instance_6 }] }, 1)
        .to({ state: [] }, 1)
        .to({ state: [{ t: this.instance_7 }] }, 1)
        .wait(1)
    );
  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = new cjs.Rectangle(3.6, -57.1, 509.6, 356.4);

  (lib.button34 = function(mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {});

    // Layer 3
    this.instance = new lib.shape32Up("synched", 0);
    this.instance.parent = this;

    this.instance_1 = new lib.shape33Over("synched", 0);
    this.instance_1.parent = this;

    this.timeline.addTween(
      cjs.Tween.get({})
        .to({ state: [{ t: this.instance }] })
        .to({ state: [{ t: this.instance_1 }] }, 1)
        .to({ state: [{ t: this.instance_1 }] }, 1)
        .to({ state: [] }, 1)
        .wait(1)
    );

    // Layer 1
    this.instance_2 = new lib.sprite13Up();
    this.instance_2.parent = this;
    this.instance_2.setTransform(-21.7, -7.6);
    this.instance_2.shadow = new cjs.Shadow("#FFFFFF", 0, 0, 5);
    this.instance_2.filters = [
      new cjs.ColorFilter(0.8515625, 0.8515625, 0.8515625, 1, 0, 0, 0, 0)
    ];
    this.instance_2.cache(-2, -14, 84, 84);

    this.instance_3 = new lib.shape12Hit("synched", 0);
    this.instance_3.parent = this;
    this.instance_3.setTransform(-21.7, -7.6);

    this.timeline.addTween(
      cjs.Tween.get({})
        .to({ state: [{ t: this.instance_2 }] })
        .to({ state: [{ t: this.instance_2 }] }, 1)
        .to({ state: [{ t: this.instance_2 }] }, 1)
        .to({ state: [{ t: this.instance_3 }] }, 1)
        .wait(1)
    );
  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = new cjs.Rectangle(-27.7, -25.6, 95, 95);

  (lib.button31 = function(mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {});

    // Layer 3
    this.instance = new lib.shape29Up("synched", 0);
    this.instance.parent = this;

    this.instance_1 = new lib.shape30Over("synched", 0);
    this.instance_1.parent = this;

    this.timeline.addTween(
      cjs.Tween.get({})
        .to({ state: [{ t: this.instance }] })
        .to({ state: [{ t: this.instance_1 }] }, 1)
        .to({ state: [{ t: this.instance_1 }] }, 1)
        .to({ state: [] }, 1)
        .wait(1)
    );

    // Layer 1
    this.instance_2 = new lib.sprite13Up();
    this.instance_2.parent = this;
    this.instance_2.setTransform(-21.7, -7.6);
    this.instance_2.shadow = new cjs.Shadow("#FFFFFF", 0, 0, 5);
    this.instance_2.filters = [
      new cjs.ColorFilter(0.8515625, 0.8515625, 0.8515625, 1, 0, 0, 0, 0)
    ];
    this.instance_2.cache(-2, -14, 84, 84);

    this.instance_3 = new lib.shape12Hit("synched", 0);
    this.instance_3.parent = this;
    this.instance_3.setTransform(-21.7, -7.6);

    this.timeline.addTween(
      cjs.Tween.get({})
        .to({ state: [{ t: this.instance_2 }] })
        .to({ state: [{ t: this.instance_2 }] }, 1)
        .to({ state: [{ t: this.instance_2 }] }, 1)
        .to({ state: [{ t: this.instance_3 }] }, 1)
        .wait(1)
    );
  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = new cjs.Rectangle(-27.7, -25.6, 95, 95);

  (lib.button23 = function(mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {});

    // Layer 3
    this.instance = new lib.shape21Up("synched", 0);
    this.instance.parent = this;

    this.instance_1 = new lib.shape22Over("synched", 0);
    this.instance_1.parent = this;

    this.timeline.addTween(
      cjs.Tween.get({})
        .to({ state: [{ t: this.instance }] })
        .to({ state: [{ t: this.instance_1 }] }, 1)
        .to({ state: [{ t: this.instance_1 }] }, 1)
        .to({ state: [] }, 1)
        .wait(1)
    );

    // Layer 1
    this.instance_2 = new lib.sprite13Up();
    this.instance_2.parent = this;
    this.instance_2.setTransform(-21.7, -7.6);
    this.instance_2.shadow = new cjs.Shadow("#FFFFFF", 0, 0, 5);
    this.instance_2.filters = [
      new cjs.ColorFilter(0.8515625, 0.8515625, 0.8515625, 1, 0, 0, 0, 0)
    ];
    this.instance_2.cache(-2, -14, 84, 84);

    this.instance_3 = new lib.shape12Hit("synched", 0);
    this.instance_3.parent = this;
    this.instance_3.setTransform(-21.7, -7.6);

    this.timeline.addTween(
      cjs.Tween.get({})
        .to({ state: [{ t: this.instance_2 }] })
        .to({ state: [{ t: this.instance_2 }] }, 1)
        .to({ state: [{ t: this.instance_2 }] }, 1)
        .to({ state: [{ t: this.instance_3 }] }, 1)
        .wait(1)
    );
  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = new cjs.Rectangle(-27.7, -25.6, 95, 95);

  (lib.button19 = function(mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {});

    // Layer 3
    this.instance = new lib.shape17Up("synched", 0);
    this.instance.parent = this;

    this.instance_1 = new lib.shape18Over("synched", 0);
    this.instance_1.parent = this;

    this.timeline.addTween(
      cjs.Tween.get({})
        .to({ state: [{ t: this.instance }] })
        .to({ state: [{ t: this.instance_1 }] }, 1)
        .to({ state: [{ t: this.instance_1 }] }, 1)
        .to({ state: [] }, 1)
        .wait(1)
    );

    // Layer 1
    this.instance_2 = new lib.sprite13Up();
    this.instance_2.parent = this;
    this.instance_2.setTransform(-21.7, -7.6);
    this.instance_2.shadow = new cjs.Shadow("#FFFFFF", 0, 0, 5);
    this.instance_2.filters = [
      new cjs.ColorFilter(0.8515625, 0.8515625, 0.8515625, 1, 0, 0, 0, 0)
    ];
    this.instance_2.cache(-2, -14, 84, 84);

    this.instance_3 = new lib.shape12Hit("synched", 0);
    this.instance_3.parent = this;
    this.instance_3.setTransform(-21.7, -7.6);

    this.timeline.addTween(
      cjs.Tween.get({})
        .to({ state: [{ t: this.instance_2 }] })
        .to({ state: [{ t: this.instance_2 }] }, 1)
        .to({ state: [{ t: this.instance_2 }] }, 1)
        .to({ state: [{ t: this.instance_3 }] }, 1)
        .wait(1)
    );
  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = new cjs.Rectangle(-27.7, -25.6, 95, 95);

  (lib.button16 = function(mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {});

    // Layer 3
    this.instance = new lib.shape14Up("synched", 0);
    this.instance.parent = this;

    this.instance_1 = new lib.shape15Over("synched", 0);
    this.instance_1.parent = this;

    this.timeline.addTween(
      cjs.Tween.get({})
        .to({ state: [{ t: this.instance }] })
        .to({ state: [{ t: this.instance_1 }] }, 1)
        .to({ state: [{ t: this.instance_1 }] }, 1)
        .to({ state: [] }, 1)
        .wait(1)
    );

    // Layer 1
    this.instance_2 = new lib.sprite13Up();
    this.instance_2.parent = this;
    this.instance_2.setTransform(-21.7, -7.6);
    this.instance_2.shadow = new cjs.Shadow("#FFFFFF", 0, 0, 5);
    this.instance_2.filters = [
      new cjs.ColorFilter(0.8515625, 0.8515625, 0.8515625, 1, 0, 0, 0, 0)
    ];
    this.instance_2.cache(-2, -14, 84, 84);

    this.instance_3 = new lib.shape12Hit("synched", 0);
    this.instance_3.parent = this;
    this.instance_3.setTransform(-21.7, -7.6);

    this.timeline.addTween(
      cjs.Tween.get({})
        .to({ state: [{ t: this.instance_2 }] })
        .to({ state: [{ t: this.instance_2 }] }, 1)
        .to({ state: [{ t: this.instance_2 }] }, 1)
        .to({ state: [{ t: this.instance_3 }] }, 1)
        .wait(1)
    );
  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = new cjs.Rectangle(-27.7, -25.6, 95, 95);

  (lib.BackButtonGraphic = function(mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {});

    // Layer 1
    this.instance = new lib.shape32Up("synched", 0);
    this.instance.parent = this;
    this.instance.setTransform(21.8, 19.7);

    this.instance_1 = new lib.sprite13Up();
    this.instance_1.parent = this;
    this.instance_1.setTransform(0, 12);
    this.instance_1.shadow = new cjs.Shadow("#FFFFFF", 0, 0, 5);
    this.instance_1.filters = [
      new cjs.ColorFilter(0.8515625, 0.8515625, 0.8515625, 1, 0, 0, 0, 0)
    ];
    this.instance_1.cache(-2, -14, 84, 84);

    this.timeline.addTween(
      cjs.Tween.get({})
        .to({ state: [{ t: this.instance_1 }, { t: this.instance }] })
        .wait(1)
    );
  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = new cjs.Rectangle(-6, -6, 96, 96);

  (lib.sprite115 = function(mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {
      zero: 0,
      one: 471,
      two: 598,
      three: 831,
      four: 1027,
      five: 1152,
      six: 1184,
      seven: 1428,
      eight: 1610,
      nine: 1729,
      ten: 2214
    });

    // timeline functions:
    this.frame_0 = function() {
      this.stop();
    };
    this.frame_2735 = function() {
      playSound("sound114");
    };
    this.frame_2775 = function() {
      this.stop();
    };

    // actions tween:
    this.timeline.addTween(
      cjs.Tween.get(this)
        .call(this.frame_0)
        .wait(2735)
        .call(this.frame_2735)
        .wait(40)
        .call(this.frame_2775)
        .wait(1)
    );

    // Layer 20
    this.instance = new lib.text55("synched", 0);
    this.instance.parent = this;
    this.instance.setTransform(-284.5, -229.5);
    this.instance.alpha = 0;
    this.instance._off = true;

    this.timeline.addTween(
      cjs.Tween.get(this.instance)
        .wait(471)
        .to({ _off: false }, 0)
        .to({ alpha: 0.859 }, 6)
        .wait(1)
        .to({ alpha: 1 }, 0)
        .to({ startPosition: 0 }, 2096)
        .to({ alpha: 0 }, 10)
        .to({ _off: true }, 1)
        .wait(191)
    );

    // Layer 19
    this.instance_1 = new lib.text92("synched", 0);
    this.instance_1.parent = this;
    this.instance_1.setTransform(-278.6, -26);
    this.instance_1.alpha = 0;
    this.instance_1._off = true;

    this.timeline.addTween(
      cjs.Tween.get(this.instance_1)
        .wait(1610)
        .to({ _off: false }, 0)
        .to({ alpha: 0.879 }, 7)
        .wait(1)
        .to({ alpha: 1 }, 0)
        .to({ startPosition: 0 }, 956)
        .to({ alpha: 0 }, 10)
        .to({ _off: true }, 1)
        .wait(191)
    );

    // Layer 18
    this.instance_2 = new lib.text97("synched", 0);
    this.instance_2.parent = this;
    this.instance_2.setTransform(-279.2, 27.5);
    this.instance_2.alpha = 0;
    this.instance_2._off = true;

    this.timeline.addTween(
      cjs.Tween.get(this.instance_2)
        .wait(1729)
        .to({ _off: false }, 0)
        .to({ alpha: 0.859 }, 6)
        .wait(1)
        .to({ alpha: 1 }, 0)
        .to({ startPosition: 0 }, 838)
        .to({ alpha: 0 }, 10)
        .to({ _off: true }, 1)
        .wait(191)
    );

    // Layer 15
    this.instance_3 = new lib.text71("synched", 0);
    this.instance_3.parent = this;
    this.instance_3.setTransform(-274.3, 115.6);
    this.instance_3.alpha = 0;
    this.instance_3._off = true;

    this.timeline.addTween(
      cjs.Tween.get(this.instance_3)
        .wait(1000)
        .to({ _off: false }, 0)
        .to({ alpha: 0.891 }, 8)
        .wait(1)
        .to({ alpha: 1 }, 0)
        .to({ _off: true }, 18)
        .wait(1749)
    );

    // Layer 14
    this.instance_4 = new lib.text70("synched", 0);
    this.instance_4.parent = this;
    this.instance_4.setTransform(-274.3, 64.1);
    this.instance_4.alpha = 0;
    this.instance_4._off = true;

    this.timeline.addTween(
      cjs.Tween.get(this.instance_4)
        .wait(974)
        .to({ _off: false }, 0)
        .to({ alpha: 0.891 }, 8)
        .wait(1)
        .to({ alpha: 1 }, 0)
        .to({ _off: true }, 44)
        .wait(1749)
    );

    // Layer 13
    this.instance_5 = new lib.text69("synched", 0);
    this.instance_5.parent = this;
    this.instance_5.setTransform(-274.3, 12.3);
    this.instance_5.alpha = 0;
    this.instance_5._off = true;

    this.instance_6 = new lib.text91("synched", 0);
    this.instance_6.parent = this;
    this.instance_6.setTransform(-274.2, -34.8);
    this.instance_6.alpha = 0;
    this.instance_6._off = true;

    this.moabButton = new lib.button111();
    this.moabButton.parent = this;
    this.moabButton.setTransform(-197.2, -151.1);
    new cjs.ButtonHelper(
      this.moabButton,
      0,
      1,
      2,
      false,
      new lib.button111(),
      3
    );

    this.timeline.addTween(
      cjs.Tween.get({})
        .to({ state: [] })
        .to({ state: [{ t: this.instance_5 }] }, 956)
        .to({ state: [{ t: this.instance_5 }] }, 7)
        .to({ state: [{ t: this.instance_5 }] }, 1)
        .to({ state: [] }, 63)
        .to({ state: [{ t: this.instance_6 }] }, 425)
        .to({ state: [{ t: this.instance_6 }] }, 9)
        .to({ state: [{ t: this.instance_6 }] }, 1)
        .to({ state: [{ t: this.instance_6 }] }, 138)
        .to({ state: [{ t: this.instance_6 }] }, 9)
        .to({ state: [] }, 1)
        .to({ state: [{ t: this.moabButton }] }, 974)
        .wait(192)
    );
    this.timeline.addTween(
      cjs.Tween.get(this.instance_5)
        .wait(956)
        .to({ _off: false }, 0)
        .to({ alpha: 0.879 }, 7)
        .wait(1)
        .to({ alpha: 1 }, 0)
        .to({ _off: true }, 63)
        .wait(1749)
    );
    this.timeline.addTween(
      cjs.Tween.get(this.instance_6)
        .wait(1452)
        .to({ _off: false }, 0)
        .to({ alpha: 0.898 }, 9)
        .wait(1)
        .to({ alpha: 1 }, 0)
        .to({ startPosition: 0 }, 138)
        .to({ alpha: 0 }, 9)
        .to({ _off: true }, 1)
        .wait(1166)
    );

    // Layer 12
    this.instance_7 = new lib.text68("synched", 0);
    this.instance_7.parent = this;
    this.instance_7.setTransform(-274.3, -37.8);
    this.instance_7.alpha = 0;
    this.instance_7._off = true;

    this.instance_8 = new lib.text88("synched", 0);
    this.instance_8.parent = this;
    this.instance_8.setTransform(-280.3, -77.4);
    this.instance_8.alpha = 0;
    this.instance_8._off = true;

    this.timeline.addTween(
      cjs.Tween.get(this.instance_7)
        .wait(923)
        .to({ _off: false }, 0)
        .to({ alpha: 0.91 }, 10)
        .wait(1)
        .to({ alpha: 1 }, 0)
        .to({ _off: true }, 93)
        .wait(1749)
    );
    this.timeline.addTween(
      cjs.Tween.get(this.instance_8)
        .wait(1262)
        .to({ _off: false }, 0)
        .to({ alpha: 0.879 }, 7)
        .wait(1)
        .to({ alpha: 1 }, 0)
        .to({ startPosition: 0 }, 1304)
        .to({ alpha: 0 }, 10)
        .to({ _off: true }, 1)
        .wait(191)
    );

    // Layer 11
    this.instance_9 = new lib.text45("synched", 0);
    this.instance_9.parent = this;
    this.instance_9.setTransform(-284.5, -229.5);
    this.instance_9.alpha = 0;

    this.instance_10 = new lib.text67("synched", 0);
    this.instance_10.parent = this;
    this.instance_10.setTransform(-274.3, -87.7);
    this.instance_10.alpha = 0;
    this.instance_10._off = true;

    this.instance_11 = new lib.text87("synched", 0);
    this.instance_11.parent = this;
    this.instance_11.setTransform(-278.6, -129.2);
    this.instance_11.alpha = 0;
    this.instance_11._off = true;

    this.timeline.addTween(
      cjs.Tween.get(this.instance_9)
        .to({ alpha: 0.879 }, 7)
        .wait(1)
        .to({ alpha: 1 }, 0)
        .to({ _off: true }, 463)
        .wait(2305)
    );
    this.timeline.addTween(
      cjs.Tween.get(this.instance_10)
        .wait(889)
        .to({ _off: false }, 0)
        .to({ alpha: 0.891 }, 8)
        .wait(1)
        .to({ alpha: 1 }, 0)
        .to({ _off: true }, 129)
        .wait(1749)
    );
    this.timeline.addTween(
      cjs.Tween.get(this.instance_11)
        .wait(1222)
        .to({ _off: false }, 0)
        .to({ alpha: 0.891 }, 8)
        .wait(1)
        .to({ alpha: 1 }, 0)
        .to({ startPosition: 0 }, 1343)
        .to({ alpha: 0 }, 10)
        .to({ _off: true }, 1)
        .wait(191)
    );

    // Layer 7
    this.instance_12 = new lib.text83("synched", 0);
    this.instance_12.parent = this;
    this.instance_12.setTransform(-274.3, -134.4);
    this.instance_12.alpha = 0;
    this.instance_12._off = true;

    this.instance_13 = new lib.shape101("synched", 0);
    this.instance_13.parent = this;
    this.instance_13.setTransform(-14.9, -224);
    this.instance_13.alpha = 0;
    this.instance_13._off = true;

    this.timeline.addTween(
      cjs.Tween.get(this.instance_12)
        .wait(1165)
        .to({ _off: false }, 0)
        .to({ alpha: 0.828 }, 5)
        .wait(1)
        .to({ alpha: 1 }, 0)
        .to({ _off: true }, 13)
        .wait(1592)
    );
    this.timeline.addTween(
      cjs.Tween.get(this.instance_13)
        .wait(2211)
        .to({ _off: false }, 0)
        .to({ alpha: 0.922 }, 11)
        .wait(1)
        .to({ alpha: 1 }, 0)
        .to({ startPosition: 0 }, 351)
        .to({ alpha: 0 }, 10)
        .to({ _off: true }, 1)
        .wait(191)
    );

    // Layer 6
    this.instance_14 = new lib.text54("synched", 0);
    this.instance_14.parent = this;
    this.instance_14.setTransform(-278.6, -180.9);
    this.instance_14.alpha = 0;
    this.instance_14._off = true;

    this.instance_15 = new lib.shape82("synched", 0);
    this.instance_15.parent = this;
    this.instance_15.setTransform(-14.9, -224);
    this.instance_15.alpha = 0;
    this.instance_15._off = true;

    this.instance_16 = new lib.shape96("synched", 0);
    this.instance_16.parent = this;
    this.instance_16.setTransform(-14.9, -224);

    this.timeline.addTween(
      cjs.Tween.get({})
        .to({ state: [] })
        .to({ state: [{ t: this.instance_14 }] }, 471)
        .to({ state: [{ t: this.instance_14 }] }, 6)
        .to({ state: [{ t: this.instance_14 }] }, 1)
        .to({ state: [] }, 353)
        .to({ state: [{ t: this.instance_15 }] }, 334)
        .to({ state: [{ t: this.instance_15 }] }, 5)
        .to({ state: [{ t: this.instance_15 }] }, 1)
        .to({ state: [{ t: this.instance_16 }] }, 558)
        .to({ state: [] }, 845)
        .wait(202)
    );
    this.timeline.addTween(
      cjs.Tween.get(this.instance_14)
        .wait(471)
        .to({ _off: false }, 0)
        .to({ alpha: 0.859 }, 6)
        .wait(1)
        .to({ alpha: 1 }, 0)
        .to({ _off: true }, 353)
        .wait(1945)
    );
    this.timeline.addTween(
      cjs.Tween.get(this.instance_15)
        .wait(1165)
        .to({ _off: false }, 0)
        .to({ alpha: 0.828 }, 5)
        .wait(1)
        .to({ alpha: 1 }, 0)
        .to({ _off: true }, 558)
        .wait(1047)
    );

    // Layer 5
    this.instance_17 = new lib.text41("synched", 0);
    this.instance_17.parent = this;
    this.instance_17.setTransform(-278.6, -180.9);
    this.instance_17.alpha = 0;

    this.instance_18 = new lib.shape60("synched", 0);
    this.instance_18.parent = this;
    this.instance_18.setTransform(-65.3, -241.3);
    this.instance_18.alpha = 0;
    this.instance_18._off = true;

    this.instance_19 = new lib.text66("synched", 0);
    this.instance_19.parent = this;
    this.instance_19.setTransform(-274.3, -139.5);
    this.instance_19.alpha = 0;
    this.instance_19._off = true;

    this.instance_20 = new lib.text78("synched", 0);
    this.instance_20.parent = this;
    this.instance_20.setTransform(-278.6, -180.9);
    this.instance_20.alpha = 0;
    this.instance_20._off = true;

    this.instance_21 = new lib.text86("synched", 0);
    this.instance_21.parent = this;
    this.instance_21.setTransform(-278.6, -180.9);
    this.instance_21.alpha = 0;
    this.instance_21._off = true;

    this.timeline.addTween(
      cjs.Tween.get(this.instance_17)
        .to({ alpha: 0.879 }, 7)
        .wait(1)
        .to({ alpha: 1 }, 0)
        .to({ _off: true }, 463)
        .wait(2305)
    );
    this.timeline.addTween(
      cjs.Tween.get(this.instance_18)
        .wait(598)
        .to({ _off: false }, 0)
        .to({ alpha: 0.879 }, 7)
        .wait(1)
        .to({ alpha: 1 }, 0)
        .to({ _off: true }, 225)
        .wait(1945)
    );
    this.timeline.addTween(
      cjs.Tween.get(this.instance_19)
        .wait(846)
        .to({ _off: false }, 0)
        .to({ alpha: 0.879 }, 7)
        .wait(1)
        .to({ alpha: 1 }, 0)
        .to({ _off: true }, 173)
        .wait(1749)
    );
    this.timeline.addTween(
      cjs.Tween.get(this.instance_20)
        .wait(1152)
        .to({ _off: false }, 0)
        .to({ alpha: 0.859 }, 6)
        .wait(1)
        .to({ alpha: 1 }, 0)
        .to({ _off: true }, 25)
        .wait(1592)
    );
    this.timeline.addTween(
      cjs.Tween.get(this.instance_21)
        .wait(1196)
        .to({ _off: false }, 0)
        .to({ alpha: 0.879 }, 7)
        .wait(1)
        .to({ alpha: 1 }, 0)
        .to({ startPosition: 0 }, 1370)
        .to({ alpha: 0.102 }, 9)
        .wait(1)
        .to({ alpha: 0 }, 0)
        .wait(192)
    );

    // Layer 4
    this.instance_22 = new lib.shape40("synched", 0);
    this.instance_22.parent = this;
    this.instance_22.setTransform(91.4, -144.7);
    this.instance_22.alpha = 0;

    this.instance_23 = new lib.shape53("synched", 0);
    this.instance_23.parent = this;
    this.instance_23.setTransform(120.7, -205.1);
    this.instance_23.alpha = 0;
    this.instance_23._off = true;

    this.instance_24 = new lib.text63("synched", 0);
    this.instance_24.parent = this;
    this.instance_24.setTransform(-278.6, -180.9);
    this.instance_24.alpha = 0;
    this.instance_24._off = true;

    this.instance_25 = new lib.shape73("synched", 0);
    this.instance_25.parent = this;
    this.instance_25.setTransform(156.9, -211.9);
    this.instance_25.alpha = 0;
    this.instance_25._off = true;

    this.instance_26 = new lib.shape77("synched", 0);
    this.instance_26.parent = this;
    this.instance_26.setTransform(147.8, -58.5);
    this.instance_26.alpha = 0;
    this.instance_26._off = true;

    this.timeline.addTween(
      cjs.Tween.get(this.instance_22)
        .to({ alpha: 0.879 }, 7)
        .wait(1)
        .to({ alpha: 1 }, 0)
        .to({ _off: true }, 463)
        .wait(2305)
    );
    this.timeline.addTween(
      cjs.Tween.get(this.instance_23)
        .wait(471)
        .to({ _off: false }, 0)
        .to({ alpha: 0.859 }, 6)
        .wait(1)
        .to({ alpha: 1 }, 0)
        .to({ _off: true }, 120)
        .wait(2178)
    );
    this.timeline.addTween(
      cjs.Tween.get(this.instance_24)
        .wait(831)
        .to({ _off: false }, 0)
        .to({ alpha: 0.879 }, 7)
        .wait(1)
        .to({ alpha: 1 }, 0)
        .to({ _off: true }, 188)
        .wait(1749)
    );
    this.timeline.addTween(
      cjs.Tween.get(this.instance_25)
        .wait(1027)
        .to({ _off: false }, 0)
        .to({ alpha: 0.879 }, 7)
        .wait(1)
        .to({ alpha: 1 }, 0)
        .to({ _off: true }, 117)
        .wait(1624)
    );
    this.timeline.addTween(
      cjs.Tween.get(this.instance_26)
        .wait(1152)
        .to({ _off: false }, 0)
        .to({ alpha: 0.859 }, 6)
        .wait(1)
        .to({ alpha: 1 }, 0)
        .to({ startPosition: 0 }, 1415)
        .to({ alpha: 0.102 }, 9)
        .wait(1)
        .to({ alpha: 0 }, 0)
        .wait(192)
    );

    // Layer 3
    this.instance_27 = new lib.text38("synched", 0);
    this.instance_27.parent = this;
    this.instance_27.setTransform(-259.5, -291);

    this.timeline.addTween(cjs.Tween.get(this.instance_27).wait(2776));

    // Layer 2
    this.instance_28 = new lib.shape36UpOverDownHit("synched", 0);
    this.instance_28.parent = this;

    this.timeline.addTween(cjs.Tween.get(this.instance_28).wait(2776));

    // Layer 1
    this.instance_29 = new lib.shape35("synched", 0);
    this.instance_29.parent = this;
    this.instance_29.setTransform(-399.9, -299.9);

    this.timeline.addTween(cjs.Tween.get(this.instance_29).wait(2776));
  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = new cjs.Rectangle(-400, -301, 800, 600);

  (lib.sprite20 = function(mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {});

    // timeline functions:
    this.frame_0 = function() {
      this.stop();
    };
    this.frame_1 = function() {
      this.stop();
    };

    // actions tween:
    this.timeline.addTween(
      cjs.Tween.get(this)
        .call(this.frame_0)
        .wait(1)
        .call(this.frame_1)
        .wait(1)
    );

    // Layer 1
    this.BTN_Pause = new lib.button16();
    this.BTN_Pause.parent = this;
    this.BTN_Pause.setTransform(-18, -19.6);
    new cjs.ButtonHelper(this.BTN_Pause, 0, 1, 2, false, new lib.button16(), 3);

    this.BTN_Play = new lib.button19();
    this.BTN_Play.parent = this;
    this.BTN_Play.setTransform(-18.1, -19.6);
    new cjs.ButtonHelper(this.BTN_Play, 0, 1, 2, false, new lib.button19(), 3);

    this.timeline.addTween(
      cjs.Tween.get({})
        .to({ state: [{ t: this.BTN_Pause }] })
        .to({ state: [{ t: this.BTN_Play }] }, 1)
        .wait(1)
    );
  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = new cjs.Rectangle(-45.8, -45.2, 95, 95);

  (lib.sprite11 = function(mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {});

    // Thumb
    this.slider = new lib.sprite9();
    this.slider.parent = this;
    this.slider.setTransform(0, 0, 3.995, 3.633);

    this.timeline.addTween(cjs.Tween.get(this.slider).wait(1));

    // Progress indicator bar
    this.sliderbar = new lib.sprite7();
    this.sliderbar.parent = this;
    this.sliderbar.setTransform(0, 0, 1, 1.4);

    this.timeline.addTween(cjs.Tween.get(this.sliderbar).wait(1));

    // Background
    this.instance = new lib.shape5("synched", 0);
    this.instance.parent = this;

    this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = new cjs.Rectangle(-6, -1, 207, 21.2);

  (lib.NiPlayController = function(mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {});

    // Backward
    this.backButton = new lib.button34();
    this.backButton.parent = this;
    this.backButton.setTransform(98, 15.9, 0.375, 0.375, 0, 0, 0, 0.1, -0.1);
    new cjs.ButtonHelper(
      this.backButton,
      0,
      1,
      2,
      false,
      new lib.button34(),
      3
    );

    this.timeline.addTween(cjs.Tween.get(this.backButton).wait(1));

    // Forward
    this.forwardButton = new lib.button31();
    this.forwardButton.parent = this;
    this.forwardButton.setTransform(136.6, 16, 0.375, 0.375, 0, 0, 0, 0.1, 0);
    new cjs.ButtonHelper(
      this.forwardButton,
      0,
      1,
      2,
      false,
      new lib.button31(),
      3
    );

    this.timeline.addTween(cjs.Tween.get(this.forwardButton).wait(1));

    // Layer 2
    this.instance = new lib.BackButtonGraphic("synched", 0);
    this.instance.parent = this;
    this.instance.setTransform(104.8, 23.6, 0.375, 0.375, 0, 0, 0, 40, 40);
    this.instance.alpha = 0.398;

    this.instance_1 = new lib.ForwardButtonGraphic("synched", 0);
    this.instance_1.parent = this;
    this.instance_1.setTransform(143.4, 23.6, 0.375, 0.375, 0, 0, 0, 40, 40);
    this.instance_1.alpha = 0.398;

    this.timeline.addTween(
      cjs.Tween.get({})
        .to({ state: [{ t: this.instance_1 }, { t: this.instance }] })
        .wait(1)
    );

    // Replay
    this.BTN_Replay = new lib.button23();
    this.BTN_Replay.parent = this;
    this.BTN_Replay.setTransform(18, 16, 0.378, 0.377);
    new cjs.ButtonHelper(
      this.BTN_Replay,
      0,
      1,
      2,
      false,
      new lib.button23(),
      3
    );

    this.timeline.addTween(cjs.Tween.get(this.BTN_Replay).wait(1));

    // Play/pause
    this.PPSwitch = new lib.sprite20();
    this.PPSwitch.parent = this;
    this.PPSwitch.setTransform(62.9, 23.4, 0.378, 0.377);

    this.timeline.addTween(cjs.Tween.get(this.PPSwitch).wait(1));

    // Progress bar
    this.Progressbar = new lib.sprite11();
    this.Progressbar.parent = this;
    this.Progressbar.setTransform(173.5, 18, 0.588, 0.63);

    this.timeline.addTween(cjs.Tween.get(this.Progressbar).wait(1));
  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = new cjs.Rectangle(3.8, 2.6, 287.6, 46.1);

  // stage content:
  (lib.MOAB_4_Canvas = function(mode, startPosition, loop) {
    if (loop == null) {
      loop = false;
    }
    this.initialize(mode, startPosition, loop, {});

    // timeline functions:
    this.frame_0 = function() {
      this.stop();

      // Constants
      const PROGRESS_BAR_MAX_WIDTH = 200;
      const MOAB_URL = "http://www.moabtraining.com/";
      const MENU_URL = "../menu/index.html";
      const VOLUME = 0.8;
      const FRAMERATE = 12;
      const FRAME_OFFSET_TOLERANCE = 3;

      // Variables
      var currentContainer;
      var progressBarThumbIsDragging = false;
      var frameLabels;
      var currentFrameLabelIndex = 0;
      var currentSoundInstance;
      var currentFrameLabelIndex = 0;
      var startDragX = 0;
      var startThumbX = 0;
      var isPlaying = false;

      // UI Elements
      const Container = this.Container;
      const playPauseContainer = this.PlayController.PPSwitch;
      const replayButton = this.PlayController.BTN_Replay;
      const progressBarThumb = this.PlayController.Progressbar.slider;
      const progressBarIndicator = this.PlayController.Progressbar.sliderbar;
      const backButton = this.PlayController.backButton;
      const forwardButton = this.PlayController.forwardButton;
      const menuButton = this.menuButton;
      const moabButton = this.Container.moabButton;

      // Disable looping
      this.loop = false;
      Container.loop = false;
      Container.visible = true;
      currentContainer = Container;

      // Record frame labels
      frameLabels = Container.labels;

      // Load sounds
      var queue = new createjs.LoadQueue();
      queue.installPlugin(createjs.Sound);
      queue.on("complete", onQueueLoadComplete, this);
      queue.loadManifest([
        { id: "sound1", src: "sounds/streamsound12.mp3" },
        { id: "sound2", src: "sounds/sound112.mp3" },
        { id: "sound3", src: "sounds/sound113.mp3" }
      ]);
      var soundData = [
        {
          low: 0,
          high: 2583,
          id: "sound1",
          src: "sounds/streamsound12.mp3",
          container: Container
        },
        {
          low: 2584,
          high: 2621,
          id: "sound2",
          src: "sounds/sound112.mp3",
          container: Container
        },
        {
          low: 2626,
          high: 2735,
          id: "sound3",
          src: "sounds/sound113.mp3",
          container: Container
        }
      ];

      // Add event listeners
      createjs.Ticker.addEventListener("tick", onTick);
      playPauseContainer.addEventListener("click", onPlayPauseClick);
      backButton.addEventListener("click", onBackButtonClick);
      forwardButton.addEventListener("click", onForwardButtonClick);
      replayButton.addEventListener("click", onReplayButtonClick);
      progressBarThumb.addEventListener("mousedown", onProgressBarThumbDown);
      menuButton.addEventListener("click", onMenuButtonClick);
      moabButton.addEventListener("click", onMoabButtonClick);

      /* Methods
		--------------------------------------------------------------------------------*/
      function playMovie(frame) {
        var frame =
          typeof frame !== "undefined" ? frame : currentContainer.currentFrame;

        frame = frame == 0 ? 1 : frame;
        isPlaying = true;

        // Play movie (sound will take care of itself)
        currentContainer.gotoAndPlay(frame);
      }

      function stopMovie() {
        // Stop movie and sound
        isPlaying = false;
        currentContainer.stop();
        currentSoundInstance.stop();
      }

      function frameHasSound(frame) {
        var frame =
          typeof frame !== "undefined" ? frame : currentContainer.currentFrame;
        var hasSound = false;

        for (var i = 0; i < soundData.length; i++) {
          if (
            soundData[i].container == currentContainer &&
            frame >= soundData[i].low &&
            frame <= soundData[i].high
          ) {
            hasSound = true;
            break;
          }
        }

        return hasSound;
      }

      /*
			The purpose here is that every frame, we check to make sure audio should be
			playing, and if so, if the correct audio is playing and at the correct position.
		
			This should automatically determine whether a new sound needs to be generated, 
			or if an eixsting sound needs to reposition to sync, or if nothing should be 
			playing at all
		*/
      function manageAudio() {
        // If a sound shouldn't be playing, just don't do anything
        if (!isPlaying || !frameHasSound()) {
          return;
        }

        // Alright, so the movie is playing and a sound should also be playing
        //  What sound should be playing and in what position?
        var soundIndex;
        var frame = currentContainer.currentFrame;
        for (var i = soundData.length - 1; i >= 0; i--) {
          if (
            soundData[i].container == currentContainer &&
            frame >= soundData[i].low &&
            frame <= soundData[i].high
          ) {
            soundIndex = i;
            break;
          }
        }

        var position = Math.round(
          ((frame - soundData[soundIndex].low) * 1000) / FRAMERATE
        );

        // Does a sound instance exist?
        if (typeof currentSoundInstance === "undefined") {
          // There is no current sound instance, need to create one and play at correct position
          currentSoundInstance = createjs.Sound.createInstance(
            soundData[soundIndex].id
          );
          currentSoundInstance.play({
            interrupt: createjs.Sound.INTERRUPT_ANY,
            offset: position
          });
        } else {
          // A sound instance exists, check if source is correct
          if (soundData[soundIndex].src != currentSoundInstance.src) {
            // Not playing the correct sound. Destroy current instance
            //  create and play new one
            currentSoundInstance.destroy();
            currentSoundInstance = createjs.Sound.createInstance(
              soundData[soundIndex].id
            );
            currentSoundInstance.play({
              interrupt: createjs.Sound.INTERRUPT_ANY,
              offset: position
            });
          } else {
            // Sound exists and source is correct, just check for correct position
            var positionDelta = Math.abs(
              position - currentSoundInstance.position
            );
            var frameOffset = (FRAMERATE * positionDelta) / 1000;

            // Test frame offset against tolerance
            if (frameOffset >= FRAME_OFFSET_TOLERANCE) {
              // Reset sound position
              currentSoundInstance.play({
                interrupt: createjs.Sound.INTERRUPT_ANY,
                offset: position
              });
            }
          }
        }
      }

      function getCurrentFrameLabelIndex() {
        var currentIndex = 0;
        for (var i = 0; i < frameLabels.length; i++) {
          if (frameLabels[i].label == currentContainer.currentLabel) {
            currentIndex = i;
            break;
          }
        }
        return currentIndex;
      }

      function gotoMenu() {
        gotoURL(MENU_URL);
      }

      function gotoURL(url) {
        window.open(url, "_self");
      }

      /* Event Handlers
		--------------------------------------------------------------------------------*/
      function onQueueLoadComplete(e) {
        // Play movie from beginning
        currentContainer.framerate = 12;
        playMovie(1);
      }

      function onTick(e) {
        // Update progress bar
        if (!progressBarThumbIsDragging) {
          var percComplete =
            currentContainer.currentFrame / currentContainer.totalFrames;
          var thumbX = percComplete * PROGRESS_BAR_MAX_WIDTH;
          progressBarThumb.x = thumbX;
          progressBarIndicator.scaleX = percComplete;
        }

        // Manage audio
        manageAudio();
      }

      function onPlayPauseClick(e) {
        // Manage play/pause based on what was clicked
        if (playPauseContainer.currentFrame == 0) {
          // Currently showing pause button, pause and show play button
          isPlaying = false;
          currentSoundInstance.paused = true;
          currentContainer.stop();
          playPauseContainer.gotoAndStop(1);
        } else {
          // Currently showing play button, play and show pause button
          isPlaying = true;
          currentSoundInstance.paused = false;
          currentContainer.play();
          playPauseContainer.gotoAndStop(0);
        }
      }

      // Back / forward
      function onBackButtonClick(e) {
        var currentIndex = getCurrentFrameLabelIndex();
        var frameDifference =
          currentContainer.currentFrame - frameLabels[currentIndex].position;

        if (frameDifference <= FRAMERATE * 2 && currentIndex > 0) {
          // Go to previous frame label section
          playMovie(frameLabels[currentIndex - 1].position);
        } else {
          // Go to beginning of current frame label section
          playMovie(frameLabels[currentIndex].position);
        }
      }

      function onForwardButtonClick(e) {
        var currentIndex = getCurrentFrameLabelIndex();

        if (currentIndex + 1 < frameLabels.length) {
          playMovie(frameLabels[currentIndex + 1].position);
        }
      }

      // Replay
      function onReplayButtonClick() {
        playMovie(1);
        playPauseContainer.gotoAndStop(0);
      }

      // Progress drag/drop selection
      function onProgressBarThumbDown(e) {
        // Record fact that thumb is dragging
        progressBarThumbIsDragging = true;
        startDragX = e.stageX;
        startThumbX = progressBarThumb.x;

        // Manage thumb listeners
        progressBarThumb.removeEventListener(
          "mousedown",
          onProgressBarThumbDown
        );
        progressBarThumb.addEventListener("pressmove", onProgressBarThumbMove);
        stage.addEventListener("pressup", onStageMouseUp);
      }

      function onProgressBarThumbMove(e) {
        // Calculate how much mouse has moved
        var deltaX = e.stageX - startDragX;

        // Calculate new thumb x
        var newThumbX = startThumbX + deltaX / 0.51;

        // Consider thumb bounds
        newThumbX = newThumbX <= 0 ? 0 : newThumbX;
        newThumbX =
          newThumbX >= PROGRESS_BAR_MAX_WIDTH
            ? PROGRESS_BAR_MAX_WIDTH
            : newThumbX;

        // Set new thumb x
        progressBarThumb.x = newThumbX;
      }

      function onStageMouseUp(e) {
        // Manage thumb listeners
        stage.removeEventListener("pressup", onStageMouseUp);
        progressBarThumb.removeEventListener(
          "pressmove",
          onProgressBarThumbMove
        );
        progressBarThumb.addEventListener("mousedown", onProgressBarThumbDown);

        // Update progress bar position
        var percWidth = progressBarThumb.x / PROGRESS_BAR_MAX_WIDTH;
        progressBarIndicator.scaleX = percWidth;

        // Update play position
        var newPlayPosition = Math.round(
          (currentContainer.totalFrames * progressBarThumb.x) /
            PROGRESS_BAR_MAX_WIDTH
        );
        playMovie(newPlayPosition);
        playPauseContainer.gotoAndStop(0);

        // Record fact that we stopped dragging
        progressBarThumbIsDragging = false;
      }

      function onMenuButtonClick(e) {
        gotoMenu();
      }

      function onMoabButtonClick(e) {
        gotoURL(MOAB_URL);
      }
    };

    // actions tween:
    this.timeline.addTween(
      cjs.Tween.get(this)
        .call(this.frame_0)
        .wait(1)
    );

    // Layer 3
    this.menuButton = new lib.button248();
    this.menuButton.parent = this;
    this.menuButton.setTransform(722.7, 13.1);
    new cjs.ButtonHelper(
      this.menuButton,
      0,
      1,
      2,
      false,
      new lib.button248(),
      3
    );

    this.timeline.addTween(cjs.Tween.get(this.menuButton).wait(1));

    // Layer 2
    this.PlayController = new lib.NiPlayController();
    this.PlayController.parent = this;
    this.PlayController.setTransform(5.8, 551.2, 0.88, 0.88);

    this.timeline.addTween(cjs.Tween.get(this.PlayController).wait(1));

    // Layer 1
    this.Container = new lib.sprite115();
    this.Container.parent = this;
    this.Container.setTransform(398.5, 301.7);

    this.timeline.addTween(cjs.Tween.get(this.Container).wait(1));
  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = new cjs.Rectangle(398.5, 300.7, 800, 600);
})(
  (lib = lib || {}),
  (images = images || {}),
  (createjs = createjs || {}),
  (ss = ss || {})
);
var lib, images, createjs, ss;
