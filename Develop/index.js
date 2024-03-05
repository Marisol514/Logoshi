const readline = require('readline');
const fs = require('fs');
const { Triangle, Circle, Square } = require('./lib/shapes');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function prompt(question) {
    return new Promise((resolve, reject) => {
        rl.question(question, resolve);
    });
}

async function main() {
    const text = await prompt('Enter text (up to 3 characters): ');
    const textColor = await prompt('Enter text color: ');
    const shapeChoice = await prompt('Choose a shape (circle, triangle, square): ');
    const shapeColor = await prompt('Enter shape color: ');

    let shape;
    switch (shapeChoice.toLowerCase()) {
        case 'circle':
            shape = new Circle(shapeColor);
            break;
        case 'triangle':
            shape = new Triangle(shapeColor);
            break;
        case 'square':
            shape = new Square(shapeColor);
            break;
        default:
            console.log('Invalid shape choice.');
            rl.close();
            return;
    }

    const svgContent = shape.render().replace('TEXT', text);
    fs.writeFileSync('./examples/logo.svg', svgContent);
    console.log('Generated logo.svg');
    rl.close();
}

main();
