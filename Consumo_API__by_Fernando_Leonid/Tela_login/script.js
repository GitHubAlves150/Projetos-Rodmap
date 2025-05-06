document.addEventListener('DOMContentLoaded', () => {
    const body = document.body;
    const loginForm = document.getElementById('login-form');
    const videoContainer = document.getElementById('video-container');
    const introVideo = document.getElementById('intro-video');
    const errorMessage = document.getElementById('error-message');

    // Efeito de fade-in ao carregar a página
    setTimeout(() => {
        body.classList.add('loaded');
    }, 100); // 100ms para garantir que o browser renderize antes da transição

    loginForm.addEventListener('submit', (event) => {
        event.preventDefault(); // Impede o envio padrão do formulário

        const usernameInput = document.getElementById('username');
        const passwordInput = document.getElementById('password');
        const username = usernameInput.value.trim();
        const password = passwordInput.value.trim();

        // Validação simples (admin/admin)
        if (username === 'admin' && password === 'admin') {
            // Login bem-sucedido: inicia a transição para o vídeo
            body.classList.remove('loaded'); // Remove o fade-in da tela de login
            videoContainer.classList.remove('hidden');
            setTimeout(() => {
                videoContainer.classList.add('show');
            }, 100); // Pequeno delay para garantir a transição

            // Após 2 segundos (duração do vídeo), redireciona para o blog
            setTimeout(() => {
                window.location.href = 'https://mindsemachine.site'; // Substitua pelo URL do seu blog
            }, 4000); // 4000 milissegundos = 4 segundos

        } else {
            // Login falhou: exibe mensagem de erro
            errorMessage.textContent = 'Usuário ou senha incorretos.';
        }
    });

   /* // Opcional: Esconde o vídeo após a reprodução (se não quiser redirecionar direto)
    introVideo.addEventListener('ended', () => {
        videoContainer.classList.remove('show');
        videoContainer.classList.add('hidden');
        window.location.href = 'https://mindsemachine.site'; // Redireciona após o vídeo terminar
    });*/
});