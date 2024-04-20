// colorValidation.js

function isValidKeywordColor(color) {
  // If the color is a string and not empty, consider it valid
  return typeof color === 'string' && color.trim().length > 0;
}

function isValidHexColor(color) {
  // Implement validation for hexadecimal colors (e.g., '#RRGGBB' or '#RGB')
  // Return true if valid, false otherwise
  const hexColorRegex = /^#([0-9A-Fa-f]{3}){1,2}$/;
  return hexColorRegex.test(color);
}

function validateColor(color) {
  // Check if the color is a valid keyword color or a valid hexadecimal color
  return isValidKeywordColor(color) || isValidHexColor(color);
}

module.exports = { validateColor };
