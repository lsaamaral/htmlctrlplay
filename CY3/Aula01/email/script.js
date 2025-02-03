function ValidarEntradas(){
    const nome = document.getElementById("nome").value;
    const email = document.getElementById("email").value;

    const nomeValido = /^[A-Za-z\s]+$/;
    const emailValido = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?$/;

    if(!nomeValido.test(nome)){
        alert("O nome não pode ter caractere especial");
        return;
    }

    if(!emailValido.test(email)){
        alert("O email precisa estar no formato exemplo@email.");
        return;
    }

    alert("Formulario enviado com sucesso!")

}