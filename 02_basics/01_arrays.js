const myArr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(myArr);

const cricketers = [
  "Virat Kohli",
  "MS Dhoni",
  "Sachin Tendulkar",
  "Shane Warne",
  "Brian Lara",
];

const myArr2 = new Array(1, 2, 3, 4);

cricketers.push("AB de Villiers");
cricketers.push("Kumar Sangakkara");
cricketers.pop();

cricketers.unshift("Jacques Kallis");
cricketers.shift();

console.log(cricketers.includes("Glenn McGrath"));
console.log(cricketers.indexOf("Brian Lara"));

const newCricketers = cricketers.join();
console.log(typeof cricketers);
console.log(typeof newCricketers);

console.log("A ", cricketers);
const myNewCricketersOne = cricketers.slice(1, 4);
console.log(myNewCricketersOne);
console.log("B ", cricketers);

console.log("C ", cricketers);
const myNewCricketersTwo = cricketers.splice(1, 4);
console.log(myNewCricketersTwo);
console.log("D ", cricketers);
