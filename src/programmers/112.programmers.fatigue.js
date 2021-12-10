// 문제: https://programmers.co.kr/learn/courses/30/lessons/87946

const globalTryArray = []

function fatigue (k, dungeons) {
  runDeongeon(k, dungeons)

  return Math.max(...globalTryArray, 0);
}

function runDeongeon (piro, currentArray, count = 0) {
  currentArray = currentArray.filter((el) => el[0] <= piro && el[1] <= piro)
  if (currentArray.length === 0) {
    globalTryArray.push(count)
    return count
  }
  for (let i = 0; i < currentArray.length; i++) {
    const newPiro = piro - currentArray[i][1]
    const newCurrentArray = [...currentArray.slice(0, i), ...currentArray.slice(i + 1)]
    const newCount = count + 1
    runDeongeon(newPiro, newCurrentArray, newCount)
  }
}


const items = [
  [80, [[80, 20], [50, 40], [30, 10]]] // =>	3

]

console.time("#1")
for (let item of items) {
  console.log(fatigue(item[0], item[1]));
}
console.timeEnd("#1")
