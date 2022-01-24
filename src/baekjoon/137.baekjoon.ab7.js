// 문제: https://www.acmicpc.net/problem/11021

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
    console.log(`Case #${tryCount}: ${Number(spllitedLine[0]) + Number(spllitedLine[1])}`)
  }

  if (inputLength === tryCount) {
    rl.close();
  }
}).on("close", function() {
  process.exit();
});