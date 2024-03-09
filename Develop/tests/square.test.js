const { Square } = require('../lib/shapes');

describe('Square class', () => {
    test('Render method', () => {
        const square = new Square();
        square.setColor('green');
        expect(square.render()).toEqual('<rect x="40" y="40" width="220" height="120" fill="green" />');
    });
});
