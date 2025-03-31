'use strict'
const id= document.getElementById('users-Container');


async function getUsers(){
    const url="https://randomuser.me/api/" ;
    const response = await fetch(url);
    const data = await response.json();    
    console.log(data.results);
    id.textContent= data.results[0].phone;
}

await function loadusers()
{
    const users= getUsers();
}

loadusers();