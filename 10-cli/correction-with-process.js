const validator = require("validator");


const emails = process.argv[2].split(',');
emails.forEach((email) => {
  console.log("%s: %s", email, validator.isEmail(email) ? "OK" : "KO");
});
