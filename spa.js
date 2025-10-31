// js/spa.js

function mostrarSecao(secaoId) {
  const secoes = document.querySelectorAll('section');
  secoes.forEach(secao => secao.style.display = 'none');
  const secaoAtual = document.getElementById(secaoId);
  if (secaoAtual) secaoAtual.style.display = 'block';
}

// Inicializa exibindo a primeira seção (por exemplo 'home')
document.addEventListener("DOMContentLoaded", () => {
  mostrarSecao('home'); // altere para o id da sua seção inicial
});
