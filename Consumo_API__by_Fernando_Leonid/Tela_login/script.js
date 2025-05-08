'user strict'

document.getElementById('username').textContent=" ";

document.getElementById('btn').addEventListener('click', (event) => {



    const loginContainer = document.getElementById('login-container');  
    const imageContainer = document.getElementById('image-container'); 

  
    const userINPUT = document.getElementById('username');
    const pwINPUT = document.getElementById('password');
    const user = userINPUT.value.trim();    
    const pw = pwINPUT.value.trim();
    

    if (user === 'admin' && pw === 'admin') {


        setTimeout(() => {
            imageContainer.classList.add('show'); // Inicia o fade-in da imagem
        }, 50);


        setTimeout(() => {
            window.location.href = 'https://mindsemachine.site/';

        }, 1000);

    }
    else {
        alert("Nao foi possivel abrir tal pagina...");
    }

});





