import React from 'react';
import styles from '@/components/ProductHeader/ProductHeader.module.css';

export default function Header() {
  return (
    <header className={styles.header}>
      <h1 className={styles.title}>DriLux ®</h1>
      <nav className={styles.nav}>
        <a href="#produtos" className={styles.link}>Produtos</a>
        <a href="#cesto" className={styles.link}>Cesto</a>
      </nav>
    </header>
  );
}
