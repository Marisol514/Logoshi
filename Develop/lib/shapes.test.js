const { Triangle, Circle, Square } = require('./shapes');

test('Triangle renders correctly', () => {
    const triangle = new Triangle('red');
    expect(triangle.render()).toContain('<polygon');
    expect(triangle.render()).toContain('fill="red"');
});

test('Circle renders correctly', () => {
    const circle = new Circle('blue');
    expect(circle.render()).toContain('<circle');
    expect(circle.render()).toContain('fill="blue"');
});

test('Square renders correctly', () => {
    const square = new Square('#00FF00');
    expect(square.render()).toContain('<rect');
    expect(square.render()).toContain('fill="#00FF00"');
});
