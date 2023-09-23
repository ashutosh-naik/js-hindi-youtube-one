// Primitive: String, Number, Boolean, null, undefined, Symbol, BigInt
const score = 100; // typeof => number
const scoreValue = 100.3;

const isLoggedIn = false; // typeof => boolean
const outsideTemp = null; // typeof => object
let userEmail; // typeof => undefined

const id = Symbol("123"); // typeof => symbol
const anotherId = Symbol("123");
console.log(id === anotherId);

const bigNumber = 96325874123654789n; // typeof => bigint
console.log(bigNumber);

// Reference (Non-primitive): Array, Object, Function
const actors = ["Robert Di Niro", "Tom Hanks", "Tom Cruise"]; // typeof => object

let myObj = {
  name: "Ashutosh",
  age: 22,
}; // typeof => object

const myFunction = function () {
  console.log("Hello, world");
}; // typeof => function

console.log(typeof myFunction);
