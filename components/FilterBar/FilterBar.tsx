import React from 'react';
import CategoryFilter from './CategoryFilter';
import styles from './FilterBar.module.css';

interface FilterBarProps {
  search: string;
  setSearch: (value: string) => void;
  sortOrder: string;
  setSortOrder: (value: string) => void;
  categoryFilter: string;
  setCategoryFilter: (value: string) => void;
}

export default function FilterBar({
  search,
  setSearch,
  sortOrder,
  setSortOrder,
  categoryFilter,
  setCategoryFilter
}: FilterBarProps) {
  return (
    <div className={styles.filterBarContainer}>
      <section className={styles.titleProdutos}>
        <h2>SELECIONE OS SEUS PRODUTOS</h2>
      </section>

      <section className={styles.barra}>
        {/* Filtro por categoria */}
        <label className={styles.filtros}>Filtrar</label>
        <CategoryFilter
          categoryFilter={categoryFilter} 
          setCategoryFilter={setCategoryFilter} 
        />
        
        {/* Ordenação */}
        <label className={styles.filtros}>Ordenar</label>
        <select
          id="ordenar"
          className={styles.ordenar}
          value={sortOrder}
          onChange={(e) => setSortOrder(e.target.value)}
        >
          <option value="preco">Ordenar pelo preço</option>
          <option value="preco-crescente">Preço Crescente</option>
          <option value="preco-decrescente">Preço Decrescente</option>
        </select>

        {/* Campo de pesquisa */}
        <label className={styles.filtros}>Pesquisar</label>
        <input
          type="text"
          value={search}
          placeholder="Pesquise por produto"
          onChange={(e) => setSearch(e.target.value)}
          className={styles.pesquisar}
        />
      </section>
    </div>
  );
}
