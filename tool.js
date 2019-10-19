// 自动添加README.md
const fs = require('fs')

// 重命名文件夹
const renameDir = () => {
  fs.readdir('./', 'utf-8', (err, files) => {
  for (let i = 0; i < files.length; i++) {
    const file = files[i]
      const [oldNum, fileName] = file.split('.')
      if (oldNum && !Number.isNaN(Number(oldNum))) {
        let newNum = oldNum
        if (newNum < 10) {
          newNum = '00' + newNum
        } else if (newNum < 100) {
          newNum = '0' + newNum
        }
        const newFile = newNum + '.' + fileName
        
        fs.rename(file, newFile, (err) => {
          if (err) {
            console.log('err', err)
          } else {
            console.log('success')          
          }
        })
      }
    }
  })
}

const renameFile = () => {
  fs.readFile('README.md', (err, data) => {
    if (err) return err

    const arr = data.toString().split('\r\n').filter(item => item)

    for (let i = 0; i < arr.length; i++) {
      const line = arr[i]
      if (line.includes('.')) {
        
      }
    }
  })
}

renameFile()