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