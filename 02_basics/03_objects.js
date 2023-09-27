// Singleton
// Object.create

// Object literals

const mySym = Symbol("key1");

const JsUser = {
  name: "Ashutosh",
  "full name": "Ashutosh Naik",
  [mySym]: "mykey1",
  age: 22,
  location: "Pune",
  email: "ashutosh@gmail.com",
  isLoggedIn: false,
  lastLoginDays: ["Monday", "Friday"],
};

console.log(JsUser.name);
console.log(JsUser["email"]);
console.log(JsUser["full name"]);
console.log(JsUser[mySym]);

JsUser.email = "ashutosh@youtube.com";
console.log(JsUser.email);
Object.freeze(JsUser);
JsUser.email = "ashutosh@microsoft.com";
console.log(JsUser);

JsUser.greeting = function () {
  console.log("Hello JS User");
};

JsUser.greetingTwo = function () {
  console.log(`Hello JS User, ${this["full name"]}`);
};

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());
