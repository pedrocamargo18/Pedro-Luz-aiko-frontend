import React from "react";
import equipamentoEstadoHistorico from "../assets/data/equipmentStateHistory.json";
import equipamentoEstado from "../assets/data/equipmentState.json";

const HistoricoEstados = ({ equipamento }) => {
  const estadosHistorico = equipamentoEstadoHistorico.find(
    (equip) => equip.equipmentId === equipamento
  );

  if (!estadosHistorico || estadosHistorico.states.length === 0) {
    return (
      <div className="max-h-40 overflow-y-auto p-2 bg-white rounded-md shadow-md">
        <h3 className="text-sm font-bold mb-2">Histórico de Estados</h3>
        <p className="text-gray-500">Nenhum estado encontrado.</p>
      </div>
    );
  }

  const estadosComNomes = estadosHistorico.states.map((state) => {
    const estadoEncontrado = equipamentoEstado.find(
      (equipEstado) => equipEstado.id === state.equipmentStateId
    );
    return {
      ...state,
      nome: estadoEncontrado ? estadoEncontrado.name : "Desconhecido",
    };
  });

  return (
    <div className="max-h-40 mt-2 overflow-y-auto p-2 bg-white rounded-md shadow-md">
      <h3 className="text-sm font-bold mb-2">Histórico de Estados</h3>
      <ul className="list-disc pl-5">
        {estadosComNomes.length > 0 ? (
          estadosComNomes.map((estado, index) => (
            <li key={index} className="mb-1">
              <span className="font-semibold">Data:</span>{" "}
              {new Date(estado.date).toLocaleString()}
              <br />
              <span className="font-semibold">Estado:</span> {estado.nome}
            </li>
          ))
        ) : (
          <p className="text-gray-500">Nenhum estado encontrado.</p>
        )}
      </ul>
    </div>
  );
};

export default HistoricoEstados;
