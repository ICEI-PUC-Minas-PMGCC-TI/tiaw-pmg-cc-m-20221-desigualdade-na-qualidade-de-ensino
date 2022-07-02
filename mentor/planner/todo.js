let sidebar = document.querySelector(".sidebar");
let closeBtn = document.querySelector("#btn");
let log = document.querySelector(".profile");
let fotoUsuario = document.getElementById('fotoUsuario');

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

function addUsuario() {
    fotoUser = JSON.parse(localStorage.getItem('fotoUser'));

    const choosedFile = fotoUser.foto;

    if (choosedFile) {

        const reader = new FileReader();

        reader.addEventListener('load', function () {
            fotoUsuario.setAttribute('src', reader.result);
        
        });

        reader.readAsDataURL(choosedFile);
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
    log.addEventListener('click', () => {
        window.location.href = '../login-registro/login.html';
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
    log.addEventListener('click', () => {
        localStorage.removeItem('token');
        localStorage.removeItem('userValid');
        window.location.href = '../index.html';
    })
}

/* Planner */
const texto = document.querySelector('input')
const btnInsert = document.querySelector('.divInsert button')
const btnDeleteAll = document.querySelector('.header button')
const ul = document.querySelector('.ul-todolist')

var itensDB = []

btnDeleteAll.onclick = () => {
  itensDB = []
  updateDB()
}

texto.addEventListener('keypress', e => {
  if (e.key == 'Enter' && texto.value != '') {
    setItemDB()
  }
})

btnInsert.onclick = () => {
  if (texto.value != '') {
    setItemDB()
  }
}

function setItemDB() {
  if (itensDB.length >= 20) {
    alert('Limite máximo de 20 itens atingido!')
    return
  }

  itensDB.push({ 'item': texto.value, 'status': '' })
  updateDB()
}

function updateDB() {
  localStorage.setItem('todolist', JSON.stringify(itensDB))
  loadItens()
}

function loadItens() {
  ul.innerHTML = "";
  itensDB = JSON.parse(localStorage.getItem('todolist')) ?? []
  itensDB.forEach((item, i) => {
    insertItemTela(item.item, item.status, i)
  })
}

function insertItemTela(text, status, i) {
  const li = document.createElement('li')

  li.innerHTML = `
<div class="divLi">
  <input type="checkbox" ${status} data-i=${i} onchange="done(this, ${i});" />
  <span data-si=${i}>${text}</span>
  <button onclick="removeItem(${i})" data-i=${i}><i class='bx bx-trash'></i></button>
</div>
`
  ul.appendChild(li)

  if (status) {
    document.querySelector(`[data-si="${i}"]`).classList.add('line-through')
  } else {
    document.querySelector(`[data-si="${i}"]`).classList.remove('line-through')
  }

  texto.value = ''
}

function done(chk, i) {

  if (chk.checked) {
    itensDB[i].status = 'checked'
  } else {
    itensDB[i].status = ''
  }

  updateDB()
}

function removeItem(i) {
  itensDB.splice(i, 1)
  updateDB()
}

loadItens()