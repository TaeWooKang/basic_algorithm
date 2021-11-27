//문제: https://programmers.co.kr/learn/courses/30/lessons/72411

function menuRenewal (orders, course) {
  const ordered = {};
  const candidates = {};
  const maxNum = Array(10 + 1).fill(0);
  const createSet = (arr, start, len, foods) => {
    if (len === 0) {
      ordered[foods] = (ordered[foods] || 0) + 1;
      if (ordered[foods] > 1) candidates[foods] = ordered[foods];
      maxNum[foods.length] = Math.max(maxNum[foods.length], ordered[foods]);
      return;
    }

    for (let i = start; i < arr.length; i++) {
      createSet(arr, i + 1, len - 1, foods + arr[i]);
    }
  };

  orders.forEach((od) => {
    const sorted = od.split('').sort();
    course.forEach((len) => {
      createSet(sorted, 0, len, '');
    });
  });

  const launched = Object.keys(candidates).filter(
    (food) => maxNum[food.length] === candidates[food]
  );

  return launched.sort();
}




const items = [
  [["ABCFG", "AC", "CDE", "ACDE", "BCFG", "ACDEH"], [2, 3, 4]], // => ["AC", "ACDE", "BCFG", "CDE"]
  [["ABCDE", "AB", "CD", "ADE", "XYZ", "XYZ", "ACD"], [2, 3, 5]], // => ["ACD", "AD", "ADE", "CD", "XYZ"]
  [["XYZ", "XWY", "WXA"], [2, 3, 4]], // => ["WX", "XY"]

]
console.time("#1")
for (let item of items) {
  console.log(menuRenewal(item[0], item[1])
  );
}
console.timeEnd("#1")
