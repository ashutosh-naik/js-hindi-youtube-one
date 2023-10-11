// for (let i = 1; i <= 10; i++) {
//   console.log(i);
// }

// for (let i = 1; i <= 10; i++) {
//   const element = i;
//   if (element == 5) {
//     console.log("5 is the best number");
//   }
//   console.log(element);
// }

// for (let i = 1; i <= 10; i++) {
//   // console.log(`Outer loop value: ${i}`);
//   console.log(`Multiplication table: ${i}`);
//   for (let j = 1; j <= 10; j++) {
//     // console.log(`Inner loop value: ${j} and outer loop value: ${i}`);
//     console.log(`${i} * ${j} = ${i * j}`);
//   }
//   console.log();
// }

// let myArr = ["Batman", "Superman", "Spiderman"];
// console.log(myArr.length);
// for (let index = 0; index < myArr.length; index++) {
//   const element = myArr[index];
//   console.log(element);
// }

// break
// for (let i = 1; i <= 20; i++) {
//   if (i == 5) {
//     console.log(`Detected 5`);
//     break;
//   }
//   console.log(`Value of i is ${i}`);
// }

// continue
for (let i = 1; i <= 20; i++) {
  if (i == 5) {
    console.log(`Detected 5`);
    continue;
  }
  console.log(`Value of i is ${i}`);
}
