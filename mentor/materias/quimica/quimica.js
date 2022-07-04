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
      window.location.href = '../../../index.html'
    })
  }


/* Química */
let ligacoes = document.getElementById('lig');
let ligTxt = document.getElementById('lig-txt');

let organica = document.getElementById('org');
let orgTxt = document.getElementById('org-txt');

let eletroquimica = document.getElementById('ele');
let eleTxt = document.getElementById('ele-txt');

let solucoes = document.getElementById('sol');
let solTxt = document.getElementById('sol-txt');

ligacoes.addEventListener('click', () =>{
    if (ligacoes.checked) {
        ligTxt.style.textDecoration = 'line-through';
    }else{
        ligTxt.style.textDecoration = 'none';
    }
});

organica.addEventListener('click', ()=>{
    if (organica.checked) {
        orgTxt.style.textDecoration = 'line-through';
    }else{
        orgTxt.style.textDecoration = 'none';
    }
});

eletroquimica.addEventListener('click', ()=>{
    if (eletroquimica.checked) {
        eleTxt.style.textDecoration = 'line-through';
    }else{
        eleTxt.style.textDecoration = 'none';
    }
});

solucoes.addEventListener('click', ()=>{
    if (solucoes.checked) {
        solTxt.style.textDecoration = 'line-through';
    }else{
        solTxt.style.textDecoration = 'none';
    }
});



load()
function load(){

    if (ligacoes.checked) {
        ligTxt.style.textDecoration = 'line-through';
    }else{
        ligTxt.style.textDecoration = 'none';
    }
    
    if (organica.checked) {
        orgTxt.style.textDecoration = 'line-through';
    }else{
        orgTxt.style.textDecoration = 'none';
    }

    if (eletroquimica.checked) {
        eleTxt.style.textDecoration = 'line-through';
    }else{
        eleTxt.style.textDecoration = 'none';
    }

    if (solucoes.checked) {
        solTxt.style.textDecoration = 'line-through';
    }else{
        solTxt.style.textDecoration = 'none';
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