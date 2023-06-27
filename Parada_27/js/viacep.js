function buscarEnderecoPorCEP(cep) {
  return fetch(`https://viacep.com.br/ws/${cep}/json/`)
    .then(response => response.json())
    .then(data => {
      if (data.erro) {
        throw new Error('CEP não encontrado');
      }

      return {
        rua: data.logradouro,
        bairro: data.bairro,
        cidade: data.localidade,
        estado: data.uf
      };
    });
}

function preencherEndereco(cep) {
  buscarEnderecoPorCEP(cep)
    .then(endereco => {
      document.getElementById('rua').value = endereco.rua;
      document.getElementById('bairro').value = endereco.bairro;
      document.getElementById('cidade').value = endereco.cidade;
      document.getElementById('estado').value = endereco.estado;
    })
    .catch(error => {
      console.log(error);
    });
}

document.addEventListener('DOMContentLoaded', function() {
  const cepInput = document.getElementById('cep');

  cepInput.addEventListener('change', function() {
    const cep = cepInput.value.replace(/\D/g, '');
    preencherEndereco(cep);
  });
});