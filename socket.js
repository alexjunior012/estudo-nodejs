var ws = require('websocket').server;
var http = require('http');

var socket = new ws({
    httpServer: http.createServer().listen(3000)
});

socket.on('request', function(request){
    var conn = request.accept(null, request.origin);

    console.log("origin -> ", request.origin);

    conn.on('message', function(message){
        conn.sendUTF("Hello from server");
    });

    conn.on('close', function(connection){
        console.log('connection is closed');
    });
});

