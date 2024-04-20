// logoUtils.js

const { validateColor } = require('./colorValidation');

function generateSVG(shape, text, textColor, shapeColor) {
  // Validate colors using the imported validateColor function
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
  <svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
    <g>
      <${shape} ${shapeAttributes} fill="${shapeColor}" />
      <text x="150" y="130" text-anchor="middle" fill="${textColor}">${text}</text>
    </g>
  </svg>
`;

  return svgContent.trim();
}

// Helper functions to generate SVG content for specific shapes
function generateTriangleSVG(text, textColor, shapeColor) {
  return generateSVG('polygon', text, textColor, shapeColor);
}

function generateSquareSVG(text, textColor, shapeColor) {
  return generateSVG('rect', text, textColor, shapeColor);
}

function generateCircleSVG(text, textColor, shapeColor) {
  return generateSVG('circle', text, textColor, shapeColor);
}

// Main function to generate SVG based on user input
function generateLogoSVG({ text, textColor, shapeChoice, shapeColor }) {
  // Validate input colors using the imported validateColor function
  const isValidTextColor = validateColor(textColor, 'text');
  const isValidShapeColor = validateColor(shapeColor, 'shape');

  // Check if both colors are valid before proceeding
  if (!isValidTextColor || !isValidShapeColor) {
    throw new Error('Invalid color format');
  }

  // SVG content based on user input
  switch (shapeChoice) {
    case 'circle':
      return generateCircleSVG(text, textColor, shapeColor);
    case 'triangle':
      return generateTriangleSVG(text, textColor, shapeColor);
    case 'square':
      return generateSquareSVG(text, textColor, shapeColor);
    default:
      return ''; // Handle other cases or provide a default SVG
  }
}

module.exports = { generateLogoSVG, validateColor };
