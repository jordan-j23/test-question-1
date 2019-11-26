const readlineSync = require("readline-sync");

const IN_TO_MI = 63360;
const FT_TO_MI = 5280;
const YD_TO_MI = 1760;

let originUnit = readlineSync.question("\nEnter an origin unit: ");
let destUnit = readlineSync.question("Enter a destination unit: ");
let value = Number(readlineSync.question)("Enetr a value: ");
let miles = "";

if (originUnit = "inches" && destUnit = "miles") {
let inches = "";
  let inchSum = (inches * IN_TO_MI) * miles;
  inchSum = inchSum.toLocaleString("en", [minimumFractionDigits: 1]);
  console.log("\nThere are" + inchesSum + "inches in" + miles + "miles.")
}
else if (originUnit = "feet" && destUnit = "miles") {
  let feet = "";
  let feetSum = (feet * FT_TO_MI) * miles;
  feetSum = feetSum.toLocaleString("en", [minimumFractionDigits: 1])
  console.log("\nThere are" + feetSum + "feet in" + miles + "miles.")
}
else if (originUnit = "yards" && destUnit = "miles") {
  let yards = "";
  let yardSum = (yards * YD_TO_MI) * miles;
  yardSum = yardSum.toLocaleString("en", [minimumFractionDigits: 1]);
  console.log("\nThere are" + yardSum + "yards in" + miles + "miles.")
}
