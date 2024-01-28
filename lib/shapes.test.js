// Tests for each shape class that the render methods work as expected. 

const { blueGrey, green } = require('@mui/material/colors');
const { Triangle, Circle, Square } = require('../lib/shapes');

test('Render triangle', () => {
    const triangle = new Triangle(94, 188, 0, '#263238', 'Text', '#81c784');
    const svgOutput = triangle.render();

    // Check the structure and content without specific color values
    expect(svgOutput).toContain('<polygon points="150,18 150,182 244,182"');
    expect(svgOutput).toContain('<text x="100" y="75">Text</text>');
});

test('Render circle', () => {
    const circle = new Circle(50, '#e65100', 'Text', '#42a5f5');
    const svgOutput = circle.render();

    // Check the structure and content without specific color values
    expect(svgOutput).toContain('<circle cx="50" cy="50" r="50"');
    expect(svgOutput).toContain('<text x="50" y="50">Text</text>');
});

test('Render square', () => {
    const square = new Square(100, '#81c784', 'Text', '#ffff8d');
    const svgOutput = square.render();

    // Check the structure and content without specific color values
    expect(svgOutput).toContain('<rect x="100" y="');
    expect(svgOutput).toContain('<text x="150" y="100">Text</text>');
});

