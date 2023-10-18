const {Circle, Square, Triangle} = require('../lib/Shapes');

class generateLogo {
    constructor(shape, shapeColor, textColor, logoText) {
        this.shape = new shape(shapeColor)
        return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
        ${backgroundShape}
        <text x="150" y="125" font-size="60" text-anchor="middle" fill="${textColor}">${logoText}</text>
        </svg>`
    }
}