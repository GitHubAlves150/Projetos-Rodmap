'user scrict'


async function carregaCitacao() {
    const url = 'https://stoic-quotes.com/api/quote';
    const response = await fetch(url);
    const data = await response.json();
    /*document.getElementById('citacaoBox').textContent= data.text ;*/
    document.getElementById('author').textContent = data.author;
    traduzirCitacao(data.text)

    console.log("::", data);
}

async function traduzirCitacao(citac) {
    const url = `https://api.mymemory.translated.net/get?q=${encodeURI(citac)}&langpair=en|pt`;
    const response = await fetch(url);
    const data = await response.json();
    document.getElementById('citacaoBox').textContent = data.matches[0].translation;
    console.log("traducao: ", data.matches[0].translation)

}

async function mostrarCitacao() {

   const caree= await carregaCitacao();
   const trad= await traduzirCitacao();
}

mostrarCitacao();
document.getElementById('novaCitacao').addEventListener('click', mostrarCitacao);




