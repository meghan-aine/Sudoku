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
});
