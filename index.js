const moment = require('moment');

const date = moment().format("MM Do YY");
console.log(date);

const message = (name) => {
    console.log(`Hello ${name}`);
}

message('yoyo');