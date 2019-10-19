// 用额外的空间
function FindKthToTail(head, k) {
    var tmp = []
    while(head) {
        tmp.push(head)
        head = head.next
    }
    return tmp[tmp.length - k]
}

var a = {
    name: 'a',
    next: b,
}
var b = {
    name: 'b',
    next: c,
}
var c = {
    name: 'c',
    next: d,
}
var d = {
    name: 'd',
    next: e,
}
var e = {
    name: 'e',
    next: null,
}
// 快慢指针
function FindKthToTail(head, k) {
    if (!head || k <= 0) {
        return null
    }
    var fast = head
    var slow = head
    // 让快指针先走 k 步
    var cnt = 0
    while (fast && cnt < k) {
        fast = fast.next
        cnt++
    }
    // 如果k比链表长，返回null
    if (cnt < k) return null
    // 然后两个指针同时走
    while(fast) {
        fast = fast.next
        slow = slow.next
    }
    return slow
}

FindKthToTail(a, 1)