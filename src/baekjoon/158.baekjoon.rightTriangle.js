// 문제: https://www.acmicpc.net/problem/3009

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.on('line', function (line) {
  if (line === '0 0 0') {
    rl.close()
    return
  }

  const numberList = line.split(" ").map(el => +el)
  const [x, y, z] = numberList.sort((a, b) => a - b)

  if (Math.pow(x, 2) + Math.pow(y, 2) === Math.pow(z, 2)) {
    console.log("right")
  } else {
    console.log("wrong")
  }
}).on("close", function () {
  process.exit();
});