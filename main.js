document.addEventListener('DOMContentLoaded', () => {
  // ======= SPA =======
  const links = document.querySelectorAll('[data-link]');
  const main = document.getElementById('main-content');

  if(main) {
    links.forEach(link => {
      link.addEventListener('click', e => {
        e.preventDefault();
        const url = link.getAttribute('href');
        fetch(url)
          .then(res => res.text())
          .then(html => main.innerHTML = html)
          .catch(err => main.innerHTML = "<p>Erro ao carregar a página.</p>");
      });
    });
  }

  // ======= Validação Formulário =======
  const form = document.getElementById('formCadastro');
  if(form){
    form.addEventListener('submit', ev => {
      ev.preventDefault();

      // Validação nativa
      if(!form.checkValidity()){
        form.reportValidity();
        return;
      }

      // Validação customizada (exemplo CPF)
      const cpf = document.getElementById('cpf');
      if(cpf && cpf.value.length !== 14){
        alert("CPF inválido!");
        return;
      }

      alert("Cadastro enviado com sucesso (demo)!");
      form.reset();
    });
  }
});
