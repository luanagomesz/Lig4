'use strict';

// ============================================================
// CONSTANTS AND GAME STATE
// ============================================================
const BOARD_COLUMNS = 7;
const BOARD_ROWS = 6;
const WIN_CONDITION = 4;
const ALERT_TIMEOUT = 2000;

// Game state
let counterDisco = 1;

// ============================================================
// UTILITY FUNCTIONS
// ============================================================

/**
 * Show a temporary alert message
 * @param {string} message - The message to display
 * @param {HTMLElement} container - The container element to append the alert to
 */
function showAlert(message, container) {
  const alert = document.createElement('span');
  alert.innerText = message;
  alert.setAttribute('id', 'alert');
  alert.addEventListener('click', function () {
    container.removeChild(alert);
  });
  container.appendChild(alert);
  setTimeout(() => {
    if (container.contains(alert)) {
      container.removeChild(alert);
    }
  }, ALERT_TIMEOUT);
}

// ============================================================
// MENU EVENT HANDLERS
// ============================================================
document.getElementById('jogar').addEventListener('click', function () {
  let interval = setInterval(iniciarjogo, 100);
  function iniciarjogo() {
    counterDisco = 1;
    document.getElementById('reset').style.display = 'block';
    document.getElementById('menu').style.display = 'none';
    document.getElementById('gameSpace').style.display = 'flex';
    document.getElementById('voltar').style.display = 'block';
    document.getElementById('header').style.fontSize = '40px';
    document.getElementById('header').style.paddingBottom = '2px';
    document.getElementById('header').style.paddingTop = '0px';
    clearInterval(interval);
  }
});

document
  .getElementById('buttonInstruções')
  .addEventListener('click', function () {
    let interval = setInterval(instruções, 100);
    function instruções() {
      document.getElementById('menu').style.display = 'none';
      document.getElementById('instruções').style.display = 'flex';
      document.getElementById('voltar').style.display = 'block';
      clearInterval(interval);
    }
  });

document.getElementById('voltar').addEventListener('click', function () {
  if (player1 == undefined) {
    showAlert('Escolha um Gatinho Player 1 😸', escolherJogadores);
  } else if (player2 == undefined) {
    showAlert('Escolha um Gatinho Player 2😸', escolherJogadores);
  } else {
    voltar();
    function voltar() {
      resetar();
      document.getElementById('vitoria').style.display = 'none';
      document.getElementById('vitoria').innerHTML = '';
      document.getElementById('reset').style.display = 'none';
      document.getElementById('menu').style.display = 'flex';
      document.getElementById('instruções').style.display = 'none';
      document.getElementById('gameSpace').style.display = 'none';
      document.getElementById('voltar').style.display = 'none';
      document.getElementById('header').style.fontSize = '80px';
      document.getElementById('header').style.paddingBottom = '15px';
      document.getElementById('header').style.paddingTop = '60px';
      document.getElementById('escolherJogadores').style.display = 'none';
      document.getElementById('header').style.marginBottom = '20px';
    }
  }
});

document.getElementById('jogadores').addEventListener('click', function () {
  let interval = setInterval(jogadores, 150);
  function jogadores() {
    document.getElementById('menu').style.display = 'none';
    document.getElementById('escolherJogadores').style.display = 'flex';
    document.getElementById('voltar').style.display = 'block';
    document.getElementById('header').style.marginBottom = '0px';
    clearInterval(interval);
  }
});

// ============================================================
// GAME BOARD INITIALIZATION
// ============================================================
game = document.getElementById('gameSpace');

// Create board dynamically
for (let i = 1; i <= BOARD_COLUMNS; i++) {
  let tabela = document.createElement('div');
  tabela.setAttribute('id', 'tabela' + i);
  tabela.setAttribute('class', 'tabelas');
  game.appendChild(tabela);
  for (let k = 1; k <= BOARD_ROWS; k++) {
    let cedula = document.createElement('div');
    cedula.setAttribute('class', 'cedula');
    document.getElementById('tabela' + i).appendChild(cedula);
  }
}

// Style board borders (rounded corners)
const filterarray = game.children;
filterarray[0].lastElementChild.style.borderRadius = '15px 0px 0px 0px';
filterarray[6].lastElementChild.style.borderRadius = '0px 15px 0px 0px';
filterarray[6].children[0].style.borderRadius = '0px 0px 15px 0px';
filterarray[0].children[0].style.borderRadius = '0px 0px 0px 15px';

// ============================================================
// PLAYER SELECTION
// ============================================================
let player1 = 'gatinhoPreto';
let player2 = 'gatinhoBranco2';
let selecionado1 = document.getElementById(player1);
selecionado1.setAttribute('class', 'imgSelecionado');
let selecionado2 = document.getElementById(player2);
selecionado2.setAttribute('class', 'imgSelecionado');
const escolherJogadores = document.getElementById('escolherJogadores');

const divPlayer1 = document.getElementById('player1');
divPlayer1.addEventListener('click', function (e) {
  if (e.target.classList.value == 'imgJogadores') {
    selecionado1.setAttribute('class', 'imgJogadores');
    player1 = e.target.id;
    selecionado1 = document.getElementById(player1);
    selecionado1.setAttribute('class', 'imgSelecionado');
  }
  if (selecionado1.src == selecionado2.src) {
    selecionado1.setAttribute('class', 'imgJogadores');
    player1 = undefined;
    showAlert(
      'Nananão, escolha um gatinho diferente do player 2',
      escolherJogadores
    );
  }
});

const divPlayer2 = document.getElementById('player2');
divPlayer2.addEventListener('click', function (e) {
  if (e.target.classList.value == 'imgJogadores') {
    selecionado2.setAttribute('class', 'imgJogadores');
    player2 = e.target.id;
    selecionado2 = document.getElementById(player2);
    selecionado2.setAttribute('class', 'imgSelecionado');
  }
  if (selecionado2.src == selecionado1.src) {
    selecionado2.setAttribute('class', 'imgJogadores');
    player2 = undefined;
    showAlert(
      'Nananão, escolha um gatinho diferente do player 1',
      escolherJogadores
    );
  }
});

// ============================================================
// GAME LOGIC
// ============================================================

/**
 * Create a game disc for the current player
 * @returns {HTMLImageElement} The disc element
 */
function CriarDisco() {
  counterDisco++;
  if (counterDisco % 2 != 0) {
    let disco = document.createElement('img');
    if (player2 === 'gatinhoPreto2') {
      disco.src = 'catblack.png';
    }
    if (player2 === 'gatinhoMisto2') {
      disco.src = 'catmisto.png';
    }
    if (player2 === 'gatinhoLaranja2') {
      disco.src = 'catorange.png';
    }
    if (player2 === 'gatinhoBranco2') {
      disco.src = 'catwhite.png';
    }
    disco.setAttribute('class', 'discoVermelho');
    return disco;
  }
  if (counterDisco % 2 == 0) {
    let disco = document.createElement('img');
    if (player1 === 'gatinhoPreto') {
      disco.src = 'catblack.png';
    }
    if (player1 === 'gatinhoMisto') {
      disco.src = 'catmisto.png';
    }
    if (player1 === 'gatinhoLaranja') {
      disco.src = 'catorange.png';
    }
    if (player1 === 'gatinhoBranco') {
      disco.src = 'catwhite.png';
    }
    disco.setAttribute('class', 'discoPreto');
    return disco;
  }
}

/**
 * Handle click event on game board and place disc
 * @param {Event} e - The click event
 */
function selecionar(e) {
  let tabela = e.target.parentElement;
  let criaDisco = CriarDisco();
  if (tabela.classList.contains('cedula')) {
    tabela = tabela.parentElement;
  }
  for (let i = 5; i >= 0; i--) {
    if (tabela.children[i].childElementCount == 0) {
      tabela.children[i].appendChild(criaDisco);
    }
  }
  empate();
  verificaH();
  verificaV();
  vitoriaDiagonal();
}

// Add click event listener to game board
game.addEventListener('click', selecionar);

// ============================================================
// WIN CONDITION CHECKS
// ============================================================

/**
 * Check for horizontal win condition
 */
function verificaH() {
  let tabela = [...game.children];
  for (let i = 0; i < tabela.length; i++) {
    for (let j = 0; j < tabela.length - 3; j++) {
      let cell = tabela[j].children[i];
      if (cell === undefined) continue;
      let cellCount = cell.childElementCount;
      if (cellCount !== 0) {
        let cell2 = tabela[j + 1].children[i];
        let cell3 = tabela[j + 2].children[i];
        let cell4 = tabela[j + 3].children[i];
        if (
          cell2.childElementCount !== 0 &&
          cell3.childElementCount !== 0 &&
          cell4.childElementCount !== 0 &&
          cell.lastElementChild.classList.value ===
            cell2.lastElementChild.classList.value &&
          cell.lastElementChild.classList.value ===
            cell3.lastElementChild.classList.value &&
          cell.lastElementChild.classList.value ===
            cell4.lastElementChild.classList.value
        ) {
          if (cell.lastElementChild.classList.value === 'discoPreto') {
            criarMsg('player1');
          } else {
            criarMsg('player2');
          }
        }
      }
    }
  }
}

/**
 * Check for diagonal win condition (both directions)
 */
function vitoriaDiagonal() {
  let array = game.children;
  for (let i = 0; i < array.length - 4; i++) {
    for (let k = 0; k < array.length - 3; k++) {
      //diagonal esquerda
      cell = array[k].children[i];
      if (cell.childElementCount !== 0) {
        cell = cell.lastElementChild;

        if (
          array[k + 1].children[i + 1].childElementCount !== 0 &&
          array[k + 2].children[i + 2].childElementCount !== 0 &&
          array[k + 3].children[i + 3].childElementCount !== 0
        ) {
          if (
            cell.classList.value ==
              array[k + 1].children[i + 1].lastElementChild.classList.value &&
            cell.classList.value ==
              array[k + 2].children[i + 2].lastElementChild.classList.value &&
            cell.classList.value ==
              array[k + 3].children[i + 3].lastElementChild.classList.value
          ) {
            if (cell.classList.value === 'discoPreto') {
              criarMsg('player1');
            } else {
              criarMsg('player2');
            }
          }
        }
      }
    }
    for (let x = array.length - 1; x > 2; x--) {
      //diagonal pra direita
      cellx = array[x].children[i];

      if (cellx.childElementCount !== 0) {
        cellx = cellx.lastElementChild;
        if (
          array[x - 1].children[i + 1].childElementCount !== 0 &&
          array[x - 2].children[i + 2].childElementCount !== 0 &&
          array[x - 3].children[i + 3].childElementCount !== 0
        ) {
          if (
            cellx.classList.value ==
              array[x - 1].children[i + 1].lastElementChild.classList.value &&
            cellx.classList.value ==
              array[x - 2].children[i + 2].lastElementChild.classList.value &&
            cellx.classList.value ==
              array[x - 3].children[i + 3].lastElementChild.classList.value
          ) {
            if (cellx.classList.value === 'discoPreto') {
              criarMsg('player1');
            } else {
              criarMsg('player2');
            }
          }
        }
      }
    }
  }
}

/**
 * Check for vertical win condition
 */
function verificaV() {
  let tabela = [...game.children];
  for (let i = 0; i < tabela.length - 4; i++) {
    for (let j = 0; j < tabela.length; j++) {
      let cell = tabela[j].children[i];
      let cellCount = cell.childElementCount;
      if (cellCount !== 0) {
        let cell2 = tabela[j].children[i + 1];
        let cell3 = tabela[j].children[i + 2];
        let cell4 = tabela[j].children[i + 3];
        if (
          cell2.childElementCount !== 0 &&
          cell3.childElementCount !== 0 &&
          cell4.childElementCount !== 0 &&
          cell.lastElementChild.classList.value ===
            cell2.lastElementChild.classList.value &&
          cell.lastElementChild.classList.value ===
            cell3.lastElementChild.classList.value &&
          cell.lastElementChild.classList.value ===
            cell4.lastElementChild.classList.value
        ) {
          if (cell.lastElementChild.classList.value === 'discoPreto') {
            criarMsg('player1');
          } else {
            criarMsg('player2');
          }
        }
      }
    }
  }
}

/**
 * Check for tie/draw condition (board full)
 */
function empate() {
  const cells = document.getElementsByClassName('cedula');
  const cellsArr = Array.from(cells);
  const result = cellsArr.every((e) => e.childElementCount !== 0);
  if (result) {
    criarMsg('empate');
  }
}

// ============================================================
// VICTORY DISPLAY
// ============================================================

/**
 * Display victory or tie message
 * @param {string} cat - The winner ('player1', 'player2', or 'empate')
 */
function criarMsg(cat) {
  document.getElementById('gameSpace').style.display = 'none';
  document.getElementById('reset').style.display = 'none';

  let imgBlack = document.createElement('img');
  imgBlack.src = 'catblack.png';
  imgBlack.setAttribute('class', 'victoryCat');

  let imgMisto = document.createElement('img');
  imgMisto.src = 'catmisto.png';
  imgMisto.setAttribute('class', 'victoryCat');

  let imgOrange = document.createElement('img');
  imgOrange.src = 'catorange.png';
  imgOrange.setAttribute('class', 'victoryCat');

  let imgWhite = document.createElement('img');
  imgWhite.src = 'catwhite.png';
  imgWhite.setAttribute('class', 'victoryCat');

  let vitoria = document.getElementById('vitoria');
  vitoria.style.display = 'block';
  rainbow = document.createElement('div');
  rainbow.setAttribute('class', 'rainbow');

  let mensagem = document.createElement('h1');
  mensagem.setAttribute('id', 'mensagemVitoria');

  if (cat == 'empate') {
    mensagem.innerText = 'Empatou!!';
    vitoria.appendChild(mensagem);
  }
  if (cat == 'player1') {
    if (player1 == 'gatinhoPreto') {
      vitoria.appendChild(imgBlack);
      mensagem.innerText = 'Gatinho Preto Ganhou! 🏆';
      vitoria.appendChild(mensagem);
    }
    if (player1 == 'gatinhoLaranja') {
      vitoria.appendChild(imgOrange);
      mensagem.innerText = 'Gatinho Laranja Ganhou! 🏆';
      vitoria.appendChild(mensagem);
    }
    if (player1 == 'gatinhoBranco') {
      vitoria.appendChild(imgWhite);
      mensagem.innerText = 'Gatinho Branco Ganhou! 🏆';
      vitoria.appendChild(mensagem);
    }
    if (player1 == 'gatinhoMisto') {
      vitoria.appendChild(imgMisto);
      mensagem.innerText = 'Gatinho Tricolor Ganhou! 🏆';
      vitoria.appendChild(mensagem);
    }
  }

  if (cat == 'player2') {
    if (player2 == 'gatinhoPreto2') {
      vitoria.appendChild(imgBlack);
      mensagem.innerText = 'Gatinho Preto Ganhou! 🏆';
      vitoria.appendChild(mensagem);
    }
    if (player2 == 'gatinhoLaranja2') {
      vitoria.appendChild(imgOrange);
      mensagem.innerText = 'Gatinho Laranja Ganhou! 🏆';
      vitoria.appendChild(mensagem);
    }
    if (player2 == 'gatinhoBranco2') {
      vitoria.appendChild(imgWhite);
      mensagem.innerText = 'Gatinho Branco Ganhou! 🏆';
      vitoria.appendChild(mensagem);
    }
    if (player2 == 'gatinhoMisto2') {
      vitoria.appendChild(imgMisto);
      mensagem.innerText = 'Gatinho Tricolor Ganhou! 🏆';
      vitoria.appendChild(mensagem);
    }
  }
  if (cat != 'empate') {
    //criando rainbow
    let counter = 0;
    let intervalo = setInterval(function () {
      rainbow = document.createElement('div');
      rainbow.setAttribute('class', 'rainbow');
      counter++;

      if (counter == 10) {
        clearInterval(intervalo);
      }
      vitoria.appendChild(rainbow);
    }, 200);

    let intervalo2 = setInterval(function () {
      rainbow = document.createElement('div');
      rainbow.setAttribute('class', 'rainbow2');

      if (counter == 10) {
        clearInterval(intervalo2);
      }

      vitoria.appendChild(rainbow);
    }, 300);
  }
}
