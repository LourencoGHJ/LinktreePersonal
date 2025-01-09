/* ================================================
   Função para exibir a seção correspondente
================================================ */

// Função para mostrar a secção correspondente
function showSection(sectionId) {
  // Esconde todas as secções
  const sections = document.querySelectorAll('.section');
  sections.forEach(section => {
    section.style.display = 'none'; 
  });

  // Mostra a secção escolhida
  const activeSection = document.getElementById(sectionId);
  if (activeSection) {
    activeSection.style.display = 'block'; 
  }
}

// Por padrão, exibe a secção do Linktree ao carregar a página
window.onload = function() {
  showSection('linktree'); 
};

/* ================================================
   Função para alternar o menu hambúrguer
================================================ */

// Função para alternar o menu hambúrguer
const menuToggle = document.getElementById('menu-toggle');
const navLinks = document.getElementById('nav-links');


menuToggle.addEventListener('click', () => {
  navLinks.classList.toggle('open'); 
});

/* ================================================
   Função para o formulário de login e exibição de mensagens de status
================================================ */

// Função para validar o login e exibir mensagens
document.getElementById('loginForm').addEventListener('submit', function(event) {
  event.preventDefault(); 
  
  // Obtendo os valores dos campos de input (usuário e senha)
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  // Validando se os campos foram preenchidos
  if (!username || !password) {
    showStatusMessage('Por favor, preencha todos os campos.', 'error'); 
  } else {
    showStatusMessage('Entrando...', 'success'); 
    
    setTimeout(function() {
      const success = Math.random() > 0.5; 
      if (success) {
        showStatusMessage('Login bem-sucedido! Bem-vindo!', 'success'); 
      } else {
        showStatusMessage('Falha no login. Tente novamente.', 'error'); 
      }
    }, 2000); 
  }
});

// Função para exibir mensagens de status
function showStatusMessage(message, type) {
  const statusMessage = document.getElementById('statusMessage');
  statusMessage.textContent = message; 
  statusMessage.className = 'status-message ' + type; 
  statusMessage.style.display = 'block'; 
}
