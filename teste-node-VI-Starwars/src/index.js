const express = require('express');
const mongoose_ =  require('mongoose');

const app = express();
app.use(express.json());
const port = 3000;

mongoose_.connect('mongodb+srv://StarWars-API:idJXuhNTJu4D3Qym@starwars-api.o3hjlrg.mongodb.net/?retryWrites=true&w=majority&appName=StarWars-API');
const filme = mongoose_.model('filme', {
    title: String,
    description: String, 
    image_url: String,
    trailer_url: String

});

app.delete("/:id", async(req, res)=>{
    const film = await filme.findByIdAndDelete(req.params.id);
    return res.send(film);
});

app.get("/", async(req, res)=>{
    const filmes= await filme.find();
    return res.send(filmes);
});

app.post('/', async(req, res)=>{
    const film= new filme({
        title: req.body.title,
        description: req.body.description,
        image_url:req.body.image_url,
        trailer_url:req.body.image_url
    });
    await film.save().then( ()=>console.log('Ok!'));
    return res.send(film);    
});



app.listen(port, ()=>{
    console.log(`Exemple app listening on port ${port}`);
});
