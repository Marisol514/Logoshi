const Shape = require('./Shape');

class Triangle extends Shape {
    render() {
        return `<polygon points="150,18 244,182 56,182" fill="${this.color}" />`;
    }
}

class Circle extends Shape {
    render() {
        return `<circle cx="150" cy="100" r="80" fill="${this.color}" />`;
    }
}

class Square extends Shape {
    render() {
        return `<rect x="40" y="40" width="220" height="120" fill="${this.color}" />`;
    }
}

module.exports = { Triangle, Circle, Square, };

  