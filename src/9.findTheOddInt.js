//문제: https://im-developer.tistory.com/39?category=831367

function findTheOddInt (numList) {
  let tempObject = {}
  for (const num of numList) {
    if (tempObject[num]) {
      delete tempObject[num]
    } else {
      tempObject[num] = true
    }
  }
  return Object.keys(tempObject)[0]
}

const items = [
  [20, 1, -1, 2, -2, 3, 3, 5, 5, 1, 2, 4, 20, 4, -1, -2, 5], // 5
  [1, 1, 2, -2, 5, 2, 4, 4, -1, -2, 5] // -1
]
console.time("#1")
for (let item of items) {
  console.log(findTheOddInt(item)
  );
}
console.timeEnd("#1")
