import React, { useEffect, useState } from "react";
import EquipamentosMap from "../components/EquipamentosMap";
import equipamentosData from "../assets/data/equipmentPositionHistory.json";
import equipamentoModelo from "../assets/data/equipmentModel.json"; // Modelos de equipamentos
import equipamentoEstado from "../assets/data/equipmentState.json"; // Estados de equipamentos
import equipamentoEstadoHistorico from "../assets/data/equipmentStateHistory.json"; // Histórico de estados de equipamentos
import Header from "../components/Header";

const Home = () => {
  const [equipamentos, setEquipamentos] = useState([]);
  const [modelFilter, setModelFilter] = useState(""); // Filtro de modelo
  const [stateFilter, setStateFilter] = useState(""); // Filtro de estado

  useEffect(() => {
    setEquipamentos(equipamentosData);
  }, []);

  const handleModelFilter = (e) => {
    setModelFilter(e.target.value);
  };

  const handleStateFilter = (e) => {
    setStateFilter(e.target.value);
  };

  const filteredEquipamentos = equipamentos.filter((equipamento) => {
    const modelId = equipamento.equipmentId; 
    
    const ultimoEstado = equipamentoEstadoHistorico
      .find((estado) => estado.equipmentId === equipamento.equipmentId)
      ?.states.slice(-1)[0]?.equipmentStateId; 
    const matchesModel = modelFilter ? equipamentoModelo.some((modelo) => modelo.id === modelId && modelo.id === modelFilter) : true;
    const matchesState = stateFilter ? ultimoEstado === stateFilter : true;

    return matchesModel && matchesState;
  });

  return (
    <div className="bg-white min-h-screen flex flex-col">
      <Header />

      <div className="container mx-auto p-4 flex justify-between">
        <div>
          <label className="mr-2 font-semibold">Filtrar por Modelo:</label>
          <select
            value={modelFilter}
            onChange={handleModelFilter}
            className="border rounded px-2 py-1"
          >
            <option value="">Todos os modelos</option>
            {equipamentoModelo.map((modelo) => (
              <option key={modelo.id} value={modelo.id}>
                {modelo.name}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="mr-2 font-semibold">Filtrar por Estado:</label>
          <select
            value={stateFilter}
            onChange={handleStateFilter}
            className="border rounded px-2 py-1"
          >
            <option value="">Todos os estados</option>
            {equipamentoEstado.map((estado) => (
              <option key={estado.id} value={estado.id}>
                {estado.name}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="container mx-auto p-4">
        <h1 className="text-3xl font-bold mb-4 py-2 text-blue-950 text-center">
          Mapa de Equipamentos
        </h1>
        {filteredEquipamentos.length > 0 ? (
          <div className="relative h-[500px] w-full mb-4">
            <EquipamentosMap equipamentos={filteredEquipamentos} />
          </div>
        ) : (
          <p className="text-gray-600 text-center">Nenhum equipamento encontrado.</p>
        )}
      </div>
    </div>
  );
};

export default Home;
