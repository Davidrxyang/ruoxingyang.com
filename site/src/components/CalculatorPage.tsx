import React, { useState } from 'react';
import './CalculatorPage.css';

const CalculatorPage: React.FC = () => {
  const [display, setDisplay] = useState<string>('0');
  const [operator, setOperator] = useState<string | null>(null);
  const [firstOperand, setFirstOperand] = useState<string | null>(null);
  const [waitingForSecondOperand, setWaitingForSecondOperand] = useState<boolean>(false);

  const inputDigit = (digit: string) => {
    if (waitingForSecondOperand) {
      setDisplay(digit);
      setWaitingForSecondOperand(false);
    } else {
      setDisplay(display === '0' ? digit : display + digit);
    }
  };

  const inputDot = () => {
    if (waitingForSecondOperand) {
      setDisplay('0.');
      setWaitingForSecondOperand(false);
    } else if (!display.includes('.')) {
      setDisplay(display + '.');
    }
  };

  const clearDisplay = () => {
    setDisplay('0');
    setOperator(null);
    setFirstOperand(null);
    setWaitingForSecondOperand(false);
  };

  const handleOperator = (nextOperator: string) => {
    const inputValue = parseFloat(display);

    if (operator && waitingForSecondOperand) {
      setOperator(nextOperator);
      return;
    }

    if (firstOperand == null) {
      setFirstOperand(display);
    } else if (operator) {
      const currentValue = firstOperand ? parseFloat(firstOperand) : 0;
      const result = performCalculation[operator](currentValue, inputValue);

      setDisplay(String(result));
      setFirstOperand(String(result));
    }

    setWaitingForSecondOperand(true);
    setOperator(nextOperator);
  };

  const performCalculation: { [key: string]: (firstOperand: number, secondOperand: number) => number } = {
    '/': (firstOperand, secondOperand) => firstOperand / secondOperand,
    '*': (firstOperand, secondOperand) => firstOperand * secondOperand,
    '+': (firstOperand, secondOperand) => firstOperand + secondOperand,
    '-': (firstOperand, secondOperand) => firstOperand - secondOperand,
    '=': (_: number, secondOperand: number) => secondOperand,
  };

  return (
    <div className="CalculatorPage">
      <div className="calculator">
        <div className="calculator-display">{display}</div>
        <div className="calculator-keypad">
          <button className="calculator-key key-clear" onClick={clearDisplay}>
            AC
          </button>
          <button className="calculator-key" onClick={() => handleOperator('/')}>
            /
          </button>
          <button className="calculator-key" onClick={() => handleOperator('*')}>
            *
          </button>
          <button className="calculator-key" onClick={() => handleOperator('-')}>
            -
          </button>
          {[1, 2, 3].map((digit) => (
            <button key={digit} className="calculator-key" onClick={() => inputDigit(String(digit))}>
              {digit}
            </button>
          ))}
          <button className="calculator-key" onClick={() => handleOperator('+')}>
            +
          </button>
          {[4, 5, 6].map((digit) => (
              <button key={digit} className="calculator-key" onClick={() => inputDigit(String(digit))}>
              {digit}
            </button>
          ))}
          <button className="calculator-key key-equal" onClick={() => handleOperator('=')}>
            =
          </button>
          {[7, 8, 9].map((digit) => (
            <button key={digit} className="calculator-key" onClick={() => inputDigit(String(digit))}>
              {digit}
            </button>
          ))}
          <button className="calculator-key key-dot" onClick={inputDot}>
            .
          </button>
          <button className="calculator-key" onClick={() => inputDigit('0')}>
            0
          </button>
        </div>
      </div>
    </div>
  );
};

export default CalculatorPage;
