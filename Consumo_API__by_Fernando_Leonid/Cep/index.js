const btn = document.getElementById('save');
const mensagem = document.getElementById('mensagem');
document.getElementById('endereco').value="";
document.getElementById('email').value="";
document.getElementById('cidade').value="";
document.getElementById('estado').value="";
document.getElementById('numero').value="";
document.getElementById('cep').value="";
document.getElementById('nome').value="";
document.getElementById('bairro').value="";



const preencherForm= (endereco)=>{
    if(!endereco.erro==true)
    {   

    document.getElementById('endereco').value =endereco.logradouro;
    document.getElementById('bairro').value = endereco.bairro;
    document.getElementById('cidade').value = endereco.localidade;
    document.getElementById('estado').value = endereco.estado;
    
    }
    else{
        alert("Cep não encontrado");
    }
    
}
const cepValido=(cep)=>{
    cep.length==8;
}

const pesquisar = async() => {
    const cep = document.getElementById('cep').value;
    if(!cepValido(cep))
    {
        //consultar o cep na API
        const url= `http://viacep.com.br/ws/${cep}/json/`;
        //realiza requizições HTTP/HTTPS de forma assincrona
        fetch(url).then(responde=>responde.json()).then(console.log);    
        const dados=await fetch(url);
        const endereco= await dados.json();
        box_result.textContent=`${endereco.logradouro},
                                ${endereco.localidade}`;
        preencherForm(endereco);
    }      

}

btn.addEventListener('click', pesquisar);
