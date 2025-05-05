import Phrase from "./phrase";
import React, { useState } from "react";
import "../App.css";
import axios from "axios";

const PhraseGenerator = () => {
    const [phrase, setPhrase] = useState({content:"", author:"", image:""});
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const getRandomPhrase = async() => {
        try {
            setLoading(true);
            setError(null);
            const response = await axios.get("https://rickandmortyapi.com/api/character");
            const data = response.data.results;

            const randomIndex = Math.floor(Math.random() * data.length);
            const randomCharacter = data[randomIndex];

            setPhrase({
                content: `Nome: ${randomCharacter.name} - Status: ${randomCharacter.status} - Especie: ${randomCharacter.species}`,
                author: "Rick and Morty API",
                image: randomCharacter.image,
            });
            console.log("personagem sorteado", randomCharacter);
        } catch (error) {
            setError("Erro ao buscar um personagem.");
            console.error("Erro ao buscar um personagem: ", error);
        } finally {
            setLoading(false);
        }
    }

    

    if (loading) {
        return (
            <div className="loading-container">
                <p className="loading-text">Loading...</p>
            </div>
        );
    }

    if (error) {
        return (
            <div className="error-container">
                <p className="error-text">{error}</p>
            </div>
        );
    }

    return (
        <div className="phrase-generator">
            <Phrase text={phrase.content} author={phrase.author} image={phrase.image}/>
            <button className="generate-button" onClick={getRandomPhrase}>Novo ser</button>
        </div>
    );
};

export default PhraseGenerator;