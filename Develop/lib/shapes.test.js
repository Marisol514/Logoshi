const { Triangle } = require('./shapes');

test('Triangle render method', () => {
    const triangle = new Triangle();
    triangle.setColor('blue');
    expect(triangle.render()).toEqual('<polygon points="150,18 244,182 56,182" fill="blue" />');
});
