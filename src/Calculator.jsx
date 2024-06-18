import React, { useState } from 'react';
import './Calculator.css'; // Import the CSS file

const Calculator = () => {
  const [input, setInput] = useState('');

  const handleButtonClick = (value) => {
    if (value === 'C') {
      setInput('');
    } else if (value === '=') {
      try {
        if (input.trim() === '') {
          setInput('Error');
        } else {
          // eslint-disable-next-line no-eval
          const result = eval(input);
          if (result === Infinity) {
            setInput('Infinity');
          } else if (isNaN(result)) {
            setInput('NaN');
          } else {
            setInput(result.toString());
          }
        }
      } catch {
        setInput('Error');
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
