'use strict'

async function NoticiasNew() {
    const APIKey='pub_851015f2be20baf5a5979dc3d5594ef2502b1';
    const url = `https://newsdata.io/api/1/latest?apikey=${APIKey}&q=tesla&language=en`;
    const img_Notice=document.getElementById('Imagem-A');

    try {
        const response = await fetch(url);
        const data = await response.json();

        img_Notice.src=data.results[0].image_url;
        
        console.log("Notícias do dia: ", data.results[0].image_url);
    }
    catch (error) {
        alert("Nop");
    }
}

NoticiasNew();