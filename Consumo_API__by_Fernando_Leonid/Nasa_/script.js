'user strict'



async function nasaDate() {
    try {
        const API_KEY = 'FqYFkud6Dfa8jZXnK5G9j5eVDaSKKhj4if3EZXK1';
        const url = `https://api.nasa.gov/insight_weather/?api_key=${API_KEY}&feedtype=json&ver=1.0`;
        const response = await fetch(url);
        const data = await response.json();

        /*DOM*/
        const meses = ["Default", "Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];
        const JSO = data.sol_keys[6];
        console.log(":::", JSO, meses[1]);
        /*document.getElementById('mes_').textContent = data[JSO].Month_ordinal;*/
        let mes = data[JSO].Month_ordinal;

        console.log(data)
        for (let c = 1; c <= 12; c++) {
            if (c === mes) {
                document.getElementById('sol_atual').textContent = JSO;
                const diaMarciano0 = data[JSO].Last_UTC;
                document.getElementById('mes_').textContent = meses[c] + " " + diaMarciano0.slice(8, 10);
                document.getElementById('High_temp').textContent = data[JSO].AT.mx;
                document.getElementById('Low_temp').textContent = data[JSO].AT.mn;
                console.log("Novembro", mes);
                /*=========semanais==========*/
                /*Monday*/
                document.getElementById('monday').textContent = "Sol " + (JSO - 6);
                const diaMarciano1 = data[(JSO - 6)].Last_UTC;
                document.getElementById('mes_monday').textContent = meses[c] + " " + diaMarciano1.slice(8, 10);
                document.getElementById('High_temp_monday').textContent = data[(JSO - 6)].AT.mx;
                document.getElementById('Low_temp_monday').textContent = data[(JSO - 6)].AT.mn;
                /*Tuesday*/
                document.getElementById('Tuesday').textContent = "Sol " + (JSO - 5);
                const diaMarciano2 = data[(JSO - 5)].Last_UTC;
                document.getElementById('mes_Tuesday').textContent = meses[c] + " " + diaMarciano2.slice(8, 10);
                document.getElementById('High_temp_Tuesday').textContent = data[(JSO - 5)].AT.mx;
                document.getElementById('Low_temp_Tuesday').textContent = data[(JSO - 5)].AT.mn;
                /*Wednesday*/
                document.getElementById('Wednesday').textContent = "Sol " + (JSO - 4);
                const diaMarciano3 = data[(JSO - 4)].Last_UTC;
                document.getElementById('mes_Wednesday').textContent = meses[c] + " " + diaMarciano3.slice(8, 10);
                document.getElementById('High_temp_Wednesday').textContent = data[(JSO - 4)].AT.mx;
                document.getElementById('Low_temp_Wednesday').textContent = data[(JSO - 4)].AT.mn;
                /*Thursday*/
                document.getElementById('Thursday').textContent = "Sol " + (JSO - 3);
                const diaMarciano4 = data[(JSO - 3)].Last_UTC;
                document.getElementById('mes_Thursday').textContent = meses[c] + " " + diaMarciano4.slice(8, 10);
                document.getElementById('High_temp_Thursday').textContent = data[(JSO - 3)].AT.mx;
                document.getElementById('Low_temp_Thursday').textContent = data[(JSO - 3)].AT.mn;
                /*Fryday*/
                document.getElementById('Fryday').textContent = "Sol " + (JSO - 2);
                const diaMarciano5 = data[(JSO - 2)].Last_UTC;
                document.getElementById('mes_Fryday').textContent = meses[c] + " " + diaMarciano5.slice(8, 10);
                document.getElementById('High_temp_Fryday').textContent = data[(JSO - 2)].AT.mx;
                document.getElementById('Low_temp_Fryday').textContent = data[(JSO - 2)].AT.mn;
                /*Satuday*/
                document.getElementById('Satuday').textContent = "Sol " + (JSO - 1);
                const diaMarciano6 = data[(JSO - 1)].Last_UTC;
                document.getElementById('mes_Satuday').textContent = meses[c] + " " + diaMarciano6.slice(8, 10);
                document.getElementById('High_temp_Satuday').textContent = data[(JSO - 1)].AT.mx;
                document.getElementById('Low_temp_Satuday').textContent = data[(JSO - 1)].AT.mn;
                /*Sunday */
            }



        }




        /*Console*/



    }
    catch (error) {
        alert("Nao respondendo...", error)
    }

}

nasaDate();