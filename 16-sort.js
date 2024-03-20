const months = ["March", "Jan", "Feb", "Dec"];
months.sort();
console.log(months);

const numbers = [1, 30, 4, 21, 100000];
numbers.sort();
console.log("Sort Without Modification:", numbers);
numbers.sort((a, b) => a - b);
console.log("Sort With Arrow Function - From Lowest to Highest:", numbers);
numbers.sort((a, b) => b - a);
console.log("Sort With Arrow Function - From Highest to Lowest:", numbers);

const words = [
    "réservé",
    "premier",
    "communiqué",
    "café",
    "adieu",
    "éclair",
    "banana",
];
words.sort();
console.log("Sort (Words) Without Modification:", words);
words.sort((a, b) => a.localeCompare(b));
console.log("Sort With Locale Compare:", words);


const orders = [
    {
        customerName: "Nicolas",
        total: 600,
        delivered: true,
    },
    {
        customerName: "Zulema",
        total: 120,
        delivered: false,
    },
    {
        customerName: "Santiago",
        total: 1840,
        delivered: true,
    },
    {
        customerName: "Valentina",
        total: 240,
        delivered: true,
    },
];
orders.sort((a, b) => b.total - a.total);
console.log("Sort From Highest to Lowest:", orders);
orders.sort((a, b) => a.total - b.total);
console.log("Sort From Lowest to Highest:", orders);

