const inquirer = require("inquirer");

const fs = require("fs");

const { Circle, Square, Star, Triangle } = require("./lib/shapes");

function writeToFile(fileName, answers) {
  let svgString = "";
  svgString =
    '<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">';
  svgString += `${answers.shape}`;

  let shapeChoise;
  if (answers.shape === "Circle") {
    shapeChoise = new Circle();
    svgString +=
      '<circle cx="150" cy="100" r="80" fill="' +
      answers.shapeBackgroundColor +
      '" stroke="black" stroke-width="1"/> <text x="150" y="120"';
  } else if (answers.shape === "Square") {
    shapeChoise = new Square();
    svgString +=
      '<rect x="75" y="50" width="160" height="160" fill="' +
      answers.shapeBackgroundColor +
      '" stroke="black" stroke-width="1"/> <text x="150" y="130"';
  } else if (answers.shape === "Star") {
    shapeChoise = new Star();
    svgString +=
      '<polygon points="150,30 175,75 225,75 185,110 205,155 150,125 95,155 115,110 75,75 125,75" fill="' +
      answers.shapeBackgroundColor +
      '" stroke="black" stroke-width="1" /> <text x="150" y="115"';
  } else if (answers.shape === "Triangle") {
    shapeChoise = new Triangle();
    svgString +=
      '<polygon points="150, 18 244, 182 56, 182" fill="' +
      answers.shapeBackgroundColor +
      '" stroke="black" stroke-width="1" /> <text x="150" y="130"';
  }

  svgString += ` font-family="times-new-roman" text-anchor="middle" font-size="60" stroke="black" stroke-width="0.75" fill="${answers.textColor}">${answers.text.toUpperCase()}</text>`;
  svgString += "</svg>";

  fs.writeFile(fileName, svgString, (err) => {
    err ? console.log(err) : console.log("Generated logo.svg");
  });
}

function promptUser() {
  inquirer
    .prompt([
      {
        type: "input",
        message:
          "What text would you like you logo to display? (Enter up to three characters)",
        name: "text",
      },
      {
        type: "input",
        message:
          "Choose text color (Enter color keyword OR a hexadecimal number)",
        name: "textColor",
      },
      {
        type: "list",
        message: "What shape would you like the logo to render?",
        choices: ["Circle", "Square", "Star", "Triangle"],
        name: "shape",
      },
      {
        type: "input",
        message:
          "Choose shapes color (Enter color keyword OR a hexadecimal number)",
        name: "shapeBackgroundColor",
      },
    ])
    .then((answers) => {
      if (answers.text.length > 3) {
        console.log("Must enter a value of no more than 3 characters");
        promptUser();
      } else {
        writeToFile("logo.svg", answers);
      }
    });
}

promptUser();
