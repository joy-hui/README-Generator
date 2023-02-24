// const fs = require("fs");
// const path = require("path");
// const inquirer = require("inquirer");
//const generateMarkdown = require("./utils/generateMarkdown");

import inquirer from "inquirer"; // use other way add module in package.json  "type":"module",
import fs from "fs";
import path from "path";
import { generateMarkdown } from "./utils/generateMarkdown.js";

///Users/huizhao/bootcamp/README-Generator/utils/generateMarkdown.js

// array of questions for user
const questions = [
  {
    type: "input",
    name: "github",
    message: "What is your GitHub username?",
  },
  {
    type: "input",
    name: "email",
    message: "What is your email address?",
  },
  {
    type: "input",
    name: "name",
    message: "What is your project's name?",
  },
  {
    type: "input",
    name: "description",
    message: "Please write a short description of your project ?",
  },
  {
    type: "list",
    name: "license",
    message: "What is your GitHub username?",
    choices: ["MIT", "APACHE 2.0", "GPL 3.0", "BSD 3", "None"],
  },
  {
    type: "input",
    name: "install",
    message: "What command should be run to install dependencies?",
    default: "npm i",
  },
  {
    type: "input",
    name: "test",
    message: "What command should be run to run tests?",
    default: "npm test",
  },
  {
    type: "input",
    name: "use",
    message: "What does the user need to know about using the repo?",
  },
  {
    type: "input",
    name: "contribute",
    message: "What does the user need to know about contributing to the repo?",
  },
];

// function to write README file
function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(), fileName), data);
}

// function to initialize program
function init() {
  inquirer.prompt(questions).then((answers) => {
    console.log("Generating README...");
    // fs.writeFile('README.md', generateMarkdown({ ...answers }), (err) =>
    //   err ? console.log(err) : console.log('Successfully created index.html!')
    // );
    writeToFile("Generator-Readme.md", generateMarkdown({ ...answers }));
  });
}

// function call to initialize program
init();
