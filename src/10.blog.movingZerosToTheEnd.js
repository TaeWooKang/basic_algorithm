//문제: https://im-developer.tistory.com/40?category=831367

function moveZeros (dataList) {
  let tempArray = []
  let zeroArray = []
  dataList.forEach(data => {
    if (data === 0) {
      zeroArray.push(data)
    } else {
      tempArray.push(data)
    }
  })
  return [...tempArray, ...zeroArray]
}

const items = [
  [1, 0, 1, 2, 0, 1, 3, "a"], // [ 1, 1, 2, 1, 3, 'a', 0, 0 ]
  [true, 1, 0, 0, 2, 0, 0, 3, "a"], // [ true, 1, 2, 3, 'a', 0, 0, 0, 0 ]
  [0, 1, 9, 1, 2, 9, 1, 3, false], // [ 1, 9, 1, 2, 9, 1, 3, false, 0 ]
]
console.time("#1")
for (let item of items) {
  console.log(moveZeros(item)
  );
}
console.timeEnd("#1")
