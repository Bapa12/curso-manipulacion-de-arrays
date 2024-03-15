const totals = [1, 2, 3, 4];
let sum = 0;

for (let i = 0; i < totals.length; i++) {
  const element = totals[i];
  sum = sum + element;
}

console.log("Sum with For Loop:", sum);
console.log("Original Array:", totals);

let sum2 = totals.reduce((number, item) => number + item, 0);
console.log("Sum With Reduce Method:", sum2);
console.log("Original Array:", totals);