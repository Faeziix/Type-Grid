import * as TypesData from "./Data.js";
let Types = TypesData.default;
const button = document.querySelectorAll(".btn");
let TypeName = document.querySelectorAll(".TypeName");

let NewTypes = [];

button.forEach((btns) => {
  btns.addEventListener("click", () => {
    let buttonValue = btns.textContent;
    buttonAction(buttonValue);
    console.log(NewTypes);
    Types = NewTypes;
    NewTypes = [];
    if (Types.length === 0) {
      alert("there is no type with this attributes. please try again");
      Types = TypesData.default;
      console.clear();
    }
  });
});

const buttonAction = (buttonValue) => {
  for (let x in Types) {
    Types[x].InteractionStyle.forEach((Index) => {
      if (buttonValue === Index) {
        NewTypes.push(Types[x]);
      }
    });

    Types[x].Temperament.forEach((Index) => {
      if (buttonValue === Index) {
        NewTypes.push(Types[x]);
      }
    });

    Types[x].Quadra.forEach((Index) => {
      if (buttonValue === Index) {
        NewTypes.push(Types[x]);
      }
    });

    // function Colorize() {
    //   TypeName.forEach((Name) => {
    //     if (Name.textContent === Types[x].type) {
    //       Name.classList.add("color");
    //     }
    //   });
    // }
    // function unColorize() {
    //   TypeName.forEach((Name) => {

    //       Name.classList.remove("color");

    //   });
    // }
  }
};
