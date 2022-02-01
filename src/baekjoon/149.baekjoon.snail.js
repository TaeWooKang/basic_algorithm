// 문제: https://www.acmicpc.net/problem/2869

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.on('line', function(line) {
  let result = 1

  const spliitedLine = line.split(" ").map((el) => Number(el))
  const A = spliitedLine[0]
  const B = spliitedLine[1]
  let V = spliitedLine[2] - A
  let hap = A - B

  result += Math.floor(V / (hap))
  result += V % hap === 0 ? 0 : 1

  console.log(result)
  
  rl.close()
}).on("close", function() {
  process.exit();
});