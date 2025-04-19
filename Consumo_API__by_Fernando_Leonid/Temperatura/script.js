'user strict'
async function pesquisarClima(cidade) {
    const url = `http://api.weatherapi.com/v1/current.json?key=3fa9a0bf52f6413a94f192137251404&q=${cidade}&aqi=yes`
    const response = await fetch(url)
    const data = await response.json()
    document.getElementById('temp').textContent = data.current.temp_c;
    document.getElementById('wind_').textContent = data.current.wind_kph;
    document.getElementById('humidity_id').textContent = data.current.humidity;
    document.getElementById('city_id').textContent = data.location.name;
    const tempo = data.current.temp_c;
    mudanca(tempo);
}

function mudanca(tempo) {
    const elemento = document.getElementById('corpo');
    const icon = document.getElementById('icone');
    if (tempo < 22) {
        elemento.style.backgroundColor = 'blue';
        icon.src= 'chuva.png'
        

    }
    else if (tempo > 22) {
        elemento.style.backgroundColor = 'yellow';
    }
}

function prenecherForm(evento) {
    if (evento.key == 'Enter') {
        const cidade = evento.target.value;
        const info = pesquisarClima(cidade);
    }
}

//capturar o enter
document
    .getElementById('weather-search')
    .addEventListener('keydown', prenecherForm)