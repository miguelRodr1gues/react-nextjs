'use client';
import React from 'react';
import ProductHeader from '@/components/ProductHeader/ProductHeader';
import FilterBar from '@/components/FilterBar/FilterBar';
import ProductList from '@/components/ProductList/ProductList';
import Cart from '@/components/Cart/Cart';

export default function Produtos() {

  return (
    <>
      <ProductHeader />
      <FilterBar />
      <ProductList />
      <Cart />
    </>
  );
}
