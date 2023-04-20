// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");
// ! NEEDS EXPORT README WITH TEMPLATE LITERALS
const generatorREADME = require("SOMETHING HERE");

// TODO: Create an array of questions for user input
const questions = [
  {
    type: "input",
    message: "Enter a name for your project",
    name: "Title",
  },
  {
    type: "input",
    message:
      "What is your project about? Provide a detailed description of your project",
    name: "Description",
  },
  {
    type: "input",
    message: "Table of Contents. [Click Enter Again]",
    name: "Table of Contents",
  },
  {
    type: "input",
    message:
      "Enter any software the user needs to run the application properly",
    name: "Installation",
  },
  {
    type: "input",
    message:
      "How is the application utilized? Give detailed and clear instructions",
    name: "Usage",
  },
  {
    type: "input",
    message: "Are there any licenses you want to use?",
    name: "License",
  },
  {
    type: "input",
    message: "List anyone who contributed to this project including yourself",
    name: "Contributing",
  },
  {
    type: "input",
    message: "Enter commands that can be used to invoke the featured code",
    name: "Tests",
  },
  {
    type: "input",
    message: "Enter any technologies utilized",
    name: "Technologies",
  },
  {
    type: "input",
    message: "Enter your GitHub username",
    name: "Username",
  },
  {
    type: "input",
    message: "Enter your email address",
    name: "Email",
  },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
