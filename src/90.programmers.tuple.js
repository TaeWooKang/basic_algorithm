// 문제: https://programmers.co.kr/learn/courses/30/lessons/64065

function tuple (s) {
  const answer = new Set()
  const tempList = []
  const numberRegExp = new RegExp(/\d+/)
  let currentIndex = 0
  s.split(",").forEach((element) => {
    const onlyNumber = numberRegExp.exec(element)[0]
    tempList[currentIndex] = tempList[currentIndex] || []
    if (element.includes("}")) {
      tempList[currentIndex].push(onlyNumber)
      currentIndex++
    } else {
      tempList[currentIndex].push(onlyNumber)
    }
  })
  tempList.sort((a, b) => a.length - b.length).forEach((temp) => {
    temp.forEach(element => answer.add(Number(element)))
  })
  return [...answer]
}

const items = [
  "{{2},{2,1},{2,1,3},{2,1,3,4}}", // =>	[2, 1, 3, 4]
  "{{1,2,3},{2,1},{1,2,4,3},{2}}", // =>	[2, 1, 3, 4]
  "{{20,111},{111}}", // => [111, 20]
  "{{123}}", // => [123]
  "{{4,2,3},{3},{2,3,4,1},{2,3}}", // => 	[3, 2, 4, 1]

]
console.time("#1")
for (let item of items) {
  console.log(tuple(item)
  );
}
console.timeEnd("#1")
