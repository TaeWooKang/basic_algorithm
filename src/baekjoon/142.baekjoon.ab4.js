// 문제: https://www.acmicpc.net/problem/10951

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.on('line', function(line) {
  const spllitedLine = line.split(" ")

  if (!spllitedLine[0]) {
    rl.close();
  } else {
    const num1 = Number(spllitedLine[0])
    const num2 = Number(spllitedLine[1])
    const num3 = num1 + num2
  
    console.log(num3)
  }
}).on("close", function() {
  process.exit();
});
