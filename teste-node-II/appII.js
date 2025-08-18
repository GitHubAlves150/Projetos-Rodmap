var express = require("express");
var app = express();

app.get("/", function(req, res){ res.send("olá app2"); }

);

app.listen(300, function(){console.log("Executadno o app2 na porta 300") } 

);
