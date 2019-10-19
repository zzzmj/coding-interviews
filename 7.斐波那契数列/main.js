function Fibonacci(n) {
    var a = [0, 1, 1]
    for (let i = 2; i <= 39; i++) {
        a[i] = a[i-1] + a[i-2]
    }
    return a[n]
}