let texto = document.getElementById('texto');
let txt = document.getElementById('texto-txt');

let gramatica = document.getElementById('gra');
let graTxt = document.getElementById('gra-txt');

texto.addEventListener('click', () =>{
    if (texto.checked) {
        txt.style.textDecoration = 'line-through';
    }else{
        txt.style.textDecoration = 'none';
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

    if (texto.checked) {
        txt.style.textDecoration = 'line-through';
    }else{
        txt.style.textDecoration = 'none';
    }


    if (gramatica.checked) {
        graTxt.style.textDecoration = 'line-through';
    }else{
        graTxt.style.textDecoration = 'none';
    }
}
