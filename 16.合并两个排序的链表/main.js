// 递归法
function Merge(pHead1, pHead2) {
    var head = null
    if (pHead1 == null || pHead2 == null) {
        return pHead1 || pHead2
    }

    if (pHead1.val < pHead2.val) {
        head = pHead1
        head.next = Merge(pHead1.next, pHead2)
    } else {
        head = pHead2
        head.next = Merge(pHead1, pHead2.next)
    }
    return head
}

// 非递归
function Merge(pHead1, pHead2) {
    var head = null
    if (pHead1 == null || pHead2 == null) {
        return pHead1 || pHead2
    }
    if (pHead1.val < pHead2.val) {
        head = pHead1
        head.next = Merge(pHead1.next, pHead2)
    } else {
        head = pHead2
        head.next = Merge(pHead1, pHead2.next)
    }
    return head
}
