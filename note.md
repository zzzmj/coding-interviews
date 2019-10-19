## 2. 替换空格

js版：

这道题无非就是拼接字符串

注意的地方是, 不要用普通的 + 操作去拼接字符串, 会导致频繁创建销毁对象

最好用数组拼接, 最后通过join函数返回一个字符串常量


## 9. 变态跳台阶

f(n) = f(n-1) + f(n-2) + ... + f(0)
f(n-1) = f(n-2) + ... + f(0)

两式相减得到**f(n) = 2*f(n-1)**

## 10. 矩形覆盖

斐波那契. 
n的矩形由n-1状态的矩形和n-2状态的矩形得到

**f(n) = f(n-1) + f(n-2)**

## 11. 二进制中1的个数

传统的做法
```js
function NumberOf1(n) {
    var count = 0;
    while (n != 0) {
        if (n & 1) {
            count++;
        }
        n = n >> 1;
    }
    return count;
}
```

这样会出问题，因为 右移运算符 >> 不会移动符号位

所以如果输入负数就会陷入死循环

解决方案 使用 移动符号位的右移运算符 >>> , 能移动符号位


## 12. 数值的整数次方

低效的做法
```js
function Power(base, exponent) {
    var pos = true
    if (exponent < 0) {
        exponent = -exponent
        pos = false
    }
    var res = 1;
    for (var i = 0; i < exponent; i++) {
        res *= base;
    }
    if (!pos) {
        res = 1 / res
    }
    return res
}
```

高效的办法是用快速幂
```js
function Power(base, exponent) {
    var pos = true
    if (exponent < 0) {
        exponent = -exponent
        pos = false
    }
    var res = 1;
    while (exponent) {
        if (exponent & 1) {
            res *= base
        }
        base *= base
        exponent >>= 1
    }
    if (!pos) {
        res = 1 / res
    }
    return res
}
```

## 14. 链表中倒数第k个结点

可能比较常见的做法是，用一个数组保存，遍历一遍链表，然后输出数组倒数第k个结点
```js
// 用额外的空间
function FindKthToTail(head, k) {
    var tmp = []
    while(head) {
        tmp.push(head)
        head = head.next
    }
    return tmp[tmp.length - k]
}
```

这样消耗了而外的空间，可以使用两个指针，一个快指针先走k步，然后快慢两个指针一起走

快指针走到头了，说明慢指针这个时候指向了倒数第k个结点

```js
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
```

## 15. 翻转链表

这道题值得多看一下。

涉及三个节点的关系  前一节点，当前节点，下一节点

```js
function ReverseList(pHead) {
    var curNode = pHead
    var preNode = null
    while(curNode) {
        // 下一个节点
        nextNode = curNode.next
        // 当前结点next指向上一个节点
        curNode.next = preNode

        // 节点后移
        preNode = curNode
        curNode = nextNode
    }
    return preNode
}
```

## 17. 树的子结构

输入两棵二叉树A，B，判断B是不是A的子结构。

注意是B是A的子结构，并不是子树

也就有可能是，A是一颗很大的树，B只是中间一部分树的结构

所以要做的事情就两件
- 遍历A树，将A树每个节点与B树比较
- 判断A是否是B的结构（根节点相同）


## 18. 二叉树的镜像

给一颗二叉树，将这颗二叉树转换为镜像二叉树

思路：遍历二叉树的时候将左右子树交换即可