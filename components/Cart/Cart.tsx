import React from 'react';
import styles from '@/components/Cart/Cart.module.css';
import CardCarrinho from '@/components/ProductCard/CardCarrinho';

// Define o tipo dos itens no carrinho
interface Cart {
  id: number;
  title: string;
  price: number;
  image: string;
}

interface CartProps {
  cart: Cart[];
  totalCost: number;
  isStudent: boolean;
  setIsStudent: (value: boolean) => void;
  coupon: string;
  setCoupon: (value: string) => void;
  purchaseMessage: string;
  buy: () => void;
  removeFromCart: (id: number) => void;
}

export default function Cart({
  cart,
  totalCost,
  isStudent,
  setIsStudent,
  coupon,
  setCoupon,
  purchaseMessage,
  buy,
  removeFromCart,
}: CartProps) {
  return (
    <>
      <section id="cesto" className={styles.titleCesto}>
        <h2>Produtos Selecionados</h2>
      </section>

      <section className={styles.cesto}>
        {cart.length > 0 ? (
          cart.map((item, index) => (
            <CardCarrinho
              key={`${item.id}-${index}`}
              id={item.id}
              title={item.title}
              price={item.price}
              image={item.image}
              onRemove={removeFromCart} // Função de remoção
            />
          ))
        ) : (
          <p className={styles.emptyCart}>Carrinho Vazio</p>
        )}
      </section>

      <section className={styles.carrinho}>
        <section className={styles.custoTotal}>
          <p className={styles.custoTotals}>Custo total: {totalCost.toFixed(2)} €</p>
          <p className={styles.estudante}>
            És estudante do DEISI?{' '}
            <input
              type="checkbox"
              id="checkbox-estudante"
              name="estudante"
              checked={isStudent}
              onChange={(e) => setIsStudent(e.target.checked)}
            />
          </p>
          <p className={styles.cupao}>
            Cupão de desconto:
            <input
              type="text"
              id="input-cupao"
              name="cupao"
              value={coupon}
              onChange={(e) => setCoupon(e.target.value)}
            />
          </p>
          <button className={styles.comprar} onClick={buy} disabled={cart.length === 0}>
            Comprar
          </button>
          {purchaseMessage && <p className={styles.purchaseMessage}>{purchaseMessage}</p>}
        </section>
      </section>
    </>
  );
}
