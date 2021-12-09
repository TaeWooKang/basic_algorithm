// 문제: https://programmers.co.kr/learn/courses/30/lessons/42883
// 해답: https://taesung1993.tistory.com/46

function makeBigNumbers(number, k) {
  const stack = []
  let answer = "";
  for (let i = 0; i < number.length; i++) {
     while (k > 0 && stack[stack.length -1] < number[i]) {
         stack.pop()
         k--
     }
     stack.push(number[i])
  }
  answer = stack.join("").slice(0 , number.length - k)
  return answer;
}


const items = [
  ["1924",	2],	// => "94"
  ["1231234",	3],	// => "3234"
  ["4177252841",	4],	// => "775841"

]

console.time("#1")
for (let item of items) {
  console.log(makeBigNumbers(item[0], item[1])
  );
}
console.timeEnd("#1")
