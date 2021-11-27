// 문제: https://programmers.co.kr/learn/courses/30/lessons/42839

function findDecimals (numbers) {
  const answer = new Set();

  getNumbers(numbers.split("")).forEach(temp => {
    if (check(temp)) {
      answer.add(+temp)
    }
  })
  return answer.size;
}

function getNumbers (numbers, tempNumber = "") {
  const result = []
  if (numbers.length > 0) {
    for (let i = 0; i < numbers.length; i++) {
      const number = tempNumber + numbers[i]
      const newNumbers = [...numbers]
      newNumbers.splice(i, 1)
      result.push(number)
      result.push(...getNumbers(newNumbers, number))
    }
  }
  return result
}

function check (num) {
  if (num < 2) {
    return false
  }
  for (let i = 2; i ** 2 <= num; i++) {
    if (num % i === 0) {
      return false
    }
  }
  return true
}


const items = [
  "17", // =>	3
  "011", // =>	2


]
console.time("#1")
for (let item of items) {
  console.log(findDecimals(item)
  );
}
console.timeEnd("#1")
