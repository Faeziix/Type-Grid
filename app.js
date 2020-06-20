const button = document.querySelectorAll(".btn");
let TypeName = document.querySelectorAll(".TypeName");
const resetBtn = document.querySelector(".reset");

async function idk() {
  let type = await (await fetch("./Data2.json")).json();
  console.log(type.Direct.diff(type.Initiating))
  button.forEach((btns) => {
    btns.addEventListener("click", () => {
      console.time("total");
      TypeName.forEach((i) => i.classList.remove("color"));
      type[btns.textContent].forEach((i) => {
        document.querySelector(`.${i}`).classList.add("color");
      });
      console.timeEnd("total");
    });
  });
}
idk();

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

resetBtn.addEventListener("click", () => {
  TypeName.forEach((i) => i.classList.remove("color"));
});
