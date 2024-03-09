const { Circle } = require('../lib/shapes');

describe('Circle class', () => {
    test('Render method', () => {
        const circle = new Circle();
        circle.setColor('red');
        expect(circle.render()).toEqual('<circle cx="150" cy="100" r="80" fill="red" />');
    });
});
