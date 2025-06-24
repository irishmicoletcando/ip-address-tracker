"use client";

import { MapContainer, TileLayer, Marker, useMap } from "react-leaflet";
import { useEffect } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

const customMarker = new L.Icon({
  iconUrl: "/assets/icon-location.svg",
  iconSize: [35, 45],
  iconAnchor: [17, 45],
  popupAnchor: [0, -45]
})

interface IpAddressCoordinatesProps {
  lat: number;
  lng: number;
}

const MapUpdater: React.FC<{ lat: number; lng: number }> = ({ lat, lng }) => {
  const map = useMap();

  useEffect(() => {
    map.setView([lat, lng], map.getZoom());
  }, [lat, lng, map]);

  return null;
};

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
      <Marker position={[lat, lng]} icon={customMarker}>
        {/* <Popup>
          Current Location
        </Popup> */}
      </Marker>
      <MapUpdater lat={lat} lng={lng} />
    </MapContainer>
  );
};

export default Map;