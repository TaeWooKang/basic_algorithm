// 문제: https://www.acmicpc.net/problem/1929

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function isPrime (num) {
  const divider = Math.sqrt(num)

  if (num < 2) {
    return false
  }

  for (let i = 2; i <= divider; i++) {
    if (num % i === 0) {
      return false
    }
  }

  return true
}

rl.on('line', function (line) {
  let numList = line.split(" ").map((el) => +el)

  for (let num = numList[0]; num <= numList[1]; num++) {
    if (isPrime(num)) {
      console.log(num)
    }
  }


  rl.close()
}).on("close", function () {
  process.exit();
});