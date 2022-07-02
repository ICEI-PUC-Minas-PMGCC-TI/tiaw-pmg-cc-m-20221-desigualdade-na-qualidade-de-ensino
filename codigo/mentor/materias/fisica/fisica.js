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

/* Física */
let acustica = document.getElementById('acu');
let acuTxt = document.getElementById('acu-txt');

let trabalho = document.getElementById('tra');
let traTxt = document.getElementById('tra-txt');

let resistores = document.getElementById('res');
let resTxt = document.getElementById('res-txt');

let dinamica = document.getElementById('din');
let dinTxt = document.getElementById('din-txt');

acustica.addEventListener('click', () =>{
    if (acustica.checked) {
        acuTxt.style.textDecoration = 'line-through';
    }else{
        acuTxt.style.textDecoration = 'none';
    }
});

trabalho.addEventListener('click', ()=>{
    if (trabalho.checked) {
        traTxt.style.textDecoration = 'line-through';
    }else{
        traTxt.style.textDecoration = 'none';
    }
});

resistores.addEventListener('click', ()=>{
    if (resistores.checked) {
        resTxt.style.textDecoration = 'line-through';
    }else{
        resTxt.style.textDecoration = 'none';
    }
});

dinamica.addEventListener('click', ()=>{
    if (dinamica.checked) {
        dinTxt.style.textDecoration = 'line-through';
    }else{
        dinTxt.style.textDecoration = 'none';
    }
});



load()
function load(){

    if (acustica.checked) {
        acuTxt.style.textDecoration = 'line-through';
    }else{
        acuTxt.style.textDecoration = 'none';
    }
    
    if (trabalho.checked) {
        traTxt.style.textDecoration = 'line-through';
    }else{
        traTxt.style.textDecoration = 'none';
    }

    if (resistores.checked) {
        resTxt.style.textDecoration = 'line-through';
    }else{
        resTxt.style.textDecoration = 'none';
    }

    if (dinamica.checked) {
        dinTxt.style.textDecoration = 'line-through';
    }else{
        dinTxt.style.textDecoration = 'none';
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