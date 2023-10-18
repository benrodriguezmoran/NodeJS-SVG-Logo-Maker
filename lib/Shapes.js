//Base shape class handles color
class Shape {
    constructor(){
        this.color='white'
    }
    setColor(backgroundColor) {
        this.color=(backgroundColor)
    }
}
//Render method extends base shape
class Square extends Shape {
    
    render() {
        return `<polygon points="56, 18 244, 18 244, 182 56, 182" fill="${this.color}"/>`
    }
}
class Circle extends Shape {
    
    render() {
        return  `<circle cx="150" cy="100" r="80" fill="${this.color}"/>`
    }
}
class Triangle extends Shape {
    
    render() {
        return `<polygon points="150, 18 244, 182 56, 182" fill="${this.color}" />`
    }
}
//Export only shape class children
module.exports = {Circle,Square,Triangle};