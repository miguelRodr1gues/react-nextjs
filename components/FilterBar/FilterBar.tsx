import React from 'react';
import CategoryFilter from './CategoryFilter';
import styles from './FilterBar.module.css';

export default function FilterBar() {
  return (
    <div className={styles.filterBarContainer}>
      <section className={styles.titleProdutos}>
        <h2>Selecione os seus Produtos</h2>
      </section>
      <section className={styles.barra}>
          <label className={styles.filtros}>Filtrar</label>
          <CategoryFilter />
        
          <label className={styles.filtros}>Ordenar</label>
          <select id="ordenar" className={styles.ordenar}>
            <option value="preco">Ordenar pelo preço</option>
            <option value="preco-decrescente">Preço Decrescente</option>
            <option value="preco-crescente">Preço Crescente</option>
          </select>

          <label className={styles.filtros}>Pesquisar</label>
          <input type="text" placeholder="Pesquise por produto" className={styles.pesquisar}
          />
      </section>
    </div>
  );
}
