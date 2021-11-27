//문제: https://programmers.co.kr/learn/courses/30/lessons/82612

function secretMap (n, arr1, arr2) {
  const answer = [];
  for (let i = 0; i < n; i++) {
    let temp = (arr1[i] | arr2[i]).toString(2).padStart(n, "0")
    temp = temp.replace(/1/g, "#").replace(/0/g, " ")
    answer.push(temp)
  }
  return answer;
}

const items = [
  [5,
    [9, 20, 28, 18, 11],
    [30, 1, 21, 17, 28]
  ], // => ["#####","# # #", "### #", "# ##", "#####"]
  [
    6,
    [46, 33, 33, 22, 31, 50],
    [27, 56, 19, 14, 14, 10] // => ["######", "### #", "## ##", " #### ", " #####", "### # "]
  ]
]
console.time("#1")
for (let item of items) {
  console.log(secretMap(item[0], item[1], item[2])
  );
}
console.timeEnd("#1")
