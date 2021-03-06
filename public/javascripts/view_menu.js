
Ext.namespace("gxp.plugins");

gxp.plugins.ViewMenu = Ext.extend(gxp.plugins.Tool, {
  ptype: "gispro_viewmenu",
  constructor: function(config) {
    this.graticulOptions = config.graticulOptions;
    gxp.plugins.ViewMenu.superclass.constructor.apply(this, arguments);
    if (gxp.plugins.WMSCSource != null) {
      gxp.plugins.WMSCSource.prototype.viewMangerUsed = true;
    }
    if (gxp.plugins.WMSSource != null) {
      return gxp.plugins.WMSSource.prototype.viewMangerUsed = true;
    }
  },
  panelText: 'View',
  panelTooltip: 'View',
  graticulText: 'Graticul',
  graticulTooltip: 'Graticul',
  projectionsGroupText: 'Projections',
  overviewMapText: 'Overview map',
  overviewMapTooltip: 'Overview map',
  rssText: 'Rss',
  rssTooltip: 'Rss',
  wrapText: 'Wrap',
  wrapTooltip: 'Wrap',
  projectionsText: {
    'EPSG:900913': 'Mercator',
    'EPSG:4326': 'Geographic',
    'EPSG:102012': 'Conus',
    'EPSG:3576': 'Polar North',
    'EPSG:3976': 'Polar South'
  },
  projections: {
    "EPSG:900913": {
      projection: "EPSG:900913",
      units: "m",
      maxResolution: 156543.03390625,
      maxExtent: new OpenLayers.Bounds(-20037508.34, -20037508.34, 20037508.34, 20037508.34),
      resolutions: [156543.03390625, 78271.516953125, 39135.7584765625, 19567.87923828125, 9783.939619140625, 4891.9698095703125, 2445.9849047851562, 1222.9924523925781, 611.4962261962891, 305.74811309814453, 152.87405654907226, 76.43702827453613, 38.218514137268066, 19.109257068634033, 9.554628534317017, 4.777314267158508, 2.388657133579254, 1.194328566789627, 0.5971642833948135, 0.29858214169740677],
      scales: [559082565.8553153, 279541282.92765766, 139770641.46382883, 69885320.73191442, 34942660.36595721, 17471330.182978604, 8735665.091489302, 4367832.545744651, 2183916.2728723255, 1091958.1364361627, 545979.0682180814, 272989.5341090407, 136494.76705452034, 68247.38352726017, 34123.691763630086, 17061.845881815043, 8530.922940907521, 4265.461470453761, 2132.7307352268804, 1066.3653676134402]
    },
    "EPSG:4326": {
      projection: "EPSG:4326",
      units: "degrees",
      maxResolution: 0.703125,
      maxExtent: new OpenLayers.Bounds(-180, -90, 180, 90),
      resolutions: [1.40625, 0.703125, 0.3515625, 0.17578125, 0.087890625, 0.0439453125, 0.02197265625, 0.010986328125, 0.0054931640625, 0.00274658203125, 0.001373291015625, 0.0006866455078125, 0.00034332275390625, 0.000171661376953125, 0.0000858306884765625, 0.00004291534423828125, 0.000021457672119140625, 0.000010728836059570312, 0.000005364418029785156, 0.000002682209014892578],
      scales: [5022.324140624999, 2511.1620703124995, 1255.5810351562498, 627.7905175781249, 313.89525878906244, 156.94762939453122, 78.47381469726561, 39.236907348632805, 19.618453674316402, 9.809226837158201, 4.904613418579101, 2.4523067092895503, 1.2261533546447752, 0.6130766773223876, 0.3065383386611938, 0.1532691693305969, 0.07663458466529845, 0.03831729233264922, 0.01915864616632461, 0.009579323083162306]
    },
    "EPSG:102012": {
      projection: "EPSG:102012",
      units: "m",
      maxResolution: 156543.03392804097,
      maxExtent: new OpenLayers.Bounds(-20037508.342789, -13717459.765275, 20037508.342789, 26357556.920303),
      resolutions: [156543.03392804097, 78271.51696402048, 39135.75848201024, 19567.87924100512, 9783.93962050256, 4891.96981025128, 2445.98490512564, 1222.99245256282, 611.49622628141, 305.748113140705, 152.8740565703525, 76.43702828517625, 38.21851414258813, 19.109257071294063, 9.554628535647032, 4.777314267823516, 2.388657133911758, 1.194328566955879, 0.5971642834779395, 0.29858214173896974],
      scales: [559082565.9331403, 279541282.96657014, 139770641.48328507, 69885320.74164253, 34942660.37082127, 17471330.185410634, 8735665.092705317, 4367832.546352658, 2183916.273176329, 1091958.1365881646, 545979.0682940823, 272989.53414704115, 136494.76707352058, 68247.38353676029, 34123.691768380144, 17061.845884190072, 8530.922942095036, 4265.461471047518, 2132.730735523759, 1066.3653677618795]
    },
    "EPSG:3576": {
      projection: "EPSG:3576",
      units: "m",
      maxResolution: 41137.82427412457,
      maxExtent: new OpenLayers.Bounds(-5133549.5676076, -5397733.4465683, 5397733.4465683, 5133549.5676076),
      resolutions: [41137.82427412457, 20568.912137062285, 10284.456068531143, 5142.228034265571, 2571.1140171327856, 1285.5570085663928, 642.7785042831964, 321.3892521415982, 160.6946260707991, 80.34731303539955, 40.173656517699776, 20.086828258849888, 10.043414129424944, 5.021707064712472, 2.510853532356236, 1.255426766178118, 0.627713383089059, 0.3138566915445295, 0.15692834577226475, 0.07846417288613237],
      scales: [146920880.31624883, 73460440.15812442, 36730220.07906221, 18365110.039531104, 9182555.019765552, 4591277.509882776, 2295638.754941388, 1147819.377470694, 573909.688735347, 286954.8443676735, 143477.42218383675, 71738.71109191838, 35869.35554595919, 17934.677772979594, 8967.338886489797, 4483.6694432448985, 2241.8347216224493, 1120.9173608112246, 560.4586804056123, 280.22934020280616]
    },
    "EPSG:3976": {
      projection: "EPSG:3976",
      units: "m",
      maxResolution: 96875.0,
      maxExtent: new OpenLayers.Bounds(-12400000, -12400000, 12400000, 12400000),
      resolutions: [96875, 48437.5, 24218.75, 12109.375, 6054.6875, 3027.34375, 1513.671875, 756.8359375, 378.41796875, 189.208984375, 94.6044921875, 47.30224609375, 23.651123046875, 11.8255615234375, 5.91278076171875, 2.956390380859375, 1.4781951904296875, 0.7390975952148438, 0.3695487976074219, 0.18477439880371094],
      scales: [345982329.68749994, 172991164.84374997, 86495582.42187499, 43247791.21093749, 21623895.605468746, 10811947.802734373, 5405973.901367187, 2702986.9506835933, 1351493.4753417966, 675746.7376708983, 337873.36883544916, 168936.68441772458, 84468.34220886229, 42234.171104431145, 21117.085552215573, 10558.542776107786, 5279.271388053893, 2639.6356940269466, 1319.8178470134733, 659.9089235067366]
    }
  },
  allowWrapDateLine: {
    "EPSG:900913": true,
    "EPSG:4326": true,
    "EPSG:102012": false,
    "EPSG:3576": false,
    "EPSG:3976": false
  },
  ovLayer: [],
  maxRatio: 50,
  minRatio: 10,
  wrapDateLine: false,
  realDateLine: false,
  baseRec: null,
  old_projection: null,
  init: function() {
    gxp.plugins.ViewMenu.superclass.init.apply(this, arguments);
    this.target.mapPanel.layers.on('add', this.reprojectOnLoad, this, {
      single: true
    });
    return this.target.mapPanel.map.events.register('addlayer', this, this.reprojectOnAddLayer);
  },
  reprojectOnLoad: function() {
    var _this = this;
    this.reprojectMap(this.target.map.projection, true);
    return this.target.mapPanel.on('projectionchanged', function() {
      if (_this.allowWrapDateLine[_this.target.map.projection]) {
        return Ext.getCmp('gisproViewWrapCheckBox').enable();
      } else {
        return Ext.getCmp('gisproViewWrapCheckBox').disable();
      }
    });
  },
  reprojectOnAddLayer: function(obj) {
    var layer, rec,
      _this = this;
    layer = obj.layer;
    rec = this.target.mapPanel.layers.getByLayer(obj.layer);
    if (rec != null) {
      if (rec.get('source') === 'baselayer') {
        this.target.mapPanel.map.setLayerIndex(layer, 0);
        this.baseRec = rec;
        this.target.mapPanel.map.events.on({
          'changebaselayer': function(e) {
            if (e.layer !== rec.getLayer()) {
              return _this.target.mapPanel.map.setLayerIndex(rec.getLayer(), 0);
            }
          }
        });
      } else {
        this.reprojectLayerRecord(this.target.map.projection, rec);
      }
    } else {
      this.reprojectLayer(layer, this.projections[this.target.map.projection]);
    }
    return this.setLayerWrapDateLine(this.wrapDateLine, layer);
  },
  reprojectMap: function(projection, bounds) {
    var center, lonlat, map, options, resolution,
      _this = this;
    this.target.mapPanel.fireEvent("beforeprojectionchanged", projection);
    this.old_projection = this.target.map.projection;
    this.target.map.projection = projection;
    map = this.target.mapPanel.map;
    if (this.projections[projection].units === this.projections[this.old_projection].units) {
      resolution = map.getResolution();
    } else {
      if (this.projections[projection].units === 'm') {
        resolution = map.getResolution() * 111000;
      } else {
        resolution = map.getResolution() / 111000;
      }
    }
    center = map.center;
    options = this.projections[projection];
    map.setOptions(options);
    map.setOptions({
      restrictedExtent: new OpenLayers.Bounds(options.maxExtent.left * 2, options.maxExtent.bottom * 2, options.maxExtent.right * 2, options.maxExtent.top * 2)
    });
    this.target.mapPanel.layers.each(function(rec, i) {
      return _this.reprojectLayerRecord(projection, rec);
    });
    map.zoomToExtent(options.maxExtent);
    if (this.ov != null) this.ov.setProjection(options);
    this.setWrapDateLine(this.allowWrapDateLine[projection] && this.wrapDateLine, false);
    if (bounds) {
      if (this.target.map.zoom != null) {
        map.zoomTo(this.target.map.zoom);
        delete this.target.map.zoom;
      } else {
        map.zoomTo(map.getZoomForResolution(resolution, true));
      }
      if (this.target.map.center != null) {
        if (this.target.map.center.CLASS_NAME && this.target.map.center.CLASS_NAME === "OpenLayers.LonLat") {
          map.setCenter(this.target.map.center);
        } else {
          lonlat = new OpenLayers.LonLat(this.target.map.center[0], this.target.map.center[1]);
          map.setCenter(lonlat);
        }
        delete this.target.map.center;
      } else {
        center.transform(new OpenLayers.Projection(this.old_projection), new OpenLayers.Projection(projection));
        map.setCenter(center);
      }
    } else {
      map.zoomToExtent(options.maxExtent);
    }
    return this.target.mapPanel.fireEvent("projectionchanged", projection);
  },
  fixllbbox: function(projection, bboxArray) {
    var bbox, buffer, maxExtent;
    bbox = new OpenLayers.Bounds.fromArray(bboxArray);
    maxExtent = new OpenLayers.Bounds();
    buffer = 20;
    if (Math.abs(this.projections["EPSG:4326"].maxExtent.left - bbox.left) < buffer && Math.abs(this.projections["EPSG:4326"].maxExtent.right - bbox.right) < buffer && Math.abs(this.projections["EPSG:4326"].maxExtent.top - bbox.top) < buffer && Math.abs(this.projections["EPSG:4326"].maxExtent.bottom - bbox.bottom) < buffer) {
      maxExtent.extend(this.projections[projection].maxExtent);
    } else {
      maxExtent.extend(bbox);
      if (projection !== "EPSG:4326") {
        maxExtent.transform(new OpenLayers.Projection("EPSG:4326"), new OpenLayers.Projection(projection));
      }
      if (Math.abs(this.projections["EPSG:4326"].maxExtent.left - bbox.left) < buffer) {
        maxExtent.left = this.projections[projection].maxExtent.left;
      }
      if (Math.abs(this.projections["EPSG:4326"].maxExtent.right - bbox.right) < buffer) {
        maxExtent.right = this.projections[projection].maxExtent.right;
      }
      if (Math.abs(this.projections["EPSG:4326"].maxExtent.top - bbox.top) < buffer) {
        maxExtent.top = this.projections[projection].maxExtent.top;
      }
      if (Math.abs(this.projections["EPSG:4326"].maxExtent.bottom - bbox.bottom) < buffer) {
        maxExtent.bottom = this.projections[projection].maxExtent.bottom;
      }
    }
    return maxExtent;
  },
  reprojectLayerRecord: function(projection, rec) {
    var layer, maxExtent, options, restrictedExtent, source;
    source = this.target.layerSources[rec.get('source')];
    layer = rec.getLayer();
    options = this.projections[projection];
    if (source != null) {
      source.projection = projection;
      maxExtent = null;
      restrictedExtent = null;
      if (rec.get('llbbox')) {
        maxExtent = this.fixllbbox(projection, rec.get('llbbox'));
        restrictedExtent = rec.get('rbbox') ? this.fixllbbox(projection, rec.get('rbbox')) : maxExtent;
      }
      if (source.ptype === 'gxp_olsource') {
        return this.reprojectLayer(layer, options);
      } else if (source.ptype === 'gxp_wmscsource') {
        return this.reprojectLayer(layer, {
          projection: projection,
          units: options.units,
          resolutions: rec.get('resolutions')[projection] || options.resolutions,
          maxResolution: rec.get('maxResolution')[projection] || options.maxResolution,
          minResolution: rec.get('minResolution')[projection] || options.minResolution,
          maxExtent: maxExtent || options.maxExtent,
          restrictedExtent: restrictedExtent || options.maxExtent
        });
      } else if (source.ptype === 'gxp_wmssource' || source.ptype === 'gispro_arcgis') {
        return this.reprojectLayer(layer, {
          projection: projection,
          units: options.units,
          resolutions: options.resolutions,
          maxResolution: options.maxResolution,
          minResolution: options.minResolution,
          maxExtent: maxExtent || options.maxExtent,
          restrictedExtent: restrictedExtent || options.maxExtent
        });
      } else if (source.ptype === 'gxp_osmsource' || source.ptype === 'gxp_googlesource') {
        if (rec.getLayer().visibility && projection !== 'EPSG:900913') {
          return this.baseRec.getLayer().setVisibility(true);
        }
      }
    } else {
      return this.reprojectLayer(layer, options);
    }
  },
  reprojectLayer: function(layer, options) {
    var feature, _i, _len, _ref;
    if ((layer.features != null) && (layer.features.length != null)) {
      _ref = layer.features;
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        feature = _ref[_i];
        if (feature.geometry != null) {
          feature.geometry.transform(new OpenLayers.Projection(this.old_projection), new OpenLayers.Projection(options.projection));
        }
      }
    }
    if (layer.getTileOrigin != null) layer.tileOrigin = null;
    layer.addOptions(options, true);
    if (!options.restrictedExtent) {
      layer.addOptions({
        restrictedExtent: options.maxExtent
      }, true);
    }
    if (layer.visibility) return layer.redraw();
  },
  setWrapDateLine: function(v, makeExtent) {
    var allowWrapDateLine, extent, layer, map, _i, _len, _ref;
    allowWrapDateLine = this.allowWrapDateLine[this.target.map.projection];
    if (v !== this.realDateLine) {
      map = this.target.mapPanel.map;
      extent = map.getExtent();
      _ref = map.layers;
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        layer = _ref[_i];
        this.setLayerWrapDateLine(v, layer);
      }
      if (!v && makeExtent && this.realDateLine) map.zoomToExtent(extent);
      this.realDateLine = v;
      this.target.mapPanel.fireEvent("wrapdatelinechanged", this.realDateLine);
    }
    if (allowWrapDateLine) return this.wrapDateLine = v;
  },
  setLayerWrapDateLine: function(v, layer) {
    var map;
    map = this.target.mapPanel.map;
    if (layer.maxExtent.left <= map.maxExtent.left && layer.maxExtent.right >= map.maxExtent.right) {
      layer.addOptions({
        wrapDateLine: v,
        displayOutsideMaxExtent: v
      }, true);
      return layer.redraw();
    }
  },
  genProjectionOptions: function() {
    var k, v, _ref, _results;
    _ref = this.projections;
    _results = [];
    for (k in _ref) {
      v = _ref[k];
      _results.push({
        boxLabel: this.projectionsText[k],
        inputValue: k,
        name: 'proj',
        id: "gispro" + k + "ProjectionRadio",
        checked: this.target.map.projection === k
      });
    }
    return _results;
  },
  addActions: function() {
    var graticul,
      _this = this;
    graticul = new OpenLayers.Control.Graticule(this.graticulOptions);
    this.target.mapPanel.map.addControl(graticul);
    graticul.deactivate();
    this.ov = new GeoExt.OverviewMap({
      title: this.overviewMapText,
      controlOptions: {
        maximized: true,
        mapOptions: this.projections[this.target.map.projection],
        maxRatio: this.maxRatio,
        minRatio: this.minRatio
      },
      map: this.target.mapPanel.map,
      closeAction: 'hide',
      layer: this.ovLayer,
      listeners: {
        hide: function() {
          return Ext.getCmp('gisproViewMenuOverviewCheckBox').setChecked(false, true);
        }
      }
    });
    this.menu = new Ext.Button({
      text: this.panelText,
      menu: new Ext.menu.Menu({
        items: [
          {
            checked: false,
            text: this.graticulText,
            tooltip: this.graticulTooltip,
            listeners: {
              checkchange: function(item, checked) {
                if (checked) {
                  return graticul.activate();
                } else {
                  return graticul.deactivate();
                }
              }
            }
          }, {
            id: 'gisproViewMenuOverviewCheckBox',
            checked: false,
            text: this.overviewMapText,
            tooltip: this.overviewMapTooltip,
            listeners: {
              checkchange: function(item, checked) {
                if (checked) {
                  return _this.ov.show();
                } else {
                  return _this.ov.hide();
                }
              }
            }
          }, {
            id: 'gisproViewWrapCheckBox',
            checked: false,
            text: this.wrapText,
            tooltip: this.wrapTooltip,
            listeners: {
              checkchange: function(item, checked) {
                if (checked) {
                  return _this.setWrapDateLine(true);
                } else {
                  return _this.setWrapDateLine(false);
                }
              }
            }
          }, {
            text: this.projectionsGroupText,
            menu: {
              items: [
                {
                  xtype: 'radiogroup',
                  fieldLabel: 'Single Column',
                  itemCls: 'x-check-group-alt',
                  columns: 1,
                  style: 'margin-left: 6px',
                  items: [this.genProjectionOptions()],
                  listeners: {
                    change: function(radiogroup, radio) {
                      return _this.reprojectMap(radio.inputValue, true);
                    }
                  }
                }
              ]
            }
          }
        ]
      })
    });
    return gxp.plugins.ViewMenu.superclass.addActions.apply(this, [this.menu]);
  }
});

Ext.preg(gxp.plugins.ViewMenu.prototype.ptype, gxp.plugins.ViewMenu);
