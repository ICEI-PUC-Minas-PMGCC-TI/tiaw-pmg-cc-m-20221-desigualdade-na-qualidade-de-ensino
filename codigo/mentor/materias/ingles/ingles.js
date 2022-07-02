let interpretacao = document.getElementById('int');
let intTxt = document.getElementById('int-txt');
let estruturas = document.getElementById('est');
let estTxt = document.getElementById('est-txt');

interpretacao.addEventListener('click', () =>{
    if (interpretacao.checked) {
        intTxt.style.textDecoration = 'line-through';
    }else{
        intTxt.style.textDecoration = 'none';
    }
});

estruturas.addEventListener('click', ()=>{
    if (estruturas.checked) {
        estTxt.style.textDecoration = 'line-through';
    }else{
        estTxt.style.textDecoration = 'none';
    }
});

load()
function load(){

    if (interpretacao.checked) {
        intTxt.style.textDecoration = 'line-through';
    }else{
        intTxt.style.textDecoration = 'none';
    }
    
   if (estruturas.checked) {
        estTxt.style.textDecoration = 'line-through';
    }else{
        estTxt.style.textDecoration = 'none';
    }

}
