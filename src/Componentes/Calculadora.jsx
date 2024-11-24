import React from 'react';
import Button from './Botoes';

const BotoesCalculadora = ({ onButtonPress }) => {
  const buttons = [
    ['7', '8', '9', '/'],
    ['4', '5', '6', '*'],
    ['1', '2', '3', '-'],
    ['0', '.', '=', '+'],
    ['C']
  ];

  return (
    <div className="button-panel">
      {buttons.map((row, rowIndex) => (
        <div key={rowIndex} className="button-row">
          {row.map((buttonValue) => (
            <Button
              key={buttonValue}
              value={buttonValue}
              onClick={() => onButtonPress(buttonValue)}
              className={
                '+-*/'.includes(buttonValue)
                  ? 'operator'
                  : buttonValue === '='
                  ? 'equals'
                  : buttonValue === 'C'
                  ? 'clear'
                  : ''
              }
            />
          ))}
        </div>
      ))}
    </div>
  );
};

export default BotoesCalculadora;
