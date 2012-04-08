
gxp.plugins.WMSCSource.prototype.createLayerRecord = function(config) {
  var Record, bbox, caps, caps_layer, data, fields, i, k, layer, len, mapProjection, maxResolution, minResolution, original, record, resolutions, srs, tileOrigin, tileProjection, tileSet, tileSets, tileSize, wgsMaxExtentArray;
  original = gxp.plugins.WMSCSource.superclass.createLayerRecord.apply(this, arguments);
  if (!original) return;
  caps = void 0;
  if (this.store.reader.raw) caps = this.store.reader.raw.capability;
  tileSets = (caps && caps.vendorSpecific ? caps.vendorSpecific.tileSets : config.capability && config.capability.tileSets);
  layer = original.get("layer");
  if (tileSets) {
    fields = [
      {
        name: "resolutions",
        name: "minResolution",
        name: "maxResolution",
        name: "wgsMaxExtentArray"
      }
    ];
    original.fields.each(function(field) {
      return fields.push(field);
    });
    resolutions = {};
    minResolution = {};
    maxResolution = {};
    wgsMaxExtentArray = null;
    while (i < len) {
      tileSet = tileSets[i];
      if (config.name === tileSet.layers) {
        srs = void 0;
        for (k in tileSet.srs) {
          srs = k;
        }
        resolutions[srs] = tileSet.resolutions;
        minResolution[srs] = tileSet.resolutions[0];
        maxResolution[srs] = tileSet.resolutions[tileSet.resolutions.length - 1];
      }
      i++;
    }
    i = 0;
    len = caps.layers.length;
    while (i < len) {
      caps_layer = caps.layers[i];
      if (config.name === caps_layer.name) {
        wgsMaxExtentArray = caps_layer.bbox["EPSG:4326"].bbox;
      }
      i++;
    }
    data = Ext.applyIf({
      resolutions: resolutions,
      minResolution: minResolution,
      maxResolution: maxResolution,
      wgsMaxExtentArray: wgsMaxExtentArray
    }, original.data);
    Record = GeoExt.data.LayerRecord.create(fields);
    record = new Record(data, layer.id);
    mapProjection = this.getProjection(record) || this.getMapProjection();
    i = 0;
    len = tileSets.length;
    while (i < len) {
      tileSet = tileSets[i];
      if (tileSet.layers === layer.params.LAYERS) {
        tileProjection = void 0;
        for (srs in tileSet.srs) {
          tileProjection = new OpenLayers.Projection(srs);
          break;
        }
        if (mapProjection.equals(tileProjection)) {
          bbox = tileSet.bbox[srs].bbox;
          layer.projection = tileProjection;
          layer.addOptions({
            resolutions: tileSet.resolutions,
            tileSize: new OpenLayers.Size(tileSet.width, tileSet.height),
            tileOrigin: new OpenLayers.LonLat(bbox[0], bbox[1])
          });
          break;
        }
      }
      i++;
    }
  } else if (this.lazy) {
    tileSize = config.tileSize;
    tileOrigin = config.tileOrigin;
    layer.addOptions({
      resolutions: config.resolutions,
      tileSize: (tileSize ? new OpenLayers.Size(tileSize[0], tileSize[1]) : undefined),
      tileOrigin: (tileOrigin ? OpenLayers.LonLat.fromArray(tileOrigin) : undefined)
    });
    if (!tileOrigin) {
      layer.tileOrigin = OpenLayers.LonLat.fromArray(this.target.map.maxExtent);
    }
  }
  layer.params.TILED = (config.cached !== false) && true;
  return record;
};
