const formCadastro = document.getElementById('formCadastro');
const cepInput = document.getElementById('cep');

formCadastro.addEventListener('submit', event => {
  event.preventDefault();
  
  // Obter os valores dos campos
  const nome = document.getElementById('nome').value;
  const sobrenome = document.getElementById('sobrenome').value;
  const email = document.getElementById('email').value;
  const cep = cepInput.value.replace(/\D/g, '');

  // Realizar validação dos campos aqui

  // Buscar endereço usando o ViaCEP
  buscarEnderecoPorCEP(cep)
    .then(endereco => {
      document.getElementById('rua').value = endereco.rua;
      document.getElementById('bairro').value = endereco.bairro;
      document.getElementById('cidade').value = endereco.cidade;
      document.getElementById('estado').value = endereco.estado;

      // Enviar o formulário ou realizar outras ações necessárias
    })
    .catch(error => {
      console.log('Erro ao buscar o CEP:', error);
    });
});
