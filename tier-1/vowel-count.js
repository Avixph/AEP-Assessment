/**
@param {string} str
@returns {number}
*/
module.exports = function(str){
  // console.log(str)
  let count = 0
  // const chars = str.split("")
  // const vowels = ['a', 'e', 'i', 'o', 'u']
  // for (let i = 0; i < chars.length; i++) {
  //   const char = chars[i];
  //   if (vowels.includes(char)) {
  //     count++
  //   }
  // }
  const vowels = new Set(['a', 'e', 'i', 'o', 'u'])
  for (const char of str) {
    if (vowels.has(char)) {
      count++
    }
  }
  return count
}