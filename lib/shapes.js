// Defines the classes for the shape.

// Class Shape is a parent class for the child classes to inherit.
class Shape {
  constructor(shapeColor, text, textColor) {
    this.shapeColor = shapeColor;
    this.text = text;
    this.textColor = textColor;
  }

  // Method to render text (common for all shapes)
  renderText(x, y) {
    return `<text x="${x}" y="${y}" fill="${this.textColor}">${this.text}</text>`;
  }
}

class Triangle extends Shape {
  constructor(side1, side2, side3, shapeColor, text, textColor) {
    super(shapeColor, text, textColor);
    this.side1 = side1;
    this.side2 = side2;
    this.side3 = side3;
  }

  render() {
    return `<polygon points="150,18 ${244 - this.side1},182 ${
      56 + this.side2
    },182" fill="${this.shapeColor}" />${this.renderText('100', '75')}`;
  }
}

class Circle extends Shape {
  constructor(radius, shapeColor, text, textColor) {
    super(shapeColor, text, textColor);
    this.radius = radius;
  }

  render() {
    return `<circle cx="50" cy="50" r="${this.radius}" fill="${this.shapeColor}" />${this.renderText('50', '50')}`;
  }
}

class Square extends Shape {
  constructor(sideLength, shapeColor, text, textColor) {
    super(shapeColor, text, textColor);
    this.sideLength = sideLength;
  }

  render() {
    const x = 150 - this.sideLength / 2;
    const y = 100 - this.sideLength / 2;
    return `<rect x="${x}" y="${y}" width="${this.sideLength}" height="${this.sideLength}" fill="${this.shapeColor}" />${this.renderText('150', '100')}`;
  }
}

// export the classes so it can be found by the test file
module.exports = { Triangle, Square, Circle };
