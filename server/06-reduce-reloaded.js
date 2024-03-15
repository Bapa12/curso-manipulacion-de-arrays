const items = [1, 3, 2, 3, 3, 1, 10];

const object = items.reduce((obj, item) => {
  if (!obj[item]) {
    obj[item] = 1;
  } else {
    obj[item] = obj[item] + 1;
  }
  return obj;
}, {});

console.log("Items with Reduce Method:", object);
console.log("Original Array:", items);

const data = [
  {
    name: "Nicolas",
    level: "low"
  },
  {
    name: "Andrea",
    level: "medium"
  },
  {
    name: "Zulema",
    level: "high"
  },
  {
    name: "Santiago",
    level: "low"
  },
  {
    name: "Valentina",
    level: "medium"
  },
  {
    name: "Lucia",
    level: "high"
  }
];

const dataLevel = data
.map(item => item.level)
.reduce((obj, item) => {
  if (!obj[item]) {
    obj[item] = 1;
  } else {
    obj[item] += 1;
  }
  return obj;
}, {});

console.log("Data Level:", dataLevel);