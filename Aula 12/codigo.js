var numero = 1;
var Numero = 2;
document.write(numero + Numero);

//Uma declaracao
var x;
var y;
var z;

var a, b, c;

var alfa = 0, beta = 100;

var idade = null;
var maisvelho = 3 * idade; // Mais velho teria o valor de NaN, porque a idade é undefined

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
var num = -10;
//numero com ponto flutuante
var numeroFracionado = 7.3;
//boolean 
var teste = true;
//string
var texto = "Coloca aqui o seu texto";
document.write(typeof(teste));

var nome = prompt();
document.write("<h1> Bem vindo(a) " + nome + " ! </h1>");

/* 
    Modulp % - resto da divisao - 12%5= 2
    negação -  - x=3, -x retornará -3
    adição + - converter o operando em um número sempre que possível - + "3" retorna 3. + true retorna 1
*/

var texto1 = prompt("Digite um numero: ");
var texto2 = prompt("Digite outro número: ");
var numero1 = parseInt(texto1);
var numero2 = parseInt(texto2);
document.write(texto1+texto2);
document.write("<br>");
document.write(numero1+numero2);

var num1 = 10;
var tex1 = num1.toString();