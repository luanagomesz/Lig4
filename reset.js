'use strict';

/**
 * Reset game board
 * Clears all game cells and resets the disc counter
 */
function resetar() {
  counterDisco = 1;
  const cells = document.getElementsByClassName('cedula');
  const cellsArr = Array.from(cells);
  cellsArr.forEach((cell) => {
    cell.innerHTML = '';
  });
}

// Add event listener for reset button
const reset = document.getElementById('reset');
reset.addEventListener('click', resetar);
