'user strict'
const dolar_ = document.getElementById('dolar_');
const dolarNUmberSaida = document.getElementById('dolar_saida');
dolar_.value="";
dolarNUmberSaida.value=""


async function Dolar() {
    const url = `https://economia.awesomeapi.com.br/last/USD-BRL/`;
    const response = await fetch(url);
    const data = await response.json();

    document.getElementById('USD-BRD').textContent = data.USDBRL.bid + " Real Brasileiro";
    document.getElementById('data_dolar').textContent = data.USDBRL.create_date;
    dolar_.addEventListener('input', function MostraDolar(){
        const resultado= dolar_.value * data.USDBRL.bid;
        dolarNUmberSaida.value=resultado;
    });

    console.log(">>", dolarNUmberSaida);

}



Dolar();
