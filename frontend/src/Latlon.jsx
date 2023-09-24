import React from 'react';
import { GoogleMap, LoadScript } from "@react-google-maps/api";

const containerStyle = {
  width: "800px",
  height: "400px",
};

const center = {
    lat: 35.00284019091788, lng: 135.76919075398104
};

const googleMapsApiKey = process.env.REACT_APP_GOOGLE_MAPS_API_KEY;

const MyMapComponent = ({ onMapClick }) => {
  return (
    <LoadScript googleMapsApiKey={googleMapsApiKey}>
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={13}
        onClick={onMapClick}
      >
        {/* ここにマーカーやその他の要素を配置できます */}
      </GoogleMap>
    </LoadScript>
  );
};

export default MyMapComponent;
