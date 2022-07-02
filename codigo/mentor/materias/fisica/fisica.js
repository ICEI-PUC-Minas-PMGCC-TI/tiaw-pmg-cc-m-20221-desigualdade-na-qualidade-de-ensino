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
