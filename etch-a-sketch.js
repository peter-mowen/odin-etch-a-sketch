const CONTAINER_ID = "etch-a-sketch-container"

let container = document.querySelector(`#${CONTAINER_ID}`);
let squaresPerSide = 16;

for (let i = 0; i < squaresPerSide; ++i) {
  let column = document.createElement('div');
  column.classList.add('column');
  for (let j = 0; j < squaresPerSide; j++) {
    let square = document.createElement('div');
    square.classList.add('square');
    square.style.width = `${container.clientWidth / squaresPerSide}px`;
    square.id = `square-${i}-${j}`;
    column.appendChild(square);
  }
  container.appendChild(column);
}

container.addEventListener('mouseover', (event) => {
  let targetID = event.target.id;

  if (targetID != CONTAINER_ID) {
    console.log(targetID);
    let square = document.querySelector(`#${targetID}`);
    square.classList.add("color");
  }
});
