'use strict'

async function extrairEstilos(){
    const urlProxy='https://api.codetabs.com/v1/proxy?quest='
    const url='https://www.dicebear.com/styles/'

    //https://api.codetabs.com/v1/proxy?quest=<url_to_http_resource> 
    const response =await fetch(`${urlProxy}${url}`);
    const html =await response.text();
    const parser = new DOMParser();
    const doc = parser.parseFromString(html, 'text/html');
    const elementos = doc.querySelectorAll('p[data-v-af8dff8e]');
    const estilos=[...elementos].map(elemento=>elemento.textContent)
    //console.log(estilos);
    return estilos;
}
async function carregarEstilos(){
    const estilos = await extrairEstilos();
    const select= document.getElementById('estilo-select');
    estilos.forEach(estilo=>{
        const option=document.createElement('option')
    })
    console.log(estilos);
}

carregarEstilos();