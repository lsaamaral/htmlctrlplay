import React, {useState} from "react";

const InputControlado = () => {
    const [inputValue, setInputValue] = useState("");
    const [displayedValue, setDisplayedValue] = useState("");

    return (
        <div>
            <input type="text" value={inputValue} onChange={(e) => setInputValue(e.target.value)} placeholder="Digite algo aqui"></input>
            <button onClick={() => setDisplayedValue(inputValue)}>Exibir</button>
            <p>{displayedValue}</p>
        </div>
    )
}

export default InputControlado;