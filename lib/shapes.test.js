// Tests for each shape class that the render methods work as expected. 

// const Triangle = require('../shapes/Triangle'); //path to the Triangle class
// const Circle = require('../shapes/Circle'); //path to the Circle class
// const Square = require('../shapes/Square'); //path to the Square class
const { Triangle, Circle, Square } = require('../lib/shapes');


test('Render triangle with color blue', () => {
    const triangle = new Triangle(94, 188, 0); // Adjust side lengths as needed
    triangle.setColor('blue');
    expect(triangle.render()).toEqual('<polygon points="150,18 150,182 244,182" fill="blue" />');
  });

test('Render circle with color green', () => {
    const circle = new Circle(50); //radius 
    circle.setColor('green');
    expect(circle.render()).toEqual('<circle cx="150" cy="100" r="50" fill="green" />');
});

test('Render square with the color green', () => {
    const square = new Square(); // 
    square.setColor('green');
    expect(square.render()).toEqual('<square cx="150" cy"100" fill="green" />');

})


