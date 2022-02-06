// 문제: https://www.acmicpc.net/problem/2581

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let tryCount = 0

let minimum = -1
let total = 0

let startNum = 0
let endNum = 0

function isPrime (num) {
  if (num < 2) {
    return false
  }
  for (let i = 2; i * i <= num; i++) {
    if (num % i === 0) {
      return false
    }
  }
  return true
}

rl.on('line', function (line) {
  tryCount++

  if (tryCount === 1) {
    startNum = Number(line)
  } else if (tryCount === 2) {
    endNum = Number(line)

    for (let num = startNum; num <= endNum; num++) {
      if (isPrime(num)) {
        if (minimum < 0) {
          minimum = num
        }
        total += num
      }
    }

    if (minimum > 0) {
      console.log(total)
    }

    console.log(minimum)

    rl.close()
  }
}).on("close", function () {
  process.exit();
});