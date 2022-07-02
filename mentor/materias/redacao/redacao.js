let sidebar = document.querySelector(".sidebar");
let closeBtn = document.querySelector("#btn");
let log = document.querySelector(".profile");
let perfil = document.getElementById('perfil');
let afazeres = document.querySelector("#afazeres");


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
  log.innerHTML = `
  <ul>
    <li>
      <i class="bx bx-log-in" id="log" ></i>
      <span class="links_name">Login</span>
      <span class="tooltip">Login</span>
    </li>
  </ul>`
  afazeres.href = '../../login-registro/login.html';
  perfil.href = '../..login-registro/login.html';
  log.addEventListener('click', () => {
    window.location.href = '../../login-registro/login.html';
  })
} else { // logout
  log.innerHTML = `
  <ul>
    <li>
      <i class="bx bx-log-out" id="log" ></i>
      <span class="links_name">Logout</span>
      <span class="tooltip">Logout</span>
    </li>
  </ul>`
  afazeres.href = '../../planner/todolist.html';
  perfil.href = '../../perfil/perfil.html';
  log.addEventListener('click', () => {
    localStorage.removeItem('token');
    localStorage.removeItem('userValid');
    window.location.href = '../../index.html'
  })
}

/* Redação */
let texto = document.getElementById('texto');
let txt = document.getElementById('texto-txt');

let gramatica = document.getElementById('gra');
let graTxt = document.getElementById('gra-txt');

texto.addEventListener('click', () =>{
    if (texto.checked) {
        txt.style.textDecoration = 'line-through';
    }else{
        txt.style.textDecoration = 'none';
    }
});

gramatica.addEventListener('click', ()=>{
    if (gramatica.checked) {
        graTxt.style.textDecoration = 'line-through';
    }else{
        graTxt.style.textDecoration = 'none';
    }
});



load()
function load(){

    if (texto.checked) {
        txt.style.textDecoration = 'line-through';
    }else{
        txt.style.textDecoration = 'none';
    }


    if (gramatica.checked) {
        graTxt.style.textDecoration = 'line-through';
    }else{
        graTxt.style.textDecoration = 'none';
    }
}
