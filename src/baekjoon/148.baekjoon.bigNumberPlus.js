// 문제: https://www.acmicpc.net/problem/1193

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.on('line', function(line) {
  const spliitedLine = line.split(" ").map((el) => BigInt(el))
  const result = spliitedLine[0] + spliitedLine[1]

  console.log(result.toString())
  rl.close()
}).on("close", function() {
  process.exit();
});