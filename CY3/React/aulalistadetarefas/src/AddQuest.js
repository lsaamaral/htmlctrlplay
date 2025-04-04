import "./App.css"

function AddQuest(props) {
    return (
        <div className="add-quest-container">
            <input placeholder="escreva a tarefa aqui" className="quest-input" />
            <button className="add-button" onClick={() => props.saveAddQuest("Comprar nova geladeira")}>+</button>
        </div>
    );
}

export default AddQuest;