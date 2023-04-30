const EventEmitter = require('events');
const Logger = require('./eventlogger');
const logger = new Logger();
logger.on('messagelogged', (arg) => {
 console.log("listerner added", arg);
});
logger.log("message");