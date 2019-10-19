function rectCover(number) {
    var a = [0, 1, 2]
    for (let i = 3; i <= 39; i++) {
        a[i] = a[i-1] + a[i-2]
    }
    return a[number]
}

function rectCover(n) {
    var a = [0, 1, 2]
    for (let i = 3; i <= n; i++) {
        a[i] = a[i-1] + a[i-2]
    }
    return a[n]
}