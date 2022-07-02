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


/* História */
let segundo = document.getElementById('seg');
let segTxt = document.getElementById('seg-txt');

let era = document.getElementById('era');
let eraTxt = document.getElementById('era-txt');

let ditadura = document.getElementById('dit');
let ditTxt = document.getElementById('dit-txt');

let antiguidade = document.getElementById('ant');
let antTxt = document.getElementById('ant-txt');

let neocolonialismo = document.getElementById('neo');
let neoTxt = document.getElementById('neo-txt');

let independencia = document.getElementById('ind');
let indTxt = document.getElementById('ind-txt');

segundo.addEventListener('click', () =>{
    if (segundo.checked) {
        segTxt.style.textDecoration = 'line-through';
    }else{
        segTxt.style.textDecoration = 'none';
    }
});

era.addEventListener('click', ()=>{
    if (era.checked) {
        eraTxt.style.textDecoration = 'line-through';
    }else{
        eraTxt.style.textDecoration = 'none';
    }
});

ditadura.addEventListener('click', ()=>{
    if (ditadura.checked) {
        ditTxt.style.textDecoration = 'line-through';
    }else{
        ditTxt.style.textDecoration = 'none';
    }
});

antiguidade.addEventListener('click', ()=>{
    if (antiguidade.checked) {
        antTxt.style.textDecoration = 'line-through';
    }else{
        antTxt.style.textDecoration = 'none';
    }
});

neocolonialismo.addEventListener('click', ()=>{
    if (neocolonialismo.checked) {
        neoTxt.style.textDecoration = 'line-through';
    }else{
        neoTxt.style.textDecoration = 'none';
    }
});

independencia.addEventListener('click', ()=>{
    if (independencia.checked) {
        indTxt.style.textDecoration = 'line-through';
    }else{
        indTxt.style.textDecoration = 'none';
    }
});



load()
function load(){

    if (segundo.checked) {
        segTxt.style.textDecoration = 'line-through';
    }else{
        segTxt.style.textDecoration = 'none';
    }
    
    if (era.checked) {
        eraTxt.style.textDecoration = 'line-through';
    }else{
        eraTxt.style.textDecoration = 'none';
    }

    if (ditadura.checked) {
        ditTxt.style.textDecoration = 'line-through';
    }else{
        ditTxt.style.textDecoration = 'none';
    }

    if (antiguidade.checked) {
        antTxt.style.textDecoration = 'line-through';
    }else{
        antTxt.style.textDecoration = 'none';
    }

    if (neocolonialismo.checked) {
        neoTxt.style.textDecoration = 'line-through';
    }else{
        neoTxt.style.textDecoration = 'none';
    }

    if (independencia.checked) {
        indTxt.style.textDecoration = 'line-through';
    }else{
        indTxt.style.textDecoration = 'none';
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