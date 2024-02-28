import "./style.css";
import L from "leaflet";
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

// mumbai data start
// let config = {
//   // The `pmtiles` file you extracted
//   file: "mumbai.pmtiles",
//   // The center that should be shown on the map. [lat, lon] format
//   loc: [19.0760, 72.8777],
//   // loc: [19.302344, 73.055957],
//   // How much to be zoomed in at the start (higher number = more zoomed in)
//   zoom: 14,
// };
// mumbai data end

// srilanka data start
// let config = {
//   // The `pmtiles` file you extracted
//   file: "srilanka.pmtiles",
//   // The center that should be shown on the map. [lat, lon] format
//   loc: [7.8731, 80.7718],
//   // How much to be zoomed in at the start (higher number = more zoomed in)
//   zoom: 8,
// };
// srilanka data end

// bahrain data start
// let config = {
//   // The `pmtiles` file you extracted
//   file: "bahrain.pmtiles",
//   // The center that should be shown on the map. [lat, lon] format
//   loc: [26.0414, 50.5581],
//   // How much to be zoomed in at the start (higher number = more zoomed in)
//   zoom: 8,
// };
// bahrain data end

// dubai data start
// let config = {
//   // The `pmtiles` file you extracted
//   file: "dubai.pmtiles",
//   // The center that should be shown on the map. [lat, lon] format
//   loc: [25.0962, 55.2111],
//   // How much to be zoomed in at the start (higher number = more zoomed in)
//   zoom: 8,
// };
// dubai data end

// japan data start
// let config = {
//   // The `pmtiles` file you extracted
//   file: "japan_southkorea.pmtiles",
//   // The center that should be shown on the map. [lat, lon] format
//   loc: [25.0962, 55.2111],
//   // How much to be zoomed in at the start (higher number = more zoomed in)
//   zoom: 8,
// };
// japan data end

// south korea data start
// let config = {
//   // The `pmtiles` file you extracted
//   file: "maharashtra.pmtiles",
//   // The center that should be shown on the map. [lat, lon] format
//   loc: [19.0760, 72.8777],
//   // How much to be zoomed in at the start (higher number = more zoomed in)
//   zoom: 8,
// };
// south korea data end

function App() {
  // Tell Leaflet to create a map
  const map = L.map("map");

  console.log("map", map);

  // Tell Leaflet where to center
  map.setView(config.loc, config.zoom);

  // map.on('click', function(e) {
  //     alert("Lat, Lon : " + e.latlng.lat + ", " + e.latlng.lng)
  // });

  // map.on('click', function(e) {
  //     alert("Lat, Lon : " + e.latlng.lat + ", " + e.latlng.lng)
  //     L.marker([event.latlng.lat , event.latlng.lng], { icon: greenIcon }).addTo(map);
  // });

  // map.on('click', (event)=> {
  //     L.marker([event.latlng.lat , event.latlng.lng], { icon: greenIcon }).addTo(map);
  // })

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

  // srilanka map point
  // L.marker([7.8731, 80.7718], { icon: greenIcon }).addTo(map)
  //   .bindPopup("<b>Hello world!</b><br />I am a popup in Srilanka").openPopup();

  // bahrain map point
  // L.marker([26.0414, 50.5581], { icon: greenIcon }).addTo(map)
  //   .bindPopup("<b>Hello world!</b><br />I am a popup in Bahrain").openPopup();

  // dubai map point
  // L.marker([25.0962, 55.2111], { icon: greenIcon }).addTo(map)
  //   .bindPopup("<b>Hello world!</b><br />I am a popup in dubai").openPopup();

  // japan map point
  // L.marker([35.6895, 139.6917], { icon: greenIcon }).addTo(map)
  //   .bindPopup("<b>Hello world!</b><br />I am a popup in japan").openPopup();

  // southkorea map point
  // L.marker([36.642, 127.991], { icon: greenIcon }).addTo(map)
  //   .bindPopup("<b>Hello world!</b><br />I am a popup in southkorea").openPopup();

  // India state:
  // Maharashtra map point
  // L.marker([19.0760, 72.8777], { icon: greenIcon }).addTo(map)
  //   .bindPopup("<b>Hello world!</b><br />I am a popup in maharashtra india").openPopup();
  // var LeafIcon_2 = L.Icon.extend({
  //     options: {

  //         iconSize: [50, 82],
  //         shadowSize: [50, 64],
  //         iconAnchor: [22, 94],
  //         shadowAnchor: [4, 62],
  //         popupAnchor: [-3, -76]
  //     }
  // });

  // var markers_icon = new LeafIcon_2 ({ iconUrl: 'Marker/marker-icon-2x.png' });

  // L.marker([-26.64991293944776, 153.06281312253793], { icon: markers_icon }).addTo(map)
  //     .bindPopup("<b>Hello world !</b><br />I am a popup in AUST.").openPopup();

  console.log(leafletLayer, "proto");
  // Tell Protomaps to create a layer for leaflet with import { leafletLayer } from "protomaps"

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

  // Run this to enable clicking on the map and seeing the exact data that
  // was in the `pmtiles` file for that location.
  // layer.addInspector(map);

}

export default App;
