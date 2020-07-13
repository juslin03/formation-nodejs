const validator = require("validator");

const emails = [
  "contact@email.com",
  "juslin",
  "kouadio@c.ci",
  "facebook.com",
  "1234",
];

for (let index = 0; index < emails.length; index++) {
  const result = validator.isEmail(emails[index]) ? "OK" : "KO";
  console.log(`${emails[index]}: ${result}`);
}
