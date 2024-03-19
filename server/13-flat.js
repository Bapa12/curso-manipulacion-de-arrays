const matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];

const matrix2 = [
  [1, 2, 3],
  [4, 5, 6, [1, 2, [1, 2]]],
  [7, 8, 9]
];

const newArray = [];

for (let i = 0; i < matrix.length; i++) {
  const array = matrix[i];
  for (let j = 0; j < array.length; j++) {
    const element = matrix[i][j];
    newArray.push(element);
  }
}

console.log("For Loop:", newArray);

const newArray2 = matrix.flat(1);
console.log("Flat Method:", newArray2);

const newArray3 = [].concat.apply([], matrix);
console.log("Another Method of Flatting an Array:", newArray3);

const newArray4 = matrix2.flat(3);
console.log("Flat Method with More Arrays:", newArray4);