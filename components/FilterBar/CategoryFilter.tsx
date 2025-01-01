"use client"
import React, { useState, useEffect } from 'react';
import styles from './FilterBar.module.css';

interface FiltroCategoriasProps {
  categoryFilter: string;
  setCategoryFilter: (value: string) => void;
}

export default function FiltroCategorias({
  categoryFilter,
  setCategoryFilter
}: FiltroCategoriasProps) {
  const [categorias, setCategorias] = useState<string[]>([]);

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
    <select 
      className={styles.filtrar} 
      value={categoryFilter}
      onChange={(e) => setCategoryFilter(e.target.value)}
    >
      <option value="todas">Todas as categorias</option>
      {categorias.map((categoria, index) => (
        <option key={index} value={categoria}>
          {categoria}
        </option>
      ))}
    </select>
  );
}
