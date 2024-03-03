const { Circle, Triangle, Square } = require('./shapes');

describe('Circle', () => {
  test('render method should return SVG for circle', () => {
    const circle = new Circle('#FF0000');
    expect(circle.render()).toContain('<circle');
  });
});

describe('Triangle', () => {
  test('render method should return SVG for triangle', () => {
    const triangle = new Triangle('#00FF00');
    expect(triangle.render()).toContain('<polygon');
  });
});

describe('Square', () => {
  test('render method should return SVG for square', () => {
    const square = new Square('#0000FF');
    expect(square.render()).toContain('<rect');
  });
});
