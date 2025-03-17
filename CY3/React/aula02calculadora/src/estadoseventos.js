// ESTADOS -> FUNCAO
// import React, {useState} from 'react';

// function Counter() {
//     const [count, setCount] = useState(0);

//     const incrementar = () => {
//         setCount(count + 1);
//     }

//     return (
//         <div>
//             <h1>Contador: {count}</h1>
//             <button onClick={incrementar}>Incrementar</button>
//         </div>
//     );
// }

// export default Counter

// ESTADOS -> CLASSES
//import React from "react";

// export default class Counter extends React.Component {
//     constructor() {
//         super();
//         this.state = { count: 0};
//     }
//     render() {
//         return (
//             <div>
//                 <h1>Estado: {this.state.count}</h1>
//             </div>
//         );
//     }
// }

// EVENTOS -> FUNCOES
//import React from "react";
// function ClickButton() {
//     function handleClick(param) {
//         alert("Botao clicado com parametro: " + param);
//     }

//     return <button onClick={handleClick("meu parametro")}>Clique aqui</button>;
// }
// export default ClickButton;

// EVENTOS -> CLASSES
// import React from 'react';

// export class ClickButton extends React.Component {
//     constructor() {
//         super();
//         this.handleClick = this.handleClick.bind(this);
//     }

//     handleClick() {
//         alert("Botao clicado!!");
//     }

//     render() {
//         return <button onClick={this.handleClick}>Clique aqui</button>
//     }
// }

// export class ClickButton extends React.Component {
//     handleClick = (param) => {
//         alert("Botao clicado com parametro: " + param);
//     }

//     render() {
//         return <button onClick={this.handleClick('meu parametro')}>Clique aqui</button>
//     }
// }

// BOTAO DE INCREMENTAR COM CLASSES

// import React from "react";

// export class Contador extends React.Component {
//     constructor() {
//         super();
//         this.state = {
//             count: 0,
//         };
//     }

//     incrementar = () => {
//         this.setState((prev) => ({
//             count: prev.count + 1,
//         }));
//     };

//     render() {
//         return (
//             <div>
//                 <h1>Contador: {this.state.count}</h1>
//                 <button onClick={this.incrementar}>Incrementar</button>
//             </div>
//         )
//     }
// }