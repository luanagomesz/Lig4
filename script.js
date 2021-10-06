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
    verificaH()
    verificaV()
}

// função verificar vitoria horizontal e vertical
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
            console.log("aleluiahorizontal");
            }
        }
        }
    }
}

function verificaV(){
    let tabela = [...game.children]
    for(let i = 0; i < tabela.length - 3; i++){
        for(let j = 0; j < tabela.length ; j++) {
          let cell = tabela[j].children[i]
          if(cell === undefined)continue
          let cellCount = cell.childElementCount
          if(cellCount !== 0) {
              let cell2 = tabela[j].children[i+1]
              let cell3 = tabela[j].children[i+2]
              let cell4 = tabela[j].children[i+3]
            if((cell2.childElementCount !==0 && cell3.childElementCount !==0 && cell4.childElementCount !==0) &&
                (cell.lastElementChild.classList.value === cell2.lastElementChild.classList.value &&
                 cell.lastElementChild.classList.value === cell3.lastElementChild.classList.value &&
                 cell.lastElementChild.classList.value === cell4.lastElementChild.classList.value) ) {
              console.log("aleluiavertical");
            }
         }
        }
      }
}

