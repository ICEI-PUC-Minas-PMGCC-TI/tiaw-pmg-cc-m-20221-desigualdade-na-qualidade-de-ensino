if (localStorage.getItem('token') == null) {
    alert('Você precisa estar logado para acessar essa página.');
    window.location.href = 'login.html';
}

function logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('userValid');
    window.location.href = 'login.html';
}

function addInfo() {
    pNome = document.getElementById('nome');
    pEmail = document.getElementById('email');
    pSexo = document.getElementById('sexo');
    pCurso = document.getElementById('curso');

    userValid = JSON.parse(localStorage.getItem('userValid'));

    pNome.innerHTML = userValid.nome;
    pEmail.innerHTML = userValid.email;
    pSexo.innerHTML = userValid.sexo;
    pCurso.innerHTML = userValid.curso;
}

