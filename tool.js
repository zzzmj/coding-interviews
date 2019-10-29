#!/usr/bin/env node
// 自动添加README.md
// 生成命令 mj-cli new "名字" "栈和队列"
const fs = require('fs');
const readline = require('readline');

// 处理命令行参数
const mjArgs = () => {
  const res = process.argv.slice(2);
  return {
    com: res[0],
    name: res[1],
    cat: res[2]
  };
};

// 重命名文件夹
const renameDir = () => {
  fs.readdir('./', 'utf-8', (err, files) => {
    for (let i = 0; i < files.length; i++) {
      const file = files[i];
      const [oldNum, fileName] = file.split('.');
      if (oldNum && !Number.isNaN(Number(oldNum))) {
        let newNum = oldNum;
        if (newNum < 10) {
          newNum = '00' + newNum;
        } else if (newNum < 100) {
          newNum = '0' + newNum;
        }
        const newFile = newNum + '.' + fileName;

        fs.rename(file, newFile, err => {
          if (err) {
            console.log('err', err);
          } else {
            console.log('success');
          }
        });
      }
    }
  });
};

// 更新文件
const updateReadme = (filename, category) => {
  const rl = readline.createInterface({
    input: fs.createReadStream('README.md'),
    crlfDelay: Infinity
  });

  const CAT = {
    '链表': '#### 链表',
    '树': '#### 树',
    '栈和队列': '#### 栈和队列',
    '查找算法': '#### 查找算法',
    '动态规划': '#### 动态规划',
    '位运算': '#### 位运算',
    '其他算法': '#### 其他算法',
  }
  // 更新readme
  let flag = false
  let res = ''
  rl.on('line', line => {
    // 在指定类型最后，下一个类型之前，加上新的一行
    if (flag && line.includes('###')) {
      flag = false
      res += `[${filename}](${filename}/main.js)\r\n\r\n`
    }
    
    if (line.includes(CAT[category])) {
      flag = true
    }
    res += `${line}\r\n`
  });
  rl.on('close', () => {
    fs.writeFile('README.md', res, (err) => {
      if (err) throw err
    })
  })
};

// 创建新文件
const newFile = (fileName) => {
  const options = {
    encoding: 'utf-8',
    withFileTypes: true
  }
  const files = fs.readdirSync('./', options)

  let max = -1
  files.forEach(file => {
    if (file.isDirectory() && file.name !== '.git') {
      const num = +file.name.split('.')[0]
      max = num > max ? num : max
    }
  })
  max += 1
  if (max < 10) {
    max = '00' + max;
  } else if (max < 100) {
    max = '0' + max;
  }
  const dir = `${max}.${fileName}`

  fs.mkdirSync(dir)
  fs.writeFileSync(`${dir}/main.js`)
  return dir
};

const __main = () => {
  const args = mjArgs();
  if (args['com'] === 'new') {
    const file = newFile(args['name'], args['cat']);
    updateReadme(file, args['cat'])
  }
};

__main();