const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");

const generatorMarkdown = require("./util/generateMarkdown.js");

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

// function to write README file
function writeToMarkDownFile(fileName, data) {
  fs.writeFile(fileName, data, function (err) {
    console.log(fileName);
    console.log(data);
    if (err) {
      return console.log(err);
    } else {
      console.log("Your inputs have been logged into README.md successfully!");
    }
  });
}

// function to initialize program
function init() {
  inquirer.prompt(questions).then(function (data) {
    writeToMarkDownFile("README.md", generatorMarkdown(data));
    console.log(data);
  });
}

// function call to initialize program
init();
