const myNums = [1, 2, 3];

// const myTotal = myNums.reduce(function (accumulator, currentValue) {
//   console.log(`accumulator: ${accumulator} and currentValue: ${currentValue}`);
//   return accumulator + currentValue;
// }, 0);

const myTotal = myNums.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  0
);

console.log(myTotal);

const shoppingCart = [
  {
    courseName: "Web Development Course",
    price: 2999,
  },
  {
    courseName: "Mobile Development Course",
    price: 5499,
  },
  {
    courseName: "Data Science Course",
    price: 7999,
  },
];

const priceToPay = shoppingCart.reduce(
  (accumulator, course) => accumulator + course.price,
  0
);
console.log(priceToPay);
