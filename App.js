import React, { useState } from 'react';
import './App.css';

function App() {
  const [strings, setStrings] = useState([]);

  // Função para gerar strings com tamanhos diferentes
  const generateStrings = () => {
    const generatedStrings = [];
    for (let i = 0; i < 10; i++) {
      const randomLength = Math.floor(Math.random() * 20) + 5; // Tamanhos aleatórios entre 5 e 25
      const randomString = Math.random().toString(36).substring(2, randomLength + 2);
      generatedStrings.push(randomString);
    }
    setStrings(generatedStrings);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Strings com Tamanhos Diferentes</h1>
        <button onClick={generateStrings}>Gerar Strings</button>
        <div className="string-container">
          {strings.map((str, index) => (
            <div key={index} style={{ fontSize: `${Math.floor(Math.random() * 40) + 12}px` }}>
              {str}
            </div>
          ))}
        </div>
      </header>
    </div>
  );
}

export default App;
