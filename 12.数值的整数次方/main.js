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