const arr = [1, 2, 3, 4, 5];
for (const num of arr) {
  console.log(num);
}

const greetings = "Hello, World!";
for (const greet of greetings) {
  if (greet == " ") {
    continue;
  }
  console.log(`Each char is ${greet}`);
}

// Maps
const map = new Map();
map.set("IN", "India");
map.set("US", "United States of America");
map.set("FR", "France");
map.set("AU", "Australia");
map.set("IN", "India");
console.log(map);

for (const [key, value] of map) {
  console.log(key, ":-", value);
}

// const myObject = {
//   game1: "PUBG: Battlegrounds",
//   game2: "Counter-Strike: Global Offensive",
// };

// for (const [key, value] of myObject) {
//   console.log(key, ":-", value);
// }
