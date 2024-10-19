/*
Plan
1. Generate solution - 9x9 array which obeys sudoku rules
2. Remove x digits to create starting puzzle
3. Function to solve a given sudoku
4. Test functionality
    a. Generated sudoku solution obeys rules of sudoku
    b. Functions behave as expected
*/

class Sudoku {
  constructor() {
    // begin with grid as an empty 9x9 array
    this.grid = Array(9)
      .fill()
      .map(() => Array(9).fill(" "));
  }

  //methods

  //method to check whether a number is in a row or column
    //for row, array = this.grid[i]
    //for col, array = this.grid.map(row => row[j])
  static rowColChecker(array, val) {
    return array.includes(val);
  }

  squareChecker(row,col,val) {
    const subgridRow = Math.floor(row / 3) * 3;
    const subgridCol = Math.floor(col / 3) * 3;
    const subgrid = [];
    for (let i=0; i<3; i++) {
      subgrid.push(this.grid[subgridRow + i].slice(subgridCol, subgridCol + 3));
    }

    return Sudoku.rowColChecker(subgrid,val);
  }

  //method to create a legitimate sudoku solution
  generateSolvedSudoku() {
    //1st row has 1-9 in a random order
    const numbers = Array.from({ length: 9 }, (_, i) => i + 1);

    for (let i = numbers.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [numbers[i], numbers[j]] = [numbers[j], numbers[i]];
    }

    this.grid[0] = numbers;


  }
}

module.exports = Sudoku;

/*
//Testing Area
let sudoku = new Sudoku();
console.log(sudoku.grid); // prints empty 9x9 grid
*/