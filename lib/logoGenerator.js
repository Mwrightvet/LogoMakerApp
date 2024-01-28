// Defines the functions related to logo generation.

const inquirer = require('inquirer');
const fs = require('fs');
const { generateLogoSVG } = require('./logoUtils.js');
const { validateColor } = require('./colorValidation.js');

async function promptUser() {
  try {
    // Prompt user for text input
    const userInput = await inquirer.prompt({
      type: 'input',
      name: 'text',
      message: 'Enter up to three characters:',
      validate: (input) => input.length <= 3,
    });

    // Prompt user for text color
    const { textColor } = await inquirer.prompt({
      type: 'input',
      name: 'textColor',
      message: 'Enter text color (keyword or hexadecimal):',
      validate: (color) => validateColor(color) || 'Invalid color format',

    });

    // Prompt user for shape
    const { shape } = await inquirer.prompt({
      type: 'list',
      name: 'shape',
      message: 'Choose a shape:',
      choices: ['circle', 'triangle', 'square'],
    });

    // Prompt user for shape color
    const { shapeColor } = await inquirer.prompt({
      type: 'input',
      name: 'shapeColor',
      message: 'Enter shape color (keyword or hexadecimal):',
      validate: (color) => validateColor(color) || 'Invalid color format',
    });

    return { ...userInput, textColor, shapeChoice: shape, shapeColor };
  } catch (error) {
    console.error('Error during user prompts:', error);
  }
}

function generateSVGFile(data) {
    try {
      // Generate SVG content based on user input
      const svgContent = generateLogoSVG(data);
  
      // Define the path for the examples directory
      const examplesPath = './examples';
  
      // Create the examples directory if it doesn't exist
      if (!fs.existsSync(examplesPath)) {
        fs.mkdirSync(examplesPath);
      }
  
      // Write SVG content to examples/logo.svg file
      fs.writeFileSync(`${examplesPath}/logo.svg`, svgContent);
  
      console.log('Generated examples/logo.svg');
    } catch (error) {
      console.error('Error generating SVG file:', error);
    }
  }

// Main function to execute the logo generation process
async function generateLogo() {
  try {
    // Prompt user for input
    const userInput = await promptUser();

    // Generate and save the SVG file
    generateSVGFile(userInput);
  } catch (error) {
    console.error('Error during logo generation:', error);
  }
}

// Run the logo generation process
generateLogo().then(() => {
    console.log('Logo generation completed successfully.');
  });
  