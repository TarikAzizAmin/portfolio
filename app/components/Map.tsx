'use client';
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";

import "leaflet/dist/leaflet.css"; 
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css";
import "leaflet-defaulticon-compatibility";


interface MapProps {
  center: [number, number];
  zoom: number;
}

const Map = ({center, zoom}: MapProps) => {
  return (

    <div className="relative z-0 max-w-full overflow-hidden h-auto my-0 mx-0 animate-fade-in animation-delay-700">

            <MapContainer 
            center={center} 
            zoom={zoom} 
            scrollWheelZoom={false} 
            attributionControl={false}
           
            className="w-fit rounded-2xl h-[400px]" 
            >
            <TileLayer
                attribution='&copy; <a href="https://openstreetmap.org">OpenStreetMap</a> contributors' 
                               
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            
            <Marker
             position={center}
             eventHandlers={{
                add: (e) => {
              e.target.openPopup();
            },
          }}
            >
                <Popup
                autoClose={false}
                closeOnClick={false}
                closeButton={false}
                >
                    I am here!
                </Popup>
            </Marker>
        </MapContainer>

    </div>
        

  );
};

export default Map;