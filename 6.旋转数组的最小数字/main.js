function minNumberInRotateArray(rotateArray) {
    if (rotateArray.length <= 0) {
        return 0;
    }

    let left = 0, right = rotateArray.length-1
    if (rotateArray[left] >= rotateArray[right]) {
        let i = 0;
        while (rotateArray[right-i-1] < rotateArray[right-i]) {
            i++;
        }
        return rotateArray[right-i]
    } else {
        return rotateArray[0]        
    }
}

var __main = function() {
    var rotate = [1, 2, 4, -1, 3]
    console.log(minNumberInRotateArray(rotate))
}

__main()
var r = {
    "seats": {
        "A9": "",
        "M": "6",
        "O": "12",
        "A6": "",
        "A4": "",
        "F": "",
        "A3": "",
        "A2": "",
        "A1": "",
        "WZ": "无"
    },
    "price": {
        "WZ": "¥81.0",
        "M": "¥136.0",
        "A9": "¥255.0",
        "O": "¥81.0"
    }
}

var getValidSeat = function(r) {
    // 建立座位之间的映射
    let dict = {
        'A9': '商务特等座',
        'M': '一等座',
        'O': '二等座',
        'A6': '高等软卧',
        'A4': '软卧',
        'F': '动卧',
        'A3': '硬卧',
        'A2': '软座',
        'A1': '硬座',
        'WZ': '无座',
    }
    var seats = r.seats
    var price = r.price
    var o = {}
    for (let key in seats) {
        if (seats[key] != "" && seats[key].length > 0) {
            // 把有效的座位的值封装成一个对象, 包括了座位的数量和价钱
            seats[key] = {
                num: seats[key],
                price: price[key].slice(1),
            }
            // 将座位的英文转为汉字
            o[dict[key]] = seats[key]
        }
    }
    return o;
}

console.log(getValidSeat(r));

