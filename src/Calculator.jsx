import React, { useState } from 'react';
import './Calculator.css'; // Import the CSS file

const Calculator = () => {
  const [input, setInput] = useState('');
  const [result, setResult] = useState('');

  const handleButtonClick = (value) => {
    if (value === 'C') {
      setInput('');
      setResult('');
    } else if (value === '=') {
      try {
        if (input.trim() === '') {
          setResult('Error');
        } else {
          // eslint-disable-next-line no-eval
          const calculatedResult = eval(input);
          if (calculatedResult === Infinity) {
            setResult('Infinity');
          } else if (isNaN(calculatedResult)) {
            setResult('NaN');
          } else {
            setResult(calculatedResult.toString());
          }
        }
      } catch {
        setResult('Error');
      }
    } else {
      setInput(input + value);
    }
  };

  return (
    <>
      <h1 className="heading">React Calculator</h1>
      <div className="calculator">
        <input className="input" type="text" value={input} readOnly />
        <div className="result">{result}</div>
        <button className="button" onClick={() => handleButtonClick('7')}>7</button>
        <button className="button" onClick={() => handleButtonClick('8')}>8</button>
        <button className="button" onClick={() => handleButtonClick('9')}>9</button>
        <button className="button operator" onClick={() => handleButtonClick('+')}>+</button>
        <button className="button" onClick={() => handleButtonClick('4')}>4</button>
        <button className="button" onClick={() => handleButtonClick('5')}>5</button>
        <button className="button" onClick={() => handleButtonClick('6')}>6</button>
        <button className="button operator" onClick={() => handleButtonClick('-')}>-</button>
        <button className="button" onClick={() => handleButtonClick('1')}>1</button>
        <button className="button" onClick={() => handleButtonClick('2')}>2</button>
        <button className="button" onClick={() => handleButtonClick('3')}>3</button>
        <button className="button operator" onClick={() => handleButtonClick('*')}>*</button>
        <button className="button" onClick={() => handleButtonClick('C')}>C</button>
        <button className="button" onClick={() => handleButtonClick('0')}>0</button>
        <button className="button" onClick={() => handleButtonClick('=')}>=</button>
        <button className="button operator" onClick={() => handleButtonClick('/')}>/</button>
      </div>
    </>
  );
};

export default Calculator;
