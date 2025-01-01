import React from 'react';
import styles from './Header.module.css';
import Link from 'next/link';
import Image from 'next/image'; // Importação correta do componente Image
import Imagem from '@/app/images/react.png';

export default function Header() {
  return (
    <header className={styles.header}>
      <Image src={Imagem} alt="React & Next.js" width={70} height={70} />
      <nav className={styles.nav}>
        <Link className={styles['nav-link']} href="/">Home</Link>
        <Link className={styles['nav-link']} href="/produtos">Produtos</Link>
        <Link className={styles['nav-link']} href="/tecnologias">Tecnologias</Link>
      </nav>
    </header>
  );
}

