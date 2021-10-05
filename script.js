//eventos menu
document.getElementById("jogar").addEventListener("click", function(){
   let interval = setInterval(iniciarjogo, 150)
   function iniciarjogo(){
    document.getElementById("menu").style.display = "none"
    document.getElementById("gameSpace").style.display = "flex"
    document.getElementById("voltar").style.display = "block"
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

// função de criação de discos
let counterDisco = 1

function CriarDisco(){
counterDisco++
if(counterDisco % 2 != 0){
    let disco = document.createElement("div")
    disco.setAttribute("class", "discoVermelho")
    return disco
}
if(counterDisco % 2 == 0){
    let disco = document.createElement("div")
    disco.setAttribute("class", "discoPreto")
    return disco
    }
    
}
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
  vitoriaDiagonal()
}


//condição de vitoria diagonal

function vitoriaDiagonal(){
    let array = game.children
      for(let i=0;i<array.length;i++){
     
        for(let k=0;k<array.length -3;k++){
            //diagonal esquerda
            cell = array[k].children[i]
            if(cell.childElementCount !== 0){
               cell = cell.lastElementChild

               if(array[k+1].children[i+1].childElementCount !== 0 && array[k+2].children[i+2].childElementCount !== 0 && array[k+3].children[i+3].childElementCount !== 0){
                 if(cell.classList.value == array[k+1].children[i+1].lastElementChild.classList.value  && cell.classList.value == array[k+2].children[i+2].lastElementChild.classList.value && cell.classList.value == array[k+3].children[i+3].lastElementChild.classList.value){
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
                if(array[x-1].children[i+1].childElementCount !== 0 && array[x-2].children[i+2].childElementCount !== 0 && array[x-3].children[i+3].childElementCount !== 0){
                    if(cellx.classList.value == array[x-1].children[i+1].lastElementChild.classList.value  && cellx.classList.value == array[x-2].children[i+2].lastElementChild.classList.value && cellx.classList.value == array[x-3].children[i+3].lastElementChild.classList.value){
                      console.log('vrauu' + " " + cellx.classList.value + " " + "Ganhou")
                  }
                 }
                }
             }
          }
         }