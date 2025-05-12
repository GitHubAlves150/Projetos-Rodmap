'use strict'

const img_NoticeA = document.getElementById('Imagem-A');
const img_NoticeB = document.getElementById('Imagem-B');
const img_NoticeC = document.getElementById('Imagem-C');

const manchetA = document.getElementById('manchet-A');
const manchetB = document.getElementById('manchet-B');
const manchetC = document.getElementById('manchet-C');

const link1 = document.getElementById('link_1');
const IMGlink1 = document.getElementById('Img_1');



function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}


async function NoticiasNew() {
    const APIKey = '2708f2cc67b64745be4c29e748e7277d';
    const url = `https://api.worldnewsapi.com/search-news?api-key=${APIKey}&text=tesla`;
    /*  const url= `https://gnews.io/api/v4/search?q=example&apikey=6d6bdcface1b61181abcfbc925d9022f`; */



    try {
        const response = await fetch(url);
        const data = await response.json();

        img_NoticeA.src = data.news[3].image;
        manchetA.textContent = data.news[3].title;

        img_NoticeB.src = data.news[1].image;
        manchetB.textContent = data.news[1].title;

        img_NoticeC.src = data.news[2].image;
        manchetC.textContent = data.news[2].title;

        await delay(4000);
        link1.href = data.news[3].url;
        IMGlink1.src = data.news[3].image;

        console.log("Google News..", data.news[3]);

    }
    catch (error) {
        alert("Ecedeu as requisições da API");
    }

}


NoticiasNew();