// Stack (Primitive), Heap (Non-Primitive)

// Stack
let myUserName = "ashutoshnaik";
let anotherUserName = myUserName;

anotherUserName = "naikashu";

console.log(myUserName);
console.log(anotherUserName);
console.log(myUserName === anotherUserName);

// Heap
let userOne = {
  email: "user@google.com",
  upi: "7498881857@axl",
};

let userTwo = userOne;

userTwo.email = "ashutosh@gmail.com";

console.log(userOne.email);
console.log(userTwo.email);
