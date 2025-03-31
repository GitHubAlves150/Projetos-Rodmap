
'use strict'
const cors = require('cors'); // Importe o pacote cors
app.use(cors()); // Use o middleware cors

async function loadGallery() {

    const _gallery = document.getElementById('gallery');
    const url = 'https://api.thecatapi.com/v1/images/search?limit=10';
    try {
        const response = await fetch(url);
       if(!response.ok)
       {
        alert("No response");
       }
       const _json= await response.json();
       console.log(_json);
    }
    catch(error)
    {
        alert(error.message);
    }   
   

}
loadGallery();
//butt.addEventListener('click', loadGallery);