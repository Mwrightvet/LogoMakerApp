// Helper function to validate color format

function validateColor(color, colorType) {
  const hexColorRegex = /^#([0-9A-Fa-f]{3}){1,2}$/;

  // Check the color type and apply specific validation rules
  if (colorType === 'shape' || colorType === 'text') {
    return hexColorRegex.test(color);
  } else {
    // If the color type is neither 'shape' nor 'text', return false (invalid)
    return false;
  }
}