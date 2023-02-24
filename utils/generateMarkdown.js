// function to generate markdown for README
export function generateMarkdown(data) {
return `
# ${data.name}
![GitHub license](https://img.shields.io/badge/license-${data.license}-blue.svg)
## Description

${data.description}

## Table of Contents 

* [Installation](#installation)

* [Usage](#usage)

* [License](#license)

* [Contributing](#contributing)

* [Tests](#tests)

* [Questions](#questions)

## Installation

The command should be run to install dependencies:

* ${data.install}

## Usage

${data.use}

## License

${data.license}
  
## Contributing

${data.contribute}

## Tests

The command should be run to run tests:

* ${data.test}

## Questions

If you have any questions please contact me, my email address is ${data.email}. 
This is my github: [${data.github}](https://github.com/${data.github}/).
  `;
}

//module.exports = generateMarkdown;
