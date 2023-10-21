const moment = require('moment');

const date = moment().format("MM Do YY");
console.log(date);

const message = (name) => {
    console.log(`Hello ${name}`);
}

message('yoyo');

// Event Emitter Test Site
const { EventEmitter } = require('events');
const myEventEmitter = new EventEmitter();

const makeCoffee = ({coffeeName}) => {
    console.log(`Kopi ${coffeeName} telah selesai dibuat!`);
}

const makeBill = ({coffeePrice}) => {
    console.log(`Bill sebesar $${coffeePrice} telah selesai dibuat!`);
}

const onCoffeeOrderedListener = ({coffeeName, coffeePrice}) => {
    makeCoffee({coffeeName});
    makeBill({coffeePrice});
}

myEventEmitter.on('make-a-order', onCoffeeOrderedListener);

let allCoffeePrice = 20;

for (let timer = 0; timer <= 100; timer++){
    console.log(timer);
    if (timer == 100){
        myEventEmitter.emit('make-a-order', { coffeeName: 'Arabica', coffeePrice: allCoffeePrice });
    }
}