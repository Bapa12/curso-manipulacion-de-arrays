const pets = ["Cat", "Dog", "Parrot"];
let answer = false;

for (let i = 0; i < pets.length; i++) {
  const element = pets[i];
  if (element === "Dog");
  answer = true;
  break;
}

console.log("For Loop:", answer);

const answer2 = pets.includes("Dog");
console.log("Includes Method 1:", answer2);

const answer3 = pets.includes("og");
console.log("Includes Method 2:",answer3);