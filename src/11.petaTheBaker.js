//문제: https://im-developer.tistory.com/41?category=831367

function getCakeCount (recipe, ingredient) {
  let count = 0
  Object.keys(recipe).forEach(key => {
    const availCount = parseInt(ingredient[key] / recipe[key]) || 0
    count = count < availCount && count || availCount
  })

  return count
}

const items = [
  { // 2
    recipe: { flour: 500, sugar: 200, eggs: 1 },
    ingredient: { flour: 1200, sugar: 400, eggs: 3 }
  },
  { // 0
    recipe: { apples: 3, flour: 300, sugar: 150, milk: 100, oil: 100 },
    ingredient: { sugar: 500, flour: 2000, milk: 2000 }
  },
]
console.time("#1")
for (let item of items) {
  console.log(getCakeCount(item.recipe, item.ingredient)
  );
}
console.timeEnd("#1")
