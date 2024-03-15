const words = ["spray", "limit", "elite", "exuberant"];
const newArray = [];

for (let i = 0; i < words.length; i++) {
  const element = words[i];
  if (element.length >= 6) {
    newArray.push(element);
  }
}

console.log("New Array · For Loop:", newArray);
console.log("Original Array:", words);

const filteredWords = words.filter(element => element.length >= 6);

console.log("New Array · Filter Method:", filteredWords);
console.log("Original Array:", words);

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
  },
  {
    customerName: "Nicolas",
    total: 2322,
    delivered: false
  }
];

const wasDelivered = orders.filter(item => item.delivered && item.total > 100);
console.log("Was Delivered & Over 100:", wasDelivered);
console.log("Orders Array:", orders);

const search = (query) => {
  return orders.filter(item => {
    return item.customerName.includes(query);
  });
}

console.log("Search:", search("Nico"));
console.log("Search:", search("a"));
console.log("Search:", search("gdfkjndsf"));