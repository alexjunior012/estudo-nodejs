var express = require('express');

var app = express();

app.get('/', function(request, response){
    response.send('Hello from Alex express');
});

app.get('/hello/:name', function(request, response){
    response.json({
        message: 'This is my param '+request.params.name
    });
});

app.get('/hello', function(request, response){
    response.json({
        message: 'This is my router hello witch json'
    })
});

app.listen(3000, function () {
    console.log('express has been started');
});