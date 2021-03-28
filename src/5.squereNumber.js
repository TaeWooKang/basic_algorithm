//문제: https://im-developer.tistory.com/34?category=831367

function getNextSquereNumber(number) {
  let calcNum = number;
  let tryCount = 0;
  calcNum = calcNum / 2;

  while(calcNum - tryCount > 0) {
      calcNum = calcNum - tryCount;
      tryCount = tryCount + 1;
  }

  if ((tryCount) === calcNum * 2) {
    return (tryCount + 1) * (tryCount + 1)
  } else {
    return -1
  }
}

let items = [2554695936];
console.time("#1")
for (let i in items){
  console.log(getNextSquereNumber(items[i])
  );
}
console.timeEnd("#1")
