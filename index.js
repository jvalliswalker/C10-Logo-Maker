// Imports
const { Triangle, Circle, Square } = require("./lib/shapes");
const inquirer = require('inquirer');
const fs = require('fs');

// Variables

const validColors = JSON.parse(fs.readFileSync('colors.json'));

const questions = [
  {
    name: 'text',
    message: 'What should the logo text be? (max three characters)',
    validate: validateLogoText
  },
  {
    name: 'textColor',
    message: 'What should the logo text color be? (choose a name or hexadecimal value)',
    validate: validateColor
  },
  {
    name: 'shape',
    message: 'Choose a logo shape',
    type: 'list',
    choices: [
      'Circle',
      'Square',
      'Triangle'
    ]
  },
  {
    name: 'shapeColor',
    message: 'What color should the shape be? (choose a name or hexadecimal value)',
    validate: validateColor
  }
];

const shapeMap = {
  'Circle': Circle,
  'Square': Square,
  'Triangle': Triangle
};

// Script

init();

// Functions

function validateColor(color){

  // Check if valid svg color name
  const isValidColorName = validColors.includes(color.toLowerCase())
  
  // Check if valid hexadecimal value
  let isValidHexadecimalColor = false;
  
  if(color[0] == '#'){
    const regexHexadecimalPair = /^[A-Fa-f0-9]{2}$/;
    const regexTwoCharacterSplitter = /.{1,2}/g;
    const hexadecimalPairs = color.replace('#','').match(regexTwoCharacterSplitter);
    const pairValidation = [];
    console.log(hexadecimalPairs);

    for(const pair of hexadecimalPairs){
      pairValidation.push(regexHexadecimalPair.test(pair));
    }

    if(pairValidation.every(pair => pair === true) && hexadecimalPairs.length == 3){
      isValidHexadecimalColor = true;
    }
  }

  // Check if valid rgb value
  let isValidRGBValue = false;

  if(color.slice(0,4) == 'rgb(' && color.slice(-1) == ')'){

    const digitsRaw = color.replace('rgb(','').replace(')','').split(',');
    const digitsValidation = [];

    for(const digit of digitsRaw){
      const parsedValue = parseInt(digit);
      if(!isNaN(parsedValue)){
        digitsValidation.push(true);
      }
    }

    if(digitsRaw.length == 3 && digitsValidation.every(digit => digit == true)){
      isValidRGBValue = true;
    }
  }

  // If is valid color name, return true
  return isValidColorName || isValidHexadecimalColor || isValidRGBValue;
}

function validateLogoText(logoText){
  const reg = /^[A-Za-z0-9]{1,3}$/;
  return reg.test(logoText);
}

function writeSVGFile(answers) {

  const shapeClass = shapeMap[answers.shape];
  const shape = new shapeClass(
    answers.shapeColor,
    answers.text,
    answers.textColor
  );

  const fileData = [
    `<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">`,
    shape.render(),
    `</svg>`
  ];

  fs.writeFile('logo.svg', fileData.join('\n'), (error) => {
    error ? console.log(error) : console.log('Generated logo.svg');
  })
}


function init(){


  inquirer
  .prompt(questions)
  .then((answers) => {
    writeSVGFile(answers);
  })
}