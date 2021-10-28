//문제: https://programmers.co.kr/learn/courses/30/lessons/12903

function dartGame (dartResult) {
  let tempList = []
  let tempIndex = 0
  let beforeNumber = false
  for (let i = 0; i < dartResult.length; i++) {
    if (dartResult[i] >= 0) {
      if (beforeNumber) {
        tempList[tempIndex] = Number(`${tempList[tempIndex]}` + dartResult[i])
      } else {
        tempIndex += 1
        tempList[tempIndex] = Number(dartResult[i])
      }
      beforeNumber = true
    } else {
      switch (dartResult[i]) {
        case "S":
          tempList[tempIndex] = Math.pow(tempList[tempIndex], 1)
          beforeNumber = false
          break;
        case "D":
          tempList[tempIndex] = Math.pow(tempList[tempIndex], 2)
          beforeNumber = false
          break;
        case "T":
          tempList[tempIndex] = Math.pow(tempList[tempIndex], 3)
          beforeNumber = false
          break;
        case "*":
          tempList[tempIndex - 1] = tempList[tempIndex - 1] * 2
          tempList[tempIndex] = tempList[tempIndex] * 2
          beforeNumber = false
          break;
        case "#":
          tempList[tempIndex] = -tempList[tempIndex]
          beforeNumber = false
          break;
      }
    }
  }
  return tempList.reduce((acc, cur) => acc = cur ? acc + cur : acc, 0)
}

const items = [
  "1S2D*3T", // => 37
  "1D2S#10S", // =>	9
  "1D2S0T", // => 3
  "1S*2T*3S", // => 23
  "1D#2S*3S", // => 5
  "1T2D3D#", // => -4
  "1D2S3T*", // => 59


]
console.time("#1")
for (let item of items) {
  console.log(dartGame(item)
  );
}
console.timeEnd("#1")
