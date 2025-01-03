import React from 'react';
import styles from './ProductHeader.module.css';

export default function Header() {

  return (
    <header className={styles.header}>
      <h1 className={styles.title}>DriLux &reg;</h1>
      <nav className={styles.nav}>
        <a href="#produtos" className={styles.link}>Produtos</a>
        <a href="#cesto" className={styles.link}>Cesto</a>
      </nav>
    </header>
  );
}
