// 문제: https://www.acmicpc.net/problem/1193

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.on('line', function(line) {
  let left = 1
  let right = 1
  let move = "right"

  const inputNumber = Number(line)

  for (let i = 1; i < inputNumber; i++) {
    if (move === "right") {
      right++
      left--
      if (left === 0) {
        move = "left"
        left = 1
      }
    } else {
      right--
      left++
      if (right === 0) {
        move = "right"
        right = 1
      }
    }
  }

  console.log(left + "/" + right)
  rl.close()
}).on("close", function() {
  process.exit();
});