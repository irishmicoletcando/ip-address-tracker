"use client";

import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

interface IpAddressCoordinatesProps {
  lat: number;
  lng: number;
}

const Map: React.FC<IpAddressCoordinatesProps> = ({lat, lng}) => {
  return (
    <MapContainer
      center={[lat, lng]}
      zoom={14}
      className="min-h-[500px] w-full"
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={[lat, lng]}>
        <Popup>
          Current Location
        </Popup>
      </Marker>
    </MapContainer>
  );
};

export default Map;