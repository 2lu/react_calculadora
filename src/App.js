import React, { useState } from 'react';
import Display from './Componentes/Display';
import BotoesCalculadora from './Componentes/Calculadora';
import './App.css';

const App = () => {
  const [display, setDisplay] = useState('0');
  const [valor, setValor] = useState(null);
  const [operacao, setOperacao] = useState(null);
  const [somandoOperador, setSomandoOperador] = useState(false);

  const recebeValor = (vlr) => {
    if (somandoOperador) {
      setDisplay(vlr);
      setSomandoOperador(false);
    } else {
      setDisplay(display === '0' ? vlr : display + vlr);
    }
  };

  const EntradaValor = () => {
    if (somandoOperador) {
      setDisplay('0.');
      setSomandoOperador(false);
    } else if (display.indexOf('.') === -1) {
      setDisplay(display + '.');
    }
  };

  const limpaDisplay = () => {
    setDisplay('0');
    setValor(null);
    setOperacao(null);
    setSomandoOperador(false);
  };

  const executaOperacao = (proxOperacao) => {
    const inputValor = parseFloat(display);

    if (valor === null) {
      setValor(inputValor);
    } else if (operacao) {
      const valorAtual = valor || 0;
      const Valor = Calculadora(valorAtual, inputValor, operacao);

      setValor(Valor);
      setDisplay(String(Valor));
    }

    setSomandoOperador(true);
    setOperacao(proxOperacao);
  };

  const Calculadora = (valorAnterior, proxValor, op) => {
    switch (op) {
      case '+': return valorAnterior + proxValor;
      case '-': return valorAnterior - proxValor;
      case '*': return valorAnterior * proxValor;
      case '/': return valorAnterior / proxValor;
      default: return proxValor;
    }
  };

  const Igual = () => {
    if (!valor || !operacao) return;

    const inputValor = parseFloat(display);
    const result = Calculadora(valor, inputValor, operacao);

    setDisplay(String(result));
    setValor(null);
    setOperacao(null);
    setSomandoOperador(true);
  };

  const handleButtonPress = (buttonValue) => {
    switch (buttonValue) {
      case 'C':
        limpaDisplay();
        break;
      case '=':
        Igual();
        break;
      case '.':
        EntradaValor();
        break;
      case '+':
      case '-':
      case '*':
      case '/':
        executaOperacao(buttonValue);
        break;
      default:
        recebeValor(buttonValue);
    }
  };

  return (
    <div className="calculator">
      <Display value={display} />
      <BotoesCalculadora onButtonPress={handleButtonPress} />
    </div>
  );
};

export default App;
