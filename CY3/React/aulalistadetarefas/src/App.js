import './App.css';
import AddQuest from './AddQuest';
import QuestList from './QuestList';
import { useState, useEffect } from 'react';

function App() {

  const [quests, setQuests] = useState([]);
  // const [lastSaved, setLastSaved] = useState(null);

  // useEffect(() => {
  //   getQuests();
  //   const savedDate = localStorage.getItem("lastSaved");
  //   if (savedDate) {
  //     setLastSaved(savedDate);
  //   }
  // }, []);

  function saveAddQuest(title) {
    let auxQuests = quests;
    let id = 0;
    if (auxQuests.length) {
      id = auxQuests[auxQuests.length -1].id;
    }
    id++;

    const createdQuest = {
      id: id,
      title: title,
      status: "aberto",
      created_at: new Date(Date.now()).toUTCString(),
    };
    auxQuests.push(createdQuest);
    localStorage.setItem("quests", JSON.stringify(auxQuests));
    
    // const now = new Date().toUTCString();
    // localStorage.setItem("lastSaved", now);
    // setLastSaved(now);
    getQuests();
    console.log(title);
  }

  function getQuests() {
    setQuests(JSON.parse(window.localStorage.getItem("quests")));
  }

  return (
    <div className="container">
      <div className="card">
        <h1 className='title'>Lista de Tarefas</h1>
        <AddQuest saveAddQuest={saveAddQuest}></AddQuest>
        <QuestList quests={quests}/>
        {/* {lastSaved && (
          <p>
            Última atualização: {lastSaved}
          </p>
        )} */}
      </div>
    </div>
  );
}

export default App;
