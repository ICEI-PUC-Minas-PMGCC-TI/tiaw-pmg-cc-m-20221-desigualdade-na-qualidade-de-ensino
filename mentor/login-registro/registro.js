function cadastrar() {
  
    let nome = document.getElementById('nome').value;
    let email = document.getElementById('email').value;
    let senha = document.getElementById('senha').value;
    let repeteSenha = document.getElementById('repeteSenha').value;
    let renda = document.getElementById("renda").value;
    let curso = document.getElementById("opcao").value;
    if (document.getElementById("m").checked) {
        sexo = "Masculino";
    }
    else if (document.getElementById("f").checked) {
        sexo = "Feminino";
    }
    else{
        sexo = "Outro";
    }
    let nascimento = document.getElementById("data").value;

    if (nome == "" || email == "" || senha == "" || repeteSenha == "") {
        alert("Preencha os dados.");
    }
    else if (nome.length < 3) {
        alert("Caracteres do nome são insuficientes, escreva um nome com 3 ou mais letras.");
    }
    else if(email.length <= 10){
        alert("Insira um E-mail válido.");
    }
    else{
        if (senha != repeteSenha) {
            alert("Senhas Diferentes!");
        }
        else if(senha.length < 8){
            alert("Senha deve conter pelo menos 8 caracteres.")
        }
        else{

            let listaUser = JSON.parse(localStorage.getItem('listaUser') || '[]')

            listaUser.push({
                nomeCad: nome,
                emailCad: email,
                senhaCad: senha,
                sexoCad: sexo,
                rendaCad: renda,
                nascimentoCad: nascimento,
                cursoCad: curso
            });

            localStorage.setItem('listaUser', JSON.stringify(listaUser));

            window.location.href = 'login.html';
        }
    }

}