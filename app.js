const coffee = require('./coffee');
const { firstName, lastName } = require('./user');
const http = require('http'); 

const moment = require('moment');
 
const date = moment().format("MMM Do YY");
console.log(date);
 
console.log(coffee);
console.log(firstName);
console.log(lastName);