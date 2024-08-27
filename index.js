const { Triangle, Circle, Square } = require("./lib/shapes");
const inquirer = require('inquirer');
const fs = require('fs');

/* <svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
</svg> */

// Regex support
// https://stackoverflow.com/a/15288645/8032508

const questions = [
  {
    name: 'text',
    message: 'What should the logo text be? (max three characters)',
    validate: validateLogoText
  },
  {
    name: 'textColor',
    message: 'What should the logo text color be? (choose a name or hexadecimal value)'
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
    message: 'What color should the shape be? (choose a name or hexadecimal value)'
  }
];

const shapeMap = {
  'Circle': Circle,
  'Square': Square,
  'Triangle': Triangle
};

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

inquirer
.prompt(questions)
.then((answers) => {
  writeSVGFile(answers);
})