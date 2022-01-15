// 문제: https://www.acmicpc.net/problem/2753

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.on('line', function(line) {
  let result = 0
  let input = Number(line)
  if ((input % 4 === 0 && input % 100 !== 0) || input % 400 === 0) {
      result = 1
  }
  console.log(result)

  rl.close();
}).on("close", function() {
  process.exit();
});