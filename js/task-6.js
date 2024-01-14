function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const input = document.querySelector('input');
const createBtn = document.querySelector('[data-create]');
const destroyBtn = document.querySelector('[data-destroy]');
const boxesContainer = document.getElementById('boxes');

/*Сall to classes*/

createBtn.addEventListener('click', createBoxes);
destroyBtn.addEventListener('click', destroyBoxes);

/*Create eventlistener into button */

function createBoxes() {
  const amount = input.value;

  if (amount < 1 || amount > 100) {
    alert('Please enter a number between 1 and 100.');
    return;
  }

  /*Validate amount*/

  const boxes = Array.from({ length: amount }, (_, index) => {
    const box = document.createElement('div');
    box.style.width = `${30 + index * 10}px`;
    box.style.height = `${30 + index * 10}px`;
    box.style.backgroundColor = getRandomHexColor();
    return box;
  });

  boxesContainer.append(...boxes);
}
/*Creates elements */

function destroyBoxes() {
  boxesContainer.innerHTML = '';
}
