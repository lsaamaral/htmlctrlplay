import './App.css';
import AddQuest from './AddQuest';
import QuestList from './QuestList';
import { useState, useEffect } from 'react';

function App() {

  const localQuests = JSON.parse(window.localStorage.getItem("quests")) || [];
  const [quests, setQuests] = useState(localQuests);
  // const [lastSaved, setLastSaved] = useState(null);

  // useEffect(() => {
  //   getQuests();
  //   const savedDate = localStorage.getItem("lastSaved");
  //   if (savedDate) {
  //     setLastSaved(savedDate);
  //   }
  // }, []);

  const concludedQuests = quests.filter(q => q.status === "concluido");
  const notConcludedQuests = quests.filter(q => q.status === "aberto");

  function saveEditQuest(quest, title) {
    let auxQuests = quests;
    const editedQuest = {...quest, title: title || quest.title};

    const index = auxQuests.findIndex(q => q.id === editedQuest.id);
    auxQuests.splice(index, 1, editedQuest);

    localStorage.setItem("quests", JSON.stringify(auxQuests));
    getQuests();
  }

  function saveConcludedQuest(quest) {
    let auxQuests = quests;
    const editedQuest = {
      id: quest.id,
      title: quest.title,
      status: "concluido",
      created_at: quest.created_at,
    };
    
    const findQuestPosition = auxQuests.findIndex(
      (quest) => quest.id === editedQuest.id
    );
    
    auxQuests.splice(findQuestPosition, 1, editedQuest);

    localStorage.setItem("quests", JSON.stringify(auxQuests));
    getQuests();
  }

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

  function saveDeleteQuest(quest) {
    let auxQuests = quests;

    const filterAuxQuests = auxQuests.filter(
      (auxQuest) => auxQuest.id !== quest.id
    );

    localStorage.setItem("quests", JSON.stringify(filterAuxQuests));
    getQuests();
  }

  return (
    <div className="container">
      <div className="card">
        <h1 className='title'>Lista de Tarefas</h1>
        <AddQuest saveAddQuest={saveAddQuest}></AddQuest>
        <div className="section">
          <h2>Abertas</h2>
          <div className="task-list">
            <QuestList 
              quests={notConcludedQuests}
              saveEditQuest={saveEditQuest}
              saveConcludedQuest={saveConcludedQuest}
              saveDeleteQuest={saveDeleteQuest}
            />
          </div>
        </div>
        <div className="section">
          <h2>Concluídas</h2>
          <div className="task-list">
            <QuestList 
              quests = {concludedQuests}
              saveEditQuest = {saveEditQuest}
              saveConcludedQuest = {saveConcludedQuest}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
