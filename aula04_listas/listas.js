// let numeros = [1, 2, 3, 4, 5];
// let frutas = ["maça", "banana", "laranja"];
// let misturar = [23, "texto", true];

// console.log(frutas[0]);
// console.log(numeros[2]);

// frutas[1] = "morango";
// console.log(frutas);

// numeros.push(6);
// console.log(numeros);
// numeros.pop();
// console.log(numeros);
// numeros.unshift(0);
// console.log(numeros);
// numeros.shift();
// console.log(numeros);
// console.log(numeros.length);

// for (let i = 0; i < frutas.length; i++) {
//     console.log(frutas[i]);
// }

// frutas.forEach(fruta => console.log(fruta));

// let alunos = ["Ana", "Bruno", "Maria", "Matheus", "Julia"];
// alunos.push("Fernanda");
// alunos.shift();
// console.log(alunos);
// console.log(`O numero de alunos cadastrados é ${alunos.length}`);

//Sets 
// let conjunto = new Set([1, 2, 3, 4, 5]);
// let letras = new Set(["banana"]);
// console.log(conjunto);
// console.log(letras);

// conjunto.add(6);
// conjunto.delete(3);
// console.log(conjunto.has(2));
// console.log(conjunto.size);
// console.log(conjunto);

// for (let item of conjunto) {
//     console.log(item);
// }

// conjunto.forEach(valor => console.log(valor));

// let numerosunicos = new Set([1, 2, 3, 4, 5, 4, 5, 4, 78]);
// console.log(numerosunicos);

// permite repeticao - array(sim) - set(nao)
//ordem dos elementos - array(sim) - set(nao)
// indice para acesso - array(sim) - set(nao)

// exercicio 1
let cartas = ["dragao", "fada", "dragao", "mago", "fada", "guerreiro"];
let cartasUnicas = [...new Set(cartas)];
console.log(cartasUnicas);

// exercicio 2
let numeros = [4, 5, 6, 2, 4, 5, 7, 1, 2, 9, 10, 4];
let numerosSemDuplicar = [...new Set(numeros)];
numerosSemDuplicar.sort((a, b) => b - a);
console.log(numerosSemDuplicar);

// exercicio 3
let convidados = new Set();

convidados.add("Alice");
convidados.add("bob");
convidados.add("eduardo");
convidados.add("Alice");

console.log(convidados);
convidados.delete("Alice");