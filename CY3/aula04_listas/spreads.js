console.log("ola");

let numeros = [1, 2, 3];
let novosNumeros = [...numeros, 4, 5, 6];

console.log(novosNumeros);

let pessoa = {nome: "ana", idade: 25};
let pessoaComEndereco = {...pessoa, endereco: "Rua A, 12"};

console.log(pessoaComEndereco);

function soma(...numeros) {
    return numeros.reduce((total, num) => total + num, 0);
}

console.log(soma(1, 2, 3, 4, 5));

function combinarArrays(array1, array2) {
    return [...new Set([...array1, ...array2])];
}

let a = [1, 2, 3, 4];
let b = [3, 4, 5, 6];

console.log(combinarArrays(a, b));