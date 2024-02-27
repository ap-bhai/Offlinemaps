import "./style.css";
import L from "leaflet";
import MumbaiMap from "../Maps/mumbai.pmtiles";
import IndiaMap from "../Maps/india_data.pmtiles";
import Marker_icon_2x from "./assets/Marker/marker-icon-2x.png";
import "./leaflet.1.9.4.css";
// import  protomapsL from "protomaps-themes-base";
import { leafletLayer } from "protomaps";
import { Protocol } from "pmtiles";

let config = {
  // The `pmtiles` file you extracted
  file: IndiaMap,
  // The center that should be shown on the map. [lat, lon] format
  loc: [20.5937, 78.9629],
  // loc: [19.302344, 73.055957],
  // How much to be zoomed in at the start (higher number = more zoomed in)
  zoom: 14,
};

function App() {
  const map = L.map("map");

  console.log("map", map);
  // console.log(L.tileLayer())
  map.setView(config.loc, config.zoom);

  let marker = null;
  map.on("click", (event) => {
    if (marker !== null) {
      map.removeLayer(marker);
    }
    alert("Lat, Lon : " + event.latlng.lat + ", " + event.latlng.lng);
    marker = L.marker([event.latlng.lat, event.latlng.lng], {
      icon: greenIcon,
    }).addTo(map);
  });


  // var LeafIcon = L.Icon.extend({
  //   options: {
  //     // shadowUrl: 'Marker/leaf-shadow.png',
  //     // iconSize: [38, 95],
  //     iconSize: [30, 30],
  //     // shadowSize: [50, 64],
  //     iconAnchor: [22, 94],
  //     shadowAnchor: [4, 62],
  //     popupAnchor: [-3, -76],
  //   },
  // });

  // console.log(Layers, "layers");

  var LeafIconData = L.Icon.extend({
    options: {
      // shadowUrl: 'Marker/leaf-shadow.png',
      // iconSize: [38, 95],
      iconSize: [20, 20],
      // shadowSize: [50, 64],
    },
  });

  var greenIcon = new LeafIconData({
    iconUrl: Marker_icon_2x,
  });

  L.marker([20.5937, 78.9629], { icon: greenIcon })
    .addTo(map)
    .bindPopup("<b>Hello world!</b><br />I am a popup in India")
    .openPopup();

  console.log(leafletLayer,"proto" )

  var layer = leafletLayer({
    url: config.file,
    // Not specifying paint_rules and label_rules => use the default (light).
    // Note that protomapsL.paintRules and protomapsL.labelRules create the
    // actual rules.
    //
    // Light theme
    // paint_rules: protomapsL.paintRules(protomapsL.light, ""),
    // label_rules: protomapsL.labelRules(protomapsL.light, ""),
    // Dark theme
    // paint_rules: protomapsL.paintRules(protomapsL.dark, ""),
    // label_rules: protomapsL.labelRules(protomapsL.dark, ""),
  });

  layer.addTo(map);

  return <div> </div>;
}

export default App;
