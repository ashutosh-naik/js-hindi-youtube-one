function sayMyName() {
  console.log("ASHUTOSH");
}
sayMyName();

// function addTwoNums(num1, num2) {
//   console.log(num1 + num2);
// }

function addTwoNums(num1, num2) {
  let result = num1 + num2;
  return result;
}
const result = addTwoNums(3, 5);
console.log("Result: ", result);

function loginUserMessage(username) {
  if (username === undefined) {
    console.log("Please enter a username");
    return;
  }
  return `${username} just logged in`;
}
console.log(loginUserMessage("ashutosh"));

function calculateCartPrice(...num1) {
  return num1;
}
console.log(calculateCartPrice(200, 400, 1000, 2000));

const user = {
  username: "ashutosh",
  age: 22,
};
function handleObject(anyObject) {
  console.log(`Username is ${anyObject.username} and age is ${anyObject.age}`);
}
// handleObject(user);
handleObject({
  username: "ashu",
  age: 20,
});

const myNewArr = [200, 400, 600, 800];
function returnSecondValue(getArr) {
  return getArr[1];
}
console.log(returnSecondValue(myNewArr));
