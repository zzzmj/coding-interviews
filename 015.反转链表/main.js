function ReverseList(pHead) {
    var curNode = pHead
    var preNode = null
    while(curNode) {
        nextNode = curNode.next
        // 当前结点next指向上一个节点
        curNode.next = preNode
        // 节点循环体后置
        preNode = curNode
        curNode = nextNode
    }
    return preNode
}