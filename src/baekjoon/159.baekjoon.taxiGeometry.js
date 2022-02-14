// 문제: https://www.acmicpc.net/problem/3053

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const pi = Math.PI

rl.on('line', function (line) {
  const num = parseInt(line)

  console.log((num**2 * pi).toFixed(6))
  console.log((num**2 * 2).toFixed(6))


  rl.close()
}).on("close", function () {
  process.exit();
});