const TypeNames = [
  "ESTJ",
  "ESTP",
  "ENTJ",
  "ENFJ",
  "ESFJ",
  "ESFP",
  "ENTP",
  "ENFP",
  "ISTJ",
  "ISTP",
  "INTJ",
  "INFJ",
  "ISFJ",
  "ISFP",
  "INTP",
  "INFP",
];
const button = document.querySelectorAll(".btn");
let GridTypes = document.querySelectorAll(".TypeName");
const resetBtn = document.querySelector(".reset");
let newType = TypeNames;
const submitBtn = document.getElementById("Submit");
const restartBtn = document.getElementById("restart");

(async function idk() {
  const type = await (await fetch("./Data2.json")).json();
  button.forEach((btns) => {
    btns.addEventListener("click", () => {
      btns.classList.add("btnClick");
      let btnName = btns.textContent;
      newType = newType.filter((e) => type[btnName].includes(e));
      filterTypes(newType);
      if (newType.length === 0) {
        alert(`there is no type with this attributes`);
        newType = TypeNames;
        button.forEach((btns) => btns.classList.remove("btnClick"));
      }
      if (newType.length === 1) {
        submitBtn.addEventListener("click", () => {
          document.querySelector(".result").classList.add("resultDisplay");
          let resultText = document.getElementById("result-text");
          const Name = document.querySelector(".Input-style").value;
          Name === ""
            ? (resultText.textContent = `you are ${newType[0]}`)
            : (resultText.textContent = `${Name} is ${newType[0]}`);
        });
      }
    });
  });
})();

function filterTypes(arr) {
  GridTypes.forEach((i) => i.classList.remove("color"));
  arr.forEach((i) => document.querySelector(`.${i}`).classList.add("color"));
}

resetBtn.addEventListener("click", () => {
  GridTypes.forEach((i) => i.classList.remove("color"));
  newType = TypeNames;
  button.forEach((btns) => btns.classList.remove("btnClick"));
});

restartBtn.addEventListener("click", () => {
  GridTypes.forEach((i) => i.classList.remove("color"));
  newType = TypeNames;
  button.forEach((btns) => btns.classList.remove("btnClick"));
  document.querySelector(".result").classList.remove("resultDisplay");
});
