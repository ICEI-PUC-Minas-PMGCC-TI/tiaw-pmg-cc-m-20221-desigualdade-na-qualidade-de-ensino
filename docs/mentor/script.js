let sidebar = document.querySelector(".sidebar");
let closeBtn = document.querySelector("#btn");
let log = document.querySelector(".profile");
let afazeres = document.getElementById("afazeres");
let perfil = document.getElementById('perfil');
let posts = document.querySelector(".posts");
let filhosSl = document.querySelectorAll("#sl > *");
let ul2 = document.querySelector('.lista');

closeBtn.addEventListener("click", () => {
  sidebar.classList.toggle("open");
  menuBtnChange();
});


function menuBtnChange() {
  if (sidebar.classList.contains("open")) {
    closeBtn.classList.replace("bx-menu", "bx-menu-alt-right");
  } else {
    closeBtn.classList.replace("bx-menu-alt-right", "bx-menu");
  }
}
if (localStorage.getItem('token') == null) { // verificação de login
  log.innerHTML = `
  <ul>
    <li>
      <i class="bx bx-log-in" id="log" ></i>
      <span class="links_name">Login</span>
      <span class="tooltip">Login</span>
    </li>
  </ul>`
  afazeres.href = 'login-registro/login.html';
  perfil.href = 'login-registro/login.html';
  log.addEventListener('click', () => {
    window.location.href = 'login-registro/login.html';
  })
} else { // logout
  log.innerHTML = `
  <ul>
    <li>
      <i class="bx bx-log-out" id="log" ></i>
      <span class="links_name">Logout</span>
      <span class="tooltip">Logout</span>
    </li>
  </ul>`
  afazeres.href = 'planner/todolist.html';
  perfil.href = 'perfil/perfil.html';
  log.addEventListener('click', () => {
    localStorage.removeItem('token');
    localStorage.removeItem('userValid');
    window.location.reload();
  })
}

let arrayTitulo = ['Como Estudar Pelo YouTube', 'Técnica Pomodoro', 'Como fixar conteúdo Estudado'];
let arrayIMG = ['img/noticias/youtube.jpg', 'img/noticias/pomodoro.jpg', 'img/noticias/memorizar.jpg'];

let arraySinopse = [
  'Boa parte das pessoas tem uma concepção errada sobre o YouTube. A ideia de que na plataforma só tem youtuber que não quer estudar e faz vídeos fúteis que não agregam em nada já está mais que ultrapassada. Tem sim muitos canais ruins no YouTube. Mas também é possível aprender e até estudar pelo YouTube.',
  'Você sabia que a técnica pomodoro promete ajudar quem tem dificuldade em terminar as suas tarefas no prazo? Essa metodologia garante o fim desse ciclo vicioso e ainda aumentar sua produtividade. Trata-se de uma ferramenta simples e eficaz para que você gerencie o seu tempo',
  'Tem dificuldade para absorver o conteúdo? Se esquece do que aprendeu em pouco tempo? Não encontrou ainda um método que funcione para você? Se a resposta para pelo menos uma dessas perguntas é sim, é hora de mudar essa realidade e aprender de uma vez por todas como fixar na memória o conteúdo estudado!'
];

let arrayTexto = [
  `As palavras “”aprender”” e “”estudar”” geralmente são associadas aos estudos escolares. Mas, no YouTube, é possível aprender sobre temas que vão muito além de matérias do ensino médio.<br><br>
  Para pessoas que entendem inglês, o leque de opções cresce mais ainda. Dentre os temas mais variados, o primeiro é das já citadas matérias escolares, como matemática, química, geografia, história etc.<br>
  São muitos os canais sobre o assunto, como por exemplo o Matemática Rio, do professor Rafael Procópio. No entanto, cultura e curiosidades também são boas opções para aprender pela plataforma. Canais como o Manual do Mundo e o Nostalgia são dois canais com conteúdo de qualidade sobre essas vertentes.`,
  `A técnica se baseia na ideia de que dividindo o nosso fluxo de trabalho em blocos de concentração intensa, conseguimos melhorar a agilidade do cérebro e estimular nosso foco. Em outras palavras, melhoramos nossa gestão do tempo e ficamos mais eficientes. <br><br>
  Primeiramente, você deve fazer uma <a href="../planner/todolist.html">lista de tarefas</a> a serem desempenhadas durante o dia. Depois, basta dividir seu tempo em períodos de 25 minutos (chamados “pomodoros”) e trabalhar ininterruptamente em suas tarefas nesses períodos.<br><br>
  Quando o timer tocar (ao fim dos primeiros 25 minutos), faça um X nas tarefas concluídas ou anote o status de seu trabalho (50% concluído, por exemplo) e faça um breve intervalo de 5 minutos. Nessa pausa, aproveite para fazer outras coisas não relacionadas à tarefa (ir ao banheiro, ligar para um cliente, tomar um café, etc).<br><br>A cada quatro ciclos, faça uma pausa maior (entre 15 e 30 minutos) para descansar. Esses intervalos entres os pomodoros são fundamentais para “oxigenar o seu cérebro” e aumentar a agilidade mental. Além disso, vale lembrar que essas medidas de tempo são apenas as sugeridas no método clássico. Nada impede que você encontre o seu próprio equilíbrio e período de descanso ideal. `,
  `A primeira dica é revisar o conteúdo. Sempre que estudar, deixe um horário no final do dia para revisar os conteúdos estudados, e nos finais de semana, faça exercícios para fixar tudo que foi aprendido durante a semana. Quanto mais revisão, mais chance de fixar a matéria.<br><br>
  Outra dica é: sempre que puder, reveja os conteúdos. Faça uma leitura rápida sempre que esquecer de algo, utilize flash cards para fixar aqueles que não conseguiu memorizar e leia sempre que puder.<br>
  Faça exercícios sempre que acabar de estudar algo. Eles são fundamentais para verificar sua aprendizagem e fixar o conteúdo. Desse modo, faça exercícios ao fim da leitura e quantas vezes sentir necessidade durante a semana. Lembre-se: quanto mais revisões, mais próximo você estará da aprovação.`
];

let arrayTag = ['tipo1', 'tipo1', 'tipo3'];

addDicas();
function addDicas() { // adicionando dicas
  posts.innerHTML = '';

  for (let i = 0; i < arrayTitulo.length; i++) {
    const titulo = arrayTitulo[i];
    const img = arrayIMG[i];
    const sinopse = arraySinopse[i];
    const texto = arrayTexto[i];
    const tipo = arrayTag[i];

    div = document.createElement('div');
    div.classList.add('poster');
    div.classList.add(tipo);
    div.innerHTML = `
 
      <img src="${img}" alt="${titulo}">
      <div class="info">
          <h3>${titulo}</h3>
          
      </div>
      <div class="sinopse">
          <p>${sinopse}</p>
          <button id="${i}" class="saiba-mais">Saiba Mais</button>
      </div>
    `
    console.log(i)
    posts.appendChild(div);

    document.getElementById(i).addEventListener('click', () => { // abrir dicas
      let array = [];

      array.push(titulo);
      array.push(img);
      array.push(texto);
      array.push(sinopse);

      localStorage.dica = JSON.stringify(array);
      window.location.href = 'Dicas/dica.html'
    });

  }
}

for (let i = 0; i < filhosSl.length; i++) {
  filhosSl[i].addEventListener('click', () => {
    let select = document.querySelector("#sl");

    let tipo1 = document.querySelectorAll('.tipo1');

    let tipo2 = document.querySelectorAll('.tipo2');

    let tipo3 = document.querySelectorAll('.tipo3');

    if (select.value == 'tipo1') {

      if (tipo1.length > 0) {
        for (let i = 0; i < tipo1.length; i++) {
          tipo1[i].style.display = 'block';
        }
      }
      for (let i = 0; i < tipo2.length; i++) {
        tipo2[i].style.display = 'none';
      }
      for (let i = 0; i < tipo3.length; i++) {
        tipo3[i].style.display = 'none';
      }
    }

    else if (select.value == 'tipo2') {

      for (let i = 0; i < tipo1.length; i++) {
        tipo1[i].style.display = 'none';
      }
      if (tipo2.length > 0) {
        for (let i = 0; i < tipo2.length; i++) {
          tipo2[i].style.display = 'block';
        }
      }
      for (let i = 0; i < tipo3.length; i++) {
        tipo3[i].style.display = 'none';
      }
    }

    else if (select.value == 'tipo3') {

      for (let i = 0; i < tipo1.length; i++) {
        tipo1[i].style.display = 'none';
      }
      for (let i = 0; i < tipo2.length; i++) {
        tipo2[i].style.display = 'none';
      }
      if (tipo3.length > 0) {
        for (let i = 0; i < tipo3.length; i++) {
          tipo3[i].style.display = 'block';
        }
      }
    }
    else {

      for (let i = 0; i < tipo1.length; i++) {
        tipo1[i].style.display = 'block';
      }
      for (let i = 0; i < tipo2.length; i++) {
        tipo2[i].style.display = 'block';
      }
      for (let i = 0; i < tipo3.length; i++) {
        tipo3[i].style.display = 'block';
      }
    }

  })
}

addTarefas()
function addTarefas() {
  
  list = localStorage.getItem('todolist');
  todo = JSON.parse(list);
  if (todo == null) {
    if(localStorage.getItem('token') == null){
      li = document.createElement('li');
        li.innerHTML = `
        <div class="divLi">
          <div ><a href="login-registro/login.html">Logue</a> para ver a suas tarefas</div>
        </div>
      `
        ul2.appendChild(li);
    }else{
      li = document.createElement('li');
        li.innerHTML = `
        <div class="divLi">
          <div >Nenhuma tarefa pendente</div>
        </div>
      `
        ul2.appendChild(li);
    }

  }else{
    let cont = todo.length;
    if (localStorage.getItem('todolist') == null) {
        alert('a')
      }
    todo.forEach(element => {
      if (element.status == 'checked') {
        cont--;
      }
      
    });
    if(cont > 0){
      todo.forEach(element => {
        if (element.status != 'checked' ) {
            li = document.createElement('li');
            li.innerHTML = `
            <div class="divLi">
              <div >${element.item}</div>
            </div>
          `
            ul2.appendChild(li);
        }
      });
    }else{
        li = document.createElement('li');
        li.innerHTML = `
        <div class="divLi">
          <div >Nenhuma tarefa pendente</div>
        </div>
      `
        ul2.appendChild(li);
      }
  }
}


