var p = []
var q = []
function push(node) {
    while (q.length != 0) {
        p.push(q.pop())
    }
    p.push(node)
}

function pop() {
    while (p.length != 0) {
        q.push(p.pop())
    }
    return q.pop()
}

