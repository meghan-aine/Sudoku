const Sudoku = require('./sudokuClass');




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
  
  //console.log(sudoku.solution); 
  //console.log(sudoku.startingGrid);
  
  console.log(printSudoku(sudoku.solution)); 
  console.log(printSudoku(sudoku.startingGrid));
  
  