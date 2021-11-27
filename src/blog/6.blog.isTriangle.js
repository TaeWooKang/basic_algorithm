//문제: https://im-developer.tistory.com/35?category=831367

function isTriangle(a,b,c) {
  let maxNum = Math.max(a,b,c);
  let calcNum = ( a + b + c ) - maxNum;

  return maxNum <= calcNum ? true : false;
}

console.time("#1")
let items = [[1,2,3], [4,5,6], [7,8,9], [7,7,15]]
for (let i in items){
  console.log(isTriangle(items[i][0],items[i][1],items[i][2])
  );
}
console.timeEnd("#1")
