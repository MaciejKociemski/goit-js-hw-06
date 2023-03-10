//Zadanie 10 (nieobowiązkowe)​ 
//getRandomHexColor, Math.random, [data-create, data-destroy], div 30x30


function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const qs = (s) => document.querySelector(s);
const createBtn = qs('[data-create]')
const destroyBtn = qs('[data-destroy]')
const inputRef = qs('input')
const boxesRef = qs('#boxes')

const createBoxes = (amount) => {
  const boxes = []

  for (let i = 0; i < amount; i++) {
    const box = document.createElement("div")
    box.style.backgroundColor = getRandomHexColor()
    box.style.width = `${30 + i * 10}px`
    box.style.height = `${30+i*10}px`
    boxes.push(box)
  }

  boxesRef.append(...boxes)
}
const onCreate = () => {
  createBoxes(inputRef.value)
}
const destroyBoxes = () => {
  boxesRef.innerHTML = ""
}

createBtn.addEventListener("click", onCreate)
destroyBtn.addEventListener("click", destroyBoxes)


//