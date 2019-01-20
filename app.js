var express = require('express');
var app = express();

app.get("/", function(req, res){
    console.log("SOMEONE REQUESTED US!");
});

 app.listen(443, function(){
   console.log('App listening on port 8080!');
 });
