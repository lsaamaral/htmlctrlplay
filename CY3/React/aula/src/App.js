import {useState} from 'react';

function App() {
  const [texto, setTexto] = useState("");

  return (
    <div>
      <h1>Digite algo: </h1>
      <input  type="text" value={texto} onChange={(e) => setTexto(e.target.value)}/>
      <p>Voce digitou {texto}</p>
    </div>
  );
}

export default App;
