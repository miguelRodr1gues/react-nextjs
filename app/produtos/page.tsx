'use client';
import React, { useState, useEffect } from 'react';
import useSWR from 'swr';
import ProductHeader from '@/components/ProductHeader/ProductHeader';
import FilterBar from '@/components/FilterBar/FilterBar';
import ProductList from '@/components/ProductList/ProductList';
import Cart from '@/components/Cart/Cart';
import { Product } from '@/app/models/interfaces';

export default function Produtos() {
  const [search, setSearch] = useState<string>('');
  const [sortOrder, setSortOrder] = useState<string>('preco');
  const [categoryFilter, setCategoryFilter] = useState<string>('todas');

  const [cart, setCart] = useState<Product[]>([]);
  const [totalCost, setTotalCost] = useState<number>(0);

  const [isStudent, setIsStudent] = useState<boolean>(false);
  const [coupon, setCoupon] = useState<string>('');
  const [purchaseMessage, setPurchaseMessage] = useState<string>('');

  const fetcher = (url: string) => fetch(url).then((res) => res.json());
  const { data: produtos, error, isLoading } = useSWR<Product[], Error>('api/products', fetcher);

  useEffect(() => {
    const cart = JSON.parse(localStorage.getItem('cart') || '[]');
    if (cart) {
      setCart(cart);
    }
  }, []);

  useEffect(() => {
    const total = cart.reduce((acc, item) => acc + item.price, 0);
    setTotalCost(total);
  }, [cart]);

  const addToCart = (product: Product) => {
    setCart((prevItems) => {
      if (!prevItems.some(item => item.id === product.id)) {
        const updatedCart = [...prevItems, product];
        localStorage.setItem('cart', JSON.stringify(updatedCart));
        return updatedCart;
      }
      return prevItems;
    });
  };

  const removeFromCart = (id: number) => {
    setCart((prevItems) => {
      const updatedCart = prevItems.filter(item => item.id !== id);
      localStorage.setItem('cart', JSON.stringify(updatedCart));
      return updatedCart;
    });
  };

  if (error) return <div>Erro ao carregar os produtos.</div>;
  if (isLoading) return <div>A carregar produtos...</div>;
  if (!produtos) return <div>Erro ao carregar produtos</div>;

  let filteredProducts = produtos;

  if (categoryFilter && categoryFilter !== 'todas') {
    filteredProducts = filteredProducts.filter(produto => produto.category === categoryFilter);
  }

  if (search) {
    filteredProducts = filteredProducts.filter(produto =>
      produto.title.toLowerCase().includes(search.toLowerCase())
    );
  }

  filteredProducts.sort((a, b) => {
    if (sortOrder === 'preco-decrescente') return b.price - a.price;
    if (sortOrder === 'preco-crescente') return a.price - b.price;
    return 0;
  });

  const buy = () => {
    fetch('/api/deisishop/buy', {
      method: 'POST',
      body: JSON.stringify({
        products: cart.map(product => product.id),
        name: '',
        student: isStudent,
        coupon: coupon,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then(response => {
        if (!response.ok) {
          throw new Error(response.statusText);
        }
        return response.json();
      })
      .then(response => {
        console.log(response);
        setCart([]);
        localStorage.setItem('cart', JSON.stringify([]));
        setPurchaseMessage('Compra realizada com sucesso!');
      })
      .catch(() => {
        setPurchaseMessage('Erro ao realizar a compra.');
        console.log('Erro ao comprar');
      });
  };

  return (
    <div>
      <ProductHeader />
      <FilterBar
        search={search}
        setSearch={setSearch}
        sortOrder={sortOrder}
        setSortOrder={setSortOrder}
        categoryFilter={categoryFilter}
        setCategoryFilter={setCategoryFilter}
      />
      <ProductList produtos={filteredProducts} addToCart={addToCart} />
      <Cart
        cart={cart}
        totalCost={totalCost}
        isStudent={isStudent}
        setIsStudent={setIsStudent}
        coupon={coupon}
        setCoupon={setCoupon}
        purchaseMessage={purchaseMessage}
        buy={buy}
        removeFromCart={removeFromCart}
      />
    </div>
  );
}
