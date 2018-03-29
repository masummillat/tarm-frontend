import React, {Component} from 'react';
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
} from "react-google-maps";


const Map = withScriptjs(withGoogleMap(props =>
    <div className="home-map">
      <GoogleMap
          defaultZoom={15}
          defaultCenter={{lat: 25.837420, lng: 88.477798}}
      >
        <Marker
            position={{lat: 25.837420, lng: 88.477798}}
        />
      </GoogleMap>
    </div>
));

export default Map