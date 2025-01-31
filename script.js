const containerVideos = document.querySelector(".videos__container");

async function buscarEMostrarVideos(){
  
  const busca = await fetch("http://localhost:3000/videos")
  const videos = await busca.json();

  try {
    videos.forEach((video) => {
      
      if(video.categoria == ""){
        throw new Error("Video não tem categoria")
      } 

      containerVideos.innerHTML += `
      <li class="videos__item">
          <iframe src="${video.url}" title="${video.titulo}" frameborder="0" allowfullscreen></iframe>
          <div class="descricao-video">
            <img class="img-canal" src="${video.imagem} alt="Logo do Canal">
            <h3 class="titulo-video">${video.titulo}</h3>
            <p class="titulo-canal">${video.descricao}</p>
            <p class="categoria">${video.categoria}</p>
          </div>
      `;  
    }) 
  } catch(error){
    containerVideos.innerHTML += `<p> Houve um erro ao carregar os vídeos: ${error}</p>`;
  } 
}

buscarEMostrarVideos();

const barraDePesquisa = document.querySelector(".pesquisar__input");

barraDePesquisa.addEventListener("input", filtrarPesquisa);

function filtrarPesquisa() {
  const videos = document.querySelectorAll('.videos__item');
  const valorFiltro = barraDePesquisa.value.toLowerCase();

  videos.forEach((video) => {
    const titulo = video.querySelector('.titulo-video').textContent.toLowerCase();

    video.style.display = valorFiltro ? titulo.includes(valorFiltro) ? 'block' : 'none' : 'block';
  });
}

const botaoCategoria = document.querySelectorAll(".superior__item");

botaoCategoria.forEach((botao) => {
  let nomeCategoria = botao.getAttribute("name");
  botao.addEventListener("click", () => filtrarPorCategoria(nomeCategoria));
})

function filtrarPorCategoria(filtro){
  const videos = document.querySelectorAll(".videos__item");
  const valorFiltro = filtro.toLowerCase();

  videos.forEach((video) => {
    const categoria = video.querySelector('.categoria').textContent.toLowerCase();    

    video.style.display = valorFiltro &&  valorFiltro != 'tudo' ? categoria.includes(valorFiltro) ? 'block' : 'none' : 'block';
    
  });
}