// 문제: https://www.acmicpc.net/problem/11653

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let minimum = 2

rl.on('line', function (line) {
  let num = Number(line)

  while (num >= minimum) {
    for (let i = minimum; i <= num; i++) {
      if (num % i === 0) {
        num = num / i
        minimum = i
        console.log(i)
        break;
      }
    }
  }
  rl.close()
}).on("close", function () {
  process.exit();
});