const button = document.querySelectorAll(".btn");
let TypeName = document.querySelectorAll(".TypeName");
const resetBtn = document.querySelector(".reset");

fetch("./Data2.json")
  .then((response) => response.json())
  .then((json) => {
    button.forEach(btns => {
      btns.addEventListener('click', () => {
        
        
      })
    })
  });
