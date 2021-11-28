// 문제: https://www.acmicpc.net/problem/2557

function helloWorld (num1, num2) {
    return "Hello World!"
  }
  
  const items = [
    0 // => "Hello World!"

  ]
  console.time("#1")
  for (let item of items) {
    console.log(helloWorld(item)
    );
  }
  console.timeEnd("#1")
  