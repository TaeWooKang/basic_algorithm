//문제: https://im-developer.tistory.com/23?category=831367
function divisors(number) {
  let results = [];
  for (let i = 1; i <= number; i++) {
    if (number % i === 0) {
      results.push(i);
    }
  }
  if (results.length === 0) {
    return `${number} is prime`;
  }
  return results;
}

let number = 100;
let result = divisors(number);
console.log(result);
