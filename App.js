import React, { useState } from 'react';
import './App.css';

function App() {
  const [rowCount, setRowCount] = useState(0);
  const [inputText, setInputText] = useState('');
  const [tableData, setTableData] = useState([]);

  const handleGenerateTable = () => {
    const data = [];
    for (let i = 0; i < rowCount; i++) {
      data.push({ index: i, content: inputText });
    }
    setTableData(data);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Criar Tabela</h1>
        <label htmlFor="rowCount">Número de Linhas:</label>
        <input
          type="number"
          id="rowCount"
          value={rowCount}
          onChange={(e) => setRowCount(parseInt(e.target.value))}
        />
        <br />
        <label htmlFor="inputText">Texto para as Linhas:</label>
        <input
          type="text"
          id="inputText"
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
        />
        <br />
        <button onClick={handleGenerateTable}>Gerar Tabela</button>
        <br />
        {tableData.length > 0 && (
          <table>
            <thead>
              <tr>
                <th>Índice</th>
                <th>Conteúdo</th>
              </tr>
            </thead>
            <tbody>
              {tableData.map((row, index) => (
                <tr key={index}>
                  <td>{row.index}</td>
                  <td>{row.content}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </header>
    </div>
  );
}

export default App;
