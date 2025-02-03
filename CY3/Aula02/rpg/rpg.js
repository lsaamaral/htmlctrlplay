function labirintoCondicional(acao){
    const resultado = document.getElementById("resultado");

    switch(acao){
        case 'esquerda':
            resultado.textContent = "Você encontrou um dragão terrível"
            break;
        case 'direita':
            resultado.textContent = "Você encontrou um baú do tesouro, mas ele está trancado"
            break;
        case 'frente':
            resultado.textContent = "Um buraco se abriu no chão e você caiu em um poço muito fundo"
            break;
        case 'voltar':
            resultado.textContent = "Uma porta mágica apareceu e você ganhou um animal de estimação"
            break;
    }
}