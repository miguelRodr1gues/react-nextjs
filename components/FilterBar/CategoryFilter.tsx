import React, { useState, useEffect } from 'react';

export default function FiltroCategorias() {
  const [categorias, setCategorias] = useState([]);

  useEffect(() => {
    // Fetch para obter as categorias
    fetch('https://deisishop.pythonanywhere.com/categories/')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Erro ao buscar categorias');
        }
        return response.json();
      })
      .then((data) => setCategorias(data))
      .catch((error) => console.error('Erro:', error));
  }, []); // Executa apenas uma vez após a montagem do componente

  return (
    <select id="filtrar">
      <option value="todas">Todas as categorias</option>
      {categorias.map((categoria, index) => (
        <option key={index} value={categoria}>
          {categoria}
        </option>
      ))}
    </select>
  );
}
