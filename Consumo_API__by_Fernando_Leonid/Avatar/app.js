'use strict'

async function extrairEstilos() {
    const urlProxy = 'https://api.codetabs.com/v1/proxy?quest='
    const url = 'https://www.dicebear.com/styles/'

    //https://api.codetabs.com/v1/proxy?quest=<url_to_http_resource> 
    const response = await fetch(`${urlProxy}${url}`);
    const html = await response.text();
    const parser = new DOMParser();
    const doc = parser.parseFromString(html, 'text/html');
    const elementos = doc.querySelectorAll('h1[data-v-af8dff8e]');
    const estilos = [...elementos].map(elemento => elemento.textContent)
    //console.log(estilos);
    return estilos;
}
async function carregarEstilos() {
    const estilos = await extrairEstilos();
    const select = document.getElementById('estilo-select');
    estilos.forEach(estilo => {
        const option = document.createElement('option');
        option.value = estilo.toLowerCase().replace(' ', '-');
        option.textContent = estilo;
        select.appendChild(option);
    })
    console.log(estilos);
}

function gerarAvatar() {
    const nome = document.getElementById('nome-input').value.trim();
    const estilo = document.getElementById('estilo-select').value;
    const avatar = document.getElementById('avatar-conteiner')
    if (!nome || estilo == 'Selecione um estilo') {
        avatar.textContent = 'Preencha o nome e estilo'
    }
    else {
        const url = `https://api.dicebear.com/9.x/${estilo}/svg?seed=${nome}`;
        const img= document.createElement('img')
        img.src=url;
        avatar.replaceChildren(img)
        console.log("gerando: ", url)
    }

}

carregarEstilos();

document.getElementById('nome-input').addEventListener('input', gerarAvatar);
document.getElementById('estilo-select').addEventListener('change', gerarAvatar)
