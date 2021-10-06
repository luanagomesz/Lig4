// função reset 
const reset = document.getElementById('reset')
reset.addEventListener('click', resetar)
function resetar() {
    let cells = document.getElementsByClassName("cedula")
    let cellsArr = []
    for (let i = 0; i < cells.length; i++){
        cellsArr.push(cells[i])
    }
    for(let i= 0; i< cellsArr.length; i++){
        cellsArr[i].innerHTML = ''
    }
}