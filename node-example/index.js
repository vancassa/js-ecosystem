// NodeJS is using CommonJS syntax for the module

const add = require("./sum");
const { factorial } = require("./library");

console.log(`Sum of 1 and 2 is ${add(1, 2)}`);
console.log(`Factorial of 5 is ${factorial(5)}`);
