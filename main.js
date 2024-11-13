// =============================================================================
// File             : main.js
//
// Current Author   : Robert Hewlett
//
// Previous Author  : None
//
// Contact Info     : robert_hewlett@bcit.ca
//
// Purpose          : Starter project for vite and openLayers
//
// Dependencies     : Vite, OpenLayers, ESM 
// Version          : 1.0
//
// Modification Log :
//    Created 2024-11-12 (rh)
//    Updated YYYY-MM-DD (fl)
//
// ============================================================================
import './style.css';
import {Map, View} from 'ol';
import TileLayer from 'ol/layer/Tile';
import OSM from 'ol/source/OSM';
import { useGeographic } from 'ol/proj';
// ========================================================
// Switch coords to wgs84 in long-lat order
// ========================================================
useGeographic();
// ========================================================
// Sample map with OSM centered on crescent beach
// ========================================================
const map = new Map({
  target: 'map',
  layers: [
    new TileLayer({
      source: new OSM()
    })
  ],
  view: new View({
    center: [-122.8808000, 49.059842],
    zoom: 15
  })
});
