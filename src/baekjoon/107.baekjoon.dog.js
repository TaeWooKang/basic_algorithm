// 문제: https://www.acmicpc.net/problem/10172

function dog () {
  return `
  |\\_/|
  |q p|   /}
  ( 0 )"""\\
  |"^"\`     |
  || _/=\\\\__|`
}

const items = [
  0 // => "Hello World!"

]
console.time("#1")
for (let item of items) {
  console.log(dog(item)
  );
}
console.timeEnd("#1")
