document.addEventListener('input', function(e) {
  const t = e.target;
  if(!t.matches('input')) return;

  // Máscara CPF
  if(t.id === 'cpf'){
    t.value = t.value.replace(/\D/g,'')
                     .replace(/(\d{3})(\d)/,'$1.$2')
                     .replace(/(\d{3})\.(\d{3})(\d)/,'$1.$2.$3')
                     .replace(/(\d{3})\.(\d{3})\.(\d{3})(\d)/,'$1.$2.$3-$4')
                     .slice(0,14);
  }

  // Máscara telefone
  if(t.id === 'telefone'){
    let v = t.value.replace(/\D/g,'');
    if(v.length <= 10){
      v = v.replace(/(\d{2})(\d{4})(\d{0,4})/,'($1) $2-$3');
    } else {
      v = v.replace(/(\d{2})(\d{5})(\d{0,4})/,'($1) $2-$3');
    }
    t.value = v.slice(0,15);
  }

  // Máscara cep
  if(t.id === 'cep'){
    t.value = t.value.replace(/\D/g,'').replace(/(\d{5})(\d)/,'$1-$2').slice(0,9);
  }
});