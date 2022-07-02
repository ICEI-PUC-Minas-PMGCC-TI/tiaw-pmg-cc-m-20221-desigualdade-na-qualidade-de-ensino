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
