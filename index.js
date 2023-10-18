const inquirer = require('inquire');
const fs = require('fs');
const generateLogo = require('./lib/GenerateLogo');

const questions = [
    {
        type: 'list',
        name: 'shape',
        message: 'Choose a shape:',
        choices: ['Square','Circle','Triangle']
    },
    {
        type: 'list',
        name: 'color',
        message: 'Choose a background color:',
        choices: ['Red', 'Orange', 'Yellow', 'Green', 'Blue', 'Indigo', 'Violet']
    },
    {
        type: 'maxlength-input',
        message: 'Please enter three characters.',
        name: 'text',
        maxLength: 3,
    },
]
inquirer
    .prompt(questions)
    .then((answers) => {
        ({shape, color, text} = answers);
        const logo = generateLogo;
        fs.writeFile('./output/logo.svg');
    })
    