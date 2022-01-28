// 문제: https://www.acmicpc.net/problem/10952

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.on('line', function(line) {
  const spllitedLine = line.split(" ")
  const num1 = Number(spllitedLine[0])
  const num2 = Number(spllitedLine[1])
  const num3 = num1 + num2

  if (num1 === 0 && num1 === num2) {
      rl.close();
  } else {
    console.log(num3)
  }
}).on("close", function() {
  process.exit();
});
