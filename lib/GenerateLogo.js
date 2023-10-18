const {Circle, Square, Triangle} = require('../lib/Shapes');

class Logo {
    constructor(){
        this.backgroundShape = '';
        
    }
    generate(shapeSelection, shapeColor, textColor, logoText) {
        switch (shapeSelection) {
            case 'Square':
                this.backgroundShape = new Square();
                break;
            case 'Circle':
                this.backgroundShape = new Circle();
                break;
            case 'Triangle':
                this.backgroundShape = new Triangle();
                break;
        
            default:
                throw new Error('No shape defined')

        }
        this.backgroundShape.setColor(shapeColor);
        this.backgroundShape = this.backgroundShape.render();
        return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
    ${this.backgroundShape}
    <text x="150" y="125" font-size="60" text-anchor="middle" fill="${textColor}">${logoText}</text>
</svg>`
    }
}
module.exports = Logo;