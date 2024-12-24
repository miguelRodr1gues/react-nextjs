import React from 'react';

export default function Cart() {
  return (
    <section className="carrinho">
      <section className="custo-total">
        <p id="custo-total">Custo total: 0.00 €</p>
        <p id="estudante">
          És estudante do DEISI?{' '}
          <input type="checkbox" id="checkbox-estudante" name="estudante" />
        </p>
        <p id="cupao">
          Cupão de desconto: 
          <input type="text" id="input-cupao" name="cupao" />
        </p>
        <button className="comprar">Comprar</button>
      </section>
    </section>
  );
}
