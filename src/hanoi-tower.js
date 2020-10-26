const CustomError = require("../extensions/custom-error");

module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
  let answer = {turns, seconds};
  turns = Math.pow(2, disksNumber);
  seconds = Math.floor(turns / (turnsSpeed / 3600));
  return answer;
};
