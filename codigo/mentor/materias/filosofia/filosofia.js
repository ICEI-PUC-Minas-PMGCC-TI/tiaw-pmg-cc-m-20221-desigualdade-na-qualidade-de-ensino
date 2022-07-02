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
