let ecologia = document.getElementById('eco');
let ecoTxt = document.getElementById('eco-txt');

let genetica = document.getElementById('gen');
let genTxt = document.getElementById('gen-txt');

let evolucao = document.getElementById('evo');
let evoTxt = document.getElementById('evo-txt');

let citologia = document.getElementById('cit');
let citTxt = document.getElementById('cit-txt');

ecologia.addEventListener('click', () =>{
    if (ecologia.checked) {
        ecoTxt.style.textDecoration = 'line-through';
    }else{
        ecoTxt.style.textDecoration = 'none';
    }
});

genetica.addEventListener('click', ()=>{
    if (gen.checked) {
        genTxt.style.textDecoration = 'line-through';
    }else{
        genTxt.style.textDecoration = 'none';
    }
});

evolucao.addEventListener('click', ()=>{
    if (evolucao.checked) {
        evoTxt.style.textDecoration = 'line-through';
    }else{
        evoTxt.style.textDecoration = 'none';
    }
});

citologia.addEventListener('click', ()=>{
    if (citologia.checked) {
        citTxt.style.textDecoration = 'line-through';
    }else{
        citTxt.style.textDecoration = 'none';
    }
});



load()
function load(){

    if (ecologia.checked) {
        ecoTxt.style.textDecoration = 'line-through';
    }else{
        ecoTxt.style.textDecoration = 'none';
    }
    
    if (genetica.checked) {
        genTxt.style.textDecoration = 'line-through';
    }else{
        genTxt.style.textDecoration = 'none';
    }

    if (evolucao.checked) {
        evoTxt.style.textDecoration = 'line-through';
    }else{
        evoTxt.style.textDecoration = 'none';
    }

    if (citologia.checked) {
        citTxt.style.textDecoration = 'line-through';
    }else{
        citTxt.style.textDecoration = 'none';
    }

}
