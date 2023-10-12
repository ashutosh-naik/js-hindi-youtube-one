// object
const myObject = {
  js: "javascript",
  cpp: "c++",
  py: "python",
  kt: "kotlin",
  go: "golang",
};

for (const key in myObject) {
  console.log(`${key} for shortcut is for ${myObject[key]}`);
}

// array
const programming = ["js", "cpp", "py", "kt", "go"];
for (const key in programming) {
  console.log(programming[key]);
}

// const map = new Map();
// map.set("IN", "India");
// map.set("US", "United States of America");
// map.set("FR", "France");
// map.set("AU", "Australia");
// map.set("IN", "India");

// for (const key in map) {
//   console.log(key);
// }
