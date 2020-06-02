import * as TypesData from "./Data.js";
const Types = TypesData.default;
const button = document.querySelectorAll(".btn");
let TypeName = document.querySelectorAll(".TypeName");

let NewTypes = [];

button.forEach((btns) => {
  btns.addEventListener("click", () => {
    let buttonValue = btns.textContent;
    buttonAction(buttonValue);
    
    
    
  });
});

const buttonAction = (buttonValue) => {
  for (let x in Types) {
    Types[x].InteractionStyle.forEach((Index) => {
      if (buttonValue === Index) {
        TypeName.forEach((Name) => {
          if (Name.textContent === Types[x].type) {
            Name.classList.toggle("color");
          }
        });
      }
    });

    Types[x].Temperament.forEach((Index) => {
      if (buttonValue === Index) {
        TypeName.forEach((Name) => {
          if (Name.textContent === Types[x].type) {
            Name.classList.toggle("color");
          }
        });
      }
    });

    Types[x].Quadra.forEach((Index) => {
      if (buttonValue === Index) {
        TypeName.forEach((Name) => {
          if (Name.textContent === Types[x].type) {
            Name.classList.toggle("color");
          }
        });
      }
    });
  }
};
