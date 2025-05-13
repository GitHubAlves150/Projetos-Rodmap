'use strict'

const img_NoticeA = document.getElementById('Imagem-A');
const img_NoticeB = document.getElementById('Imagem-B');
const img_NoticeC = document.getElementById('Imagem-C');

const manchetA = document.getElementById('manchet-A');
const manchetB = document.getElementById('manchet-B');
const manchetC = document.getElementById('manchet-C');

const link1 = document.getElementById('link_1');
const IMGlink1 = document.getElementById('Img_1');
const NoticeDesc_ = document.getElementById('Descricaonoticias');
const TituloDesc_ = document.getElementById('TituloDesc');

let string = "";



function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}


async function NoticiasNew() {
     /*const APIKey = '2708f2cc67b64745be4c29e748e7277d';
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

        for (let c = 0; c < 3; c++) {
            await delay(2000);
            link1.href = data.news[4].url;
            IMGlink1.src = data.news[4].image;
            TituloDesc_.textContent = data.news[4].title;
            string = data.news[4].text;
            NoticeDesc_.textContent = string.slice(0, 300)+ '...';
            console.log("string..", string);

            await delay(2000);
            link1.href = data.news[5].url;
            IMGlink1.src = data.news[5].image;
            TituloDesc_.textContent = data.news[5].title;
            string = data.news[5].text;
            NoticeDesc_.textContent = string.slice(0, 300) + '...' ;
        }

    }
    catch (error) {
        alert("Ecedeu as requisições da API");
        NoticeDesc_.textContent = string.slice(0, 30);



    }

}


NoticiasNew();