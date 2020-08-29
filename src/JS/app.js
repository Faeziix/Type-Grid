let types = {
  Direct: ["ESTJ", "ESTP", "ENTJ", "ENFJ", "ISTJ", "ISTP", "INTJ", "INFJ"],
  Informative: ["ESFJ", "ESFP", "ENTP", "ENFP", "ISFJ", "ISFP", "INTP", "INFP"],
  Initiating: ["ESTJ", "ESTP", "ENTJ", "ENFJ", "ESFJ", "ESFP", "ENTP", "ENFP"],
  Responding: ["ISTJ", "ISTP", "INTJ", "INFJ", "ISFJ", "ISFP", "INTP", "INFP"],
  Control: ["ESTJ", "ESTP", "ENTJ", "ENFJ", "ISFJ", "ISFP", "INTP", "INFP"],
  Movement: ["ESFJ", "ESFP", "ENTP", "ENFP", "ISTJ", "ISTP", "INTJ", "INFJ"],
  Affiliative: ["ESTJ", "ESFJ", "ISTJ", "ISFJ", "ENFJ", "ENFP", "INFJ", "INFP"],
  Pragmatic: ["ESTP", "ESFP", "ISTP", "ISFP", "ENTJ", "ENTP", "INTJ", "INTP"],
  Abstract: ["ENTJ", "ENTP", "INTJ", "INTP", "ENFJ", "ENFP", "INFJ", "INFP"],
  Concrete: ["ESTJ", "ESFJ", "ISTJ", "ISFJ", "ESTP", "ESFP", "ISTP", "ISFP"],
  Systematic: ["ESTJ", "ESFJ", "ISTJ", "ISFJ", "ENTJ", "ENTP", "INTJ", "INTP"],
  Interest: ["ESTP", "ESFP", "ISTP", "ISFP", "ENFJ", "ENFP", "INFJ", "INFP"],
  "Se-Ni": ["ESTP", "ESFP", "ISTP", "ISFP", "ENTJ", "INTJ", "ENFJ", "INFJ"],
  "Si-Ne": ["ESTJ", "ESFJ", "ISTJ", "ISFJ", "ENTP", "INTP", "ENFP", "INFP"],
  "Ti-Fe": ["ESTP", "ENFJ", "ESFJ", "ENTP", "ISTP", "INFJ", "ISFJ", "INTP"],
  "Te-Fi": ["ESTJ", "ENTJ", "ESFP", "ENFP", "ISTJ", "INTJ", "ISFP", "INFP"],
  Crusader: ["ESFJ", "ENTP", "ISFJ", "INTP"],
  Templar: ["ESTP", "ENFJ", "ISTP", "INFJ"],
  Wayfarer: ["ENTJ", "ESFP", "INTJ", "ISFP"],
  Philosopher: ["ESTJ", "ENFP", "ISTJ", "INFP"],
};
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

const resetBtn = document.querySelector(".reset");
const button = document.querySelectorAll(".btn");
let GridTypes = document.querySelectorAll(".TypeName");


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
      alert(`there is no type with these attributes`);
      tempType = newType;
      btnClicked.pop();
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
