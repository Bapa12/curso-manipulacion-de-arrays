const numbers = [1, 30, 39, 29, 10, 13];
let answer = true;

for (let i = 0; i < numbers.length; i++) {
  const element = numbers[i];
  if (element >= 40) {
    answer = false;
    break;
  }
}
console.log("For Loop:" ,answer);

const answer2 = numbers.every(number => number <= 40);
console.log("Every Method:", answer2);


// RETO - Evaluar que todos los miembros del Team sean menores de 15 años.

const team = [
  {
    name: "Nicolas",
    age: 12,
  },
  {
    name: "Andrea",
    age: 8,
  },
  {
    name: "Zulema",
    age: 2,
  },
  {
    name: "Santiago",
    age: 18,
  },
];

const ages = team.map(item => item.age);
console.log("Ages:", ages);

const isUnder15 = team.every(age => age >= 15);

if (isUnder15) {
  console.log("Equipo admitido!");
} else {
  console.log("Equipo no admitido, hay jugadores mayores de 15 años");
}