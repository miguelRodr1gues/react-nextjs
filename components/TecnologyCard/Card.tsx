import React from 'react';
import styles from './Card.module.css';
import { Tecnologias } from '@/app/models/interfaces'; 

export default function Card({ title, image, description, rating } : Tecnologias) {
  return (
    <div className={styles.card}>
      <img src={image} alt={title} className={styles.image} />
      <div className={styles.content}>
        <h2 className={styles.title}>{title}</h2>
        <p className={styles.description}>{description}</p>
        <div className={styles.rating}>
          {Array.from({ length: rating }, (_, index) => (
            <span key={index} className={styles.star}>⭐</span>
          ))}
        </div>
      </div>
    </div>
  );
}

