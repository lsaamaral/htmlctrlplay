let x=0;
function nomeFuncao(parametro1, parametro2) {
    return parametro1*parametro2;
}

x = nomeFuncao(4, 3);

console.log(x);
document.write(x);

function areaQuadrado(lado) {
    return lado*lado
}

/*
    EVENTOS DO MOUSE
        onclick -> acionado no clique do mouse
        ondbclick -> acionado com dois cliques no mouse 
        onmousedown -> acionado no clique do mouse (soltando ou não o botão)
        onmouseover -> acionado quando o mouse sobrepõe algum elemento
        onmouseout -> acionado quando o mouse sai da área de um elemento

    EVENTO DO TECLADO
        onkeydown -> o evento ocorre quando uma tecla é pressionada (soltando ou não)
        onkeypress -> evento ocorre quando a tecla é pressionada (soltando ou não) - nao vai capturar algumas teclas (ex:"alt", "ctrl", "esc", "shift")
        onkeyup -> o evento ocorre quando uma tecla é liberada

    EVENTOS DAS JANELAS
        onload -> acionado quando a página terminar de carregar
        onresize -> acionado quando a página ou a janela é redimensionada
*/

function mensagemQuadrado() {
    alert("Voce clicou no quadrado!!");
}

function mensagemTecla() {
    alert("uma tecla foi pressionada!")
}


/*
    Funções/Propriedades
    key -> retornar a tecla que foi pressionada
    altKey -> retorna se a tecla ALT foi pressionada
    ctrlKey -> retorna se a tecla CTRL foi pressionada
    shiftKey -> retorna se a tecla SHIFT foi pressionada
*/

function teclaPressionada(evento){
    let chave_evento = evento.key;
    document.getElementById("texto").innerHTML = "tecla pressionada: " + chave_evento;
}

function historiaFinn() {
    document.getElementById("historia").innerHTML = "Era uma vez o Finn..."
}

function historiaJake() {
    document.getElementById("historia").innerHTML = "Era uma vez o Jake..."
}