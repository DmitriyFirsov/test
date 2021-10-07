import WebSocket from 'ws';

const ws = new WebSocket('ws://localhost');

ws.addEventListener('error', console.log);
ws.addEventListener('message', console.log);
