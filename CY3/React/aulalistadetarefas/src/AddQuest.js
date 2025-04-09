import "./App.css";
import { useState } from 'react';

function AddQuest(props) {
    const [title, setTitle] = useState();
    return (
        <div className="add-quest-container">
            <input placeholder="escreva a tarefa aqui" className="quest-input" onChange={(e) => setTitle(e.target.value)} />
            <button className="add-button" onClick={() => props.saveAddQuest(title)}>+</button>
        </div>
    );
}

export default AddQuest;