dica = localStorage.getItem('dica');
array = JSON.parse(dica);

titulo = array[0];
img = array[1];
texto = array[2];
sinopse = array[3]

tt = document.getElementById('tt');
imagem = document.getElementById('img');
txt = document.getElementById('txt');
sin = document.getElementById('sin');

tt.innerHTML = titulo;
imagem.src = ('../' + img);
imagem.alt = titulo;
txt.innerHTML = texto;
sin.innerHTML = sinopse;