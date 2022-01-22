// 문제: https://www.acmicpc.net/problem/10950

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const inputs = []
let inputLength = null

rl.on('line', function(line) {
  if (inputLength === null) {
    inputLength = Number(line)
  } else {
    inputLength--
    const spllitedLine = line.split(" ")
    console.log(`${Number(spllitedLine[0]) + Number(spllitedLine[1])}`)
  }

  if (inputLength === 0) {
    rl.close();
  }
}).on("close", function() {
  process.exit();
});