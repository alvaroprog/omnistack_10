import React, { useState, useEffect } from 'react';
import api from './services/api';

import './global.css';
import './app.css';
import './sidebar.css'; 
import './main.css';

import DevItem from './components/DevItem';
import DevForm from './components/DevForm';

// Componente: função que retorna algum conteúdo HTML, CSS, JS
// Estado: informação que será lida e atualizada pelo componente
// Propriedade: mesma coisa que atributos de uma tag HTML

function App() {

  const [devs, setDevs] = useState([]);

  useEffect(() => {
    async function loadDevs() {
      const response = await api.get('/devs');
      
      setDevs(response.data);
    }

    loadDevs();
  }, []);

  async function handleAddDev(data) {
    const response = await api.post('/devs', data);

    setDevs([...devs, response.data]);
  }

  return (
    <div id="app">
      <aside>
        <strong>Cadastrar</strong>
        <DevForm onSubmit={handleAddDev}/>
      </aside>
      
      <main>
        <ul>
          {devs.map(dev => (
            <DevItem key={dev._id} dev={dev}/>
          ))}
        </ul>
      </main>
    </div>
  );
}

export default App;
