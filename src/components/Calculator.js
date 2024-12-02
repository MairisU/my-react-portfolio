import React, { useState, useEffect } from 'react';
import './Calculator.css';

const Calculator = () => {
  const [input, setInput] = useState('');

  // Function to handle button clicks
  const handleButtonClick = (value) => {
    setInput((prevInput) => prevInput + value);
  };

  // Function to handle clear
  const handleClear = () => {
    setInput('');
  };

  // Function to evaluate the expression
  const handleEvaluate = () => {
    try {
      setInput(eval(input).toString()); // Use eval to calculate the expression
    } catch (error) {
      setInput('Error');
    }
  };

  // Handle keyboard input
  const handleKeyPress = (event) => {
    const validKeys = [
      '0', '1', '2', '3', '4', '5', '6', '7', '8', '9',
      '+', '-', '*', '/', '=', 'Enter', 'Backspace', 'c'
    ];
    
    if (validKeys.includes(event.key)) {
      if (event.key === 'Enter' || event.key === '=') {
        handleEvaluate();
      } else if (event.key === 'Backspace') {
        setInput(input.slice(0, -1)); // Remove last character
      } else if (event.key === 'c') {
        handleClear(); // Clear the input
      } else {
        handleButtonClick(event.key); // Append the key to the input
      }
    }
  };

  // Set up the event listener for keydown when the component mounts
  useEffect(() => {
    window.addEventListener('keydown', handleKeyPress);
    return () => {
      window.removeEventListener('keydown', handleKeyPress);
    };
  }, [input]);

  return (
    <div className="calculator">
      <div className="display">
        <input type="text" value={input} disabled />
      </div>
      <div className="buttons">
        <button className="button" onClick={() => handleButtonClick('1')}>1</button> {/* Unique class for button 1 */}
        <button onClick={() => handleButtonClick('2')}>2</button>
        <button onClick={() => handleButtonClick('3')}>3</button>
        <button onClick={() => handleButtonClick('+')}>+</button>
        <button onClick={() => handleButtonClick('4')}>4</button>
        <button onClick={() => handleButtonClick('5')}>5</button>
        <button onClick={() => handleButtonClick('6')}>6</button>
        <button onClick={() => handleButtonClick('-')}>-</button>
        <button onClick={() => handleButtonClick('7')}>7</button>
        <button onClick={() => handleButtonClick('8')}>8</button>
        <button onClick={() => handleButtonClick('9')}>9</button>
        <button onClick={() => handleButtonClick('*')}>*</button>
        <button onClick={() => handleButtonClick('0')}>0</button>
        <button className="clear" onClick={handleClear}>C</button>
        <button className="equals" onClick={handleEvaluate}>=</button>
        <button onClick={() => handleButtonClick('/')}>/</button>
      </div>
    </div>
  );
};

export default Calculator;
