var campo = [];
var mar = "mar";
var bomba = "bomba";
var exemplo = "exemplo";

campo[1] = [mar, bomba, mar, bomba, mar];
campo[2] = [mar, mar, mar, mar, mar];
campo[3] = [bomba, mar, mar, bomba, mar];
campo[4] = [exemplo, mar, mar, mar, bomba];

var tentativas = 0;
var acertouBomba = false;

function jogar() {
    if (tentativas < 3) {
        var linha = parseInt(document.getElementById("linha").value);
        var coluna = parseInt(document.getElementById("coluna").value);
    }

    if (linha >= 1 && linha <= 4 && coluna >= 1 && coluna <= 4) {
        tentativas++;
        if (campo[linha][coluna-1] == "bomba") {
            acertouBomba = True;
            document.write("Voce acertou uma bomba!! Game Over");
        } else {
            document.write("Nenhuma bomba aqui, pode continuar jogando");
        }
    } else {
        alert('Escolha uma linha entre 1 e 4');
    }

    //Se o jogador fizer 3 tentativas ou acertar nenhuma bomba
    if (tentativas === 3 && !acertouBomba) {
        document.write("Parabéns, você ganhou o jogo!!");
    }

}