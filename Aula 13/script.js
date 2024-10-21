var serieFavorita = "Stranger Things"
var serieInteressante = "The Walking Dead"
var serieMuitoBoa = "Game of Thrones"

// var series = ["Stranger Things", "The Walking Dead", "Breaking Bad"]

var series = [];
series[2] = "Breaking Bad"
series[0] = "Stranger Things"
series[3] = "Hora de Aventura"
series.push("Nova série no final do vetor")

var globodeouro = series[3];
// document.write(series[4]);

var series2 = series;
var series3 = series.splice()

var lista = [];
lista["series"] = ["Serie 1", "Serie 2", "Serie 3"];
lista["filmes"] = [];
lista["filmes"][0] = "Filme 1";
lista["filmes"][1] = "Filme 2";
//document.write(lista["series"][1]);
//document.write(lista["filmes"][1]);

var jogoDaVelha = [];
jogoDaVelha[0] = ["X", "O", "O"];
jogoDaVelha[1] = ["O", "X", "O"];
jogoDaVelha[2] = ["X", "O", "X"];
//document.write(jogoDaVelha["linha1"]);
//document.write(jogoDaVelha["linha2"]);
//document.write(jogoDaVelha[0][2]);

horario = 9

if(horario < 12) {
    //document.write("Bom dia!!");
} else if (horario <18){
    document.write("Boa tarde!!")
} else {
    document.write("Boa Noite!!")
}

pronome = "feminino";
if (pronome == "masculino"){
    document.write("Bem-vindo!!")
} else if (pronome == "feminino") {
    //document.write("Bem-vinda!!")
}

opcao = 1;
X = 30;
saldo = 300;

switch(opcao) {
    case 1:
        //document.write("Seu saldo é " + saldo);
        break;
    case 2:
        document.write("Adicionando " + X + " reais na sua conta");
        saldo += X;
        break;
    case 3:
        document.write("Saque de " + X + " reais");
        saldo -= X;
        break;
    default:
        document.write("Realizando o logout da sua conta");
}

/*
    > - maior que
    < - menor que
    >= - maior ou igual a
    <= - menor ou igual a

    == verifica se o valor x é igual ao y (if)
    != verifica se o valor x é diferente de y (if)

    === - verifica se os valores são iguais E se os tipos das variaveis também são 
    !== - verifica se os valores são diferentes E se os tipos das variaveis também são

    OPERADOR LOGICO
    && - as duas condiçoes precisam ser verdadeiras
    || - so uma condição precisa ser verdadeira
    ! - se a minha condição for verdadeira, ele me retorna falso

    OPERADOR ARITMETICO
    += - adiciona ao valor ja estabelecido
    -= - diminui do valor ja estabelecido
    x++ - adiciona 1
    x-- - diminui 1

    ** - potenciação
    % - resto da divisao
    / divisao
    * - multiplicação
*/

var x = 4;
x++; //5

var y = 3;
y--; //2

var resultado = x%y;
//document.write(resultado)

//ESTRUTURAS DE REPETIÇÃO

var numero = 0;
var resposta = 0;
while(numero != -1){
    resposta += numero;
    numero = prompt();
    numero = parseInt(numero);
}
//document.write(resposta);

var numero = -1;
var resultado = 0;
do{
    resultado = parseInt(resultado)
    resultado += numero;
    numero = prompt();
    numero = parseInt(numero);
} while (numero != -1)
    //document.write(resultado)

for (variavel; condicao ; incremento){

}
document.write("<table border=1>");
    for(var i=0;i<=5;i++){
        //document.write("<tr>");
            for(var j=0;j<=2;j++){
                //document.write("<td>");
                //document.write("DADOS DA TABELA");
                //document.write("</td>");
            }
        //document.write("</tr>");
    }
//document.write("</table>");