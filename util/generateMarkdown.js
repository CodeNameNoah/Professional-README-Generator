// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license) {
    const badges = {
      MIT: "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)",
      "Apache-2.0":
        "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)",
      "GPL-3.0":
        "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)",
    };

    return badges[license] || "";
  } else {
    return "";
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license) {
    const licenseLinks = {
      MIT: "https://opensource.org/licenses/MIT",
      "Apache-2.0": "https://opensource.org/licenses/Apache-2.0",
      "GPL-3.0": "https://www.gnu.org/licenses/gpl-3.0",
      // Add more licenses here as needed
    };

    return licenseLinks[license] || "";
  } else {
    return "";
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license) {
    const licenseTexts = {
      MIT: "This project is licensed under the terms of the MIT license. See the [LICENSE](./LICENSE) file for details.",
      "Apache-2.0":
        "This project is licensed under the terms of the Apache License 2.0. See the [LICENSE](./LICENSE) file for details.",
      "GPL-3.0":
        "This project is licensed under the terms of the GNU General Public License v3.0. See the [LICENSE](./LICENSE) file for details.",
      // Add more licenses here as needed
    };

    return licenseTexts[license] || "";
  } else {
    return "";
  }
}

// TODO: Create a function to generate markdown for README
// ? DONE
function generateMarkdown(data) {
  const licenseSection = renderLicenseSection(data.License);

  return ` # ${data.Title}
  https://github.com/${data.Username}/${data.Title}
  ## Description
  ${data.Description}
  ## Licensing:
  ## Table of Contents 
  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#license)
  * [Contributors](#contributors)
  * [Tests](#tests)
  * [Questions](#questions)
  ## Installation
  The following necessary dependencies must be installed to run the application properly: ${data.Installation}
  ## Usage
  In order to use this app, ${data.Usage}
  ## License
  [![license](https://img.shields.io/badge/license-${data.License}-blue)](https://shields.io)

  * ${licenseSection}
  ## Contributors
  ​Contributors: ${data.Contributors}
  ## Tests
  The following is needed to run the test: ${data.Tests}
  ## Questions
  If you have any questions about the repo, open an issue or contact ${data.Username} directly at : ${data.Email}.
  `;
}

module.exports = generateMarkdown;
