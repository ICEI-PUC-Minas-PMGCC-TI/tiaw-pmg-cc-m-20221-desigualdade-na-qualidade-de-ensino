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


/* Matemática */
let problemas = document.getElementById('pro');
let proTxt = document.getElementById('pro-txt');

let grandezas = document.getElementById('gra');
let graTxt = document.getElementById('gra-txt');

let financeira = document.getElementById('fin');
let finTxt = document.getElementById('fin-txt');

let funcoes = document.getElementById('fun');
let funTxt = document.getElementById('fun-txt');

problemas.addEventListener('click', () =>{
    if (problemas.checked) {
        proTxt.style.textDecoration = 'line-through';
    }else{
        proTxt.style.textDecoration = 'none';
    }
});

grandezas.addEventListener('click', ()=>{
    if (grandezas.checked) {
        graTxt.style.textDecoration = 'line-through';
    }else{
        graTxt.style.textDecoration = 'none';
    }
});

financeira.addEventListener('click', ()=>{
    if (financeira.checked) {
        finTxt.style.textDecoration = 'line-through';
    }else{
        finTxt.style.textDecoration = 'none';
    }
});

funcoes.addEventListener('click', ()=>{
    if (funcoes.checked) {
        funTxt.style.textDecoration = 'line-through';
    }else{
        funTxt.style.textDecoration = 'none';
    }
});



load()
function load(){

    if (problemas.checked) {
        proTxt.style.textDecoration = 'line-through';
    }else{
        proTxt.style.textDecoration = 'none';
    }
    
    if (grandezas.checked) {
        graTxt.style.textDecoration = 'line-through';
    }else{
        graTxt.style.textDecoration = 'none';
    }

    if (financeira.checked) {
        finTxt.style.textDecoration = 'line-through';
    }else{
        finTxt.style.textDecoration = 'none';
    }

    if (funcoes.checked) {
        funTxt.style.textDecoration = 'line-through';
    }else{
        funTxt.style.textDecoration = 'none';
    }

}

/* Modal Imagem */

function clique(img){

  var modal=document.getElementById("janelaModal");
  var modalImg=document.getElementById("imgModal");
  var btFechar=document.getElementsByClassName("fechar")[0];

  modal.style.display="block";
  modalImg.src=img.src;
  
  btFechar.onclick=function(){
    modal.style.display="none";
  }
}