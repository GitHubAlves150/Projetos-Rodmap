'use strict'

const img_NoticeA = document.getElementById('Imagem-A');
const link_NoticeA = document.getElementById('Imagem-A');



const img_NoticeB = document.getElementById('Imagem-B');
const img_NoticeC = document.getElementById('Imagem-C');

const manchetA = document.getElementById('manchet-A');
const manchetB = document.getElementById('manchet-B');
const manchetC = document.getElementById('manchet-C');




async function NoticiasNew() {
  const APIKey = 'pub_851015f2be20baf5a5979dc3d5594ef2502b1';
  const url = `https://newsdata.io/api/1/latest?apikey=${APIKey}&q=tesla&language=en`;


  try {
    const response = await fetch(url);
    const data = await response.json();

    img_NoticeA.src = data.results[4].image_url;
    manchetA.textContent= data.results[4].title;


    img_NoticeB.src = data.results[5].image_url;
    manchetB.textContent= data.results[5].title;

    img_NoticeC.src = data.results[9].image_url;
    manchetC.textContent= data.results[9].title;

  console.log("Noticia..", data.results[9].title);

  }
  catch (error) {
    alert("nop");
  }

}


NoticiasNew();