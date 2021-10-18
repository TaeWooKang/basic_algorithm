//문제: https://im-developer.tistory.com/61?category=831367

function fibonacciTribonacciSequence (type, arrayList, index, currentIndex = 0) {
  if (type === "fibonacci") {
    return arrayList.reduce((acc, cur, curIndex) => {
      let temp = acc
      if (curIndex <= index) {
        temp += cur
      }
      return temp
    }, 0)
  } else {
    // tribonacci
    const tempArray = []
    for (let i = 0; i <= index; i++) {
      if (arrayList[i]) {
        tempArray.push(arrayList[i])
      } else {
        tempArray.push(arrayList[i - 3] + arrayList[i - 2] + arrayList[i - 1])
      }
    }
    return tempArray
  }
}

const items = [
  {
    type: "fibonacci",
    arrayList: [1, 2, 3, 4, 5], //always arrayList.length > requireIndex
    requireIndex: 3
  }, // => 10
  {
    type: "tribonacci",
    arrayList: [1, 2, 3, 4, 5], //always arrayList.length > 3
    requireIndex: 5
  }, // => [1, 2, 3, 4, 5, 12]
]
console.time("#1")
for (let item of items) {
  console.log(fibonacciTribonacciSequence(item.type, item.arrayList, item.requireIndex)
  );
}
console.timeEnd("#1")
