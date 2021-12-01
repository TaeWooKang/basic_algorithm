// 문제: https://programmers.co.kr/learn/courses/30/lessons/42583

function truckCrossingTheBridge (bridge_length, weight, truck_weights) {
  let answer = 0;
  let road = new Array(bridge_length).fill(0)

  while (truck_weights.length > 0 || road.reduce((acc, cur) => acc + cur, 0) !== 0) {
    answer++
    road.shift()
    const currentSum = road.reduce((acc, cur) => acc + cur, 0)
    if (currentSum < weight && currentSum + truck_weights[0] <= weight) {
      road.push(truck_weights.shift())
    } else {
      road.push(0)
    }
  }

  return answer;
}


const items = [
  [2, 10, [7, 4, 5, 6]], // => 8
  [100, 100, [10]], // => 101
  [100, 100, [10, 10, 10, 10, 10, 10, 10, 10, 10, 10]], // => 110

]

console.time("#1")
for (let item of items) {
  console.log(truckCrossingTheBridge(item[0], item[1], item[2])
  );
}
console.timeEnd("#1")
