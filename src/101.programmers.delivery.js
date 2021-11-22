// 문제: https://programmers.co.kr/learn/courses/30/lessons/12978
// 해답: https://velog.io/@leeeunbin/%ED%94%84%EB%A1%9C%EA%B7%B8%EB%9E%98%EB%A8%B8%EC%8A%A4-%EB%B0%B0%EB%8B%AC-JavaScript

function delivery (N, road, K) {
  let arr = Array(N + 1).fill(Infinity);
  let adj = Array.from(Array(N + 1), () => Array());

  for (let [a, b, c] of road) {
    adj[a].push({ to: b, time: c });
    adj[b].push({ to: a, time: c });
  }

  let check = [{ to: 1, time: 0 }];
  arr[1] = 0;

  while (check.length) {
    let { to, time } = check.pop();

    adj[to].forEach(next => {
      if (arr[next.to] > arr[to] + next.time) {
        arr[next.to] = arr[to] + next.time;
        check.push(next);
      }
    });
  }

  return arr.filter((time) => time <= K).length;
}

const items = [
  [5, [[1, 2, 1], [2, 3, 3], [5, 2, 2], [1, 4, 2], [5, 3, 1], [5, 4, 2]], 3], // =>	4
  [6, [[1, 2, 1], [1, 3, 2], [2, 3, 2], [3, 4, 3], [3, 5, 2], [3, 5, 3], [5, 6, 1]], 4] // =>	4

]

console.time("#1")
for (let item of items) {
  console.log(delivery(item[0], item[1], item[2])
  );
}
console.timeEnd("#1")
