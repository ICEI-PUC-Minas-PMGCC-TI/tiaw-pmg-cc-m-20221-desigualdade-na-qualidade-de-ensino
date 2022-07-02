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
