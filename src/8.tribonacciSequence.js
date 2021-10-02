//문제: https://im-developer.tistory.com/37?category=831367

function getTribonacci (numList, resultLength) {
  let resultNumList = numList || []
  if (resultNumList.length < 3) {
    return resultNumList.slice(0, resultLength)
  }
  for (let i = 0; i < resultLength; i++) {
    resultNumList.push(resultNumList[i] + resultNumList[i + 1] + resultNumList[i + 2])
  }
  return resultNumList.slice(0, resultLength)
}

const items = [
  [[], 2] // []
  [[0], 0], // []
  [[1], 1], // [1]
  [[1, 2], 2], // [1,2]
  [[1, 2, 3], 3], // [1,2,3]
  [[1], 3], // [1]
  [[0, 0, 1], 0], // []
  [[1, 1, 1], 1], // [1]
  [[0, 1, 1], 5], // [0, 1, 1, 2, 4]
];
console.time("#1")
for (let item of items) {
  console.log(getTribonacci(item[0], item[1])
  );
}
console.timeEnd("#1")
