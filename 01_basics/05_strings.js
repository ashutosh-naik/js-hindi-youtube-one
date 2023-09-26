const name = "Ashutosh";
const repoCount = 50;

// console.log(name + repoCount + "value"); outdated

console.log(`Hello, my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String("ashutosh-Gamer");
console.log(gameName[0]);
console.log(gameName.__proto__);
console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(6));
console.log(gameName.indexOf("a"));

const newString = gameName.substring(0, 5);
console.log(newString);

const anotherString = gameName.slice(1, 5);
console.log(anotherString);

const newStringOne = "     ashutosh     ";
console.log(newStringOne.trim());

const url = "https://www.ashutosh.com/ashutosh%20naik";
console.log(url.replace("%20", "-"));
console.log(url.includes("ashutosh"));
console.log(url.includes("javascript"));
