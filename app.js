const button = document.querySelectorAll(".btn");
let TypeName = document.querySelectorAll(".TypeName");
const resetBtn = document.querySelector(".reset");
const allTypes = [
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
let newType = allTypes;

async function idk() {
  return await (await fetch("./Data2.json")).json();
}

idk().then((type) => {
  button.forEach((btns) => {
    btns.addEventListener("click", () => {
      newType = newType.diff(type[btns.textContent]);
      filteredType(newType);
    });
  });
});

resetBtn.addEventListener("click", () => {
  TypeName.forEach((i) => i.classList.remove("color"));
  newType = allTypes;
});

function filteredType(arr) {
  TypeName.forEach((i) => i.classList.remove("color"));
  arr.forEach((i) => document.querySelector(`.${i}`).classList.add("color"));
  if (arr.length === 0) {
    alert(`there is no type with this attributes`);
    newType = allTypes;
  }
}

Array.prototype.diff = function (arr2) {
  var ret = [];
  this.sort();
  arr2.sort();
  for (var i = 0; i < this.length; i += 1) {
    if (arr2.indexOf(this[i]) > -1) {
      ret.push(this[i]);
    }
  }
  return ret;
};
