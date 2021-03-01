// packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
//const genFile = require('./utils/generateMarkdown');

// array of questions for user input
const questions = [];

//License variable
let licenseText = "";
// function to write README file
function writeFile(fileName, data) {
    fs.writeFileSync(path.join(process.cwd(), fileName), data)
}

// function to initialize README file
function init() {inquirer.prompt(questions).then((answers) => {
    console.log(' Your README is ready.');
    var readMe = writeFile(answers);
    writeFile("README.md", readMe)
})

const baseTemplate = fs.readFileSync("./utils/baseTemplate.txt", "utf8");
const sections = baseTemplate.split("~");

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
        choices: ['MIT', 'APACHE 2.0', 'Boost']
    }
])

.then((response) => {
    let readmeTxt = "";
    readmeTxt += sections[0].replace("[projectName]", response.projectName);
    readmeTxt += sections[1].replace("[description]", response.description);
    readmeTxt += sections[2].replace("[installationProcess]", response.installationProcess);
    readmeTxt += sections[3].replace("[usageInfo]", response.usageInfo);
    readmeTxt += sections[4].replace("[contributionGuide]", response.contributionGuide);
    readmeTxt += sections[5].replace("[testInstructions]", response.testInstructions);

    
    readmeTxt += sections[6].replace("[license]", response.licenseTxt);
    const license = sections[6].replace("[license]", response.license);
    
        if (license === "MIT") {
            licenseTxt = fs.readFileSync("./utils/MIT-license.txt", "utf8");
        } else if (license === "Boost") {
            licenseTxt = fs.readFileSync("./utils/boostlicense.txt", "utf8");
        } else license === "Apache 2.0"
            licenseTxt = fs.readFileSync("./utils/apachelicesnse.txt", "utf8");

    readmeTxt += sections[7].replace("[gitHubUserName]", response.githubUsername);
    readmeTxt += sections[8].replace("[email]", response.email);

    readmeTxt = readmeTxt.replace("~", "");

    // output test
    console.log(readmeText);
        
});






// Function call to initialize app
init();
