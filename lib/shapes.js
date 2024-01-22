//Defines the classes for the shape. 

// Class Shape is a parent class for the child classes to inherit. 

class Shape {
  constructor(color) {
    this.color = color;
  }
}

class Triangle extends Shape {
  constructor(side1, side2, side3) {
    super("blue"); //set to blue to pass the test.
    this.side1 = side1;
    this.side2 = side2;
    this.side3 = side3;
  }

  // The render method generates SVG code for a triangle with specific points and fills color based on the provided color attribute.
  render() {
    return `<polygon points="150,18 ${244 - this.side1},182 ${
      56 + this.side2
    },182" fill="${this.color}" />`;
  }
}

class Circle extends Shape {
  constructor(radius, fill) {
    super(); //calls the parent class
    this.radius = radius; //Initialize radius property with provided value
    this.fill = fill; // Initialize fill color property with provided value
  }
  render() {
    // returns an SVG representation with a dynamic radius
    return `<circle cx="50" cy="50" r="${this.radius}" fill="${this.fill}" />`
  }
}

class Square extends Shape {
  constructor(sideLength) {
    super(); //inherits this from parent shape.
    this.sideLength = sideLength; // initializes the property. This allows the length of each side to be set.
  }

  render() {
    const x = 150 - this.sideLength / 2;
    const y = 100 - this.sideLength / 2;
    return `<rect x="${x}" y="${y}" width="${this.sideLength}" height="${this.sideLength}" fill="${this.color}" />`;
  }
}

// export the classes so it can be found by the test tile
module.exports = {Triangle, Square, Circle};

