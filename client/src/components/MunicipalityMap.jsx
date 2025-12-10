import { MapContainer, TileLayer, CircleMarker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

// FULL EINDHOVEN GRID STRESS MAP
const hotspots = [
  // RED – High congestion
  { lat: 51.44330, lng: 5.45340, severity: 3, label: "Strijp-S – High density redevelopment" },
  { lat: 51.44164, lng: 5.46972, severity: 3, label: "Centrum / Station – Mobility + commercial load" },
  { lat: 51.46040, lng: 5.47670, severity: 3, label: "Woensel-Zuid – Dense residential demand" },
  { lat: 51.42460, lng: 5.49140, severity: 3, label: "Stratum – Older grid under heavy load" },

  // YELLOW – Mid congestion
  { lat: 51.44910, lng: 5.50850, severity: 2, label: "Tongelre – Mixed industrial/residential" },
  { lat: 51.44680, lng: 5.39280, severity: 2, label: "Meerhoven – High EV demand" },
  { lat: 51.42650, lng: 5.45510, severity: 2, label: "Gestel – Strong evening peak" },
  { lat: 51.47400, lng: 5.49370, severity: 2, label: "Woensel-Noord – Developing residential zones" },

  // GREEN – Low/No congestion
  { lat: 51.40870, lng: 5.45040, severity: 1, label: "High Tech Campus – Modern grid infrastructure" },
  { lat: 51.45930, lng: 5.37760, severity: 1, label: "Acht / Airport – Balanced industrial demand" },
  { lat: 51.47500, lng: 5.54890, severity: 1, label: "Nuenen border – Low residential stress" },
  { lat: 51.42330, lng: 5.55990, severity: 1, label: "Geldrop border – Stable suburban load" },
  { lat: 51.42080, lng: 5.39200, severity: 1, label: "Veldhoven-Zuid – Healthy distribution" },
];

export default function MunicipalityMap() {
  return (
    <div className="rounded-3xl border shadow-md p-4 bg-gradient-to-br from-[#EAF3FF] via-[#F4F8FF] to-white w-full">
      <h2 className="text-xl font-semibold mb-3 text-[#1D252C]">
        Congestion hotspots (real map view)
      </h2>

      {/* MOBILE-FRIENDLY ASPECT RATIO */}
      <div className="relative w-full aspect-video sm:h-[340px] md:h-[380px] rounded-3xl overflow-hidden">
        <MapContainer
          center={[51.4416, 5.4697]}
          zoom={12.5}
          scrollWheelZoom={false}
          touchZoom={false}
          dragging={false}
          tap={false}
          style={{ height: "100%", width: "100%" }}
        >
          <TileLayer
            url="https://tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution="&copy; OpenStreetMap contributors"
          />

          {hotspots.map((spot, i) => (
            <CircleMarker
              key={i}
              center={[spot.lat, spot.lng]}
              radius={spot.severity === 3 ? 18 : spot.severity === 2 ? 14 : 10}
              pathOptions={{
                color:
                  spot.severity === 3
                    ? "#D7263D" // red
                    : spot.severity === 2
                    ? "#F4B14A" // yellow
                    : "#01AC51", // green
                fillOpacity: 0.7,
              }}
            >
              <Popup>
                <strong>{spot.label}</strong>
                <br />
                Severity level: {spot.severity}
              </Popup>
            </CircleMarker>
          ))}
        </MapContainer>
      </div>
    </div>
  );
}
