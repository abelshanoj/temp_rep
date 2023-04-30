const EventEmitter = require('events');
const emitter = new EventEmitter();
emitter.on('messagelogged', (arg) => {
 console.log("listerner added", arg);
});
emitter.emit('messagelogged', { "id": 1, "url": "https:/" });
//raise a signal