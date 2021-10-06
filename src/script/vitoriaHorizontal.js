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