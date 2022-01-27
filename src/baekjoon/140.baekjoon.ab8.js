// 문제: https://www.acmicpc.net/problem/11022

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let inputLength = null
let tryCount = 0

rl.on('line', function(line) {
  if (inputLength === null) {
    inputLength = Number(line)
  } else {
    tryCount++
    const spllitedLine = line.split(" ")
    const num1 = Number(spllitedLine[0])
    const num2 = Number(spllitedLine[1])
    const num3 = num1 + num2

    console.log(`Case #${tryCount}: ${num1} + ${num2} = ${num3}`)
  }

  if (inputLength === tryCount) {
    rl.close();
  }
}).on("close", function() {
  process.exit();
});