import React from 'react';
import './App.css';

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function generateRandomMatrix() {
  const matrix = [];
  for (let i = 0; i < 4; i++) {
    const row = [];
    for (let j = 0; j < 4; j++) {
      row.push(getRandomInt(1, 100)); // Gera um número inteiro aleatório entre 1 e 100
    }
    matrix.push(row);
  }
  return matrix;
}

function App() {
  const randomMatrix = generateRandomMatrix();

  return (
    <div className="App">
      <h1>Tabela de Números Aleatórios</h1>
      <table>
        <tbody>
          {randomMatrix.map((row, rowIndex) => (
            <tr key={rowIndex}>
              {row.map((number, columnIndex) => (
                <td key={columnIndex}>{number}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
