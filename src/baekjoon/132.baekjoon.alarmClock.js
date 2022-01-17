// 문제: https://www.acmicpc.net/problem/2884

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.on('line', function(line) {
  let inputs = line.split(" ");
  let input1 = Number(inputs[0]);
  let input2 = Number(inputs[1]);
  input2 -= 45
  if (input2 < 0) {
      input2 += 60
      input1 = input1 - 1 < 0 ? 23 : input1 - 1
  }

  console.log(input1 + " " + input2)

  rl.close();
}).on("close", function() {
  process.exit();
});