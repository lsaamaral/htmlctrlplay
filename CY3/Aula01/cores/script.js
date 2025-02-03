function mudarCor(cor){
    document.body.style.backgroundColor = cor;
}

function corAleatoria(){
    const randomColor = '#' + parseInt((Math.random() * 0xFFF)).toString(16).padStart(3, '0');
    document.body.style.backgroundColor = randomColor;
}

function mudarParaEscolhida(){
    const colorInput = document.getElementById('corEscolhida').value;
    document.body.style.backgroundColor = colorInput;
}