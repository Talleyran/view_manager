Ext.namespace "gxp.plugins"
gxp.plugins.ViewMenu = Ext.extend(gxp.plugins.Tool,
  ptype: "gispro_viewmenu"
  constructor: (config) ->
    @graticulOptions = config.graticulOptions
    gxp.plugins.ViewMenu.superclass.constructor.apply this, arguments

  panelText: 'View'
  panelTooltip: 'View'
  graticulText: 'Graticul'
  graticulTooltip: 'Graticul'
  projectionsGroupText: 'Projections'
  overviewMapText: 'Overview map'
  overviewMapTooltip: 'Overview map'
  rssText: 'Rss'
  rssTooltip: 'Rss'
  wrapText: 'Wrap'
  wrapTooltip: 'Wrap'

  projectionsText:
    'EPSG:900913': 'Mercator'
    'EPSG:4326': 'Geographic'
    'EPSG:102012': 'Conus'
    'EPSG:3576': 'Polar North'
    'EPSG:3976': 'Polar South'

  projections: {
    "EPSG:900913": {
      projection: "EPSG:900913"
      units: "m"
      maxResolution: 156543.03390625
      maxExtent: new OpenLayers.Bounds -20037508.34, -20037508.34, 20037508.34, 20037508.34
      resolutions: [156543.03390625, 78271.516953125, 39135.7584765625, 19567.87923828125, 9783.939619140625, 4891.9698095703125, 2445.9849047851562, 1222.9924523925781, 611.4962261962891, 305.74811309814453, 152.87405654907226, 76.43702827453613, 38.218514137268066, 19.109257068634033, 9.554628534317017, 4.777314267158508, 2.388657133579254, 1.194328566789627, 0.5971642833948135, 0.29858214169740677]
      scales: [559082565.8553153, 279541282.92765766, 139770641.46382883, 69885320.73191442, 34942660.36595721, 17471330.182978604, 8735665.091489302, 4367832.545744651, 2183916.2728723255, 1091958.1364361627, 545979.0682180814, 272989.5341090407, 136494.76705452034, 68247.38352726017, 34123.691763630086, 17061.845881815043, 8530.922940907521, 4265.461470453761, 2132.7307352268804, 1066.3653676134402]
      #restrictedExtent: new OpenLayers.Bounds -20037508.34, -20037508.34, 20037508.34, 20037508.34
    }
    "EPSG:4326": {
      projection: "EPSG:4326"
      units: "degrees"
      maxResolution: 0.703125
      maxExtent: new OpenLayers.Bounds -180, -90, 180, 90
      #resolutions: [0.703125, 0.3515625, 0.17578125, 0.087890625, 0.0439453125, 0.02197265625, 0.010986328125, 0.0054931640625, 0.00274658203125, 0.001373291015625, 0.0006866455078125, 0.00034332275390625, 0.000171661376953125, 0.0000858306884765625, 0.00004291534423828125, 0.000021457672119140625, 0.000010728836059570312, 0.000005364418029785156, 0.000002682209014892578, 0.000001341104507446289]
      #scales: [279037043.6383928, 139518521.8191964, 69759260.9095982, 34879630.4547991, 17439815.22739955, 8719907.613699775, 4359953.806849888, 2179976.903424944, 1089988.451712472, 544994.225856236, 272497.112928118, 136248.556464059, 68124.2782320295, 34062.13911601475, 17031.069558007373, 8515.534779003687, 4257.767389501843, 2128.8836947509217, 1064.4418473754608, 532.2209236877304]
      resolutions: [1.40625, 0.703125, 0.3515625, 0.17578125, 0.087890625, 0.0439453125, 0.02197265625, 0.010986328125, 0.0054931640625, 0.00274658203125, 0.001373291015625, 0.0006866455078125, 0.00034332275390625, 0.000171661376953125, 0.0000858306884765625, 0.00004291534423828125, 0.000021457672119140625, 0.000010728836059570312, 0.000005364418029785156, 0.000002682209014892578]
      scales: [5022.324140624999, 2511.1620703124995, 1255.5810351562498, 627.7905175781249, 313.89525878906244, 156.94762939453122, 78.47381469726561, 39.236907348632805, 19.618453674316402, 9.809226837158201, 4.904613418579101, 2.4523067092895503, 1.2261533546447752, 0.6130766773223876, 0.3065383386611938, 0.1532691693305969, 0.07663458466529845, 0.03831729233264922, 0.01915864616632461, 0.009579323083162306]
      #restrictedExtent: new OpenLayers.Bounds -180, -89, 180, 89
    }
    "EPSG:102012": {
      projection: "EPSG:102012"
      units: "m"
      maxResolution: 156543.03392804097
      maxExtent: new OpenLayers.Bounds -20037508.342789, -13717459.765275, 20037508.342789, 26357556.920303
      #maxExtent: new OpenLayers.Bounds -20037508.342789, -13717459.765275, 20037508.342789, 9000000.0
      resolutions: [156543.03392804097, 78271.51696402048, 39135.75848201024, 19567.87924100512, 9783.93962050256, 4891.96981025128, 2445.98490512564, 1222.99245256282, 611.49622628141, 305.748113140705, 152.8740565703525, 76.43702828517625, 38.21851414258813, 19.109257071294063, 9.554628535647032, 4.777314267823516, 2.388657133911758, 1.194328566955879, 0.5971642834779395, 0.29858214173896974]
      scales: [559082565.9331403, 279541282.96657014, 139770641.48328507, 69885320.74164253, 34942660.37082127, 17471330.185410634, 8735665.092705317, 4367832.546352658, 2183916.273176329, 1091958.1365881646, 545979.0682940823, 272989.53414704115, 136494.76707352058, 68247.38353676029, 34123.691768380144, 17061.845884190072, 8530.922942095036, 4265.461471047518, 2132.730735523759, 1066.3653677618795]
      #restrictedExtent: new OpenLayers.Bounds -20037508.342789, -13717459.765275, 20037508.342789, 26357556.920303
    }
    "EPSG:3576": {
      projection: "EPSG:3576"
      units: "m"
      maxResolution: 41137.82427412457
      maxExtent: new OpenLayers.Bounds -5133549.5676076, -5397733.4465683, 5397733.4465683, 5133549.5676076
      resolutions: [41137.82427412457, 20568.912137062285, 10284.456068531143, 5142.228034265571, 2571.1140171327856, 1285.5570085663928, 642.7785042831964, 321.3892521415982, 160.6946260707991, 80.34731303539955, 40.173656517699776, 20.086828258849888, 10.043414129424944, 5.021707064712472, 2.510853532356236, 1.255426766178118, 0.627713383089059, 0.3138566915445295, 0.15692834577226475, 0.07846417288613237]
      scales: [146920880.31624883, 73460440.15812442, 36730220.07906221, 18365110.039531104, 9182555.019765552, 4591277.509882776, 2295638.754941388, 1147819.377470694, 573909.688735347, 286954.8443676735, 143477.42218383675, 71738.71109191838, 35869.35554595919, 17934.677772979594, 8967.338886489797, 4483.6694432448985, 2241.8347216224493, 1120.9173608112246, 560.4586804056123, 280.22934020280616]
      #restrictedExtent: new OpenLayers.Bounds -5133549.5676076, -5397733.4465683, 5397733.4465683, 5133549.5676076
    }
    "EPSG:3976": {
      projection: "EPSG:3976"
      units: "m"
      maxResolution: 96875.0
      maxExtent: new OpenLayers.Bounds -12400000, -12400000, 12400000, 12400000
      resolutions: [96875, 48437.5, 24218.75, 12109.375, 6054.6875, 3027.34375, 1513.671875, 756.8359375, 378.41796875, 189.208984375, 94.6044921875, 47.30224609375, 23.651123046875, 11.8255615234375, 5.91278076171875, 2.956390380859375, 1.4781951904296875, 0.7390975952148438, 0.3695487976074219, 0.18477439880371094]
      scales: [345982329.68749994, 172991164.84374997, 86495582.42187499, 43247791.21093749, 21623895.605468746, 10811947.802734373, 5405973.901367187, 2702986.9506835933, 1351493.4753417966, 675746.7376708983, 337873.36883544916, 168936.68441772458, 84468.34220886229, 42234.171104431145, 21117.085552215573, 10558.542776107786, 5279.271388053893, 2639.6356940269466, 1319.8178470134733, 659.9089235067366]
      #restrictedExtent: new OpenLayers.Bounds -12400000, -12400000, 12400000, 12400000
    }
  }

  allowWrapDateLine: {
    "EPSG:900913": true
    "EPSG:4326": true
    "EPSG:102012": false
    "EPSG:3576": false
    "EPSG:3976": false
  }

  ovLayer: []

  maxRatio: 50

  minRatio: 10

  wrapDateLine: false

  realDateLine: false

  baseRec: null

  init: ()->
    gxp.plugins.ViewMenu.superclass.init.apply this, arguments
    @target.mapPanel.layers.on 'add', @reprojectOnLoad, this
    @target.mapPanel.on 'projectionchanged', =>
      if @allowWrapDateLine[@target.map.projection]
        Ext.getCmp('gisproViewWrapCheckBox').enable()
      else
        Ext.getCmp('gisproViewWrapCheckBox').disable()

  reprojectOnLoad: ->
    @target.mapPanel.layers.each (rec)=>
      if rec.get('source') == 'baselayer' && rec.getLayer().map? # && rec.getLayer().visibility
        @target.mapPanel.layers.removeListener 'add', @reprojectOnLoad, this
        @target.mapPanel.map.setLayerIndex(rec.getLayer(),0)
        @baseRec = rec
        @reprojectMap @target.map.projection, true
        @target.mapPanel.layers.on 'add', @reprojectOnAddLayer, this
        #TODO fix hack!
        @target.mapPanel.map.events.on 'changebaselayer': (e)=>
          if e.layer != rec.getLayer()
            @target.mapPanel.map.setLayerIndex(rec.getLayer(),0)


  reprojectOnAddLayer: (store,recs)->
    for rec in recs
      @reprojectLayerRecord(@target.map.projection, rec)

  reprojectMap: (projection, bounds)->
    @target.mapPanel.fireEvent("beforeprojectionchanged", projection)

    old_projection = @target.map.projection
    @target.map.projection = projection
    map = @target.mapPanel.map

    if @projections[projection].units == @projections[old_projection].units
      resolution = map.getResolution()
    else
      if @projections[projection].units == 'm'
        resolution = map.getResolution() * 111000
      else
        resolution = map.getResolution() / 111000

    center = map.center
    options = @projections[projection]
    map.setOptions options
    map.setOptions { restrictedExtent: new OpenLayers.Bounds options.maxExtent.left*2, options.maxExtent.bottom*2, options.maxExtent.right*2, options.maxExtent.top*2 }

    #reproject records
    @target.mapPanel.layers.each (rec,i)=>
      @reprojectLayerRecord(projection, rec)

    map.zoomToExtent options.maxExtent  #TODO hack: need better way
    if @ov?
      @ov.setProjection options

    @setWrapDateLine(@allowWrapDateLine[projection] && @wrapDateLine, false)

    if bounds
      if @target.map.zoom?
        map.zoomTo @target.map.zoom
        delete @target.map.zoom
      else
        map.zoomTo map.getZoomForResolution(resolution, true)

      if @target.map.center?
        if @target.map.center.CLASS_NAME && @target.map.center.CLASS_NAME=="OpenLayers.LonLat"
          map.setCenter @target.map.center
        else
          lonlat = new OpenLayers.LonLat @target.map.center[0],@target.map.center[1]
          map.setCenter lonlat
        delete @target.map.center
      else
        center.transform(new OpenLayers.Projection(old_projection),new OpenLayers.Projection(projection))
        map.setCenter center
    else
      map.zoomToExtent options.maxExtent

    @target.mapPanel.fireEvent("projectionchanged", projection)


  reprojectLayerRecord: (projection, rec)->
    source = @target.layerSources[ rec.get('source') ]
    layer = rec.getLayer()
    options = @projections[projection]

    if source?
      source.projection = projection
      if source.ptype == 'gxp_olsource'
        #rec.getLayer().isBaseLayer = true
        @reprojectLayer layer, options

      else if source.ptype == 'gxp_wmscsource'
        wgsMaxExtent = new OpenLayers.Bounds.fromArray( rec.get('wgsMaxExtentArray') )
        maxExtent = null
        #console.log(Math.abs(@projections["EPSG:4326"].maxExtent.left - wgsMaxExtent.left))
        #console.log(Math.abs(@projections["EPSG:4326"].maxExtent.right - wgsMaxExtent.right))
        #console.log(Math.abs(@projections["EPSG:4326"].maxExtent.top - wgsMaxExtent.top))
        #console.log(Math.abs(@projections["EPSG:4326"].maxExtent.bottom - wgsMaxExtent.bottom))
        buffer = 20
        if Math.abs(@projections["EPSG:4326"].maxExtent.left - wgsMaxExtent.left)<buffer && Math.abs(@projections["EPSG:4326"].maxExtent.right - wgsMaxExtent.right)<buffer && Math.abs(@projections["EPSG:4326"].maxExtent.top - wgsMaxExtent.top)<buffer && Math.abs(@projections["EPSG:4326"].maxExtent.bottom - wgsMaxExtent.bottom)<buffer
          maxExtent = @projections[projection].maxExtent
        else
          if projection == "EPSG:4326"
            maxExtent = wgsMaxExtent
          else
            maxExtent = wgsMaxExtent.transform(new OpenLayers.Projection("EPSG:4326"),new OpenLayers.Projection(projection))

        #console.log(
          #rec.getLayer().params.LAYERS,
          #rec.get('resolutions')[projection],
          #rec.get('maxResolution')[projection],
          #rec.get('minResolution')[projection],
          #rec.get('maxExtent')[projection]
        #)

        @reprojectLayer layer, {
          projection: projection
          #
          #resolutions: if rec.get('resolutions')[projection]? then rec.get('resolutions')[projection] else options.resolutions
          #maxResolution: if rec.get('maxResolution')[projection]? then rec.get('maxResolution')[projection] else options.maxResolution
          #minResolution: if rec.get('minResolution')[projection]? then rec.get('minResolution')[projection] else options.minResolution
          #maxExtent: if rec.get('maxExtent')[projection]? then rec.get('maxExtent')[projection] else options.maxExtent
          #restrictedExtent: if rec.get('maxExtent')[projection]? then rec.get('maxExtent')[projection] else options.maxExtent
          #
          units: options.units
          resolutions: rec.get('resolutions')[projection]
          maxResolution: rec.get('maxResolution')[projection]
          minResolution: rec.get('minResolution')[projection]
          maxExtent: maxExtent #rec.get('maxExtent')[projection]
          restrictedExtent: maxExtent # rec.get('maxExtent')[projection]
        }

      else if ( source.ptype == 'gxp_osmsource' || source.ptype == 'gxp_googlesource' )
        if rec.getLayer().visibility && projection != 'EPSG:900913'
          @baseRec.getLayer().setVisibility true

      else
        @reprojectLayer layer, options


  reprojectLayer: (layer, options)->
    if layer.getTileOrigin?
      layer.tileOrigin = null
    layer.addOptions options, true
    layer.addOptions {restrictedExtent: options.maxExtent}, true
    if layer.visibility
      layer.redraw()


  setWrapDateLine: (v, makeExtent)->
    #TODO filter by source
    allowWrapDateLine = @allowWrapDateLine[@target.map.projection]
    if ( v != @realDateLine )
      map = @target.mapPanel.map
      extent = map.getExtent()
      for layer in map.layers
        if layer.maxExtent.left <= map.maxExtent.left && layer.maxExtent.bottom <= map.maxExtent.bottom && layer.maxExtent.top >= map.maxExtent.top && layer.maxExtent.right >= map.maxExtent.right
          layer.addOptions {wrapDateLine: v, displayOutsideMaxExtent: v}, true
          layer.redraw()

      if !v && makeExtent && @realDateLine
        map.zoomToExtent extent

      @realDateLine = v
      @target.mapPanel.fireEvent("wrapdatelinechanged", @realDateLine)

    if allowWrapDateLine
      @wrapDateLine = v

  genProjectionOptions: ->
    boxLabel: @projectionsText[k], inputValue: k, name: 'proj', id: "gispro#{k}ProjectionRadio", checked: @target.map.projection == k for k,v of @projections

  addActions: ->
    graticul = new OpenLayers.Control.Graticule(@graticulOptions)
    @target.mapPanel.map.addControl(graticul)
    graticul.deactivate()

    @ov = new GeoExt.OverviewMap {
      title: @overviewMapText
      controlOptions:
        maximized: true
        mapOptions: @projections[@target.map.projection]
        maxRatio: @maxRatio
        minRatio: @minRatio
      map: @target.mapPanel.map
      closeAction: 'hide'
      layer: @ovLayer
      listeners:
        hide: ->
          Ext.getCmp('gisproViewMenuOverviewCheckBox').setChecked(false, true)
    }

    @menu = new Ext.Button(
      text: @panelText
      menu: new Ext.menu.Menu(
        items:[
          {
            checked: false
            text: @graticulText
            tooltip: @graticulTooltip
            listeners:
              checkchange: (item, checked)=>
                if checked
                  graticul.activate()
                else
                  graticul.deactivate()
          }
          {
            id: 'gisproViewMenuOverviewCheckBox'
            checked: false
            text: @overviewMapText
            tooltip: @overviewMapTooltip
            listeners:
              checkchange: (item, checked)=>
                if checked
                  @ov.show()
                else
                  @ov.hide()

          }
          {
            id: 'gisproViewWrapCheckBox'
            checked: false
            text: @wrapText
            tooltip: @wrapTooltip
            listeners:
              checkchange: (item, checked)=>
                if checked
                  @setWrapDateLine(true)
                else
                  @setWrapDateLine(false)

          }
          {
            checked: false
            text: @rssText
            tooltip: @rssTooltip
            #TODO WTF?!
            handler: ->
              rssVar.show = rssVar.show ^ 1
          }
          {
            text: @projectionsGroupText
            menu: 
              items:[
                xtype: 'radiogroup'
                fieldLabel: 'Single Column'
                itemCls: 'x-check-group-alt'
                columns: 1
                style: 'margin-left: 6px'
                items: [@genProjectionOptions()]
                listeners:
                  change: (radiogroup, radio)=>
                    @reprojectMap(radio.inputValue, true)
              ]
          }
        ]
      )
    )

    gxp.plugins.ViewMenu.superclass.addActions.apply this, [ @menu ]

)
Ext.preg gxp.plugins.ViewMenu::ptype, gxp.plugins.ViewMenu
