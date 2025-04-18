'user strict';



async function preencherDados(cidad) {
    const key = 'a35065f1ba962474d326c2d609933bc3';
    const url = `http://api.openweathermap.org/data/2.5/weather?q=${encodeURI(cidad)}&appid=${key}`;
    const response = await fetch(url);
    const data = await response.json();
    document.getElementById(title-id).textContent= data.sys.name;
    console.log("::", data);
    
}



function preencheForm(event) {
    if (event.key == 'Enter') {
        const city= event.target.value;
        const info =preencherDados(city);
        console.log('>>',city);
    }
   
}



document
    .getElementById('search-name-id')
    .addEventListener('keydown', preencheForm);