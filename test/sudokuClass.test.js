const Sudoku = require("../js/sudokuClass");
const assert = require('assert');

describe("Sudoku", () => {
  describe(".rowColChecker", () => {
    it("should return true when the given value exists in the given array", () => {
      //setup
        const array = [1,2,3,4];
        const val = 4;
      //exercise
      const result = Sudoku.rowColChecker(array,val);
      //verify
      assert.ok(result === true);
    });

    it("should return false when the given value does not exist in the given array", () => {
        //setup
          const array = [1,2,3];
          const val = 4;
        //exercise
        const result = Sudoku.rowColChecker(array,val);
        //verify
        assert.ok(result === false);
      });
  });

  describe(".solution", () => {
    it("should return a 9x9 array", () => {
        //setup
        let sudoku = new Sudoku;
        const solution = sudoku.solution;
        //exercise
        const width = solution.length;
        const height = solution[0].length;
        //verify
        assert.ok(width===9 && height===9);
      });

      it("should only contain values from 1-9", () => {
        //setup
        let sudoku = new Sudoku;
        const solution = sudoku.solution;
        const flattened = solution.flat();
        const allowableValues = [1,2,3,4,5,6,7,8,9];
        //exercise
        const result = flattened.some(value => !allowableValues.includes(value));
        //verify
        assert.ok(!result);
      });
  })
});
