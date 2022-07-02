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
