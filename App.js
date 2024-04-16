import React, { useState } from 'react';
import './App.css';

function App() {
  const [formData, setFormData] = useState({
    nome: '',
    endereco: '',
    telefone: '',
    email: ''
  });
  const [formErrors, setFormErrors] = useState({
    nome: '',
    endereco: '',
    telefone: '',
    email: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let errors = {};
    let formIsValid = true;

    // Verifica se os campos estão vazios
    for (let key in formData) {
      if (!formData[key]) {
        errors[key] = `${key.charAt(0).toUpperCase() + key.slice(1)} é obrigatório.`;
        formIsValid = false;
      }
    }

    // Se houver erros, atualiza o estado dos erros, caso contrário, envia o formulário
    if (!formIsValid) {
      setFormErrors(errors);
    } else {
      // Aqui você pode enviar os dados do formulário para onde desejar
      alert('Formulário enviado com sucesso!');
    }
  };

  return (
    <div className="App">
      <h1>Verificação de Formulário</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Nome:</label>
          <input type="text" name="nome" value={formData.nome} onChange={handleChange} />
          <span className="error">{formErrors.nome}</span>
        </div>
        <div>
          <label>Endereço:</label>
          <input type="text" name="endereco" value={formData.endereco} onChange={handleChange} />
          <span className="error">{formErrors.endereco}</span>
        </div>
        <div>
          <label>Telefone:</label>
          <input type="text" name="telefone" value={formData.telefone} onChange={handleChange} />
          <span className="error">{formErrors.telefone}</span>
        </div>
        <div>
          <label>Email:</label>
          <input type="email" name="email" value={formData.email} onChange={handleChange} />
          <span className="error">{formErrors.email}</span>
        </div>
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
}

export default App;
