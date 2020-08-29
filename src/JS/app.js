import { types } from "./Data2.js";

let newType = TypeNames;
let tempType;

button.forEach((btns) => {
  btns.addEventListener("click", () => btnClick(btns));
});

function btnClick(btns) {
  tempType = newType.filter((e) => types[btns.textContent].includes(e));
  colorize(tempType);
  if (tempType.length === 0) {
    alert(`there is no type with this attributes`);
    tempType = newType;
    colorize(newType);
  }else {
    newType = tempType
    btns.classList.add("btnClick");
  }
}

function colorize(arr) {
  GridTypes.forEach((i) => i.classList.remove("color"));
  arr.forEach((i) => document.querySelector(`.${i}`).classList.add("color"));
}

resetBtn.addEventListener("click", () => {
  GridTypes.forEach((i) => i.classList.remove("color"));
  newType = TypeNames;
  button.forEach((btns) => btns.classList.remove("btnClick"));
});
