//carrega o modulo http do Node
var http = require("http");

//Cria um servidor HTTP e uma escuta de requisisões para a porta 8000
http.createServer(function(request, response){
	//configura o cabeçalho da resposta com um status HTTP e um tipo de Conteudo
       response.writeHead(200, {"Content-Type":"text/plain"});
       
      //Manda o corpo da resposta "Olá Mundo"
	response.end("Olá mundo, estou aqui para todos me verem");

})
.listen(8000, "127.0.0.1");

//Imprime no console a url de acesso ao servidor
console.log("Servidor executando em http://127.0.0.1:8000/");
