'use client';
import React from 'react';
import useSWR from 'swr';
import { Product } from '../models/interfaces';
import Header from '@/components/ProductHeader/ProductHeader';
import FilterBar from '@/components/FilterBar/FilterBar';
import ProductList from '@/components/ProductList/ProductList';
import Cart from '@/components/Cart/Cart';

export default function Produtos() {

  const fetcher = (url: string) => fetch(url).then((res) => res.json());
  const { data: produtos, error, isLoading } = useSWR<Product[], Error>('api/products', fetcher);

  // Verificar estados de erro e carregamento
  if (error) return <div>Failed to load</div>;
  if (isLoading) return <div>Loading...</div>;
  if (!produtos) return <div>No data available</div>;


  // Renderização dos produtos
  return (
    <div>
      <Header />
      <FilterBar />
      <ProductList produtos={produtos} />
      <Cart />
    </div>
  );
}
