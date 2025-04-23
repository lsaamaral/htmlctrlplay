import {useState} from 'react';
import { Calculator } from './calculator';

function App() {
  const [texto, setTexto] = useState("");

  return (
    <div>
      <Calculator />
    </div>
  );
}

export default App;
