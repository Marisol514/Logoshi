class Shape {
    constructor(color) {
      this.color = color;
    }
  
    render() {
      throw new Error('Method not implemented');
    }
  }
  
  class Circle extends Shape {
    render() {
      return `<svg width="300" height="200"><circle cx="150" cy="100" r="50" fill="${this.color}" /></svg>`;
    }
  }
  
  class Triangle extends Shape {
    render() {
      return `<svg width="300" height="200"><polygon points="150,50 100,150 200,150" fill="${this.color}" /></svg>`;
    }
  }
  
  class Square extends Shape {
    render() {
      return `<svg width="300" height="200"><rect x="50" y="50" width="200" height="100" fill="${this.color}" /></svg>`;
    }
  }
  
  module.exports = {
    Circle,
    Triangle,
    Square
  };
  