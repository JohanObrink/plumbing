
$(function() {

  var canvas = jsPlumb.getInstance({
    PaintStyle:{ 
      lineWidth: 1, 
      strokeStyle: "#567567"
    },
    Connector: [ "Flowchart", { stub: 5, cornerRadius: 2 } ],
    Endpoint: "Blank",
    EndpointStyle: { fillStyle: "#567567"  },
    MaxConnections: 4,
    Overlays: [
        [ "PlainArrow", { location: 1,  } ],
        [ "Label", { cssClass: "label" } ]
    ]
  });

  var e1 = canvas.addEndpoint("start", { anchors: [ "BottomCenter", "TopCenter" ] })
    , e2 = canvas.addEndpoint("cmbreport", { anchors: [ "BottomCenter", "TopCenter" ] })
    , e3 = canvas.addEndpoint("end", { anchors: [ "BottomCenter", "TopCenter" ] });
  
  canvas.connect({ source:e1, target:e2 });
  canvas.connect({ source:e2, target:e3 });
});