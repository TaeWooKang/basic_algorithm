//문제: https://programmers.co.kr/learn/courses/30/lessons/12949

function matrixMultiplication (arr1, arr2) {
  return arr1.map((row) => {
    return arr2[0].map((x, y) => {
      return row.reduce((acc, cur, index) => {
        return acc + cur * arr2[index][y]
      }, 0)
    })
  })
}



const items = [
  [[[1, 4], [3, 2], [4, 1]], [[3, 3], [3, 3]]], // =>	[[15, 15], [15, 15], [15, 15]]
  [[[2, 3, 2], [4, 2, 4], [3, 1, 4]], [[5, 4, 3], [2, 4, 1], [3, 1, 1]]]	// => [[22, 22, 11], [36, 28, 18], [29, 20, 14]]  


]
console.time("#1")
for (let item of items) {
  console.log(matrixMultiplication(item[0], item[1])
  );
}
console.timeEnd("#1")
