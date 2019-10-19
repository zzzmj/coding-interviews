function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
}
function reConstructBinaryTree(pre, vin) {
    if (pre.length === 0) {
        return null;
    }
    var val = pre[0]
    var TreeNode = {
        val: val
    }
    // 找到父节点在中序序列的位置。
    var i = vin.indexOf(val)

    TreeNode.left = reConstructBinaryTree(pre.slice(1, i+1), vin.slice(0, i))
    TreeNode.right = reConstructBinaryTree(pre.slice(i+1), vin.slice(i+1))

    return TreeNode
}

var __main = function() {
    let pre = [1, 2, 4, 7, 3, 5, 6, 8]
    let vin = [4, 7, 2, 1, 5, 3, 8, 6]
    console.log(reConstructBinaryTree(pre,vin));
}

__main()


