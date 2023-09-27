// const tinderUser = new Object(); // Singleton object
const tinderUser = {}; // Non-Singleton object

tinderUser.id = "123abc";
tinderUser.name = "Ashu";
tinderUser.isLoggedIn = false;
// console.log(tinderUser);

const regularUser = {
  email: "ashutosh@gmail.com",
  fullName: {
    userFullName: {
      firstName: "Ashutosh",
      lastName: "Naik",
    },
  },
};
// console.log(regularUser.fullName.userFullName.firstName);

const obj1 = { 1: "a", 2: "b" };
const obj2 = { 3: "a", 4: "b" };
const obj3 = { 5: "a", 6: "b" };

// const obj4 = { obj1, obj2 };
const obj4 = Object.assign({}, obj1, obj2, obj3);
// const obj4 = { ...obj1, ...obj2 };
console.log(obj4);

const users = [
  {
    id: 1,
    email: "ashutosh@gmail.com",
  },
  {
    id: 2,
    email: "ashutosh@microsoft.com",
  },
  {
    id: 3,
    email: "ashutosh@meta.com",
  },
];
console.log(users[1].email);

console.log(tinderUser);
console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty("isLoggedIn"));

const course = {
  name: "JavaScript for beginners",
  price: "499",
  courseInstructor: "ashutosh",
};

const { courseInstructor: instructor } = course;
console.log(instructor);
