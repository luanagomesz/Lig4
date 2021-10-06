
//eventos menu
document.getElementById("jogar").addEventListener("click", function(){
   let interval = setInterval(iniciarjogo, 150)
   function iniciarjogo(){
    document.getElementById("menu").style.display = "none"
    document.getElementById("gameSpace").style.display = "flex"
    document.getElementById("voltar").style.display = "block"
    document.getElementById("header").style.fontSize = "40px"
    document.getElementById("header").style.paddingBottom = "2px"
    document.getElementById("header").style.paddingTop = "0px"
    clearInterval(interval);
}
})


document.getElementById("buttonInstruções").addEventListener("click", function(){
    let interval = setInterval(instruções, 150)
    function instruções(){
        document.getElementById("menu").style.display = "none"
        document.getElementById("instruções").style.display = "flex"
        document.getElementById("voltar").style.display = "block"
        clearInterval(interval);
    }
    })


document.getElementById("voltar").addEventListener("click", function(){
    let interval = setInterval(voltar, 150)
    function voltar(){
        document.getElementById("menu").style.display = "flex"
        document.getElementById("instruções").style.display = "none"
        document.getElementById("gameSpace").style.display = "none"
        document.getElementById("voltar").style.display = "none"
        document.getElementById("header").style.fontSize = "80px"
        document.getElementById("header").style.paddingBottom = "30px"
        document.getElementById("header").style.paddingTop = "70px"
        document.getElementById("escolherJogadores").style.display = "none"
        clearInterval(interval);
    }

})

document.getElementById("jogadores").addEventListener("click", function(){
    let interval = setInterval(jogadores, 150)
    function jogadores(){
        document.getElementById("menu").style.display = "none"
        document.getElementById("escolherJogadores").style.display = "flex"
        document.getElementById("voltar").style.display = "block"
        document.getElementById("header").style.marginBottom = "0px"
        clearInterval(interval);
    }
})


game = document.getElementById("gameSpace")

// criando tabuleiro dinamicamente

for( let i=1; i<=7;i++){
    let tabela = document.createElement("div")
    tabela.setAttribute("id", "tabela" + i)
    tabela.setAttribute("class", "tabelas")
    game.appendChild(tabela)
    for(let k=1; k<=6;k++){
        let cedula = document.createElement("div")
        cedula.setAttribute("class","cedula")
        document.getElementById("tabela" + i).appendChild(cedula)
    }
}

//estilizando borda do tabuleiro
let filterarray = game.children
filterarray[0].lastElementChild.style.borderRadius = "15px 0px 0px 0px"
filterarray[6].lastElementChild.style.borderRadius = "0px 15px 0px 0px"
filterarray[6].children[0].style.borderRadius = "0px 0px 15px 0px"
filterarray[0].children[0].style.borderRadius = "0px 0px 0px 15px"

//selecionando jogadores
let player1 
let player2

const divPlayer1 = document.getElementById("player1")
divPlayer1.addEventListener("click", function (e){
    player1 = e.target.id
    e.target.style.backgroundColor = "#e26b61"
    e.target.style.borderRadius = "50%"
    console.log(player1)
})

const divPlayer2 = document.getElementById("player2")
divPlayer2.addEventListener("click", function (e){
    player2 = e.target.id
    e.target.style.backgroundColor = "#e26b61"
    e.target.style.borderRadius = "50%"
    if (player2 === player1){
        let alert = document.createElement("span")
        alert.innerText = "Nananão, escolha um gatinho diferente do player1"
        alert.setAttribute("id", "alert")
        player2 = undefined
        e.target.style.backgroundColor = ""
        e.target.style.borderRadius = ""
        divPlayer2.appendChild(alert);
        setTimeout(() => {
            divPlayer2.removeChild(alert)
        }, 2000);
    }
    console.log(player2)
})


// função de criação de discos

let counterDisco = 1

function CriarDisco(){
counterDisco++
if(counterDisco % 2 != 0){
    let disco = document.createElement("img")
    if (player2 === "gatinhoPreto"){
        disco.src = "catblack.png"
    }
    if (player2 === "gatinhoMisto"){
        disco.src = "catmisto.png"
    }
    if (player2 === "gatinhoLaranja"){
        disco.src = "catorange.png"
    }
    if (player2 === "gatinhoBranco"){
        disco.src = "catwhite.png"
    }
    disco.setAttribute("class", "discoVermelho")
    return disco
}
if(counterDisco % 2 == 0){
    let disco = document.createElement("img")
    if (player1 === "gatinhoPreto"){
        disco.src = "catblack.png"
    }
    if (player1 === "gatinhoMisto"){
        disco.src = "catmisto.png"
    }
    if (player1 === "gatinhoLaranja"){
        disco.src = "catorange.png"
    }
    if (player1 === "gatinhoBranco"){
        disco.src = "catwhite.png"
    }
    disco.setAttribute("class", "discoPreto")
    return disco
    }
    
}

/* let counterDisco = 1

function CriarDisco(){
counterDisco++
if(counterDisco % 2 != 0){
    let disco = document.createElement("img")
    disco.src = "catwhite.png"
    disco.setAttribute("class", "discoVermelho")
    return disco
}
if(counterDisco % 2 == 0){
    let disco = document.createElement("img")
    disco.src = "catblack.png"
    disco.setAttribute("class", "discoPreto")
    return disco
    }
    
} */


// função captura o evento e alternar discos
game.addEventListener('click', selecionar)

function selecionar(e) {        
    let tabela = e.target.parentElement
    let criaDisco = CriarDisco()
    if(tabela.classList.contains("cedula")){
      tabela = tabela.parentElement
    }
    for(let i = 5; i >= 0; i--){
        if(tabela.children[i].childElementCount == 0){
            tabela.children[i].appendChild(criaDisco)            
        }        
    }
  empate()
  verificaH()
  verificaV()
  vitoriaDiagonal()
}


//condição de vitoria diagonal

function vitoriaDiagonal(){
    let array = game.children
      for(let i=0;i<array.length -4;i++){
     
        for(let k=0;k<array.length -3;k++){
            //diagonal esquerda
            cell = array[k].children[i]
            if(cell.childElementCount !== 0){
               cell = cell.lastElementChild

               if(array[k+1].children[i+1].childElementCount !== 0 && 
                array[k+2].children[i+2].childElementCount !== 0 && 
                array[k+3].children[i+3].childElementCount !== 0){

                 if(cell.classList.value == array[k+1].children[i+1].lastElementChild.classList.value  &&
                     cell.classList.value == array[k+2].children[i+2].lastElementChild.classList.value &&
                     cell.classList.value == array[k+3].children[i+3].lastElementChild.classList.value){
                        
                        if(cell.classList.value === "discoPreto"){
                            criarMsg("disco preto")
                        } else {
                            criarMsg("disco vermelho")
                        }
                   console.log('vrauu' + " " + cell.classList.value + " " + "Ganhou")
               }
            }
         }
        }
        for(let x = array.length -1;x>2;x--){
            //diagonal pra direita
            cellx = array[x].children[i]
            
            if(cellx.childElementCount !== 0){
                cellx = cellx.lastElementChild
                if(array[x-1].children[i+1].childElementCount !== 0 &&
                  array[x-2].children[i+2].childElementCount !== 0 &&
                  array[x-3].children[i+3].childElementCount !== 0){
                      
                    if(cellx.classList.value == array[x-1].children[i+1].lastElementChild.classList.value  &&
                         cellx.classList.value == array[x-2].children[i+2].lastElementChild.classList.value && 
                         cellx.classList.value == array[x-3].children[i+3].lastElementChild.classList.value){

                            if(cellx.classList.value === "discoPreto"){
                                criarMsg("disco preto")
                            } else {
                                criarMsg("disco vermelho")
                            }
                      console.log('vrauu' + " " + cellx.classList.value + " " + "Ganhou")
                  }
                 }
                }
             }
          }
         }




         function verificaH(){
            let tabela = [...game.children]
            for(let i = 0; i < tabela.length ; i++){
                for(let j = 0; j < tabela.length -3 ; j++) {
                  let cell = tabela[j].children[i]
            
                  if(cell === undefined)continue
                  let cellCount = cell.childElementCount
                  if(cellCount !== 0) {
                      let cell2 = tabela[j+1].children[i]
                      let cell3 = tabela[j+2].children[i]
                      let cell4 = tabela[j+3].children[i]
                    if((cell2.childElementCount !==0 && cell3.childElementCount !==0 && cell4.childElementCount !==0) &&
                        (cell.lastElementChild.classList.value === cell2.lastElementChild.classList.value &&
                         cell.lastElementChild.classList.value === cell3.lastElementChild.classList.value &&
                         cell.lastElementChild.classList.value === cell4.lastElementChild.classList.value) ) {

                            if(cell.lastElementChild.classList.value === "discoPreto"){
                                criarMsg("disco preto")
                            } else {
                                criarMsg("disco vermelho")
                            }
                            console.log("aleluiahorizontal");
                    }
                 }
                }
              }
        }
        
        function verificaV(){
            let tabela = [...game.children]
            for(let i = 0; i < tabela.length - 4; i++){
                for(let j = 0; j < tabela.length ; j++) {
                  let cell = tabela[j].children[i]
                  let cellCount = cell.childElementCount
                  if(cellCount !== 0) {
                      let cell2 = tabela[j].children[i+1]
                      let cell3 = tabela[j].children[i+2]
                      let cell4 = tabela[j].children[i+3]
                    if((cell2.childElementCount !==0 && cell3.childElementCount !==0 && cell4.childElementCount !==0) &&
                        (cell.lastElementChild.classList.value === cell2.lastElementChild.classList.value &&
                         cell.lastElementChild.classList.value === cell3.lastElementChild.classList.value &&
                         cell.lastElementChild.classList.value === cell4.lastElementChild.classList.value) ) {
                      
                            if(cell.lastElementChild.classList.value === "discoPreto"){
                                criarMsg("disco preto")
                            } else {
                                criarMsg("disco vermelho")
                            }
                            
                            console.log("aleluiavertical");
                    }
                 }
                }
              }
        }

        function empate (){
            let cells = document.getElementsByClassName("cedula")
            let cellsArr = []
            for (let i = 0; i < cells.length; i++){
                cellsArr.push(cells[i])
            }
            let result = cellsArr.every (function (e) {
                return e.childElementCount != 0
            } )

        }

        function criarMsg (string){          
            let msgVitoria = document.createElement("div")
            msgVitoria.setAttribute("id", "msgVitoria")
            msgVitoria.innerText = "o vencedor foi " + string
            game.appendChild(msgVitoria)
            
        }

