import Janela from "./janela";

function Casa() {
    return (
        <div>
            <h1>Minha Casa feita no React</h1>
            <div>
                <h2>Sala de Estar</h2>
                <Janela largura="100px" altura="150px" cor="blue"/>
                <Janela largura="100px" altura="150px" cor="blue"/>
            </div>
            <div>
                <h2>Quarto</h2>
                <Janela largura="80px" altura="120px" cor="green"/>
                <Janela largura="80px" altura="120px" cor="green"/>
                <Janela largura="80px" altura="120px" cor="green"/>
            </div>
            <div>
                <h2>Cozinha</h2>
                <Janela largura="90px" altura="130px" cor="yellow"/>
            </div>
        </div>
    );
}

export default Casa;