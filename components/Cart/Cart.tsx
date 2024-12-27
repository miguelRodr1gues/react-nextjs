import React from 'react';
import styles from '@/components/Cart/Cart.module.css';

export default function Cart() {
  return (
    <>
      <section className={styles.titleCesto}>
        <h2>Produtos Selecionados</h2>
      </section>
      <section className={styles.carrinho}>
        <section className={styles.cesto}>
          <p className={styles.custoTotal}>Custo total: 0.00 €</p>
          <p className={styles.estudante}>
            És estudante do DEISI?{' '}
            <input type="checkbox" id="checkbox-estudante" name="estudante" />
          </p>
          <p className={styles.cupao}>
            Cupão de desconto: 
            <input type="text" id="input-cupao" name="cupao" />
          </p>
          <button className={styles.comprar}>Comprar</button>
        </section>
      </section>
    </>
  );
}
