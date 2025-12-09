# Lig-4 🐱

Jogo Connect Four (Lig-4) com tema de gatinhos desenvolvido em HTML, CSS e JavaScript puro.

## 🎮 Como Jogar

Acesse o jogo online: https://luanagomesz.github.io/Lig4/

### Regras

- Dois jogadores se alternam colocando suas peças (gatinhos) em uma das 7 colunas
- O tabuleiro possui 7 colunas x 6 linhas
- O primeiro jogador que conseguir alinhar 4 peças (horizontal, vertical ou diagonal) vence
- Se o tabuleiro encher sem nenhum vencedor, o jogo termina em empate

## 🛠️ Desenvolvimento

### Pré-requisitos

- Node.js (v14 ou superior)
- npm (v6 ou superior)

### Configuração do Ambiente

1. Clone o repositório:

```bash
git clone https://github.com/luanagomesz/Lig4.git
cd Lig4
```

2. Instale as dependências:

```bash
npm install
```

### Scripts Disponíveis

- `npm run lint` - Verifica o código com ESLint
- `npm run lint:fix` - Corrige automaticamente problemas do ESLint
- `npm run format` - Formata o código com Prettier
- `npm run format:check` - Verifica a formatação do código

### Estrutura do Projeto

```
Lig4/
├── index.html          # Página principal
├── style.css           # Estilos do jogo
├── reset.css           # Reset CSS
├── script.js           # Lógica principal do jogo
├── reset.js            # Função de reset do tabuleiro
├── *.png               # Imagens dos gatinhos e fundo
├── package.json        # Dependências e scripts
├── .eslintrc.json      # Configuração do ESLint
├── .prettierrc.json    # Configuração do Prettier
└── .editorconfig       # Configuração do editor
```

### Padrões de Código

Este projeto segue:

- **ESLint** para qualidade de código
- **Prettier** para formatação consistente
- **EditorConfig** para configuração de editor
- JavaScript em modo estrito (`'use strict'`)
- Comentários JSDoc para funções principais

## 👥 Desenvolvedores

- [luanagomesz](https://github.com/luanagomesz)
- [martachmlima](https://github.com/martachmlima)
- [rodrigocezzar](https://github.com/rodrigocezzar)

## 📝 Licença

MIT
