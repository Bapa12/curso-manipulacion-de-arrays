const numbers = [1, 30, 49, 29, 10, 13];
let answer = undefined;

for (let i = 0; i < numbers.length; i++) {
  const element = numbers[i];
  if (element === 302323) {
    answer = element;
    break;
  }
}
console.log("For Loop:", answer);

const answer2 = numbers.find(number => number === 302323);
console.log("Find Method:", answer2);

// Ejercicio

const products = [
  {
    name: "Pizza",
    price: 12,
    id: '🍕'
  },
  {
    name: "Burger",
    price: 23,
    id: '🍔'
  },
  {
    name: "Hot dog",
    price: 34,
    id: '🌭'
  },
  {
    name: "Hot cakes",
    price: 355,
    id: '🥞'
  },
];

const findProduct = products.find(item => item.id === '🍔');
console.log("Find Product:", findProduct);

const findProductIndex = products.findIndex(item => item.id === '🍔');
console.log("Product Index ('🍔'):", findProductIndex);