function jumpFloorII(number) {
    var a = [0, 1]
    for (let i = 2; i <= 39; i++) {
        a[i] = 2*a[i-1]
    }
    return a[number]
}