import React, { Component } from 'react';

// Componente funcional - mostra imagem e a descricao dela
const ObraArte = ({obra, onThumnailClick}) => {
    return (
        <div className='obra-thumbail' onClick={() => onThumnailClick(obra)}>
            <img src={obra.imagem} alt={obra.titulo}></img>
            <h4>{obra.titulo}</h4>
        </div>
    );
};

// Componente de classe - controla a visualizacao e o toque
class GaleriaVirtual extends Component {
    constructor(props) {
        super(props);
        this.state = {
            obras: [
                {
                    id: 1,
                    titulo: 'Guernica',
                    artista: 'Pablo Picasso',
                    imagem: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjwqD0l_6CcxOvHe3U7E5z4yS0iX6BlvCB207O_DdJsdD-0SGrXdnixbynBek1bQSd91srg6FlSnsKF5QVD96JwHGdLyrTKApOd2GNwKZ5YKXUXUBoeGPgBdcDnBVOeFKX-Fz_dEqkwK5Y/s1600/07picasso_guernica2.jpg',
                    descricao: 'Guernica é uma pintura de Pablo Picasso que retrata o bombardeio da cidade de Guernica, na Espanha, durante a Guerra Civil Espanhola. É considerada uma das obras mais emblemáticas do artista espanhol.'
                },
                {
                    id: 2,
                    titulo: 'Os Girassóis',
                    artista: 'Van Gogh', 
                    imagem: 'https://guiadoestudante.abril.com.br/wp-content/uploads/sites/4/2023/04/os-girassois-van-gogh.jpg?quality=70&strip=info&w=1024',
                    descricao: 'Os Girassóis de Van Gogh são um símbolo universal de luz, crescimento e beleza, mesmo em tempos de escuridão e dificuldade. Eles representam a esperança e a perseverança, sempre virando-se em direção ao sol.'
                },
                {
                    id: 3,
                    titulo: 'Untitled',
                    artista: 'Basquiat', 
                    imagem: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROaVKCVuObHRL0AaaAKq6vD3M4n7M0eJwgpQ&s',
                    descricao: 'Sem título foi executado por Jean-Michel Basquiat em 1982, que é considerado seu ano mais valioso. Untitled retrata um crânio, composto de pinceladas pretas com rivuletos vermelhos, amarelos e brancos contra um fundo azul. '
                }
            ],
            obraAtual: null
        };
    }

    handleThumbnailClick = (obra) => {
        this.setState({obraAtual: obra});
    };

    handleClose = () => {
        this.setState({obraAtual: null});
    };

    handleNext = () => {
        const {obras, obraAtual} = this.state;
        const currentIndex = obras.findIndex(obra => obra.id === obraAtual.id);
        const prevIndex = (currentIndex + 1 + obras.length) % obras.length;
        this.setState({obraAtual: obras[prevIndex]});
    };

    handlePrev = () => {
        const {obras, obraAtual} = this.state;
        const currentIndex = obras.findIndex(obra => obra.id === obraAtual.id);
        const prevIndex = (currentIndex - 1 + obras.length) % obras.length;
        this.setState({obraAtual: obras[prevIndex]});
    };

    render() {
        const {obras, obraAtual} = this.state;

        return (
            <div className='galeria-virtual'>
                <h1>Galeria de Arte Virtual</h1>

                <div className='thumbnails-container'>
                    {obras.map(obra => (
                        <ObraArte
                            key={obra.id}
                            obra={obra}
                            onThumnailClick={this.handleThumbnailClick}
                        />
                    ))}
                </div>

                {obraAtual && (
                    <div className='obra-detalhe'>
                        <div className='obra-detalhe-content'>
                            <button className='close-btn' onClick={this.handleClose}>x</button>
                            <img src={obraAtual.imagem} alt={obraAtual.titulo}></img>
                            <div className='obra-info'>
                                <h2>{obraAtual.titulo}</h2>
                                <h3>{obraAtual.artista}</h3>
                                <p>{obraAtual.descricao}</p>
                            </div>
                            <div className='navigation-buttons'>
                                <button onClick={this.handlePrev}>Anterior</button>
                                <button onClick={this.handleNext}>Próxima</button>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        );
    }
}

export default GaleriaVirtual;