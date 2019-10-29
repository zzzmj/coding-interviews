function printMatrix(matrix) {
  if (matrix.length <= 0) return 
  var xLength = matrix.length
  var yLength = matrix[0].length

  var x = 0, y = -1
  // 创建二维数组
  var res = []
  while(res.length < xLength*yLength) {
    // 右
    while (y < yLength - 1 && matrix[x][y+1]) {
      res.push(matrix[x][++y])
      matrix[x][y] = 0
    }
    // 下
    while (x < xLength - 1 && matrix[x+1][y]) {
      res.push(matrix[++x][y])
      matrix[x][y] = 0
    }
    // 左
    while (y > 0 && matrix[x][y-1]) {
      res.push(matrix[x][--y])
      matrix[x][y] = 0
    }
    // 上
    while (x > 0 && matrix[x-1][y]) {
      res.push(matrix[--x][y])
      matrix[x][y] = 0
    }
  }
  return res
}

printMatrix(
  [
    [1, 2, 3, 4],
    [5, 6 ,7, 8],
    [9, 10, 11, 12],
    [13, 14, 15, 16],
  ]
)