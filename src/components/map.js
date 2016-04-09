import React from 'React';
import { GoogleMap, Marker, GoogleMapLoader } from "react-google-maps";

export default (props) => {
    console.log('porps: ', props);
    return (
        <GoogleMapLoader
            containerElement={<div style={{height: '100%' }} />}
            googleMapElement={
                <GoogleMap defaultZoom={12} defaultCenter={{ lat: props.lat, lng: props.lon }} />
            }
        />
    )
}