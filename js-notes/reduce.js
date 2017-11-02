var orders = [
  { amount: 250 },
  { amount: 400 },
  { amount: 100 },
  { amount: 325}
]

// // FOR LOOP
var totalAmount = 0
for (var i = 0; i < orders.length; i++) {
  totalAmount += orders[i].amount
}

console.log(totalAmount);

// REDUCE

var totalAmount = orders.reduce(function(sum, order) {
  console.log("hello", sum, order)
  return sum + order.amount
}, 0)

console.log(totalAmount);

// ARROW FUNCTION REDUCE

var totalAmount = orders.reduce((sum, order) => sum + order.amount, 0)
console.log(totalAmount);
