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
