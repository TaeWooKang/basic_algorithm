// 문제: https://programmers.co.kr/learn/courses/30/lessons/67257
// 해답: https://yoon-dumbo.tistory.com/entry/%ED%94%84%EB%A1%9C%EA%B7%B8%EB%9E%98%EB%A8%B8%EC%8A%A4-%EC%88%98%EC%8B%9D-%EC%B5%9C%EB%8C%80%ED%99%94-javascript

function maximizeFormulas (expression) {
  const tempResults = []
  const spliitedExpression = expression.split(/(\D)/);
  const calcs = [
    ["*", "-", "+"],
    ["*", "+", "-"],
    ["-", "*", "+"],
    ["-", "+", "*"],
    ["+", "-", "*"],
    ["+", "*", "-"],
  ]
  for (const calc of calcs) {
    const tempResult = [...spliitedExpression]
    for (const cal of calc) {
      while (tempResult.indexOf(cal) !== -1) {
        const index = tempResult.indexOf(cal)
        tempResult.splice(
          index - 1,
          3,
          eval(tempResult.slice(index - 1, index + 2).join("")))
      }
    }
    tempResults.push(Math.abs(tempResult[0]))
  }
  return Math.max(...tempResults)
}

const items = [
  "100-200*300-500+20", // => 60420
  "50*6-3*2" // => 300

]
console.time("#1")
for (let item of items) {
  console.log(maximizeFormulas(item)
  );
}
console.timeEnd("#1")
