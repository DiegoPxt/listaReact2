import React, { useState } from 'react';
import './App.css';

function fibonacci(n) {
  const sequence = [0, 1];
  for (let i = 2; i < n; i++) {
    sequence.push(sequence[i - 1] + sequence[i - 2]);
  }
  return sequence;
}

function App() {
  const [inputValue, setInputValue] = useState('');
  const [fibSequence, setFibSequence] = useState([]);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleCalculateClick = () => {
    const n = parseInt(inputValue);
    if (!isNaN(n) && n >= 0) {
      const sequence = fibonacci(n);
      setFibSequence(sequence);
    } else {
      alert('Por favor, insira um número inteiro não negativo.');
    }
  };

  return (
    <div className="App">
      <h1>Calculadora da Sequência de Fibonacci</h1>
      <div>
        <label>Insira o valor de n:</label>
        <input type="number" value={inputValue} onChange={handleInputChange} />
        <button onClick={handleCalculateClick}>Calcular</button>
      </div>
      {fibSequence.length > 0 && (
        <div>
          <h2>Sequência de Fibonacci com {inputValue} elementos:</h2>
          <table>
            <thead>
              <tr>
                <th>Índice</th>
                <th>Valor</th>
              </tr>
            </thead>
            <tbody>
              {fibSequence.map((num, index) => (
                <tr key={index}>
                  <td>{index}</td>
                  <td>{num}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

export default App;
