import React from 'react';

const Botoes = ({ onClick, className, value }) => (
  <button onClick={onClick} className={`button ${className}`}>
    {value}
  </button>
);

export default Botoes;
