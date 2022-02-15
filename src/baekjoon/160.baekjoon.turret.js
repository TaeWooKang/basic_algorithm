// 문제: https://www.acmicpc.net/problem/1002

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let totalTryCount = null
let tryCount = 0

rl.on('line', function (line) {
  const numList = line.split(" ").map(el => +el)
  if (totalTryCount === null) {
    totalTryCount = numList[0]
  } else {
    let result = 0
    tryCount++

    const [x1, y1, r1, x2, y2, r2] = numList

    const dx = x1 - x2
    const dy = y1 - y2
    let smallR = r1
    let bigR = r2

    if (smallR > bigR) {
      smallR = r2
      bigR = r1
    }

    const sumR = (bigR + smallR)**2
    const subR = (bigR - smallR)**2
    const d = dx**2 + dy**2

    if (sumR > d && d > subR) {
      result = 2
    } else {
      if (d !== 0) {
        if (d === sumR || d === subR) {
          result = 1
        }
      } else {
        if (r1 === r2) {
          result = -1
        }
      }
    }

    console.log(result)
  }

  if (totalTryCount === tryCount) {
    rl.close()
  }
}).on("close", function () {
  process.exit();
});