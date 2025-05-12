'use strict'

const slides = document.querySelectorAll('.slide');
let currentINDEX = 0;
const intervalTime = 3000;//2s

function showSlide(index) {
    slides.forEach(slide => slide.classList.remove('active'));
    slides[index].classList.add('active');

}
/*
Em JavaScript, dentro do contexto do código de slide de imagens que forneci, a expressão slide => slide.classList.remove('active') é parte de uma função de callback utilizada pelo método forEach em um array de elementos HTML. Vamos decompor o significado:

    slides: Esta é uma variável que armazena um NodeList (uma espécie de array) contendo todos os elementos HTML que possuem a classe slide. No nosso exemplo, seriam as tags <img> dentro do div com a classe slider-container.

    .forEach(): Este é um método disponível em arrays (e em NodeLists) que permite executar uma determinada função para cada elemento do array. No nosso caso, ele vai iterar por cada um dos elementos de imagem (slide) dentro da variável slides.

    slide => ...: Esta é uma função de seta (arrow function) em JavaScript. É uma forma mais concisa de escrever uma função anônima. Neste caso, para cada elemento slide no array slides, a função à direita da seta será executada. O parâmetro slide representa o elemento HTML atual durante a iteração.

    slide.classList: Cada elemento HTML no JavaScript possui uma propriedade chamada classList, que é um objeto que representa a lista de classes CSS aplicadas a esse elemento. Ele fornece métodos úteis para manipular essas classes.

    .remove('active'): Este é um método do objeto classList. Ele remove a classe CSS especificada (neste caso, a classe 'active') do elemento HTML ao qual classList pertence (slide).

Em resumo, a linha slides.forEach(slide => slide.classList.remove('active')); faz o seguinte:

Para cada elemento HTML que possui a classe slide (ou seja, cada imagem no nosso slide):*/
function nextSlide() {
    currentINDEX++;
    if (currentINDEX >= slides.length) {
        currentINDEX = 0//volta para a primeira imagem
    }
    showSlide(currentINDEX);

}
//inicia o slide automatico
setInterval(nextSlide, intervalTime);
