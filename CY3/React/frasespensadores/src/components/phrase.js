import React from "react";

const Phrase = ({text, author, image}) => {
    return (
        <div>
            {text ? <p className="phrase-text">{text}</p> : <p>Nenhum personagem carregado ainda</p>}
            {author && <p className="phrase-author"><em>- {author}</em></p>}
            {image && <img src={image} alt={author} ></img>}
        </div>
    );
};
export default Phrase;