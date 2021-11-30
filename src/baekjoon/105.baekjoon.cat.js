// 문제: https://www.acmicpc.net/problem/2557

  function cat () {
    return `
    \\    /\\
    )  ( ')
   (  /  )
    \(__)|
`
  }
  
  const items = [
    0 // => "Hello World!"

  ]
  console.time("#1")
  for (let item of items) {
    console.log(cat(item)
    );
  }
  console.timeEnd("#1")
  