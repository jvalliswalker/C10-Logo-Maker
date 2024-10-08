class Polygon {
  constructor(
    shapeColor, 
    pointsArray, 
    text, 
    textColor='white'
  ){
    this.shapeColor = shapeColor;
    this.pointsArray = pointsArray;
    this.text = text;
    this.textColor = textColor;
    this.textX = 135;
    this.textY = 100;
  }

  renderShape(){
    const pointsStringArray = [];
    
    for(const obj of this.pointsArray){
      pointsStringArray.push(`${obj.x},${obj.y}`);
    }

    return [
      `<polygon points='${pointsStringArray.join(' ')}'`,
      `fill='${this.shapeColor}'/>`
    ].join(' ');
  }

  renderText(){
    return `<text x='50%' y='50%' dominant-baseline='middle' text-anchor='middle' style='font-size: 70; font-family: arial' fill='${this.textColor}'>${this.text}</text>`;
  }

  render() {
    return [this.renderShape(), this.renderText()].join('')
  }
}

class Triangle extends Polygon {
  constructor(shapeColor, text, textColor='white') {
    super(
      shapeColor, 
      [{x: 30,y: 200}, {x: 150,y: 0}, {x: 270,y: 200}], 
      text, 
      textColor
    );
  }

  renderText(){
    return `<text x='50%' y='65%' dominant-baseline='middle' text-anchor='middle' style='font-size: 50; font-family: arial' fill='${this.textColor}'>${this.text}</text>`;
  }
}

class Circle extends Polygon {
  constructor(shapeColor, text, textColor='white') {
    super(shapeColor, null, text, textColor);
  }

  renderShape(){
    return `<circle r='100' cx='150' cy='100' fill='${this.shapeColor}'/>`;
  }
}

class Square extends Polygon {
  constructor(shapeColor, text, textColor='white') {
    super(shapeColor, null, text, textColor);
  }

  renderShape(){
    return `<rect x='50' width='200' height='200' fill='${this.shapeColor}'/>`;
  }
}

module.exports = { Triangle, Circle, Square, Polygon };
