import React from 'react';


export default function Page() {
  return (
    <div className="page-container">
      <div className="page-text">
        <h1>🚀 Bem-vindo ao Meu Primeiro Site em React! 👋</h1>
        <p>Estou super animado por dar os primeiros passos no mundo do React!</p>
        <p>
          Este é um espaço especial onde ideias ganham vida, com componentes dinâmicos e
          interativos.
        </p>
      </div>
      <div className="page-image">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg"
          alt="React Logo"
          className="react-logo"
        />
      </div>
    </div>
  );
}

