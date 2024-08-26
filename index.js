const { Triangle, Circle, Square } = require("./lib/shapes");
const inquirer = require('inquirer');
const fs = require('fs');

/* <svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
</svg> */

const questions = [
  {
    name: 'text',
    message: 'What should the logo text be?'
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
    error ? console.log(error) : console.log('write successful');
  })
}

inquirer
.prompt(questions)
.then((answers) => {
  writeSVGFile(answers)
})