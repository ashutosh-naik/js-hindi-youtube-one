let a = 300;
if (true) {
  let a = 10;
  const b = 20;
  console.log("Inner:", a);
}

console.log("Outer:", a);

function one() {
  const username = "ashutosh";
  function two() {
    const website = "youtube.com";
    console.log(username);
  }
  // console.log(website);
  two();
}
one();

if (true) {
  const username = "ashutosh";
  if (username === "ashutosh") {
    const website = "youtube.com";
    console.log(username + " " + website);
  }
  // console.log(website);
}
// console.log(username);

function addOne(num) {
  return num + 1;
}
console.log(addOne(5));

const addTwo = function (num) {
  return num + 2;
};
console.log(addTwo(5));
