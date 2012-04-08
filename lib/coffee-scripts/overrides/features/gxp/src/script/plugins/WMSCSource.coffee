#https://raw.github.com/opengeo/gxp/master/src/script/plugins/WMSCSource.js
gxp.plugins.WMSCSource.prototype.createLayerRecord = (config) ->
  original = gxp.plugins.WMSCSource.superclass.createLayerRecord.apply(this, arguments)
  return  unless original
  caps = undefined
  caps = @store.reader.raw.capability  if @store.reader.raw
  tileSets = (if (caps and caps.vendorSpecific) then caps.vendorSpecific.tileSets else (config.capability and config.capability.tileSets))
  layer = original.get("layer")
  if tileSets

    #<<<<<<<<<<<<<<<<<
    fields = [ name: "resolutions" , name: "minResolution" , name: "maxResolution" , name: "wgsMaxExtentArray" ]
    original.fields.each (field) ->
      fields.push field

    resolutions = {}
    minResolution = {}
    maxResolution = {}
    wgsMaxExtentArray = null

    while i < len
      tileSet = tileSets[i]
      if config.name is tileSet.layers
        srs = undefined
        for k of tileSet.srs
          srs = k
        resolutions[srs] = tileSet.resolutions
        minResolution[srs] = tileSet.resolutions[0]
        maxResolution[srs] = tileSet.resolutions[tileSet.resolutions.length - 1]
      i++
    i = 0
    len = caps.layers.length

    while i < len
      caps_layer = caps.layers[i]
      wgsMaxExtentArray = caps_layer.bbox["EPSG:4326"].bbox  if config.name is caps_layer.name
      i++

    data = Ext.applyIf(
      resolutions: resolutions
      minResolution: minResolution
      maxResolution: maxResolution
      wgsMaxExtentArray: wgsMaxExtentArray
    , original.data)
    Record = GeoExt.data.LayerRecord.create(fields)
    record = new Record(data, layer.id)
    #<<<<<<<<<<<<<<<<<

    mapProjection = @getProjection(record) or @getMapProjection()
    i = 0
    len = tileSets.length

    while i < len
      tileSet = tileSets[i]
      if tileSet.layers is layer.params.LAYERS
        tileProjection = undefined
        for srs of tileSet.srs
          tileProjection = new OpenLayers.Projection(srs)
          break
        if mapProjection.equals(tileProjection)
          bbox = tileSet.bbox[srs].bbox
          layer.projection = tileProjection
          layer.addOptions
            resolutions: tileSet.resolutions
            tileSize: new OpenLayers.Size(tileSet.width, tileSet.height)
            tileOrigin: new OpenLayers.LonLat(bbox[0], bbox[1])

          break
      i++
  else if @lazy
    tileSize = config.tileSize
    tileOrigin = config.tileOrigin
    layer.addOptions
      resolutions: config.resolutions
      tileSize: (if tileSize then new OpenLayers.Size(tileSize[0], tileSize[1]) else `undefined`)
      tileOrigin: (if tileOrigin then OpenLayers.LonLat.fromArray(tileOrigin) else `undefined`)

    layer.tileOrigin = OpenLayers.LonLat.fromArray(@target.map.maxExtent)  unless tileOrigin
  layer.params.TILED = (config.cached isnt false) and true
  record
