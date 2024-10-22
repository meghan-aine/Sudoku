import Sudoku from "./sudokuClass.js";

/*
Idea:
functions to
- populate the html grid
    - to be used for different purposes later
- recognise input
- check input against solution 
    - extension: for inputtable squares right=green, wrong=red, reset colours when changed
- 
*/

//populate html table
function populateSudokuGrid(grid) {
  const cells = document.querySelectorAll("#puzzleContainer input");
  let index = 0;
  let numberInputs = document.getElementById("numberInputs");

  for (let r = 0; r < grid.length; r++) {
    for (let c = 0; c < grid[r].length; c++) {
      const value = grid[r][c];
      const cell = cells[index];

      if (value !== " ") {
        cell.disabled = true;
        cell.style.color = "black";
      }

      cell.value = value;

      index++;
    }
  }
}

//generate levels of puzzle
//initialise solution and starting grid as empty grids
let currentSolution = Array(9)
  .fill()
  .map(() => Array(9).fill(" "));
let currentStartingGrid = Array(9)
  .fill()
  .map(() => Array(9).fill(" "));

function generateNewPuzzle(diff) {
  populateSudokuGrid(
    Array(9)
      .fill()
      .map(() => Array(9).fill(" "))
  );

  const sudoku = new Sudoku();
  sudoku.generateSolvedSudoku();
  sudoku.generateStartingGrid(diff);

  currentSolution = sudoku.solution;
  currentStartingGrid = sudoku.startingGrid;

  populateSudokuGrid(currentStartingGrid);

  //how to store solution somewhere to be used by reveal/check buttons?
  //assign a variable workingSolution outside of the function and get the generate function to reassign?
}

//easy
const easyPuzzleButton = document.getElementById("easyPuzzleButton");
easyPuzzleButton.addEventListener("click", () => generateNewPuzzle(40));

//med
const medPuzzleButton = document.getElementById("medPuzzleButton");
medPuzzleButton.addEventListener("click", () => generateNewPuzzle(45));

//hard
const hardPuzzleButton = document.getElementById("hardPuzzleButton");
hardPuzzleButton.addEventListener("click", () => generateNewPuzzle(50));

//expert
const expertPuzzleButton = document.getElementById("expertPuzzleButton");
expertPuzzleButton.addEventListener("click", () => generateNewPuzzle(56));

//Puzzle buttons
//Reset
const resetButton = document.getElementById("resetButton");
resetButton.addEventListener("click", () => populateSudokuGrid(currentStartingGrid));


//Reveal solution
const revealSolutionButton = document.getElementById("revealSolutionButton");
revealSolutionButton.addEventListener("click", () => populateSudokuGrid(currentSolution));


//Event listener for input boxes
const inputs = document.querySelectorAll('.numberInputs');

        inputs.forEach(input => {
            
              input.addEventListener('input', function() {
                  // Allow only digits 1-9 or empty
                  if (!/^([1-9]|)$/.test(this.value)) {
                      this.value = ''; // Clear invalid input
                  }
              });

              input.addEventListener('keydown', function(event) {
                const key = event.key;
                if (key >= '1' && key <= '9') {
                    this.value = key;
                    event.preventDefault(); 
                } else if (key === 'Backspace' || key === 'Delete' || key === '0') {
                    this.value = ''; 
                    event.preventDefault();
                } else {
                    event.preventDefault();
                }
            });

            });


/*
//Testing Area
function printSudoku(grid) {
  console.log(" -----------------------------");
  for (let i = 0; i < grid.length; i++) {
    if (i !== 0 && i % 3 === 0) {
      console.log(" -----------------------------");
    }
    let string = "";
    for (let j = 0; j < grid[i].length; j++) {
      if (j % 3 === 0) {
        string += "|";
      }
      string += " " + grid[i][j] + " ";
    }
    console.log(string + "|");
  }
  console.log(" -----------------------------");
}

const sudoku = new Sudoku();
sudoku.generateSolvedSudoku();
sudoku.generateStartingGrid(40);

/* console.log(sudoku.solution); 
  console.log(sudoku.startingGrid);
  
  console.log(printSudoku(sudoku.solution)); 
  console.log(printSudoku(sudoku.startingGrid)); 

console.log("hello world");*/
