import React from 'react';
import styles from './Card.module.css';

interface CardCarrinhoProps {
  id: number;
  title: string;
  price: number;
  image: string;
  onRemove: (id: number) => void;
}

export default function CardCarrinho({ id, title, price, image, onRemove }: CardCarrinhoProps) {
  return (
    <div className={styles.card}>
      <h3>{title}</h3>
      <article className={styles.image}>
        <img src={image} alt={title} />
      </article>
      <article className={styles.product}>
        <p className={styles.price}>{price.toFixed(2)} €</p>
        <button
          onClick={() => onRemove(id)}>
          - Remover do Cesto
        </button>
      </article>
    </div>
  );
}
