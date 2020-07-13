const validator = require("validator");

const tableau = [
  "contact@email.com",
  "juslin",
  "kouadio@c.ci",
  "facebook.com",
  "1234",
];

for (let index = 0; index < tableau.length; index++) {
  const result = validator.isEmail(tableau[index]) ? "OK" : "KO";
  console.log(`${tableau[index]}: ${result}`);
}
