// 注意, 最好使用数组拼接的方式, 会比普通字符串拼接效率高很多
function replaceSpace(str) {
    let s = []
    for (let i = 0; i < str.length; i++) {
        if (str[i] === ' ') {
            s.push('%20')
        } else {
            s.push(str[i])
        }
    }
    return s.join("")
}

var __main = function() {
    let str = 'We Are Happy.'
    console.log(replaceSpace(str));
}

__main()