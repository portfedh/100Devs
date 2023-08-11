const EventEmitter = require('events');
const uuid = require('uuid');

// Creates a unique id
// v4 is one of the formats
// console.log(uuid.v4())

class Logger extends EventEmitter {
    log(msg) {
        // Call event
        this.emit('message', {id: uuid.v4(), msg});
    }
}

// In case you want to export this and run it from another file. 
// module.exports = Logger;

// For logger exercise
const Logger = require('./logger');

const logger = new Logger()

logger.on('message', data => console.log('Called listener', data));

logger.log('Hello world');
logger.log('Hi');
logger.log('Hello');

// HW: Bring fs module to append your messages to you file. 