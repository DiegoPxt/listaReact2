import React, { useState } from 'react';
import './App.css';

function fibonacci(n) {
  if (n <= 1) return n;
  return fibonacci(n - 1) + fibonacci(n - 2);
}

function App() {
  const [inputValue, setInputValue] = useState('');
  const [fibResult, setFibResult] = useState(null);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleCalculateClick = () => {
    const n = parseInt(inputValue);
    if (!isNaN(n) && n >= 0) {
      const result = fibonacci(n);
      setFibResult(result);
    } else {
      alert('Por favor, insira um número inteiro não negativo.');
    }
  };

  return (
    <div className="App">
      <h1>Calculadora de Fibonacci</h1>
      <div>
        <label>Insira o valor de n:</label>
        <input type="number" value={inputValue} onChange={handleInputChange} />
        <button onClick={handleCalculateClick}>Calcular</button>
      </div>
      {fibResult !== null && (
        <div>
          <p>O {inputValue}-ésimo elemento da sequência de Fibonacci é:</p>
          <p>{fibResult}</p>
        </div>
      )}
    </div>
  );
}

export default App;
