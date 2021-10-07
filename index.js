const WebSocket = require('ws');

const ws = new WebSocket('ws://localhost:5000');

ws.addEventListener('error', console.log);
ws.addEventListener('message', console.log);
ws.addEventListener('open',()=>{
    ws.send('some data')
})
