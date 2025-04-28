import React from "react";

const Phrase = ({text, author}) => {
    return (
        <div>
            <p className="phrase-text">{text}</p>
            <p className="phrase-author"><em>{author}</em></p>
        </div>
    );
}
export default Phrase;