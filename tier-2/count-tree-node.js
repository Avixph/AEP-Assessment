/**
 * Definition for TreeNode.
 * 
  *class TreeNode {
  *  constructor(val, left, right){
  *    this.val = (val===undefined ? 0 : val)
  *    this.left = (left===undefined ? null : left)
  *    this.right = (right===undefined ? null : right)
  *  }
  *}
 * 
*/

/**
@param {TreeNode} list
@returns {number}
*/

module.exports = function(list){
  if (list === null) {
    return 0
  }

  let count = 0
  let queue = [list]

  while (queue.length > 0) {
    let node = queue.shift()
    count++
    if (node.left !== null) {
      queue.push(node.left)
    }
    if (node.right !== null) {
      queue.push(node.right)
    }
  }

  return count
}

