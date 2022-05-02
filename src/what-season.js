const { NotImplementedError } = require("../extensions/index.js");

/**
 * Extract season from given date and expose the enemy scout!
 *
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 *
 * @example
 *
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 *
 */
function getSeason(date) {
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  const seasons = {
    winter: [11, 0, 1],
    spring: [2, 3, 4],
    summer: [5, 6, 7],
    autumn: [8, 9, 10],
  };

  try {
    const month = date.getMonth();

    for (let season in seasons) {
      const match = seasons[season].find((num) => num == month);
      if (typeof match === "number") {
        return season;
      }
    }
  } catch {
    if (arguments.length == 0) {
      return "Unable to determine the time of year!";
    } else {
      // return "Invalid date!";
      throw new Error("Invalid date!");
    }
  }
}

// getSeason();
// () => getSeason();

module.exports = {
  getSeason,
};
