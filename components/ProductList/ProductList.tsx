import React from 'react';
import { Product } from '../models/interfaces';
import Card from '@/components/ProductCard/Card';

export default function ProductList({ produtos }: Product) {
  return (
    <section id="produtos">
      {produtos.map((produto) => (
        <Card
          key={produto.id}
          id={produto.id}
          title={produto.title}
          price={produto.price}
          description={produto.description}
          image={produto.image}
          rating={produto.rating}
        />
      ))}
    </section>
  );
}
