import React from 'react';

const HistoricoPosicoes = ({ positions }) => {
  return (
    <div className="max-h-40 overflow-y-auto p-2 mt-2 bg-white rounded-md shadow-md">
      <h3 className="text-sm font-semibold mb-2">Histórico de Posições</h3>
      <ul className="list-disc pl-5">
        {positions.map((pos, index) => (
          <li key={index} className="mb-1">
            <span className="font-semibold">Data:</span> {new Date(pos.date).toLocaleString()}<br />
            <span className="font-semibold">Latitude:</span> {pos.lat}<br />
            <span className="font-semibold">Longitude:</span> {pos.lon}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HistoricoPosicoes;
