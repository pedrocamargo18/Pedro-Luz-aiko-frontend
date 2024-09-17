import React from 'react';
import equipamentoModelo from '../assets/data/equipmentModel.json';
import equipamentoIdModelo from '../assets/data/equipment.json';
import equipamentoEstado from '../assets/data/equipmentState.json';
import equipamentoEstadoHistorico from '../assets/data/equipmentStateHistory.json';

const Equipamento = ({ equipamento }) => {
  const ultimaPosicao = equipamento.positions[equipamento.positions.length - 1];
  const modelId = equipamentoIdModelo.filter(idModel => idModel.id === equipamento.equipmentId).map(idModel => idModel.equipmentModelId);
  const modelName = equipamentoModelo.filter(model => model.id === modelId[0]).map(model => model.name);
  const equipStateId = equipamentoEstadoHistorico.filter(equip => equip.equipmentId === equipamento.equipmentId).map(equip => equip.states).flat();
  const equipState = equipamentoEstado.filter(equipEstado => equipEstado.id === equipStateId[0]?.equipmentStateId).map(equipEstado => equipEstado.name);

  return (
    <div className="w-140 p-4 bg-white rounded-md shadow-lg">
      <h2 className="text-sm font-semibold">Equipamento: {modelName}</h2>
      <p className="font-semibold">Última posição:</p>
      {ultimaPosicao ? (
        <p className="text-sm">Lat: {ultimaPosicao.lat}, Lon: {ultimaPosicao.lon}</p>
      ) : (
        <p className="text-sm text-gray-400">Sem dados de posição disponíveis</p>
      )}
      <p className="font-semibold">Estado: {equipState}</p>
    </div>
  );
};

export default Equipamento;
