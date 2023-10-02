const temperature = 24;

if (temperature >= 35) {
  console.log("It's hot outside. Stay hydrated!");
} else {
  console.log("It's cold outside. Bundle up!");
}

const balance = 400;
if (balance <= 500) {
  console.log("balance is less than 500");
} else if (balance <= 750) {
  console.log("balance is less than 750");
} else if (balance == 1000) {
  console.log("balance is equal to 1000");
} else if (balance <= 1000) {
  console.log("balance is less than 1000");
} else {
  console.log("balance is not defined");
}

const userLoggedIn = true;
const debitCard = true;
const loggedInWithGoogle = false;
const loggedInWithEmail = true;

if (userLoggedIn && debitCard && (loggedInWithEmail || loggedInWithGoogle)) {
  console.log("Allowed to buy course");
} else {
  console.log("Login you account please!");
}
