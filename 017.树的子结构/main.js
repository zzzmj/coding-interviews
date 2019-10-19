var obj = {
    val: '1',
    left: {
        val: '1',
        left: {
            val: '2',
            left: null,
            right: null
        },
        rigt: {
            val: '3',
            left: null,
            right: null
        }
    },
    rigt: {
        val: '3',
        left: null,
        right: null
    }
}

var obj2 = {
    val: '1',
    left: {
        val: '2',
        left: null,
        right: null
    },
    rigt: {
        val: '3',
        left: null,
        right: null
    }
}

var compare = (p1, p2) => {
    // 如果p2遍历空了，就代表p2属于p1的子结构，只是p1可能层级更深
    if (!p2) return true
    // 如果p1空了，p2没空，说明肯定就不属于了
    else if (!p1) return false

    if (p1.val === p2.val) {
        const left = compare(p1.left, p2.left)
        const right = compare(p1.right, p2.right)
        return left && right
    } else {
        return false
    }
}

function HasSubtree(pRoot1, pRoot2) {
    if (!pRoot1 || !pRoot2) return false
    // 遍历pRoot1的每个节点，去与pRoot2这棵树作比较
    return compare(pRoot1, pRoot2) || 
        HasSubtree(pRoot1.left, pRoot2) ||
        HasSubtree(pRoot1.right, pRoot2)
}

HasSubtree(obj, obj2)