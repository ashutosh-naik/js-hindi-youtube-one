const user = {
  username: "ashutosh",
  location: "India",
  age: 22,

  welcomeMessage: function () {
    console.log(`Hello ${this.username}, welcome to The Facebook`);
    console.log(this);
  },
};
// user.welcomeMessage();
// user.username = "sam";
// user.welcomeMessage();
// console.log(this);

// function chai() {
//   let username = "ashutosh";
//   console.log(this.username);
// }
// chai();

// const chai = function () {
//   let username = "ashutosh";
//   console.log(this.username);
// };

const chai = () => {
  let username = "ashutosh";
  console.log(this);
};
chai();

// const addTwo = (num1, num2) => {
//   return num1 + num2;
// };
// const addTwo = (num1, num2) => num1 + num2;
const addTwo = (num1, num2) => num1 + num2;
console.log(addTwo(4, 5));
