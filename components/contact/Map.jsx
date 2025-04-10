import React from 'react'
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
const Map = () => {
    const mapContainerStyle = {
        width: '95%',
        height: '400px'
      };
      const center = {
        lat: -1.3024426362444637,  
        lng: 36.838232092060586 
      };
  return (
    <div className="my-2 md:mb-16 relative z-10  flex items-center justify-center">
          <LoadScript googleMapsApiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}>
            <GoogleMap mapContainerStyle={mapContainerStyle} center={center} zoom={15}>
              <Marker position={center} />
            </GoogleMap>
          </LoadScript>
        </div>
  )
}

export default Map