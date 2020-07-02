let newType = TypeNames;
const type = (async function idk() {
  return await (await fetch("./data/Data2.json")).json();
})();

type.then((type) => {
  button.forEach((btns) => {
    btns.addEventListener("click", () => btnClick(btns, type));
  });
});

function btnClick(btns, type) {
  btns.classList.add("btnClick");
  newType = newType.filter((e) => type[btns.textContent].includes(e));
  colorize(newType);
  if (newType.length === 0) {
    alert(`there is no type with this attributes`);
    newType = TypeNames;
    button.forEach((btns) => btns.classList.remove("btnClick"));
  }
  if (newType.length === 1) {
    submitBtn.style.cursor = 'pointer';
    submitBtn.addEventListener("click", submit, { once: true });
  }
}

function colorize(arr) {
  GridTypes.forEach((i) => i.classList.remove("color"));
  arr.forEach((i) => document.querySelector(`.${i}`).classList.add("color"));
}


function submit() {
  document.querySelector(".result").classList.add("resultDisplay");
  let resultText = document.getElementById("result-text");
  const Name = document.querySelector(".Input-style").value;
  Name === ""
    ? (resultText.textContent = `you are ${newType[0]}`)
    : (resultText.textContent = `${Name} is ${newType[0]}`);
  submitBtn.style.cursor = 'not-allowed'
}
