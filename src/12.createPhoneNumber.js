//문제: https://im-developer.tistory.com/41?category=831367

function createPhoneNumber (numberList) {
  // 14.5ms
  return `(${numberList[0]}${numberList[1]}${numberList[2]}) ${numberList[3]}${numberList[4]}${numberList[5]}${numberList[6]}-${numberList[7]}${numberList[8]}${numberList[9]}`
  // 17.5ms
  // return `(${numberList.slice(0, 3).join("")}) ${numberList.slice(3, 6).join("")}-${numberList.slice(6, 10).join("")}`
}

const items = [
  [1, 2, 3, 4, 5, 6, 7, 8, 9, 0], // => (123) 4567-890
  [5, 6, 7, 8, 9, 0, 1, 2, 3, 4], // => (567) 8901-234
  [8, 5, 6, 7, 9, 0, 1, 2, 3, 4], // => (856) 7901-234
  [5, 6, 1, 2, 7, 8, 9, 0, 3, 4], // => (561) 2789-034
  [0, 1, 2, 5, 6, 7, 8, 9, 3, 4], // => (012) 5678-934
]
console.time("#1")
for (let item of items) {
  console.log(createPhoneNumber(item)
  );
}
console.timeEnd("#1")
