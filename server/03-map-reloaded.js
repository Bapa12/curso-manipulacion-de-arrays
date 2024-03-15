const orders = [
  {
    customerName: "Nicolas",
    total: 60,
    delivered: true
  },
  {
    customerName: "Zulema",
    total: 120,
    delivered: false
  },
  {
    customerName: "Santiago",
    total: 180,
    delivered: true
  },
  {
    customerName: "Valentina",
    total: 240,
    delivered: true
  }
];

console.log("Original Array", orders);

const total = orders.map(item => item.total);
console.log("New Array · Only With Total Property", total);

// const taxes = orders.map(item => {
//   item.tax = .19;
//   return item;
// });

// console.log("New Array · Added Tax Property:", taxes);
// console.log("Original Array", orders);

// const taxes2 = orders.map(item => {
//   item.tax = .19;
//   return {
//     ...item,
//     tax: .19
//   };
// });

const rta3 = orders.map((item) => {
  return {
    ...item,
    tax: .19
  };
});

console.log("Taxes 2.0:", rta3);
console.log("Original Array:", orders);