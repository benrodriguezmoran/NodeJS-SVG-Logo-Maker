const inquirer = require('inquire');
const fs = require('fs');
const generateLogo = require('./lib/generateLogo');
inquirer
    .prompt(questions)
    .then((answers) => {
        ({shape, color, text} = answers);
        const logo = generateLogo
        fs.writeFile('./output/logo.svg')
    })
    