let campo = [];
const mar = "mar";
const bomba = "bomba";

campo[1] = [mar, bomba, mar, bomba, mar];
campo[2] = [mar, mar, mar, mar, mar];
campo[3] = [bomba, mar, mar, bomba, mar];
campo[4] = [bomba, mar, mar, mar, bomba];

let tentativas = 0;
let acertouBomba = false;
//let jogadasFeitas = []; //Armazena jogadas

function jogar() {
    let linha = parseInt(document.getElementById("linha").value);
    let coluna = parseInt(document.getElementById("coluna").value);
    
    // Verificar se as coordenadas estão dentro dos limites corretos
    if (linha >= 1 && linha <= 4 && coluna >= 1 && coluna <= 5) {
        //let jogada = '${linha}-${coluna}';
        //if(jogadasFeitas.includes(jogada)){
        //    document.getElementById("resultado").innerHTML = "Você ja jogou nessa posição. Tente outra."
        //    return; //Impedir a jogada duplicada
        //}

        //jogadasFeitas.push(jogada);

        tentativas++;
        
        if (campo[linha][coluna - 1] == "bomba") { // Coluna é ajustada aqui (coluna - 1)
            acertouBomba = true;
            document.getElementById("resultado").innerHTML = "Você acertou uma bomba!! Game Over";
        } else {
            document.getElementById("resultado").innerHTML = "Nenhuma bomba aqui, pode continuar jogando";
        }
    } else {
        document.getElementById("resultado").innerHTML = 'Escolha uma linha entre 1 e 4, e uma coluna entre 1 e 5';
    }

    // Se o jogador fizer 3 tentativas sem acertar bomba, ele ganha
    if (tentativas == 3 && !acertouBomba) {
        document.getElementById("resultado").innerHTML = "Parabéns, você ganhou o jogo!!";
    }
}
