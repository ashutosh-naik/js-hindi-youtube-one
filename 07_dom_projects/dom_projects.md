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
