const WebSocket = require('ws');

const ws = new WebSocket('ws://localhost');

ws.addEventListener('error', console.log);
ws.addEventListener('message', console.log);
ws.addEventListener('open',()=>{
    ws.send('some data')
})
