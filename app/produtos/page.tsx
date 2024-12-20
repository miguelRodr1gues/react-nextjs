'use client';
import React from 'react';
import useSWR from 'swr';
import { Product } from '../models/interfaces';
import Card from '@/components/ProductCard/Card';

export default function Produtos() {

  const fetcher = (url: string) => fetch(url).then((res) => res.json());
  const { data: produtos, error, isLoading } = useSWR<Product[], Error>('api/products', fetcher);

  // Verificar estados de erro e carregamento
  if (error) return <div>Failed to load</div>;
  if (isLoading) return <div>Loading...</div>;
  if (!produtos) return <div>No data available</div>;


  // Renderização dos produtos
  return <>
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
    </>
}
