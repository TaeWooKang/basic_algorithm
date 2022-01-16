// 문제: https://www.acmicpc.net/problem/14681

const readline = require('readline');

const inputs = [];

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.on('line', function(line) {
  inputs.push(Number(line))
    
  if (inputs.length === 2) {
     const input1 = inputs[0]
     const input2 = inputs[1]
     
     if (input1 > 0 && input2 > 0) {
         console.log(1)
     } else if (input1 < 0 && input2 > 0) {
         console.log(2)
     } else if (input1 < 0 && input2 < 0) {
         console.log(3)
     } else {
         console.log(4)
     }
     rl.close();
  }
}).on("close", function() {
  process.exit();
});