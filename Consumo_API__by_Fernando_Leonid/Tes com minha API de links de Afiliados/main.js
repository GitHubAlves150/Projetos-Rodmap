'use strict'


async function apiLinks() {
    const url= `https://fathomless-hollows-78979-ecc98fbb7725.herokuapp.com`;
    //const url = 'https://stoic-quotes.com/api/quote';
    const response= await fetch(url);
    const data= response.json();
    console.log("::", data);
}

apiLinks();