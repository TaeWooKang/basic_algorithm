// 문제: https://www.acmicpc.net/problem/18108

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.on('line', function(line) {
    console.log(Number(line) - 543)

    rl.close();
}).on("close", function() {
  process.exit();
});
