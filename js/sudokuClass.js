/*
Plan
1. Generate solution - 9x9 array which obeys sudoku rules
2. Remove x digits to create starting puzzle
3. Function to solve a given sudoku
4. How to ensure only 1 solution?
5. When should the functions error?
Test functionality
    a. Generated sudoku solution obeys rules of sudoku
    b. Functions behave as expected
*/

class Sudoku {
  constructor() {
    // begin with the grid and solution as empty 9x9 arrays
    this.startingGrid = Array(9)
      .fill()
      .map(() => Array(9).fill(0));

    this.solution = Array(9)
      .fill()
      .map(() => Array(9).fill(0));
  }

  //methods

  //methods to check whether a number is in a row or column
  //for row, array = this.solution[i]
  //for col, array = this.solution.map(row => row[j])
  static rowColChecker(inputArray, val) {
    return !inputArray.includes(val);
  }

  squareChecker(row, col, val) {
    const subgridRow = Math.floor(row / 3) * 3;
    const subgridCol = Math.floor(col / 3) * 3;
    const subgrid = [];
    for (let i = 0; i < 3; i++) {
      subgrid.push(
        this.solution[subgridRow + i].slice(subgridCol, subgridCol + 3)
      );
    }

    return Sudoku.rowColChecker(subgrid.flat(), val);
  }

  isValid(row, col, val) {
    return (
      Sudoku.rowColChecker(this.solution[row], val) &&
      Sudoku.rowColChecker(
        this.solution.map((input) => input[col]),val
      ) &&
      this.squareChecker(row, col, val)
    );
  }

  //method to solve a Sudoku puzzle
  solve(array) {
    if (
      !Array.isArray(array) ||
      array.length !== 9 ||
      array[0].length !== 9 ||
      array.flat().length !== 81
    )
      throw new Error("Input must be a 9x9 Array");

    const allowableValues = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    if (!array.flat().every((value) => allowableValues.includes(value)))
      throw new Error("Input array must have elements between 0 and 9");

    for (let row = 0; row < 9; row++) {
      for (let col = 0; col < 9; col++) {
        if (array[row][col] === 0) {
          for (let num = 1; num <= 9; num++) {
            if (this.isValid(row, col, num)) {
              array[row][col] = num; // Place the number

              if (this.solve(array)) {
                // Recursively try to solve
                return true;
              }

              array[row][col] = 0; // Backtrack
            }
          }
          return false; // Trigger backtracking
        }
      }
    }
    return true;
  }

  //method to create a legitimate sudoku solution
  generateSolvedSudoku() {
    //1st row has 1-9 in a random order
    const numbers = Array.from({ length: 9 }, (_, i) => i + 1);

    for (let i = numbers.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [numbers[i], numbers[j]] = [numbers[j], numbers[i]];
    }

    this.solution[0] = numbers;

    //populate other rows using solver function
    //For a given starting row, the complete solution is unique

    this.solve(this.solution)
  }

  //method to remove a certain number of cells
  //difficulty input: 1-80
  //suggestion: easy(40) / medium(45) / hard(50) / expert(56)
  generateStartingGrid(difficulty) {
    if (typeof difficulty !== "number" || difficulty < 1 || difficulty > 80) {
      throw new Error("Difficulty must be a number between 1 and 80");
    }
  }

  //method to check whether there are multiple solutions
}

module.exports = Sudoku;


//Testing Area
let sudoku = new Sudoku();
sudoku.generateSolvedSudoku();
console.log(sudoku.solution); 
