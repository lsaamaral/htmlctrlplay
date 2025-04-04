import './App.css';
import AddQuest from './AddQuest';

function App() {

  function saveAddQuest(title) {
    console.log(title);
  }

  return (
    <div className="container">
      <div className="card">
        <h1 className='title'>Lista de Tarefas</h1>
        <AddQuest saveAddQuest={saveAddQuest}></AddQuest>
      </div>
    </div>
  );
}

export default App;
