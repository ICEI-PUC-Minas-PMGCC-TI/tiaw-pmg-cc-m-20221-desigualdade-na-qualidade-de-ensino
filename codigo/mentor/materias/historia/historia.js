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
