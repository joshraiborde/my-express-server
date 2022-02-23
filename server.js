const express = require('express');

const app = express();

app.get('/', function(req, res){
    res.send("<h1>helloworld</h1>")
});

app.get('/today', (req, res) => {
    res.send("lets try this");
})

app.get('/about', (req, res) => {
    res.send("I love the way i am making scrambled eggs, they are so good! with chili sauce")
});

app.listen(3000, function() {
    console.log("sever started on port 3000");
});