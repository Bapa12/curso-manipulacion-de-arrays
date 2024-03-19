const elements = ["Fire", "Air", "Water", "Earth"];
const marker = "--";
let answer = "";

for (let i = 0; i < elements.length; i++) {
  const element = elements[i];
  if (i === elements.length - 1) {
    answer += element;
  } else {
    answer = answer + element + marker;
  }
}
console.log("For Loop", answer);

const answer2 = elements.join("·");
console.log("Join Method:", answer2);

const title = "Curso de Manipulación de Arrays";
const finalURL = title.split(" ").join("-").toLowerCase();
console.log(finalURL);

