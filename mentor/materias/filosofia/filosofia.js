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


/* Filosofia */
let politica = document.getElementById('pol');
let polTxt = document.getElementById('pol-txt');

let moderna = document.getElementById('mod');
let modTxt = document.getElementById('mod-txt');

let antiga = document.getElementById('ant');
let antTxt = document.getElementById('ant-txt');

let contemporanea = document.getElementById('con');
let conTxt = document.getElementById('con-txt');

politica.addEventListener('click', () =>{
    if (politica.checked) {
        polTxt.style.textDecoration = 'line-through';
    }else{
        polTxt.style.textDecoration = 'none';
    }
});

moderna.addEventListener('click', ()=>{
    if (moderna.checked) {
        modTxt.style.textDecoration = 'line-through';
    }else{
        modTxt.style.textDecoration = 'none';
    }
});

antiga.addEventListener('click', ()=>{
    if (antiga.checked) {
        antTxt.style.textDecoration = 'line-through';
    }else{
        antTxt.style.textDecoration = 'none';
    }
});

contemporanea.addEventListener('click', ()=>{
    if (contemporanea.checked) {
        conTxt.style.textDecoration = 'line-through';
    }else{
        conTxt.style.textDecoration = 'none';
    }
});

load()
function load(){

    if (politica.checked) {
        polTxt.style.textDecoration = 'line-through';
    }else{
        polTxt.style.textDecoration = 'none';
    }
    
    if (moderna.checked) {
        modTxt.style.textDecoration = 'line-through';
    }else{
        modTxt.style.textDecoration = 'none';
    }

    if (antiga.checked) {
        antTxt.style.textDecoration = 'line-through';
    }else{
        antTxt.style.textDecoration = 'none';
    }

    if (contemporanea.checked) {
        conTxt.style.textDecoration = 'line-through';
    }else{
        conTxt.style.textDecoration = 'none';
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