//문제: https://programmers.co.kr/learn/courses/30/lessons/12921

function findDecimals (n) {
  const tempList = new Array(n).fill(1)
  tempList[0] = 0; // 1
  for (let i = 2; i * i <= n; i++) {
    for (let j = i * i; j <= n; j += i) {
      tempList[j - 1] = 0;
    }
  }

  return tempList.filter((temp) => temp === 1).length
}


const items = [
  10, // => 4
  5, // => 3

]
console.time("#1")
for (let item of items) {
  console.log(findDecimals(item)
  );
}
console.timeEnd("#1")
