/**
@param {number} num
@returns {number}
*/
module.exports = function(num){
  console.log(num)
  let numStr = num.toString()
  let res = ""
  for (const n of numStr) {
    let sqr = parseInt(n) * parseInt(n)
    res += sqr
  }
  return parseInt(res)
}

