//#region Atributos
// Elementos de atributos
let forca = document.getElementById("forBase");
let destreza = document.getElementById("desBase");
let constituicao = document.getElementById("conBase");
let inteligencia = document.getElementById("intBase");
let sabedoria = document.getElementById("sabBase");
let carisma = document.getElementById("carBase");
//#endregion

//#region D20 
// Elemento números aleatórios após rodar o D20
let forD20 = document.getElementById("forD20");
let desD20 = document.getElementById("desD20");
let conD20 = document.getElementById("conD20");
let intD20 = document.getElementById("intD20");
let sabD20 = document.getElementById("sabD20");
let carD20 = document.getElementById("carD20");
//#endregion

//#region Modificadores
// Marcadores de modificadores
let forMod = document.getElementById("forMod");
let desMod = document.getElementById("desMod");
let conMod = document.getElementById("conMod");
let intMod = document.getElementById("intMod");
let sabMod = document.getElementById("sabMod");
let carMod = document.getElementById("carMod");
//#endregion

//#region Total Elemento
// Elementos Total da soma
let totalForca = document.getElementById('forTotal');
let totalDestreza = document.getElementById('desTotal');
let totalConstituicao = document.getElementById('conTotal');
let totalInteligencia = document.getElementById('intTotal');
let totalSabedoria = document.getElementById('sabTotal');
let totalCarisma = document.getElementById('carTotal');
//#endregion

//#region Botões
//-Botões da página
let botaoDado = document.getElementById("dado");
let calcularBotao = document.getElementById("calcular");
let resetarBotao = document.getElementById("resetar");
//#endregion

//#region Eventos
calcularBotao.addEventListener('click', calcular);
resetarBotao.addEventListener('click', recarregarPagina);
botaoDado.addEventListener('click', camposD20);
//#endregion


function gerarNumeroAleatorio()
{
    let array_numeros_aleatorios = [];

    for (let i = 0; i < 6; i++) {
        array_numeros_aleatorios[i] = Math.floor(20 * Math.random() + 1);
    }
    return array_numeros_aleatorios;
}

function camposD20()
{
    numeros_d20 = gerarNumeroAleatorio();
    
    forD20.value = numeros_d20[0];
    desD20.value = numeros_d20[1];
    conD20.value = numeros_d20[2];
    intD20.value = numeros_d20[3];
    sabD20.value = numeros_d20[4];
    carD20.value = numeros_d20[5];
    
    modificador(numeros_d20);
}

function modificador(numeros_aleatorios)
{
    numeros_d20 = numeros_aleatorios;
    let mod = []

    for (let i = 0; i < 6; i++)
    {
        valor = numeros_d20[i];
        if (valor > 15) {
            mod[i] = Math.round(1 + (valor / 1.2));
        } else if (valor > 7) {
            mod[i] = (0 + (valor / 1.2)).toFixed(0);
        } else {
            mod[i] = Math.round(-1 + (valor / 0.8));
        }
    }
    forMod.value = mod[0];
    desMod.value = mod[1];
    conMod.value = mod[2];
    intMod.value = mod[3];
    sabMod.value = mod[4];
    carMod.value = mod[5];
}

function calcular()
{
    totalForca.value = Number(forca.value) + Number(forMod.value);
    totalDestreza.value = Number(destreza.value) + Number(desMod.value);
    totalConstituicao.value = Number(constituicao.value) + Number(conMod.value);
    totalInteligencia.value = Number(inteligencia.value) + Number(intMod.value);
    totalSabedoria.value = Number(sabedoria.value) + Number(sabMod.value);
    totalCarisma.value = Number(carisma.value) + Number(carMod.value);
}

function recarregarPagina()
{
    window.location.reload(true);
}
