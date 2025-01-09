/* ================================================
   Lista de Logins Autorizados
================================================ */

// Logins autorizados
const authorizedLogins = [
    { username: "007", password: "12" },
    { username: "012", password: "987832" },
    { username: "009", password: "345345" },
  ];
  
  // Contador de tentativas erradas
  let failedAttempts = 0;
  
  // Limite de tentativas erradas
  const maxAttempts = 3;
  
  /* ================================================
     Seleção de Elementos da Página
  ================================================ */
  
  // Seleção de elementos do DOM
  const loginForm = document.getElementById("loginForm");
  const statusMessage = document.getElementById("statusMessage");
  const loginContainer = document.getElementById("loginContainer");
  const infoContainer = document.getElementById("infoContainer");
  
  /* ================================================
     Evento de Submissão do Formulário
  ================================================ */
  
  // Evento de submissão do formulário de login
  loginForm.addEventListener("submit", (e) => {
    e.preventDefault(); 
  
    // Obtém os valores dos campos de nome de usuário e senha e remove espaços extras
    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value.trim();
  
    // Verifica se o login é autorizado, comparando os valores com a lista de logins autorizados
    const isAuthorized = authorizedLogins.some(
      (login) => login.username === username && login.password === password
    );
  
    if (isAuthorized) {
      // Mensagem de sucesso
      statusMessage.textContent = "Login bem-sucedido! A carregar informações...";
      statusMessage.style.color = "green"; 
  
      // Animação para exibir informações
      loginContainer.classList.add("hidden"); 
      setTimeout(() => {
        loginContainer.style.display = "none";
        infoContainer.style.display = "block"; 
        infoContainer.classList.add("fade-in"); 
      }, 1000); 
    } else {
      failedAttempts++; // Incrementa o contador de tentativas erradas
      if (failedAttempts >= maxAttempts) {
        // Mensagem de erro quando o número máximo de tentativas é atingido
        statusMessage.textContent = "Não era para estares por aqui! Acesso negado.";
        statusMessage.style.color = "red"; 
        loginForm.style.display = "none"; 
      } else {
        // Mensagem de erro com tentativas restantes
        statusMessage.textContent =
          `Nome de utilizador ou palavra-passe incorretos. Tentativas restantes: ${maxAttempts - failedAttempts}.`;
        statusMessage.style.color = "orange"; 
      }
    }
  
    // Limpa os campos do formulário após cada tentativa
    document.getElementById("username").value = "";
    document.getElementById("password").value = "";
  });
  