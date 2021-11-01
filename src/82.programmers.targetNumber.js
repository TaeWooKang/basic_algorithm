//문제: https://programmers.co.kr/learn/courses/30/lessons/43165

function targetNumber (numbers, target) {
  let answer = 0;

  dfs(0, 0);

  function dfs (index, sum) {
    if (index === numbers.length) {
      if (sum === target) {
        answer++;
      }
      return;
    }

    dfs(index + 1, sum + numbers[index]);
    dfs(index + 1, sum - numbers[index]);
  }

  return answer;
}



const items = [
  [[1, 1, 1, 1, 1], 3] // =>	5


]
console.time("#1")
for (let item of items) {
  console.log(targetNumber(item[0], item[1])
  );
}
console.timeEnd("#1")
