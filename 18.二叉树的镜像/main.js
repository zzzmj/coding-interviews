var root = {
    val: '8',
    left: {
        val: 6,
        left: {
            val: 5,
            left: null,
            right: null,
        },
        right: {
            val: 7,
            left: null,
            right: null,
        }
    },
    right: {
        val: 10,
        left: {
            val: 9,
            left: null,
            right: null,
        },
        right: {
            val: 11,
            left: null,
            right: null,
        }
    }
}

function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
}

function Mirror(root) {
    if (root != null) {
        var tmp = new TreeNode()
        tmp = root.left
        root.left = root.right
        root.right = tmp
        Mirror(root.left)
        Mirror(root.right)
    }
}

Mirror(root)

