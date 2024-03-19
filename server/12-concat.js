const animals = ["🐶", "🦊", "🐷", "🐼"];
const animals2 = ["🦝", "🐨", "🐣", "🦔"];

const allAnimals = [...animals];

for (let i = 0; i < animals2.length; i++) {
  const element = animals2[i];
  allAnimals.push(element);
}

console.log("For Loop:", allAnimals);

const allAnimals2 = animals.concat(animals2);
console.log("Concat Method:", allAnimals2);

const allAnimals3 = [].concat(animals, animals2);
console.log("Concat Method 2:", allAnimals3);

const allAnimals4 = [...animals, ...allAnimals2];
console.log("Spread Operator:", allAnimals4);

const spreadOperatorPlusString = [...animals, ..."string"];
console.log("Spread Operador Plus String:", spreadOperatorPlusString);

animals.push(...animals2);
console.log("Animals Modified:", animals);