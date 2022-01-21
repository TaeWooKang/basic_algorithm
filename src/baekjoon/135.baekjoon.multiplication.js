// 문제: https://www.acmicpc.net/problem/2588

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const inputs = []

rl.on('line', function(line) {
  inputs.push(line)
  if (inputs.length === 2) {
    let input1 = inputs[0];
    let input2 = inputs[1];
  
    let num1 = Number(input1)
    let num2 = Number(input2)
    
    let input2Array = input2.split("")
    let input2ArrayLength = input2Array.length
    
    for (let i = 0; i < input2ArrayLength; i++) {
      console.log(num1 * Number(input2Array[input2ArrayLength - 1 - i]))
    }
    console.log(num1 * num2);
    rl.close();
  }
}).on("close", function() {
  process.exit();
});