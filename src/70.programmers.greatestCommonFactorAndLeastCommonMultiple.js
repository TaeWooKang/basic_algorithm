//문제: https://programmers.co.kr/learn/courses/30/lessons/12937?language=javascript

function greatestCommonFactorAndLeastCommonMultiple (n, m) {
  const gcd = getGcd(n, m)
  const lcm = n * m / gcd;
  return [gcd, lcm];
}

function getGcd (a, b) {
  if (a % b === 0) {
    return b
  }
  return getGcd(b, a % b);
}


const items = [
  [3, 12], // => 	[3, 12]
  [2, 5], // => 	[1, 10]


]
console.time("#1")
for (let item of items) {
  console.log(greatestCommonFactorAndLeastCommonMultiple(item[0], item[1])
  );
}
console.timeEnd("#1")
