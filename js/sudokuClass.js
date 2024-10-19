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
        this.grid = Array(9).fill().map(() => Array(9).fill(' '));
    }

    generateSolvedSudoku() {
        
        //1st row has 1-9 in a random order 
    }
}

//Testing Area
let sudoku = new Sudoku();
console.log(sudoku.grid); // prints empty 9x9 grid

function testing() {
    
}