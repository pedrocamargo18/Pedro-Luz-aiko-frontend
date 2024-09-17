import L from "leaflet";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import Equipamento from "./Equipamento";
import "leaflet/dist/leaflet.css";
import markerIconPng from "leaflet/dist/images/marker-icon.png";
import markerShadowPng from "leaflet/dist/images/marker-shadow.png";
import HistoricoPosicoes from "./HistoricoPosicoes";
import HistoricoEstados from "./HistoricoEstados";

const customIcon = new L.Icon({
  iconUrl: markerIconPng,
  shadowUrl: markerShadowPng,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});

const EquipamentosMap = ({ equipamentos }) => {
  return (
    <MapContainer
      center={[-19.5505, -46.6333]}
      zoom={10}
      style={{ height: "700px", width: "100%" }}
      className="rounded-md shadow-md"
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution="&copy; OpenStreetMap contributors"
      />
      {equipamentos.map((equipamento) => {
        const ultimaPosicao =
          equipamento.positions[equipamento.positions.length - 1];
        return (
          <Marker
            key={equipamento.equipmentId}
            position={[ultimaPosicao.lat, ultimaPosicao.lon]}
            icon={customIcon}
          >
            <Popup>
              <div>
                <Equipamento equipamento={equipamento} />
                <div className="flex flex-col">
                  <HistoricoEstados equipamento={equipamento.equipmentId} />
                  <HistoricoPosicoes positions={equipamento.positions} />
                </div>
              </div>
            </Popup>
          </Marker>
        );
      })}
    </MapContainer>
  );
};

export default EquipamentosMap;
