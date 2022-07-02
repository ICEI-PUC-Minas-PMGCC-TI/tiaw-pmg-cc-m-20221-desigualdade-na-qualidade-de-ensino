let sidebar = document.querySelector(".sidebar");
let closeBtn = document.querySelector("#btn");
let log = document.querySelector(".profile");
let afazeres = document.querySelector("#afazeres");
let posts = document.querySelector(".posts");
let filhosSl = document.querySelectorAll("#sl > *");
let ul2 = document.querySelector('.lista');

closeBtn.addEventListener("click", () => {
  sidebar.classList.toggle("open");
  menuBtnChange();
});


function menuBtnChange() {
  if (sidebar.classList.contains("open")) {
    closeBtn.classList.replace("bx-menu", "bx-menu-alt-right");
  } else {
    closeBtn.classList.replace("bx-menu-alt-right", "bx-menu");
  }
}


if (localStorage.getItem('token') == null) { // verificação de login
  log.innerHTML = '<i class="bx bx-log-in" id="log" ></i>'
  afazeres.href = '../login-registro/login.html';
  log.addEventListener('click', () => {
    window.location.href = '../login-registro/login.html';
  })
} else { // logout
  log.innerHTML = '<i class="bx bx-log-out" id="log" ></i>'
  afazeres.href = '../planner/todolist.html';
  log.addEventListener('click', () => {
    localStorage.removeItem('token');
    localStorage.removeItem('userValid');
    window.location.href = '../index.html'
  })
}


dica = localStorage.getItem('dica');
array = JSON.parse(dica);

titulo = array[0];
img = array[1];
texto = array[2];
sinopse = array[3]

tt = document.getElementById('tt');
imagem = document.getElementById('img');
txt = document.getElementById('txt');
sin = document.getElementById('sin');

tt.innerHTML = titulo;
imagem.src = ('../' + img);
imagem.alt = titulo;
txt.innerHTML = texto;
sin.innerHTML = sinopse;