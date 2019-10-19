function jumpFloor(number) {
    var a = [1, 1]
    for (let i = 2; i <= 39; i++) {
        a[i] = a[i-1] + a[i-2]
    }
    return a[number]
}