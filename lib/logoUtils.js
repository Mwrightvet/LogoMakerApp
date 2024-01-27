function generateLogoSVG({ text, textColor, shapeChoice, shapeColor }) {
    // Validate input and provide default values if needed
    const validText = text.slice(0, 3); // Take up to three characters
    const validTextColor = validateColor(textColor) ? textColor : 'black';
    const validShapeChoice = ['circle', 'triangle', 'square'].includes(shapeChoice) ? shapeChoice : 'circle';
    const validShapeColor = validateColor(shapeColor) ? shapeColor : 'blue';
  
    // SVG content based on user input
    switch (validShapeChoice) {
      case 'circle':
        return generateCircleSVG(validText, validTextColor, validShapeColor);
      case 'triangle':
        return generateTriangleSVG(validText, validTextColor, validShapeColor);
      case 'square':
        return generateSquareSVG(validText, validTextColor, validShapeColor);
      default:
        return ''; // Handle other cases or provide a default SVG
    }
  }
  
  // Helper function to generate SVG content for a circle
  function generateCircleSVG(text, textColor, shapeColor) {
    const svgContent = `
      <svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
        <circle cx="150" cy="100" r="50" fill="${shapeColor}" />
        <text x="150" y="110" text-anchor="middle" fill="${textColor}">${text}</text>
      </svg>
    `;
    return svgContent.trim(); // Remove leading/trailing whitespace
  }
  
  // Helper function to generate SVG content for a triangle
  function generateTriangleSVG(text, textColor, shapeColor) {
    const svgContent = `
      <svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
        <polygon points="150,18 244,182 56,182" fill="${shapeColor}" />
        <text x="150" y="110" text-anchor="middle" fill="${textColor}">${text}</text>
      </svg>
    `;
    return svgContent.trim();
  }
  
  // Helper function to generate SVG content for a square
  function generateSquareSVG(text, textColor, shapeColor) {
    const svgContent = `
      <svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
        <rect x="100" y="50" width="100" height="100" fill="${shapeColor}" />
        <text x="150" y="110" text-anchor="middle" fill="${textColor}">${text}</text>
      </svg>
    `;
    return svgContent.trim();
  }
  
  // Helper function to validate color format (basic example)
  function validateColor(color) {
    // You may implement more comprehensive color validation if needed
    // This is a basic example validating if the color is a valid hexadecimal value
    const hexColorRegex = /^#([0-9A-Fa-f]{3}){1,2}$/;
    return hexColorRegex.test(color);
  }
  
  module.exports = { generateLogoSVG };
  