// 문제: 148~150 페이지

let globalA = []
function nestedLoopReplacement (num, len) {
  globalA = []
  const array = []
  for (let i = 0; i < num; i++) {
    array.push(i)
  }
  loopWork(array, [], 0, len)
  return globalA
}

function loopWork (arr, curreuntResult, currentIndex, maxLength) {
  for (let i = currentIndex; i < arr.length; i++) {
    const newCurrentResult = [...curreuntResult]
    newCurrentResult.push(arr[i])
    if (newCurrentResult.length === maxLength) {
      globalA.push(newCurrentResult)
    } else {
      loopWork(arr, newCurrentResult, currentIndex + 1, maxLength)
    }
  }
}

const items = [
  [2, 2], // => 2
  [7, 3], // => 210
  [10, 3], // => 720
]
console.time("#1")
for (let item of items) {
  console.log(nestedLoopReplacement(item[0], item[1]).length);
}
console.timeEnd("#1")
