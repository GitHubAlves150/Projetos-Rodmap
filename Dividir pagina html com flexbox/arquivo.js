'use strict'



async function apiLinks() {
    const url = `https://fathomless-hollows-78979-ecc98fbb7725.herokuapp.com`;
    //const url = 'https://stoic-quotes.com/api/quote';
    const response = await fetch(url);
    const data = await response.json();
    console.log("::", data);

    document.getElementById('_indice_0_description').textContent = data[0].description;
    document.getElementById('_indice_0_img').src = data[0].image_url;

    document.getElementById('_indice_0_description').textContent = data[1].description;
    document.getElementById('_indice_0_img').src = data[1].image_url;

    //imagem com link

    // Define o URL do link e o URL da imagem
    const urlDoLink = data[0].trailer_url;// Mude para o seu URL desejado
    const urlDaImagem = data[0].image_url;// Mude para o URL da sua imagem

    // Cria um novo elemento de âncora (link)
    const link = document.createElement('a');

    // Define o atributo href do link
    link.href = urlDoLink;
    link.target = "_blank"; // Abre o link em uma nova aba

    // Cria um novo elemento de imagem
    const imagem = document.createElement('img');

    // Define o atributo src da imagem com o URL da imagem
    imagem.src = urlDaImagem;
    imagem.alt = "Descrição da imagem"; // Adiciona texto alternativo para acessibilidade

    // Adiciona a imagem como filho do elemento de âncora
    link.appendChild(imagem);

    

    // Adiciona o elemento de link (com a imagem dentro) ao div no HTML
    document.getElementById('container-da-imagem').appendChild(link);
}


apiLinks();