import './App.css';
import React from 'react';
import PhraseGenerator from './components/PhraseGenerator';

function App() {
  // parte logica
  return (
    //parte grafica
    <div className="app-container">
      <div className="card">
        <h1 className="title">Gerador de Frases</h1>
        <hr className="divider"></hr>
        <PhraseGenerator />
      </div>
    </div>
  );
}

export default App;
