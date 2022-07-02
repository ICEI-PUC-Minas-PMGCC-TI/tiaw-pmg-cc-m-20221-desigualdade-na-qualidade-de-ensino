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


/* Geografia */
let problemas = document.getElementById('pro');
let proTxt = document.getElementById('pro-txt');

let fisica = document.getElementById('fis');
let fisTxt = document.getElementById('fis-txt');

let hidrografia = document.getElementById('hid');
let hidTxt = document.getElementById('hid-txt');

let urbanizacao = document.getElementById('urb');
let urbTxt = document.getElementById('urb-txt');

let populacao = document.getElementById('pop');
let popTxt = document.getElementById('pop-txt');

let geopolitica = document.getElementById('geo');
let geoTxt = document.getElementById('geo-txt');

problemas.addEventListener('click', () =>{
    if (problemas.checked) {
        proTxt.style.textDecoration = 'line-through';
    }else{
        proTxt.style.textDecoration = 'none';
    }
});

fisica.addEventListener('click', ()=>{
    if (fisica.checked) {
        fisTxt.style.textDecoration = 'line-through';
    }else{
        fisTxt.style.textDecoration = 'none';
    }
});

hidrografia.addEventListener('click', ()=>{
    if (hidrografia.checked) {
        hidTxt.style.textDecoration = 'line-through';
    }else{
        hidTxt.style.textDecoration = 'none';
    }
});

urbanizacao.addEventListener('click', ()=>{
    if (urbanizacao.checked) {
        urbTxt.style.textDecoration = 'line-through';
    }else{
        urbTxt.style.textDecoration = 'none';
    }
});

populacao.addEventListener('click', ()=>{
    if (populacao.checked) {
        popTxt.style.textDecoration = 'line-through';
    }else{
        popTxt.style.textDecoration = 'none';
    }
});

geopolitica.addEventListener('click', ()=>{
    if (geopolitica.checked) {
        geoTxt.style.textDecoration = 'line-through';
    }else{
        geoTxt.style.textDecoration = 'none';
    }
});



load()
function load(){

    if (problemas.checked) {
        proTxt.style.textDecoration = 'line-through';
    }else{
        proTxt.style.textDecoration = 'none';
    }
    
    if (fisica.checked) {
        fisTxt.style.textDecoration = 'line-through';
    }else{
        fisTxt.style.textDecoration = 'none';
    }

    if (hidrografia.checked) {
        hidTxt.style.textDecoration = 'line-through';
    }else{
        hidTxt.style.textDecoration = 'none';
    }

    if (urbanizacao.checked) {
        urbTxt.style.textDecoration = 'line-through';
    }else{
        urbTxt.style.textDecoration = 'none';
    }

    if (populacao.checked) {
        popTxt.style.textDecoration = 'line-through';
    }else{
        popTxt.style.textDecoration = 'none';
    }

    if (geopolitica.checked) {
        geoTxt.style.textDecoration = 'line-through';
    }else{
        geoTxt.style.textDecoration = 'none';
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