const inquirer = require('inquirer');
const fs = require('fs');
const Logo = require('./lib/GenerateLogo');

const questions = [
    {
        type: 'list',
        name: 'shape',
        message: 'Choose a shape:',
        choices: ['Square','Circle','Triangle']
    },
    {
        type: 'list',
        name: 'shapeColor',
        message: 'Choose a background color:',
        choices: ['Red', 'Orange', 'Yellow', 'Green', 'Blue', 'Indigo', 'Violet']
    },
    {
        type: 'list',
        name: 'textColor',
        message: 'Choose a text color:',
        choices: ['Red', 'Orange', 'Yellow', 'Green', 'Blue', 'Indigo', 'Violet']
    },
    {
        type: 'maxlength-input',
        message: 'Please enter three characters.',
        name: 'logoText',
        maxLength: 3,
    },
]
function init(){
    inquirer
        .prompt(questions)
        .then((answers) => {
            ({shape, shapeColor, textColor, logoText} = answers);
            const logo = new Logo();
            const SVG = logo.generate(shape, shapeColor, textColor, logoText)
            fs.writeFile('./output/logo.svg', SVG, error =>{
                if (error){
                    throw error;
                }
                else {console.log('Written to /output/logo.svg!')}
            });
        })
}
init();