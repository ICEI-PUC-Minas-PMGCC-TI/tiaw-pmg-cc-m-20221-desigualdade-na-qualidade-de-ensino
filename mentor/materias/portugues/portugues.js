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
    perfil.href = '../..login-registro/login.html';
    afazeres.href = '../../login-registro/login.html';
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

let interpretacao = document.getElementById('int');
let intTxt = document.getElementById('int-txt');

let literatura = document.getElementById('lit');
let litTxt = document.getElementById('lit-txt');

let generos = document.getElementById('gen');
let genTxt = document.getElementById('gen-txt');

let linguistica = document.getElementById('lin');
let linTxt = document.getElementById('lin-txt');

let gramatica = document.getElementById('gra');
let graTxt = document.getElementById('gra-txt');

interpretacao.addEventListener('click', () =>{
    if (interpretacao.checked) {
        intTxt.style.textDecoration = 'line-through';
    }else{
        intTxt.style.textDecoration = 'none';
    }
});

literatura.addEventListener('click', ()=>{
    if (literatura.checked) {
        litTxt.style.textDecoration = 'line-through';
    }else{
        litTxt.style.textDecoration = 'none';
    }
});

generos.addEventListener('click', ()=>{
    if (generos.checked) {
        genTxt.style.textDecoration = 'line-through';
    }else{
        genTxt.style.textDecoration = 'none';
    }
});

linguistica.addEventListener('click', ()=>{
    if (linguistica.checked) {
        linTxt.style.textDecoration = 'line-through';
    }else{
        linTxt.style.textDecoration = 'none';
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

    if (interpretacao.checked) {
        intTxt.style.textDecoration = 'line-through';
    }else{
        intTxt.style.textDecoration = 'none';
    }
    
    if (literatura.checked) {
        litTxt.style.textDecoration = 'line-through';
    }else{
        litTxt.style.textDecoration = 'none';
    }

    if (generos.checked) {
        genTxt.style.textDecoration = 'line-through';
    }else{
        genTxt.style.textDecoration = 'none';
    }

    if (linguistica.checked) {
        linTxt.style.textDecoration = 'line-through';
    }else{
        linTxt.style.textDecoration = 'none';
    }

    if (gramatica.checked) {
        graTxt.style.textDecoration = 'line-through';
    }else{
        graTxt.style.textDecoration = 'none';
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