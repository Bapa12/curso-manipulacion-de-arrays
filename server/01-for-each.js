const letters = ["a", "b", "c"];

for (let i = 0; i < letters.length; i++) {
  const element = letters[i];
  console.log("For Loop:" ,element);
}

letters.forEach(element => console.log("For Each Method:" ,element));