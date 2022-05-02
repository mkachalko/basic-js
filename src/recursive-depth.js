const { NotImplementedError } = require("../extensions/index.js");

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 *
 * @example
 *
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {
  constructor() {
    this.depth = 1;
    this.counter = 1;
  }
  calculateDepth(arr) {
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    arr.forEach((item) => {
      if (typeof item == "object") {
        this.counter++;
        if (this.counter > this.depth) {
          this.depth = this.counter;
        }
        this.calculateDepth(item);
      } else {
        return;
      }

      this.counter = 1;
    });
    return this.depth;
  }
}

// const depthCalc = new DepthCalculator();
// depthCalc.calculateDepth([1, 2, 3, 4, [1, 2, [1, 2, [[[]]]]], 5, [1, [[[[[[]]]]]]]]);
// //  depthCalc.calculateDepth([1, 2, 3, [4, 5]]);
// depthCalc.calculateDepth([[[]]]);

module.exports = {
  DepthCalculator,
};
