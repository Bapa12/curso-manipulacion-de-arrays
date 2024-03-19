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

let array = [];

for (let i = 0; i < 30; i++) {
  array.push(Math.floor(Math.random() * 11));
}

const newArray = array.reduce((obj, value) => {
  if (value < 5) {
    obj["1-4"] += 1;
  } else if (value < 9) {
    obj["5-8"] += 1;
  } else {
    obj["9-10"] += 1;
  }
  return obj;
}, {
  "1-4": 0,
  "5-8": 0,
  "9-10": 0
});

console.log(newArray);