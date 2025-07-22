// Quando a página carregar, buscamos os dados do localStorage
window.onload = function () {
    // Pega os dados salvos ou usa valores padrão se não tiver
    const nome = localStorage.getItem('perfil_nome') || 'Nome não informado';
    const email = localStorage.getItem('perfil_email') || 'Email não informado';
    const telefone = localStorage.getItem('perfil_telefone') || 'Telefone não informado';
    const idade = localStorage.getItem('perfil_idade') || 'Idade não informada';
    const imagem = localStorage.getItem('perfil_imagem') || 'https://via.placeholder.com/150';
  
    // Define os valores na página
    document.getElementById('nome').textContent = nome;
    document.getElementById('email').textContent = email;
    document.getElementById('telefone').textContent = telefone;
    document.getElementById('idade').textContent = idade;
    document.getElementById('profile-image').src = imagem;
  };
  
  // Função opcional para ir pra tela de edição (caso use botão)
  function irParaEdicao() {
    window.location.href = "Ateste-edicao.html";
  }
  