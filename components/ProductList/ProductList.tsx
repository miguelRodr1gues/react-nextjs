import React from 'react';
import { Product } from '@/app/models/interfaces';
import Card from '@/components/ProductCard/Card';

interface ProductListProps {
  produtos: Product[];
  addToCart: (product: Product) => void;
}

export default function ProductList({ produtos, addToCart }: ProductListProps) {
  if (produtos.length === 0) {
    return <div>Nenhum produto encontrado.</div>;
  }

  return (
    <section id="produtos">
      {produtos.map((produto) => (
        <Card
          key={produto.id}
          id={produto.id}
          title={produto.title}
          price={produto.price}
          category={produto.category}
          description={produto.description}
          image={produto.image}
          rating={produto.rating}
          addToCart={() => addToCart(produto)} // Passa o produto diretamente
        />
      ))}
    </section>
  );
}
