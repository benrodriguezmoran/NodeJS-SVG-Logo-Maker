//Base shape class handles color
class Shape {
    constructor(){
        this.color=''
    }
    setColor(backgroundColor) {
        this.color=backgroundColor
    }
}
//Render method extends base shape
class Circle extends Shape {
    render() {
        return
    }
}
class Square extends Shape {
    render() {
        return
    }
}
class Triangle extends Shape {
    render() {
        return '<polygon points="150, 18 244, 182 56, 182" fill="blue" />'
    }
}
//Export only shape class children
module.exports = {Circle,Square,Triangle};