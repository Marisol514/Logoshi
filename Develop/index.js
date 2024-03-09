const inquirer = require('inquirer');
const fs = require('fs');
const { Triangle, Circle, Square, Heart } = require('./lib/shapes');

async function promptUser() {
    const userInput = await inquirer.prompt([
        {
            type: 'input',
            name: 'text',
            message: 'Enter up to three characters for the logo:'
        },
        {
            type: 'input',
            name: 'textColor',
            message: 'Enter text color (keyword or hexadecimal):'
        },
        {
            type: 'list',
            name: 'shape',
            message: 'Choose a shape:',
            choices: ['circle', 'triangle', 'square', 'heart']
        },
        {
            type: 'input',
            name: 'shapeColor',
            message: 'Enter shape color (keyword or hexadecimal):'
        }
    ]);
    return userInput;
}

async function main() {
    const userInput = await promptUser();
    const { text, textColor, shape, shapeColor } = userInput;

    let svgContent = '';
    switch (shape) {
        case 'circle':
            const circle = new Circle();
            circle.setColor(shapeColor);
            svgContent = circle.render();
            break;
        case 'triangle':
            const triangle = new Triangle();
            triangle.setColor(shapeColor);
            svgContent = triangle.render();
            break;
        case 'square':
            const square = new Square();
            square.setColor(shapeColor);
            svgContent = square.render();
            break;
        
    }

    // Adding text with specified text color
    svgContent += `<text x="150" y="100" fill="${textColor}" text-anchor="middle">${text}</text>`;

    const logoName = `${shape}_logo.svg`;
    fs.writeFile(`./examples/${logoName}`, `<svg xmlns="http://www.w3.org/2000/svg" width="300" height="200">${svgContent}</svg>`, err => {
        if (err) throw err;
        console.log(`Generated examples/${logoName}`);
    });
}

main();


