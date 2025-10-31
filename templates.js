// js/templates.js

function criarCartaoProjeto(titulo, descricao, imagem) {
  return `
    <div class="cartao">
      <img src="${imagem}" alt="${titulo}">
      <h3>${titulo}</h3>
      <p>${descricao}</p>
    </div>
  `;
}

function adicionarProjetos() {
  const container = document.getElementById('projetos-container');
  if (!container) return;

  const projetos = [
    {titulo: "Projeto 1", descricao: "Descrição do projeto 1", imagem: "assets/img/index1.png"},
    {titulo: "Projeto 2", descricao: "Descrição do projeto 2", imagem: "assets/img/index2.png"}
  ];

  projetos.forEach(projeto => {
    container.innerHTML += criarCartaoProjeto(projeto.titulo, projeto.descricao, projeto.imagem);
  });
}

document.addEventListener("DOMContentLoaded", adicionarProjetos);
