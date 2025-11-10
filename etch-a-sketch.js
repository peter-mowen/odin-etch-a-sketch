let container = document.querySelector('#etch-a-sketch-container');
let squaresPerSide = 16;

for (let i = 0; i < squaresPerSide; ++i) {
  let column = document.createElement('div');
  column.classList.add('column');
  for (let j = 0; j < squaresPerSide; j++) {
    let square = document.createElement('div');
    square.classList.add('square');
    square.style.width = `${container.clientWidth / squaresPerSide}px`;
    column.appendChild(square);
  }
  container.appendChild(column);
}
