
describe("ViewManager", function() {
  return it('should', function() {
    var app;
    return app = new gxp.Viewer({
      proxy: "/proxy/",
      portalConfig: {
        renderTo: document.body,
        layout: "border",
        width: 650,
        height: 465,
        items: [
          {
            id: "centerpanel",
            xtype: "container",
            layout: 'fit',
            region: "center",
            items: "mymap"
          }, {
            id: "west",
            xtype: "container",
            layout: "fit",
            region: "west",
            width: 200
          }
        ],
        bbar: {
          id: "mybbar"
        }
      },
      tools: [
        {
          ptype: "gxp_layertree",
          outputConfig: {
            border: true,
            tbar: []
          },
          outputTarget: "west"
        }, {
          ptype: "gispro_reprojection",
          baseSource: 'gispro'
        }
      ],
      defaultSourceType: "gxp_wmscsource",
      sources: {
        gispro: {
          url: "/cache/service/wms"
        },
        baselayer: {
          ptype: "gxp_olsource"
        },
        google: {
          ptype: "gxp_googlesource"
        }
      },
      map: {
        id: "mymap",
        title: "Map",
        projection: "EPSG:4326",
        layers: [
          {
            source: "gispro",
            title: "ЭКО 3.1",
            name: "eko_merge",
            group: "background",
            args: [
              null, {
                alwaysInRange: true
              }
            ],
            queryable: false
          }, {
            source: "google",
            name: "TERRAIN",
            group: "background"
          }, {
            source: "baselayer",
            group: "background",
            type: "OpenLayers.Layer",
            args: [
              "Empty", {
                visibility: false
              }
            ]
          }
        ]
      }
    });
  });
});
