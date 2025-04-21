'user scrict'
const btn = document.getElementById('novaCitacao');

async function carregaCitacao() {
    const url = 'https://stoic-quotes.com/api/quote';
    const response = await fetch(url);
    const data = await response.json();
    document.getElementById('citacaoBox').textContent= data.text ;
    document.getElementById('author').textContent= data.author;
    console.log("::", data);
}


asyn function mostrarCitacao() {

    const citacaoDiv = document.getElementById('citacaoBox');
    const citacao = await carregaCitacao();
    const citacaoBR= await
}


mostrarCitacao();


