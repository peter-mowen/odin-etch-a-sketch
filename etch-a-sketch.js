const CONTAINER_ID = "etch-a-sketch-container"

let container = document.querySelector(`#${CONTAINER_ID}`);
const MIN_NUM_OF_SQUARES_PER_SIDE = 16;
const MAX_NUM_OF_SQUARES_PER_SIDE = 100;
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

let button = document.querySelector("#adjust-size-button");

button.addEventListener('click', (event) => {
  let newNumberOfSquaresPerSide = 0;
  const promptBase = `Enter an integer between ${MIN_NUM_OF_SQUARES_PER_SIDE} and ${MAX_NUM_OF_SQUARES_PER_SIDE} (inclusive)`
  let promptText = promptBase;
  do {
    let userInput = prompt(promptText);
    console.log(userInput);
    let userInputAsNumber = Number(userInput);
    let isInRange = (userInputAsNumber >= MIN_NUM_OF_SQUARES_PER_SIDE) &&
                    (userInputAsNumber <= MAX_NUM_OF_SQUARES_PER_SIDE);

    if (userInputAsNumber &&  isInRange) {
      newNumberOfSquaresPerSide = userInputAsNumber;
    } else {
      promptText = `"${userInput}" is not in range. ${promptBase}`;
    }
  } while (newNumberOfSquaresPerSide === 0);
});
