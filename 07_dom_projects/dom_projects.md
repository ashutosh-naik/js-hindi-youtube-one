# JavaScript DOM Projects

## Project 1 (JavaScript Background Color Switcher)

```javascript
const buttons = document.querySelectorAll(".button");
const body = document.querySelector("body");

buttons.forEach(function (button) {
  button.addEventListener("click", function (e) {
    // If Else
    // if (e.target.id === 'red') {
    //   body.style.backgroundColor = e.target.id;
    // } else if (e.target.id === 'pink') {
    //   body.style.backgroundColor = e.target.id;
    // } else if (e.target.id === 'yellow') {
    //   body.style.backgroundColor = e.target.id;
    // } else if (e.target.id === 'orange') {
    //   body.style.backgroundColor = e.target.id;
    // } else if (e.target.id === 'purple') {
    //   body.style.backgroundColor = e.target.id;
    // } else if (e.target.id === 'grey') {
    //   body.style.backgroundColor = e.target.id;
    // }

    // Switch
    switch (e.target.id) {
      case "red":
      case "pink":
      case "yellow":
      case "orange":
      case "purple":
      case "grey":
        body.style.backgroundColor = e.target.id;
        break;
    }
  });
});
```

## Project 2 (BMI Calculator)

```javascript
const form = document.querySelector("form");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const height = parseInt(document.querySelector("#height").value);
  const weight = parseInt(document.querySelector("#weight").value);
  const results = document.querySelector("#results");
  const weightStatus = document.querySelector("#weight-status");

  if (height === "" || height <= 0 || isNaN(height)) {
    results.innerHTML = "Please give a valid height";
  } else if (weight === "" || weight <= 0 || isNaN(weight)) {
    results.innerHTML = "Please give a valid weight";
  } else {
    const bmi = ((weight / (height * height)) * 10000).toFixed(2);
    results.innerHTML = `<span>${bmi}</span>`;
    if (bmi < 18.6) {
      weightStatus.innerHTML = `Underweight`;
    } else if (bmi > 24.9) {
      weightStatus.innerHTML = `Overweight`;
    } else {
      weightStatus.innerHTML = `Healthy Weight`;
    }
  }
});
```

## Project 3 (Digital Clock)

```javascript
const clock = document.getElementById("clock");

setInterval(function () {
  let date = new Date();
  clock.innerHTML = date.toLocaleTimeString();
}, 1000);
```
