let globalA = []
function solution (num, len) {
    console.time("#1")
    globalA = []
    const array = []
    for (let i = 0; i < num; i++) {
        array.push(i)
    }
    loopWork(array, [], 0, len)
    console.timeEnd("#1")
}

function loopWork (arr, curreuntResult, currentIndex, maxLength) {
    for (let i = currentIndex; i < arr.length - 1; i++) {
        const newCurrentResult = [...curreuntResult]
        newCurrentResult.push(arr[i])
        if (newCurrentResult.length === maxLength) {
            globalA.push(newCurrentResult)
        } else {
            loopWork(arr, newCurrentResult, currentIndex + 1, maxLength)
        }
    }
}

solution(7, 3)
// console.log(globalA)