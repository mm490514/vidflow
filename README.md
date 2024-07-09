# VidFlow

VidFlow é uma plataforma de streaming de vídeo que permite aos usuários explorar, pesquisar e filtrar vídeos por várias categorias. Este README irá guiá-lo através da estrutura e funcionalidade da aplicação VidFlow.

## Índice
- [Instalação](#instalação)
- [Uso](#uso)
- [Estrutura do Projeto](#estrutura-do-projeto)
- [Funcionalidades](#funcionalidades)
- [Tecnologias Utilizadas](#tecnologias-utilizadas)
- [Contribuição](#contribuição)
- [Licença](#licença)

## Instalação

1. Clone o repositório:
   ```sh
   git clone https://github.com/seu-usuario/vidflow.git
   ```

2. Navegue até o diretório do projeto:
   ```sh
   cd vidflow
   ```

3. Instale as dependências (se aplicável):
   ```sh
   npm install
   ```

4. Inicie o servidor:
   ```sh
   npm start
   ```

## Uso

1. Abra `index.html` no seu navegador web.

2. Use a barra de pesquisa para procurar vídeos pelo título.

3. Use os botões de categoria para filtrar vídeos por categorias específicas.

## Estrutura do Projeto

```
VidFlow/
├── css/
│   ├── reset.css
│   ├── estilos.css
│   └── flexbox.css
├── img/
│   ├── Favicon.png
│   ├── VidFlow--Logo-light-mode.png
│   ├── topbar/
│   │   ├── keyboard.png
│   │   ├── search.png
│   │   └── Mic.png
│   └── arrow_forward_ios.png
├── index.html
├── script.js
├── README.md
└── package.json
```

## Funcionalidades

### Cabeçalho

- **Logo**: Exibe o logo do VidFlow.
- **Barra de Pesquisa**: Permite aos usuários pesquisar vídeos pelo título.
- **Ícones**: Ícones de espaço reservado para vídeos, aplicativos, notificações e avatar.
- **Alternar Modo Escuro**: Um interruptor para alternar o modo escuro (funcionalidade a ser implementada).

### Barra Lateral

- **Itens do Menu**: Links para diferentes seções como Início, Explorar, Shorts, Inscrições e Biblioteca.
- **Links Adicionais**: Links para Histórico, Assistir mais tarde, Vídeos com like e inscrições em canais específicos.
- **Categorias**: Links para diferentes categorias de vídeos, como Jogos, Filmes e Vídeo Premium.

### Conteúdo Principal

- **Filtro de Categoria**: Botões para filtrar vídeos por categorias específicas.
- **Container de Vídeos**: Exibe a lista de vídeos.

### Funcionalidade do Script

- **Buscar e Exibir Vídeos**: Busca vídeos do servidor e os exibe no container de vídeos.
- **Filtro de Pesquisa**: Filtra vídeos com base na entrada de pesquisa.
- **Filtro de Categoria**: Filtra vídeos com base na categoria selecionada.

## Tecnologias Utilizadas

- HTML
- CSS
- JavaScript
