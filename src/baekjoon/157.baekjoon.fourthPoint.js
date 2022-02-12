// 문제: https://www.acmicpc.net/problem/3009

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const cachedX = new Set()
const cachedY = new Set()

let tryCount = 0

rl.on('line', function (line) {
  tryCount++

  const numList = line.split(" ").map(el => +el)
  const x = numList[0]
  const y = numList[1]
  if (cachedX.has(x)) {
    cachedX.delete(x)
  } else {
    cachedX.add(x)
  }
  if (cachedY.has(y)) {
    cachedY.delete(y)
  } else {
    cachedY.add(y)
  }

  if (tryCount === 3) {
    const [xResult] = cachedX
    const [yResult] = cachedY
    console.log(`${xResult} ${yResult}`)
    rl.close()
  }
}).on("close", function () {
  process.exit();
});