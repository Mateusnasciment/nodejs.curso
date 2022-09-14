const { setDefaultResultOrder } = require('dns');
const EventEmitter = require('events');
const { start } = require('repl');
const emitter = new EventEmitter();
 

EventEmitter.on(start , () =>{
    console.log(durante)
})

console.log("antes")
 eventEmitter.emit(start)
 console.log("depois")
