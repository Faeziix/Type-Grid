import types from "./Data2.js";
import anime from "../../node_modules/animejs/lib/anime.es.js";

const button = document.querySelectorAll(".btn");

let newType = TypeNames;
let tempType;
let btnClicked = [];

button.forEach((btn) => {
  btn.addEventListener("click", () => btnClick(btn));
});

function btnClick(btns) {
  if (!btnClicked.includes(btns.textContent)) {
    btnClicked.push(btns.textContent);

    btnClicked.forEach((i) => {
      tempType = newType.filter((e) => types[i].includes(e));
    });

    if (tempType.length === 0) {
      tempType = newType;
      btnClicked.pop();
      animation(btns);
    } else {
      newType = tempType;
      colorize(tempType);
      btns.classList.toggle("btnClick");
    }
  } else {
    btnClicked.splice(btnClicked.indexOf(btns.textContent), 1);
    newType = TypeNames;
    btnClicked.forEach((i) => {
      newType = newType.filter((e) => types[i].includes(e));
    });
    if (newType.length === 16) {
      GridTypes.forEach((i) => i.classList.remove("color"));
    } else {
      colorize(newType);
    }
    btns.classList.toggle("btnClick");
  }
}

function colorize(arr) {
  GridTypes.forEach((i) => i.classList.remove("color"));
  arr.forEach((i) => document.querySelector(`.${i}`).classList.add("color"));
}

resetBtn.addEventListener("click", () => {
  GridTypes.forEach((i) => i.classList.remove("color"));
  button.forEach((btns) => btns.classList.remove("btnClick"));
  newType = TypeNames;
  btnClicked = [];
});

function animation(target) {
  anime({
    targets: target,
    duration: 200,
    keyframes: [
      { translateX: 100 },
      { translateX: -100 },
      { translateX: 100 },
      { translateX: -100 },
      { translateX: 100 },
      { translateX: -100 },
      { translateX: 100 },
      { translateX: -100 },
      { translateX: 0 },
    ],
    easing: "linear",
  });
}
