/**
 * 题目：
 * 
 * 输入一个整数数组，实现一个函数来调整该数组中数字的顺序，
 * 使得所有的奇数位于数组的前半部分，所有的偶数位于数组的后半部分，
 * 并保证奇数和奇数，偶数和偶数之间的相对位置不变。
 */

/* 思路一，两遍循环，一次插奇数，一次插偶数 */
function reOrderArray(array) {
    var newArray = []
    for (var i = 0; i < array.length; i++) {
        if(array[i] % 2 == 1) {
            newArray.push(array[i])
        }
    }
    for (var i = 0; i < array.length; i++) {
        if(array[i] % 2 == 0) {
            newArray.push(array[i])
        }
    }
    return newArray
}

/* 思路二，用辅助数组，一个放奇数，一个放偶数，然后拼接 */
function reOrderArray(array) {
    var odd = []
    var even = []
    for (var i = 0; i < array.length; i++) {
        if(array[i] % 2 == 1) {
            odd.push(array[i])
        } else {
            odd.push(array[i])
        }
    }

    return odd.concat(even)
}