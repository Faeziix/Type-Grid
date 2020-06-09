const button = document.querySelectorAll(".btn");
let TypeName = document.querySelectorAll(".TypeName");
const resetBtn = document.querySelector(".reset");

fetch("./Data.json")
  .then((response) => response.json())
  .then((json) => {
    let NewTypes = [];
    let TypeContent = json.TypesData;

    button.forEach((btn) => {
      btn.addEventListener("click", () => {
        TypeName.forEach((i) => i.classList.remove("color"));
        console.clear();
        TypeContent.forEach((element) => {
          element.InteractionStyle.forEach((i) => {
            if (i === btn.textContent) {
              NewTypes.push(element);
              console.log(element.type);
              TypeName[element.id - 1].classList.add("color");
            }
          });
          element.CF.forEach((i) => {
            if (i === btn.textContent) {
              NewTypes.push(element);
              console.log(element.type);
              TypeName[element.id - 1].classList.add("color");
            }
          });
          element.Temperament.forEach((i) => {
            if (i === btn.textContent) {
              NewTypes.push(element);
              console.log(element.type);
              TypeName[element.id - 1].classList.add("color");
            }
          });
          if (element.Quadra === btn.textContent) {
            NewTypes.push(element);
            console.log(element.type);
            TypeName[element.id - 1].classList.add("color");
          }
        });

        TypeContent = NewTypes;
        NewTypes = [];
        if (TypeContent.length === 0) {
          alert("there is no type with this atributes");
          TypeContent = json.TypesData;
        }
      });
    });

    resetBtn.addEventListener("click", () => {
      console.clear();
      TypeContent = json.TypesData;
      TypeName.forEach((i) => i.classList.remove("color"));
    });
  });
