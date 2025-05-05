'user strict'



async function nasaDate() {
    try {
        const API_KEY = 'FqYFkud6Dfa8jZXnK5G9j5eVDaSKKhj4if3EZXK1';
        const url = `https://api.nasa.gov/insight_weather/?api_key=${API_KEY}&feedtype=json&ver=1.0`;
        const response = await fetch(url);
        const data = await response.json();

        /*DOM*/
        const JSO=data.sol_keys[6];
        console.log(":::", data);
        /*document.getElementById('mes_').textContent = data[JSO].Month_ordinal;*/
       let mes= data[JSO].Month_ordinal;
        switch (mes) {
            case 1:                
                console.log("Janeiro", mes);
            break;
            case 2:
                console.log("Fevereiro", mes);
            break;
            case 3:
                console.log("Março", mes);
            break;
            case 4:
                console.log("Abril", mes);
            break;
            case 5:
                console.log("Maio", mes);
            break;
            case 6:
                console.log("Junho", mes);
            break;
            case 7:
                console.log("Julho", mes);
            break;
            case 8:
                console.log("Agosto", mes);
            break;
            case 9:
                console.log("Setembro", mes);
            break;
            case 10:
                console.log("Outubro", mes);
            break;
            case 11:
                
                document.getElementById('sol_atual').textContent=JSO;   
                const diaMarciano= data[JSO].Last_UTC;             
                document.getElementById('mes_').textContent="Novembro "+diaMarciano.slice(8, 10);
                document.getElementById('High_temp').textContent= data[JSO].AT.mx;
                document.getElementById('Low_temp').textContent= data[JSO].AT.mn;
                
                console.log("Novembro", mes);
            break;
            case 12:
                console.log("Dezembro", mes);
            break;
        }

        /*Console*/



    }
    catch (error) {
        alert("Nao respondendo...", error)
    }

}

nasaDate();