


const EventEmitter = require('events')

let eventEmitter = new EventEmitter();

class School extends EventEmitter{
    startClass(){
        console.log('class start')
        eventEmitter.emit('this time is learning')
    }
}

const school = new School()

school.on('lacture',(msg)=>{
    console.log('start lacture','all student in class room')
})
school.startClass();