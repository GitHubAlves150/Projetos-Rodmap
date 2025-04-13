
function exibirDadospais(inf_pais){
    console.log(inf_pais);
    document.getElementById('country-flag').src = inf_pais.flags.png;//pegar a foto e colocar no src da tag img
    document.getElementById('country-name').textContent = inf_pais.name.common;
    document.getElementById('country-capital').textContent = inf_pais.capital[0];
    
    
}
async function obterpais(pais) {
    const url = `https://restcountries.com/v3.1/name/${pais}`;
    const response = await fetch(url);
    const data = await response.json();
    console.log("resultado: ", data);
    return data[0];    
}


const inp = document.getElementById('country-input').addEventListener('keydown', async (monitorEvento) => {
    if (monitorEvento.key == 'Enter') {
        const I_pais = await obterpais(monitorEvento.target.value);
        exibirDadospais(I_pais);

    }
})