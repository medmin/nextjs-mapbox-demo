import React from 'react';
import mapboxgl from 'mapbox-gl';

export default class Map extends React.Component {

  componentDidMount() {
    this.map = new mapboxgl.Map({
      container: 'map',
      accessToken: process.env.MAPBOX_ACCESS_TOKEN,
      style: 'mapbox://styles/mapbox/navigation-guidance-day-v4',
      zoom: 11, // starting zoom, overrided by bounds if it's not null
      // bounds: [[],[]],
      center: [-117.161087, 32.715736], // lng lat
      pitchWithRotate: false, // disable all rotate
      dragRotate: false, // disable all rotate
      touchZoomRotate: false, // disable all rotate
      fadeDuration: 0,
      attributionControl: true,
      customAttribution: 'Yumin',
    });
  }

  render() {
    return (
      <div
        id="map"
        style={{ height: '500px', width: '1000px' }}
      />
    );
  }
}