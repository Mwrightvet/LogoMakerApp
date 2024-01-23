// Tests for each shape class that the render methods work as expected. 

// const Triangle = require('../shapes/Triangle'); //path to the Triangle class
// const Circle = require('../shapes/Circle'); //path to the Circle class
// const Square = require('../shapes/Square'); //path to the Square class
const { Triangle, Circle, Square } = require('../lib/shapes');

test('Render triangle with color blue', () => {
    const triangle = new Triangle(94, 188, 0, 'blue'); // Pass the color
    triangle.setColor('blue');
    expect(triangle.render()).toEqual('<polygon points="150,18 150,182 244,182" fill="blue" />');
});

test('Render circle with color green', () => {
    const circle = new Circle(50, 'green'); // Pass the radius and color
    circle.setColor('green');
    expect(circle.render()).toEqual('<circle cx="50" cy="50" r="50" fill="green" />');
});

test('Render square with the color green', () => {
  const square = new Square(100, 'green'); // Pass the side length and color
  square.setColor('green');
  // Adjust the expected y-coordinate based on the calculated value in the render method
  const expectedSVG = `<rect x="100" y="${100 - 100 / 2}" width="100" height="100" fill="green" />`;
  expect(square.render()).toEqual(expectedSVG);
});