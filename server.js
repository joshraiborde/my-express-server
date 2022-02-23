const express = require('express');

const app = express();

app.get('/', function(request, response){
    response.send("<h1>helloworld</h1>")
});

app.listen(3000, function() {
    console.log("sever started on port 3000");
});