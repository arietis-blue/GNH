import React, { useEffect, useState, useCallback } from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import axios from "axios";

const GoogleMapComponent = () => {
  // const [locations, setLocations] = useState([]);
  const [map, setMap] = useState(null);

  // useEffect(() => {
  //   // バックエンドから場所データを取得
  //   axios.get("/api/locations")
  //     .then(response => {
  //       setLocations(response.data);
  //     })
  //     .catch(error => {
  //       console.error("Error fetching locations: ", error);
  //     });
  // }, []);

  const googleMapsApiKey = process.env.REACT_APP_GOOGLE_MAPS_API_KEY;
  const positiongnh = { lat: 35.00284019091788, lng: 135.76919075398104  };

//   const onLoad = useCallback((map) => {
//     const bounds = new window.google.maps.LatLngBounds();
//     bounds.extend({ lat: 35.00284019091788, lng: 135.76919075398104 });
//     map.fitBounds(bounds);
//     setMap(map);
//   }, []);

//   const onUnmount = useCallback(() => {
//     setMap(null);
//   }, []);

  return (
    <LoadScript googleMapsApiKey={googleMapsApiKey}>
        <GoogleMap
          id="map"
          mapContainerStyle={{ width: '80%', height: '100%' }}
          center={{ lat: 35.00284019091788, lng: 135.76919075398104 }} 
          zoom={16}
        //   onLoad={onLoad}
        //   onUnmount={onUnmount}
        >
          {/* {locations.map((location, index) => (
            <Marker key={index} position={{ lat: location.lat, lng: location.lng }} />
          ))} */}
          <Marker  position={positiongnh} />
        </GoogleMap>
    </LoadScript>
  );
};

export default GoogleMapComponent;
