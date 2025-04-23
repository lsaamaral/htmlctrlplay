import { useState } from "react";
import './App.css';

export default function QuestItem(props) {
    const [title, setTitle] = useState(props.quest.title);
    const [checked, setChecked] = useState(false);
    const [editMode, setEditMode] = useState(false);
    const concluded = props.quest.status === "concluido";

    return (
    <div className="quest-item"
    data-testid="questItem"
    >
        <div className="quest-line">
            <input 
                disabled={concluded}
                type="checkbox"
                checked={checked}
                onChange={() => {
                    if (concluded) return;
                    else {
                        setChecked(!checked);
                        props.saveConcludedQuest(props.quest);
                    }
                }}
            />
            {editMode && !concluded ? (
                <input
                    type="text"
                    placeholder="quest"
                    defaultValue={title}
                    onChange={(e) => setTitle(e.target.value)}
                    data-testid="input"
                />
            ) : (
                <p className={concluded ? "line-through" : ""}
                data-testid="title"
                >{props.quest.title}</p>
            )}
        </div>
        {!concluded && (
            <div className="quest-buttons"
            data-testid="buttons">
                <button 
                    onClick={() => {if (editMode) props.saveEditQuest(props.quest, title);
                        setEditMode(!editMode);
                    }}
                    data-testid="editButton"
                >
                    Editar
                </button>
                <button onClick={() => {
                    if (concluded) return;
                    else props.saveDeleteQuest(props.quest)
                }}>Excluir</button>
            </div>
        )}
    </div>
    );
}