//문제: https://im-developer.tistory.com/45?category=831367

function addingBigNumber (numberList) {
  let result = []
  const moreAdd = [0]
  const num1List = numberList[0].split("").reverse()
  const num2List = numberList[1].split("").reverse()

  for (let i = 0; i < Math.max(num1List.length, num2List.length); i++) {
    const num1 = num1List[i] && Number(num1List[i]) || 0
    const num2 = num2List[i] && Number(num2List[i]) || 0
    const moreAddNum = moreAdd[i] && Number(moreAdd[i]) || 0
    const compareNumber = num1 + num2 + moreAddNum
    moreAdd.push(parseInt(compareNumber / 10))
    result.push(compareNumber % 10)
  }

  if (moreAdd.length > result.length && moreAdd[moreAdd.length - 1]) {
    result.push(moreAdd[moreAdd.length - 1])
  }

  return result.reverse().join("")
}

const items = [
  ["123", "321"], // => "444"
  ["11", "99"], // => "110"
  ["63829983432984289347293874", "90938498237058927340892374089"], // => "91002328220491911630239667963"
  ["8", "2"], // => "10"
  ["0", "0"] // => "0"
]
console.time("#1")
for (let item of items) {
  console.log(addingBigNumber(item)
  );
}
console.timeEnd("#1")
