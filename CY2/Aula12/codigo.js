let numero = 1;
let Numero = 2;
document.write(numero + Numero);

//Uma declaracao
let x;
let y;
let z;

let a, b, c;

let alfa = 0, beta = 100;

let idade = null;
let maisvelho = 3 * idade; // Mais velho teria o valor de NaN, porque a idade é undefined

//Declaração implícita
nome = "Isabella";

// comentario de uma linha

/*
    Comentario de mais de uma linha

    Tipo Number - valores de número
    string - texto, aspas simples ou duplas
    boolean - true (verdadeiro) ou false (falso)
    null - 0
    undefined - NaN

*/

//número inteiro
let num = -10;
//numero com ponto flutuante
let numeroFracionado = 7.3;
//boolean 
let teste = true;
//string
let texto = "Coloca aqui o seu texto";
document.write(typeof(teste));

let nome = prompt();
document.write("<h1> Bem vindo(a) " + nome + " ! </h1>");

/* 
    Modulp % - resto da divisao - 12%5= 2
    negação -  - x=3, -x retornará -3
    adição + - converter o operando em um número sempre que possível - + "3" retorna 3. + true retorna 1
*/

let texto1 = prompt("Digite um numero: ");
let texto2 = prompt("Digite outro número: ");
let numero1 = parseInt(texto1);
let numero2 = parseInt(texto2);
document.write(texto1+texto2);
document.write("<br>");
document.write(numero1+numero2);

let num1 = 10;
let tex1 = num1.toString();