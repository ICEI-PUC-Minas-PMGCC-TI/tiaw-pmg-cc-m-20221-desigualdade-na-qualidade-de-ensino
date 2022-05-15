if (localStorage.getItem('token') == null) {
    alert('Você precisa estar logado para acessar essa página.');
    window.location.href = 'login.html';
}

function logout() {
    localStorage.removeItem('token');
    window.location.href = 'login.html';
}

function addInfo() {
    pNome = document.getElementById('nome');
    pEmail = document.getElementById('email');
    pSexo = document.getElementById('sexo');
    pCurso = document.getElementById('curso');

    listaUser = JSON.parse(localStorage.getItem('listaUser'));

    pNome.innerHTML = listaUser[0].nomeCad;
    pEmail.innerHTML = listaUser[0].emailCad
    pSexo.innerHTML = listaUser[0].sexoCad
    pCurso.innerHTML = listaUser[0].cursoCad
}

