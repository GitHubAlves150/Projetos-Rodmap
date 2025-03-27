
const calc = document.getElementById('calcular');
nome.value="";
altura.value="";
peso.value="";

//
function imc() {
    const nome = document.getElementById('nome').value;
    const altura = document.getElementById('altura').value;
    const peso = document.getElementById('peso').value;
    const result = document.getElementById('resultado');

    if (nome !== "" && altura !== "" && peso !== "") 
    {
const imc =(peso/(altura * altura) ) ;
        //result.textContent= nome+" tem "+peso+"Kg"+" e mede "+altura+" de altura."+ " E seu imc é: "+imc.toFixed(2); 
        //OU
        result.textContent= `${nome} tem ${peso}Kg e mede ${altura} de altura.E seu imc é: ${imc.toFixed(2)}`; 
    }
    else
    {
        window.alert("Existem campos vazios");
    }
    
}
calc.addEventListener('click', imc);




//Referencia
//https://www.youtube.com/watch?v=RacwEvoTz_Y&list=PLDgemkIT111AzoS1rB61sgMJbsEA4pyD2
//https://www.youtube.com/watch?v=imk6Y0viabg&list=PLDgemkIT111CC2JlQS1E4BO4G5cZKIq9-