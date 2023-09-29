// Immediately Invoked Function Expression (IIFE)

(function chai() {
  console.log(`DB CONNECTED`);
})();

(function aurcode() {
  console.log(`DB CONNECTED TWO`);
})();

(() => {
  console.log(`DB CONNECTED THREE`);
})();

((name) => {
  console.log(`DB CONNECTED FOUR ${name}`);
})("ashutosh");
