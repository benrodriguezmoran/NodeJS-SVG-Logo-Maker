class Shape {
    constructor(){
        this.color=''
    }
    setColor(backgroundColor) {
        this.color=backgroundColor
    }
}

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
module.exports = {Circle,Square,Triangle};