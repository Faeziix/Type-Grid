
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
