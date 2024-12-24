import React from 'react';
import CategoryFilter from '@/components/FilterBar/CategoryFilter';
import styles from '@/components/FilterBar/FilterBar.module.css';

export default function FilterBar() {
  return (
    <section className={styles.barra}>
      <p>Filtrar</p>
      <CategoryFilter />

      <p>Ordenar</p>
      <select id="ordenar" className={styles.ordenar}>
        <option value="preco">Ordenar pelo preço</option>
        <option value="preco-decrescente">Preço Decrescente</option>
        <option value="preco-crescente">Preço Crescente</option>
      </select>

      <p>Pesquisar</p>
      <input
        type="text"
        id="pesquisar"
        placeholder="Pesquise por produto"
        className={styles.pesquisar}
      />
    </section>
  );
}
