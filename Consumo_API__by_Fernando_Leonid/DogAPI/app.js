const dogIMG = document.getElementById('dog-img');

async function UpDateDogImg() {
    const nomeraca = document.getElementById('breedName');
    const URL= "https://dog.ceo/api/breeds/image/random";
    const response= await fetch(URL);//recebe a resposta do servidor
    const data = await response.json();
    
    dogIMG.src = data.message;
    nomeraca.textContent = data.message.split('/')[4];
}

dogIMG.addEventListener('click', UpDateDogImg);






