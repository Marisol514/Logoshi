const readline = require('readline');
const fs = require('fs');
const { Circle, Triangle, Square } = require('./lib/shapes');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function prompt(question) {
  return new Promise((resolve) => {
    rl.question(question, (answer) => {
      resolve(answer);
    });
  });
}

async function main() {
  const text = await prompt('Enter up to three characters for text: ');
  const textColor = await prompt('Enter text color (color keyword or hexadecimal number): ');
  const shapeType = await prompt('Choose a shape (circle, triangle, square): ');
  const shapeColor = await prompt('Enter shape color (color keyword or hexadecimal number): ');

  let shape;
  switch (shapeType.toLowerCase()) {
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
      console.log('Invalid shape type.');
      rl.close();
      return;
  }

  const svgContent = `
    <svg width="300" height="200">
      ${shape.render()}
      <text x="10" y="20" fill="${textColor}">${text}</text>
    </svg>
  `;

  fs.writeFileSync('examples/logo.svg', svgContent);
  console.log('Generated logo.svg');
  rl.close();
}

main();