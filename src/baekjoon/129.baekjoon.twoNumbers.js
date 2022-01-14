// 문제: https://www.acmicpc.net/problem/1330

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.on('line', function(line) {
  let input = line.split(" ");
  let input1 = Number(input[0])
  let input2 = Number(input[1])
  let result = "==";
  if (input1 > input2) {
      result = ">"
  } else if (input1 < input2) {
      result = "<"
  }
  console.log(result)

  rl.close();
}).on("close", function() {
  process.exit();
});