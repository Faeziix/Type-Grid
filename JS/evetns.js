resetBtn.addEventListener("click",()=>{GridTypes.forEach(e=>e.classList.remove("color")),newType=TypeNames,button.forEach(e=>e.classList.remove("btnClick"))}),restartBtn.addEventListener("click",()=>{GridTypes.forEach(e=>e.classList.remove("color")),newType=TypeNames,button.forEach(e=>e.classList.remove("btnClick")),document.querySelector(".result").classList.remove("resultDisplay")});