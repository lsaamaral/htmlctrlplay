//Elementos de atributos
let FORCA = document.getElementById("forBase");
let DESTREZA = document.getElementById("desBase");
let CONSTITUICAO = document.getElementById("conBase");
let INTELIGENCIA = document.getElementById("intBase");
let SABEDORIA = document.getElementById("sabBase");
let CARISMA = document.getElementById("carBase");

//Elementos de numero aleatorio depois de rodar o D20
let forD20 = document.getElementById("forD20");
let desD20 = document.getElementById("desD20");
let conD20 = document.getElementById("conD20");
let intD20 = document.getElementById("intD20");
let sabD20 = document.getElementById("sabD20");
let carD20 = document.getElementById("carD20");

// Marcadores de modificadores
let forMod = document.getElementById("forMod");
let desMod = document.getElementById("desMod");
let conMod = document.getElementById("conMod");
let intMod = document.getElementById("intMod");
let sabMod = document.getElementById("sabMod");
let carMod = document.getElementById("carMod");

//Elementos Total da soma
let totalForca = document.getElementById("forTotal");
let totalDestreza = document.getElementById("desTotal");
let totalConstituicao = document.getElementById("conTotal");
let totalInteligencia = document.getElementById("intTotal");
let totalSabedoria = document.getElementById("sabTotal");
let totalCarisma = document.getElementById("carTotal");

//Variaveis dos Botoes
let botaoCalcular = document.getElementById("calcular");
let botaoDado = document.getElementById("dado");
let botaoResetar = document.getElementById("resetar");

//Eventos
botaoResetar.addEventListener('click', recarregarPagina);
botaoCalcular.addEventListener('click', calcular);
botaoDado.addEventListener('click', camposD20);

//Gera os numeros do D20 em uma lista
function gerarNumeroAleatorio() {
    let array_numeros_aleatorios = [];

    for(let i = 0; i<6; i++){
        array_numeros_aleatorios[i] = Math.floor(20 * Math.random() + 1);
    }
    return array_numeros_aleatorios;
}

//Armazena os valores de D20 nas variaveis
function camposD20() {
    numeros_d20 = gerarNumeroAleatorio();

    forD20.value = numeros_d20[0];
    desD20.value = numeros_d20[1];
    conD20.value = numeros_d20[2];
    intD20.value = numeros_d20[3];
    sabD20.value = numeros_d20[4];
    carD20.value = numeros_d20[5];

    modificador(numeros_d20);
}

//Calcula o modificador com base no D20
function modificador(numeros_aleatorios) {
    numeros_d20 = numeros_aleatorios;
    let mod = [];

    for(let i = 0; i<6 ; i++){
        valor = numeros_d20[i];
        // Pode ser calculado da forma que o mestre do rpg quiser
        if (valor > 15){
            mod[i] = Math.round(1 + (valor / 1.2));
        } else if (valor > 7) {
            mod[i] = Math.round(0 + (valor / 1.2));
        } else {
            mod[i] = Math.round(-1 + (valor / 1.2));
        }
    }

    forMod.value = mod[0];
    desMod.value = mod[1];
    conMod.value = mod[2];
    intMod.value = mod[3];
    sabMod.value = mod[4];
    carMod.value = mod[5];
}

//Faz o calculo do valor final
function calcular() {
    totalForca.value = Number(FORCA.value) + Number(forMod.value);
    totalDestreza.value = Number(DESTREZA.value) + Number(desMod.value);
    totalConstituicao.value = Number(CONSTITUICAO.value) + Number(conMod.value);
    totalInteligencia.value = Number(INTELIGENCIA.value) + Number(intMod.value);
    totalSabedoria.value = Number(SABEDORIA.value) + Number(sabMod.value);
    totalCarisma.value = Number(CARISMA.value) + Number(carMod.value);
}

function recarregarPagina() {
    window.location.reload(true);
}