function Find(target, array) {
    let col = array[0].length - 1
    let row = 0
    if (col < 0) {
        return false
    }

    while(col >= 0 && row < array.length) {
        if (array[row][col] < target) {
            row++
        } else if (array[row][col] > target) {
            col--;
        } else {
            return true;
        }
    }
    return false
}


var __main = function() {
    let array = [[]]
    console.log(Find(3, array));
}

__main()