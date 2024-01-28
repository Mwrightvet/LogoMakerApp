const { validateColor } = require('./colorValidation');


// Helper function to validate color format (basic example)
function validateColor(color, type) {
  const hexColorRegex = /^#([0-9A-Fa-f]{3}){1,2}$/;
  
  // Check the type of color being validated
  if (type === 'text' || type === 'shape') {
    return hexColorRegex.test(color);
  } else {
    throw new Error('Invalid color type');
  }
}

// Helper function to generate SVG content for a triangle
function generateTriangleSVG(text, textColor, shapeColor) {
  return generateSVG('polygon', '150,18 244,182 56,182', text, textColor, shapeColor);
}

// Helper function to generate SVG content for a square
function generateSquareSVG(text, textColor, shapeColor) {
  return generateSVG('rect', '100,50 100,100', text, textColor, shapeColor);
}

// Helper function to generate SVG content for a circle
function generateCircleSVG(text, textColor, shapeColor) {
  return generateSVG('circle', '150,100 50', text, textColor, shapeColor);
}

// Generic helper function to generate SVG content for different shapes
function generateSVG(shape, text, textColor, shapeColor) {
  // Validate colors and return error if invalid
  if (!validateColor(textColor) || !validateColor(shapeColor)) {
    throw new Error('Invalid color format');
  }

  let shapeAttributes = '';

  switch (shape) {
    case 'polygon':
      shapeAttributes = 'points="150,18 244,182 56,182"';
      break;
    case 'rect':
      shapeAttributes = 'x="100" y="50" width="100" height="100"';
      break;
    case 'circle':
      shapeAttributes = 'cx="150" cy="100" r="50"';
      break;
    default:
      throw new Error('Invalid shape');
  }

  const svgContent = `
    <svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
      <${shape} ${shapeAttributes} fill="${shapeColor}" />
      <text x="150" y="110" text-anchor="middle" fill="${textColor}">${text}</text>
    </svg>
  `;

  return svgContent.trim();
}

// Main function to generate SVG based on user input
// Main function to generate SVG based on user input
function generateLogoSVG({ text, textColor, shapeChoice, shapeColor }) {
  // Validate input colors
  const isValidTextColor = validateColor(textColor, 'text');
  const isValidShapeColor = validateColor(shapeColor, 'shape');
  const validText = text.slice(0, 3);

  // Check if both colors are valid before proceeding
  if (!isValidTextColor || !isValidShapeColor) {
    throw new Error('Invalid color format');
  }

  // SVG content based on user input
  switch (shapeChoice) {
    case 'circle':
      return generateCircleSVG(validText, textColor, shapeColor);
    case 'triangle':
      return generateTriangleSVG(validText, textColor, shapeColor);
    case 'square':
      return generateSquareSVG(validText, textColor, shapeColor);
    default:
      return ''; // Handle other cases or provide a default SVG
  }
}

module.exports = { generateLogoSVG, validateColor };
