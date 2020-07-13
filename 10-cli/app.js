const inquirer = require("inquirer");
const { program } = require("commander");

var questions = [
  {
    type: "input",
    name: "nombre1",
    message: "Entrer le nombre 1 : ",
    validate: function (number) {
      var ok = number.match(/[0-9]/g);
      if (ok) {
        return true;
      }
      return "Entrer un nombre valide";
    },
  },
  {
    type: "input",
    name: "nombre2",
    message: "Entrer le nombre 2 : ",
    validate: function (nombre3) {
      var ok = nombre3.match(/[0-9]/g);
      if (!ok) return "Entrer un nombre valide";
      return true;
    },
  },
];

inquirer
  .prompt(questions)
  .then((reponses) => {
    var tableau = Object.values(reponses);
    console.log(
      "Addition: %d \nSoustraction: %d\nMultiplication: %d\nDivision: %d",
      tableau.reduce((a, b) => +a + +b),
      tableau.reduce((a, b) => +a - +b),
      tableau.reduce((a, b) => +a * +b),
      tableau.reduce((a, b) => +a / +b)
    );
  })
  .catch((error) => {
    if (error.isTtyError) {
      console.log(error);
    }
  });

function myParseInt(value, radix) {
  return parseInt(value);
}

program
  .option("-f", "--float <number>", "nombre reel", parseFloat)
  .option("-i", "--integer <number>", "nombre entier", myParseInt);

// console.log(program.parse(process.argv));
program.parse(process.argv);

if (program.float !== undefined)
  console.log(`nombre entier : ${program.float}`);
if (program.integer !== undefined)
  console.log(`nombre entier: ${program.integer}`);

/**
 * {
    type: "input",
    name: "addition",
    message: "Entrer le signe d'addition",
    validate: function (signe) {
      var ok = signe.match(/\+/i);
      if (!ok) {
        return "Non valide";
      }
      return true;
    },
  },
 */
