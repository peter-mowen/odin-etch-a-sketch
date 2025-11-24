const CONTAINER_ID = "etch-a-sketch-container"

const MIN_NUM_OF_SQUARES_PER_SIDE = 1;
const INITIAL_NUM_OF_SQUARES = 16;
const MAX_NUM_OF_SQUARES_PER_SIDE = 100;

const SQUARE_ID_BASE = 'square';

let container = document.querySelector(`#${CONTAINER_ID}`);

container.addEventListener('mouseover', (event) => {
  let targetID = event.target.id;

  if (targetID.startsWith(SQUARE_ID_BASE)) {
    let square = document.querySelector(`#${targetID}`);

    if (!square.classList.contains("color")) {
      square.classList.add("color");
    } else {
      let alpha = parseFloat(
        getComputedStyle(square).getPropertyValue('--alpha')
      );
      alpha = Math.min(alpha + 0.1, 1);
      square.style.setProperty('--alpha', alpha);
    }
  }
});

function createEtchASketchBoard(squaresPerSide) {
  container.replaceChildren();
  for (let i = 0; i < squaresPerSide; ++i) {
    let column = document.createElement('div');
    column.classList.add('column');
    for (let j = 0; j < squaresPerSide; j++) {
      let square = document.createElement('div');
      square.classList.add(SQUARE_ID_BASE);
      square.style.width = `${container.clientWidth / squaresPerSide}px`;
      square.id = `square-${i}-${j}`;
      column.appendChild(square);
    }
    container.appendChild(column);
  }
}

let button = document.querySelector("#adjust-size-button");

button.addEventListener('click', (event) => {
  let newNumberOfSquaresPerSide = 0;
  const promptBase = `Enter an integer between ${MIN_NUM_OF_SQUARES_PER_SIDE} and ${MAX_NUM_OF_SQUARES_PER_SIDE} (inclusive)`
  let promptText = promptBase;
  do {
    let userInput = prompt(promptText);
    let userInputAsNumber = Number(userInput);
    let isInRange = (userInputAsNumber >= MIN_NUM_OF_SQUARES_PER_SIDE) &&
                    (userInputAsNumber <= MAX_NUM_OF_SQUARES_PER_SIDE);

    if (userInputAsNumber && isInRange) {
      newNumberOfSquaresPerSide = userInputAsNumber;
    } else {
      promptText = `"${userInput}" is not in range. ${promptBase}`;
    }
  } while (newNumberOfSquaresPerSide === 0);
  
  createEtchASketchBoard(newNumberOfSquaresPerSide);
});

createEtchASketchBoard(INITIAL_NUM_OF_SQUARES);
