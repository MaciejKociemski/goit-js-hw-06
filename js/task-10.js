//Zadanie 10 (nieobowiązkowe)​ 
//getRandomHexColor, Math.random, [data-create, data-destroy], div 30x30



function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
 

const createBtn = document.querySelector('[data-create]')


