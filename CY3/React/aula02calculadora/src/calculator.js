import { useState } from "react";
import { evaluate } from "mathjs";

export function Calculator() {
    const [input, setInput] = useState("");
    const [result, setResult] = useState("");

    const handleClick = (value) => {
        setInput(input + value);
    }

    const handleCalculate = () => {
        try {
            if (!input) return;
            setResult(evaluate(input).toString());
        } catch (error) {
            setResult("Error");
        }
    };

    const handleClear = () => {
        setInput("");
         setResult("");
    };

    const handleDelete = () => setInput((prev) => prev.slice(0, -1));
    
    return (
        <div className="calculator">
            <div className="display">
                <span className="input">{input}</span>
                <div className="result-container">
                    <span>=</span>
                    { <span className="result">{result}</span> }
                </div>
            </div>
            <div className="buttons">
                <button className="operator" onClick={handleClear}>C</button>
                <button className="operator" onClick={() => handleClick("+")}>+</button>
                <button className="operator" onClick={() => handleClick("-")}>-</button>
                <button className="empty"></button>

                {[7, 8, 9].map((num) => (
                    <button key={num} onClick={() => handleClick(num.toString())}>{num}</button>
                ))}
                <button className="empty"></button>

                {[4, 5, 6].map((num) => (
                    <button key={num} onClick={() => handleClick(num.toString())}>{num}</button>
                ))}
                <button className="empty"></button>

                {[1, 2, 3].map((num) => (
                    <button key={num} onClick={() => handleClick(num.toString())}>{num}</button>
                ))}
                <button className="empty"></button>

                <button onClick={() => handleClick(".")}>.</button>
                <button onClick={() => handleClick("0")}>0</button>
                <button className="delete" onClick={handleDelete}>DEL</button>
                <button className="operator" onClick={handleCalculate}>=</button>
            </div>
        </div>

    );
}