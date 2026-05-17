import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "leaflet-routing-machine";
import L from "leaflet";
import { useEffect, useState } from "react";

// Fix marker icon issue
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png",
  iconUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png",
  shadowUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png",
});

// Routing Component
function Routing({ from, to, setInfo }) {
  const map = useMap();

  useEffect(() => {
    if (!map || !from || !to) return;

    const control = L.Routing.control({
      waypoints: [
        L.latLng(from.lat, from.lng),
        L.latLng(to.lat, to.lng),
      ],
      lineOptions: {
        styles: [{ color: "blue", weight: 5 }],
      },
      show: false,
      addWaypoints: false,
      draggableWaypoints: false,
      fitSelectedRoutes: true,
    }).addTo(map);

    control.on("routesfound", function (e) {
      const route = e.routes[0];
      const distance = (route.summary.totalDistance / 1000).toFixed(2);
      const time = (route.summary.totalTime / 60).toFixed(2);

      setInfo({
        distance,
        time,
      });
    });

    return () => map.removeControl(control);
  }, [map, from, to, setInfo]);

  return null;
}

// Main Component
function MapView({ from, to }) {
  const [info, setInfo] = useState({ distance: 0, time: 0 });

  return (
    <div>
      {/* Info Box */}
      <div style={{
        padding: "10px",
        background: "#f1f1f1",
        marginBottom: "10px",
        borderRadius: "8px"
      }}>
        <h3>Route Info</h3>
        <p>Distance: {info.distance} km</p>
        <p>Time: {info.time} mins</p>
      </div>

      <MapContainer
        center={[from.lat, from.lng]}
        zoom={13}
        style={{ height: "500px", width: "100%" }}
      >
        <TileLayer
          attribution="&copy; OpenStreetMap contributors"
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {/* Markers */}
        <Marker position={[from.lat, from.lng]}>
          <Popup>Start Point</Popup>
        </Marker>

        <Marker position={[to.lat, to.lng]}>
          <Popup>Destination</Popup>
        </Marker>

        {/* Route */}
        <Routing from={from} to={to} setInfo={setInfo} />
      </MapContainer>
    </div>
  );
}

export default MapView;