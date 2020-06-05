import * as TypesData from "./Data.js";
let Types = TypesData.default;
const button = document.querySelectorAll(".btn");
let TypeName = document.querySelectorAll(".TypeName");
let NewTypes = [];

button.forEach((btns) => {
  btns.addEventListener("click", () => {
    TypeName.forEach((Name) => {
      Name.classList.remove("color");
    });
    
    let buttonValue = btns.textContent;

    buttonAction(buttonValue);
    Types = NewTypes;
    NewTypes = [];

    if (Types.length === 1) {
      alert(`Your Type is ${Types[0].type}`);
    } else if (Types.length === 0) {
      Types = TypesData.default;
    }
  });
});

const buttonAction = (buttonValue) => {
  for (let x in Types) {
    Types[x].InteractionStyle.forEach((Index) => {
      if (buttonValue === Index) {
        NewTypes.push(Types[x]);
        Colorize();
      }
    });

    Types[x].Temperament.forEach((Index) => {
      if (buttonValue === Index) {
        NewTypes.push(Types[x]);
        Colorize();
      }
    });

    Types[x].CF.forEach((Index) => {
      if (buttonValue === Index) {
        NewTypes.push(Types[x]);
        Colorize();
      }
    });

    if (Types[x].Quadra === buttonValue) {
      NewTypes.push(Types[x]);
      Colorize();
    }

    function Colorize() {
      TypeName.forEach((Name) => {
        if (Name.textContent === Types[x].type) {
          Name.classList.add("color");
        }
      });
    }
  }
};
