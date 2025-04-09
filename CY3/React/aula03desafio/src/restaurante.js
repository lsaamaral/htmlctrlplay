import React, { useState} from "react";

const Prato = ({id, nome, imagem, avaliacoes, onEnviarFeedback}) => {
    const [comentario, setComentario] = useState('');
    const [nota, setNota] = useState(1);

    const handleSubmit = (e) => {
        e.preventDefault();
        onEnviarFeedback(id, {comentario, nota});
        setComentario('');
        setNota(1);
    }

    return (
        <div>
            <h2>{nome}</h2>
            <img src={imagem} alt={nome}></img>

            <form onSubmit={handleSubmit}>
                <textarea value={comentario} placeholder="Deixe o seu comentário" onChange={(e) => setComentario(e.target.value)}  required></textarea>
                <div>
                    <label>Nota: </label>
                    <select value={nota} onChange={(e) => setNota(parseInt(e.target.value))}>
                        {[1, 2, 3, 4, 5].map((num) => (
                            <option key={num} value={num}>{num}</option>
                        ))}
                    </select>
                </div>
                <button type="submit">
                    Enviar Feedback
                </button>
            </form>

            <div>
                <h3>Avaliações: </h3>
                {avaliacoes.length === 0 && <p>Sem avaliacoes para esse prato ainda.</p>}
                <ul>
                    {avaliacoes.map((av, index) => (
                        <li key={index}><strong>{av.nota}/5:</strong> {av.comentario}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

class SistemaFeedback extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            pratos: [
                {id: 1, nome: "Feijoada", imagem: "", avaliacoes: []},
                {id: 2, nome: "Churrasco", imagem: "", avaliacoes: []},
                {id: 3, nome: "Sorvete", imagem: "", avaliacoes: []},
            ],
        };
    }

    // handleEnviarFeedback = (pratoId, feedback) => {
    //     this.setState((prevState) => ({
    //         pratos: prevState.pratos.map((prato) => 
    //         prato.id === pratoId
    //             ? { ...prato, avalia}
    //     )
    //     }))
    // }

    render() {
        return(
            <div>...</div>
        );
    }
}

export default SistemaFeedback;