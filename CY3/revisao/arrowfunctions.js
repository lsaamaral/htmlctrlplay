function soma(a, b) {
    return a + b;
}
console.log(soma(3, 5));

const soma = (a, b) => a + b;
console.log(soma(3, 5));

const quadrado = x => x*x;
console.log(quadrado(4));

const multiplicar = (a, b) => {
    let resultado = a * b;
    return resultado;
}

function Pessoa() {
    this.idade = 0;
    
    setInterval(() => {
        this.idade++;
        console.log(this.idade);
    }, 1000);

}

const p = new Pessoa();