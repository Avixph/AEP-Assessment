/**
@param {number} num
@returns {number}
*/

module.exports = function(num){
  let count = 0;
  while (num > 0) {
    count += num & 1
    num >>= 1
  }
  return count
}