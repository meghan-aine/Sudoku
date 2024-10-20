import Sudoku from './sudokuClass.js';

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
//generate levels of puzzle
function generateEasy() {
  const sudoku = new Sudoku();
  sudoku.generateSolvedSudoku();
  sudoku.generateStartingGrid(40); 
  
}

//populate html table
function populateSudokuGrid(grid) {
    const cells = document.querySelectorAll("#puzzleContainer input");
    let index = 0;

    for (let r = 0; r < grid.length; r++) {
        for (let c = 0; c < grid[r].length; c++) {
            const value = grid[r][c];
            const cell = cells[index];

            if (value !== " ") {
                cell.value = value;
                cell.disabled = true; // Disable input for pre-filled cells
            }
            index++;
        }
    }
}


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
  console.log(printSudoku(sudoku.startingGrid)); */

  console.log('hello world');
  
  