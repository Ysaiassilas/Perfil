
  // Atualiza visualização quando selecionar imagem do computador
  document.getElementById('upload').addEventListener('change', function () {
    const file = this.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = function (e) {
        const imgURL = e.target.result;
        document.getElementById('preview-img').src = imgURL;
        localStorage.setItem('perfil_imagem', imgURL); // Salva imagem em base64
        document.getElementById('imagem').value = ''; // Limpa campo de URL
      };
      reader.readAsDataURL(file);
    }
  });
  
  // Envia o formulário
  document.getElementById('formPerfil').addEventListener('submit', function (event) {
    event.preventDefault();
  
    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const telefone = document.getElementById('telefone').value;
    const idade = document.getElementById('idade').value;
    const senha = document.getElementById('senha').value;
    const imagemURL = document.getElementById('preview-img').src;
  
    // Salvar no localStorage
    localStorage.setItem('perfil_nome', nome);
    localStorage.setItem('perfil_email', email);
    localStorage.setItem('perfil_telefone', telefone);
    localStorage.setItem('perfil_idade', idade);
    localStorage.setItem('perfil_senha', senha);
    localStorage.setItem('perfil_imagem', imagemURL);
  
    alert("Perfil salvo com sucesso!");
  
    // Vai para a tela de perfil
    window.location.href = "Ateste-perfil.html";
  });
  