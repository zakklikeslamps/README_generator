// packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
//const genFile = require('./utils/generateMarkdown');

// array of questions for user input
const questions = [];

// function to write README file
function writeToFile(fileName, data) {}

// function to initialize README file
function init() {
    //project name
    //description
    //installation process
    //usage info
    //contribution guide
    //test instructions
    //license 
    //github username
    //email 
}

const baseTemplate = fs.readFileSync("./utils/baseTemplate.txt", "utf8");
const readmeSections = baseTemplate.split("~");

inquirer.prompt([
    {
        type: "input",
        name: "github",
        message: "What is your Github username?"
    },

    {
        type: "input",
        name: "email",
        message: "What is your email?"
    },

    {
        type: "input",
        name: "project",
        message: "What is the name of this project?"
    },

    {
        type: "input",
        name: "description",
        message: "Please give a short description of this project."
    },

    {
        type: "input",
        name: "installation",
        message: "Please provide instructions for the installation process of this application."
    },

    {
        type: "input",
        name: "usage",
        message: "Please provide instructions on how to use this application."
    },

    {
        type: "list",
        name: "license",
        message: "What license does this application back?",
        choices: ['MIT', 'APACHE 2.0', 'GNU GPLv3', 'GNU AGPLv3', 'Mozilla Public License 2.0', 'Boost Software License 1.0', 'None']
    }
])

.then((response) => {
    let readmeText = "";
    readmeText += readmeSections[0].replace("[projectName]", response.projectName);
    readmeText += readmeSections[1].replace("[description]", response.description);
    readmeText += readmeSections[2].replace("[installationProcess]", response.installationProcess);
    readmeText += readmeSections[3].replace("[usageInfo]", response.usageInfo);
    readmeText += readmeSections[4].replace("[contributionGuide]", response.contributionGuide);
    readmeText += readmeSections[5].replace("[testInstructions]", response.testInstructions);

    const license = readmeSections[6].replace("[license]", response.license);
    let licenseText = "";
        if (license === "MIT") {
            licenseText = fs.readFileSync("./utils/MIT-license.txt", "utf8");
        } else {
            licenseText = fs.readFileSync("./utils/boostLicense.txt", "utf8");
        }

    readmeText += readmeSections[6].replace("[license]", response.licenseText);
    readmeText += readmeSections[7].replace("[gitHubUserName]", response.githubUsername);
    readmeText += readmeSections[8].replace("[email]", response.email);

    readmeText = readmeText.replace("~", "");

    // output test
    console.log(readmeText);
        
});





// Function call to initialize app
init();
