import React from 'react';
import styles from './Card.module.css';
import { Product } from '@/app/models/interfaces';

export default function Card({ title, price, description, image, rating }: Product) {
  return (
    <div className={styles.card}>
      <h3>{title}</h3>
      <article className={styles.image}>
        <img src={image} alt={title} />
      </article>
      <article className={styles.product}>
        <p className={styles.price}>{price.toFixed(2)} €</p>
        <p className={styles.description}>{description}</p>
        <p className={styles.rating}>
          Rating: {rating.rate} ⭐ ({rating.count} avaliações)
        </p>
        <button className={styles.addToCartButton}>+ Adicionar ao Cesto</button>
      </article>
    </div>
  );
}
