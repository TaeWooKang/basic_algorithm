// 문제: https://programmers.co.kr/learn/courses/30/lessons/42747
// 해답: https://en.wikipedia.org/wiki/H-index

function hIndex (citations) {
  let answer = 0;
  // f 의 값을 가장 큰 값에서 가장 낮은 값으로 정렬합니다 
  citations.sort((a, b) => b - a);
  for (let i = 0; i < citations.length; i++) {
    // f 가 위치 보다 크거나 같은 마지막 위치를 찾습니다
    if (citations[i] >= i + 1) {
      answer++
    } else {
      break
    }
  }

  return answer;
}


const items = [
  [3, 0, 6, 1, 5], //= >	3
  [10, 8, 5, 4, 3], //= > 4
  [25, 8, 5, 3, 3], //= > 3
  [2, 2] // => 2
]

console.time("#1")
for (let item of items) {
  console.log(hIndex(item)
  );
}
console.timeEnd("#1")
