//문제: https://im-developer.tistory.com/56?category=831367

function directionsReduction (directions) {
  let results = directions
  let reTry = true
  const derectionAntiIndex = {
    "북쪽": "남쪽",
    "남쪽": "북쪽",
    "동쪽": "서쪽",
    "서쪽": "동쪽",
  }
  while (reTry) {
    reTry = false
    for (let i = 0; i < results.length - 1; i++) {
      const currentDirection = results[i]
      const nextDirection = results[i + 1]
      if (derectionAntiIndex[currentDirection] === nextDirection) {
        const tempResults = [...results.slice(0, i), ...results.slice(i + 2)]
        results = tempResults
        reTry = true
        break;
      }
    }
  }
  return results
}

const items = [
  ["북쪽", "남쪽", "남쪽", "동쪽", "서쪽", "북쪽", "서쪽"], // => "서쪽"
]
console.time("#1")
for (let item of items) {
  console.log(directionsReduction(item)
  );
}
console.timeEnd("#1")
