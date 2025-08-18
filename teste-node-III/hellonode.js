//chame o modulo HTTP
var http = require("http");

//crie um servidor  HTTP para ouvir as requisoes na porta 8000
http.createServer(function(resuest, response){
	//configure o resposta HTTP header com o HTTP status e content type
        response.writeHead(200, {'Content-Type':"text/plain"});
	
	//Envia a resposta do body "Hello World"
	response.end("Hello World\n");

}).listen(8000);

//Imprima URL para acessar o servidor

console.log("Server running at http://127.0.0.1:8000/");
