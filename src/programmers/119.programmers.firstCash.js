// 문제: https://programmers.co.kr/learn/courses/30/lessons/17680

function firstCash (cacheSize, cities) {
  let answer = 0;
  let searchArr = []

  for (const city of cities) {
    const lowerCity = city.toLowerCase()
    const searchIndex = searchArr.indexOf(lowerCity)
    if (searchIndex > -1) {
      answer += 1
      searchArr.splice(searchIndex, 1)
      searchArr.push(lowerCity)
      continue
    }
    answer += 5
    searchArr.push(lowerCity)
    searchArr = searchArr.slice(
      Math.max(searchArr.length - cacheSize, 0),
      cacheSize + 1
    )
  }
  return answer;
}

const items = [
  [3, ["Jeju", "Pangyo", "Seoul", "NewYork", "LA", "Jeju", "Pangyo", "Seoul", "NewYork", "LA"]], // =>50
  [3, ["Jeju", "Pangyo", "Seoul", "Jeju", "Pangyo", "Seoul", "Jeju", "Pangyo", "Seoul"]], // =>	21
  [2, ["Jeju", "Pangyo", "Seoul", "NewYork", "LA", "SanFrancisco", "Seoul", "Rome", "Paris", "Jeju", "NewYork", "Rome"]], // =>	60
  [5, ["Jeju", "Pangyo", "Seoul", "NewYork", "LA", "SanFrancisco", "Seoul", "Rome", "Paris", "Jeju", "NewYork", "Rome"]], // => 	52
  [2, ["Jeju", "Pangyo", "NewYork", "newyork"]], // =>	16
  [0, ["Jeju", "Pangyo", "Seoul", "NewYork", "LA"]] // =>	25

]

console.time("#1")
for (let item of items) {
  console.log(firstCash(item[0], item[1]));
}
console.timeEnd("#1")
