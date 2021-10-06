function empate (){
    let cells = document.getElementsByClassName("cedula")
    let cellsArr = []
    for (let i = 0; i < cells.length; i++){
        cellsArr.push(cells[i])
    }
    let result = cellsArr.every (function (e) {
        return e.childElementCount != 0
    } )
    if( result === true){
        criarMsg("ninguém")
    }
}