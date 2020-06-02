import * as TypesData from "./Data.js";
const Types = TypesData.default;
const button = document.querySelectorAll(".btn");

button.forEach((buttons) => {
  buttons.addEventListener("click", () => {
    let buttonValue = buttons.textContent;
    Types[0].Temperament
    
  });
});

