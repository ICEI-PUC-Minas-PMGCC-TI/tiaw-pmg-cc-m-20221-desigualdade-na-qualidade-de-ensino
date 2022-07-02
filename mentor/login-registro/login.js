function verificacao(){
    let emailLogin = document.getElementById('loginEmail').value;
    let senhaLogin = document.getElementById('loginSenha').value;


    let listaUser = [];

    userValid = {
        email: '',
        senha: ''
    }
    
    listaUser = JSON.parse(localStorage.getItem('listaUser'));
    var cont = 0;
    listaUser.forEach((item) => {
        if(emailLogin == item.emailCad && senhaLogin == item.senhaCad){
            userValid = {
                nome: item.nomeCad,
                email: item.emailCad,
                senha: item.senhaCad,
                sexo: item.sexoCad,
                curso: item.cursoCad,
                index: cont
            }
        }
        cont++;
    });
    localStorage.setItem('userValid', JSON.stringify(userValid));


    let token = Math.random().toString(16).substring(2);
    localStorage.setItem('token', token);

    if(emailLogin == userValid.email && senhaLogin == userValid.senha){
        window.location.href = '../../index.html';
    }
    else{
        alert('Email e/ou senha estão incorretos');
    }
}
