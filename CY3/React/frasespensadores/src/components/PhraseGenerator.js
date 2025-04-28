import Phrase from "./phrase";
import React, { useState } from "react";
import "../App.css";

const PhraseGenerator = () => {
    const [phrase, setPhrase] = useState({content:"erfefergvdbtgsdcscscscscsdcsdcsgbfgbfgbrbrbdcscsdctrbtr", author:"grtrtgrtgrtgtrgrt"});

    return (
        <div className="phrase-generator">
            <Phrase text={phrase.content} author={phrase.author}/>
            <button className="generate-button">Nova frase</button>
        </div>
    );
};

export default PhraseGenerator;