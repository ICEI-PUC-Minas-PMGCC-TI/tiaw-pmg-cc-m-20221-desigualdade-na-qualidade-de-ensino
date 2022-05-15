
function verificacao(){
    let emailLogin = document.getElementById('loginEmail').value;
    let senhaLogin = document.getElementById('loginSenha').value;


    let listaUser = [];

    userValid = {
        email: '',
        senha: ''
    }
    
    listaUser = JSON.parse(localStorage.getItem('listaUser'));

    listaUser.forEach((item) => {
        if(emailLogin == item.emailCad && senhaLogin == item.senhaCad){
            userValid = {
                email: item.emailCad,
                senha: item.senhaCad
            }
        }
    });

    let token = Math.random().toString(16).substring(2);
    localStorage.setItem('token', token);

    if(emailLogin == userValid.email && senhaLogin == userValid.senha){
        alert('tudo certo');
        window.location.href = 'index.html';
    }
    else{
        alert('Email e/ou senha estão incorretos');
    }
}
