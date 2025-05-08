'user strict'
const dolarNUmber= document.getElementById('dolar_').value;


async function Dolar() {
    const url = `https://economia.awesomeapi.com.br/last/USD-BRL/`;
    const response= await fetch(url);
    const data = await response.json();

    document.getElementById('USD-BRD').textContent = data.USDBRL.bid +" Real Brasileiro";
    document.getElementById('data_dolar').textContent = data.USDBRL.create_date;

    console.log(">>", dolarNUmber);
    
}

Dolar();