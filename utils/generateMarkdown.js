// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(answers) {
  let licenseBadge; 
  switch (answers.license) {
    case "MIT":
      licenseBadge = "![badge](https://img.shields.io/badge/license-MIT-blueviolet)";
      break;
    case "Apache":
      licenseBadge = "![badge](https://img.shields.io/badge/license-Apache-blueviolet)";
      break;
    case "Boost": 
      licenseBadge = "![badge](https://img.shields.io/badge/license-Boost-blueviolet)";
      break;
    case "None":
      licenseBadge = "";
  }
  return licenseBadge;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(answers) {
  let licenseLink;
  switch (answers.license) {
    case "MIT":
      licenseLink = "[MIT](https://spdx.org/licenses/MIT.html";
      break;
    case "Apache":
      licenseLink = "[Apache](https://spdx.org/licenses/Apache-2.0.html";
      break;
    case "Boost":
      licenseLink = "[Boost](https://spdx.org/licenses/BSL-1.0.html)";
      break;
    case "None":
      licenseLink = "";
  }
  return licenseLink; 
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(answers) {
  if (answers.license === "None") {
    return ` `;
  } else {
    return ` ##License 
    ${renderLicenseBadge(answers)}
    Project license : click ${renderLicenseLink(answers)}`;
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(answers) {
  const badge = renderLicenseBadge(answers);
  const links = renderLicenseLink(answers);
  let testReadme = `## Project Title
  #${answers.title}
  
  ## Contents
  
  *[Project Name](#project)
  *[Description](#description)
  *[Github](#github)
  *[Email](#email)
  *[Installation](#installation)
  *[Usage](#usage)
  *[License](#license)
  *[Questions](#questions)

  ## Project Name
  ${answers.project}

  ##Description
  ${answers.description}

  ## Installation 
  Please install the necessary dependencies by running the following comand:

  ${answers.installation}

  ## Usage 
  ${answers.usage}

  ## License
  ${badge}
  This project utilizes the ${links} license.*\n

  ## Github Username
  ${answers.github}

  ## Email 
  ${answers.email}

  Please email or DM me on Github with any questions.

`;

return testReadme;
}

module.exports = generateMarkdown;
